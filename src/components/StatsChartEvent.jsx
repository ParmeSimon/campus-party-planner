import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import '../styles/components/stats-chart.css';
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function StatsChartEvent() {
  
  const { categories, stats } = useContext(EventContext);

  const data = {
    labels: categories,
    datasets: [{
      label: 'Nombre dévénements',
      data: stats.eventsByCategory,
      backgroundColor: [
        '#FF6B35',
        '#FF8C42',
        '#FFB347',
        '#FFA07A'
      ],
      borderRadius: 10
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Événements par catégorie',
        font: { size: 16 },
        color: '#FF6B35'
      }
    },
    scales: {
      x: {
        ticks: { color: '#555' },
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, color: '#555' },
        grid: { color: '#eee' }
      }
    }
  };

  return (
    <>
      <Bar data={data}  options={options} className="stats-chart-event"/>
    </>
  );
}

export default StatsChartEvent;