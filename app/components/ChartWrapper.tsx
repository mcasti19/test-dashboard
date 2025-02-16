import { RevenueChart } from "anjrot-components";
import { fetchRevenues } from "../helpers/api"
import { bebas } from "../ui/fonts";


export const ChartWrapper = async () => {
  const revenue = await fetchRevenues();

  return (
    <>
      <h2 className={`${bebas.className} mb-4 text-xl md:text-2xl`} >Recent Revenues</h2>
      <RevenueChart revenues={revenue} chartHeight={379} className="bg-slate-700" />
    </>
  )
}
