import { bebas } from "../ui/fonts";
import { CardsWrapper } from "../components/CardsWrapper";
import { ChartWrapper } from "../components/ChartWrapper";
import { InvoicesWrapper } from "../components/InvoicesWrapper";

const Dashboard = () => {



    return (
        <main>
            <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}>DashBoard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CardsWrapper />
            </div>

            <div className="grid grid-cols-1 mt-6 gap-6 md:grid-cols-4 lg:grid-cols-8 ">
                <div className="w-full md:col-span-4">
                    <h2 className={`${bebas.className} mb-4 text-xl md:text-2xl`} >Recent Revenues</h2>
                    <ChartWrapper />
                </div>


                <div className="w-full md:col-span-4">
                    <h2 className={`${bebas.className} mb-4 text-xl md:text-2xl`} >Latest Invoices</h2>
                    <InvoicesWrapper />
                </div>

            </div>


        </main>
    )

}

export default Dashboard;