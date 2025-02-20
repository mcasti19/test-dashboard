import FormEditWrapper from '@/app/components/FormEditWrapper';
import { fecthCustomers, fecthInvoiceById } from '@/app/helpers/api';
import { bebas } from '@/app/ui/fonts';
import { Breadcrumbs } from 'anjrot-components';
import { notFound } from 'next/navigation';
import React, { FC } from 'react';


interface EditInvoicesProps {
    params: Promise<{ invoiceId: string }>
}

const EditInvoice: FC<EditInvoicesProps> = async ({ params }) => {
    const path = await params
    const id = path.invoiceId;
    // console.log("INVOICE ID >>> ", id);

    const breadCrumb = [
        {
            label: "Invoices",
            href: "/dashboard/invoices"
        },
        {
            label: "Update Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
        }
    ];

    const [ customers, invoice ] = await Promise.all([ fecthCustomers(), fecthInvoiceById(id) ]);

    if (!invoice) {
        notFound();
    }

    return (
        <>
            <Breadcrumbs breadcrumb={breadCrumb} className={bebas.className} />
            <FormEditWrapper customers={customers} invoice={invoice} />
        </>
    )
}

export default EditInvoice;