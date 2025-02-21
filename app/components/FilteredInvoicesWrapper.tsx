import { InvoiceTable } from "anjrot-components";
import { fetchFilteredInvoices } from "../helpers/api"
import Image from "next/image";
import { FC } from 'react';
import { deleteInvoice } from "../helpers/actions";


interface FilteredInvoicesProps {
    query?: string;
    page?: number;
}


export const FilteredInvoicesWrapper: FC<FilteredInvoicesProps> = async ({ query, page }) => {
    const getFilteredInvoices = await fetchFilteredInvoices(query || "", page);
    console.log("INVOICES >>>> ", getFilteredInvoices);


    return (
        <InvoiceTable
            invoices={getFilteredInvoices}
            ImgComponent={Image}
            deleteAction={deleteInvoice}
            tableHeader={{ className: "text-white" }}
            className="bg-slate-700"
        />
    )
}
