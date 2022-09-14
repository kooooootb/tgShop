help_message = '''
Через этого бота можно купить машину времени, чтобы посмотреть, как происходит покупка и оплата в Telegram.
Отправьте команду /buy, чтобы перейти к покупке.
Узнать правила и положения можно воспользовавшись командой /terms.
'''

start_message = 'Привет! Это демонстрация работы платежей в Telegram!\n' + help_message

pre_buy_demo_alert = '''\
Так как сейчас я запущен в тестовом режиме, для оплаты нужно использовать карточку с номером `4242 4242 4242 4242`
Счёт для оплаты:
'''

terms = '''\
*Спасибо, что выбрали нашего бота. Мы надеемся, вам понравится ваша новая машина времени!*
1. Если машина времени не будет доставлена вовремя, пожалуйста, произведите переосмысление вашей концепции времени и попробуйте снова.
2. Если вы обнаружите, что машина времени не работает, будьте добры связаться с нашими сервисными мастерскими будущего с экзопланеты Trappist-1e. Они будут доступны в любом месте в период с мая 2075 года по ноябрь 4000 года нашей эры.
3. Если вы хотите вернуть деньги, будьте так любезны подать заявку вчера, и мы немедленно совершим возврат.
'''

tm_title = 'Самая настоящая Машина Времени'
tm_description = '''\
Хотите познакомиться со своими пра-пра-пра-пра-бабушкой и дедушкой?
Сделать состояние на ставках?
Пожать руку Хаммурапи и прогуляться по Висячим садам Семирамиды?
Закажите Машину Времени у нас прямо сейчас!
'''

AU_error = '''\
К сожалению, наши курьеры боятся кенгуру, а телепорт не может так далеко отправлять.
Попробуйте выбрать другой адрес!
'''

wrong_email = '''\
Нам кажется, что указанный имейл не действителен.
Попробуйте указать другой имейл
'''

successful_payment = '''
Ура! Платеж на сумму `{total_amount} {currency}` совершен успешно! Приятного пользования новенькой машиной времени!
Правила возврата средств смотрите в /terms
Купить ещё одну машину времени своему другу - /buy
'''



MESSAGES = {
    'start': start_message,
    'help': help_message,
    'pre_buy_demo_alert': pre_buy_demo_alert,
    'terms': terms,
    'tm_title': tm_title,
    'tm_description': tm_description,
    'AU_error': AU_error,
    'wrong_email': wrong_email,
    'successful_payment': successful_payment,
}