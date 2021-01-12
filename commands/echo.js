exports.run = (client, message, args) => {
    let text = args.join(" ");
    message.channel.send(text);
}