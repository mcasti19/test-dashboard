import { Breadcrumbs } from "anjrot-components";
import { fecthCustomers } from "@/app/helpers/api";
import FormWrapper from "@/app/components/FormWrapper";
import { bebas } from "@/app/ui/fonts";


const breadCrumb = [
    {
        label: "Invoices",
        href: "/dashboard/invoices"
    },
    {
        label: "Create Invoices",
        href: "/dashboard/invoices/create",
        active: true,
    }
];

const CreateInvoices = async () => {
    const getCustomers = await fecthCustomers();
    return (
        <main>
            <Breadcrumbs breadcrumb={breadCrumb} className={bebas.className} />
            <FormWrapper customers={getCustomers} />
        </main>
    )
}

export default CreateInvoices;