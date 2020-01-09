(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@pixi/canvas-display/lib/canvas-display.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/display/lib/display.es.js");
/*!
 * @pixi/canvas-display - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/canvas-display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */


/**
 * To be overridden by the subclass
 * @method _renderCanvas
 * @memberof PIXI.Container#
 * @protected
 * @param {PIXI.CanvasRenderer} renderer - The renderer
 */
_pixi_display__WEBPACK_IMPORTED_MODULE_0__[/* Container */ "b"].prototype._renderCanvas = function _renderCanvas(renderer) // eslint-disable-line no-unused-vars
{
    // this is where content itself gets rendered...
};

/**
 * Renders the object using the Canvas renderer
 * @method renderCanvas
 * @memberof PIXI.Container#
 * @param {PIXI.CanvasRenderer} renderer - The renderer
 */
_pixi_display__WEBPACK_IMPORTED_MODULE_0__[/* Container */ "b"].prototype.renderCanvas = function renderCanvas(renderer)
{
    // if not visible or the alpha is 0 then no need to render this
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
    {
        return;
    }

    if (this._mask)
    {
        renderer.maskManager.pushMask(this._mask);
    }

    this._renderCanvas(renderer);
    for (var i = 0, j = this.children.length; i < j; ++i)
    {
        this.children[i].renderCanvas(renderer);
    }

    if (this._mask)
    {
        renderer.maskManager.popMask(renderer);
    }
};

/**
 * Renders the object using the Canvas renderer
 * @method renderCanvas
 * @memberof PIXI.Container#
 * @param {PIXI.CanvasRenderer} renderer - The renderer
 */
_pixi_display__WEBPACK_IMPORTED_MODULE_0__[/* DisplayObject */ "c"].prototype.renderCanvas = function renderCanvas(renderer) // eslint-disable-line no-unused-vars
{
    // OVERWRITE;
};
//# sourceMappingURL=canvas-display.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/canvas-graphics/lib/canvas-graphics.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasGraphicsRenderer; });
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/graphics/lib/graphics.es.js");
/* harmony import */ var _pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/canvas-renderer/lib/canvas-renderer.es.js");
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/*!
 * @pixi/canvas-graphics - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/canvas-graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */





/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original PixiJS version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they
 * now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's CanvasGraphicsRenderer:
 * https://github.com/libgdx/libgdx/blob/1.0.0/gdx/src/com/badlogic/gdx/graphics/glutils/ShapeRenderer.java
 */

/**
 * Renderer dedicated to drawing and batching graphics objects.
 *
 * @class
 * @protected
 * @memberof PIXI
 */
var CanvasGraphicsRenderer = function CanvasGraphicsRenderer(renderer)
{
    this.renderer = renderer;
};

/**
 * Renders a Graphics object to a canvas.
 *
 * @param {PIXI.Graphics} graphics - the actual graphics object to render
 */
CanvasGraphicsRenderer.prototype.render = function render (graphics)
{
    var renderer = this.renderer;
    var context = renderer.context;
    var worldAlpha = graphics.worldAlpha;
    var transform = graphics.transform.worldTransform;
    var resolution = renderer.resolution;

    context.setTransform(
        transform.a * resolution,
        transform.b * resolution,
        transform.c * resolution,
        transform.d * resolution,
        transform.tx * resolution,
        transform.ty * resolution
    );

    // update tint if graphics was dirty
    if (graphics.canvasTintDirty !== graphics.geometry.dirty
        || graphics._prevTint !== graphics.tint)
    {
        this.updateGraphicsTint(graphics);
    }

    renderer.setBlendMode(graphics.blendMode);

    var graphicsData = graphics.geometry.graphicsData;

    for (var i = 0; i < graphicsData.length; i++)
    {
        var data = graphicsData[i];
        var shape = data.shape;
        var fillStyle = data.fillStyle;
        var lineStyle = data.lineStyle;

        var fillColor = data._fillTint;
        var lineColor = data._lineTint;

        context.lineWidth = lineStyle.width;

        if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* SHAPES */ "l"].POLY)
        {
            context.beginPath();

            var points = shape.points;
            var holes = data.holes;
            var outerArea = (void 0);
            var innerArea = (void 0);
            var px = (void 0);
            var py = (void 0);

            context.moveTo(points[0], points[1]);

            for (var j = 2; j < points.length; j += 2)
            {
                context.lineTo(points[j], points[j + 1]);
            }

            if (shape.closeStroke)
            {
                context.closePath();
            }

            if (holes.length > 0)
            {
                outerArea = 0;
                px = points[0];
                py = points[1];
                for (var j$1 = 2; j$1 + 2 < points.length; j$1 += 2)
                {
                    outerArea += ((points[j$1] - px) * (points[j$1 + 3] - py))
                        - ((points[j$1 + 2] - px) * (points[j$1 + 1] - py));
                }

                for (var k = 0; k < holes.length; k++)
                {
                    points = holes[k].shape.points;

                    if (!points)
                    {
                        continue;
                    }

                    innerArea = 0;
                    px = points[0];
                    py = points[1];
                    for (var j$2 = 2; j$2 + 2 < points.length; j$2 += 2)
                    {
                        innerArea += ((points[j$2] - px) * (points[j$2 + 3] - py))
                            - ((points[j$2 + 2] - px) * (points[j$2 + 1] - py));
                    }

                    if (innerArea * outerArea < 0)
                    {
                        context.moveTo(points[0], points[1]);

                        for (var j$3 = 2; j$3 < points.length; j$3 += 2)
                        {
                            context.lineTo(points[j$3], points[j$3 + 1]);
                        }
                    }
                    else
                    {
                        context.moveTo(points[points.length - 2], points[points.length - 1]);

                        for (var j$4 = points.length - 4; j$4 >= 0; j$4 -= 2)
                        {
                            context.lineTo(points[j$4], points[j$4 + 1]);
                        }
                    }

                    if (holes[k].shape.closeStroke)
                    {
                        context.closePath();
                    }
                }
            }

            if (fillStyle.visible)
            {
                context.globalAlpha = fillStyle.alpha * worldAlpha;

                context.fillStyle = "#" + ((("00000" + ((fillColor | 0).toString(16)))).substr(-6));
                context.fill();
            }

            if (lineStyle.visible)
            {
                context.globalAlpha = lineStyle.alpha * worldAlpha;
                context.strokeStyle = "#" + ((("00000" + ((lineColor | 0).toString(16)))).substr(-6));
                context.stroke();
            }
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* SHAPES */ "l"].RECT)
        {
            if (fillStyle.visible)
            {
                context.globalAlpha = fillStyle.alpha * worldAlpha;
                context.fillStyle = "#" + ((("00000" + ((fillColor | 0).toString(16)))).substr(-6));
                context.fillRect(shape.x, shape.y, shape.width, shape.height);
            }
            if (lineStyle.visible)
            {
                context.globalAlpha = lineStyle.alpha * worldAlpha;
                context.strokeStyle = "#" + ((("00000" + ((lineColor | 0).toString(16)))).substr(-6));
                context.strokeRect(shape.x, shape.y, shape.width, shape.height);
            }
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* SHAPES */ "l"].CIRC)
        {
            // TODO - need to be Undefined!
            context.beginPath();
            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            context.closePath();

            if (fillStyle.visible)
            {
                context.globalAlpha = fillStyle.alpha * worldAlpha;
                context.fillStyle = "#" + ((("00000" + ((fillColor | 0).toString(16)))).substr(-6));
                context.fill();
            }

            if (lineStyle.visible)
            {
                context.globalAlpha = lineStyle.alpha * worldAlpha;
                context.strokeStyle = "#" + ((("00000" + ((lineColor | 0).toString(16)))).substr(-6));
                context.stroke();
            }
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* SHAPES */ "l"].ELIP)
        {
            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - (w / 2);
            var y = shape.y - (h / 2);

            context.beginPath();

            var kappa = 0.5522848;
            var ox = (w / 2) * kappa; // control point offset horizontal
            var oy = (h / 2) * kappa; // control point offset vertical
            var xe = x + w; // x-end
            var ye = y + h; // y-end
            var xm = x + (w / 2); // x-middle
            var ym = y + (h / 2); // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

            context.closePath();

            if (fillStyle.visible)
            {
                context.globalAlpha = fillStyle.alpha * worldAlpha;
                context.fillStyle = "#" + ((("00000" + ((fillColor | 0).toString(16)))).substr(-6));
                context.fill();
            }
            if (lineStyle.visible)
            {
                context.globalAlpha = lineStyle.alpha * worldAlpha;
                context.strokeStyle = "#" + ((("00000" + ((lineColor | 0).toString(16)))).substr(-6));
                context.stroke();
            }
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* SHAPES */ "l"].RREC)
        {
            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;

            radius = radius > maxRadius ? maxRadius : radius;

            context.beginPath();
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();

            if (fillStyle.visible)
            {
                context.globalAlpha = fillStyle.alpha * worldAlpha;
                context.fillStyle = "#" + ((("00000" + ((fillColor | 0).toString(16)))).substr(-6));
                context.fill();
            }
            if (lineStyle.visible)
            {
                context.globalAlpha = lineStyle.alpha * worldAlpha;
                context.strokeStyle = "#" + ((("00000" + ((lineColor | 0).toString(16)))).substr(-6));
                context.stroke();
            }
        }
    }
};

