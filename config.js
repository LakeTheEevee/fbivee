module.exports = {
    TOKEN: process.env.TOKEN,
    PREFIX: ".",
    OWNERID: "441912852710948864",
    DBURL: `mongodb+srv://${process.env.DBUN}:${process.env.DBPW}@${process.env.DBSURL}/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`,
};