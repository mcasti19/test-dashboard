
import { FC, PropsWithChildren } from 'react';
import { SideNav } from '../components';
import UserBar from '../components/UserBar';


const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main>
            <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
                <aside className='w-full flex-none md:w-64 bg-slate-800 '>
                    <SideNav />
                </aside>
                <div className="flex-grow p-6 md:overflow-y-auto md:px-12">
                    <UserBar />
                    {children}
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout