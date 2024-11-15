
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart configuration options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Revenue and Orders per Month",
    },
  },
};

const LineChart = () => {
  // Dummy data for orders and revenue
  const orderMonthlyData = [120, 150, 130, 170, 180, 160, 210, 200, 190, 220, 230, 240];
  const revenueMonthlyData = [3000, 4000, 3500, 4500, 5000, 4700, 5500, 5300, 5200, 6000, 6300, 6500];

  // Set up labels for each month
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Ensure labels match the length of the data provided
  const actualLabels = labels.slice(0, Math.max(orderMonthlyData.length, revenueMonthlyData.length));

  // Data structure for the chart
  const data = {
    labels: actualLabels,
    datasets: [
      {
        label: "Orders",
        data: orderMonthlyData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: revenueMonthlyData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
