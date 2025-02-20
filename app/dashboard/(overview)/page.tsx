import CardsWrapper from "@/app/components/CardsWrapper";
import ChartWrapper from "@/app/components/ChartWrapper";
import { InvoicesWrapper } from "@/app/components/InvoicesWrapper";
import { RevenueChartSkeleton } from "@/app/components/Skeletons";
import { bebas } from "@/app/ui/fonts";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
}


const Dashboard = () => {
    return (
        <main>
            <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}>DashBoard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CardsWrapper />
            </div>

            <div className="grid grid-cols-1 mt-6 gap-6 md:grid-cols-4 lg:grid-cols-8 ">
                <div className="w-full md:col-span-4">
                    <Suspense fallback={<RevenueChartSkeleton />}>
                        <ChartWrapper />
                    </Suspense>
                </div>

                <div className="w-full md:col-span-4">
                    <InvoicesWrapper />
                </div>
            </div>
        </main>
    )
};

export default Dashboard;