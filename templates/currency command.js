module.exports.run = async (client, message, args) => {
    const config = require("../../config.js")                                                                                                                                 
    const { Database } = require("quickmongo");
    const db = new Database(config.DBURL);
    const curr = db.createModel("currency");
    const id = message.author.id
    if (await curr.exists(id) === true) {
    // stuff to do in the commands
    } else {
        message.channel.send("You haven't started playing currency commands yet!\n,Do `,start` to start!")
        // check if you have started or no
    }
};
module.exports.help = {
    name: "",
    description: "",
    aliases: []
};