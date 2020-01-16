
import 'core-js/features/promise';
import './oldbrowser';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { TileMap } from './Tile';
import { TileMapInfo } from './MapChooser';
import { DisasterType } from './Disaster';
import MapLoadingScreen from './MapLoadingScreen';
import { createTsunamiMap } from './Tsunami';
import AlwaysSuspended from './AlwaysSuspended';
import { isWebGLSupported } from '@pixi/utils';

const PIXIContainer = React.lazy(() => {
    try {
        return import("./PIXIContainer");
    } catch(e) {
        console.error(e);
    }
});

const WebGLDialog = React.lazy(() => import("./WebGLDialog"));

var windowPromise = new Promise(resolve => window.addEventListener("load", resolve));

const WelcomeScreen = (props) => {
    return <div className="map-loading-screen welcome-screen">
        <span className="welcome-title">{document.title}</span>
        <p></p>
        <button onClick={props.onClick} className="welcome-play-button"><i className="fas fa-play"/></button>
    </div>
};
windowPromise.then(async function() {
    const webGLSupport: boolean = isWebGLSupported();
    const tilemaps: TileMapInfo[] = [
        {
            name: "Test map",
            mapGenerator: createTsunamiMap,
            disaster: DisasterType.Tsunami
        }
    ];
    const testmap = await createTsunamiMap();
    
    function App() {
        const [ chosenMap, setChosenMap ] = React.useState<TileMap>(null);
        const [ generatingMap, setGeneratingMap ] = React.useState(false);
        const [ glAcknowledge, setGLAcknowledge ] = React.useState(webGLSupport);
        const canvasLoaded = true;
        const onMapChosen = React.useCallback((mapGen: () => Promise<TileMap>) => {
            setGeneratingMap(true);
            const p = mapGen();
            p.then((map) => {
                setGeneratingMap(false);
                setChosenMap(map);
            });
            p.catch((e) => {
                console.error(e);
                setGeneratingMap(false);
            });
        }, []);
        
        const goBack = React.useCallback(() => setChosenMap(null), []);
        const onWelcomeClick = React.useCallback(() => setChosenMap(testmap), []);
        const onGlAcknowledge = React.useCallback(() => {
            /* Load PIXI Canvas support */
            setGLAcknowledge(true);
        }, [ ]);
        const renderSystemOK = webGLSupport || (glAcknowledge && canvasLoaded);
        return <div className="canvas-container">
            <Suspense fallback={<MapLoadingScreen loadingText={(generatingMap || chosenMap != null) ? "Generating map..." : "Loading..."}/>}>
                {(renderSystemOK && chosenMap == null) && <WelcomeScreen onClick={onWelcomeClick}/>}
                {(generatingMap || (glAcknowledge && !canvasLoaded)) && <AlwaysSuspended/>}
                {(renderSystemOK && chosenMap != null) && <PIXIContainer onGoBack={goBack} tileMap={chosenMap}/>}
                {!webGLSupport && <WebGLDialog glAcknowledged={glAcknowledge} onClose={onGlAcknowledge}/>}
            </Suspense>
        </div>;
    }
    
    try {
        ReactDOM.render(<App/>, document.getElementById('game-container'));
    } catch(e) {
        console.error(e);
    }
});
