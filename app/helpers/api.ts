

const headers = {
    "Content-type": "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWU1OTY3YWZmMTY4N2MwMDdjOTk2ZSIsImVtYWlsIjoibmV4dFR1dG9yaWFsMkB0ZXN0LmNvbSIsInVzZXJuYW1lIjoibmV4dFR1dG9yaWFsMiIsImlhdCI6MTczOTU3NTU3OSwiZXhwIjoxNzM5NTc5MTc5fQ._KPkTFNE83qJEcLBnKAH6gGJpn6VfvFSPfAkYfq6R08"
}


export const fetchCardData = async () => {
    try {
        const [ getCustomerCount, getInvoicesCount, getInvoicesStatusCount ] = await Promise.all([
            fetch(`${process.env.API_URL}/customer/count`, { headers }),
            fetch(`${process.env.API_URL}/invoices/count`, { headers }),
            fetch(`${process.env.API_URL}/invoices/status-count`, { headers }),
        ])

        const resultCustomerCount = await getCustomerCount.json();
        const resultInvoicesCount = await getInvoicesCount.json();
        const resultInvoicesStatusCount = await getInvoicesStatusCount.json();


        const numberOfInvoices = Number(resultInvoicesCount ?? "0");
        const numberOfCustomers = Number(resultCustomerCount ?? "0");
        const totalPaidInvoices = resultInvoicesStatusCount.paid ?? "0";
        const totalPendingInvoices = resultInvoicesStatusCount.pending ?? "0";

        // console.log("RESUUUUULLLLTTTT", numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices);


        return {
            numberOfCustomers,
            numberOfInvoices,
            totalPaidInvoices,
            totalPendingInvoices
        }

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch card Data')
    }
}

export const fetchRevenues = async () => {
    try {
        const fetchRevenues = await fetch(`${process.env.API_URL}/revenues`, { headers });
        const resultRevenues = await fetchRevenues.json();
        console.log("REVEEEENUESSSS",resultRevenues);
        
        return resultRevenues;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Revenue Data')
    }
}