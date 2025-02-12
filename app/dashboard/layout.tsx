
import { FC, PropsWithChildren } from 'react';
import { SideNav } from '../components';


const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
            <aside className='w-full flex-none md:w-64 bg-slate-800'>
                <SideNav />
            </aside>
            <div className="flex-grow p6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout