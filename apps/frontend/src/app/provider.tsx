import React from 'react';
import axios from 'axios';
import { QueryClient, QueryClientProvider, QueryFunction } from '@tanstack/react-query';

type AppProviderProps = {
    children: React.ReactNode;
};

// Define a default query function that will receive the query key
const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
    const { data } = await axios.get(`/api${queryKey[0]}`);
    return data;
};

// provide the default query function to your app with defaultOptions
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
        },
    },
});

export const AppProvider = ({ children }: AppProviderProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
