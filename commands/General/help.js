module.exports.run = async (client, message, args) => {
    const config = require("../../config.js")
    const Discord = require("discord.js")
    const dpages = require("discord-pages")
    const { randomColor } = require("rgb-random-color");
    const embed1 = new Discord.MessageEmbed()
    const embed2 = new Discord.MessageEmbed()
    const embed3 = new Discord.MessageEmbed()
    const embed4 = new Discord.MessageEmbed()
    const pages = [embed1, embed2, embed3, embed4]
        // normal help command
        embed1
            .setTitle(":question: Help")
            .setDescription(":hammer_and_wrench: Useful Commands")
            .setColor(randomColor())
            .addField("help","\"Help, help, I need help!\"")
            .addField("ping",":ping_pong: Pong! Latency.")
            .setTimestamp()
        embed2
            .setTitle(":question: Help")
            .setDescription(":video_game: Fun Commands")
            .setColor(randomColor())
            .addField("askbiden","Ask something to Biden.")
            .addField("echo","The bot echoes input.")
            .addField("reverse", "The bot reverses input.")
            .setTimestamp()
        embed3
            .setTitle(":question: Help")
            .setDescription(":dollar: Currency Commands")
            .setColor(randomColor())
            .addField("balance","Checks your balance.")
            .addField("beg","Gives a small amount of money.")
            .addField("start", "Creates your currency profile.")
            .setTimestamp()
        embed4
            .setTitle(":question: Help")
            .setDescription(":musical_note: Music Commands")
            .addField("summon", "Summons the bot to VC.")
        const embedPages = new dpages({ 
            pages: pages, 
            channel: message.channel, 
            restricted: (user) => user.id === message.author.id,
            });
        embedPages.createPages()
}
module.exports.help = {
    name: "help",
    description: "Help command!",
    aliases: ["h"]
};