const discord = require('discord.js');
const bot = new discord.Client();
const prefix = 'd!';

bot.on('ready', () => {
    console.log('bot is online thank god!')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if (message.content.startsWith('d!ban')) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            return msg.channel.send(`**${msg.author.username}**, You do not have perms to unban someone`)
        }

        if (message.guild.me.hasPermission("BAN_MEMBERS")) {
            return msg.channel.send(`**${msg.author.username}**, I do not have perms to unban someone`)
        }

        let userID = args[0]
        msg.guild.fetchBans().then(bans => {
            if (bans.size == 0) return
            let bUser = bans.find(b => b.user.id == userID)
            if (!bUser) return
            msg.guild.members.unban(bUser.user)
        })

}});
    bot.login(process.env.TOKEN);