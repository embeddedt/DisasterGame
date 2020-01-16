



/* ---- default pixi ---- */

const VERSION = '5.2.0';
export { VERSION };

import '@pixi/polyfill';
export * from '@pixi/constants';
export * from '@pixi/math';
export * from '@pixi/runner';
export * from '@pixi/settings';
export * from '@pixi/ticker';
import * as utils from '@pixi/utils';
export { utils };
export * from '@pixi/display';
export * from '@pixi/core';
export * from '@pixi/loaders';
export * from '@pixi/sprite';
export * from '@pixi/app';
export * from '@pixi/graphics';
export * from '@pixi/interaction';
export * from '@pixi/sprite-animated';
import * as interaction from '@pixi/interaction';
export { interaction };

/* ----    canvas    ---- */

import { InteractionManager} from '@pixi/interaction';
import { CanvasRenderer, canvasUtils } from '@pixi/canvas-renderer';
import { CanvasGraphicsRenderer } from '@pixi/canvas-graphics';
import { CanvasSpriteRenderer } from '@pixi/canvas-sprite';
import '@pixi/canvas-display';

//CanvasRenderer.registerPlugin('accessibility', accessibility.AccessibilityManager);
CanvasRenderer.registerPlugin('graphics', CanvasGraphicsRenderer);
CanvasRenderer.registerPlugin('interaction', InteractionManager);
CanvasRenderer.registerPlugin('sprite', CanvasSpriteRenderer);


// Renderer plugins
import { Renderer } from '@pixi/core';
import { BatchRenderer } from '@pixi/core';
Renderer.registerPlugin('interaction', interaction.InteractionManager);
Renderer.registerPlugin('batch', BatchRenderer);


import { Application } from '@pixi/app';
import { AppLoaderPlugin } from '@pixi/loaders';
import { TickerPlugin } from '@pixi/ticker';
Application.registerPlugin(AppLoaderPlugin);
Application.registerPlugin(TickerPlugin);

