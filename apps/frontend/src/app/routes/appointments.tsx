import { Calendar } from "@/components/ui/calendar"
import React from 'react';


const AppointmentRoute = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">Schedule</p>
                    <p className="text-[#4e7297] text-sm font-normal leading-normal">View and manage your
                        appointments</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 p-4">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                />
            </div>
        </div>
    );
};

export default AppointmentRoute;
