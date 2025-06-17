import { Calendar } from "@/components/ui/calendar"
import React from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"

const AppointmentRoute = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [summary, setSummary] = React.useState<string | null>(null);

    async function handleSummarize() {
        try {
            const res = await axios.get('/api/appointments/notes');
            setSummary(res.data.summary);
        } catch (err) {
            console.error(err);
            alert("Failed to summarize note");
        }
    }
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
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{date?.toDateString()}</h2>
            <div className="flex flex-wrap justify-center gap-6 p-4">
                Patient: John Doe
                Date: 2025-06-12
                Type: Follow-Up
                Chief Complaint: Persistent headaches and blurred vision.
                History: Patient reports 2 weeks of ongoing headaches localized to the front of the head, worsening in the morning. Vision becomes blurry after prolonged screen use.
                Exam: Neurological exam within normal limits, no papilledema observed. Visual acuity slightly reduced.
                Assessment: Possible migraines or eye strain due to extended computer use.
                Plan: Advised to reduce screen time, prescribed sumatriptan as needed, referral to ophthalmology for further evaluation.
                Follow-up: 2 weeks.
                <Button onClick={() => handleSummarize()}>Summarize</Button>
                {summary && <p>{summary}</p>}
            </div>
        </div>
    );
};

export default AppointmentRoute;
