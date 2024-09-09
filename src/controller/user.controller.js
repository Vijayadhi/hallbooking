import { findIndexByID } from "../utils/helper.js"

const users = [
    {
        id: 1,
        name: "Vicky",
        email: "vicky@gmail.com",
        mobile: "981197846",
        status: "booked",
        booked_date: "07-12-2024",
        start_time: "11.00 Am",
        end_time: "5.00 p.m",
        room_id: 2
    },
    
    {
        id: 2,
        name: "Bala",
        email: "bala@gmail.com",
        mobile: "564983218",
        status: "closed",
        booked_date: "08-09-2024",
        start_time: "7.00 pm",
        end_time: "7.00 a.m",
        room_id: 3
    }
    
]


const getUsers = (req, res) => {
    try {
        let { status } = req.query
        let data = [...users]
       
        res.status(200).send(
            {
                data,
                count: data.length,
                message: "Data fetch successful"
            }
        )
    }
    catch (error) {

        res.status(500).send("Internal Error")

    }

}

const getUserById = (req, res) => {
    try{
        const {id} = req.params
        let index = findIndexByID(users, id)
        if (index!==-1){
            res.send(users[index])
        }
        else{
            res.send({
                message: `No Users matches the given id ${id}`
            })
        }
        

    }
    catch (error){
        res.send({
            message: `${error}`
        })
        
    }
}

const createUsers = (req, res) => {
    try {
        req.body.id = users.length ? users[users.length - 1].id + 1 : 1
        users.push(req.body)
        res.status(201).send({
            message: "User Added Successully"
        })
    }
    catch (error) {
        res.send({
            message: `${error}`
        })
    }
}

const editUser = (req, res) => {
    try{
        const {id} = req.params
        let index = findIndexByID(users, id)
        if(index!==-1){
            let current_data = users[index]
            users.splice(index, 1, {...current_data, ...req.body})
        }
        res.status(201).send({
            message: `The User with the id ${id} updated successfully`
        })
        
    }
    catch (error){
        res.status(304).send({
            message: `Unabel to modify the user with ${id}`
        })
        
    }
}

const deleteUser = (req, res) => {
    try{
        const {id} = req.params
        const index = findIndexByID(users, id)
        if (index!==-1){
            users.splice(index, 1)
            res.send({
                message: "User Deleted Successfully"
            })
        }
        else{
            res.send({
                message: `No User Available with the id ${id}`
            })
        }        
    }
    catch (error){
        res.send({
            message: `${error}`
        })
    }
}

const getBookedUser = (req, res) => {
    try{

        const bookedUsers = users.filter(user => user.status.toLowerCase() === "booked");
        console.log(bookedUsers);
        res.status(200).send({
            message: "Data Fetch Successful",
            data: bookedUsers,
            count: bookedUsers.length
        })
        
    }
    catch (error){
        res.status(500).send("An Error Occurred: ", error)
    }
}

export default { getUsers, createUsers,  editUser, getUserById, deleteUser, users, getBookedUser };