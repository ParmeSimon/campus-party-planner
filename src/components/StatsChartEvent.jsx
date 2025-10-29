import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import '../styles/components/stats-chart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function StatsChartEvent({ events }) {

    const categoryCounts = events.reduce((acc, event) => {
        acc[event.category] = (acc[event.category] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categoryCounts),
        datasets: [{
            label: 'Nombre dévénements',
            data: Object.values(categoryCounts),
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