module.exports = {
    TOKEN: process.env.TOKEN,
    PREFIX: ".",
    OWNERID: "441912852710948864",
    DBURL: `mongodb+srv://${process.env.DBUN}:${process.env.DBPW}@${process.env.DBSURL}/fbivee-beta?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`,
};