const { Composer } = require('micro-bot')
const axios = require('axios');

const bot = new Composer()

bot.start((ctx) => {
    ctx.reply(`Hey ${ctx.from.first_name}! My name is Shubham and welcome to my bot - The Indian News Bot. This bot is in its early build stages but will soon have all the features required.`)
})


//Headlines General
bot.command('headlines', (ctx) => {
    let resultData = "";
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=11ed06385db04616a8bb78a13c2708d6")
    .then(d => {
        let headlines = d.data.articles;
        let i = 1;
        headlines.forEach( headline => {
            if(headline.description)
            {
                ctx.reply(`Title: ${headline.title}
                
                Description: ${headline.description}`);
            }
        });
    })
    .catch(err => {
        console.log(err);
      });
    ctx.reply('News Headlines for India are ->');
})

//Sports Headlines
bot.command('sports', (ctx) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&category=sports&apiKey=11ed06385db04616a8bb78a13c2708d6")
    .then(d => {
        let headlines = d.data.articles;
        headlines.forEach( headline => {
            if(headline.description)
            {
                ctx.reply(`Title: ${headline.title}
                
                Description: ${headline.description}`);
            }
        });
    })
    .catch(err => {
        console.log(err);
      });
    ctx.reply('Sports News Headlines are ->');
})

//Bussiness Headlines
bot.command('business', (ctx) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&category=business&apiKey=11ed06385db04616a8bb78a13c2708d6")
    .then(d => {
        let headlines = d.data.articles;
        headlines.forEach( headline => {
            if(headline.description)
            {
                ctx.reply(`Title: ${headline.title}
                
                Description: ${headline.description}`);
            }
        });
    })
    .catch(err => {
        console.log(err);
      });
    ctx.reply('Bussiness News Headlines are ->');
})

//Health Headlines
bot.command('health', (ctx) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&category=health&apiKey=11ed06385db04616a8bb78a13c2708d6")
    .then(d => {
        let headlines = d.data.articles;
        headlines.forEach( headline => {
            if(headline.description)
            {
                ctx.reply(`Title: ${headline.title}
                
                Description: ${headline.description}`);
            }
        });
    })
    .catch(err => {
        console.log(err);
      });
    ctx.reply('Health News Headlines are ->');
})

//Technology Headlines
bot.command('technology', (ctx) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&category=technology&apiKey=11ed06385db04616a8bb78a13c2708d6")
    .then(d => {
        let headlines = d.data.articles;
        headlines.forEach( headline => {
            if(headline.description)
            {
                ctx.reply(`Title: ${headline.title}
                
                Description: ${headline.description}`);
            }
        });
    })
    .catch(err => {
        console.log(err);
      });
    ctx.reply('Technology News Headlines are ->');
})

//Entertainment Headlines
bot.command('entertainment', (ctx) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&category=entertainment&apiKey=11ed06385db04616a8bb78a13c2708d6")
    .then(d => {
        let headlines = d.data.articles;
        headlines.forEach( headline => {
            if(headline.description)
            {
                ctx.reply(`Title: ${headline.title}
                
                Description: ${headline.description}`);
            }
        });
    })
    .catch(err => {
        console.log(err);
      });
    ctx.reply('Entertainment News Headlines are ->');
})

//Science Headlines
bot.command('science', (ctx) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&category=science&apiKey=11ed06385db04616a8bb78a13c2708d6")
    .then(d => {
        let headlines = d.data.articles;
        headlines.forEach( headline => {
            if(headline.description)
            {
                ctx.reply(`Title: ${headline.title}
                
                Description: ${headline.description}`);
            }
        });
    })
    .catch(err => {
        console.log(err);
      });
    ctx.reply('Science News Headlines are ->');
})


module.exports = bot

// indian-express-news-bot
// https://indian-express-news-bot.herokuapp.com/