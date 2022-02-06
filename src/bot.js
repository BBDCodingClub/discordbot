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
      case 'hi': message.channel.send('ID Card kaha hai? \n:cop:');
      break;
      case 'hello': message.channel.send('ID Card kaha hai? \n:cop:');
      break;
      case 'lol': message.channel.send('hansa bhi tha? \n:unamused:');
      break;
      case 'ok': message.channel.send('Objection Killed!');
      break;
    }
  });

client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });
