import { Gender, SalesByGender } from './types';

export const buildSalesByGenderChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => formatGender(sale.gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };

  return textByGender[gender];
};
