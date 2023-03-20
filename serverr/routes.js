const router = require("express").Router
var 
peopleController = require('./controlers/peopleControlers')
projectController = require('./controlers/projectControlers')

router.get("/",(req, res) => 
    res.json({
        status: 200,
        message: "ok"
    })
);

router.route(' /people')
    .get(peopleController.index)
    .post(peopleController.index)

router.route(' /people/:_id')
    .get(peopleController.view)
    .put(peopleController.update)
    .delete   (peopleController.delete)

module.exports = router ;