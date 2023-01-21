const mongoose = require('mongoose');
const {Schema} =mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true 
    },
    email:{
        type:String,
        required:true,
        unique: true 
    },
    password:{
        type: String,
        required: true 
    },
    date:{
        type: Date ,
        default: Date.now // not Date.now()
    },
});

const User = mongoose.model('user',UserSchema);
module.exports=User; 


// module.exports =mongoose.model('user',UserSchema); // The 2 arguments that mongoose.model takes are modelname and schema