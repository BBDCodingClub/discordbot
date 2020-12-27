require("dotenv").config();


const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.SAGE_TOKEN);

client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
  });

  client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });

