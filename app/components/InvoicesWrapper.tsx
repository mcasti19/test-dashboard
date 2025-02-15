import React from 'react'
import { fetchLatestInvoices } from '../helpers/api';
import { LatestInvoices } from 'anjrot-components';

export const InvoicesWrapper = async () => {
    const lastesInvoices = await fetchLatestInvoices();

    console.log("LASTEST INVOICES: ", lastesInvoices);


    return (
        <>
            <LatestInvoices latestInvoices={lastesInvoices} footer={{ className: "text-white" }} className='bg-slate-700' />
        </>
    )
}
