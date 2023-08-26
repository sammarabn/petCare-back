import pkg from 'mongoose'
const {Schema, model} = pkg
import Pet from "../schemas/pet.js"

const TutorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
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
      phone: {
        type: String
      },
      pets: [{
        type: Pet.schema,
        ref: 'Pet',
        require: true,
        foreignField: "_id"
      }],
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      }
});

export default model("Tutor", TutorSchema);