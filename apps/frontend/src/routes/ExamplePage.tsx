import React from 'react';
import ExampleComponent from '../components/ExampleComponent.tsx';
import Layout from '@/layouts/AppLayout.tsx';

const ExamplePage = () => {
    return (
        <Layout>
            <div className="p-10">
                <h1 className="font-bold text-xl pb-4">Example Page</h1>
                <ExampleComponent></ExampleComponent>
            </div>
        </Layout>
    );
};

export default ExamplePage;
