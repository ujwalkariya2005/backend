import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospitals: [ // since this field is multiple we used arrays
        {   // for singular fields regular key value pairs applied
            type: mongoose.Schema.Types.ObjectId,
            ref: 'hospital',
        }
    ]
}, {timestamps: true})

export const doctor = mongoose.model('doctor', doctorSchema)
