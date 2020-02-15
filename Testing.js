var HOIRoleName=["HOI4"];

var roleName=[""];
var emojiName=[""];
`
o Hearts of Iron 4 (HOI4) - :chestnut:
o Crusader Kings 2 (CK2) - :crown:
o Civilisation 5 (CIV5) - :map:
- Europa 4 (EU4) - :euro:
o Team Fortress 2 (TF2) - :tophat:
- Stellaris (STL) - :star:
- Final Fantasy XIV (FFXIV) - :fire:
- War Thunder (WTD) - :airplane:`

var hoiroleName=["HOI4"];
var ckroleName=["CK2"];
var civroleName=["CIV5"];
var euroleName=["EU4"];
var tfroleName=["TF2"];
var stlroleName=["STL"];
var ffroleName=["FFXIV"];
var wtdroleName=["WTD"];

var hoiemojiName=["chestnut"];
var ckemojiName=["crown"];
var civemojiName=["map"];
var euemojiName=["euro"];
var tfemojiName=["tophat"];
var stlemojiName=["star"];
var ffemojiName=["fire"];
var wtdemojiName=["airplane"];

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
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    for(let n in emojiname){
    if(reaction.emoji.name == emojiname[n]){
        let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
        reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
