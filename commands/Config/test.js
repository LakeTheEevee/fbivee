module.exports.run = async (client, message, args) => {
    message.channel.send("test")
}

module.exports.help = {
  name: "test",
  description: "Test command, delete after done.",
};