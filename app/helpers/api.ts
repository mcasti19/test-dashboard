

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
        const getRevenues = await fetch(`${process.env.API_URL}/revenues`, { headers });
        const resultRevenues = await getRevenues.json();
        // console.log("Fetching Revenue data...11111111111111111111111");
        // await new Promise(resolve => setTimeout(resolve, 3000));
        // console.log("Fetching Revenue data...2222222222222222222222");

        return resultRevenues;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Revenue Data')
    }
}


export const fetchLatestInvoices = async () => {
    try {
        const getLatestInvoices = await fetch(`${process.env.API_URL}/invoices`, { headers });
        const resultLatestInvoices = await getLatestInvoices.json();
        return resultLatestInvoices;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch LastestInvoices Data')
    }
}

export const fetchFilteredInvoices = async (query?: string, currentPage?: number) => {
    console.log("QUERYYYYYYYYY", query);

    try {
        const getFilteredInvoices = await fetch(`${process.env.API_URL}/invoices/paginate?q=${query}&page=${currentPage}`, { headers });
        const resultFilteredInvoices = await getFilteredInvoices.json();
        return resultFilteredInvoices;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch FilteredInvoices Data')
    }
}

export const fecthInvoicesPages = async (query: string) => {

    try {
        const getInvoicesPages = await fetch(`${process.env.API_URL}/invoices/page-count?q=${query}`, { headers });
        const resultGetInvoicesPages = await getInvoicesPages.json();
        return resultGetInvoicesPages;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Invoices Pages Data')
    }
}


export const fecthCustomers = async () => {

    try {
        const getCustomers = await fetch(`${process.env.API_URL}/customer`, { headers });
        const resultGetCustomers = await getCustomers.json();
        return resultGetCustomers;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Customers Data')
    }
}

export const fecthInvoiceById = async (id: string) => {

    try {
        const getInvoiceById = await fetch(`${process.env.API_URL}/invoice/${id}`, { headers });
        const resultGetInvoiceById = await getInvoiceById.json();
        return resultGetInvoiceById;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Invoice by ID Data')
    }
}
