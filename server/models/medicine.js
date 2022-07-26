import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const medicineSchema = new mongoose.Schema({
  /*  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }, */
  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  reminder : {
    type: Boolean,
    required: true,
  },
  timing: {
        type : String
  },
});

export default mongoose.model('Medicine', medicineSchema);