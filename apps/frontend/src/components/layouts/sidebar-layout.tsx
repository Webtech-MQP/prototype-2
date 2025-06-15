import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col w-full">
                <div className="flex h-10 items-center justify-between border-b border-gray-200 px-4 py-2">
                    <SidebarTrigger />
                </div>
                <main className="flex flex-col w-full">
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    );
};

export default SidebarLayout;
