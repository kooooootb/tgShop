import asyncio
import logging
import json

from aiogram import Bot, types
from aiogram.utils import executor
from aiogram.dispatcher import Dispatcher
from aiogram.types.message import ContentType
from aiogram.types import ReplyKeyboardRemove, \
    ReplyKeyboardMarkup, KeyboardButton, \
    InlineKeyboardMarkup, InlineKeyboardButton

from message import MESSAGES
from config import BOT_TOKEN, PAYMENTS_PROVIDER_TOKEN, TIME_MACHINE_IMAGE_URL

logging.basicConfig(format=u'%(filename)+13s [ LINE:%(lineno)-4s] %(levelname)-8s [%(asctime)s] %(message)s',
                    level=logging.INFO)

loop = asyncio.get_event_loop()
bot = Bot(BOT_TOKEN)
dp = Dispatcher(bot, loop=loop)

# Setup prices !!!From json file
PRICES = [
    types.LabeledPrice(label='Настоящая Машина Времени', amount=4200000),
    types.LabeledPrice(label='Подарочная упаковка', amount=30000)
]

#хз что
TELEPORTER_SHIPPING_OPTION = types.ShippingOption(
    id='teleporter',
    title='Всемирный* телепорт'
).add(types.LabeledPrice('Телепорт', 1000000))

#Способы доставки
RUSSIAN_POST_SHIPPING_OPTION = types.ShippingOption(
    id='ru_post', title='Почтой России')
RUSSIAN_POST_SHIPPING_OPTION.add(
    types.LabeledPrice(
        'Деревянный ящик с амортизирующей подвеской внутри', 100000)
)
RUSSIAN_POST_SHIPPING_OPTION.add(
    types.LabeledPrice('Срочное отправление (5-10 дней)', 500000)
)

PICKUP_SHIPPING_OPTION = types.ShippingOption(id='pickup', title='Самовывоз')
PICKUP_SHIPPING_OPTION.add(types.LabeledPrice('Самовывоз в Москве', 50000))




@dp.message_handler(commands=['start'])
async def process_start_command(message: types.Message):
    webAppTest = types.WebAppInfo(url='https://dimakpa.github.io/')
    one_butt = KeyboardButton(text="Тестовая страница", web_app=webAppTest)
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True).add(one_butt)
    await message.reply(MESSAGES['start'], reply_markup=keyboard)


@dp.message_handler(commands=['help'])
async def process_help_command(message: types.Message):
    await message.reply(MESSAGES['help'])

@dp.message_handler(commands=['terms'])
async def process_terms_command(message: types.Message):
    await message.reply(MESSAGES['terms'], reply=False)


@dp.message_handler(commands=['buy'])
async def process_buy_command(message: types.Message):
    if PAYMENTS_PROVIDER_TOKEN.split(':')[1] == 'TEST':
        await bot.send_message(message.chat.id, MESSAGES['pre_buy_demo_alert'])

    await bot.send_invoice(message.chat.id,
                           title=MESSAGES['tm_title'],
                           description=MESSAGES['tm_description'],
                           provider_token=PAYMENTS_PROVIDER_TOKEN,
                           currency='rub',
                           photo_url=TIME_MACHINE_IMAGE_URL,
                           photo_height=512,  # !=0/None or picture won't be shown
                           photo_width=512,
                           photo_size=512,
                           need_email=True,
                           need_phone_number=True,
                           # need_shipping_address=True,
                           is_flexible=True,  # True If you need to set up Shipping Fee
                           prices=PRICES,
                           start_parameter='time-machine-example',
                           payload='some-invoice-payload-for-our-internal-use')


# @dp.shipping_query_handler(func=lambda query: True)
# async def process_shipping_query(shipping_query: types.ShippingQuery):
#     print('shipping_query.shipping_address')
#     print(shipping_query.shipping_address)
#
#     if shipping_query.shipping_address.country_code == 'AU':
#         return await bot.answer_shipping_query(
#             shipping_query.id,
#             ok=False,
#             error_message=MESSAGES['AU_error']
#         )
#
#     shipping_options = [TELEPORTER_SHIPPING_OPTION]
#
#     if shipping_query.shipping_address.country_code == 'RU':
#         shipping_options.append(RUSSIAN_POST_SHIPPING_OPTION)
#
#         if shipping_query.shipping_address.city == 'Москва':
#             shipping_options.append(PICKUP_SHIPPING_OPTION)
#
#     await bot.answer_shipping_query(
#         shipping_query.id,
#         ok=True,
#         shipping_options=shipping_options
#     )

@dp.message_handler(content_types=ContentType.SUCCESSFUL_PAYMENT)
async def process_successful_payment(message: types.Message):
    print('successful_payment:')
    pmnt = message.successful_payment.to_python()
    for key, val in pmnt.items():
        print(f'{key} = {val}')

    await bot.send_message(
        message.chat.id,
        MESSAGES['successful_payment'].format(
            total_amount=message.successful_payment.total_amount // 100,
            currency=message.successful_payment.currency
        )
    )
#
# @dp.pre_checkout_query_handler(func=lambda query: True)
# async def process_pre_checkout_query(pre_checkout_query: types.PreCheckoutQuery):
#     print('order_info')
#     print(pre_checkout_query.order_info)
#
#     if hasattr(pre_checkout_query.order_info, 'email') and (pre_checkout_query.order_info.email == 'vasya@pupkin.com'):
#         return await bot.answer_pre_checkout_query(
#             pre_checkout_query.id,
#             ok=False,
#             error_message=MESSAGES['wrong_email'])
#
#     await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)

@dp.message_handler(content_types="web_app_data")  # получаем отправленные данные
async def answer(webAppMes):
    # print(webAppMes)  # вся информация о сообщении
    json_object = json.loads(webAppMes.web_app_data.data)  # конкретно то что мы передали в бота
    # await bot.send_message(webAppMes.chat.id, json_object)
    # print(type(json_object))
    await bot.send_message(webAppMes.chat.id, json_object['employees'][0]['description'])
    await bot.send_message(webAppMes.chat.id, json_object['employees'][0]['price'])
    await bot.send_message(webAppMes.chat.id, json_object['employees'][0]['in_stock'])
    # bot.send_message(webAppMes.chat.id, f"получили инофрмацию из веб-приложения: {webAppMes.web_app_data.data}")
    # отправляем сообщение в ответ на отправку данных из веб-приложения





if __name__ == '__main__':
    executor.start_polling(dp, loop=loop)
