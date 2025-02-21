import { FC, Suspense } from "react";
import { FilteredInvoicesWrapper } from "@/app/components/FilteredInvoicesWrapper";
import Search from "@/app/components/Search";
import { InvoiceSkeleton } from "@/app/components/Skeletons";
import { bebas } from "@/app/ui/fonts";
import PaginationWrapper from "@/app/components/PaginationWrapper";
import { fetchInvoicesPages } from "@/app/helpers/api";
import { TableButtons } from "anjrot-components";
import Link from "next/link";
import { Metadata } from "next";

interface InvoicesProps {
    searchParams?: Promise<{ query?: string, page?: number }>
}

export const metadata: Metadata = {
    title: "Invoices"
}

const Invoices: FC<InvoicesProps> = async ({ searchParams }) => {
    const params = await searchParams;
    const totaPage = await fetchInvoicesPages(params?.query || "")

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-center">
                <h1 className={`${bebas.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="flex items-center justify-center mt-4 gap-2 md:mt-8">
                <Search />
                <TableButtons ButtonType={Link} title="Create Invoice" href="/dashboard/invoices/create" />
            </div>
            <Suspense fallback={<InvoiceSkeleton />}>
                <FilteredInvoicesWrapper query={params?.query} page={params?.page} />
            </Suspense>

            <div className="flex justify-center w-full  mt-5">
                <PaginationWrapper totalPages={totaPage} />
            </div>
        </div>
    )

}
export default Invoices
