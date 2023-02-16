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
    }

});

export default model("Pet", PetSchema);