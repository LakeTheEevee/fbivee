module.exports.run = async (client, message, args) => {
    let text = args.join(" ");
    message.channel.send(text);
    console.log(
        `${message.member.user.tag} used echo to say ${text}`
      )
}

module.exports.help = {
  name: "echo",
  description: "Echos what the user said.",
  aliases: ["say"]
};