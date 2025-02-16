import React from 'react'
import { fetchLatestInvoices } from '../helpers/api';
import { LatestInvoices } from 'anjrot-components';
import { bebas } from '../ui/fonts';

export const InvoicesWrapper = async () => {
    const lastesInvoices = await fetchLatestInvoices();

    // console.log("LASTEST INVOICES: ", lastesInvoices);


    return (
        <>
            <h2 className={`${bebas.className} mb-4 text-xl md:text-2xl`} >Latest Invoices</h2>
            <LatestInvoices latestInvoices={lastesInvoices} footer={{ className: "text-white" }} className='bg-slate-700' />
        </>
    )
}
