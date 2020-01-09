
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
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const PIXIContainer = React.lazy(() => {
    try {
        return import("./PIXIContainer");
    } catch(e) {
        console.error(e);
    }
});

const WebGLDialog = React.lazy(() => import("./WebGLDialog"));
const MapChooser = React.lazy(() => import("./MapChooser"));
const SnackbarProvider = React.lazy(() => import('./SnackbarProvider'));

var windowPromise = new Promise(resolve => window.addEventListener("load", resolve));
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
        const [ canvasLoaded, setCanvasLoaded ] = React.useState(webGLSupport);
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
        
        React.useEffect(() => {
            if(canvasLoaded == true)
                setChosenMap(testmap);
        }, [ canvasLoaded ]);
        
        const goBack = React.useCallback(() => setChosenMap(null), []);
        const onGlAcknowledge = React.useCallback(() => {
            /* Load PIXI Canvas support */
            setGLAcknowledge(true);
            import("./PixiCanvas").then(() => {
                console.log("Loaded canvas");
                setCanvasLoaded(true);
            });
        }, [ ]);
        const renderSystemOK = webGLSupport || (glAcknowledge && canvasLoaded);
        return <div className="canvas-container">
            <StylesProvider>
                <Suspense fallback={<MapLoadingScreen loadingText={(generatingMap || chosenMap != null) ? "Generating map..." : "Loading..."}/>}>
                    {renderSystemOK && <MapChooser show={chosenMap == null} onMapChosen={onMapChosen} availableMaps={tilemaps}/>}
                    {(generatingMap || (glAcknowledge && !canvasLoaded)) && <AlwaysSuspended/>}
                    {(renderSystemOK && chosenMap != null) && <SnackbarProvider><PIXIContainer onGoBack={goBack} tileMap={chosenMap}/></SnackbarProvider>}
                    {!webGLSupport && <WebGLDialog glAcknowledged={glAcknowledge} onClose={onGlAcknowledge}/>}
                </Suspense>
            </StylesProvider>
        </div>;
    }
    
    try {
        ReactDOM.render(<App/>, document.getElementById('game-container'));
    } catch(e) {
        console.error(e);
    }
});
