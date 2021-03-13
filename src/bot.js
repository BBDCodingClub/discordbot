require("dotenv").config();


const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.SAGE_TOKEN);

client.on('message', message => {
    /*if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }*/
    let msg = message.content.toLowerCase();
    switch(msg){
      case 'ping': message.channel.send('pong');
      break;
      case 'chai': message.channel.send('Yeh Lo Chai!');
      break;
      case 'coffee': message.channel.send('Strong ya light ?');
      break;
      case 'biskut': message.channel.send('Yeh Lo Butterbite');
      break;
      case 'strong': message.channel.send('Yeh Lo Bru!!');
      break;
      case 'light': message.channel.send('Yeh Lo Nescafe!');
      break;

    }
  });

client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });


