const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on("messageReactionAdd", (messageReaction, user) => {
    
    // let roleName = messageReaction.emoji.name;
    // let role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());

    // if(role){
    //     let member = messageReaction.message.guild.members.find(member => member.id === user.id);
    //     if(member){
    //         member.addRole(role.id);
    //     }
    // }

    if(!user) return;
    if(user.bot) return;
    if(!reaction.message.channel.guild) return;

    let emojiname = ["smiley"];
    let rolename = ["smiley"];

    for(let n in emojiname){
        if(reaction.emoji.name == emojiname[n]){
            let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
            reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});