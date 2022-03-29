const http = require('http');
const app = http.createServer((req, res)=>{
    res.write("server is writable")
    res.end()
})
app.listen(1234,()=>{
    console.log("listening on")
})