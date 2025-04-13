const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "Mpj86FrAo9YuXOu3"
const DATABASE_NAME = 'Testing';
const CONNECTION_URI = `mongodb+srv://to-do-app.dy8sirm.mongodb.net/?retryWrites=true&w=majority`;

async function main() {
    await mongoose.connect(CONNECTION_URI,{
        dbName: DATABASE_NAME,
        user: 'jayanthansenthilkumar',
        pass: PASSWORD,
    });
}
main().then(() => {
    console.log('MongoDB connected successfully');
}).catch(console.log);