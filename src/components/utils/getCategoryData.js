export const getCategoryData = (transactions) => {
  const categoryMap = {};

  transactions.forEach((tx) => {
    if (tx.type !== "expense") return; // ignore income

    const category = tx.category;

    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    categoryMap[category] += Number(tx.amount);
  });

  return Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));
};