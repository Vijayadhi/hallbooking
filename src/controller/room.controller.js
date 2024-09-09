import { findIndexByID } from "../utils/helper.js"

const rooms = [
    {
        id: 1,
        no_seats: 25,
        category: "Standard Room",
        aminities: [
            {
                seats: "Basic seating arrangements",
                conditioner: "Air conditioning",
                network: "Free W-Fi",
                hydrater: "Water dispenser",
                sounds: "Basic Sound System",
                others: [
                    "White Board and Markers",
                    "Projector (upon request)"
                ]
            }
        ],
        hourly_charges: 2000,
        status: "open"
    },
    {
        id: 2,
        no_seats: 50,
        category: "Deluxe  Room",
        aminities: [
            "All Amenities from Standard Room",
            {
                seats: "Enhanced seating arrangements (more comfortable chairs)",
                hydrater: "Bottled water for attendees",
                sounds: "High-quality sound system",
                others: [
                    "Coffee/tea station",
                    "Basic lighting controls",
                    "Podium with microphone",
                    "Built-in projector and screen"
                ]
            }
        ],
        hourly_charges: 5000,
        status: "open"
    },
    {
        id: 3,
        no_seats: 100,
        category: "Premium Room",
        aminities: [
            "All amenities from the Deluxe Room",
            {
                seats: "High-end seating arrangements (e.g., ergonomic chairs)",
                others: [
                    "Smartboard",
                    "VIP lounge access",
                    "Catering service option",
                    "Dedicated event manager",
                    "Basic lighting controls",
                    "Complimentary stationery (notepads, pens)",
                    "Advanced lighting and ambiance controls",
                    "Integrated video conferencing system"
                ]
            }
        ],
        hourly_charges: 8500,
        status: "open"
    }

]

const getRooms = (req, res) => {
    try {
        res.status(200).send({
            message: `Room data fetch successfull`,
            data: rooms,
            count: rooms.length
        })
    }
    catch (error) {
        res.send({
            message: `${error}`
        })
    }
}

const getRoomById = (req, res) => {
    try {
        const { id } = req.params
        const index = findIndexByID(rooms, id)
        if (index !== -1) {
            res.status(200).send({
                data: rooms[index]
            })
        }
        else {
            res.status(404).send({
                message: `Room with given id ${id} is unavailable`
            })
        }
    }
    catch (error) {
        res.send(`${error}`)
    }
}

const createRoom = (req, res) => {
    try{
        req.body.id = rooms.length ? rooms[rooms.length - 1].id + 1 : -1
        rooms.push(req.body)
        res.status(201).send({
            message: "Room Created Successfully"
        })
    }
    catch (error){
        res.send({
            message: "Failed to create the room"
        })
    }
}

const editRoom = (req, res) => {
    try{
        const {id} = req.params
        const index = findIndexByID(rooms, id)
        if(index!==-1){
            let current_data = rooms[index]
            rooms.splice(index, 1, {...current_data, ...req.body})
        }
        res.status(201).send({
            message: `Room Updated Successfully ${id}`
        })
    }
    catch (error){
        res.status(304).send({
            message: `Unabel to modify the Room with ${id}`
        })
        
    }

}

const deleteRoom = (req, res) => {
    try{
        const {id} = req.params
        const index = findIndexByID(rooms, id)

        if(index!==-1){
            rooms.splice(index, 1)
        }
        res.status(200).send({
            message: "Room Deleted"
        })
    }
    catch (error){
        res.send({
            message: error
        })
    }
}

export default { getRooms, getRoomById, createRoom, editRoom, deleteRoom, rooms }