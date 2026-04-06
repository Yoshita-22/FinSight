import React from "react";
import { useTransactions } from "../../context/TransactionsContext";
import { getMonthlyData } from "../utils/getMonthlyData";
import BalanceLineChart from "./BalanceChart";
import { formatMonth } from "../utils/formatMonth";
import SpendingPieChart from "./SpendingPieChart";
import { getCategoryData } from "../utils/getCategoryData";
import { getTopCategory } from "../utils/gotTopCategory";
import { getSavingsRate } from "../utils/getSavingsRate";
import { getMonthlyComparison } from "../utils/getMonthlyComparision";
function ChartsSection({ selectedMonth,proceesedTransactions }) {
    const {transactions} = useTransactions();
    const formatedMonth = formatMonth(selectedMonth)
    const data = getMonthlyData(transactions);
    const pieData = getCategoryData(proceesedTransactions)
    const topCategory = getTopCategory(pieData);
    const savingsRate = getSavingsRate(proceesedTransactions)
    const monthlyComparision = getMonthlyComparison(transactions,selectedMonth)
    console.log(pieData)
  return (
    <div className="px-2 mt-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">

        <div>
          <h2 className="
            text-xl md:text-2xl font-semibold
            text-text-primaryLight dark:text-text-primaryDark
            tracking-tight
          ">
            Financial Insights
          </h2>

          <p className="
            text-sm mt-1
            text-text-secondaryLight dark:text-text-secondaryDark
          ">
            Understand your spending patterns and trends
          </p>
        </div>

        <p className="
          text-sm px-3 py-1 rounded-full
          bg-white/60 dark:bg-white/5 backdrop-blur-md
          border border-border-light dark:border-border-dark
          text-text-primaryLight dark:text-text-primaryDark
        ">
          {selectedMonth}
        </p>

      </div>

     {/* line chart */}
      <div className="
        p-4 rounded-2xl
        bg-white/70 dark:bg-white/5 backdrop-blur-md
        border border-border-light dark:border-border-dark
        shadow-sm
        hover:shadow-md transition
      ">

        <h3 className="
          text-sm mb-3
          text-text-secondaryLight dark:text-text-secondaryDark
        ">
          Balance Trend (Last 6 Months)
        </h3>

        {/* Replace with Recharts */}
        <div className="h-[260px] flex items-center justify-center text-gray-400">
           <BalanceLineChart data = {data}/>
        </div>

      </div>

      {/* LOWER GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

        {/* PIE CHART */}
        <div className="
          p-4 rounded-2xl
          bg-white/70 dark:bg-white/5 backdrop-blur-md
          border border-border-light dark:border-border-dark
          hover:shadow-md transition
        ">


          <h3 className="
            text-sm mb-3
            text-text-secondaryLight dark:text-text-secondaryDark
          ">
            Spending Breakdown ({formatedMonth})
          </h3>

          <div className="h-[260px] flex items-center justify-center text-gray-400">
             {
                pieData.length!=0 ?(<SpendingPieChart pieData = {pieData}/>) : (<div className='flex justify-center'>
                                            <p className='text-xl  text-text-secondaryLight dark:text-text-secondaryDark mt-1'>No transactions available.....</p>
                                        </div>)
             }
             
          </div>

        </div>

        {/* INSIGHTS CARD  */}
        <div className="
          p-4 rounded-2xl
          bg-white/70 dark:bg-white/5 backdrop-blur-md
          border border-border-light dark:border-border-dark
          flex flex-col justify-between
          hover:shadow-md transition
        ">

          <h3 className="
            text-sm mb-3
            text-text-secondaryLight dark:text-text-secondaryDark
          ">
            Insights
          </h3>

          <div className="space-y-3 text-sm">

           <p className="text-text-primaryLight dark:text-text-primaryDark">
                You spent most on{" "}
                <span className="font-semibold">
                    {topCategory ? `${topCategory.name} (${topCategory.value})` : "N/A"}
                </span>
                </p>

            <p className="text-text-primaryLight dark:text-text-primaryDark">
               Expenses decreased by 
              <span className="text-income font-semibold"> {monthlyComparision}%</span> from last month
            </p>

            <p className="text-text-primaryLight dark:text-text-primaryDark">
               Your savings rate is {savingsRate}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChartsSection;