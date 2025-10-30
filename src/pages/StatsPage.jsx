import { CommunityStats } from "../components/CommunityStats";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import "../styles/pages/stats-page.css";
import Header from "../components/Header";
import StatsChartLike from "../components/StatsChartLike";
import StatsChartEvent from "../components/StatsChartEvent";
import { GroupCommunityStats } from "../components/GroupCommunityStats";
function StatsPage() {
    const { stats } = useContext(EventContext);



    return (
        <>
            <Header />
            <div className="Container">
                <GroupCommunityStats stats={stats} />
                <div className="charts-container">
                    <StatsChartEvent />
                    <StatsChartLike />
                </div>
            </div>
        </>
    )
}

export default StatsPage;