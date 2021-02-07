const Discord = require ('discord.js');
const prefix = 'd!';
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('bot is online thank god!')
})

  bot.on("message", message => {
    if (message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if(message.content.startsWith('d!play1')) {
      const game = new Discord.MessageEmbed()

    .setColor(0xfc0000)
    .setTitle('Game')
    .setDescription('This is a game')
    .addField('Pika boo', 'Pika boo im a bot what are you?', true)
    .setThumbnail('https://discord.com/channels/757637286723846214/795184165544132628/806841330533793792')
    .setFooter('made devoloped and designed by Your daily dose of computers#6644')
    
    message.channel.send(game);

    }

    if(message.content.startsWith('d!help')) {
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
        .addField('To view more features subscribe to these 2 channels ', '1. https://www.youtube.com/channel/UCv4L0vzBU_h1_qeBdaaURkw', true)
        
        .addField('second channel', '2. https://m.youtube.com/channel/UCtH_hO_5HDAni7FC_x-hxDA', true)

        .setFooter('Made by Your daily dose of computer')

        message.channel.send(helpUser)

    }


    if(message.content.startsWith('d!ban')) {

     
      
      message.author.createDM('You need dragon rank for this')

      if(message.author) {
        Discord.Role('791160401026220043')
        message.channel.send('Misson failed')
      }

    }

    if(message.content.startsWith('d!vote')) {
      const serverVote = new Discord.MessageEmbed()
        .setTitle('Vote for this server')
        .setDescription(`Vote for   Dragon Fleet's Domain ${message.author}`)
        .setColor(0xfc0000)
        .addField('Get one extra role', 'If you vote for this server you will get a voter role but you must vote daily so vote at https://top.gg/servers/757637286723846214/vote', true)
        .setThumbnail('https://imgur.com/a/es8JWcg')
        .setFooter('Made by Broke my neck while coding#6644')
        
        message.channel.send(serverVote)



    } 


    if(message.content.startsWith('d!verify')) {
      message.author.createDM('You were verified!')
    }


    if(message.content.startsWith('d!play2')) {
      message.channel.send(`Ok ${message.author} lets play a game here is the link now find the switch to turn on the game https://discord.com/botgame hope you can do it😉 ${message.author}`)
    }

    if(message.content.startsWith('d!ping')) {
      message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`);
    }

    if(message.content.startsWith('d!play3')) {
      message.channel.send(`🆗 ${message.author} here is the link to the third game rb.gy/o2krdf`)
    }

    if(message.content.startsWith('d!most_viewed')) (
      message.channel.send(`Did you know ${message.author} that techno gamerz game on is the most viewed music video on youtube so just search game on in https://youtube.com or click here https://www.youtube.com/watch?v=Ilx_xJHuhAc`)
      
    )

    




  })

    




bot.login('ODA2NTE1NjM3ODExMDE5Nzg2.YBqkOA.KlNDwTHeMjpvlTLLbBcLeGJHUuk')
