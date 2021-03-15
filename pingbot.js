const discord = require('discord.js');
const bot = new discord.Client();
const prefix = 'd!';

bot.on('ready', () => {
    console.log('tag bot.js ready')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();


    if(message.content.startsWith(`<@!813671937544683530>`)) {
        const tag = new discord.MessageEmbed()
        .setTitle(`did you tag me`)
        .setDescription(`** **`)
        .addField(`Hey ${message.author.username} do you know my prefix(i think not)`, `still if you dont then it is ${prefix}`, `Over and out`)
        .setThumbnail(`${message.author.displayAvatarURL}`)
        message.channel.send(tag)

        message.author.send(`Quick tip type d!help for the commands`)
    }


});
bot.login(process.env.TOKEN)