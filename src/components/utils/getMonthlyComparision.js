export const getMonthlyComparison = (transactions, selectedMonth) => {
  const prevMonth = new Date(selectedMonth + "-01");
  prevMonth.setMonth(prevMonth.getMonth() - 1);

  const prev = prevMonth.toISOString().slice(0, 7);

  const getExpense = (month) =>
    transactions
      .filter((tx) => tx.date.slice(0, 7) === month && tx.type === "expense")
      .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const currentExpense = getExpense(selectedMonth);
  const prevExpense = getExpense(prev);

  if (prevExpense === 0) return null;

  const change = (prevExpense!=0 ? ((currentExpense - prevExpense) / prevExpense) * 100 : 100);
  console.log("change",change)
  return change.toFixed(1);
};