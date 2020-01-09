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

/*
Object.assign(prepare, canvasPrepare);
Object.assign(extract, canvasExtract);
*/