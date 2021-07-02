const { Composer } = require('micro-bot')

const BOT_TOKEN = `1736249180:AAGKeMsDJlBqUWklOM5fsEog8isJIM_wUrU`;

const bot = new Composer()

bot.start((ctx) => {
    ctx.reply(`Hey ${ctx.from.first_name}! My name is Shubham and welcome to my bot - The Indian Express News Bot. This bot is in its early build stages but will soon have all the features required. The commands that you can use right now are: 1. /news`)
})

bot.news((ctx) => {
    ctx.reply("News for you!!!");
})

module.exports = bot

// indian-express-news-bot
// https://indian-express-news-bot.herokuapp.com/