/**
 * Updates the tint of a graphics object
 *
 * @protected
 * @param {PIXI.Graphics} graphics - the graphics that will have its tint updated
 */
CanvasGraphicsRenderer.prototype.updateGraphicsTint = function updateGraphicsTint (graphics)
{
    graphics._prevTint = graphics.tint;
    graphics.canvasTintDirty = graphics.geometry.dirty;

    var tintR = ((graphics.tint >> 16) & 0xFF) / 255;
    var tintG = ((graphics.tint >> 8) & 0xFF) / 255;
    var tintB = (graphics.tint & 0xFF) / 255;
    var graphicsData = graphics.geometry.graphicsData;

    for (var i = 0; i < graphicsData.length; ++i)
    {
        var data = graphicsData[i];

        var fillColor = data.fillStyle.color | 0;
        var lineColor = data.lineStyle.color | 0;

        // super inline, cos optimization :)
        data._fillTint = (
            (((fillColor >> 16) & 0xFF) / 255 * tintR * 255 << 16)
            + (((fillColor >> 8) & 0xFF) / 255 * tintG * 255 << 8)
            + (((fillColor & 0xFF) / 255) * tintB * 255)
        );

        data._lineTint = (
            (((lineColor >> 16) & 0xFF) / 255 * tintR * 255 << 16)
            + (((lineColor >> 8) & 0xFF) / 255 * tintG * 255 << 8)
            + (((lineColor & 0xFF) / 255) * tintB * 255)
        );
    }
};

/**
 * destroy graphics object
 *
 */
CanvasGraphicsRenderer.prototype.destroy = function destroy ()
{
    this.renderer = null;
};

var canvasRenderer;
var tempMatrix = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* Matrix */ "d"]();

