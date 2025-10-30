import { CommunityStats } from "./CommunityStats";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import "../styles/components/GroupCommunityStats.css";

export const GroupCommunityStats = (stats) => {

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
        <div className="stats-container">
            <CommunityStats icon={CalendarMonthIcon} number={stats?.totalEvents || 0} text="Total d'événements" color="#F46431" />
            <CommunityStats icon={FavoriteIcon} number={totalLikes} text="Total de likes" color="#FF8238" />
            <CommunityStats icon={CategoryIcon} number={mostPopularCategory} text="Catégorie la plus populaire" color="#F46431" />
        </div>
    );
};