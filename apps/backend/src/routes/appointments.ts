import express, { Router, Request, Response } from 'express';
import { summarize } from './summary.ts';

const router = express.Router();

router.get('/notes', async function (req: Request, res: Response) {
    const hardcodedNote = `
        Patient: John Doe
        Date: 2025-06-12
        Type: Follow-Up
        Chief Complaint: Persistent headaches and blurred vision.
        History: Patient reports 2 weeks of ongoing headaches localized to the front of the head, worsening in the morning. Vision becomes blurry after prolonged screen use.
        Exam: Neurological exam within normal limits, no papilledema observed. Visual acuity slightly reduced.
        Assessment: Possible migraines or eye strain due to extended computer use.
        Plan: Advised to reduce screen time, prescribed sumatriptan as needed, referral to ophthalmology for further evaluation.
        Follow-up: 2 weeks.
      `;

    try {
        const summary = await summarize(hardcodedNote);
        res.json({ summary });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to summarize note' });
    }
});

export default router;
