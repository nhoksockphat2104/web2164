// Tạo projet và ghi nhận thông tin liên quan
// npm init--y
// Mở thư viện
const fs = require ("fs");
const express = require("express");
// Tham số của Web
xport = process.env.PORT || 3000;
// Tạo App Web
const app = express();
const router = express.Router();
//Routing Web

//--- Home
router.get('/home', 
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("Đây là trang Home !");
    });
//--- Login
router.get('/Login', 
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("Đây là trang Login !");
    });
//-- Log out
router.get('/Logout', 
    (req, res) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send("Đây là trang Log out !");
    });
// Start Web
app.use("/", router);
//Web lắng nghe tại port
app.listen(xport,
    (err) =>{
        console.log("\n Tạo Web tại" ,xport ,"với", err);
    }
);
