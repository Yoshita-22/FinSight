export const getMonthlyData = (transactions) => {
  const monthlyMap = {};

  transactions.forEach((tx) => {
    const month = tx.date.slice(0, 7); // "2026-04"

    if (!monthlyMap[month]) {
      monthlyMap[month] = { income: 0, expense: 0 };
    }

    if (tx.type === "income") {
      monthlyMap[month].income += Number(tx.amount);
    } else {
      monthlyMap[month].expense += Number(tx.amount);
    }
  });

  // convert to array
  return Object.entries(monthlyMap).map(([month, data]) => ({
    month,
    income: data.income,
    expense: data.expense,
    balance: data.income - data.expense,
  }));
};