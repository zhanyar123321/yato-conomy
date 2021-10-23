const TOKEN = "OTAxMTIwMzAyMzA4Nzg2MjI2.YXLPrg.I7zZmEh0-HdlkuOMH6b-K7GhXTU"
const { Client, Intents, MessageEmbed, Permissions } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const fs = require("fs");
const ms = require("ms");
let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  300000
);
const prefix = "Y","y";
client.on("ready", () => console.log(`${client.user.tag} Telah Online!`));

client.on("ready", () => {
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
  client.user.setPresence({
    activities: [{ name: `${prefix}help | Yato Bot Version 13` }],
    status: "dnd"
  });
  console.log(`Logined`);
});


var p = require("./prefix.json");
function savePrefix() {
  fs.writeFileSync("./prefix.json", JSON.stringify(p, null, 4));
}
client.on("messageCreate", message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
  if (message.content.startsWith(prefix + "setprefix")) {
    if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_GUILD")) return;
    let newPrefix = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!newPrefix)
      return message.reply(`**Usage: ${prefix}setprefix <prefix>**`);
    p[message.guild.id].prefix = newPrefix;

    let embed = new MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle(`${message.guild.name}`)
      .setDescription("**The Code SetPrefix has been Setup**")
      .addField("**Prefix**", newPrefix)
      .addField("**Moderation**", `<@${message.author.id}>`)
      .setColor("9e1c36")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  }
  savePrefix();
});

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "infoPrefix")) {
    if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    let embed = new MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle(`${message.guild.name}`)
      .setDescription("**Prefix Info**")
      .addField("**Prefix**", p[message.guild.id].prefix.toString())
      .setColor("9e1c36")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  }
});
client.on("messageCreate", async message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix; 
  if (message.content.startsWith(prefix + "help")) {
    if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    let help = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setFooter(client.user.username,client.user.avatarURL())
      .setTimestamp() 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=889826680997314581&permissions=8&scope=bot")
      .setTitle("Click To Invite")
      .setThumbnail(message.guild.iconURL()).setDescription(`
**General Commands**
\`server,botinfo,ping,listemojis
membercount,invite\`
**MODERATION**
\`lock,unlock,warning,warnlevel
temprole,tempmute,mute,unmute
clear,setprefix,setBooster,slowmode,setName
timeAfk,hAfk,setAfk,ban,kick\`
**ECONOMY**
\`slots,daily,cash,send,cf,work\`

`);
    message.channel.send({ embeds: [help] });
  }
});

client.on('messageCreate', message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix 
  if(message.content.startsWith(prefix + `invite`)){
    if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    var embed = new MessageEmbed()
    .setTitle("Click Here")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=889826680997314581&permissions=8&scope=bot")
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send({embeds: [embed]})
  }
});


client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "botinfo")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")

    const embed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setColor("#00F0FF")
      .setTitle("INFO YATO BOT")
      .addField("``Channels``", `[ ${client.channels.cache.size} ]`, true)
      .addField("``Users``", `[ ${client.users.cache.size} ]`, true)
      .addField("``My Name``", `[ ${client.user.tag} ]`, true)
      .addField("``My ID``", `[ ${client.user.id} ]`, true)
      .addField("``OWNER``", `[ <@744957669164712050> ]`, true)
      .addField("``My Prefix``", `[ ${prefix} ]`, true)
      .addField("``Ping Bot``", `${Date.now() - message.createdTimestamp}ms`)
      .addField("``My Language``", `[ JavaScript ]`, true)
      .addField("``Bot Version``", `[ 13.1.0 ]`, true);
    message.channel.send({ embeds: [embed] });
  }
});

