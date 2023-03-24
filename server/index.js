const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors")
const mysql = require("mysql")
const path = require('path');


var DBconnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "hotel_management",
})

DBconnection.on('connection', (connection) =>{
    connection.on('error', (err) =>{
        console.lop(err)
    })
    connection.on('close', (err) =>{
        console.log(err)
    })
})

// app.use(express.static(path.join(__dirname,'../client/build')))

// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })


app.use(cors({
    origin: "http://localhost:3000",
    methods: ['PUT', 'GET', 'POST']
}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(5000, () => {
    console.log("server is running on port 5000")
    return "test"
})

app.post('/register', (req, res) =>{
    let Gmail = req.body.Gmail
    let Password = req.body.Password
    let Firstname = req.body.Firstname
    let Lastname = req.body.Lastname
    let value = [Firstname, Lastname, Gmail, Password]
    DBconnection.query('select Gmail from  users where Gmail = ?', [Gmail], (e, result) =>{
        if(result.length > 0) {
            res.send({result})
        }
        else {
            DBconnection.query('insert into users (Firstname, Lastname, Gmail, Password) values (?)', [value], (e, result) =>{
                if(e) console.log(e.message)
                else {
                    res.send('Create successfully')
                }
            })
        }
    })
})

app.post('/login', (req, res) => {
    let Gmail = req.body.Gmail
    let Password = req.body.Password
    DBconnection.query('select * from users where Gmail=? AND Password=?', [Gmail, Password], (e,result)=>{
        if(e) console.log(e.message)
        if(result != null) res.send(result)
        else {
            res.send('tai khoan khong ton tai')
        }
    })
})

// app.get('/api', (req, res ) =>{
//     DBconnection.query("SELECT * FROM `danh_muc_phong`", (error,result) => {
//         res.send(result)
//     })
// })

