/**
 * Libs
 */
require('dotenv').config()
const config = require('./config')
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
var CronJob = require('cron').CronJob

function sendMessageToChannel() {
  client.channels.cache.forEach(channel => {
    if (channel.id === process.env.DISCORD_CHANNEL) {
      channel.send(new Date().getTime())
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
