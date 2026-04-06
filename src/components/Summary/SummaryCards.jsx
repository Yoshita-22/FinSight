import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

function SummaryCards({ income, expenses }) {
  const balance = income - expenses;
  const savingsRate = income ? ((balance / income) * 100).toFixed(1) : 0;

  const financialScore =
    savingsRate > 30 ? 90 :
    savingsRate > 20 ? 75 :
    savingsRate > 10 ? 60 : 40;

  const cards = [
    {
      title: "Total Income",
      value: `₹${income}`,
      color: "text-income",
      bg: "bg-green-100 dark:bg-green-900/30",
      icon: <FaArrowUp />,
    },
    {
      title: "Total Expenses",
      value: `₹${expenses}`,
      color: "text-expense",
      bg: "bg-red-100 dark:bg-red-900/30",
      icon: <FaArrowDown />,
    },
    {
      title: "Balance",
      value: `₹${balance}`,
      color: "text-primary",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      icon: <MdOutlineAccountBalance />,
    },
    {
      title: "Savings Rate",
      value: `${savingsRate}%`,
      color: "text-primary",
      bg: "bg-purple-100 dark:bg-purple-900/30",
      icon: <IoStatsChartSharp />,
    },
    {
      title: "Financial Score",
      value: `${financialScore}/100`,
      color: "text-warning",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      icon: <FaStar />
,
    },
  ];

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
      {cards.map((card, index) => {
        return(  
        <div className="relative p-[1px] rounded-2xl group" key={index}>
            <div
                
                style={{ animationDelay: `${index * 0.1}s` }}
                className="transition-all duration-300 hover:-translate-y-1 bg-white/70 dark:bg-white/5 backdrop-blur-md   hover:scale-[1.02] animate-fadeUp  border border-border-light dark:border-border-dark shadow-sm hover:shadow-md p-4 rounded-2xl "
                >

                
                <div className="flex items-center justify-between mb-3">
                    <p className="text-text-secondaryLight dark:text-text-secondaryDark text-sm">
                    {card.title}
                    </p>

                    <div className={`p-2 rounded-lg ${card.bg}`}>
                    <span className={`${card.color} text-sm`}>
                        {card.icon}
                    </span>
                    </div>
                </div>

                <h3 className={`
                    text-xl font-semibold
                    ${card.color}
                `}>
                    {card.value}
                </h3>

            </div> 
            </div>
                )})}
                

            </div>
    
    
    </>
  );
}

export default SummaryCards;