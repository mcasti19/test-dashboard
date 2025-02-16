

const headers = {
    "Content-type": "application/json",
    Authorization: `${process.env.TOKEN}`

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
        console.log("Fetching Revenue data...11111111111111111111111");
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Fetching Revenue data...2222222222222222222222");

        return resultRevenues;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Revenue Data')
    }
}


export const fetchLatestInvoices = async () => {
    try {
        const fetchLatestInvoices = await fetch(`${process.env.API_URL}/invoices`, { headers });
        const resultLatestInvoices = await fetchLatestInvoices.json();
        return resultLatestInvoices;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch LastestInvoices Data')
    }
}