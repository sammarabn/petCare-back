import pkg from 'mongoose'
const {Schema, model} = pkg
import { Double } from "mongodb";

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
        type: Double
    },
    castraded: {
        type: Boolean,
        require: true
    },
    medicines: [{
        type: Schema.Type.ObjectId,
        ref: 'Pet',
        require: true,
        foreignField: "_id"
    }],
    previousSurgeries: [{
        type: String
    }],
    Conditions: [{
        type: String
    }]
});

export default model("Pet", PetSchema);