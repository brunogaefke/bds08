import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function SalesByGender({ labels = [], name, series = [] }: Props) {
  return (
    <div className="sales-by-gender-container base-card">
      <div className="sales-sum-container">
        <h1 className="sales-sum-container-title">R$ 746.484,00</h1>
        <span className="sales-sum-container-span"> Total de vendas</span>
      </div>
      <div className="sales-char-container">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesByGender;