client.on("messageCreate", black => {
  if (!p[black.guild.id])
    p[black.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[black.guild.id].prefix;
  if (black.content.startsWith(prefix + "serverinfo")) {
  if(!blacklist[black.author.id])
blacklist[black.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[black.author.id].Blacklist === "ON")return black.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")  
    var embed = new MessageEmbed()
      .setAuthor(black.guild.name)
      .setThumbnail(black.guild.iconURL())
      .setTitle("**Info Server**")
      .addField("**Server Name:**", `${black.guild.name}`)
      .addField("**Owner Server:**", `<@${black.guild.ownerId}>`)
      .addField("**Server ID:**", `${black.guild.id}`)
      .addField("**Created:**", `${black.guild.createdAt.toLocaleString()}`)
      .addField("**Emojis**", `${black.guild.emojis.cache.size}`, true)
      .addField("**Members:**", `${black.guild.memberCount}`)
      .addField("**Channels:**", `${black.guild.channels.cache.size}`)
      .addField("**Region**:", black.guild.region || `None`)
      .addField(`**Boosts**`, `${black.guild.premiumSubscriptionCount}`, true)
      .addField("**Roles:**", ` ${black.guild.roles.cache.size}`)
      .addField("AFK Timeout", black.guild.afkTimeout / 60 + " minutes", true)
      .setFooter(`Requested | ${black.author.tag}`, black.author.avatarURL())    
      .addField("**All Members**", `${black.guild.memberCount}`)
      .setColor("RANDOM")
      .setTimestamp();
    black.channel.send({ embeds: [embed] });
  }
});

client.on("messageCreate", async message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "clear")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
    message.channel.messages.fetch().then(messages => {
      message.channel.bulkDelete(messages);
      let embed = new MessageEmbed()
        .setTitle(`Cleared Messages`)
        .addField(`Moderation`, `<@${message.author.id}>`)
        .setFooter(`Requested By | ${message.author.tag} `);
      message.channel.send({ embeds: [embed] }).then(mssg => {
        mssg.delete(35000);
      });
    });
  }
});

client.on("messageCreate", async message => {
if(message.content.startsWith(prefix + "rolemember")) {
let user = message.mentions.members.first() || message.author;
if(!user.roles.cache.filter(roles => roles.id !== message.guild.id).size ==0) return message.reply(`**${user}** dont Have Any Role`)
let rolememb = user.roles.cache.filter(roles => roles.id !== message.guild.id).map(roles => roles.toString())
const Embed = new MessageEmbed
.setTitle(`Info Roles ${user}`)
.setColor("#00FFFF")
.addField("Member", user.toString())
.addField("Roles Member", rolememb.toString())
.setFooter(`Requested By | ${user.username}`)
message.channel.sens({embeds: [Embed]})
  }
})
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "membercount")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
   let all = message.guild.memberCount;
    let users = message.guild.members.cache.filter(member => !member.user.bot)
      .size;
    let bots = message.guild.members.cache.filter(member => member.user.bot)
      .size;
    let embed = new MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("Total Member From Server")
      .addField("All Member", all.toString())
      .addField("Humans", users.toString())
      .addField("Bots", bots.toString())
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  }
});

client.on("messageCreate", message => { 
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
  if(message.content.startsWith(prefix + "slowmode")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
if(!message.member.permissions.has("MANAGE_GUILD")) return
let args = message.content.split(" ").slice(1).join(" ")
let channel = message.mentions.channels.first() || message.guild.channels.cache.find(ch => ch.name ===args)
let limit = message.content.split(" ").slice(2).join(" ")
if(!args) return message.reply("Please Write Channel")
if(!limit) return message.reply("Please Write slowmode")
if(isNaN(limit)) return message.reply("Just Send Number")
if(!limit > 9) return message.reply("I cant 99 User More")
channel.setRateLimitPerUser(limit)
let embed = new MessageEmbed()
.setTitle("Done Set slowmode channel")
.addField("Name", limit.toString())
.addField("Moderation", `<@${message.author.id}>`)
message.channel.send({embeds: [embed]})
}
});

