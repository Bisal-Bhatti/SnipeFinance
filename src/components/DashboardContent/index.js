import React from "react";
import styles from "./dashboardContent.module.sass";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderWidth: 1,
    },
  ],
};


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data1 = {
  labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
      label: "Sales/ month",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
    },
    {
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
      label: "Sales/ month",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
    },
  ],
};

const DashboardContent = () => {
  return (
    <>
        <div className={styles.contentwrapper}>
          <div className={styles.tabs}>
            <div className={styles.categories}>
              <h2>Companies</h2>
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.categories}>
              <h2>Customers</h2>
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.categories}>
              <h2>Users</h2>
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.categories}>
              <h2>Projects</h2>
            </div>
          </div>
        </div>
        {/* chart started  */}
        <div className={styles.charts}>
          <div className={styles.bar}>
            <h2>Sales</h2>
            <Line options={options} data={data1} width={400} height={400} />
          </div>
          <div className={styles.circle}>
            <h2>Customers Arrived</h2>
              <Doughnut data={data} />
          </div>
        </div>
    </>
  );
};

export default DashboardContent;
