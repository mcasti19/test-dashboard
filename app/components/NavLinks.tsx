"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from 'tailwind-merge'
import { FaFileInvoice, FaHome, FaUsers } from "react-icons/fa"


const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome
    },
    {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: FaFileInvoice
    },
    {
        name: "Costumers",
        href: "/dashboard/costumers",
        icon: FaUsers
    },
]


export const NavLinks = () => {

    const pathName = usePathname();
    console.log(pathName);


    return (
        <>
            {links.map(x => {
                const LinIcon = x.icon;
                return (
                    <Link
                        key={x.name}
                        href={x.href}
                        className={`flex h-12 grow items-center justify-center gap-2 rounded-md bg-slate-800 p-3 text-lg text-white font-bold hover:bg-slate-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 ${pathName === x.href && "bg-slate-700"}`}
                    >
                        <LinIcon className='w-6' />
                        <p className="hidden md:block">
                            {x.name}
                        </p>
                    </Link>
                )
            })}
        </>
    )
}



//* Usando Tailwind Merge quedaria asi, pero o me gusta
// {links.map(x => {
//     const LinIcon = x.icon;
//     return (
//         <Link
//             key={x.name}
//             href={x.href}
//             className={twMerge("flex h-12 grow items-center justify-center gap-2 rounded-md bg-slate-800 p-3 text-lg text-white font-bold hover:bg-slate-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3", pathName === x.href && "bg-slate-700")}
//         >
//             <LinIcon className='w-6' />
//             <p className="hidden md:block">
//                 {x.name}
//             </p>
//         </Link>
//     )
// })}