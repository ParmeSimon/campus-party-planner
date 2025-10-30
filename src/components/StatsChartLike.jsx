import { useContext, useMemo } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import { EventContext } from "../context/EventContext";
import "../styles/components/stats-chart.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function StatsChartLike() {
    const { events, categories, likedEvents } = useContext(EventContext);

    const total = likedEvents.length;

    if (!total) {
        return <p className="stats-chart__empty">Aucun like pour le moment</p>;
    }

    let nbParty = 0;
    let nbConcert = 0;
    let nbFestival = 0;
    let nbOpenAir = 0;

    for (let event of events) {
        if (likedEvents.includes(event.id) && event.category === 'soirée') {
            nbParty++;
        } else if (likedEvents.includes(event.id) && event.category === 'concert') {
            nbConcert++;
        } else if (likedEvents.includes(event.id) && event.category === 'festival') {
            nbFestival++;
        } else if (likedEvents.includes(event.id) && event.category === 'open-air') {
            nbOpenAir++;
        }
    }

    const data = {
        labels: categories,
        datasets: [
            {
                data: [nbParty, nbConcert, nbFestival, nbOpenAir],
                backgroundColor: [
                    '#FF6B35',
                    '#FF8C42',
                    '#FFB347',
                    '#FFA07A'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "bottom" },
            title: {
                display: true,
                text: "Répartition des likes par catégorie",
                font: { size: 16 },
                color: '#FF6B35'

            },
            tooltip: {
                callbacks: {
                    label: (ctx) => {
                        const val = ctx.parsed;
                        const pct = total ? Math.round((val / total) * 100) : 0;
                        return `${ctx.label}: ${val} (${pct}%)`;
                    },
                },
            },
        },
    };

    return (
        <div className="stats-chart-event">
            <Pie data={data} options={options} />
        </div>);
}

export default StatsChartLike;
