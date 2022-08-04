import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const medicineSchema = new mongoose.Schema({
  userUUID:{
    type: String,
    required: true,
      }, 
  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  timing: {
      type : String,
      required: true,
  },
  key: {
    type : String,
    required: true,
},
});

export default mongoose.model('Medicine', medicineSchema);