/**
 * Generates a canvas texture. Only available with **pixi.js-legacy** bundle
 * or the **@pixi/canvas-graphics** package.
 * @method generateCanvasTexture
 * @memberof PIXI.Graphics#
 * @param {number} scaleMode - The scale mode of the texture.
 * @param {number} resolution - The resolution of the texture.
 * @return {PIXI.Texture} The new texture.
 */
_pixi_graphics__WEBPACK_IMPORTED_MODULE_1__[/* Graphics */ "c"].prototype.generateCanvasTexture = function generateCanvasTexture(scaleMode, resolution)
{
    if ( resolution === void 0 ) resolution = 1;

    var bounds = this.getLocalBounds();

    var canvasBuffer = _pixi_core__WEBPACK_IMPORTED_MODULE_3__[/* RenderTexture */ "x"].create(bounds.width, bounds.height, scaleMode, resolution);

    if (!canvasRenderer)
    {
        canvasRenderer = new _pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_2__[/* CanvasRenderer */ "a"]();
    }

    this.transform.updateLocalTransform();
    this.transform.localTransform.copyTo(tempMatrix);

    tempMatrix.invert();

    tempMatrix.tx -= bounds.x;
    tempMatrix.ty -= bounds.y;

    canvasRenderer.render(this, canvasBuffer, true, tempMatrix);

    var texture = _pixi_core__WEBPACK_IMPORTED_MODULE_3__[/* Texture */ "E"].from(canvasBuffer.baseTexture._canvasRenderTarget.canvas, {
        scaleMode: scaleMode,
    });

    texture.baseTexture.resolution = resolution;
    texture.baseTexture.update();

    return texture;
};

_pixi_graphics__WEBPACK_IMPORTED_MODULE_1__[/* Graphics */ "c"].prototype.cachedGraphicsData = [];

/**
 * Renders the object using the Canvas renderer
 *
 * @method _renderCanvas
 * @memberof PIXI.Graphics#
 * @private
 * @param {PIXI.CanvasRenderer} renderer - The renderer
 */
_pixi_graphics__WEBPACK_IMPORTED_MODULE_1__[/* Graphics */ "c"].prototype._renderCanvas = function _renderCanvas(renderer)
{
    if (this.isMask === true)
    {
        return;
    }

    this.finishPoly();
    renderer.plugins.graphics.render(this);
};


//# sourceMappingURL=canvas-graphics.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/canvas-renderer/lib/canvas-renderer.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasRenderer; });
/* unused harmony export canUseNewCanvasBlendModes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canvasUtils; });
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/constants/lib/constants.es.js");
/* harmony import */ var _pixi_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@pixi/settings/lib/settings.es.js");
/*!
 * @pixi/canvas-renderer - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/canvas-renderer is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */






/**
 * A set of functions used to handle masking.
 *
 * Sprite masking is not supported on the CanvasRenderer.
 *
 * @class
 * @memberof PIXI
 */
var CanvasMaskManager = function CanvasMaskManager(renderer)
{
    this.renderer = renderer;
};

/**
 * This method adds it to the current stack of masks.
 *
 * @param {PIXI.MaskData | PIXI.Graphics} maskData - the maskData that will be pushed
 */
CanvasMaskManager.prototype.pushMask = function pushMask (maskData)
{
    var renderer = this.renderer;
    var maskObject = maskData.isMaskData ? maskData.maskObject : maskData;

    renderer.context.save();

    var cacheAlpha = maskObject.alpha;
    var transform = maskObject.transform.worldTransform;
    var resolution = renderer.resolution;

    renderer.context.setTransform(
        transform.a * resolution,
        transform.b * resolution,
        transform.c * resolution,
        transform.d * resolution,
        transform.tx * resolution,
        transform.ty * resolution
    );

    // TODO support sprite alpha masks??
    // lots of effort required. If demand is great enough..
    if (!maskObject._texture)
    {
        this.renderGraphicsShape(maskObject);
        renderer.context.clip();
    }

    maskData.worldAlpha = cacheAlpha;
};

/**
 * Renders a PIXI.Graphics shape.
 *
 * @param {PIXI.Graphics} graphics - The object to render.
 */
CanvasMaskManager.prototype.renderGraphicsShape = function renderGraphicsShape (graphics)
{
    var context = this.renderer.context;
    var graphicsData = graphics.geometry.graphicsData;
    var len = graphicsData.length;

    if (len === 0)
    {
        return;
    }

    context.beginPath();

    for (var i = 0; i < len; i++)
    {
        var data = graphicsData[i];
        var shape = data.shape;

        if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_2__[/* SHAPES */ "l"].POLY)
        {
            var points = shape.points;

            context.moveTo(points[0], points[1]);

            for (var j = 1; j < points.length / 2; j++)
            {
                context.lineTo(points[j * 2], points[(j * 2) + 1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1])
            {
                context.closePath();
            }
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_2__[/* SHAPES */ "l"].RECT)
        {
            context.rect(shape.x, shape.y, shape.width, shape.height);
            context.closePath();
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_2__[/* SHAPES */ "l"].CIRC)
        {
            // TODO - need to be Undefined!
            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            context.closePath();
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_2__[/* SHAPES */ "l"].ELIP)
        {
            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - (w / 2);
            var y = shape.y - (h / 2);

            var kappa = 0.5522848;
            var ox = (w / 2) * kappa; // control point offset horizontal
            var oy = (h / 2) * kappa; // control point offset vertical
            var xe = x + w; // x-end
            var ye = y + h; // y-end
            var xm = x + (w / 2); // x-middle
            var ym = y + (h / 2); // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            context.closePath();
        }
        else if (data.type === _pixi_math__WEBPACK_IMPORTED_MODULE_2__[/* SHAPES */ "l"].RREC)
        {
            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;

            radius = radius > maxRadius ? maxRadius : radius;

            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();
        }
    }
};

