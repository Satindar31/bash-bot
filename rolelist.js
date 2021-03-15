const discord = require('discord.js');
const bot = new discord.Client();
const prefix = 'd!';

bot.on('ready', () => {
    console.log('where afk.js ready')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();


    if(message.content.startsWith(`d!where-afk`)) {
       message.channel.send(`${message.guild.afkChannel}`)
       message.channel.send(`and id is`)
       .then
       message.channel.send(`${message.guild.afkChannelID}`)
    }


});
bot.login(process.env.TOKEN)