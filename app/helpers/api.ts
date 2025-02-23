import { auth } from "@/auth";
import { authHeaders } from "./utils";

export const fetchCardData = async () => {
    const session = await auth();
    console.log("session FetchCardData >> ", session?.user?.token);

    try {
        const [ getCustomerCount, getInvoicesCount, getInvoicesStatusCount ] = await Promise.all([
            fetch(`${process.env.API_URL}/customer/count`, {
                headers: authHeaders(session?.user?.token)
            }),
            fetch(`${process.env.API_URL}/invoices/count`, {
                headers: authHeaders(session?.user?.token)
            }),
            fetch(`${process.env.API_URL}/invoices/status-count`, {
                headers: authHeaders(session?.user?.token)
            }),
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
    const session = await auth();
    try {
        const getRevenues = await fetch(`${process.env.API_URL}/revenues`, {
            headers: authHeaders(session?.user?.token)
        });
        const resultRevenues = await getRevenues.json();

        return resultRevenues;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Revenue Data')
    }
}


export const fetchLatestInvoices = async () => {
    const session = await auth();
    try {
        const getLatestInvoices = await fetch(`${process.env.API_URL}/invoices`, {
            headers: authHeaders(session?.user?.token)
        });
        const resultLatestInvoices = await getLatestInvoices.json();
        return resultLatestInvoices;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch LastestInvoices Data')
    }
}

export const fetchFilteredInvoices = async (query?: string, currentPage?: number) => {
    const session = await auth();
    try {
        const getFilteredInvoices = await fetch(`${process.env.API_URL}/invoices/paginate?q=${query}&page=${currentPage}`, {
            headers: authHeaders(session?.user?.token)
        });
        const resultFilteredInvoices = await getFilteredInvoices.json();
        return resultFilteredInvoices;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch FilteredInvoices Data')
    }
}

export const fetchInvoicesPages = async (query: string) => {
    const session = await auth();
    try {
        const getInvoicesPages = await fetch(`${process.env.API_URL}/invoices/page-count?q=${query}`, {
            headers: authHeaders(session?.user?.token)
        });
        const resultGetInvoicesPages = await getInvoicesPages.json();
        return resultGetInvoicesPages;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Invoices Pages Data')
    }
}

export const fetchInvoiceById = async (id: string) => {
    const session = await auth();
    try {
        const getInvoiceById = await fetch(`${process.env.API_URL}/invoice/${id}`, {
            headers: authHeaders(session?.user?.token)
        });
        console.log("getInvoiceById>>>>", getInvoiceById);

        if (getInvoiceById.status === 404) return null;
        if (getInvoiceById.status !== 200) throw new Error("Error fetching Invoice!!!!");
        const resultGetInvoiceById = await getInvoiceById.json();
        return resultGetInvoiceById;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Invoice by ID Data')
    }
}


export const fetchCustomers = async () => {
    const session = await auth();
    try {
        const getCustomers = await fetch(`${process.env.API_URL}/customer`, {
            headers: authHeaders(session?.user?.token)
        });
        const resultGetCustomers = await getCustomers.json();
        return resultGetCustomers;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Customers Data')
    }
}



//* USERS DATA
export const fetchUser = async () => {
    const session = await auth();
    try {
        const getUsers = await fetch(`${process.env.API_URL}/users`, {
            headers: authHeaders(session?.user?.token)
        });
        const resultGetUsers = await getUsers.json();
        return resultGetUsers;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch USERS Data')
    }
}

//* PRODUCTS DATA
export const fetchProducts = async () => {
    const session = await auth();
    console.log("Entrnado a FETCH PRODUCTOS, SESIONNNNN: ", session);

    try {
        const getProducts = await fetch(`${process.env.API_URL}/products`, {
            headers: authHeaders(session?.user?.token)
        });

        
        const resultGetProducts = await getProducts.json();
        console.log("MOSRTANDO LOS PRODUCTOS>>>>:", resultGetProducts);
        return resultGetProducts;

    } catch (error) {
        console.log('error :>>', error);
        throw new Error('Failed to fetch Products Data')
    }
}