/**
 * Restores the current drawing context to the state it was before the mask was applied.
 *
 * @param {PIXI.CanvasRenderer} renderer - The renderer context to use.
 */
CanvasMaskManager.prototype.popMask = function popMask (renderer)
{
    renderer.context.restore();
    renderer.invalidateBlendMode();
};

/**
 * Destroys this canvas mask manager.
 *
 */
CanvasMaskManager.prototype.destroy = function destroy ()
{
    /* empty */
};

/**
 * Creates a little colored canvas
 *
 * @ignore
 * @param {string} color - The color to make the canvas
 * @return {canvas} a small canvas element
 */
function createColoredCanvas(color)
{
    var canvas = document.createElement('canvas');

    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');

    context.fillStyle = color;
    context.fillRect(0, 0, 6, 1);

    return canvas;
}

/**
 * Checks whether the Canvas BlendModes are supported by the current browser
 *
 * @private
 * @return {boolean} whether they are supported
 */
function canUseNewCanvasBlendModes()
{
    if (typeof document === 'undefined')
    {
        return false;
    }

    var magenta = createColoredCanvas('#ff00ff');
    var yellow = createColoredCanvas('#ffff00');

    var canvas = document.createElement('canvas');

    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');

    context.globalCompositeOperation = 'multiply';
    context.drawImage(magenta, 0, 0);
    context.drawImage(yellow, 2, 0);

    var imageData = context.getImageData(2, 0, 1, 1);

    if (!imageData)
    {
        return false;
    }

    var data = imageData.data;

    return (data[0] === 255 && data[1] === 0 && data[2] === 0);
}

/**
 * Maps blend combinations to Canvas.
 *
 * @memberof PIXI
 * @function mapCanvasBlendModesToPixi
 * @private
 * @param {string[]} [array=[]] - The array to output into.
 * @return {string[]} Mapped modes.
 */
function mapCanvasBlendModesToPixi(array)
{
    if ( array === void 0 ) array = [];

    if (canUseNewCanvasBlendModes())
    {
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].ADD] = 'lighter'; // IS THIS OK???
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].MULTIPLY] = 'multiply';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SCREEN] = 'screen';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].OVERLAY] = 'overlay';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DARKEN] = 'darken';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].LIGHTEN] = 'lighten';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].COLOR_DODGE] = 'color-dodge';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].COLOR_BURN] = 'color-burn';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].HARD_LIGHT] = 'hard-light';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SOFT_LIGHT] = 'soft-light';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DIFFERENCE] = 'difference';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].EXCLUSION] = 'exclusion';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].HUE] = 'hue';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SATURATION] = 'saturate';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].COLOR] = 'color';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].LUMINOSITY] = 'luminosity';
    }
    else
    {
        // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].ADD] = 'lighter'; // IS THIS OK???
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].MULTIPLY] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SCREEN] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].OVERLAY] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DARKEN] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].LIGHTEN] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].COLOR_DODGE] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].COLOR_BURN] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].HARD_LIGHT] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SOFT_LIGHT] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DIFFERENCE] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].EXCLUSION] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].HUE] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SATURATION] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].COLOR] = 'source-over';
        array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].LUMINOSITY] = 'source-over';
    }
    // not-premultiplied, only for webgl
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL_NPM] = array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].ADD_NPM] = array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].ADD];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SCREEN_NPM] = array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SCREEN];

    // composite operations
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SRC_IN] = 'source-in';
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SRC_OUT] = 'source-out';
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SRC_ATOP] = 'source-atop';
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DST_OVER] = 'destination-over';
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DST_IN] = 'destination-in';
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DST_OUT] = 'destination-out';
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DST_ATOP] = 'destination-atop';
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].XOR] = 'xor';

    // SUBTRACT from flash, does not exist in canvas
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SUBTRACT] = 'source-over';

    return array;
}

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas.
 *
 * This renderer should be used for browsers that do not support WebGL.
 * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything!
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.AbstractRenderer
 */
