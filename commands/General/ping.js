module.exports.run = async (client, message, args) => {
    const msgCreated = message.createdTimestamp;

    message.channel.send(":ping_pong: Pinging...")
        .then(m => {
            m.edit(`:ping_pong: Pong! Took \`${m.createdTimestamp - msgCreated}ms\``);
        });
};

module.exports.help = {
    name: "ping",
    description: "Ping command",
    aliases: ["pong"]
};