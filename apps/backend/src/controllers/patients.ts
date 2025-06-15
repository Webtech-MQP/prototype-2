import { Request, Response } from 'express';
import db from '../bin/prisma-client.ts';
import * as patientModel from '../persistence/patients.ts';
import { patientSchema, type Patient } from 'common/src/schemas/patient.ts';

export async function getPatients(req: Request, res: Response) {
    const patients = await db.patient.findMany();
    res.send(patients);
}

export async function addPatient(req: Request, res: Response) {
    try {
        const patient: Patient = patientSchema.parse(req.body);
        const newPatient = patientModel.addPatient(patient);
        res.send(newPatient);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function deletePatient(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const patient = await patientModel.deletePatient(id);
        res.send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function updatePatient(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const data = patientSchema.partial().parse(req.body);
        const patient = await patientModel.updatePatient(id, data);
        res.send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
}
