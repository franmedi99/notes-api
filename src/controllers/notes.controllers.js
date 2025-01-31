const notesCtrl = {};

const Note =  require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
  const notes =  await Note.find()
    res.json(notes);
}

notesCtrl.createNote = async (req,res) => {
  const { title, content, date, author } = req.body; 
  const newNote = new Note({
      title,
      content,
      date,
      author
  })
  await newNote.save();
    res.json ({message: 'Nota Agregada Satisfactoriamente'})
}

notesCtrl.getNote = async (req,res) =>{
  const note = await Note.findById(req.params.id);
  console.log (note)
    res.json(note)
}



notesCtrl.updateNote = async(req,res) => {
    const {title,content,author} =  req.body;
 await Note.findOneAndUpdate(req.params.id, {
    title,
    author,
    content
});
res.json({message: 'Nota Actualizada satisfactoriamente'})

}





notesCtrl.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Nota eliminada satisfactoriamente'})
}

module.exports = notesCtrl;