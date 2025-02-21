import TableCustomers from "@/app/components/CustomerWrapper";
import { fetchCustomers } from "@/app/helpers/api";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customers",
}

const Costumers = async () => {

    const customers = await fetchCustomers();
    console.log("CUSTOMERS >>> ", customers);


    return (
        <TableCustomers customers={customers} />
    );
}
export default Costumers

