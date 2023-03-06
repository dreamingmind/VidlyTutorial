const express = require('express');
const router = express.Router();
const inflector = require("../utility/Inflect");

this.getController = function (controller, req, res) {
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

    let result = controller.view(req.params.id);
    if (!result) return res.status(404).send(`The requested ${req.params.controller} could not be found`);

    return res.status(200).send(result);
})

router.post('/:controller', (req, res) => {
    let controller = this.getController(req.params.controller);
    if(!controller) return res.status(404).send(`${req.params.controller} could not be found`);

    let result = controller.add(req.body);
    if (!result) return res.status(404).send(`The requested ${req.params.controller} could not be found`);

    return res.status(200).send(result);
})

router.patch('/:controller/:id', (req, res) => {
    return res.send('Hello World');
})

router.delete('/:controller/:id', (req, res) => {
    return res.send('Hello World');
})

module.exports = router;