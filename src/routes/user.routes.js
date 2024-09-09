import express from "express"
import userController from "../controller/user.controller.js"

const routes = express.Router();

routes.get('/getUsers', userController.getUsers);
routes.get('/getUserById/:id', userController.getUserById);
routes.post('/createUser', userController.createUsers);
routes.put('/editUser/:id', userController.editUser);
routes.delete('/deleteUser/:id', userController.deleteUser);
routes.get('/getBookedUser', userController.getBookedUser)

export default routes;