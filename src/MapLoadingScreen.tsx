import React from 'react';
import TailSpin from './TailSpin';

const MapLoadingScreen: React.FunctionComponent<{ loadingText?: string; }> = (props) => {
    let { loadingText } = props;
    if(typeof loadingText == 'undefined')
        loadingText = "The map is loading, please wait...";
    return <div className="map-loading-screen">
        <span className="loading-text">{loadingText}</span>
    </div>;
};
export default MapLoadingScreen;