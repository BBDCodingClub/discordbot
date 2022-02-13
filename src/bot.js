require("dotenv").config();
const Discord = require("discord.js");
const { Client } = require("discord.js");
const intents = ["GUILDS", "GUILD_MEMBERS"];
const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "USER", "REACTION"],
});

client.login(process.env.SAGE_TOKEN);

var prefix = "b!";
// Server Roles IDs
var welcomeChannelID = "678599644456026165";
var reactionFirstYear = "940175962610499604";
var reactionSecondYear = "940175573760765973";
var reactionThirdYear = "940164622936342619";
var reactionFourthYear = "940284916594266175";
var reactionPassout = "940296195010601010";

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

// Reaction Role

//Auto Responding Msgs
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
    case "ok":
      message.channel.send("Objection Killed!");
      break;
    case "kaise ho":
      message.channel.send("Class me jao chup chap *_*");
      break;
    case "sir":
      message.channel.send("Haan? beta !");
      break;
    case "yes":
      message.channel.send("Definitely! Noo");
      break;
    case "bhaiya":
      message.channel.send(":Cool_Finger_Guns:");
      break;
    case "pmc":
      message.channel.send(
        " :revolving_hearts: PREM MILAN CHAURAHA but actaully it's a tiraha "
      );
      break;
    case "thank":
      message.channel.send(" 50% fees jama kardo! ");
      break;
    case "thanks":
      message.channel.send(" 50% fees jama kardo! ");
      break;
    case "same":
      message.channel.send(" achha! ");
      break;
    case "no":
      message.channel.send(" nautanki");
      break;
    case "b!reactyear":
      message.channel.send("reaction...");
      let embed = new Discord.MessageEmbed()
        .setTitle("Reactions Roles")
        .setDescription("React to get a role!")
        .setColor("BLUE");
      message.channel.send(embed).then((m) => {
        let reactions = ["😂", "😎", "😍", "🤑"];
        for (let i in reactions) {
          m.react(reactions[i]);
        }
      });

      client.on(
        "messageReactionAdd",
        async (potentialPartialReaction, potentialPartialUser) => {
          try {
            const reaction = await potentialPartialReaction.fetch();
            const user = await potentialPartialUser.fetch();

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            // if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id === "678599644456026165") {
              console.log("right channel");
              console.log("emoji id", reaction.emoji);
              switch (reaction.emoji.name) {
                case "1️⃣":
                  await reaction.message.guild.members.cache
                    .get(user.id)
                    .roles.add(reactionFirstYear);
                  break;
                case "2️⃣":
                  await reaction.message.guild.members.cache
                    .get(user.id)
                    .roles.add(reactionSecondYear);
                  break;
                case "3️⃣":
                  await reaction.message.guild.members.cache
                    .get(user.id)
                    .roles.add(reactionThirdYear);
                  break;
                case "4️⃣":
                  await reaction.message.guild.members.cache
                    .get(user.id)
                    .roles.add(reactionFourthYear);
                  break;
                case "5️⃣":
                  await reaction.message.guild.members.cache
                    .get(user.id)
                    .roles.add(reactionPassout);
                  break;
                default:
                  break;
              }
            }

            console.log(message.channel.id);
            // console.log("<<< REACTION >>>", reaction);
            // console.log("<<< USER >>>", user);
          } catch (err) {
            console.log(err);
          }

          // can use reaction and user here!
        }
      );
      break;
  }
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );

  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);
});
