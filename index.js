/**
 * Libs
 */
require('dotenv').config()
const config = require('./config')
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const CronJob = require('cron').CronJob
const figlet = require('figlet')

function sendMessageToChannel() {
  client.channels.cache.forEach(channel => {
    if (channel.id === process.env.DISCORD_CHANNEL) {
        let msg1 = [
            "Vstávat a cvičit!",
            "Nový den nové dobrodružství.",
            "Držme se bratři, ať vydržíme dnešní zkoušky.",
            "Nepropadni pokušení! Nestaň se coomerem!",
            "Potěšení je chvilkové, sláva je věčná! Za slávou bratři!"
        ]

        let msg2 = [
            "@Fapstronaut, hola hej otevřte mi dveře. Zbloudil jsem při lovení coomerů!",
            "@Fapstronaut úsvit nového dne. Víte, co máte dělat!",
            "*famnára* **Fapstronoutům všech zemí, vydržte** @Fapstronaut",
            "@Fapstronaut @Fapstronaut @Fapstronaut Teď to nemůžeme vzdát! Jsme tak blízko.",
            "!Breaking! @Fapstronaut se stal synonymem slova frajer"
        ]

        let gifs = [
            "https://media.giphy.com/media/3o7btSHUTdraHEsx0Y/giphy.gif",
            "https://media.giphy.com/media/5xtDarIN81U0KvlnzKo/giphy.gif",
            "https://media.giphy.com/media/l0MYLhyyzhHQEhjck/giphy.gif",
            "https://media.giphy.com/media/6qFFgNgextP9u/giphy.gif",
            "https://media.giphy.com/media/5xtDarrD3UV3Qk6N00E/giphy.gif",
            "https://media.giphy.com/media/2sAitYulLo87u/giphy.gif",
            "https://media.giphy.com/media/kyQiCZuymIOvKavFxt/giphy.gif",
            "https://media.giphy.com/media/kHIJtQ981gP1C/giphy.gif"

        ]

        // Warcrime ahead!
        let day = figlet.textSync(`den ${new Date().getDate()}.`)
        let endMsg =  "```\n" + day + "\n```\n" +
            msg1[Math.floor(Math.random() * msg1.length)] + "\n\n" +
            msg2[Math.floor(Math.random() * msg2.length)] +
            "\n\nDenní prezenčka :white_check_mark: / " +
            ":negative_squared_cross_mark: .\n\n" +
            "||Sláva vítězům, hanba poraženým...||\n\n\n" +
            gifs[Math.floor(Math.random() * gifs.length)]


      channel.send(endMsg)
    }
  })
}

client.once('ready', () => {
  console.log('Ready!')
  client.user.setActivity(process.env.BOT_ACTIVITY_NAME, {
    type: process.env.BOT_ACTIVITY_OPTION_TYPE
  })
    .then(presence => {
      console.log(presence.activities[0].type + ' ' + presence.activities[0].name)
    })
    .catch(console.error)
  new CronJob(process.env.CRON_JOB_TIMING, sendMessageToChannel, null, true, process.env.UTC_LOCATION).start()
})


/*client.on('message', message => {
  //   console.log(message.content)
  if (message.content === `${config.prefix}ping`) {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.')
  } else if (message.content === `${config.prefix}server`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
  }
})*/

// Bot login
client.login(process.env.DISCORD_TOKEN)
