module.exports.run = async (client, message, args) => {
  const commandName = args[0];
  const config = require("../../config.js");
  if (message.member.id !== config.OWNERID) {
    return (
      message.reply(`\*loads ak\* if you dont stop trying ill shoot you`),
      console.log(
        `${message.member.user.tag} isnt the owner and tried to rl smfh`
      )
    );
  }
  if (!args || args.length < 1) {
    return (
      message.reply(`fr? \*loads glock\*`),
      console.log(
        `${message.member.user.tag} used rl but didnt give a command smfh`
      )
    );
  } else if (!client.commands.has(commandName)) {
    return (
      message.reply("are you stupid or are you stupid"),
      console.log(
        `${message.member.user.tag} used rl but didnt give a command smfh`
      )
    );
  } else {
    const commandName = args[0];
    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`\*loads gun\* got it`);
    console.log(`bui bui rl\'ed ${args}`);
  }
};

module.exports.help = {
  name: "reload",
  description: "Reloads commands",
  aliases: ["rl"]
};