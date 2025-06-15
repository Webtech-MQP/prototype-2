import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

export default function SidebarLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <Outlet />
            </main>
        </SidebarProvider>
    );
}
