# import logging

from telegram import Update, ReplyKeyboardMarkup, WebAppInfo, KeyboardButton
from telegram.ext import Application, CommandHandler, ContextTypes

# Enable logging
# logging.basicConfig(
#     format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO,
#     filename=os.path.normpath('C:/Users/zavgm/Desktop/awakeguardbot.log'),
#     filemode='a'
# )


def create_keyboard():
    web_app = WebAppInfo("https://google.com")
    one_butt = KeyboardButton(text="open web page", web_app=web_app)
    keyboard = ReplyKeyboardMarkup(keyboard=[[one_butt]], row_width=1)

    return keyboard


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    bot = context.bot
    text = 'start text'
    chat_id = update.message.chat_id

    await bot.send_message(chat_id=chat_id, text=text, reply_markup=create_keyboard())


def main() -> None:
    """Run bot."""
    # Create the Application and pass it your bot's token.
    application = Application.builder().token("5766604355:AAHgYQjfcweCtlbUVtL8BKJOGwOtL-hXk8I").build()

    # on different commands - answer in Telegram
    # application.add_handler(CommandHandler('l', lock))
    application.add_handler(CommandHandler('start', start))

    application.run_polling()


if __name__ == '__main__':
    main()
