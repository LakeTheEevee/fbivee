module.exports.run = async (client, message, args) => {
    const target = message.mentions.members.first();
    const filter = message => message.content.includes('');
    const collector = message.channel.createMessageCollector(filter, { max: 1, time: 15000 });

    message.reply("Who do you want to nick bet with? Reply in 15 seconds.")
    collector.on('collect', message => {
        return message.channel.send("You can't nickbet with yourself."), console.log(`${message.member.user.tag} used nickbet but they targetted themselves`)
    });

    collector.on('end', collected => {
        if (collected.target.id === message.author.id) {
            return message.channel.send("You can't nickbet with yourself."), console.log(`${message.member.user.tag} used nickbet but they targetted themselves`)
        } else {
            collector.on('collect', message => {
                message.reply("What nickname do you want to nickbet")
                });
            collector.on('end', collected => {
                message.reply("hey ur here");
            });
            
        }
    });
}

module.exports.help = {
    name: "nickbet",
    description: "Nickbet - 2 people choose the nickname the other needs to change to when they lose, then they flip a coin. (concept)",
    aliases: ["nb"]
};