
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('bot on'));

app.listen(port, () => console.log(` listening at http://localhost:${port}`));
//------------------Bot code---------------------------------------
const Discord = require('discord.js');
const prefix = '+';
const bot = new Discord.Client();



bot.on('ready', () => {
  console.log('index.js ready')

})




bot.on("message", message => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLocaleLowerCase();

  if(message.content.includes('hello')) {
    message.channel.send(`yo ${message.author}`)
  }


  if(message.content.includes('lol')) {
      message.channel.send('LOL 😂')
      message.channel.send('🤣🤣😂')
  }

if(message.content.startsWith('d!ban')) {
    if(message.member.hasPermission('BAN_MEMBERS')) {
        
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.channel.send("You didn't mention the user to ban!");
    }
  }

// Log our bot in using the token from https://discord.com/developers/applications
    }
}




);



bot.login(process.env.TOKEN)