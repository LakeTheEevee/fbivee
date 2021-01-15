exports.run = (client, message, args) => {
    let text = args.join(" ");
    message.channel.send(text);
    console.log(
        `${message.member.user.tag} used echo to say ${text}`
      )
}