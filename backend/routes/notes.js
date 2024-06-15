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

router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        // Create a newNote object
        const newNote = {};
        if (title) newNote.title = title;
        if (description) newNote.description = description;
        if (tag) newNote.tag = tag;

        // Find the note to be updated
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Check if the user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // Update the note
        note = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: newNote },
            { new: true }
        );

        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});



// ROUTE : 4 Delete an existing note using : DELETE '/api/notes/deletenote/:id'. Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not found");
        }
        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);

        res.json({
            "Success": "Note has been deleted",
            note: note
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});
module.exports=router;