client.on("messageCreate", message => { 
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
  if(message.content.startsWith(prefix + "timeAfk")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
if(!message.member.permissions.has("MANAGE_GUILD")) return
let limit = message.content.split(" ").slice(1).join(" ")
if(!limit) return message.reply("Please Write Afk Time")
if(isNaN(limit)) return message.reply("Just Send Number")
if(!limit > 3600) return message.reply("You Cant Send More second Last Second 3600")
message.guild.setAFKTimeout(limit)
let embed = new MessageEmbed()
.setTitle("Done Afk TimeOut setup")
.setColor("RANDOM")
.addField("Time", limit.toString())
.addField("Moderation", `<@${message.author.id}>`)
message.channel.send({embeds: [embed]})
}
});
client.on("messageCreate", async message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "hAfk")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if(!message.member.permissions.has("MANAGE_GUILD")) return
    let help = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setFooter(client.user.username,client.user.avatarURL())
      .setTimestamp()  
      .setThumbnail(message.guild.iconURL()).setDescription(`
  How To Use Afk Time Out
  

 1. how to use Times
 2. [60 = 1minute,300 = 5minute, = 900 = 15 minute, 1800 = 30minute,3600 = 1hour]
 3. use It ${prefix}timeAfk 300 and other
`);
    message.channel.send({ embeds: [help] });
  }
});
client.on("messageCreate", message => { 
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
  if(message.content.startsWith(prefix + "setName")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
let args = message.content.split(" ").slice(1).join(" ")
if(!args) return message.reply("Please Write Name")
message.guild.setName(args)
let embed = new MessageEmbed()
.setTitle("Done setup nsfw channel")
.setColor("RANDOM")
.addField("Channel", args.toString())
.addField("Moderation", `<@${message.author.id}>`)
message.channel.send({embeds: [embed]})
}
});

client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "ping")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
  let user = message.mentions.members.first() || message.author
  let ping = new MessageEmbed()
  .setTitle("Info Ms")
  .setColor("RANDOM")
  .addField("User", user.toString())
  .addField("Ping", `${Date.now() - message.createdTimestamp}ms`)
  message.channel.send({embeds: [ping]})
  }
});

