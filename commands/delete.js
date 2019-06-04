const Discord = require("discord.js");

module.exports.command = {
    name: "delete",
    aliases: ["d"],
    description: "delete messages",
    category: "",
    usage: "delete #"
}

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Invalid Permissions");
    if (!args[0]) return message.channel.send("Specify delete amount");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.bulkDelete(1);
        message.channel.send(`Deleted ${args[0]} messages`).then(msg => msg.delete(3000));
    });
}