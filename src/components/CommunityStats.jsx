import React from 'react';
import '../styles/components/community-stats.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export const CommunityStats = ({ icon: IconComponent, number, text, color }) => {

    return (
        <div className="community-stats" style={{ backgroundColor: color }}>
            <div className="community-stats-header">
                <div className="community-stats-icon">
                    <IconComponent />
                </div>
                <div className="community-stats-icon">
                    <TrendingUpIcon />
                </div>
            </div>

            <p className="community-stats-number" >
                {number}
            </p>
            <p className="community-stats-text" >
                {text}
            </p>
        </div>
    );
};