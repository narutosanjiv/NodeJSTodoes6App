let express = require('express')
let router = express.Router()
let todosController = require('../controllers/TodosController')
class AppRoutes{
    static index(){
        router.get('/todos', todosController.index)
        router.post('/todos', todosController.create)
        return router
    }
}


module.exports = AppRoutes.index();
