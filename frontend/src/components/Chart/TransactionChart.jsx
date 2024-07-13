/* eslint-disable react/prop-types */

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register all necessary components, including scales
Chart.register(...registerables);

const TransactionChart = ({ data, selectedCustomer }) => {
  const customerTransactions = data.transactions.filter(
    (transaction) => transaction.customer_id === selectedCustomer
  );

  const chartData = {
    labels: [
      ...new Set(customerTransactions.map((transaction) => transaction.date)),
    ],
    datasets: [
      {
        label: "Total Amount",
        data: customerTransactions.reduce((acc, transaction) => {
          const date = transaction.date;
          if (!acc[date]) acc[date] = 0;
          acc[date] += transaction.amount;
          return acc;
        }, {}),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TransactionChart;
