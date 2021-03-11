require("dotenv").config();

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json','utf8'));
const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.SAGE_TOKEN);
client.on('ready', OnReady);
client.on('messageReactionAdd', addRole);
client.on('messageReactionRemove', removeRole);


client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
  });

//bpbuch's code
client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });
  async function onReady() {
    const channel = client.channels.find((channel) => channel.name === config.channel);
  
    // channel will not contain messages after it is found
    try {
      await channel.messages.fetch();
    } catch (err) {
      console.error('Error fetching channel messages', err);
      return;
    }
  
    config.message_id = channel.messages.first().id;
  
    console.log(`Watching message '${config.message_id}' for reactions...`)
  }
  
// TO ADD ROLES
async function addRole({message, _emoji}, user) {
  if (user.bot || message.id !== config.message_id) {
    return;
  }
  if (message.partial) {
    try {
      await message.fetch();
    } catch (err) {
      console.error('Error fetching message', err);
      return;
    }
  }

  const { guild } = message;

  const member = guild.members.get(user.id);
  const role = guild.roles.find((role) => role.name === config.roles[_emoji.name]);

  if (!role) {
    console.error(`Role not found for '${_emoji.name}'`);
    return;
  }
  
  try {
    member.roles.add(role.id);
  } catch (err) {
    console.error('Error adding role', err);
    return;
  }
}
async function removeRole({message, _emoji}, user) {
  if (user.bot || message.id !== config.message_id) {
    return;
  }
  if (message.partial) {
    try {
      await message.fetch();
    } catch (err) {
      console.error('Error fetching message', err);
      return;
    }
  }

  const { guild } = message;

  const member = guild.members.get(user.id);
  const role = guild.roles.find((role) => role.name === config.roles[_emoji.name]);

  if (!role) {
    console.error(`Role not found for '${_emoji.name}'`);
    return;
  }

  try{
    member.roles.remove(role.id);
  } catch (err) {
    console.error('Error removing role', err);
    return;
  }
}