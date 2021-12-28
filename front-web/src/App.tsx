import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByGenderComponent from './components/sales-by-gender-component';
import { buildSalesByGenderChart } from './helpers';
import { FilterData, PieChartConfig, SalesByGender } from './types';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [SalesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender?storeId=0', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <Filter onFilterChange={onFilterChange} />
      <SalesByGenderComponent
        name=""
        labels={SalesByGender?.labels}
        series={SalesByGender?.series}
      />
    </>
  );
}

export default App;
