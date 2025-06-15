import SidebarLayout from '@/components/layouts/sidebar-layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExamplePage from './routes/ExamplePage';
import PatientRoute from './routes/patients';
import { useMemo } from 'react';

export const createAppRouter = () =>
    createBrowserRouter([
        {
            Component: SidebarLayout,
            children: [
                {
                    index: true,
                    errorElement: <div />,
                    Component: ExamplePage,
                },
                {
                    path: 'patients',
                    errorElement: <div />,
                    Component: PatientRoute,
                },
            ],
        },
    ]);
export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);

    return <RouterProvider router={router} />;
};
