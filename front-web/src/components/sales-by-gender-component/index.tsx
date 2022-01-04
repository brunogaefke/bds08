import ReactApexChart from 'react-apexcharts';
import { formatPrice } from '../../utils/formatters';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  totalSum: number;
};

function SalesByGenderComponent({ labels = [], name, series = [], totalSum }: Props) {

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
