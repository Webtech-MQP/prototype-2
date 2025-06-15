import db from '../bin/prisma-client.ts';
import { patientSchema, type Patient } from 'common/src/schemas/patient.ts';

export async function getPatients(): Promise<Patient[]> {
    const patients = await db.patient.findMany();
    return patients;
}

export async function addPatient(patient: Patient): Promise<Patient> {
    const newPatient = await db.patient.create({ data: patient });
    return newPatient;
}

export async function deletePatient(id: string): Promise<Patient> {
    const patient = await db.patient.delete({ where: { id } });
    return patient;
}

export async function updatePatient(id: string, patient: Partial<Patient>): Promise<Patient> {
    const updatedPatient = await db.patient.update({ where: { id }, data: patient });
    return updatedPatient;
}
