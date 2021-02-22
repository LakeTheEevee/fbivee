module.exports.run = async (client, message, args) => {
    const target = message.mentions.members.first()
    let filtera = m => m.author.id === message.author.id 
    let filterb = m => m.author.id === target.id
    if (!args[0]) return (
      message.channel.send("Mention someone to nickbet with!")
    )
    if (!message.mentions.members.first()) return (
      message.channel.send("Mention someone to nickbet with!")
    )
    if(target.id === message.author.id) return (
      message.channel.send("You can't nickbet yourself.")
    )
    if (target.user.bot) return (
      message.channel.send("You can't nickbet bots, back off.")
    )
    if (!args[1]) return (
      message.channel.send("Add a nickname to bet after pinging them!")
    )
    if (args[1].length > 32) return (
      message.channel.send("The nickname is too long! Make it shorter or equal to 32 characters.")
    )
    message.channel.send(`hey <@${target.id}> you wanna nb with <@${message.author.id}>? \nyou will change ur name to \`${args[1]}\``).then(() => {
      message.channel.awaitMessages(filterb, {
          max: 1, // number of messages collected
          time: 15000, // in ms, divided by 1000 to get seconds
          errors: ['time'] // is here so that .catch shows when i cant send in time limit
        })
        .then(message => {
          message = message.first()
          if (message.content.toLowerCase() == 'yes') {
            
    message.channel.send(`ok, what should <@${message.author.id}> change his nickname to`).then(() => {
      message.channel.awaitMessages(filterb, {
          max: 1, // number of messages collected
          time: 15000, // in ms, divided by 1000 to get seconds
          errors: ['time'] // is here so that .catch shows when i cant send in time limit
        })
        .then(message => {
          message = message.first()
          if (message.content > 32) return (message.channel.send("too long"))
          else {
          message.channel.send(`stuff sent when command activated`).then(() => {
            message.channel.awaitMessages(filtera, {
                max: 1, // number of messages collected
                time: 60000, // in ms, divided by 1000 to get seconds
                errors: ['time'] // is here so that .catch shows when i cant send in time limit
              })
              .then(message => {
                message = message.first()
                if (message.content.toLowerCase() == 'heads') {
                  
                  message.channel.send(`sends when i send `)
                } else if (message.content.toLowerCase() == 'tails') {
                  message.channel.send(`sends when i send "b"`)
                } else {
                  message.channel.send(`sends when i send anything else than a or b`)
                }
              })
              .catch(collected => {
                  message.channel.send('sends when i dont send anything in time limit');
              });
          })
        }
        })
        
        .catch(collected => {
            message.channel.send('sends when i dont send anything in time limit');
        });
    })
          } else if (message.content.toLowerCase() == 'b') {
            message.channel.send(`woops`)
          } else {
            message.channel.send(`cmon answer yes or no`)
          }
        })
        .catch(collected => {
            message.channel.send('CMON IT IS THAT HARD TO SEND YES OR NO IN 15 SECONDS');
        });
    })
}
module.exports.help = {
    name: "nickbet",
    description: "Nickbet - 2 people choose the nickname the other needs to change to when they lose, then they flip a coin. (concept)",
    aliases: ["nb"]
};