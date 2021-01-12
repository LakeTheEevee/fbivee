exports.run = (client, message, args) => {
  const config = require("../config.json");
  if (message.member.id !== config.ownerid) {
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
        `hey you give me something real to rl`
      )
    );
  } else {
    const commandName = args[0];
    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`\*loads gun\* got it`);
    console.log(
      `bui bui rl\'ed ${args}`
    );
  }
};
