const discord = require('discord.js');
const bot = new discord.Client();
const prefix = 'd!';

bot.on('ready', () => {
    console.log('words.js ready')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if(message.content.startsWith('d!avatar')) {
        message.channel.send('Please wait')
        .then(`avatar of ${message.member} is`)
        message.channel.send(`${message.member}`)
    
    }


});
bot.login(process.env.TOKEN)