import { FC, Suspense } from "react";
import { FilteredInvoicesWrapper } from "@/app/components/FilteredInvoicesWrapper";
import Search from "@/app/components/Search";
import { InvoiceSkeleton } from "@/app/components/Skeletons";
import { bebas } from "@/app/ui/fonts";




interface InvoicesProps {
    searchParams?: Promise<{ query?: string }>
}

const Invoices: FC<InvoicesProps> = async ({ searchParams }) => {
    // await new Promise(resolve => setTimeout(resolve, 3000));

    const params = await searchParams;
    console.log("params: ", params);


    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-center">
                <h1 className={`${bebas.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="flex items-center justify-center mt-4 gap-2 md:mt-8">
                <Search />
            </div>
            <Suspense fallback={<InvoiceSkeleton />}>
                <FilteredInvoicesWrapper query={params?.query} />
            </Suspense>
        </div>
    )

}
export default Invoices
