const { Composer } = require('micro-bot')

const bot = new Composer()

bot.start((ctx) => {
    ctx.reply(`Hey ${ctx.from.first_name}! My name is Shubham and welcome to my bot - The Indian Express News Bot. This bot is in its early build stages but will soon have all the features required. The commands that you can use right now are: 1. /news`)
})

bot.command('HeadLines_India', (ctx) => {
    let headlines = fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=11ed06385db04616a8bb78a13c2708d6");
    headlines.then(res => res.json())
    .then(d => {
        ctx.reply(d);
    })
})

module.exports = bot

// indian-express-news-bot
// https://indian-express-news-bot.herokuapp.com/