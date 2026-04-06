export const getTopCategory = (pieData) => {
  if (pieData.length === 0) return null;

  return pieData.reduce((max, item) =>
    item.value > max.value ? item : max
  );
};