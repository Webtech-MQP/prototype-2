import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Patient } from 'common/src/schemas/patient';

export const getPatients = async (): Promise<Patient[]> => {
    const { data } = await axios.get('/api/patients');
    return data;
};

export const usePatients = () => {
    return useQuery({ queryKey: ['/patients'], queryFn: getPatients });
};
