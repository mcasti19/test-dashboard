import React from "react";
import { fetchRevenues } from "@/app/helpers/api";
import { RevenueChart } from "anjrot-components";
import { bebas } from "../ui/fonts";

const ChartWrapper = async () => {
  const revenue = await fetchRevenues();
  return (
    <>
      <h2 className={`${bebas.className} mb-4 text-xl md:text-2xl`} >Recent Revenues</h2>
      <RevenueChart revenues={revenue} chartHeight={350} className="bg-slate-700" />
    </>
  )
};

export default ChartWrapper;