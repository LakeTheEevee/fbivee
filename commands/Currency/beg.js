module.exports.run = async (client, message, args) => {
    const config = require("../../config.js")                                                                                                                                 
    const { Database } = require("quickmongo");
    const db = new Database(config.DBURL);
    const curr = db.createModel("currency");
    const id = message.author.id
    if (await curr.exists(id) === true) {
        const chance = Math.floor(Math.random()*15)
        const get = Math.floor(Math.random()*500)
        if (chance === 0) {
            message.channel.send("no u, you don't get anything")
        } else {
            message.channel.send(`cool! some dude just gave you $${get}`)
            curr.add(message.author.id+".balance", get)
        }
    } else {
        message.channel.send("You haven't started playing currency commands yet!\nDo `.start` to start!")
    }
};
module.exports.help = {
    name: "beg",
    description: "checks balance",
    aliases: []
};