import pkg from 'mongoose'
const {Schema, model} = pkg
import pet from "./pet.js";

const TutorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true
      },
      password: {
        type: String,
        require: true,
        select: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    pets:[{
        type: pet
    }]
});

export default model("Tutor", TutorSchema);