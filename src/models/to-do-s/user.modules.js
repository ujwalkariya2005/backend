// import the mongoose library to create schemas and models
import mongoose from 'mongoose'

// define the blueprint (schema) for the user collection
const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    }
}, 
// automatically add createdAt and updatedAt time properties
{timestamps: true} )

// create and export the model (wrapper) to perform database operations on the Users collection
export const User = mongoose.model('User', userSchema)
