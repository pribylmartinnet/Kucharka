const express = require("express");
const router = express.Router()
const db = require("../db")

router.get("/:id", function (req, res){
    try {
        let id = req.params.id;
        res.status(201).send(`Topic: ${id}`)
    } catch (err){
        res.status(401).send(`Error: ${err}` )

    }

})
router.post("/", function (req, res){
    try {
        let topic = req.body.topic
        let desc = req.body.desc
        res.status(201).send(`Topic: ${topic} was created with desc: ${desc}`)
    } catch (err){
        res.status(401).send(`Error: ${err}` )

    }

})
router.delete("/:id", function (req, res){
    try {
        res.status(201).send(`Topic: ${req.params.id} was deleted`)
    } catch (err){
        res.status(401).send(`Error: ${err}` )

    }

})

module.exports = router
