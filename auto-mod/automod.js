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

    if (message.content.includes('fuck')) {
        message.delete()
        message.channel.createInvite
        message.channel.send(` ${message.author} is swearing`)
        const fuck = new discord.MessageEmbed()
            .setTitle('swearing')
            .setDescription(`swearing in ${message.guild} `)
            .addField(`hey ${message.author.username} why were you swearing`, `the word was fuc* `)

        message.author.send(fuck)
    }

    if (message.content.includes('Fuck')) {
        message.delete()
        message.guild.channels.send(`${message.author} is swearing`)
        const Fuck = new discord.MessageEmbed()
            .setTitle('swearing')
            .setDescription(`swearing in ${message.guild} `)
            .addField(`hey ${message.author.username} why were you swearing`, `the word was fuc* `)

        message.author.send(Fuck)
    }

    if (message.content.includes('niga')) {
        message.delete()
      message.guild.channels.send(`${message.author} is swearing`)
            .then
        const niga = new discord.MessageEmbed()
            .setTitle('swearing')
            .setDescription(`swearing in ${message.guild} `)
            .addField(`hey ${message.author.username} why were you swearing`, `the word was im not gonna tell `)

        message.author.send(niga)
    }
    


});
bot.login(process.env.TOKEN);