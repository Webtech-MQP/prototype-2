import type { Patient } from 'common/src/schemas/patient';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Patient>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
];
