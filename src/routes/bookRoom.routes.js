import express from "express";
import bookRoomController from "../controller/bookRooms.controller.js"

const routes = express.Router();

routes.post('/createbookRoom', bookRoomController.bookRooms);
routes.get('/getBookedRooms', bookRoomController.getBookedRooms);

export default routes;