// import the mongoose library to create schemas and models
import mongoose from 'mongoose'

// define the blueprint (schema) for the main todo item
const todoSchema = new mongoose.todoSchema({
    content: {
        type: String,
        required: true
    },
    complete: { // tracks whether the todo item has been finished or not
        // must be true or false
        type: Boolean,
        // automatically set to false (incomplete) when created
        default: false
    },
    createdBy: {
        // stores a unique mongodb object id reference
        type: mongoose.Schema.Types.ObjectId,
        // links this field directly to the user model
        ref: 'User'
    },
    subTodos: [ // an array of sub-todos
        {
            // stores object ids of sub-todos
            type: mongoose.Schema.Types.ObjectId,
            // links this field to the sub-todo model (one-to-many relationship)
            ref: 'subTodo'
        }
    ]
    // automatically add createdAt and updatedAt time properties
}, {timestamps: true})

// create and export the model (wrapper) to perform database operations on the todos collection
export const todo = mongoose.model('todo', todoSchema)
