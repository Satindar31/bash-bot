
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('bot on'));

app.listen(port, () => console.log(` listening at http://localhost:${port}`));
//------------------Bot code---------------------------------------
const Discord = require('discord.js');
const prefix = 'd!';
const bot = new Discord.Client();
const cheerio = require('cheerio');
const request = require('request');
const quick = require('quick.db');
const ban = require('./ban');
const kick = require('./kick');
const words = require('./words');
const avatar = require('./avatar')
const role = require('./rolelist');
const pingbot = require('./pingbot');


bot.on('ready', () => {
  console.log('index.js ready')

})




bot.on("message", message => { 
bot.user.setActivity({ type: 'STREAMING', url: 'https://www.twitch.tv/yddoc_yt' })
.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);

  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLocaleLowerCase();




  if (message.content.startsWith('d!play1')) {
    const game = new Discord.MessageEmbed()

      .setColor(0xfc0000)
      .setTitle('Game')
      .setDescription('This is a game')
      .addField('Pika boo', 'Pika boo im a bot what are you?', true)
      .setThumbnail('https://discord.com/channels/757637286723846214/795184165544132628/806841330533793792')
      .setFooter('made devoloped and designed by Your daily dose of computers#6644')

    message.channel.send(game);

  }

  if (message.content.startsWith('d!help')) {
    message.reply('sent you a dm')

    const helpUser = new Discord.MessageEmbed()

      .setColor(0xfc0000)
      .setTitle('Help')
      .setDescription(`${message.author} called the help command`)
      .addField('Game', 'Type d!play1 to play a game', true)
      .addField('Help', `want help with this bot just type d!help ${message.author}`, true)
      .addField('Vote', 'Do you want your name to be red?? well then voter rank is for you so go vote now by typing d!vote', true)
      .addField('Game 2', `To play the second game ${message.author} type d!play2`, true)
      .addField('Ping', `If you want you check you ping with the bot ${message.author} type d!ping`, true)
      .addField('Game 3', 'The thord game of this bot type d!play3 for it', true)
      .addField('Game 4', 'To view the fourth game of this bot type d!play4')
      .addField('Best song', 'To view the best song in youtube india type d!best_song')
      .addField('To view more features subscribe to these 2 channels ', '1. https://www.youtube.com/channel/UCv4L0vzBU_h1_qeBdaaURkw', true)

      .addField('second channel', '2. https://m.youtube.com/channel/UCtH_hO_5HDAni7FC_x-hxDA', true)
      .addField(`Ticket`, "Need help? no problem just do `ticket.create`")

      .setFooter('Made by Your daily dose of computer')

    message.author.send(helpUser)

  }





  if (message.content.startsWith('d!vote')) {
    
    const serverVote = new Discord.MessageEmbed()
      .setTitle('Vote for this server')
      .setDescription(`Vote for this server ${message.author.username}`)
      .setColor(0xfc0000)
      .addField('Get one extra role', `If you vote for this server you will get a voter role but you must vote daily so vote https://top.gg/servers/757637286723846214/vote`, true)
      .setThumbnail('https://imgur.com/a/es8JWcg')
      .setFooter('Made by Broke my neck while coding#6644')

    message.channel.send(serverVote)



  }





if (message.content.startsWith("d!play2")) {
     const play2 = new Discord.MessageEmbed()
         .setTitle("Lets Play something!")
         .setDescription("In this game , you have to find a button to start the REAL game , hope you can find the button and start the game!")
         .setColor(0x00f7ff)
         .addField(`Ok ${message.author.username} Here is the link , good luck and here you go :-`, "[click to play game](https://discord.com/botgame)")

message.channel.send(play2)
}

  if (message.content.startsWith('d!ping')) {
    message.author.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`);
  }

  if (message.content.startsWith('d!play3')) {
    message.channel.send(`🆗 ${message.author} here is the link to the third game https://www.thisworldthesedays.com/google_sucks.html`)
  }

  if (message.content.startsWith('d!most_viewed')) (
    message.author.send(`Did you know ${message.author} that techno gamerz game on is the most viewed music video on youtube so just search game on in https://youtube.com or click here https://www.youtube.com/watch?v=Ilx_xJHuhAc`)

  )

  if (message.content.startsWith('d!best_song')) {
    message.channel.send(`done ${message.author.username} check you dm`)
    message.author.send(`https://www.youtube.com/watch?v=Ilx_xJHuhAc is easyly the best song`)
  }




  if (message.content.startsWith('d!play4')) {
    message.channel.send(`Ok ${message.author} play the fourth game at https://chromedino.com/`)
      .then(`Do it ${message.author}`)
  }



if(message.content.startsWith('d!invite')) {
  message.channel.send(`${message.author.username} invite link in your dm`)
  message.author.send(`okie ${message.author.tag} invite me https://discord.com/api/oauth2/authorize?client_id=813671937544683530&permissions=8&redirect_uri=https%3A%2F%2Fblog.award.co%2Fhubfs%2FThankyou.png&scope=bot`)
}



if(message.content.startsWith('d!poketwo')) {
  message.channel.send(`${message.author.username} here is the link`)
  .then
  message.channel.send('`https://discord.gg/bac8jEcdDp`')
  .then
  message.author.send('`https://discord.gg/GjUD7av4Zx`')
}







});



bot.login(process.env.TOKEN)