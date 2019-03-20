const TodoStore = require('../store/TodoStore')
class TodosController{
    async index(_req, res){
        const todos = await TodoStore.index()
        res.json({success: true, data: todos})
    }

    async create(_req, res){
        const todo = await TodoStore.create(_req)
        res.json({success: true, message: 'Created Successfully', todo: todo})
    }
}

module.exports = new TodosController();