import pkg from 'mongoose';
const {Schema, model} = pkg

const MedicineSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    initialDate: {
        type: Date
    },
    finaldate: {
        type: Date
    },
    type: {
        type: String,
        enum: ['VACCINE', 'VERMIFUGE', 'MEDICINE'],
        default: 'MEDICINE'
    
    },
    recurrent: {
        type: Boolean
    },
    nextDose: {
        type: Date
    }
});

export default model("Medicine", MedicineSchema);