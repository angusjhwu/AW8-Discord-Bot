const Discord = require("discord.js")
const bot = require("../index.js")
const config = require("../botconfig.json");

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = config.prefix;

    let args = message.content.slice(prefix.length).trim().split(/ +/);
    let cmd = args.shift().toLowerCase();

    let bannedWords = ['walkercom', 'walker.com', 'walker com', 'w41k3rc0m', 'w41k3r.com', 'w41k3r com'];
    let foundInText = false;
    for (var i in bannedWords) {
        if (!message.member.hasPermission("MANAGE_MESSAGES") && message.content.toLowerCase().includes(bannedWords[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
        message.delete();
    }

    let command;
    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    } else {
        return;
    }

    try {
        command.run(bot, message, args);
    } catch (err) {
        console.log(err);
    }

});