module.exports.run = async (client, message, args) => {
  const commandName = args[0];
  const config = require("../../config.js");
  if (message.member.id !== config.OWNERID) return
  if (!args || args.length < 1) {
    return (
      message.reply(`fr?`)
    );
  } else if (!client.commands.has(commandName)) {
    return (
      message.reply("are you stupid or are you stupid")
    );
  } else {
    const commandName = args[0];
    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`got it`);
  }
};

module.exports.help = {
  name: "reload",
  description: "Reloads commands",
  aliases: ["rl"]
};