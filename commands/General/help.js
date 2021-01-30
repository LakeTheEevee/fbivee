module.exports.run = async (client, message, args) => {
    const config = require("../../config.js")
    message.channel.send(`Hi! My Prefix is \`.\`
    There are currently 5 commands:
    General:
    - help
    - ping
    Fun:
    - askbiden
    - echo
    - nickbet (:construction_worker: :hammer_and_wrench: Work In Progress, Crashes)
    - reverse`)
    console.log(`${message.member.user.tag} used help`)
    if(message.author.id == config.OWNERID) {
    message.channel.send (`Hey psst!
    Admin:
    - rl`)
    console.log(`${message.member.user.tag} activated the admin help pog pog pog`)
    }
}
module.exports.help = {
    name: "help",
    description: "Help command!",
    aliases: ["h"]
};