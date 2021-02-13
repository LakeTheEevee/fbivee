module.exports.run = async (client, message, args) => {
  const config = require("../../config.js");
  const Discord = require("discord.js");
  const { Database } = require("quickmongo");
  const db = new Database(config.DBURL);
  const id = message.author.id;
  if ((await db.exists(id)) === true) {
    message.channel.send("You have already created a profile!");
  } else {
    let filter = m => m.author.id === message.author.id
    message.channel.send(`Rules of FBIVee's Currency Commands:
    1. YOU MUST LIKE EEVEE OR ANY EEVEELUTIONS.
    2. IF YOU DONT YOU MUST GET RICKROLLED 69 TIMES.
    Reply me with \`yes\` or \`no\`.`).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 60000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toLowerCase() == 'yes') {
            message.channel.send(`Cool! Welcome to currency commands!`)
            db.add(id+".balance", 500)
          } else if (message.content.toLowerCase() == 'no') {
            message.channel.send(`Alright, let's pretend you never asked.`)
          } else {
            message.channel.send(`Geez, is it that hard to say yes or no?`)
          }
        })
        .catch(collected => {
            message.channel.send('Is it that hard to read and say yes or no in a minute?');
        });
    })
  }
};
module.exports.help = {
  name: "start",
  description: "creates a profile",
  aliases: ["st"],
};