var CanvasRenderer = /*@__PURE__*/(function (AbstractRenderer) {
    function CanvasRenderer(options, arg2, arg3)
    {
        AbstractRenderer.call(this, 'Canvas', options, arg2, arg3);

        this.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* RENDERER_TYPE */ "j"].CANVAS;

        /**
         * The root canvas 2d context that everything is drawn with.
         *
         * @member {CanvasRenderingContext2D}
         */
        this.rootContext = this.view.getContext('2d', { alpha: this.transparent });

        /**
         * The currently active canvas 2d context (could change with renderTextures)
         *
         * @member {CanvasRenderingContext2D}
         */
        this.context = this.rootContext;

        /**
         * Boolean flag controlling canvas refresh.
         *
         * @member {boolean}
         */
        this.refresh = true;

        /**
         * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
         *
         * @member {PIXI.CanvasMaskManager}
         */
        this.maskManager = new CanvasMaskManager(this);

        /**
         * The canvas property used to set the canvas smoothing property.
         *
         * @member {string}
         */
        this.smoothProperty = 'imageSmoothingEnabled';

        if (!this.rootContext.imageSmoothingEnabled)
        {
            if (this.rootContext.webkitImageSmoothingEnabled)
            {
                this.smoothProperty = 'webkitImageSmoothingEnabled';
            }
            else if (this.rootContext.mozImageSmoothingEnabled)
            {
                this.smoothProperty = 'mozImageSmoothingEnabled';
            }
            else if (this.rootContext.oImageSmoothingEnabled)
            {
                this.smoothProperty = 'oImageSmoothingEnabled';
            }
            else if (this.rootContext.msImageSmoothingEnabled)
            {
                this.smoothProperty = 'msImageSmoothingEnabled';
            }
        }

        this.initPlugins(CanvasRenderer.__plugins);

        /**
         * Tracks the blend modes useful for this renderer.
         *
         * @member {object<number, string>}
         */
        this.blendModes = mapCanvasBlendModesToPixi();
        this._activeBlendMode = null;
        this._outerBlend = false;

        this.renderingToScreen = false;

        Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["sayHello"])('Canvas');

        /**
         * Fired after rendering finishes.
         *
         * @event PIXI.CanvasRenderer#postrender
         */

        /**
         * Fired before rendering starts.
         *
         * @event PIXI.CanvasRenderer#prerender
         */

        this.resize(this.options.width, this.options.height);
    }

    if ( AbstractRenderer ) CanvasRenderer.__proto__ = AbstractRenderer;
    CanvasRenderer.prototype = Object.create( AbstractRenderer && AbstractRenderer.prototype );
    CanvasRenderer.prototype.constructor = CanvasRenderer;

    /**
     * Renders the object to this canvas view
     *
     * @param {PIXI.DisplayObject} displayObject - The object to be rendered
     * @param {PIXI.RenderTexture} [renderTexture] - A render texture to be rendered to.
     *  If unset, it will render to the root context.
     * @param {boolean} [clear=false] - Whether to clear the canvas before drawing
     * @param {PIXI.Matrix} [transform] - A transformation to be applied
     * @param {boolean} [skipUpdateTransform=false] - Whether to skip the update transform
     */
    CanvasRenderer.prototype.render = function render (displayObject, renderTexture, clear, transform, skipUpdateTransform)
    {
        if (!this.view)
        {
            return;
        }

        // can be handy to know!
        this.renderingToScreen = !renderTexture;

        this.emit('prerender');

        var rootResolution = this.resolution;

        if (renderTexture)
        {
            renderTexture = renderTexture.baseTexture || renderTexture;

            if (!renderTexture._canvasRenderTarget)
            {
                renderTexture._canvasRenderTarget = new _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["CanvasRenderTarget"](
                    renderTexture.width,
                    renderTexture.height,
                    renderTexture.resolution
                );
                renderTexture.resource = new _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* resources */ "N"].CanvasResource(renderTexture._canvasRenderTarget.canvas);
                renderTexture.valid = true;
            }

            this.context = renderTexture._canvasRenderTarget.context;
            this.resolution = renderTexture._canvasRenderTarget.resolution;
        }
        else
        {
            this.context = this.rootContext;
        }

        var context = this.context;

        if (!renderTexture)
        {
            this._lastObjectRendered = displayObject;
        }

        if (!skipUpdateTransform)
        {
            // update the scene graph
            var cacheParent = displayObject.parent;
            var tempWt = this._tempDisplayObjectParent.transform.worldTransform;

            if (transform)
            {
                transform.copyTo(tempWt);
                // Canvas Renderer doesn't use "context.translate"
                // nor does it store current translation in projectionSystem
                // we re-calculate all matrices,
                // its not like CanvasRenderer can survive more than 1000 elements
                displayObject.transform._parentID = -1;
            }
            else
            {
                // in this case matrix cache in displayObject works like expected
                tempWt.identity();
            }

            displayObject.parent = this._tempDisplayObjectParent;

            displayObject.updateTransform();
            displayObject.parent = cacheParent;
            if (transform)
            {
                // Clear the matrix cache one more time,
                // we dont have our computations to affect standard "transform=null" case
                displayObject.transform._parentID = -1;
            }
            // displayObject.hitArea = //TODO add a temp hit area
        }

        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.globalAlpha = 1;
        this._activeBlendMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL;
        this._outerBlend = false;
        context.globalCompositeOperation = this.blendModes[_pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL];

        if (clear !== undefined ? clear : this.clearBeforeRender)
        {
            if (this.renderingToScreen)
            {
                if (this.transparent)
                {
                    context.clearRect(0, 0, this.width, this.height);
                }
                else
                {
                    context.fillStyle = this._backgroundColorString;
                    context.fillRect(0, 0, this.width, this.height);
                }
            } // else {
            // TODO: implement background for CanvasRenderTarget or RenderTexture?
            // }
        }

        // TODO RENDER TARGET STUFF HERE..
        var tempContext = this.context;

        this.context = context;
        displayObject.renderCanvas(this);
        this.context = tempContext;

        context.restore();

        this.resolution = rootResolution;

        this.emit('postrender');
    };

    /**
     * Clear the canvas of renderer.
     *
     * @param {string} [clearColor] - Clear the canvas with this color, except the canvas is transparent.
     */
    CanvasRenderer.prototype.clear = function clear (clearColor)
    {
        var context = this.context;

        clearColor = clearColor || this._backgroundColorString;

        if (!this.transparent && clearColor)
        {
            context.fillStyle = clearColor;
            context.fillRect(0, 0, this.width, this.height);
        }
        else
        {
            context.clearRect(0, 0, this.width, this.height);
        }
    };

    /**
     * Sets the blend mode of the renderer.
     *
     * @param {number} blendMode - See {@link PIXI.BLEND_MODES} for valid values.
     * @param {boolean} [readyForOuterBlend=false] - Some blendModes are dangerous, they affect outer space of sprite.
     * Pass `true` only if you are ready to use them.
     */
    CanvasRenderer.prototype.setBlendMode = function setBlendMode (blendMode, readyForOuterBlend)
    {
        var outerBlend = blendMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SRC_IN
            || blendMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].SRC_OUT
            || blendMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DST_IN
            || blendMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].DST_ATOP;

        if (!readyForOuterBlend && outerBlend)
        {
            blendMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL;
        }

        if (this._activeBlendMode === blendMode)
        {
            return;
        }

        this._activeBlendMode = blendMode;
        this._outerBlend = outerBlend;
        this.context.globalCompositeOperation = this.blendModes[blendMode];
    };

    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     */
    CanvasRenderer.prototype.destroy = function destroy (removeView)
    {
        // call the base destroy
        AbstractRenderer.prototype.destroy.call(this, removeView);

        this.context = null;

        this.refresh = true;

        this.maskManager.destroy();
        this.maskManager = null;

        this.smoothProperty = null;
    };

    /**
     * Resizes the canvas view to the specified width and height.
     *
     * @extends PIXI.AbstractRenderer#resize
     *
     * @param {number} screenWidth - the new width of the screen
     * @param {number} screenHeight - the new height of the screen
     */
    CanvasRenderer.prototype.resize = function resize (screenWidth, screenHeight)
    {
        AbstractRenderer.prototype.resize.call(this, screenWidth, screenHeight);

        // reset the scale mode.. oddly this seems to be reset when the canvas is resized.
        // surely a browser bug?? Let PixiJS fix that for you..
        if (this.smoothProperty)
        {
            this.rootContext[this.smoothProperty] = (_pixi_settings__WEBPACK_IMPORTED_MODULE_4__[/* settings */ "b"].SCALE_MODE === _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* SCALE_MODES */ "k"].LINEAR);
        }
    };

    /**
     * Checks if blend mode has changed.
     */
    CanvasRenderer.prototype.invalidateBlendMode = function invalidateBlendMode ()
    {
        this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation);
    };

    /**
     * Collection of installed plugins. These are included by default in PIXI, but can be excluded
     * by creating a custom build. Consult the README for more information about creating custom
     * builds and excluding plugins.
     * @name PIXI.CanvasRenderer#plugins
     * @type {object}
     * @readonly
     * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
     * @property {PIXI.extract.CanvasExtract} extract Extract image data from renderer.
     * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
     * @property {PIXI.prepare.CanvasPrepare} prepare Pre-render display objects.
     */

    /**
     * Adds a plugin to the renderer.
     *
     * @method
     * @param {string} pluginName - The name of the plugin.
     * @param {Function} ctor - The constructor function or class for the plugin.
     */
    CanvasRenderer.registerPlugin = function registerPlugin (pluginName, ctor)
    {
        CanvasRenderer.__plugins = CanvasRenderer.__plugins || {};
        CanvasRenderer.__plugins[pluginName] = ctor;
    };

    return CanvasRenderer;
}(_pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* AbstractRenderer */ "b"]));

