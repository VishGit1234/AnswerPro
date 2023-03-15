const express = require('express');
const Model = require('../model/model');

const router = express.Router();

module.exports = router;

/* ####################### CRUD operations ###################*/
{
    //Post Method
    router.post('/question/post', async (req, res) => {
        const data = new Model({
            username: req.body.username,
            question: req.body.question
        });

        try
        {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        }
        catch(error)
        {
            res.status(400).json({message: error.message});
        }
    });

    //Get all Method
    router.get('/question/getAll', async (req, res) => {
        try {
            const data = await Model.find();
            res.json(data);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    });

    //Get by ID Method
    router.get('/question/getOne/:id', async (req, res) => {
        try {
            const data = await Model.findById(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    });

    //Update by ID Method
    router.patch('/question/update/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = {new : true};

            const result = await Model.findByIdAndUpdate(
                id, updatedData, data
            );
        } catch (error) {
            res.status(400).json({message : error.message});
        }
    });

    //Delete by ID Method
    router.delete('/question/delete/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Model.findByIdAndDelete(id)
            res.send(`Document with ${data.username} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    });
}

/* ###################### App Endpoints #####################*/
{
    
}
