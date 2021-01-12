exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const responses = ["Will you shut up, man?", "Folks, do you have any idea what this clown is doing?", "And him, too.", "FLY WILL VOTE"];
    const pics = ["https://api.time.com/wp-content/uploads/2019/09/joe-biden-ukraine-fundraising.jpg?w=800&quality=85"];
    const colours = ["#00300a", "#507248", "#380909", "#2b092a", "#180228"];
    const text = args.join(" ");
    const embed = new Discord.MessageEmbed()
    .setTitle('Ask Biden')
    .setDescription(`${message.member.user.username}: ${text}\n\nBiden: ${responses[Math.floor(Math.random() * responses.length)]}`)
    .setThumbnail(pics[Math.floor(Math.random() * pics.length)])
    .setColor(colours[Math.floor(Math.random() * colour.length)]);
    message.channel.send(embed);
}