import express from "express"
import AppRoutes from "./src/routes/index.js"

const PORT = process.env.PORT || 9000
const app = express();

const routes = express.Router();

// const data = [
//     {
//         id: 1,
//         name: "vicky"
//     },
//     {
//         id: 1,
//         name: "vicky"
//     }
// ]

// app.get('/', (req, res)=>{
//     res.status(200).send(
//         {
//             data: data,
//             count: data.length,
//             message: "Data fetch successful"
//         }
//     )
// })

app.use(express.json())

app.use(AppRoutes)
app.listen(8000, ()=>console.log(`App Listening on ${PORT}`))

