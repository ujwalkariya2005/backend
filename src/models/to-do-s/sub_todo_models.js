// import the mongoose library to create schemas and models
import mongoose from 'mongoose'

// define the blueprint (schema) for a subTodo item
const subTodoSchema = new mongoose.Schema()({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        // stores a unique mongodb object id reference
        type: mongoose.Schema.Types.ObjectId,
        // links this field directly to the user model (establishes a relationship)
        ref: 'User'
    },
    // automatically add createdAt and updatedAt time properties
}, {timestamps: true})

// create and export the model (wrapper) to perform database operations on the subTodos collection
export const subtodo = mongoose.model('subTodo', subTodoSchema)
