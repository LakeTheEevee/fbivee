exports.run = (client, message, args) => {
  var ping = Date.now() - message.createdTimestamp;
  message.channel.send(`bui bui the ping is \`${ping}ms\``);
};
