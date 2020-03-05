const Discord = require('discord.js');
const client = new Discord.Client();

// Defining Variables
var hoirolename=["HOI4"];
var ckrolename=["CK2"];
var civrolename=["CIV5"];
var eurolename=["EU4"];
var tfrolename=["TF2"];
var stlrolename=["STL"];
var ffrolename=["FFXIV"];
var wtdrolename=["WTD"];

var hoiemojiname=["🌰"];
var ckemojiname=["👑"];
var civemojiname=["🗺️"];
var euemojiname=["💶"];
var tfemojiname=["🎩"];
var stlemojiname=["⭐"];
var ffemojiname=["🔥"];
var wtdemojiname=["✈️"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log('Bot Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
      client.user.setStatus('online')
      client.user.setPresence({
          game: {
              name: 'WaRoom Discord',
              type: "Watching",
              url: "https://discord.gg/YMKFsuT"
          }
      });
  });

client.on('message', msg => {
  if (msg.content === '!announce') {
    msg.delete(1)
    msg.channel.send(`Welcome to #role-add ! To obtain a role, just react to the reactions displayed down below. A key is supplied below:

o Hearts of Iron 4 (HOI4) - :chestnut:
o Crusader Kings 2 (CK2) - :crown:
o Civilisation 5 (CIV5) - :map:
- Europa 4 (EU4) - :euro:
o Team Fortress 2 (TF2) - :tophat:
- Stellaris (STL) - :star:
- Final Fantasy XIV (FFXIV) - :fire:
- War Thunder (WTD) - :airplane:
o League Of Legends (LOL) - :crystal_ball:`)
    msg.channel.send("(Please note that not all games have categories. Those that do are marked with a 'o'  for a bullet point)").then(msg => msg.react('🌰'));msg => msg.react('👑')
  }
});

//if this works imma just go die.
// client.on('message', msg => {
  // if (msg.content === "(Please note that not all games have categories. Those that do are marked with a 'o'  for a bullet point)") {
    // msg.react('🌰')
    // msg.react('👑')
    // msg.react('🗺️')
    // msg.react('💶')
    // msg.react('🎩')
    // msg.react('⭐')
    // msg.react('🔥')
    // msg.react('✈️')
  // }
// });


// Adds role on addition of reaction.
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in hoiemojiname){
    if(reaction.emoji.name == hoiemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == hoirolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});

client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in ckemojiname){
    if(reaction.emoji.name == ckemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == ckrolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in civemojiname){
    if(reaction.emoji.name == civemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == civrolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in euemojiname){
    if(reaction.emoji.name == euemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == eurolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in tfemojiname){
    if(reaction.emoji.name == tfemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == tfrolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in stlemojiname){
    if(reaction.emoji.name == stlemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == stlrolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in ffemojiname){
    if(reaction.emoji.name == ffemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == ffrolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in wtdemojiname){
    if(reaction.emoji.name == wtdemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == wtdrolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});

// Removes role on removal of reaction
client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in hoiemojiname){
    if(reaction.emoji.name == hoiemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == hoirolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});

client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in ckemojiname){
    if(reaction.emoji.name == ckemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == ckrolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in civemojiname){
    if(reaction.emoji.name == civemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == civrolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in euemojiname){
    if(reaction.emoji.name == euemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == eurolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in tfemojiname){
    if(reaction.emoji.name == tfemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == tfrolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in stlemojiname){
    if(reaction.emoji.name == stlemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == stlrolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in ffemojiname){
    if(reaction.emoji.name == ffemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == ffrolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in wtdemojiname){
    if(reaction.emoji.name == wtdemojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == wtdrolename[n]);
        reaction.message.guild.member(user).removeRole(role).catch(console.error);
        }
    }
});

client.login(process.env.token);
