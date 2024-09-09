import express from "express";
import roomController from '../controller/room.controller.js'

const routes = express.Router();

routes.get('/getAllRooms', roomController.getRooms);
routes.get('/getRoomById/:id', roomController.getRoomById);
routes.post('/createRoom', roomController.createRoom);
routes.put('/editRoom/:id', roomController.editRoom);
routes.delete('/deleteRoom/:id', roomController.deleteRoom);


export default routes