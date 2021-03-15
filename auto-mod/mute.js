const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'd!';


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
bot.on('ready', () => {
  console.log('mute.js ready ready');
});

bot.on('message', message => {
  // Ignore messages that aren't from a guild


if(message.content.startsWith(`d!mute`)) {
    if(message.member.hasPermission('MUTE_MEMBERS')) {
        let role = message.guild.roles.find(r => r.name === "𒆕 ✗ muted ✗");

        // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
        let member = message.mentions.members.first();
        
        // or the person who made started the command: let member = message.member;
        
        //adds the role
        member.roles.add(role)

    

    .then
        const tellmute = new Discord.MessageEmbed()
        .setTitle(`Muted in ${message.guild}`)
        .setDescription(`Hey ${message.member} you were muted in ${message.mentions.guild}`)
        .addField('Well now you can do nothing but wait to get unmuted')

        message.mentions.send(tellmute)

    } else {
        message.author.send('unable to mute him reason has special perms')
        message.channel.send(`${message.author.username} mission failed we'l get them next time`)
    }
} 




});

bot.login(process.env.TOKEN)