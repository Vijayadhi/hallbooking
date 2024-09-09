import express from "express";
import userRoutes from "./user.routes.js"
import roomRoutes from "./room.routes.js"
import bookRoom from "./bookRoom.routes.js"


const router = express.Router();

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/roomBook', bookRoom)
export default router