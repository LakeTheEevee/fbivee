module.exports.run = async (client, message, args) => {
  const config = require("../../config.js");
  const { Database } = require("quickmongo");
  const db = new Database(config.DBURL);
  const curr = db.createModel("currency");
  const eargs = message.content.split(" ").slice(1);
  if (message.author.id !== config.OWNERID) return;
  try {
    const code = eargs.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    message.channel.send(evaled, { code: "xl" });
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
  }
};
module.exports.help = {
  name: "evaluate",
  description: "evaluates code",
  aliases: ["eval"],
};
