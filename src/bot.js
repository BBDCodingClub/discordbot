require("dotenv").config();

// {
//   intents: intents,
//   ws: { intents: intents },
//   partials: ["MESSAGE", "CHANNEL", "REACTION"],
// }

const Discord = require("discord.js");
const { Client } = require("discord.js");
const intents = ["GUILDS", "GUILD_MEMBERS"];
const client = new Client();

var prefix = "b!";
var welcomeChannelID = "817805842774360077";

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// When a New Member joins the Server
client.on("guildMemberAdd", (member) => {
  let welcomembed = new Discord.MessageEmbed()
    .setAuthor(`${member.user.tag} just joined!`, member.user.avatarURL())
    .setDescription("Welcome to Official BBD Comunity Server 🎉!!!")
    .setColor("#38CC77");
  member.guild.channels.cache
    .get(welcomeChannelID)
    .send(welcomembed)
    .catch((err) => console.log(err));
});

// When a member leaves the Server
client.on("guildMemberRemove", (member) => {
  let goodbyembed = new Discord.MessageEmbed()
    .setAuthor(`${member.user.tag} just left!`, member.user.avatarURL())
    .setDescription("Sad! Let's just hope that they enjoyed their stay!!!")
    .setColor("#FF0000");
  member.guild.channels.cache
    .get(welcomeChannelID)
    .send(goodbyembed)
    .catch((err) => console.log(err));
});

client.on("message", (message) => {
  let msg = message.content.toLowerCase();

  switch (msg) {
    case "ping":
      message.channel.send("pong\n :ping_pong:");
      break;
    case "chai":
      message.channel.send("Yeh Lo Chai\n :coffee:");
      break;
    case "coffee":
      message.channel.send("Yeh Lo Coffee\n :coffee:");
      break;
    case "biskut":
      message.channel.send("Yeh Lo Butterbite\n:cookie:");
      break;
    case "hi":
      message.channel.send("ID Card kaha hai? \n:cop:");
      break;
    case "hello":
      message.channel.send("ID Card kaha hai? \n:cop:");
      break;
    case "lol":
      message.channel.send("hansa bhi tha? \n:unamused:");
      break;

      case 'ok': message.channel.send('Objection Killed!');
      break;
      case 'kaise ho': message.channel.send('Class me jao chup chap *_*');
      break;
    }
  });

client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });

