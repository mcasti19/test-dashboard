import { FaBars, FaPowerOff } from "react-icons/fa";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { signOut } from "@/auth";


export const SideNav = () => {
    return (
        <>
            <div className="flex justify-end items-center mt-3 h-12">
                <FaBars className="w-10 text-white" />
            </div>
            
            <div className="flex flex-col h-full px-3 py-4 md:px-2">
                <a href="" className='flex justify-start items-end h-20 mb-2 p-4 md:h-20 '>
                    <div className="w-32 text-white md:w-40">
                        <Logo />
                    </div>
                </a>
                <div className="flex flex-row grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 ">
                    <NavLinks />

                    <div className="hidden h-auto grow w-full md:block"></div>

                    <form action={async () => {
                        "use server";
                        await signOut({ redirectTo: '/' })
                    }}>
                        <button type="submit" className='flex w-full h-12  items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'>
                            <FaPowerOff className='w-6' />
                            <p className="hidden md:block text-center">
                                Logout
                            </p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