client.on("messageCreate",message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "listemojis")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    let emojis = message.guild.emojis.cache.map(r => `${r}`).sort((a, b) => a < b).join(`,`)
      let emojianimated = message.guild.emojis.cache.filter(a=> a.animated).map(r => `${r}`).sort((a, b) => a < b).join(`,`)
      let emojinormal = message.guild.emojis.cache.filter(a=> !a.animated).map(r => `${r}`).sort((a, b) => a < b).join(`,`)
     let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${message.guild.name} Emojis List;`,message.guild.iconURL())
      .setDescription(`**AllEmojis**; ${message.guild.emojis.cache.size}\n **Animated**; ${emojianimated} [${message.guild.emojis.cache.filter(a=> a.animated).size}]\n **Normal**; ${emojinormal} [${message.guild.emojis.cache.filter(a=> !a.animated).size}]`)
      .setFooter(client.user.username,client.user.avatarURL())
      .setTimestamp()
      message.channel.send({embeds: [embed]})                                                                                                        
  }
});

client.on("messageCreate", async message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "mute")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Permission `MANAGE_CHANNELS`");
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS"))
      return message.reply("I Dont Have Permission `MANAGE_CHANNELS`");
    var member = message.mentions.members.first();
    const reason = message.content.split(" ").slice(2);
    let muterole = message.guild.roles.cache.find(
      r => r.name === "Mute BlackJack",
      "Muted"
    );
    if (!member) return message.reply("Member Not Founded");
    if (!muterole) {
      try {
        muterole = await message.guild.roles.create({
          name: "Mute BlackJack",
          reason: "Creating MuteRole"
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.permissionOverwrites.create(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    member.roles.add(muterole);
    let embed = new MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle(`Member Has Been Muted`)
      .addField(`Member Muted`, member.toString())
      .addField(`Reason`, reason.toString() || `None`)
      .addField(`Moderation`, `<@${message.author.id}>`)
      .setFooter(`Requested By | ${message.author.tag} `);
    message.channel.send({ embeds: [embed] });
  }
});
client.on("messageCreate", async message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "unmute")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_ROLES")) return;
    var member = message.mentions.members.first();
    let role = message.guild.roles.cache.find(
      r => r.name === "Mute BlackJack",
      "Muted"
    );
    if (!member)
      return `I Cant Find The Member | *Please Mention Member For Unmute, Usage: b!unmute @BlackJack#1000**`;
    member.roles.remove(role);
    const embed = new MessageEmbed()
      .setTitle("Unmuted Member✅")
      .addField("Name Member", member.toString())
      .addField("Moderation", `<@${message.author.id}>`)
      .setFooter(`Requested By | ${message.author.tag}`);
    message.channel.send({ embeds: [embed] });
  }
});
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "tempmute")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_GUILD")) return;
    let args = message.content.split(" ").slice(1);
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args.id);
    let muterole = message.guild.roles.cache.find(
      bj => bj.name === "Mute BlackJack"
    );
    if (!muterole) {
      try {
        muterole = message.guild.roles.create({
          name: "Mute BlackJack",
          reason: "Creating MuteRole"
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.permissionOverwrites.create(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    let mutetime = args[1];
    if (!mutetime)
      return message.reply(
        `Usage: ${prefix}tempmute @Member 10s or 1h or 1d or 1y`
      );
    member.roles.add(muterole);
    message.channel.send(`<@${member.id}> has been Muted For ${mutetime}`);
    setTimeout(function() {
      member.roles.remove(muterole);
      let embed = new MessageEmbed()
        .setTitle("Tempmute is end")
        .setColor("RANDOM")
        .addField("Member UnMuted", member.toString())
        .addField("Moderation", `<@${message.author.id}>`);
      message.channel.send({ embeds: [embed] });
    }, ms(mutetime));
  }
});

client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
if(message.content.startsWith(prefix + "vmutall")) {
 if(!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send("You dont have permission `MUTE_MEMBERS` to perform this command!")
  if(!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send("I dont have permission `MUTE_MEMBERS` to perform this command!")
message.guild.members.cache.filter(m => m.VoiceChannel).forEach(m => {
     m.voice.setMute(true)
  message.react("✅")
})
}})
client.on("messageCreate", message => {  
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
if(message.content.startsWith(prefix + "unvmutall")) {
 message.guild.members.cache.filter(m => m.VoiceChannel).forEach(m => {
     m.voice.setMute(false)
  message.react("✅")
 })
}})

client.on("messageCreate", async message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "lock")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
    return message.channel.send("**Please Check Your Permissions**");
    message.channel.permissionOverwrites
      .create(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("LOCKED CHANNEL")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        message.channel.send({ embeds: [embed] });
      });
  }
});
client.on("messageCreate", async message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "unlock")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
    message.channel.permissionOverwrites
      .create(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("UNLOCKED CHANNEL")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        message.channel.send({ embeds: [embed] });
      });
  }
});
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "ban")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(" ").slice(1);
    let Member =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]);
    var Reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.reply("**Please Mention Member Or Id Member**");
    if (!Member) return message.reply("Icant find Member");
    message.guild.members.ban(Member, { reason: [Reason] });
    let embed = new MessageEmbed()
      .setTitle("Banned From The Server✅")
      .addField("Member Banned", Member.toString())
      .addField("Moderation", message.author.tag)
      .addField("Reason", Reason.toString() || `None`)
      .setFooter(`Requested By | ${message.author.tag}`);
    message.channel.send({ embeds: [embed] });
  }
});
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "kick")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(" ").slice(1);
    let Member =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0])
    var Reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.reply("**Please Mention Member Or Id Member**");
    if (!Member) return message.reply("Icant find Member");
    message.guild.members.kick(Member, { reason: [Reason] });
    let embed = new MessageEmbed()
      .setTitle("Kicked From The Server✅")
      .addField("Member Kicked", Member.toString())
      .addField("Moderation", message.author.tag)
      .addField("Reason", Reason.toString() || `None`)
      .setFooter(`Requested By | ${message.author.tag}`);
    message.channel.send({ embeds: [embed] });
  }
});

