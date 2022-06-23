const express = require('express')
const router = express.Router()
const Wine = require("../models/Wine")

router.get("/", (req, res) => {
    Wine.find()
    .then(wines => res.json(wines))
})

router.get("/:id", (req, res) => {
    Wine.findOne({ id: req.params.id })
    .then(wine => res.json(wine))
})

router.post("/new", (req, res) => {
    Wine.create(req.body)
    .then(wines => res.json(wines))
})

router.put("/:id", (req, res) => {
    Wine.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(wines => res.json(wines))
})

router.delete("/:id", (req, res) => {
    Wine.findByIdAndDelete(req.params.id)
    .then(wines => res.json(wines))
})

module.exports = router