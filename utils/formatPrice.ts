export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    // minimumFractionDigits: 0,
  }).format(amount);
};