var warns = require("./warning.json");
function saveWarning() {
  fs.writeFileSync("./warning.json", JSON.stringify(warns, null, 4));
}
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "warning")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_GUILD")) return;
    let user = message.mentions.members.first();
    let reason = message.content.split(" ").slice(2);
    if (!user) return message.reply("Mn natwanm aw kasa bdozmawa");
    if (!reason) return message.reply("Tkaya Hokarek bnwsa");
    if (!warns[user.id])
      warns[user.id] = {
        warns: 0
      };
    warns[user.id].warns++;
    saveWarning();
    let embed = new MessageEmbed()
      .setTitle("Done Warned✅")
      .addField("Member", user.toString())
      .addField("Moderation", message.author.tag)
      .addField("Reason", reason.toString());
    message.channel.send({ embeds: [embed] });

    if (warns[user.id].warns == 2) {
      let muterole = message.guild.roles.cache.find(c => c.name === "Muted");
      let mutetime = "58s";
      user.roles.add(muterole);
      message.channel.send("Done Have Been Muted");
      setTimeout(function() {
        user.roles.remove(muterole);
        message.reply(`<@${user.id}> has been unmuted.`);
      }, ms(mutetime));

      if (warns[user.id].warns == 3) {
        message.guild.members.ban(user, { reason: [reason] });
        message.reply("Band Kra Bahoy Hala Krdn 3 jar");
        saveWarning();
      }
    }
  }
});
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
    const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "warnlevel")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    let user = message.mentions.members.first();
    if (!user) return message.reply("I cant Find Member");
    if (!warns[user.id])
      warns[user.id] = {
        warns: 0
      };
    const embed = new MessageEmbed()
      .setColor(0xffff01)
      .setTimestamp()
      .addField("Action:", "Warn Check")
      .addField("User:", user.toString())
      .addField("Number of warnings:", warns[user.id].warns.toString());
    message.channel.send({ embeds: [embed] });
  }
});

client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "temprole")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_GUILD")) return;
    let args = message.content.split(" ").slice(2);
    let member =
      message.mentions.members.first() || message.guild.members.cache.get(args);
    let role =
      message.guild.roles.cache.find(bj => bj.name === args[0]) ||
      message.mentions.roles.first();
    if (!role) return message.reply("Role Not Founded");
    let mutetime = args[1];
    if (!mutetime)
      return message.reply(
        `Usage: ${prefix}tempmute @Member 10s or 1h or 1d or 1y`
      );
    member.roles.add(role);
    message.channel.send(
      `<@${member.id}> Done Has been RoleAdd ${role} ${mutetime}`
    );
    setTimeout(function() {
      member.roles.remove(role);
      let embed = new MessageEmbed()
        .setTitle("Temprole is end")
        .addField("Member UnMuted", member.toString())
        .addField("Moderation", `<@${message.author.id}>`)
        .addField("Role", role.toString());
      message.channel.send({ embeds: [embed] });
    }, ms(mutetime));
  }
});

client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "unban")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    let args = message.content.split(" ").slice(1);
    if (!args) return message.reply("Please Mention Member Or Id");
    var Member =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args.id);
    message.guild.bans.fetch().then(bans => {
      var Unban = bans.find(m => m.id === args[1]);
      if (!Unban)
        return message.channel.send(
          `:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`
        );
      message.guild.members.unban(Member);
      message.channel.send(
        `:white_check_mark: Successfully UNBANNED ${args} From the server!`
      );
    });
  }
});

client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "setAfk")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!message.member.permissions.has("MANAGE_GUILD")) return;
    let args = message.content.split(" ").slice(1);
    let channel = message.guild.channels.cache.find(c => c.name === args[0]);
    if (!args) return message.reply("Please Write Name Channel Voice To Setup");
    if (!channel) return message.reply("Channel not Founded");
    message.guild.setAFKChannel(channel);
    let embed = new MessageEmbed()
      .setTitle("Done Setup Channel Afk")
      .addField("Moderation", `<@${message.author.id}>`)
      .addField("Channel Afk", args.toString())
      .setFooter(`Requested By | ${message.author.tag}`);
    message.channel.send({ embeds: [embed] });
  }
});



