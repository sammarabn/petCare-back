import pkg from 'mongoose'
const {Schema, model} = pkg
import { Double } from "mongodb";
import Medicine from "../schemas/medicine.js"

const  PetSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    birthdate: {
        type: Date,
        require: true
    },
    type: {
        type: String,
        enum: ["FELINE", "CANINE", "OTHER"],
        default: "FELINE"
    },
    weight:{
        type: Number
    },
    castraded: {
        type: Boolean,
        require: true
    },
    medicines: [{
        type: Medicine.schema,
        ref: 'Medicine',
        require: false,
        foreignField: "_id"
    }],
    previousSurgeries: [{
        type: String,
        require: false
    }],
    conditions: [{
        type: String,
        require: false
    }]
});

export default model("Pet", PetSchema);