const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setGame('Recruter des Gardiens')
    console.log('Je suis prêt')
})

bot.on('message', function (message) {
    if (message.content === '!WL-Chef-RAID') {
      message.reply('Hey, pour devenir Chef du RAID, il te suffit de faire une candidature sur notre forum:                                       https://divisionrp.forumchitchat.com/?forum=731739                                                                                                                                                                     Bonne journé.')
    }
})

bot.on('message', function (message) {
    if (message.content === '!WL-RAID') {
      message.reply('Hey, pour rejoindre le RAID, il te suffit de faire une candidature sur notre forum:                                          https://divisionrp.forumchitchat.com/?forum=731738                                                                                                                                                                      Bonne journé.')
    }
})

bot.on('message', function (message) {
    if (message.content === '!WL-Commissaire') {
    message.reply('Hey, pour devenir Commissaire de Police, il te suffit de faire une candidature sur notre forum:                               https://divisionrp.forumchitchat.com/?forum=731740                                                                                                                                                                     Bonne journé.')
    }
})

bot.login('NTcwOTEzMTg3MzE5MzgyMDE3.XMGGog.egp5er9O5nkAEbUusS1B0bxVOHo')
