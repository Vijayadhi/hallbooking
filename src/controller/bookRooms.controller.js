import { findIndexByID } from "../utils/helper.js"
import roomController from "./room.controller.js"
import userController from "./user.controller.js"

const bookRoomsData = []

const bookRooms = (req, res) => {
    try {
        const { customerName, date, startTime, endTime, roomId, email, phone_no } = req.body;

        // Validate request body
        if (!customerName || !date || !startTime || !endTime || !roomId || !email || !phone_no) {
            return res.status(400).send("All fields are required: customerName, date, startTime, endTime, roomId, email, phone_no.");
        }



        // Find room by ID
        const room = findIndexByID(roomController.rooms, roomId);

        if (room === -1) {
            return res.status(404).send("Room not found.");
        }


        //Check wheter the room is booked aldready on the give date and time
        const isConflict = bookRoomsData.some((booking) => {
            return (
                booking.roomId === roomId &&
                booking.date === date &&
                (
                    (startTime >= booking.startTime && startTime < booking.endTime) ||
                    (endTime > booking.startTime && endTime <= booking.endTime) ||
                    (startTime <= booking.startTime && endTime >= booking.endTime)
                )
            );
        });

        if (isConflict) {
            return res.status(400).send("Room is already booked for the given date and time");
        }

        req.body.id = bookRoomsData.length ? bookRoomsData[bookRoomsData.length - 1].id + 1 : 1;
        req.body.room_name = roomController.rooms[room].category;



        bookRoomsData.push(req.body);

        req.body.status = "booked";
        // const room_name = roomController.rooms[room].categor
        

        userController.users.push(req.body);

        // If booking is successful
        return res.status(200).send("Room booked successfully.");

    } catch (error) {
        return res.status(500).send("An error occurred: " + error.message);
    }
}

const getBookedRooms = (Req, res) => {
    try{
        res.status(200).send({
            message: "Data Fetch Successfull",
            data: bookRoomsData,
            count: bookRoomsData.length
        })
    }
    catch (error){
        res.status(500).send("An Error Occured: ", error)
    }
}

export default { bookRooms, bookRoomsData, getBookedRooms }