var game = require("./game.json");
function saveGame() {
  fs.writeFileSync("./game.json", JSON.stringify(game, null, 4));
}
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "slots")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (!game[message.author.id])
      game[message.author.id] = {
        cash: 0
      };
    let slots = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓']
    let random1 = Math.floor(Math.random() * slots.length);
    let random2 = Math.floor(Math.random() * slots.length);
    let random3 = Math.floor(Math.random() * slots.length);
    let chance;
    if (random1 === random2 && random2 === random3) {
      let cashwin = Math.floor(Math.random() * 500) + 100 
    
          game[message.author.id].cash += Math.floor(+cashwin)  
      let embed = new MessageEmbed()
        .setFooter("You Win")
        .setTitle(":slot_machine:Slots:slot_machine:")
        .setDescription(
          `Result: ${slots[random1]}|${slots[random2]}|${slots[random3]}`
        )
        .addField("You Cash Win", cashwin.toString())
        .setColor("RANDOM");
      message.channel.send({ embeds: [embed] });
    } else {
        let cashlost = Math.floor(Math.random() * 500) + 100
         game[message.author.id].cash += Math.floor(-cashlost)
      let embed = new MessageEmbed()
        .setFooter("You Lost!")
        .setTitle(":slot_machine:Slots:slot_machine:")
        .setDescription(
          `Result: ${slots[random1]}|${slots[random2]}|${slots[random3]}`
        )
        .setColor("RANDOM");
      return message.channel.send({ embeds: [embed] });
     
    }
  }
  saveGame();
});
var time = require("./time.json");
function saveCooldown() {
  fs.writeFileSync("./time.json", JSON.stringify(time, null, 4));
}
const pretty = require("pretty-ms")
client.on("messageCreate", message => { 
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "daily")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
  if (!game[message.author.id])
      game[message.author.id] = {
        cash: 0
      };         
let cooldown = 8.64e7;
let Daily = time[message.author.id];
if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);     
  message.channel.send( `** ${ message.author.username }, your daily cash refreshes in ${pretty(times, { verbose: true })}.**`)
  saveCooldown()
    } else {
let amount = Math.floor(Math.random() * 500) + 1000   
game[message.author.id].cash += amount
time[message.author.id] = Date.now()
message.channel.send(`Done Added Money ${amount}`)
    }
}})
client.on("messageCreate", message => { 
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix;
    if (message.content.startsWith(prefix + "work")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}      
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
  if (!game[message.author.id])
      game[message.author.id] = {
        cash: 0
      }; 
let cooldown = 8.64e7;
let Daily = time[message.author.id];
if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);     
  message.channel.send(`** ${ message.author.username }, your Now Tired refreshes in ${pretty(times, { verbose: true })}.**`)
  saveCooldown()
    } else {      
let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic','Market']  
let result = replies[Math.floor(Math.random() * replies.length)]
let amount = Math.floor(Math.random() * 506) + 100   
game[message.author.id].cash += amount
 time[message.author.id] = Date.now()      
let total = game[message.author.id].cash
let embed = new MessageEmbed()
.setTitle(`<@${message.author.id}>`)
.addField("You Worked", result.toString())
.addField("You Cash", amount.toString())
.addField("Total Your Money", total.toString())
.setColor("RANDOM")
message.channel.send({embeds: [embed]})

 }
}});

const owner = ["744957669164712050"]
var blacklist = require("./blacklist.json");
function saveList() {
  fs.writeFileSync("./blacklist.json", JSON.stringify(blacklist, null, 4));
}
client.on("messageCreate", message => { 
   if (message.content.startsWith(prefix + 'blacklist')) {
     if (!owner.includes(message.author.id)) return
  let args = message.content.split(" ").slice(1) 
  let member = message.mentions.members.first()   
  if(!args) return message.reply("Please Mention Member For WhiteList")
  if(!member) return message.reply("Member Not Founded")
  if(!blacklist[member.id])
blacklist[member.id] = {
Blacklist: "OFF"
}      
  if(blacklist[member.id].Blacklist === "OFF") {
    let embed = new MessageEmbed()
  .setTitle("Done Added on Black list")
  .addField("Member", member.toString())
  .setFooter(message.guild.name)
  message.channel.send({embeds: [embed]})     
blacklist[member.id].Blacklist = "ON";
}}})
const bj = ["744957669164712050"]
client.on("messageCreate", message => { 
   if (message.content.startsWith(prefix + 'remove')) {
     if (!bj.includes(message.author.id)) return
  let args = message.content.split(" ").slice(1) 
  let member = message.mentions.members.first()   
  if(!args) return message.reply("Please Mention Member For WhiteList")
  if(!member) return message.reply("Member Not Founded")
  if(!blacklist[member.id])
blacklist[member.id] = {
Blacklist: "OFF"
}      
  if(blacklist[member.id].Blacklist === "OFF") {
let embed = new MessageEmbed()
  .setTitle("Done Removed on Black list")
  .addField("Member", member.toString())
  .setFooter(message.guild.name)
  message.channel.send({embeds: [embed]})  
}
blacklist[member.id].Blacklist = "OFF";
}})
////jare mawyaty        

