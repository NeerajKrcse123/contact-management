

import {
    CategoryScale,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useHistoricalData } from '../react-query/covidApi';
  
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  
  
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'COVID-19 Historical Data',
        font: {
          size: 20,
          weight: 'bold',
        },
        color: '#333',
      },
      tooltip: {
        mode: 'index' as const, 
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        footerColor: '#fff',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
        },
        grid: {
          display: false, 
        },
      },
      y: {
        ticks: {
          color: '#333',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
    interaction: {
      mode: 'index' as const, 
      intersect: false,
    },
  };
  
  const LineChart = () => {
    const { data, isLoading, error } = useHistoricalData();
  
    if (isLoading) return <p className='text-center'>Loading...</p>;
    if (error) return <p>Error loading data...</p>;
  
    const chartData = {
      labels: Object.keys(data.cases),
      datasets: [
        {
          label: 'Total Cases',
          data: Object.values(data.cases),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 2,
          pointHoverBackgroundColor: 'white',
        },
        {
          label: 'Deaths',
          data: Object.values(data.deaths),
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 2,
          pointHoverBackgroundColor: 'white',
        },
      ],
    };
  
    return (
      <div className="w-full h-96">
        <Line data={chartData} options={options} />
      </div>
    );
  };
  
  export default LineChart;
  
  
