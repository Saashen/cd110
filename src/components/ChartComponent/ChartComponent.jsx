import React from 'react';
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

import styles from './ChartComponent.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Big Five Personality Test',
    },
  },
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const labels = [
  'Extroversion',
  'Emotional Stability',
  'Agreeableness',
  'Conscientiousness',
  'Intellect/Imagination',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Score',
      data: [50, 52, 35, 80, 59],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
};

function ChartComponent() {
  return (
    <div className={styles.Bar}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default ChartComponent;
