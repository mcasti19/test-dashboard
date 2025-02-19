import Link from "next/link";
import { FaRegFaceFrownOpen } from "react-icons/fa6";

const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center gap-2 h-screen">
            <FaRegFaceFrownOpen className="w-20 text-gray-400 text-6xl" />
            <h2 className="font-semibold text-4xl">404 Not Found</h2>
            <p className="text-xl">Could not find the request invoice. </p>
            <Link href='/dashboard/invoices' className="mt-4 rounded-md px-4 py-2 text-2xl bg-blue-500 text-white transition-colors hover:bg-blue-400">
                Go Back
            </Link>
        </main>
    );
};

export default NotFound;