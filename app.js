const { Composer } = require('micro-bot')

const BOT_TOKEN = `1736249180:AAGKeMsDJlBqUWklOM5fsEog8isJIM_wUrU`;

const bot = new Composer()

bot.command('start', ctx => {
    console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, `Hey ${ctx.from.first_name}! My name is Shubham and welcome to my bot - The Indian Express News Bot. This bot is in its early build stages but will soon have all the features required. The commands that you can use right now are: 1. /news`, {
        })
        .catch(err => console.log(err));
})

module.exports = bot

// indian-express-news-bot
// https://indian-express-news-bot.herokuapp.com/