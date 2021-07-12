const { Telegraf } = require('telegraf')

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://your-heroku-app.herokuapp.com';

const bot = new Telegraf(BOT_TOKEN)

//issue https://github.com/telegraf/telegraf/issues/44#issuecomment-269666490
bot.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`);
bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT)


bot.start((ctx) => ctx.reply('Welcome'))

bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.on('sticker', (ctx) => ctx.reply('👍 Nice'))

bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.command('oldschool', (ctx) => ctx.reply('Hello'))

bot.command('hipster', Telegraf.reply('λ'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
