import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex w-full justify-end">
                <SignedOut>
                    <div className="m-4">
                       <SignInButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <div className="m-4">
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
}