/**
 * Utility methods for Sprite/Texture tinting.
 *
 * Tinting with the CanvasRenderer involves creating a new canvas to use as a texture,
 * so be aware of the performance implications.
 *
 * @namespace PIXI.canvasUtils
 * @memberof PIXI
 */
var canvasUtils = {
    /**
     * Basically this method just needs a sprite and a color and tints the sprite with the given color.
     *
     * @memberof PIXI.canvasUtils
     * @param {PIXI.Sprite} sprite - the sprite to tint
     * @param {number} color - the color to use to tint the sprite with
     * @return {HTMLCanvasElement} The tinted canvas
     */
    getTintedCanvas: function (sprite, color) {
        var texture = sprite.texture;

        color = canvasUtils.roundColor(color);

        var stringColor = "#" + ((("00000" + ((color | 0).toString(16)))).substr(-6));

        texture.tintCache = texture.tintCache || {};

        var cachedCanvas = texture.tintCache[stringColor];

        var canvas;

        if (cachedCanvas)
        {
            if (cachedCanvas.tintId === texture._updateID)
            {
                return texture.tintCache[stringColor];
            }

            canvas = texture.tintCache[stringColor];
        }
        else
        {
            canvas = canvasUtils.canvas || document.createElement('canvas');
        }

        canvasUtils.tintMethod(texture, color, canvas);

        canvas.tintId = texture._updateID;

        if (canvasUtils.convertTintToImage)
        {
            // is this better?
            var tintImage = new Image();

            tintImage.src = canvas.toDataURL();

            texture.tintCache[stringColor] = tintImage;
        }
        else
        {
            texture.tintCache[stringColor] = canvas;
            // if we are not converting the texture to an image then we need to lose the reference to the canvas
            canvasUtils.canvas = null;
        }

        return canvas;
    },

    /**
     * Tint a texture using the 'multiply' operation.
     *
     * @memberof PIXI.canvasUtils
     * @param {PIXI.Texture} texture - the texture to tint
     * @param {number} color - the color to use to tint the sprite with
     * @param {HTMLCanvasElement} canvas - the current canvas
     */
    tintWithMultiply: function (texture, color, canvas) {
        var context = canvas.getContext('2d');
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;

        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;

        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);

        context.save();
        context.fillStyle = "#" + ((("00000" + ((color | 0).toString(16)))).substr(-6));

        context.fillRect(0, 0, crop.width, crop.height);

        context.globalCompositeOperation = 'multiply';

        var source = texture.baseTexture.getDrawableSource();

        context.drawImage(
            source,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            crop.width,
            crop.height
        );

        context.globalCompositeOperation = 'destination-atop';

        context.drawImage(
            source,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            crop.width,
            crop.height
        );
        context.restore();
    },

    /**
     * Tint a texture using the 'overlay' operation.
     *
     * @memberof PIXI.canvasUtils
     * @param {PIXI.Texture} texture - the texture to tint
     * @param {number} color - the color to use to tint the sprite with
     * @param {HTMLCanvasElement} canvas - the current canvas
     */
    tintWithOverlay: function tintWithOverlay(texture, color, canvas)
    {
        var context = canvas.getContext('2d');
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;

        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;

        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);

        context.save();
        context.globalCompositeOperation = 'copy';
        context.fillStyle = "#" + ((("00000" + ((color | 0).toString(16)))).substr(-6));
        context.fillRect(0, 0, crop.width, crop.height);

        context.globalCompositeOperation = 'destination-atop';
        context.drawImage(
            texture.baseTexture.getDrawableSource(),
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            crop.width,
            crop.height
        );

        // context.globalCompositeOperation = 'copy';
        context.restore();
    },

    /**
     * Tint a texture pixel per pixel.
     *
     * @memberof PIXI.canvasUtils
     * @param {PIXI.Texture} texture - the texture to tint
     * @param {number} color - the color to use to tint the sprite with
     * @param {HTMLCanvasElement} canvas - the current canvas
     */
    tintWithPerPixel: function (texture, color, canvas) {
        var context = canvas.getContext('2d');
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;

        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;

        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);

        context.save();
        context.globalCompositeOperation = 'copy';
        context.drawImage(
            texture.baseTexture.getDrawableSource(),
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            crop.width,
            crop.height
        );
        context.restore();

        var rgbValues = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["hex2rgb"])(color);
        var r = rgbValues[0];
        var g = rgbValues[1];
        var b = rgbValues[2];

        var pixelData = context.getImageData(0, 0, crop.width, crop.height);

        var pixels = pixelData.data;

        for (var i = 0; i < pixels.length; i += 4)
        {
            pixels[i + 0] *= r;
            pixels[i + 1] *= g;
            pixels[i + 2] *= b;
        }

        context.putImageData(pixelData, 0, 0);
    },

    /**
     * Rounds the specified color according to the canvasUtils.cacheStepsPerColorChannel.
     *
     * @memberof PIXI.canvasUtils
     * @param {number} color - the color to round, should be a hex color
     * @return {number} The rounded color.
     */
    roundColor: function (color) {
        var step = canvasUtils.cacheStepsPerColorChannel;

        var rgbValues = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["hex2rgb"])(color);

        rgbValues[0] = Math.min(255, (rgbValues[0] / step) * step);
        rgbValues[1] = Math.min(255, (rgbValues[1] / step) * step);
        rgbValues[2] = Math.min(255, (rgbValues[2] / step) * step);

        return Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["rgb2hex"])(rgbValues);
    },

    /**
     * Number of steps which will be used as a cap when rounding colors.
     *
     * @memberof PIXI.canvasUtils
     * @type {number}
     */
    cacheStepsPerColorChannel: 8,

    /**
     * Tint cache boolean flag.
     *
     * @memberof PIXI.canvasUtils
     * @type {boolean}
     */
    convertTintToImage: false,

    /**
     * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
     *
     * @memberof PIXI.canvasUtils
     * @type {boolean}
     */
    canUseMultiply: canUseNewCanvasBlendModes(),

    /**
     * The tinting method that will be used.
     *
     * @memberof PIXI.canvasUtils
     * @type {Function}
     */
    tintMethod: function () { // jslint-disable no-empty-function

    },
};

