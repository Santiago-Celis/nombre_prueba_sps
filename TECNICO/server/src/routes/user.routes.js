import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller/userController.js";

const router = Router()

router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/user', createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)