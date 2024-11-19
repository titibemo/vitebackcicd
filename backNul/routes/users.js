
const express = require('express');
const router = express.Router();

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     token: process.env.TOKEN_SECRET

// })


//read
router.get('/listUser', (req, res) =>{
    
    //const sql = 'SELECT * FROM users';
    // db.query(sql, (err, results) =>{
    //     if(err){
    //         return res.status(500).send(err);
    //     }
    //     else{
    //         res.status(200).json(results); 
    //     }
    // })
    res.status(200).json("message : 'VAS Y CHAMPION'")
})


module.exports = router;