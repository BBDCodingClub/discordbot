require("dotenv").config();


const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.SAGE_TOKEN);

client.on('message', message => {
    let msg = message.content.toLowerCase();
    switch(msg){
      case 'ping': message.channel.send('pong\n :ping_pong:');
      break;
      case 'chai': message.channel.send('Yeh Lo Chai\n :coffee:');
      break;
      case 'coffee': message.channel.send('Yeh Lo Coffee\n :coffee:');
      break;
      case 'biskut': message.channel.send('Yeh Lo Butterbite\n:cookie:');
      break;

    }
  });

client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });
