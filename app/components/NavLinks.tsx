"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from 'tailwind-merge'
import { FaBuilding, FaFileInvoice, FaHome, FaShoppingCart,  FaUsers } from "react-icons/fa"
import { BiSupport } from "react-icons/bi";


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
    {
        name: "Products",
        href: "/dashboard/products",
        icon: FaShoppingCart
    },
    {
        name: "Companies",
        href: "/dashboard/companies",
        icon: FaBuilding
    },
    {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: FaBuilding
    },
    {
        name: "Team",
        href: "/dashboard/team",
        icon: FaUsers
    },
    {
        name: "Support",
        href: "/dashboard/support",
        icon: BiSupport
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
                        className={twMerge("flex h-12 grow items-center justify-center gap-2 rounded-md bg-slate-800 p-3 text-lg text-white font-bold hover:bg-slate-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3", pathName === x.href && "bg-slate-700")}
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



//* ASi quedaria sin usar Tailwind Merge
// className={`flex h-12 grow items-center justify-center gap-2 rounded-md bg-slate-800 p-3 text-lg text-white font-bold hover:bg-slate-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 ${pathName === x.href && "bg-slate-700"}`}