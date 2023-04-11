const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const mysql = require("mysql")
const path = require('path');
const { dblClick } = require("@testing-library/user-event/dist/click");

app.use(cors());
app.use(express.json());

var DBconnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "hotel_management",
})

DBconnection.on('connection', (connection) => {
    connection.on('error', (err) => {
        console.lop(err)
    })
    connection.on('close', (err) => {
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

app.post('/register', (req, res) => {
    let Gmail = req.body.Gmail
    let Password = req.body.Password
    let Firstname = req.body.Firstname
    let Lastname = req.body.Lastname
    let value = [Firstname, Lastname, Gmail, Password]
    DBconnection.query('select Gmail from  users where Gmail = ?', [Gmail], (e, result) => {
        if (result.length > 0) {
            res.send({ result })
        }
        else {
            DBconnection.query('insert into users (Firstname, Lastname, Gmail, Password) values (?)', [value], (e, result) => {
                if (e) console.log(e.message)
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
    DBconnection.query('select * from users where Gmail=? AND Password=?', [Gmail, Password], (e, result) => {
        if (e) console.log(e.message)
        if (result != null) res.send(result)
        else {
            res.send('tai khoan khong ton tai')
        }
    })
})

app.post('/createcustomer', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const gender = req.body.gender;
    const room = req.body.room;
    const birthday = req.body.birthday;
    const phone = req.body.phone;
    const identity = req.body.identity;
    const country = req.body.country;

    DBconnection.query('INSERT INTO customers (FULL_NAME, ROOM, GENDER, BIRTHDAY, PHONE_NUMBER, IDENTITY_NUMBER, COUNTRY) VALUES (?,?,?,?,?,?,?)',
        [name, room, gender, birthday, phone, identity, country], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('value inserted')
            }
        }
    );
})

app.get('/customers', (req, res) => {
    DBconnection.query("SELECT * FROM customers", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }

    })
})

app.put('/updatecustomers', (req, res) => {
    const name = req.body.name
    const room = req.body.room
    const id = req.body.id
    const gender = req.body.gender
    const birthday = req.body.birthday
    const phone = req.body.phone
    const identity = req.body.identity
    const country = req.body.country

    DBconnection.query("UPDATE customers SET FULL_NAME = ?, ROOM = ?, GENDER = ?, BIRTHDAY = ?, PHONE_NUMBER = ?, IDENTITY_NUMBER = ?, COUNTRY = ?  WHERE ID = ?", 
    [name, room, gender,birthday,phone,identity,country,id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.delete('/deletecustomer/:id', (req,res) => {
    const id=req.params.id
    DBconnection.query("DELETE FROM customers WHERE ID = ?", [id], (err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})


//Room

app.post('/createroom', (req, res) => {
    console.log(req.body)
    const roomno = req.body.roomno
    const type = req.body.type;
    const price = req.body.price;
    const inroom = req.body.inroom;
    const status = req.body.status;

    DBconnection.query('INSERT INTO rooms (ROOM_NO, TYPE, IN_ROOM, PRICE, STATUS) VALUES (?,?,?,?,?)',
        [roomno, type, inroom, price, status], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('value inserted')
            }
        }
    );
})

app.get('/rooms', (req, res) => {
    DBconnection.query("SELECT * FROM rooms", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }

    })
})

app.put('/updateroom', (req, res) => {
    const roomno = req.body.roomno
    const type = req.body.type
    const inroom = req.body.inroom
    const price = req.body.price
    const status = req.body.status
    const id = req.body.id

    DBconnection.query("UPDATE rooms SET ROOM_NO = ?, TYPE = ?, IN_ROOM = ?,PRICE = ?, STATUS = ? WHERE ID = ?", 
    [roomno, type, inroom, price, status, id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.delete('/deleteroom/:id', (req,res) => {
    const id=req.params.id
    DBconnection.query("DELETE FROM rooms WHERE ID = ?", [id], (err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})


// app.get('/api', (req, res ) =>{
//     DBconnection.query("SELECT * FROM `danh_muc_phong`", (error,result) => {
//         res.send(result)
//     })
// })

