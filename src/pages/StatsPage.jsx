import { CommunityStats } from "../components/CommunityStats";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { EventContext } from "../context/EventContext";
import CategoryIcon from '@mui/icons-material/Category';
import { useContext } from "react";
import "../styles/pages/stats-page.css";

function StatsPage() {
    const { stats } = useContext(EventContext);

    const likedEventsData = localStorage.getItem('likedEvents');
    const totalLikes = likedEventsData ? JSON.parse(likedEventsData).length : 0;

    const getMostPopularCategory = () => {
        if (!stats?.eventsByCategory) return 'Aucune';

        const categories = stats.eventsByCategory;
        const mostPopular = Object.entries(categories).reduce((max, [category, count]) => {
            return count > max.count ? { category, count } : max;
        }, { category: 'Aucune', count: 0 });

        return mostPopular.category;
    };
    const mostPopularCategory = getMostPopularCategory();

    return (
        <div className="Container">
            <div className="stats-container">
                <CommunityStats icon={CalendarMonthIcon} number={stats?.totalEvents || 0} text="Total d'événements" />
                <CommunityStats icon={FavoriteIcon} number={totalLikes} text="Total de likes" />
                <CommunityStats icon={CategoryIcon} number={mostPopularCategory} text="Catégorie la plus populaire" />
            </div>
        </div>
    )
}

export default StatsPage;