canvasUtils.tintMethod = canvasUtils.canUseMultiply ? canvasUtils.tintWithMultiply : canvasUtils.tintWithPerPixel;

// Reference to Renderer.create static function
var parentCreate = _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Renderer */ "z"].create;

/**
 * Override the Renderer.create to fallback to use CanvasRenderer.
 * Also supports forceCanvas option with Application or autoDetectRenderer.
 * @private
 */
_pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Renderer */ "z"].create = function create(options)
{
    var forceCanvas = options && options.forceCanvas;

    if (!forceCanvas)
    {
        try
        {
            return parentCreate(options);
        }
        catch (err)
        {
            // swallow WebGL-unsupported error
        }
    }

    return new CanvasRenderer(options);
};

/**
 * Get the drawable source, such as HTMLCanvasElement or HTMLImageElement suitable
 * for rendering with CanvasRenderer. Provided by **@pixi/canvas-renderer** package.
 * @method getDrawableSource
 * @memberof PIXI.BaseTexture#
 * @return {PIXI.ICanvasImageSource} Source to render with CanvasRenderer
 */
_pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BaseTexture */ "e"].prototype.getDrawableSource = function getDrawableSource()
{
    var resource = this.resource;

    return resource ? (resource.bitmap || resource.source) : this.source;
};


//# sourceMappingURL=canvas-renderer.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/canvas-sprite/lib/canvas-sprite.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasSpriteRenderer; });
/* harmony import */ var _pixi_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/constants/lib/constants.es.js");
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/canvas-renderer/lib/canvas-renderer.es.js");
/* harmony import */ var _pixi_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/sprite/lib/sprite.es.js");
/*!
 * @pixi/canvas-sprite - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/canvas-sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */





var canvasRenderWorldTransform = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Matrix */ "d"]();

/**
 * Types that can be passed to drawImage
 * @typedef {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap} ICanvasImageSource
 * @memberof PIXI
 */

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original PixiJS version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now
 * share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's CanvasSpriteRenderer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/CanvasSpriteRenderer.java
 */

/**
 * Renderer dedicated to drawing and batching sprites.
 *
 * @class
 * @protected
 * @memberof PIXI
 */
