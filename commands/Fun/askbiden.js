module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
  const responses = [
    "Will you shut up, man?",
    "Folks, do you have any idea what this clown is doing?",
    "And him, too.",
    "FLY WILL VOTE",
    "You’ve treated the Black community about as bad as anybody in this country.",
    "Do it, do it. ",
    "Vote, vote, vote. ",
    "That’ll be the end of it. ",
    "This is so unpresidential.",
    "It's about your family."
  ];
  const pics = [
    "https://api.time.com/wp-content/uploads/2019/09/joe-biden-ukraine-fundraising.jpg?w=800&quality=85",
    "https://media.beam.usnews.com/7a%2Fd8%2F6c6d10244a07bcb3639a415492bd%2F190911-2020biden-editorial.biden.JPG",
    "https://s.france24.com/media/display/b92cfa72-e8c3-11ea-bcb5-005056bff430/w:1280/p:16x9/2020-08-27T181728Z_711309918_RC2IMI9O4SSL_RTRMADP_3_USA-ELECTION-BIDEN.webp",
    "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/qVY4TW15GGYpX68SDdhQWczGd1E=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/RX7S4QMMIPUC6FPGJPBKRH5RQI.jpg",
    "https://www.aljazeera.com/wp-content/uploads/2020/08/cdad9943b3564adbb0c4747ab7819375_18.jpeg?fit=1000%2C561",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLClTJ2ljkzvKpIaLb9Doprxum75EFWKafww&usqp=CAU",
    "https://images.axios.com/uktjEuhI95mpSY7eW-OHQ3FL1Q4=/0x203:5173x3113/1920x1080/2020/04/21/1587476572940.jpg"
  ];
  const colours = ["#00300a", "#507248", "#380909", "#2b092a", "#180228"];
  const text = args.join(" ");
  if (!args || args.length < 1) {
    return (
      message.reply(`You need something to ask Biden.`),
      console.log(
        `${message.member.user.tag} used askbiden but didnt give a question smfh`
      )
    );
  }
  const embed = new Discord.MessageEmbed()
    .setTitle("Ask Biden")
    .setDescription(
      `${message.member.user.username}: ${text}\n\nBiden: ${
        responses[Math.floor(Math.random() * responses.length)]
      }`
    )
    .setThumbnail(pics[Math.floor(Math.random() * pics.length)])
    .setColor(colours[Math.floor(Math.random() * colours.length)]);
  message.channel.send(embed);
  console.log(`${message.member.user.tag} used askbiden about ${text}`)
};
module.exports.help = {
    name: "askbiden",
    description: "askbiden command",
    aliases: ["ab", "ask"]
};