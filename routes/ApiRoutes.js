const express = require('express');
const router = express.Router();
const inflector = require("../utility/Inflect");

function getController(controller, req, res) {
    try {
        let className = '../controllers/' + inflector.capitalize(controller) + 'Controller';
        return require(className);
    } catch (e) {
        return false;
    }
};

function contentIsJson(req) {
    return req.header('content-type') === 'application/json'
        && req.body instanceof Object;
}

function edit(req, res) {
    let controller = getController(req.params.controller);
    if (!controller) return res.status(404).send(`${req.params.controller} could not be found`);
    if (!contentIsJson(req)) return res.status(400).send("Request body must be 'application/json");

    let result = controller.edit(req.params.id, req.body);
    if (!result) return res.status(404).send(`The requested ${req.params.controller} could not be found`);

    return res.status(200).send(result);
}

/**
 * index
 */
router.get('/:controller', (req, res) => {
    let controller = this.getController(req.params.controller);
    if(!controller) return res.status(404).send(`${req.params.controller} could not be found`);

    return res.send(controller.index());
})

/**
 * view
 */
router.get('/:controller/:id', (req, res) => {
    let controller = this.getController(req.params.controller);
    if(!controller) return res.status(404).send(`${req.params.controller} could not be found`);

    let result = controller.view(req.params.id);
    if (!result) return res.status(404).send(`The requested ${req.params.controller} could not be found`);

    return res.status(200).send(result);
})

/**
 * add
 */
router.post('/:controller', (req, res) => {
    let controller = this.getController(req.params.controller);
    if(!controller) return res.status(404).send(`${req.params.controller} could not be found`);
    if(!contentIsJson(req)) return res.status(400).send("Request body must be 'application/json");

    let result = controller.add(req.body);
    if (!result) return res.status(404).send(`The requested ${req.params.controller} could not be found`);

    return res.status(200).send(result);
})

/**
 * edit
 */
router.patch('/:controller/:id', edit)
/**
 * edit
 */
router.put('/:controller/:id', edit)

/**
 * delete
 */
router.delete('/:controller/:id', (req, res) => {
    return res.send('Hello World');
})

module.exports = router;