const devs = ["744957669164712050"]
client.on("messageCreate", message => {
   if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
if(message.content.startsWith(prefix + "addcash")) {
  if (!devs.includes(message.author.id)) return
  if (!game[message.author.id])
      game[message.author.id] = {
        cash: 0
      };
let args = message.content.split(" ").slice(1)
let member = message.mentions.members.first() || message.author;
let amount = args[1]
if (!amount || isNaN(amount)) return message.reply("Please specify a valid")
if (!game[member.id]) return
  game[member.id].cash += +args[1]
const embed = new MessageEmbed()
        .setTitle(`Money Added!`)
        .addField(`User`, `<@${member.id}>`)
        .addField(`Balance Given`, amount.toString())
        .addField(`Total Amount`, game[member.id].cash.toString())
        .setColor("RANDOM")
        .setTimestamp();
  saveGame()
  message.channel.send({embeds: [embed]})
 }
});

client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "cash")) { 
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}    
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    let author = message.mentions.members.first() || message.author;
    if (author.bot) return message.channel.send(`**:thinking: | ${message.author.username}, bots do not have cash**`)  
    message.channel.send(`${author} Total Cash **💶${game[author.id].cash}** Money`);
  } 
});
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "send")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>") 
  var args = message.content.split(" ").slice(2) 
  let mention = message.mentions.users.first()      
  if(!game[message.author.id].cash) return message.reply("You don't have any money")
  if(!mention) return message.reply("Member Not Founded")
  if (args[2] > game[message.author.id].cash)return message.channel.send(`**:thinking: | ${message.author.username}, Your balance is not enough for that!**`)   
  
  game[message.author.id].cash += Math.floor(-args)
    
          game[mention.id].cash += Math.floor(+args)  
let embed = new MessageEmbed()
.setTitle("Done Transfer Cash")
.addField("Member", mention.toString())
.addField("Cash Transfer", args.toString())
.addField("Total Cash", game[mention.id].cash.toString())
.addField("Sended By", `<@${message.author.id}>`)
.setColor("RANDOM")
message.channel.send({embeds: [embed]})
}
saveGame()
});


var xp = require("./level.json");
function saveLevel() {
  fs.writeFileSync("./level.json", JSON.stringify(xp, null, 4));
}

client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!game[message.author.id])
    game[message.author.id] = {
      cash: 0
    };
  saveGame();
  let Addxp = Math.floor(Math.random() * 6) + 8;

  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      rank: 0,
      level: 1
    };
  }
  saveLevel();
  let rank = xp[message.author.id].rank;
  let level = xp[message.author.id].level + 1;
  let nextLvL = xp[message.author.id].level * 1000;
  xp[message.author.id].rank = rank + Addxp;
  if (nextLvL <= xp[message.author.id].rank) {
    xp[message.author.id].level = xp[message.author.id].level + 1;
let cash = Math.floor(Math.random() * 50000) + 10000
    game[message.author.id].cash += cash
    let embed = new MessageEmbed()
      .setTitle("Level Up")
      .setColor("RANDOM")
      .addField(`Level Up To`, level.toString())
      .addField("Cash Free", cash.toString());
    message.channel.send({ embeds: [embed] });
   ; 
  }
});

