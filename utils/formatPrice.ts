export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  }).format(amount);
};