import { Router } from "express";
import { createNote, deleteNote, getNote, getNotes, updateNote } from "../controller/noteController.js";

const router = Router()

router.get('/notes', getNotes)
router.get('/note/:id', getNote)
router.post('/note', createNote)
router.put('/note/:id', updateNote)
router.delete('/note/:id', deleteNote)

export default router