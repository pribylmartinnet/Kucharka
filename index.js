const express = require("express")
let app = express()
app.use(express.json())

app.get("/", function (req, res){
    res.status(200).send("Ahoj")
})

app.get("/sum", function (req, res){
    
    try {
        let a = parseFloat(req.query.a) 
        let b = parseFloat(req.query.b)
        console.log(a)
    res.status(200).send((a + b).toString())
    } catch (err){
        res.status(401).send("Bad request " + err )
    }
    
})

app.post("/recept", function (req, res){
    try {
        let topic = req.body.topic 
        let desc = req.body.description
        res.status(200).send("Recept byl vytvořen")
    } catch (err){
        res.status(402).send("Recept se nevytvořil " + err )

    }
    
})




app.listen(8080)
