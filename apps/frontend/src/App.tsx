import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ExamplePage from './routes/ExamplePage.tsx';
import Layout from './layouts/AppLayout.tsx';

function App() {
    const router = createBrowserRouter([
        {
            Component: Layout,
            children: [
                {
                    index: true,
                    errorElement: <div />,
                    Component: ExamplePage,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
