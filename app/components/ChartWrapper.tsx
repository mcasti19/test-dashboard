import { RevenueChart } from "anjrot-components";
import { fetchRevenues } from "../helpers/api"


export const ChartWrapper = async () => {
  const revenue = await fetchRevenues();

  return (
    <RevenueChart revenues={revenue} chartHeight={350} />
  )
}
