const express=require('express');
const Note=require('../models/Note');
const router=express.Router();
const fetchUser=require('../middleware/fetchuser');
const {body,validationResult} =require('express-validator');
// ROUTE 1 : Get all notes using GET "/api/notes/getuser" . Login required
router.get('/fetchallnotes',fetchUser,async(req,rep)=>{
    try{
       const notes=await Note.find({user:req.user.id});
       rep.json(notes);
    }
    catch(error){
        console.error(error.message);
        rep.status(500).send('Internal server error');
    }
})

// ROUTE 2 : Add a new Note using POST "/api/notes/addnote" . Login required
router.post('/addnote',fetchUser,[
 body('title','Enter a valid title').isLength({min:3}),
 body("description","Description must be atleast 5 characters").isLength({min:5}),
],async(req,rep)=>{
    try{
       const{title,description,tag}=req.body;
       const errors=validationResult(req);
       if(!errors.isEmpty()){
        return rep.status(400).send({erros:errors.array()})
       }
       const note=new Note({
        title,description,tag,user:req.user.id
       })
       const savedNote=await note.save();
       rep.json(savedNote);
    }
    catch(error){
        console.error(error.message);
        rep.status(500).send("Internal server error");
    }
})

// ROUTE 3 : Update an existing Note using : PUT "/api/note/updatenote" .Login required

router.put('/updatenote/:id',fetchUser,async(req,rep)=>{
    const {title,description,tag}=req.body;
    try{
        const newNote={};
        if(title) {newNote.title=title};
        if(description){newNote.description=description};
        if(tag){newNote.tag=tag};
        let note=Note.findById(req.params.id);
        if(!note){
            rep.status(404).send("Not Found");
        }
        if(note.user.toString()!==req.params.id){
            rep.status(401).send("Not allowed");
        }
        note=await Note.findByIdAndUpdate(req.params.id,
            { $set:newNote },
            { new:true})
            rep.json({note});
    }
    catch(error){
        console.error(error.message);
        rep.status(500).send('Internal server error');
    }
}) 

// ROUTE : 4 Delete an existing note using : DELETE '/api/notes/deletenote'.Login required
router.delete('/deletenote/:id',fetchUser,async(req,rep)=>{
    try{
        let note=await Note.find(req.params.id);
        if(!note){
            return rep.send(404).send("Not found");
        }
        if(note.user.toString()!==req.user.id){
            return rep.status(401).send("Not allowed");
        }
        note=await Note.findByIdAndDelete(req.params.id);
        rep.json({"Success":"Note has been deleted",
            note:note
        })
    }catch{
        console.error(error.message);
        rep.status(500).send("Internal server error");
    }
})
module.exports=router;