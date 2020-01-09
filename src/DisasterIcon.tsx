
import React from 'react';
const DisasterIcon: React.FunctionComponent<{ icon: string; }> = (props) => {
    return <div className="disaster-icon-container"><img src={props.icon} alt="disaster"/></div>;
};
export default DisasterIcon;