let filter = m => m.author.id === message.author.id // only be the guy who sent to command can trigger the collector
    message.channel.send(`stuff sent when command activated`).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1, // number of messages collected
          time: 60000, // in ms, divided by 1000 to get seconds
          errors: ['time'] // is here so that .catch shows when i cant send in time limit
        })
        .then(message => {
          message = message.first()
          if (message.content.toLowerCase() == 'a') {
            message.channel.send(`sends when i send "a"`)
          } else if (message.content.toLowerCase() == 'b') {
            message.channel.send(`sends when i send "b"`)
          } else {
            message.channel.send(`sends when i send anything else than a or b`)
          }
        })
        .catch(collected => {
            message.channel.send('sends when i dont send anything in time limit');
        });
    })