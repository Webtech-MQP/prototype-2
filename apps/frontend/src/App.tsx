import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ExamplePage from './routes/ExamplePage.tsx';
import SidebarLayout from './layouts/SidebarLayout.tsx';
import { PatientPage } from './routes/PatientPage.tsx';

function App() {
    const router = createBrowserRouter([
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
                    Component: PatientPage,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
