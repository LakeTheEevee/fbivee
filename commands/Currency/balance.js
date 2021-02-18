module.exports.run = async (client, message, args) => {
    const config = require("../../config.js")                                                                                                                                 
    const { Database } = require("quickmongo");
    const db = new Database(config.DBURL);
    const curr = db.createModel("currency");
    const id = message.author.id
    if (await curr.exists(id) === true) {
    const bal = await curr.fetch(id+".balance")
    message.channel.send(`You have $${bal}`)
    } else {
        message.channel.send("You haven't started playing currency commands yet!\nDo `.start` to start!")
        // check if you have started or no
    }
};
module.exports.help = {
    name: "balance",
    description: "checks balance",
    aliases: ["bal"]
};