module.exports.run = async (client, message, args) => {
    const config = require("../../config.json")
    message.channel.send(`Hi! My Prefix is \`.\`
    There are currently 5 commands:
    Useful:
    - help
    - ping
    Fun:
    - askbiden
    - echo
    - nickbet (:construction_worker: :hammer_and_wrench: Work In Progress, Crashes)`)
    console.log(`${message.member.user.tag} used help`)
    if(message.author.id == config.ownerid) {
    message.channel.send (`Hey psst!
    Admin:
    - rl`)
    console.log(`${message.member.user.tag} activated the admin help pog pog pog`)
    }
}
module.exports.help = {
    name: "help",
    description: "Ping command",
    aliases: ["help"]
};