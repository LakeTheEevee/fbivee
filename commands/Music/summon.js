module.exports.run = async (client, message, args) => {
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	} else {
        message.channel.send("youre not in vc!")
    }
}
module.exports.help = {
    name: "summon", 
    description: "summon", 
    aliases: ["come", "spawn"]
};