import { InvoiceTable } from "anjrot-components";
import { fetchFilteredInvoices } from "../helpers/api"
import Image from "next/image";
import { FC } from 'react';


interface FilteredInvoicesProps {
    query?: string
}


export const FilteredInvoicesWrapper: FC<FilteredInvoicesProps> = async ({ query }) => {
    const getFilteredInvoices = await fetchFilteredInvoices(query || "");

    return (
        <InvoiceTable invoices={getFilteredInvoices} ImgComponent={Image} tableHeader={{ className: "text-white" }} className="bg-slate-700" />
    )
}
