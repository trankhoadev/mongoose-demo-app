const mongoose = require("mongoose");

const uri = 'mongodb://localhost:27017/db_login';

const Schema = mongoose.Schema;

// const studentSchema = new Schema({
//     name: String,
//     age: Number,
//     grade: Number
// }, {timestamps: true})

// const studentDB = mongoose.model('students', studentSchema);

const accountSchema = new Schema({
    userName: String, 
    passWord: String,
    accessToken: String,
    refreshToken: String
}, {timestamps: true})
 
const accountDB = mongoose.model('accounts', accountSchema);


mongoose.connect(uri).then(() => {
    console.log('Connect to Database successfully !');
})

module.exports = {accountDB};