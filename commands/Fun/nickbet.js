module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const target = message.mentions.members.first()
    let filtera = m => m.author.id === message.author.id 
    let filterb = m => m.author.id === target.id
    if (!args[0]) return (message.channel.send("Cmon, mention someone to nickbet with!")) 
    if (!message.mentions.members.first()) return (message.channel.send("Cmon, mention someone to nickbet with!"))
    if(target.id === message.author.id) return (message.channel.send("You can't nickbet with yourself."))
    if (target.user.bot) return (message.channel.send("You can't nickbet bots, they won't respond!"))
    const target0 = args.shift()
    let targetnick = args.join(" ");
    if (!targetnick) return (message.channel.send("Add a nickname to bet with after pinging them!"))
    const authorid = message.author.id
    const targetid = target.id
    const targetun = target.user.username
    const authorun = message.author.username
    const targettag = target.user.username
    const authortag = message.author.tag
    const authormember = message.member
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
          time: 30000, // in ms, divided by 1000 to get seconds
          errors: ['time'] // is here so that .catch shows when i cant send in time limit
        })
        .then(message => {
          message = message.first()
          const authornick = message.content
          if (message.content.length > 32) return (message.channel.send("The nickname is too long! Make it shorter or equal to 32 characters next time."))
          else {
          message.channel.send(`<@${authorid}>, choose heads or tails to coin flip.`).then(() => {
            message.channel.awaitMessages(filtera, {
                max: 1, // number of messages collected
                time: 15000, // in ms, divided by 1000 to get seconds
                errors: ['time'] // is here so that .catch shows when i cant send in time limit
              })
              .then(message => {
                message = message.first()
                if (message.content.toLowerCase() == 'heads') {
                  const rare = Math.floor(Math.random()*200)
                  const embed2 = new Discord.MessageEmbed
                  const add = []
                  if (rare == 0) { // rare = 0 means both lose
                    if (!authormember.manageable) {
                      add.push[authorid]
                    } else {
                      authormember.setNickname(authornick, `Nickbet loss with ${targettag}`)
                    }
                    if (!target.manageable) {
                      add.push[targetid]
                    } else {
                      target.setNickname(targetnick, `Nickbet loss with ${authortag}`)
                    }
                    const added = ""
                    if (add.length == 1) {
                      added += `\nI can't set <@${add}>'s nickname because of role hierachy! \nMove my role up on top of them next time.`
                    }
                    if (add.length == 2){
                      added += `\nI can't set <@${add[0]}'s and <@${add[1]}>'s nickname because of role hierachy. \nMove my role up on top of them next time.`
                    }
                    embed2.setTitle("Oh no!");
                    embed2.setDescription("The coin stood on its edge! You both lose."+added);
                    embed2.setTimestamp()
                  } else if (rare == 1) {
                    embed2.setTitle("Oops...")
                    embed2.setDescription("The coin flew away! None of you both lose.")
                    .setTimestamp()
                  } else {
                    embed2.setTitle("Rip you")
                    const chance = Math.random()
                    const add3 = ""
                    if (chance > 0.5) {
                      if (!authormember.manageable) {
                        add3 += `\nI can't set <${authorid}>'s nickname due to role hierachy!`
                      } else {
                        authormember.setNickname(authornick, `Nickbet loss against ${targettag}`)
                        add3 += `\nI have set <@${authorid}>'s nickname to ${authornick}.`
                      } 
                      embed2.setDescription(`<@${authorid}> has lost the nickbet against <@${targetun}>!`+add3)
                    } else {
                      if (!target.manageable) {
                        add3 += `\nI can't set <${targetid}>'s nickname due to role hierachy!`
                      } else {
                        target.setNickname(targetnick, `Nickbet loss against ${authortag}`)
                        add3 += `\nI have set <@${targetid}>'s nickname to ${targetnick}.`
                      } 
                      embed2.setDescription(`<@${targetid}> has lost the nickbet against <@${authorun}>!`+add3)
                    }
                  }
                  message.channel.send(embed2)
                } else if (message.content.toLowerCase() == 'tails') {
                  const rare = Math.floor(Math.random()*200)
                  const embed2 = new Discord.MessageEmbed
                  const add = []
                  if (rare == 0) { // rare = 0 means both lose
                    if (!authormember.manageable) {
                      add.push[authorid]
                    } else {
                      authormember.setNickname(authornick, `Nickbet loss with ${targettag}`)
                    }
                    if (!target.manageable) {
                      add.push[targetid]
                    } else {
                      target.setNickname(targetnick, `Nickbet loss with ${authortag}`)
                    }
                    const added = ""
                    if (add.length == 1) {
                      added += `\nI can't set <@${add}>'s nickname because of role hierachy! \nMove my role up on top of them next time.`
                    }
                    if (add.length == 2){
                      added += `\nI can't set <@${add[0]}'s and <@${add[1]}>'s nickname because of role hierachy. \nMove my role up on top of them next time.`
                    }
                    embed2.setTitle("Oh no!");
                    embed2.setDescription("The coin stood on its edge! You both lose."+added);
                    embed2.setTimestamp()
                  } else if (rare == 1) {
                    embed2.setTitle("Oops...")
                    embed2.setDescription("The coin flew away! None of you both lose.")
                    .setTimestamp()
                  } else {
                    embed2.setTitle("Rip you")
                    const chance = Math.random()
                    const add3 = ""
                    if (chance > 0.5) {
                      if (!authormember.manageable) {
                        add3 += `\nI can't set <${authorid}>'s nickname due to role hierachy!`
                      } else {
                        authormember.setNickname(authornick, `Nickbet loss against ${targettag}`)
                        add3 += `\nI have set <@${authorid}>'s nickname to ${authornick}.`
                      } 
                      embed2.setDescription(`<@${authorid}> has lost the nickbet against <@${targetun}>!`+add3)
                    } else {
                      if (!target.manageable) {
                        add3 += `\nI can't set <${targetid}>'s nickname due to role hierachy!`
                      } else {
                        target.setNickname(targetnick, `Nickbet loss against ${authortag}`)
                        add3 += `\nI have set <@${targetid}>'s nickname to ${targetnick}.`
                      } 
                      embed2.setDescription(`<@${targetid}> has lost the nickbet against <@${authorun}>!`+add3)
                    }
                  }
                  message.channel.send(embed2)
                } else {
                  message.channel.send(`It's literally \`heads\` or \`tails\`, nothing else.`)
                }
              })
              .catch(collected => {
                  message.channel.send('Cmon is it really really really that hard to choose `heads` or `tails` in 15 seconds');
              });
          })
        }
        })
        
        .catch(collected => {
            message.channel.send(`Cmon just give ${authorun} a nickname to nickbet`);
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