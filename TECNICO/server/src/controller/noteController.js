import Note from "../model/note.js";

export const createNote = async (req, res) => {
    try {
        let newNote = await Note.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            user: req.user.id
        })
    } catch (error) {
        
    }
}