client.on('messageCreate', message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
     
    let user = message.mentions.members.first() || message.author
    if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
      if(message.content.startsWith(prefix + "rank")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
 
        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                rank: 0,
                level: 1,
            }
        }
      saveLevel()
    let xpp = xp[message.author.id].rank;
    let level = xp[message.author.id].level;
    let nextlvlxp = level * 200;
    let difference = nextlvlxp - xp
        var embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Profile')
        .addField('Name Member', user.toString())
        .addField('XP: ', xpp.toString())
        .addField('Level: ', level.toString())
        message.channel.send({embeds: [embed]});
 
    }
});
client.on("messageCreate", message => {
  if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "cf")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    let amount = Math.floor(Math.random() * 5006) + 1000   
game[message.author.id].cash += amount
    var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {

	const embedheads = new MessageEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on heads and You Won **💶${amount}**`);
	message.channel.send({embeds: [embedheads]});
	} else if (resultflip == 2) {
  let amount = Math.floor(Math.random() * 5006) + 1000   
game[message.author.id].cash -= amount
	const embedtails = new MessageEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on head and You Lost Cash Free **💶${amount}**`);
	message.channel.send({embeds: [embedtails]})
  }
 }
});
var booster = require("./booster.json");
function saveBooster() {
  fs.writeFileSync("./booster.json", JSON.stringify(booster, null, 4));
}
client.on("messageCreate", message => {
    if (!p[message.guild.id])
    p[message.guild.id] = {
      prefix: "b!"
    };
  const prefix = p[message.guild.id].prefix
  if(message.content.startsWith(prefix + "setBooster")) {
  if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
  if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("You dont Have Manage Guild Permission")
if(!message.guild.me.permissions.has("MANAGE_GUILD")) return message.reply("I dont Have Manage Guild Permission")
let zhwr = message.content.split(" ").slice(1).join(" ")
let channel = message.guild.channels.cache.find(ch => ch.name === zhwr[0]) || message.guild.channels.cache.find(ch => ch.id === zhwr[0]) || message.mentions.channels.first()
if(!zhwr) return message.reply("Please Write Name To Channel Booster")
if(!channel) return message.channel.send("Opps I cant Find Channel")
let embed = new MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setTitle("Done Setup Room Booster✅")
.addField("Name Room", channel.toString())
.addField("Moderation", `<@${message.author.id}>`)
.setColor("RANDOM")
message.channel.send({embeds: [embed]})
booster[message.guild.id] = {
channel: zhwr
}}
saveBooster()
});
client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "tBooster on")) {
if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
    if (message.author.bot || !message.channel.guild) return;
if(!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
    booster[message.guild.id] = {
      onoff: "on"
    };
    saveLevel()
        let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Toggle CHANNEL")
        .setDescription("**The Toggle ChannelBooster Is On 🔐 **")
        .addField("**By**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send({ embeds: [embed]})
 
  }
 })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
    if(message.content.startsWith(prefix + "tBooster off")) {
if(!blacklist[message.author.id])
blacklist[message.author.id] = {
Blacklist: "OFF"
}
if(blacklist[message.author.id].Blacklist === "ON")return message.reply("Sorry You Have Been Added On BlackList To Remove Talk To <@744957669164712050>")
          if(!message.channel.guild) return;
  if(!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
  booster[message.guild.id] = {
  onoff: 'Off',
  }
  saveLevel()
 
      let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Toggle Channel")
        .setDescription("**The Toggle ChannelBooster Is Off**")
   .addField("**By**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
       message.channel.send({ embeds: [embed]})
    }    
 
})


client.on("guildMemberBoost", member => {
let channel = client.channels.cache.find(ch => ch.name === booster[member.guild.id].channel)
let count = member.guild.premiumSubscriptionCount
let tier = member.guild.premiumTier
let embed = new MessageEmbed()
.setTitle(`Server: ${member.guild.name}`)
.addField("Total Bost Server", count.toString())
.addField("Tier Boost", tier.toString())
.addField("Member Booster", `<@${member.guild.name}>`)
channel.send({embeds: [embed]})
});
client.on("guildMemberUnBoost", member => {
let channel = client.channels.cache.find(ch => ch.name === booster[member.guild.id].channel)
let count = member.guild.premiumSubscriptionCount
let tier = member.guild.premiumTier
let embed = new MessageEmbed()
.setTitle(`Server: ${member.guild.name}`)
.addField("Total Bost Server", count.toString())
.addField("Tier Boost", tier.toString())
.addField("Member Booster", `<@${member.guild.name}>`)
channel.send({embeds: [embed]})
});



 






client.login(TOKEN);
