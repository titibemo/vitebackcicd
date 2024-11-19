//require('dotenv').config();
// const path = require('path')
const express = require('express');

const cors = require('cors')
const app = express();
app.use(express.json())
const http = require('http');
const server = http.createServer(app);
app.use(cors({ origin: "http://localhost:5173" }));



// const db = mysql.createConnection({
//     host: localhost,
//     user: root,
//     database: yoome
// })

// db.connect((err) => {
//     if (err) {
//         console.log('Database connection failed !!!')
//     } else {
//         console.log('Connected to database');

//     }
// })


const userRoutes = require('./routes/users');

app.use('/api/user', userRoutes)



// const port = process.env.PORT || 3000;
// app.listen(port, '0.0.0.0' ,() => {
//     console.log('SERVEUR DEMARRE')
// })



const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('SERVEUR DEMARRE')
})