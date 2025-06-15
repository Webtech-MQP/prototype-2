import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { usePatients } from '@/features/patients/api/get-patients';
import { columns } from '@/features/patients/components/patient-columns';

const PatientRoute = () => {
    const { data } = usePatients();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 w-full">
            <h1 className="text-3xl font-bold">Patients</h1>
            <div className="mt-4 mb-2 text-sm border rounded p-2">
                <Button variant="outline" size="sm">
                    Add Patient
                </Button>
            </div>
            <DataTable data={data} columns={columns} />
        </div>
    );
};

export default PatientRoute;
