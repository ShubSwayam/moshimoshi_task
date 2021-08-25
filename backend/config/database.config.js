// const orgConnection = ('mongodb+srv://admin:hTDqrSCIgUODRiPG@lasocare.powpx.mongodb.net/orgdb');
var lcon = "mongodb://localhost:27017/my_db";
// const masterConnection = ('mongodb+srv://admin:hTDqrSCIgUODRiPG@lasocare.powpx.mongodb.net/mastersdb');
// const userConnection = ('mongodb://localhost:27017/my_db?readPreference=primary&appname=MongoDB%20Compass&ssl=false');
const userConnection = ('mongodb+srv://geetapustak:gIrGtF00jdTw9M5l@cluster0.68lq2.mongodb.net/geetapustak?retryWrites=true&w=majority');




module.exports = {
    lcon,
    // masterConnection,
    userConnection
};

module.exports.initMongoConnection = async () => {
    const connectionPool = {};
    try {
        mongoose.Promise = global.Promise;
        connectionPool.userConnection = await mongoose.connect(userConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    } catch (e) {
        console.error(e)
    }

    return connectionPool;
};