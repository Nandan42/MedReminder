import mongoose from 'mongoose';
import Medicine from '../models/medicine';

// create new medicine
export async function createMedicine(req, res) {
  const medicine = new Medicine({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    dosage: req.body.dosage,
    reminder: req.body.reminder,
    timing: req.body.timing
  });
  return medicine
    .save()
    .then((newMedicine) => {
      return res.status(201).json({
        success: true,
        message: 'New medicine created successfully',
        Medicine: newMedicine,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
} 

export async function getAllMedicine(req, res){
    Medicine.find()
      .select('_id name dosage reminder timing')
      .then((allMedicine) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all medicines',
          Medicine: allMedicine,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
      });
  }

export function getSingleMedicine(req, res) {
    const id = req.params.medicineId;
    Medicine.findById(id)
      .then((singleMedicine) => {
        res.status(200).json({
          success: true,
          message: `More on ${singleMedicine.name}`,
          Medicine: singleMedicine,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'This cause does not exist',
          error: err.message,
        });
     });
  }

export async function updateMedicine(req, res) {
    const id = req.params.medicineId;
    const updateObject = req.body;
    Medicine.findById(id)
    .update({ _id:id }, { $set:updateObject })
      .exec()
      .then((updateObject) => {
        res.status(200).json({
          success: true,
          message: 'Medicine is updated',
          updateMedicine: updateObject,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: err.message
        });
      });
  }

export function deleteMedicine(req, res) {
    const id = req.params.medicineId;
    Medicine.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
  }