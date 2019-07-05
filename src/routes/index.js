const express = require('express');
const router = express.Router();
const Task = require('../model/task');tasks

router.get ('/', async (req, res) => {
 const tasks = await Task.find();
 res.render('index', {
    //tasks
 });
});
