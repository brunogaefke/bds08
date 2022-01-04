import { SalesByGender } from "../types";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const sumSalesByDate = (salesByGenre: SalesByGender[] = []) => {
  return salesByGenre.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
