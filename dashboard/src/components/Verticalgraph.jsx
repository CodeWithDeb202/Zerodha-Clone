import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import verticalGraphOptions from './verticalGraphOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Verticalgraph({ data }) {
  return <Bar options={verticalGraphOptions} data={data} />;
}

export default Verticalgraph;
