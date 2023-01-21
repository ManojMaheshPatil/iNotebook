const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Note");
const {body , validationResult} = require('express-validator');
const Note = require('../models/Note');

// Route 1 : Get all the notes using : GET "/api/notes/fetchallnotes". Login required.
router.get('/fetchallnotes',fetchuser, async(req,res)=>{
    try {
        const notes = await Notes.find({user: req.id});
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 2 : Add a new note using : POST "/api/notes/addnote". Login required
router.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Description must be at least 5 characters').isLength({min: 5})
], async(req,res) => {
    try {

        const {title , description , tag} = req.body;

        //If there are errors , return Bad Request and the errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const note = new Note({
            title , description , tag , user: req.user.id
        })

        const savedNote = await note.save()

        res.json(savedNote)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE 3 : Update an existing Note using : PUT "/api/notes/updatenote". Login required
// For updation use PUT , for sending info use POST and for getting info use GET

router.put('/updatenote/:id',fetchuser,async(req,res)=>{
    try {
        const {title,description,tag} = req.body;

    //Create a new note object
    const newNote = {};
    if(title){
        newNote.title=title;
    }
    if(description){
        newNote.description=description;
    }
    if(tag){
        newNote.tag=tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id); // if you wanna use something from url then you use req.params
    if(!note){
        return res.status(404).send("Not Found");
    }

    if(note.user.toString() != req.user.id){ // Meaning if someone else is trying to update someone else's note
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id , {$set:newNote} , {new:true});
    res.json({note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
    
})

// ROUTE 4 : Deleting an existing Note using : DELETE "/api/notes/deletenote". Login required
// For updation use PUT , for sending info use POST and for getting info use GET , for deleting you use DELETE

router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    try {
        const {title,description,tag} = req.body;

    // Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id); // if you wanna use something from url then you use req.params
    if(!note){
        return res.status(404).send("Not Found");
    }

    //Allow deleton only if user owns the note
    if(note.user.toString() != req.user.id){ 
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({"Success":"Note has been deleted",note:note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
    
})

module.exports=router;