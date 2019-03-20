const { Todo } = require('../models')
class TodoStore{
    async create(req){
        return Todo.create(req.body)
    }
    async index(){
        return Todo.findAll()
    }
}

module.exports = new TodoStore()