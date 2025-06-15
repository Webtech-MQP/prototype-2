import express from 'express';
import { addPatient, deletePatient, getPatients, updatePatient } from '../controllers/patients.ts';

const router = express.Router();

router.get('/', getPatients);

router.post('/', addPatient);

router.delete('/:id', deletePatient);

router.patch('/:id', updatePatient);

export default router;
