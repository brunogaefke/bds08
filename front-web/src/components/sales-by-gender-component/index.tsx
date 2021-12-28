import { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FilterData, SalesByGender } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { buildPieChartConfig, sumSalesByGender } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  filterData?: FilterData;
};

function SalesByGenderComponent({ labels = [], name, series = [], filterData }: Props) {
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender?storeId=0', { params })
      .then((response) => {
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  return (
    <div className="sales-by-gender-container base-card">
      <div className="sales-sum-container">
        <h1 className="sales-sum-container-title">{formatPrice(totalSum)}</h1>
        <span className="sales-sum-container-span"> Total de vendas</span>
      </div>
      <div className="sales-char-container">
        <ReactApexChart options={buildPieChartConfig(labels, name)} type="donut" series={series} />
      </div>
    </div>
  );
}

export default SalesByGenderComponent;
