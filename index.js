const express = require("express");

const app = express();

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public");
})

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a); // changed from req.query to req.body
    const b = parseInt(req.body.b);
    res.json({
        helloAns: a + b
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
