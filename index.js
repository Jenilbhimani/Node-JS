const express = require("express");
// create the reast object
const app = express();
//whare "app" is rest object
// app.get('/',(req, res) => {
//     res.json({"message":"welcome to default get request"})
// });
// app.get('/product',(req, res) => {
//     res.json({"message":"welcome to default get request"})
// });
// app.post('/',(req, res) => {
//     res.json({"message":"welcome to default post request"})
// });
// app.post('/product',(req, res) => {
//     res.json({"message":"welcome to default post request"})
// });
// app.head('/',(req, res) => {
//     res.json({"message":"welcome to default head request"})
// });
// app.head('/product',(req, res) => {
//     res.json({"message":"welcome to default head request"})
// });
// app.delete('/',(req, res) => {
//     res.json({"message":"welcome to default delete request"})
// });
// app.delete('/product',(req, res) => {
//     res.json({"message":"welcome to default delete request"})
// });
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/app.html");
})
app.listen(5678,()=>{
    console.log("server listing the port no.5050");
});