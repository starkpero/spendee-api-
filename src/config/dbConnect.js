const mongoose = require('mongoose');


const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('DB Connected successfully');
    }
    catch(err){
        console.log(`Error ${err.message}`);
    }
};


module.exports = dbConnect;


//PASSWORD - 6u588GLKyMQ1LDB5
//mongodb+srv://spendee:<password>@spendee.xxs6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority