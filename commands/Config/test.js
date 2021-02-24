module.exports.run = async (client, message, args) => {
    if (message.member.manageable === true) {
        message.member.setNickname("furryass")
    } else {
        message.channel.send("hey.")
    }
    };
    module.exports.help = {
        name: "test", 
        description: "testing testing 1234", 
        aliases: [""]
    };