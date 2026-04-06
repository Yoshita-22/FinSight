export const getSavingsRate = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((tx) => {
    if (tx.type === "income") income += Number(tx.amount);
    else expense += Number(tx.amount);
  });

  if (income === 0) return 0;

  return (((income - expense) / income) * 100).toFixed(1);
};