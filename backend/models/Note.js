const mongoose = require('mongoose');
const { Schema} = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, // This is done so that one user cant view another user's notes
        ref: 'user'  // This links to 'user'  function models/User.js
    },
    title:{
        type: String,
        required: true 
    },
    description:{
        type:String,
        required:true, 
    },
    tag:{
        type: String,
        default: "General" 
    },
    date:{
        type: Date ,
        default: Date.now // not Date.now()
    },
});

module.exports =mongoose.model('notes',NotesSchema); // The 2 arguments that mongoose.model takes are modelname and schema