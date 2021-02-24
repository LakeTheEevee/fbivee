module.exports.run = async (client, message, args) => {
  const Discord = require('discord.js');
  const target = message.mentions.members.first()
  let filtera = m => m.author.id === message.author.id 
  let filterb = m => m.author.id === target.id
  const author = message.author
  const authorid = message.author.id
  const targetid = target.id
  const targetun = target.user.username
  const authorun = message.author.username
  if (!args[0]) return (message.channel.send("Cmon, mention someone to nickbet with!")) 
  
  if (!message.mentions.members.first()) return (message.channel.send("Cmon, mention someone to nickbet with!"))
  
  if(target.id === message.author.id) return (message.channel.send("You can't nickbet with yourself."))
  if (target.user.bot) return (message.channel.send("You can't nickbet bots, they won't respond!"))
  const target0 = args.shift()
  let targetnick = args.join(" ");
  if (!targetnick) return (message.channel.send("Add a nickname to bet with after pinging them!"))
  if (targetnick.length > 32) return (message.channel.send("The nickname is too long! Make it shorter or equal to 32 characters."))
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Woohoo! Nickbet Time!")
  .setDescription(`<@${targetid}>, do you want to nickbet with <@${authorid}>? Your nickname will be changed to \`${targetnick}\` if you lose.\nReply with \`yes\` or \`no\`.`)
  .setTimestamp()
  message.channel.send(embed1).then(() => {
    message.channel.awaitMessages(filterb, {
        max: 1, // number of messages collected
        time: 15000, // in ms, divided by 1000 to get seconds
        errors: ['time'] // is here so that .catch shows when i cant send in time limit
      })
      .then(message => {
        message = message.first()
        if (message.content.toLowerCase() == 'yes') {
          
  message.channel.send(`<@${targetid}>, what should ${authorun} change his nickname to?`).then(() => {
    message.channel.awaitMessages(filterb, {
        max: 1, // number of messages collected
        time: 15000, // in ms, divided by 1000 to get seconds
        errors: ['time'] // is here so that .catch shows when i cant send in time limit
      })
      .then(message => {
        message = message.first()
        const authornick = message
        if (message.content.length > 32) return (message.channel.send("The nickname is too long! Make it shorter or equal to 32 characters next time."))
        else {
        message.channel.send(`<@${authorid}>, choose heads or tails to coin flip.`).then(() => {
          message.channel.awaitMessages(filtera, {
              max: 1, // number of messages collected
              time: 15000, // in ms, divided by 1000 to get seconds
              errors: ['time'] // is here so that .catch shows when i cant send in time limit
            })
            .then(message => {
              const rare = Math.floor(Math.random()*200)
              const embed2 = new Discord.MessageEmbed
              message = message.first()
              if (message.content.toLowerCase() == 'heads') {
                const add = []
                const added = ""
                if (rare == 0) {
                  if (authormember.manageable === false) {
                    add.push(`<@${authorid}>`)
                  } else {
                    guild.member(author).setNickname(authornick, `Nickbet loss with ${targettag}`)
                  }
                  if (target.manageable === false) {
                    add.push(`<@${targetid}`)
                  } else {
                    guild.member(target).setNickname(targetnick, `Nickbet loss with ${targettag}`)
                  }
                  if (add.length == 1) {
                    added += `\nI can't change ${add[0]}'s nickname because of role hierachy!`
                  } else if (add.length == 2){
                    added += `\nI can't change both of your nicknames because of role hierachy!`
                  }
                  embed2.setTitle("Oh no!");
                  embed2.setDescription("The coin stood on its edge! You both lose."+added);
                  embed2.setTimestamp()
                  message.channel.send(embed2)
                } else if (rare == 1) {
                  embed2.setTitle("Oh shit!");
                  embed2.setDescription("The coin bounced away! You both don't lose.");
                  embed2.setTimestamp()
                  message.channel.send(embed2)
                }
              } else if (message.content.toLowerCase() == 'tails') {
                message.channel.send(`sends when i send "b"`)
              } else {
                message.channel.send(`sends when i send anything else than a or b`)
              }
            })
            .catch(collected => {
                message.channel.send('15 seconds. heads or tails. you cant fucking send.');
            });
        })
      }
      })
      
      .catch(collected => {
          message.channel.send(`Cmon just give ${authorun} a nickname to nickbet with`);
      });
  })
        } else if (message.content.toLowerCase() == 'no') {
          message.channel.send(`Welp, looks like ${targetun} doesn't want to nickbet.`)
        } else {
          message.channel.send(`Please, make my job easier, answer \`yes\` or \`no\` next time.`)
        }
      })
      .catch(collected => {
          message.channel.send('Bro is it really that hard to answer `yes` or `no` in 15 seconds :pensive:');
      });
  })
}
module.exports.help = {
  name: "nickbet",
  description: "Nickbet - 2 people choose the nickname the other needs to change to when they lose, then they flip a coin. (concept)",
  aliases: ["nb"]
};