const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Travel_schema = require("./Travel_schema");
const cors = require('cors');
mongoose.connect('mongodb+srv://23010101660:parthvekariya5059@parth.enus6nh.mongodb.net/Travel_Expenses?retryWrites=true&w=majority').then(() => {
    console.log("Connection Successfulll");
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));

    // app.use(bodyParser.json());
    app.use(express.json());

    app.use(cors());

    app.get("/", async (req, res) => {
        const data = await Travel_schema.find();
        res.json(data);
    })

    app.get("/:id", async (req, res) => {
        const data = await Travel_schema.findOne({ id: req.params.id });
        res.json(data);
        console.log(data);
    })
    
    app.post('/', async (req, res) => {
        const data = new Travel_schema(req.body);
        const result = await data.save();
        res.send(result);
    });
    
    app.put('/:id', async (req, res) => {
        const result = await Travel_schema.findOneAndUpdate({ id: req.params.id }, req.body);
        res.json(result);
    });
    
    app.delete("/:id", async (req, res) => {
        const id = req.params.id;
        const data = await Travel_schema.deleteOne({ id: id });
        res.json(data);
    })


    app.listen(4000, () => {
        console.log("Server is started");
    })
})