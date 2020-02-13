const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
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
o League Of Legends (LOL) - :crystal_ball:

(Please note that not all games have categories. Those that do are marked with a 'o'  for a bullet point)`).then(msg => msg.react(':chestnut:')).then(msg => msg.react(':crown:')).then(msg => msg.react(':map:')).then(msg => msg.react(':euro:')).then(msg => msg.react(':tophat:')).then(msg => msg.react(':star:')).then(msg => msg.react(':fire:')).then(msg => msg.react(':airplane:')).then(msg => msg.react(':crystal_ball:'))

  }
});
// Does role adding if you click a reaction
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":chestnut:"){ //HOI4
      let role = reaction.message.guild.roles.find(r => r.name == "HOI4");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":crown:"){ // Crusader Kings 2
      let role = reaction.message.guild.roles.find(r => r.name == "CK2");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":map:"){ //Civ 5
      let role = reaction.message.guild.roles.find(r => r.name == "CIV5");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":tophat:"){ // TF2
      let role = reaction.message.guild.roles.find(r => r.name == "TF2");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":crystal_ball:"){ //LOL
      let role = reaction.message.guild.roles.find(r => r.name == "LOL");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":chestnut:"){ //HOI4
      let role = reaction.message.guild.roles.find(r => r.name == "HOI2");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":crown:"){ // Crusader Kings 2
      let role = reaction.message.guild.roles.find(r => r.name == "CK2");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":map:"){ //Civ 5
      let role = reaction.message.guild.roles.find(r => r.name == "CIV5");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":tophat:"){ // TF2
      let role = reaction.message.guild.roles.find(r => r.name == "TF2");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":crystal_ball:"){ //LOL
      let role = reaction.message.guild.roles.find(r => r.name == "LOL");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":star:"){ // Stellaris
      let role = reaction.message.guild.roles.find(r => r.name == "STL");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":star:"){ // Stellaris
      let role = reaction.message.guild.roles.find(r => r.name == "STL");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":fire:"){ //FFXIV
      let role = reaction.message.guild.roles.find(r => r.name == "FFXIV");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":fire:"){ //FFXIV
      let role = reaction.message.guild.roles.find(r => r.name == "FFXIV");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":airplane:"){ //LOL
      let role = reaction.message.guild.roles.find(r => r.name == "WTD");
      reaction.message.guild.member(user).addRole(role).catch(console.error);
      }
  }
});
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == ":airplane:"){ //HOI4
      let role = reaction.message.guild.roles.find(r => r.name == "WTD");
      reaction.message.guild.member(user).removeRole(role).catch(console.error);
      }
  }
});
client.login(process.env.token);
