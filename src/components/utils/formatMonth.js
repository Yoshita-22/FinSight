export const formatMonth = (month) =>
  new Date(month).toLocaleString("en-IN", { month: "short" });