import pkg from 'mongoose'
const {Schema, model} = pkg

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
      phone: {
        type: String
      },
      pets: [{
        type: Schema.ObjectId,
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