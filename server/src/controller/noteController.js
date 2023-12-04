import Note from "../model/note.js";

export const createNote = async (req, res) => {
    try {
        let newNote = await Note.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            user: req.body.user.id
        })

        let createdNote = await newNote.save();

        if(!createdNote) res.status(400).json({message: "no se pudo crear la nota"});
        res.status(200).json(createdNote);

    } catch (error) {
         return res.status(400).json({
            message: `Error: ${error.message}`
        })
    }
}

export const getNote = async (req, res) => {
    const { id } = req.params;

    try {
        let note = await Note.findById(id)

        if(!note) res.status(404).json({message: "No se ha encontrado la nota"});
        
        res.status(200).json(note)

    } catch (error) {
        res.status(500).json({
            message: `Error: ${error.message}`
        })
    }
}

export const getNotes = async (req, res) => {
    try {
        let notes = await Note.find()
        if(!notes) res.status(404).json({message: "No se han encontrado usuarios"})

        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({
            message: `Error: ${error.message}`
        })
    }
}

export const updateNote = async (req, res) => {
    
    try {
        let note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        
        if(!note) res.status(400).json({
            message: "El usuario no se pudo actualizar"
        });

        res.status(201).json(note);

    } catch (error) {
        res.status(500).json({
            message: `Error: ${error.message}`
        })
    }
}

export const deleteNote = async (req, res) => {

    try {
        
        let note = await Note.findByIdAndDelete(req.params.id)

        if(!note) res.status(400).json({
            message: "El usuario no se pudo eliminar"
        })

        res.status(200).json(note)

    } catch (error) {
        res.status(500).json({
            message: `Error: ${error.message}`
        })
    }

}