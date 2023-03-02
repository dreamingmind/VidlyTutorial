const express = require('express');
const router = express.Router();
const inflector = require("../utility/Inflect");

this.getController = function (controller) {
    try {
        let className = '../controllers/' + inflector.capitalize(controller) + 'Controller';
        return require(className);
    } catch (e) {
        return false;
    }
};
router.get('/:controller', (req, res) => {
    let controller = this.getController(req.params.controller);
    if(!controller) return res.status(404).send(`${req.params.controller} could not be found`);

    return res.send(controller.index());
})

router.get('/:controller/:id', (req, res) => {
    let controller = this.getController(req.params.controller);
    if(!controller) return res.status(404).send(`${req.params.controller} could not be found`);

    return res.send(controller.index());
})

router.post('/:controller', (req, res) => {
    return res.send('Hello World');
})

router.put('/:controller/:id', (req, res) => {
    return res.send('Hello World');
})

router.delete('/:controller/:id', (req, res) => {
    return res.send('Hello World');
})

module.exports = router;