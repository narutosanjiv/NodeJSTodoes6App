let express = require('express')
let router = express.Router()
let todosController = require('../controllers/TodosController')
const AuthController = require('../controllers/AuthController')
const AuthService = require('../services/Auth.Service')
const auth = require('../middleware/Auth.middleware')
class AppRoutes{
    static index(){
        let auth_controller = new AuthController(AuthService)
        router.get('/todos', auth.required, todosController.index)
        router.post('/todos', auth.required, todosController.create)
        router.post('/login', auth.optional, auth_controller.login)
        return router
    }
}


module.exports = AppRoutes.index();
