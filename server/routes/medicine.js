import express from 'express';
import { createMedicine,getAllMedicine,getSingleMedicine,updateMedicine,deleteMedicine } from '../controllers/medicine';
const router = express.Router();
router.post('/medicine', createMedicine);
router.get('/medicine-all', getAllMedicine);
router.get('/medicine-single/:medicineId', getSingleMedicine);
router.patch('/medicine-single/:medicineId', updateMedicine);
router.delete('/medicine-single/:medicineId', deleteMedicine);
export default router;