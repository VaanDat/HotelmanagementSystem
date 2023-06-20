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
        console.log(result)
        if (e) console.log(e.message)
        if (result != null) res.send(result)
        else {
            res.sendStatus(404)
        }
    })
})

app.post('/createcustomer', (req, res) => {
    console.log(req.body)
    const userid = req.body.userid;
    const name = req.body.name;
    const gender = req.body.gender;
    const room = req.body.room;
    const birthday = req.body.birthday;
    const phone = req.body.phone;
    const identity = req.body.identity;
    const country = req.body.country;
    const address = req.body.address;

    DBconnection.query('INSERT INTO customers (USERID, FULL_NAME, ROOM, GENDER, BIRTHDAY, PHONE_NUMBER, IDENTITY_NUMBER, COUNTRY, ADDRESS) VALUES (?,?,?,?,?,?,?,?,?)',
        [userid, name, room, gender, birthday, phone, identity, country, address], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('value inserted')
            }
        }
    );
})

app.get('/customers', (req, res) => {
    const userId = req.query.userId;
    DBconnection.query("SELECT * FROM customers WHERE USERID = ?",
    [userId],
    (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error retrieving data');
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
    const address = req.body.address

    DBconnection.query("UPDATE customers SET FULL_NAME = ?, ROOM = ?, GENDER = ?, BIRTHDAY = ?, PHONE_NUMBER = ?, IDENTITY_NUMBER = ?, COUNTRY = ?, ADDRESS = ? WHERE ID = ?", 
    [name, room, gender,birthday,phone,identity,country,address,id], (err,result) => {
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
    const userid = req.body.userid;
    const roomno = req.body.roomno;
    const type = req.body.type;
    const price = req.body.price;
    const inroom = req.body.inroom;
    const status = req.body.status;
    const description = req.body.description;

    DBconnection.query('INSERT INTO rooms (USERID, ROOM_NO, TYPE, IN_ROOM, PRICE, STATUS, DESCRIPTION) VALUES (?,?,?,?,?,?,?)',
        [userid, roomno, type, inroom, price, status, description], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('value inserted')
            }
        }
    );
})

app.get('/rooms', (req, res) => {
    const userId = req.query.userId; // Assuming you pass the userId as a query parameter
  
    DBconnection.query(
      'SELECT * FROM rooms WHERE USERID = ?',
      [userId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error retrieving data');
        } else {
          res.send(result);
        }
      }
    );
  });

app.put('/updateroom', (req, res) => {
    const roomno = req.body.roomno
    const type = req.body.type
    const inroom = req.body.inroom
    const price = req.body.price
    const status = req.body.status
    const description = req.body.description
    const id = req.body.id

    DBconnection.query("UPDATE rooms SET ROOM_NO = ?, TYPE = ?, IN_ROOM = ?,PRICE = ?, STATUS = ?, DESCRIPTION = ? WHERE ID = ?", 
    [roomno, type, inroom, price, status, description, id], (err,result) => {
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

//RoomsType

app.post('/createroomstype', (req, res) => {
    console.log(req.body)
    const userid = req.body.userid;
    const type = req.body.type;
    const level = req.body.level;
    const price = req.body.price;
    const capacity = req.body.capacity;
    const rate = req.body.rate
    const description = req.body.desc;

    DBconnection.query('INSERT INTO rooms_type (USERID, TYPE, LEVEL, PRICE, CAPACITY, SC_RATE, DESCRIPTION) VALUES (?,?,?,?,?,?,?)',
        [userid, type, level, price, capacity, rate, description], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    );
})

app.get('/roomstype', (req, res) => {
    const userId = req.query.userId;
    DBconnection.query("SELECT * FROM rooms_type WHERE USERID = ?",
    [userId],
    (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error retrieving data');
        }
        else {
            res.send(result)
        }

    })
})

app.put('/updateroomstype', (req, res) => {
    const type = req.body.type;
    const level = req.body.level;
    const price = req.body.price;
    const capacity = req.body.capacity;
    const rate = req.body.rate
    const description = req.body.desc;
    const id = req.body.id;

    DBconnection.query("UPDATE rooms_type SET TYPE = ?, LEVEL = ?, PRICE = ?, CAPACITY = ?, SC_RATE = ?, DESCRIPTION = ? WHERE ID = ?", 
    [type, level, price, capacity, rate, description, id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.delete('/deleteroomstype/:id', (req,res) => {
    const id=req.params.id;
    DBconnection.query("DELETE FROM rooms_type WHERE ID = ?", [id], (err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})


//reservations

app.post('/createreservation', (req, res) => {
    console.log(req.body)
    const userid = req.body.userid;
    const roomid = req.body.roomid;
    const room = req.body.room;
    const roomtype = req.body.roomtype;
    const arrival = req.body.arrival;
    const departure = req.body.departure;
    const month = req.body.month;
    const year = req.body.year;
    const regisdate = req.body.regisdate;
    const price = req.body.price;
    const status = "Pending";
    const dayprice = req.body.dayprice;
    
    DBconnection.query('INSERT INTO reservations (USERID, ROOMID, ROOM, ROOM_TYPE, REGISDATE, ARRIVAL, DEPARTURE, MONTH, YEAR, PRICE, DAYPRICE, STATUS) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [userid, roomid, room, roomtype, regisdate, arrival, departure, month, year, price, dayprice, status], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                 // Retrieve the generated Reservation ID
                res.send(result); // Include the Reservation ID in the response
            }
        }
    );
})

app.put('/updatereservation', (req, res) => {
    const userid = req.body.userid;
    const id = req.body.id;
    const roomid = req.body.roomid;
    const room = req.body.room
    const roomtype = req.body.roomtype;
    const regisdate = req.body.regisdate;
    const arrival = req.body.arrival;
    const departure = req.body.departure;
    const price = req.body.price;

    DBconnection.query("UPDATE reservations SET USERID = ?, ROOMID = ?, ROOM = ?, ROOM_TYPE = ?, REGISDATE = ?, ARRIVAL = ?, DEPARTURE = ?, PRICE = ? WHERE ID = ?", 
    [userid, roomid, room, roomtype, regisdate, arrival, departure, price, id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.put('/updatepaycus', (req, res) => {
    const paycusid = req.body.paycusid;
    const id = req.body.id;
    const confirmed = true;
    DBconnection.query("UPDATE reservations SET PAYCUSID = ?, CONFIRMED = ? WHERE ID = ?", 
    [paycusid, confirmed, id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})




app.delete('/deletereservationdetail/:id', (req,res) => {
    const id=req.params.id
    DBconnection.query("DELETE FROM reservation_detail WHERE RID = ?", [id], (err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

app.delete('/deletereservation/:id', (req,res) => {
    const id=req.params.id
    DBconnection.query("DELETE FROM reservations WHERE ID = ?", [id], (err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})





app.put('/updatereservationdetail', (req, res) => {
    const userid = req.body.userid;
    const reserid = req.body.reserID;
    const customerid = req.body.customerID;
    const fullname = req.body.fullname;
    const custype = req.body.custype;
    const identity = req.body.identity;
    const birthday = req.body.birthday;

    DBconnection.query("UPDATE reservation_detail SET USERID = ?, CID = ?, FULL_NAME = ?, TYPE = ?, IDENTITY = ?, BIRTHDAY = ? WHERE RID = ?",  
    [userid, customerid, fullname, custype, identity, birthday, reserid], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})



app.get('/reservations', (req, res) => {
    const userid = req.query.userid;
    DBconnection.query("SELECT * FROM reservations WHERE USERID = ?",
    [userid],
    (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }

    })
})

//tilephuthu

app.get('/tilephuthu', (req, res) => {
    DBconnection.query("SELECT * FROM tilephuthu", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.put('/updatestatus', (req, res) => {
    const id = req.body.id;
    const status = req.body.status;

    DBconnection.query("UPDATE reservations SET STATUS = ? WHERE ID = ?", 
    [status, id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.put('/updatestatusconfirmed', (req, res) => {
    const id = req.body.id;
    const status = req.body.status;
    const confirmed = req.body.confirmed

    DBconnection.query("UPDATE reservations SET STATUS = ?, CONFIRMED = ? WHERE ID = ?", 
    [status, confirmed, id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
//reservation detail

app.post('/createreservationdetail', (req, res) => {
    console.log(req.body)
    const customerid = req.body.customerID;
    const userid = req.body.userid;
    const reserID = req.body.reserID;
    const fullname = req.body.fullname;
    const custype = req.body.custype;
    const identity = req.body.identity;
    const birthday = req.body.birthday
    const paycusid = req.body.paycusid;
    const address = req.body.address
    
    DBconnection.query('INSERT INTO reservation_detail (USERID, RID, CID, FULL_NAME, TYPE, IDENTITY, ADDRESS, BIRTHDAY) VALUES (?,?,?,?,?,?,?,?)',
        [userid, reserID, customerid, fullname, custype, identity, address, birthday], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('value inserted')
            }
        }
    );
})



app.get('/reservationdetail', (req, res) => {
    const rid = req.query.ReservationId;
    DBconnection.query("SELECT * FROM reservation_detail WHERE RID = ?",
    [rid],
    (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error retrieving data');
        }
        else {
            res.send(result)
        }

    })
})


// app.get('/rentalreceipt', (req, res) => {
//     const userid = req.query.userid;
//     const status = "Confirmed"
//     DBconnection.query("SELECT * FROM reservations WHERE USERID = ? AND STATUS = ?",
//     [userid, status],
//     (err, result) => {
//         if (err) {
//             console.log(err)
//             res.status(500).send('Error retrieving data');
//         }
//         else {
//             res.send(result)
//         }

//     })
// })

app.get('/rentalreceipt', (req, res) => {
    const userid = req.query.userid;
    const status = "Confirmed"
    DBconnection.query("SELECT * FROM rental_receipt WHERE USERID = ?",
    [userid, status],
    (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error retrieving data');
        }
        else {
            res.send(result)
        }

    })
})

app.post('/addreceiptcus', (req, res) => {
    console.log(req.body)
    const userid = req.body.userid;
    const rid = req.body.rid;
    const paycusid = req.body.paycusid;
    const address = req.body.address;
    const name = req.body.name;
    const printday = req.body.printday;
    const price = req.body.price;
    const rentdays = req.body.rentdays;
    const room = req.body.room;
    const roomtype = req.body.roomtype
    const status = "Paid"
    
    DBconnection.query('INSERT INTO rental_receipt (USERID, CID, ROOM, ROOM_TYPE, RID, FULL_NAME, ADDRESS, RENTDAYS, PRINTDAY, PRICE, STATUS) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        [userid, paycusid, room, roomtype, rid, name, address, rentdays, printday, price, status], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                 // Retrieve the generated Reservation ID
                res.send(result); // Include the Reservation ID in the response
            }
        }
    );
})

app.put('/addreceiptstatus', (req, res) => {
    console.log(req.body)
    const userid = req.body.userid;
    const rid = req.body.rid;
    const status = req.body.status;
    
    
    DBconnection.query('UPDATE rental_receipt SET STATUS = ? WHERE RID = ?',
        [status, rid], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                 // Retrieve the generated Reservation ID
                res.send(result); // Include the Reservation ID in the response
            }
        }
    );
})


app.get('/receiptdetail', (req, res) => {
    const userid = req.query.userid;
    const cid = req.query.cid;
    const status = "Confirmed";
    DBconnection.query("SELECT * FROM reservations WHERE PAYCUSID = ? AND USERID = ?",
    [cid, userid,],
    (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error retrieving data');
        }
        else {
            res.send(result)
        }

    })
})

app.delete('/deleterentalreceipt/:id', (req,res) => {
    const id=req.params.id
    DBconnection.query("DELETE FROM rental_receipt WHERE RID = ?", [id], (err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

app.put('/updaterentaldescription', (req, res) => {
    const id = req.body.recid;
    const description = req.body.description;

    DBconnection.query("UPDATE rental_receipt SET DESCRIPTION = ? WHERE RECID = ?", 
    [description, id], (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.post('/createrevenue', (req, res) => {
    const userid = req.body.userid;
    const roomtype = req.body.roomtype;
    const rtid = req.body.rtid;

    DBconnection.query('INSERT INTO revenue (USERID, RTID, TYPE) VALUES (?,?,?)',
        [userid, rtid, roomtype], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result); 
            }
        }
    );
})


// app.get('/roomstype', (req, res) => {
//     const userId = req.query.userId;
//     DBconnection.query("SELECT * FROM rooms_type WHERE USERID = ?",
//     [userId],
//     (err, result) => {
//         if (err) {
//             console.log(err)
//             res.status(500).send('Error retrieving data');
//         }
//         else {
//             res.send(result)
//         }

//     })
// })






// app.get('/api', (req, res ) =>{
//     DBconnection.query("SELECT * FROM `danh_muc_phong`", (error,result) => {
//         res.send(result)
//     })
// })