var CanvasSpriteRenderer = function CanvasSpriteRenderer(renderer)
{
    this.renderer = renderer;
};

/**
 * Renders the sprite object.
 *
 * @param {PIXI.Sprite} sprite - the sprite to render when using this spritebatch
 */
CanvasSpriteRenderer.prototype.render = function render (sprite)
{
    var texture = sprite._texture;
    var renderer = this.renderer;
    var context = renderer.context;

    var width = texture._frame.width;
    var height = texture._frame.height;

    var wt = sprite.transform.worldTransform;
    var dx = 0;
    var dy = 0;

    var source = texture.baseTexture.getDrawableSource();

    if (texture.orig.width <= 0 || texture.orig.height <= 0 || !source)
    {
        return;
    }

    if (!texture.valid)
    {
        return;
    }

    renderer.setBlendMode(sprite.blendMode, true);

    renderer.context.globalAlpha = sprite.worldAlpha;

    // If smoothingEnabled is supported and we need to change the smoothing property for sprite texture
    var smoothingEnabled = texture.baseTexture.scaleMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_0__[/* SCALE_MODES */ "k"].LINEAR;

    if (renderer.smoothProperty && renderer.context[renderer.smoothProperty] !== smoothingEnabled)
    {
        context[renderer.smoothProperty] = smoothingEnabled;
    }

    if (texture.trim)
    {
        dx = (texture.trim.width / 2) + texture.trim.x - (sprite.anchor.x * texture.orig.width);
        dy = (texture.trim.height / 2) + texture.trim.y - (sprite.anchor.y * texture.orig.height);
    }
    else
    {
        dx = (0.5 - sprite.anchor.x) * texture.orig.width;
        dy = (0.5 - sprite.anchor.y) * texture.orig.height;
    }

    if (texture.rotate)
    {
        wt.copyTo(canvasRenderWorldTransform);
        wt = canvasRenderWorldTransform;
        _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* groupD8 */ "n"].matrixAppendRotationInv(wt, texture.rotate, dx, dy);
        // the anchor has already been applied above, so lets set it to zero
        dx = 0;
        dy = 0;
    }

    dx -= width / 2;
    dy -= height / 2;

    // Allow for pixel rounding
    if (sprite.roundPixels)
    {
        renderer.context.setTransform(
            wt.a,
            wt.b,
            wt.c,
            wt.d,
            (wt.tx * renderer.resolution) | 0,
            (wt.ty * renderer.resolution) | 0
        );

        dx = dx | 0;
        dy = dy | 0;
    }
    else
    {
        renderer.context.setTransform(
            wt.a,
            wt.b,
            wt.c,
            wt.d,
            wt.tx * renderer.resolution,
            wt.ty * renderer.resolution
        );
    }

    var resolution = texture.baseTexture.resolution;
    var outerBlend = renderer._outerBlend;

    if (outerBlend)
    {
        context.save();
        context.beginPath();
        context.rect(
            dx * renderer.resolution,
            dy * renderer.resolution,
            width * renderer.resolution,
            height * renderer.resolution
        );
        context.clip();
    }

    if (sprite.tint !== 0xFFFFFF)
    {
        if (sprite._cachedTint !== sprite.tint || sprite._tintedCanvas.tintId !== sprite._texture._updateID)
        {
            sprite._cachedTint = sprite.tint;

            // TODO clean up caching - how to clean up the caches?
            sprite._tintedCanvas = _pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_2__[/* canvasUtils */ "b"].getTintedCanvas(sprite, sprite.tint);
        }

        context.drawImage(
            sprite._tintedCanvas,
            0,
            0,
            Math.floor(width * resolution),
            Math.floor(height * resolution),
            Math.floor(dx * renderer.resolution),
            Math.floor(dy * renderer.resolution),
            Math.floor(width * renderer.resolution),
            Math.floor(height * renderer.resolution)
        );
    }
    else
    {
        context.drawImage(
            source,
            texture._frame.x * resolution,
            texture._frame.y * resolution,
            Math.floor(width * resolution),
            Math.floor(height * resolution),
            Math.floor(dx * renderer.resolution),
            Math.floor(dy * renderer.resolution),
            Math.floor(width * renderer.resolution),
            Math.floor(height * renderer.resolution)
        );
    }

    if (outerBlend)
    {
        context.restore();
    }
    // just in case, leaking outer blend here will be catastrophic!
    renderer.setBlendMode(_pixi_constants__WEBPACK_IMPORTED_MODULE_0__[/* BLEND_MODES */ "b"].NORMAL);
};

/**
 * destroy the sprite object.
 *
 */
CanvasSpriteRenderer.prototype.destroy = function destroy ()
{
    this.renderer = null;
};

/**
 * Cached tinted texture.
 * @memberof PIXI.Sprite#
 * @member {HTMLCanvasElement} _tintedCanvas
 * @protected
 */
_pixi_sprite__WEBPACK_IMPORTED_MODULE_3__[/* Sprite */ "a"].prototype._tintedCanvas = null;

/**
* Renders the object using the Canvas renderer
*
* @private
* @method _renderCanvas
* @memberof PIXI.Sprite#
* @param {PIXI.CanvasRenderer} renderer - The renderer
*/
_pixi_sprite__WEBPACK_IMPORTED_MODULE_3__[/* Sprite */ "a"].prototype._renderCanvas = function _renderCanvas(renderer)
{
    renderer.plugins.sprite.render(this);
};


//# sourceMappingURL=canvas-sprite.es.js.map


/***/ })

}]);
//# sourceMappingURL=4.core_script_compiled.js.map