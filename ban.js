const discord = require('discord.js');
const bot = new discord.Client();
const prefix = 'm!';

bot.on('ready', () => {
    console.log('bot is online thank god!')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    if (message.content.startsWith('d!ban')) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (!User) return message.channel.send("Invalid User")
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "None"
        }

        User.ban({ reason: banReason })


    }

});
bot.login('your token here')