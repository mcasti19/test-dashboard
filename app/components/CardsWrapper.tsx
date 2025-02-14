import React from 'react'
import { fetchCardData } from '../helpers/api';
import { InfoCard } from 'anjrot-components';

export const CardsWrapper = async () => {
    const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

    return (
        <>
            <InfoCard title="Collested" value={totalPaidInvoices} type="collected" currency={{ locale: "en-US", currency: "EUR" }} />
            <InfoCard title="Pending" value={totalPendingInvoices} type="pending" currency={{ locale: "en-US", currency: "EUR" }} />
            <InfoCard title="Total Invoices" value={numberOfInvoices} type="invoices" />
            <InfoCard title="Total Customers" value={numberOfCustomers} type="customers" />
        </>
    )
}
