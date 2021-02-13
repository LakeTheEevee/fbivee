module.exports.run = async (client, message, args) => {
    const config = require("../../config.js")                                                                                                                                 
    const { Database } = require("quickmongo");
    const db = new Database(config.DBURL);
    const id = message.author.id
    if (await db.exists(id) === true) {
    const bal = await db.fetch(id+".balance")
    message.channel.send(`You have $${bal}`)
    } else {
        message.channel.send("You haven't started playing currency commands yet!\n,Do `.start` to start!")
        // check if you have started or no
    }
};
module.exports.help = {
    name: "balance",
    description: "checks balance",
    aliases: ["bal"]
};