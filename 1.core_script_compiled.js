(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@pixi/core/lib/core.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractBatchRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AbstractRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BaseRenderTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BaseTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BatchDrawCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return BatchGeometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return BatchPluginFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return BatchRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return BatchShaderGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return BatchTextureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CubeTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Framebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GLProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GLTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Geometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MaskData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ObjectRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return Quad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return QuadUv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return RenderTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return RenderTexturePool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return Renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return Shader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SpriteMaskFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return System; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Texture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return TextureMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return TextureUvs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UniformGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return ViewableBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return autoDetectRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return checkMaxIfStatementsInShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return defaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return systems; });
/* harmony import */ var _pixi_runner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/runner/lib/runner.es.js");
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/* harmony import */ var _pixi_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/constants/lib/constants.es.js");
/* harmony import */ var _pixi_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/settings/lib/settings.es.js");
/* harmony import */ var _pixi_ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@pixi/ticker/lib/ticker.es.js");
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@pixi/display/lib/display.es.js");
/*!
 * @pixi/core - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */








/**
 * Base resource class for textures that manages validation and uploading, depending on its type.
 *
 * Uploading of a base texture to the GPU is required.
 *
 * @class
 * @memberof PIXI.resources
 */
var Resource = function Resource(width, height)
{
    if ( width === void 0 ) width = 0;
    if ( height === void 0 ) height = 0;

    /**
     * Internal width of the resource
     * @member {number}
     * @protected
     */
    this._width = width;

    /**
     * Internal height of the resource
     * @member {number}
     * @protected
     */
    this._height = height;

    /**
     * If resource has been destroyed
     * @member {boolean}
     * @readonly
     * @default false
     */
    this.destroyed = false;

    /**
     * `true` if resource is created by BaseTexture
     * useful for doing cleanup with BaseTexture destroy
     * and not cleaning up resources that were created
     * externally.
     * @member {boolean}
     * @protected
     */
    this.internal = false;

    /**
     * Mini-runner for handling resize events
     *
     * @member {Runner}
     * @private
     */
    this.onResize = new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('setRealSize', 2);

    /**
     * Mini-runner for handling update events
     *
     * @member {Runner}
     * @private
     */
    this.onUpdate = new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('update');

    /**
     * Handle internal errors, such as loading errors
     *
     * @member {Runner}
     * @private
     */
    this.onError = new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('onError', 1);
};

var prototypeAccessors = { valid: { configurable: true },width: { configurable: true },height: { configurable: true } };

/**
 * Bind to a parent BaseTexture
 *
 * @param {PIXI.BaseTexture} baseTexture - Parent texture
 */
Resource.prototype.bind = function bind (baseTexture)
{
    this.onResize.add(baseTexture);
    this.onUpdate.add(baseTexture);
    this.onError.add(baseTexture);

    // Call a resize immediate if we already
    // have the width and height of the resource
    if (this._width || this._height)
    {
        this.onResize.run(this._width, this._height);
    }
};

/**
 * Unbind to a parent BaseTexture
 *
 * @param {PIXI.BaseTexture} baseTexture - Parent texture
 */
Resource.prototype.unbind = function unbind (baseTexture)
{
    this.onResize.remove(baseTexture);
    this.onUpdate.remove(baseTexture);
    this.onError.remove(baseTexture);
};

/**
 * Trigger a resize event
 * @param {number} width X dimension
 * @param {number} height Y dimension
 */
Resource.prototype.resize = function resize (width, height)
{
    if (width !== this._width || height !== this._height)
    {
        this._width = width;
        this._height = height;
        this.onResize.run(width, height);
    }
};

/**
 * Has been validated
 * @readonly
 * @member {boolean}
 */
prototypeAccessors.valid.get = function ()
{
    return !!this._width && !!this._height;
};

/**
 * Has been updated trigger event
 */
Resource.prototype.update = function update ()
{
    if (!this.destroyed)
    {
        this.onUpdate.run();
    }
};

/**
 * This can be overridden to start preloading a resource
 * or do any other prepare step.
 * @protected
 * @return {Promise<void>} Handle the validate event
 */
Resource.prototype.load = function load ()
{
    return Promise.resolve();
};

/**
 * The width of the resource.
 *
 * @member {number}
 * @readonly
 */
prototypeAccessors.width.get = function ()
{
    return this._width;
};

/**
 * The height of the resource.
 *
 * @member {number}
 * @readonly
 */
prototypeAccessors.height.get = function ()
{
    return this._height;
};

/**
 * Uploads the texture or returns false if it cant for some reason. Override this.
 *
 * @param {PIXI.Renderer} renderer - yeah, renderer!
 * @param {PIXI.BaseTexture} baseTexture - the texture
 * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
 * @returns {boolean} true is success
 */
Resource.prototype.upload = function upload (renderer, baseTexture, glTexture) // eslint-disable-line no-unused-vars
{
    return false;
};

/**
 * Set the style, optional to override
 *
 * @param {PIXI.Renderer} renderer - yeah, renderer!
 * @param {PIXI.BaseTexture} baseTexture - the texture
 * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
 * @returns {boolean} `true` is success
 */
Resource.prototype.style = function style (renderer, baseTexture, glTexture) // eslint-disable-line no-unused-vars
{
    return false;
};

/**
 * Clean up anything, this happens when destroying is ready.
 *
 * @protected
 */
Resource.prototype.dispose = function dispose ()
{
    // override
};

/**
 * Call when destroying resource, unbind any BaseTexture object
 * before calling this method, as reference counts are maintained
 * internally.
 */
Resource.prototype.destroy = function destroy ()
{
    if (!this.destroyed)
    {
        this.destroyed = true;
        this.dispose();
        this.onError.removeAll();
        this.onError = null;
        this.onResize.removeAll();
        this.onResize = null;
        this.onUpdate.removeAll();
        this.onUpdate = null;
    }
};

Object.defineProperties( Resource.prototype, prototypeAccessors );

/**
 * Base for all the image/canvas resources
 * @class
 * @extends PIXI.resources.Resource
 * @memberof PIXI.resources
 */
var BaseImageResource = /*@__PURE__*/(function (Resource) {
    function BaseImageResource(source)
    {
        var width = source.naturalWidth || source.videoWidth || source.width;
        var height = source.naturalHeight || source.videoHeight || source.height;

        Resource.call(this, width, height);

        /**
         * The source element
         * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement}
         * @readonly
         */
        this.source = source;

        /**
         * If set to `true`, will force `texImage2D` over `texSubImage2D` for uploading.
         * Certain types of media (e.g. video) using `texImage2D` is more performant.
         * @member {boolean}
         * @default false
         * @private
         */
        this.noSubImage = false;
    }

    if ( Resource ) BaseImageResource.__proto__ = Resource;
    BaseImageResource.prototype = Object.create( Resource && Resource.prototype );
    BaseImageResource.prototype.constructor = BaseImageResource;

    /**
     * Set cross origin based detecting the url and the crossorigin
     * @protected
     * @param {HTMLElement} element - Element to apply crossOrigin
     * @param {string} url - URL to check
     * @param {boolean|string} [crossorigin=true] - Cross origin value to use
     */
    BaseImageResource.crossOrigin = function crossOrigin (element, url, crossorigin)
    {
        if (crossorigin === undefined && url.indexOf('data:') !== 0)
        {
            element.crossOrigin = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["determineCrossOrigin"])(url);
        }
        else if (crossorigin !== false)
        {
            element.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
        }
    };

    /**
     * Upload the texture to the GPU.
     * @param {PIXI.Renderer} renderer Upload to the renderer
     * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
     * @param {PIXI.GLTexture} glTexture
     * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
     * @returns {boolean} true is success
     */
    BaseImageResource.prototype.upload = function upload (renderer, baseTexture, glTexture, source)
    {
        var gl = renderer.gl;
        var width = baseTexture.realWidth;
        var height = baseTexture.realHeight;

        source = source || this.source;

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ALPHA_MODES */ "a"].UNPACK);

        if (!this.noSubImage
            && baseTexture.target === gl.TEXTURE_2D
            && glTexture.width === width
            && glTexture.height === height)
        {
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, baseTexture.format, baseTexture.type, source);
        }
        else
        {
            glTexture.width = width;
            glTexture.height = height;

            gl.texImage2D(baseTexture.target, 0, baseTexture.format, baseTexture.format, baseTexture.type, source);
        }

        return true;
    };

    /**
     * Checks if source width/height was changed, resize can cause extra baseTexture update.
     * Triggers one update in any case.
     */
    BaseImageResource.prototype.update = function update ()
    {
        if (this.destroyed)
        {
            return;
        }

        var width = this.source.naturalWidth || this.source.videoWidth || this.source.width;
        var height = this.source.naturalHeight || this.source.videoHeight || this.source.height;

        this.resize(width, height);

        Resource.prototype.update.call(this);
    };

    /**
     * Destroy this BaseImageResource
     * @override
     * @param {PIXI.BaseTexture} [fromTexture] Optional base texture
     * @return {boolean} Destroy was successful
     */
    BaseImageResource.prototype.dispose = function dispose ()
    {
        this.source = null;
    };

    return BaseImageResource;
}(Resource));

/**
 * Resource type for HTMLImageElement.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 */
var ImageResource = /*@__PURE__*/(function (BaseImageResource) {
    function ImageResource(source, options)
    {
        options = options || {};

        if (!(source instanceof HTMLImageElement))
        {
            var imageElement = new Image();

            BaseImageResource.crossOrigin(imageElement, source, options.crossorigin);

            imageElement.src = source;
            source = imageElement;
        }

        BaseImageResource.call(this, source);

        // FireFox 68, and possibly other versions, seems like setting the HTMLImageElement#width and #height
        // to non-zero values before its loading completes if images are in a cache.
        // Because of this, need to set the `_width` and the `_height` to zero to avoid uploading incomplete images.
        // Please refer to the issue #5968 (https://github.com/pixijs/pixi.js/issues/5968).
        if (!source.complete && !!this._width && !!this._height)
        {
            this._width = 0;
            this._height = 0;
        }

        /**
         * URL of the image source
         * @member {string}
         */
        this.url = source.src;

        /**
         * When process is completed
         * @member {Promise<void>}
         * @private
         */
        this._process = null;

        /**
         * If the image should be disposed after upload
         * @member {boolean}
         * @default false
         */
        this.preserveBitmap = false;

        /**
         * If capable, convert the image using createImageBitmap API
         * @member {boolean}
         * @default PIXI.settings.CREATE_IMAGE_BITMAP
         */
        this.createBitmap = (options.createBitmap !== undefined
            ? options.createBitmap : _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].CREATE_IMAGE_BITMAP) && !!window.createImageBitmap;

        /**
         * Controls texture alphaMode field
         * Copies from options
         * Default is `null`, copies option from baseTexture
         *
         * @member {PIXI.ALPHA_MODES|null}
         * @readonly
         */
        this.alphaMode = typeof options.alphaMode === 'number' ? options.alphaMode : null;

        if (options.premultiplyAlpha !== undefined)
        {
            // triggers deprecation
            this.premultiplyAlpha = options.premultiplyAlpha;
        }

        /**
         * The ImageBitmap element created for HTMLImageElement
         * @member {ImageBitmap}
         * @default null
         */
        this.bitmap = null;

        /**
         * Promise when loading
         * @member {Promise<void>}
         * @private
         * @default null
         */
        this._load = null;

        if (options.autoLoad !== false)
        {
            this.load();
        }
    }

    if ( BaseImageResource ) ImageResource.__proto__ = BaseImageResource;
    ImageResource.prototype = Object.create( BaseImageResource && BaseImageResource.prototype );
    ImageResource.prototype.constructor = ImageResource;

    /**
     * returns a promise when image will be loaded and processed
     *
     * @param {boolean} [createBitmap=true] whether process image into bitmap
     * @returns {Promise<void>}
     */
    ImageResource.prototype.load = function load (createBitmap)
    {
        var this$1 = this;

        if (createBitmap !== undefined)
        {
            this.createBitmap = createBitmap;
        }

        if (this._load)
        {
            return this._load;
        }

        this._load = new Promise(function (resolve) {
            this$1.url = this$1.source.src;
            var ref = this$1;
            var source = ref.source;

            var completed = function () {
                if (this$1.destroyed)
                {
                    return;
                }
                source.onload = null;
                source.onerror = null;

                this$1.resize(source.width, source.height);
                this$1._load = null;

                if (this$1.createBitmap)
                {
                    resolve(this$1.process());
                }
                else
                {
                    resolve(this$1);
                }
            };

            if (source.complete && source.src)
            {
                completed();
            }
            else
            {
                source.onload = completed;
                source.onerror = function (event) { return this$1.onError.run(event); };
            }
        });

        return this._load;
    };

    /**
     * Called when we need to convert image into BitmapImage.
     * Can be called multiple times, real promise is cached inside.
     *
     * @returns {Promise<void>} cached promise to fill that bitmap
     */
    ImageResource.prototype.process = function process ()
    {
        var this$1 = this;

        if (this._process !== null)
        {
            return this._process;
        }
        if (this.bitmap !== null || !window.createImageBitmap)
        {
            return Promise.resolve(this);
        }

        this._process = window.createImageBitmap(this.source,
            0, 0, this.source.width, this.source.height,
            {
                premultiplyAlpha: this.premultiplyAlpha === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ALPHA_MODES */ "a"].UNPACK ? 'premultiply' : 'none',
            })
            .then(function (bitmap) {
                if (this$1.destroyed)
                {
                    return Promise.reject();
                }
                this$1.bitmap = bitmap;
                this$1.update();
                this$1._process = null;

                return Promise.resolve(this$1);
            });

        return this._process;
    };

    /**
     * Upload the image resource to GPU.
     *
     * @param {PIXI.Renderer} renderer - Renderer to upload to
     * @param {PIXI.BaseTexture} baseTexture - BaseTexture for this resource
     * @param {PIXI.GLTexture} glTexture - GLTexture to use
     * @returns {boolean} true is success
     */
    ImageResource.prototype.upload = function upload (renderer, baseTexture, glTexture)
    {
        if (typeof this.alphaMode === 'number')
        {
            // bitmap stores unpack premultiply flag, we dont have to notify texImage2D about it

            baseTexture.alphaMode = this.alphaMode;
        }

        if (!this.createBitmap)
        {
            return BaseImageResource.prototype.upload.call(this, renderer, baseTexture, glTexture);
        }
        if (!this.bitmap)
        {
            // yeah, ignore the output
            this.process();
            if (!this.bitmap)
            {
                return false;
            }
        }

        BaseImageResource.prototype.upload.call(this, renderer, baseTexture, glTexture, this.bitmap);

        if (!this.preserveBitmap)
        {
            // checks if there are other renderers that possibly need this bitmap

            var flag = true;

            for (var key in baseTexture._glTextures)
            {
                var otherTex = baseTexture._glTextures[key];

                if (otherTex !== glTexture && otherTex.dirtyId !== baseTexture.dirtyId)
                {
                    flag = false;
                    break;
                }
            }

            if (flag)
            {
                if (this.bitmap.close)
                {
                    this.bitmap.close();
                }

                this.bitmap = null;
            }
        }

        return true;
    };

    /**
     * Destroys this texture
     * @override
     */
    ImageResource.prototype.dispose = function dispose ()
    {
        this.source.onload = null;
        this.source.onerror = null;

        BaseImageResource.prototype.dispose.call(this);

        if (this.bitmap)
        {
            this.bitmap.close();
            this.bitmap = null;
        }
        this._process = null;
        this._load = null;
    };

    return ImageResource;
}(BaseImageResource));

/**
 * Collection of installed resource types, class must extend {@link PIXI.resources.Resource}.
 * @example
 * class CustomResource extends PIXI.resources.Resource {
 *   // MUST have source, options constructor signature
 *   // for auto-detected resources to be created.
 *   constructor(source, options) {
 *     super();
 *   }
 *   upload(renderer, baseTexture, glTexture) {
 *     // upload with GL
 *     return true;
 *   }
 *   // used to auto-detect resource
 *   static test(source, extension) {
 *     return extension === 'xyz'|| source instanceof SomeClass;
 *   }
 * }
 * // Install the new resource type
 * PIXI.resources.INSTALLED.push(CustomResource);
 *
 * @name PIXI.resources.INSTALLED
 * @type {Array<*>}
 * @static
 * @readonly
 */
var INSTALLED = [];

/**
 * Create a resource element from a single source element. This
 * auto-detects which type of resource to create. All resources that
 * are auto-detectable must have a static `test` method and a constructor
 * with the arguments `(source, options?)`. Currently, the supported
 * resources for auto-detection include:
 *  - {@link PIXI.resources.ImageResource}
 *  - {@link PIXI.resources.CanvasResource}
 *  - {@link PIXI.resources.VideoResource}
 *  - {@link PIXI.resources.SVGResource}
 *  - {@link PIXI.resources.BufferResource}
 * @static
 * @function PIXI.resources.autoDetectResource
 * @param {string|*} source - Resource source, this can be the URL to the resource,
 *        a typed-array (for BufferResource), HTMLVideoElement, SVG data-uri
 *        or any other resource that can be auto-detected. If not resource is
 *        detected, it's assumed to be an ImageResource.
 * @param {object} [options] - Pass-through options to use for Resource
 * @param {number} [options.width] - Width of BufferResource or SVG rasterization
 * @param {number} [options.height] - Height of BufferResource or SVG rasterization
 * @param {boolean} [options.autoLoad=true] - Image, SVG and Video flag to start loading
 * @param {number} [options.scale=1] - SVG source scale. Overridden by width, height
 * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - Image option to create Bitmap object
 * @param {boolean} [options.crossorigin=true] - Image and Video option to set crossOrigin
 * @param {boolean} [options.autoPlay=true] - Video option to start playing video immediately
 * @param {number} [options.updateFPS=0] - Video option to update how many times a second the
 *        texture should be updated from the video. Leave at 0 to update at every render
 * @return {PIXI.resources.Resource} The created resource.
 */
function autoDetectResource(source, options)
{
    if (!source)
    {
        return null;
    }

    var extension = '';

    if (typeof source === 'string')
    {
        // search for file extension: period, 3-4 chars, then ?, # or EOL
        var result = (/\.(\w{3,4})(?:$|\?|#)/i).exec(source);

        if (result)
        {
            extension = result[1].toLowerCase();
        }
    }

    for (var i = INSTALLED.length - 1; i >= 0; --i)
    {
        var ResourcePlugin = INSTALLED[i];

        if (ResourcePlugin.test && ResourcePlugin.test(source, extension))
        {
            return new ResourcePlugin(source, options);
        }
    }

    // When in doubt: probably an image
    // might be appropriate to throw an error or return null
    return new ImageResource(source, options);
}

/**
 * @interface SharedArrayBuffer
 */

/**
 * Buffer resource with data of typed array.
 * @class
 * @extends PIXI.resources.Resource
 * @memberof PIXI.resources
 */
var BufferResource = /*@__PURE__*/(function (Resource) {
    function BufferResource(source, options)
    {
        var ref = options || {};
        var width = ref.width;
        var height = ref.height;

        if (!width || !height)
        {
            throw new Error('BufferResource width or height invalid');
        }

        Resource.call(this, width, height);

        /**
         * Source array
         * Cannot be ClampedUint8Array because it cant be uploaded to WebGL
         *
         * @member {Float32Array|Uint8Array|Uint32Array}
         */
        this.data = source;
    }

    if ( Resource ) BufferResource.__proto__ = Resource;
    BufferResource.prototype = Object.create( Resource && Resource.prototype );
    BufferResource.prototype.constructor = BufferResource;

    /**
     * Upload the texture to the GPU.
     * @param {PIXI.Renderer} renderer Upload to the renderer
     * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
     * @param {PIXI.GLTexture} glTexture glTexture
     * @returns {boolean} true is success
     */
    BufferResource.prototype.upload = function upload (renderer, baseTexture, glTexture)
    {
        var gl = renderer.gl;

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ALPHA_MODES */ "a"].UNPACK);

        if (glTexture.width === baseTexture.width && glTexture.height === baseTexture.height)
        {
            gl.texSubImage2D(
                baseTexture.target,
                0,
                0,
                0,
                baseTexture.width,
                baseTexture.height,
                baseTexture.format,
                baseTexture.type,
                this.data
            );
        }
        else
        {
            glTexture.width = baseTexture.width;
            glTexture.height = baseTexture.height;

            gl.texImage2D(
                baseTexture.target,
                0,
                glTexture.internalFormat,
                baseTexture.width,
                baseTexture.height,
                0,
                baseTexture.format,
                glTexture.type,
                this.data
            );
        }

        return true;
    };

    /**
     * Destroy and don't use after this
     * @override
     */
    BufferResource.prototype.dispose = function dispose ()
    {
        this.data = null;
    };

    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {*} source - The source object
     * @return {boolean} `true` if <canvas>
     */
    BufferResource.test = function test (source)
    {
        return source instanceof Float32Array
            || source instanceof Uint8Array
            || source instanceof Uint32Array;
    };

    return BufferResource;
}(Resource));

var defaultBufferOptions = {
    scaleMode: _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* SCALE_MODES */ "k"].NEAREST,
    format: _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* FORMATS */ "e"].RGBA,
    alphaMode: _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ALPHA_MODES */ "a"].NPM,
};

/**
 * A Texture stores the information that represents an image.
 * All textures have a base texture, which contains information about the source.
 * Therefore you can have many textures all using a single BaseTexture
 *
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI
 * @param {PIXI.resources.Resource|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} [resource=null]
 *        The current resource to use, for things that aren't Resource objects, will be converted
 *        into a Resource.
 * @param {Object} [options] - Collection of options
 * @param {PIXI.MIPMAP_MODES} [options.mipmap=PIXI.settings.MIPMAP_TEXTURES] - If mipmapping is enabled for texture
 * @param {number} [options.anisotropicLevel=PIXI.settings.ANISOTROPIC_LEVEL] - Anisotropic filtering level of texture
 * @param {PIXI.WRAP_MODES} [options.wrapMode=PIXI.settings.WRAP_MODE] - Wrap mode for textures
 * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.settings.SCALE_MODE] - Default scale mode, linear, nearest
 * @param {PIXI.FORMATS} [options.format=PIXI.FORMATS.RGBA] - GL format type
 * @param {PIXI.TYPES} [options.type=PIXI.TYPES.UNSIGNED_BYTE] - GL data type
 * @param {PIXI.TARGETS} [options.target=PIXI.TARGETS.TEXTURE_2D] - GL texture target
 * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Pre multiply the image alpha
 * @param {number} [options.width=0] - Width of the texture
 * @param {number} [options.height=0] - Height of the texture
 * @param {number} [options.resolution] - Resolution of the base texture
 * @param {object} [options.resourceOptions] - Optional resource options,
 *        see {@link PIXI.resources.autoDetectResource autoDetectResource}
 */
var BaseTexture = /*@__PURE__*/(function (EventEmitter) {
    function BaseTexture(resource, options)
    {
        if ( resource === void 0 ) resource = null;
        if ( options === void 0 ) options = null;

        EventEmitter.call(this);

        options = options || {};

        var alphaMode = options.alphaMode;
        var mipmap = options.mipmap;
        var anisotropicLevel = options.anisotropicLevel;
        var scaleMode = options.scaleMode;
        var width = options.width;
        var height = options.height;
        var wrapMode = options.wrapMode;
        var format = options.format;
        var type = options.type;
        var target = options.target;
        var resolution = options.resolution;
        var resourceOptions = options.resourceOptions;

        // Convert the resource to a Resource object
        if (resource && !(resource instanceof Resource))
        {
            resource = autoDetectResource(resource, resourceOptions);
            resource.internal = true;
        }

        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        this.width = width || 0;

        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        this.height = height || 0;

        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number}
         * @default PIXI.settings.RESOLUTION
         */
        this.resolution = resolution || _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].RESOLUTION;

        /**
         * Mipmap mode of the texture, affects downscaled images
         *
         * @member {PIXI.MIPMAP_MODES}
         * @default PIXI.settings.MIPMAP_TEXTURES
         */
        this.mipmap = mipmap !== undefined ? mipmap : _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].MIPMAP_TEXTURES;

        /**
         * Anisotropic filtering level of texture
         *
         * @member {number}
         * @default PIXI.settings.ANISOTROPIC_LEVEL
         */
        this.anisotropicLevel = anisotropicLevel !== undefined ? anisotropicLevel : _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].ANISOTROPIC_LEVEL;

        /**
         * How the texture wraps
         * @member {number}
         */
        this.wrapMode = wrapMode || _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].WRAP_MODE;

        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {PIXI.SCALE_MODES}
         * @default PIXI.settings.SCALE_MODE
         */
        this.scaleMode = scaleMode !== undefined ? scaleMode : _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].SCALE_MODE;

        /**
         * The pixel format of the texture
         *
         * @member {PIXI.FORMATS}
         * @default PIXI.FORMATS.RGBA
         */
        this.format = format || _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* FORMATS */ "e"].RGBA;

        /**
         * The type of resource data
         *
         * @member {PIXI.TYPES}
         * @default PIXI.TYPES.UNSIGNED_BYTE
         */
        this.type = type || _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].UNSIGNED_BYTE;

        /**
         * The target type
         *
         * @member {PIXI.TARGETS}
         * @default PIXI.TARGETS.TEXTURE_2D
         */
        this.target = target || _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TARGETS */ "l"].TEXTURE_2D;

        /**
         * How to treat premultiplied alpha, see {@link PIXI.ALPHA_MODES}.
         *
         * @member {PIXI.ALPHA_MODES}
         * @default PIXI.ALPHA_MODES.UNPACK
         */
        this.alphaMode = alphaMode !== undefined ? alphaMode : _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ALPHA_MODES */ "a"].UNPACK;

        if (options.premultiplyAlpha !== undefined)
        {
            // triggers deprecation
            this.premultiplyAlpha = options.premultiplyAlpha;
        }

        /**
         * Global unique identifier for this BaseTexture
         *
         * @member {string}
         * @protected
         */
        this.uid = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["uid"])();

        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         *
         * @member {number}
         * @protected
         */
        this.touched = 0;

        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @readonly
         * @member {boolean}
         * @default false
         */
        this.isPowerOfTwo = false;
        this._refreshPOT();

        /**
         * The map of render context textures where this is bound
         *
         * @member {Object}
         * @private
         */
        this._glTextures = {};

        /**
         * Used by TextureSystem to only update texture to the GPU when needed.
         * Please call `update()` to increment it.
         *
         * @readonly
         * @member {number}
         */
        this.dirtyId = 0;

        /**
         * Used by TextureSystem to only update texture style when needed.
         *
         * @protected
         * @member {number}
         */
        this.dirtyStyleId = 0;

        /**
         * Currently default cache ID.
         *
         * @member {string}
         */
        this.cacheId = null;

        /**
         * Generally speaking means when resource is loaded.
         * @readonly
         * @member {boolean}
         */
        this.valid = width > 0 && height > 0;

        /**
         * The collection of alternative cache ids, since some BaseTextures
         * can have more than one ID, short name and longer full URL
         *
         * @member {Array<string>}
         * @readonly
         */
        this.textureCacheIds = [];

        /**
         * Flag if BaseTexture has been destroyed.
         *
         * @member {boolean}
         * @readonly
         */
        this.destroyed = false;

        /**
         * The resource used by this BaseTexture, there can only
         * be one resource per BaseTexture, but textures can share
         * resources.
         *
         * @member {PIXI.resources.Resource}
         * @readonly
         */
        this.resource = null;

        /**
         * Number of the texture batch, used by multi-texture renderers
         *
         * @member {number}
         */
        this._batchEnabled = 0;

        /**
         * Location inside texture batch, used by multi-texture renderers
         *
         * @member {number}
         */
        this._batchLocation = 0;

        /**
         * Fired when a not-immediately-available source finishes loading.
         *
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         */

        /**
         * Fired when a not-immediately-available source fails to load.
         *
         * @protected
         * @event PIXI.BaseTexture#error
         * @param {PIXI.BaseTexture} baseTexture - Resource errored.
         * @param {ErrorEvent} event - Load error event.
         */

        /**
         * Fired when BaseTexture is updated.
         *
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         */

        /**
         * Fired when BaseTexture is updated.
         *
         * @protected
         * @event PIXI.BaseTexture#update
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being updated.
         */

        /**
         * Fired when BaseTexture is destroyed.
         *
         * @protected
         * @event PIXI.BaseTexture#dispose
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being destroyed.
         */

        // Set the resource
        this.setResource(resource);
    }

    if ( EventEmitter ) BaseTexture.__proto__ = EventEmitter;
    BaseTexture.prototype = Object.create( EventEmitter && EventEmitter.prototype );
    BaseTexture.prototype.constructor = BaseTexture;

    var prototypeAccessors = { realWidth: { configurable: true },realHeight: { configurable: true } };

    /**
     * Pixel width of the source of this texture
     *
     * @readonly
     * @member {number}
     */
    prototypeAccessors.realWidth.get = function ()
    {
        return Math.ceil((this.width * this.resolution) - 1e-4);
    };

    /**
     * Pixel height of the source of this texture
     *
     * @readonly
     * @member {number}
     */
    prototypeAccessors.realHeight.get = function ()
    {
        return Math.ceil((this.height * this.resolution) - 1e-4);
    };

    /**
     * Changes style options of BaseTexture
     *
     * @param {PIXI.SCALE_MODES} [scaleMode] - Pixi scalemode
     * @param {PIXI.MIPMAP_MODES} [mipmap] - enable mipmaps
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setStyle = function setStyle (scaleMode, mipmap)
    {
        var dirty;

        if (scaleMode !== undefined && scaleMode !== this.scaleMode)
        {
            this.scaleMode = scaleMode;
            dirty = true;
        }

        if (mipmap !== undefined && mipmap !== this.mipmap)
        {
            this.mipmap = mipmap;
            dirty = true;
        }

        if (dirty)
        {
            this.dirtyStyleId++;
        }

        return this;
    };

    /**
     * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
     *
     * @param {number} width Visual width
     * @param {number} height Visual height
     * @param {number} [resolution] Optionally set resolution
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setSize = function setSize (width, height, resolution)
    {
        this.resolution = resolution || this.resolution;
        this.width = width;
        this.height = height;
        this._refreshPOT();
        this.update();

        return this;
    };

    /**
     * Sets real size of baseTexture, preserves current resolution.
     *
     * @param {number} realWidth Full rendered width
     * @param {number} realHeight Full rendered height
     * @param {number} [resolution] Optionally set resolution
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setRealSize = function setRealSize (realWidth, realHeight, resolution)
    {
        this.resolution = resolution || this.resolution;
        this.width = realWidth / this.resolution;
        this.height = realHeight / this.resolution;
        this._refreshPOT();
        this.update();

        return this;
    };

    /**
     * Refresh check for isPowerOfTwo texture based on size
     *
     * @private
     */
    BaseTexture.prototype._refreshPOT = function _refreshPOT ()
    {
        this.isPowerOfTwo = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["isPow2"])(this.realWidth) && Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["isPow2"])(this.realHeight);
    };

    /**
     * Changes resolution
     *
     * @param {number} [resolution] res
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setResolution = function setResolution (resolution)
    {
        var oldResolution = this.resolution;

        if (oldResolution === resolution)
        {
            return this;
        }

        this.resolution = resolution;

        if (this.valid)
        {
            this.width = this.width * oldResolution / resolution;
            this.height = this.height * oldResolution / resolution;
            this.emit('update', this);
        }

        this._refreshPOT();

        return this;
    };

    /**
     * Sets the resource if it wasn't set. Throws error if resource already present
     *
     * @param {PIXI.resources.Resource} resource - that is managing this BaseTexture
     * @returns {PIXI.BaseTexture} this
     */
    BaseTexture.prototype.setResource = function setResource (resource)
    {
        if (this.resource === resource)
        {
            return this;
        }

        if (this.resource)
        {
            throw new Error('Resource can be set only once');
        }

        resource.bind(this);

        this.resource = resource;

        return this;
    };

    /**
     * Invalidates the object. Texture becomes valid if width and height are greater than zero.
     */
    BaseTexture.prototype.update = function update ()
    {
        if (!this.valid)
        {
            if (this.width > 0 && this.height > 0)
            {
                this.valid = true;
                this.emit('loaded', this);
                this.emit('update', this);
            }
        }
        else
        {
            this.dirtyId++;
            this.dirtyStyleId++;
            this.emit('update', this);
        }
    };

    /**
     * Handle errors with resources.
     * @private
     * @param {ErrorEvent} event - Error event emitted.
     */
    BaseTexture.prototype.onError = function onError (event)
    {
        this.emit('error', this, event);
    };

    /**
     * Destroys this base texture.
     * The method stops if resource doesn't want this texture to be destroyed.
     * Removes texture from all caches.
     */
    BaseTexture.prototype.destroy = function destroy ()
    {
        // remove and destroy the resource
        if (this.resource)
        {
            this.resource.unbind(this);
            // only destroy resourced created internally
            if (this.resource.internal)
            {
                this.resource.destroy();
            }
            this.resource = null;
        }

        if (this.cacheId)
        {
            delete _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["BaseTextureCache"][this.cacheId];
            delete _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][this.cacheId];

            this.cacheId = null;
        }

        // finally let the WebGL renderer know..
        this.dispose();

        BaseTexture.removeFromCache(this);
        this.textureCacheIds = null;

        this.destroyed = true;
    };

    /**
     * Frees the texture from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     *
     * @fires PIXI.BaseTexture#dispose
     */
    BaseTexture.prototype.dispose = function dispose ()
    {
        this.emit('dispose', this);
    };

    /**
     * Helper function that creates a base texture based on the source you provide.
     * The source can be - image url, image element, canvas element. If the
     * source is an image url or an image element and not in the base texture
     * cache, it will be created and loaded.
     *
     * @static
     * @param {string|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement} source - The
     *        source to create base texture from.
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @param {boolean} [strict] Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
     * @returns {PIXI.BaseTexture} The new base texture.
     */
    BaseTexture.from = function from (source, options, strict)
    {
        if ( strict === void 0 ) strict = _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].STRICT_TEXTURE_CACHE;

        var isFrame = typeof source === 'string';
        var cacheId = null;

        if (isFrame)
        {
            cacheId = source;
        }
        else
        {
            if (!source._pixiId)
            {
                source._pixiId = "pixiid_" + (Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["uid"])());
            }

            cacheId = source._pixiId;
        }

        var baseTexture = _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["BaseTextureCache"][cacheId];

        // Strict-mode rejects invalid cacheIds
        if (isFrame && strict && !baseTexture)
        {
            throw new Error(("The cacheId \"" + cacheId + "\" does not exist in BaseTextureCache."));
        }

        if (!baseTexture)
        {
            baseTexture = new BaseTexture(source, options);
            baseTexture.cacheId = cacheId;
            BaseTexture.addToCache(baseTexture, cacheId);
        }

        return baseTexture;
    };

    /**
     * Create a new BaseTexture with a BufferResource from a Float32Array.
     * RGBA values are floats from 0 to 1.
     * @static
     * @param {Float32Array|Uint8Array} buffer The optional array to use, if no data
     *        is provided, a new Float32Array is created.
     * @param {number} width - Width of the resource
     * @param {number} height - Height of the resource
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @return {PIXI.BaseTexture} The resulting new BaseTexture
     */
    BaseTexture.fromBuffer = function fromBuffer (buffer, width, height, options)
    {
        buffer = buffer || new Float32Array(width * height * 4);

        var resource = new BufferResource(buffer, { width: width, height: height });
        var type = buffer instanceof Float32Array ? _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].FLOAT : _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].UNSIGNED_BYTE;

        return new BaseTexture(resource, Object.assign(defaultBufferOptions, options || { width: width, height: height, type: type }));
    };

    /**
     * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
     *
     * @static
     * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
     * @param {string} id - The id that the BaseTexture will be stored against.
     */
    BaseTexture.addToCache = function addToCache (baseTexture, id)
    {
        if (id)
        {
            if (baseTexture.textureCacheIds.indexOf(id) === -1)
            {
                baseTexture.textureCacheIds.push(id);
            }

            if (_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["BaseTextureCache"][id])
            {
                // eslint-disable-next-line no-console
                console.warn(("BaseTexture added to the cache with an id [" + id + "] that already had an entry"));
            }

            _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["BaseTextureCache"][id] = baseTexture;
        }
    };

    /**
     * Remove a BaseTexture from the global BaseTextureCache.
     *
     * @static
     * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
     * @return {PIXI.BaseTexture|null} The BaseTexture that was removed.
     */
    BaseTexture.removeFromCache = function removeFromCache (baseTexture)
    {
        if (typeof baseTexture === 'string')
        {
            var baseTextureFromCache = _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["BaseTextureCache"][baseTexture];

            if (baseTextureFromCache)
            {
                var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);

                if (index > -1)
                {
                    baseTextureFromCache.textureCacheIds.splice(index, 1);
                }

                delete _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["BaseTextureCache"][baseTexture];

                return baseTextureFromCache;
            }
        }
        else if (baseTexture && baseTexture.textureCacheIds)
        {
            for (var i = 0; i < baseTexture.textureCacheIds.length; ++i)
            {
                delete _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["BaseTextureCache"][baseTexture.textureCacheIds[i]];
            }

            baseTexture.textureCacheIds.length = 0;

            return baseTexture;
        }

        return null;
    };

    Object.defineProperties( BaseTexture.prototype, prototypeAccessors );

    return BaseTexture;
}(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]));

/**
 * Global number of the texture batch, used by multi-texture renderers
 *
 * @static
 * @member {number}
 */
BaseTexture._globalBatch = 0;

/**
 * A resource that contains a number of sources.
 *
 * @class
 * @extends PIXI.resources.Resource
 * @memberof PIXI.resources
 * @param {number|Array<*>} source - Number of items in array or the collection
 *        of image URLs to use. Can also be resources, image elements, canvas, etc.
 * @param {object} [options] Options to apply to {@link PIXI.resources.autoDetectResource}
 * @param {number} [options.width] - Width of the resource
 * @param {number} [options.height] - Height of the resource
 */
var ArrayResource = /*@__PURE__*/(function (Resource) {
    function ArrayResource(source, options)
    {
        options = options || {};

        var urls;
        var length = source;

        if (Array.isArray(source))
        {
            urls = source;
            length = source.length;
        }

        Resource.call(this, options.width, options.height);

        /**
         * Collection of resources.
         * @member {Array<PIXI.BaseTexture>}
         * @readonly
         */
        this.items = [];

        /**
         * Dirty IDs for each part
         * @member {Array<number>}
         * @readonly
         */
        this.itemDirtyIds = [];

        for (var i = 0; i < length; i++)
        {
            var partTexture = new BaseTexture();

            this.items.push(partTexture);
            this.itemDirtyIds.push(-1);
        }

        /**
         * Number of elements in array
         *
         * @member {number}
         * @readonly
         */
        this.length = length;

        /**
         * Promise when loading
         * @member {Promise}
         * @private
         * @default null
         */
        this._load = null;

        if (urls)
        {
            for (var i$1 = 0; i$1 < length; i$1++)
            {
                this.addResourceAt(autoDetectResource(urls[i$1], options), i$1);
            }
        }
    }

    if ( Resource ) ArrayResource.__proto__ = Resource;
    ArrayResource.prototype = Object.create( Resource && Resource.prototype );
    ArrayResource.prototype.constructor = ArrayResource;

    /**
     * Destroy this BaseImageResource
     * @override
     */
    ArrayResource.prototype.dispose = function dispose ()
    {
        for (var i = 0, len = this.length; i < len; i++)
        {
            this.items[i].destroy();
        }
        this.items = null;
        this.itemDirtyIds = null;
        this._load = null;
    };

    /**
     * Set a resource by ID
     *
     * @param {PIXI.resources.Resource} resource
     * @param {number} index - Zero-based index of resource to set
     * @return {PIXI.resources.ArrayResource} Instance for chaining
     */
    ArrayResource.prototype.addResourceAt = function addResourceAt (resource, index)
    {
        var baseTexture = this.items[index];

        if (!baseTexture)
        {
            throw new Error(("Index " + index + " is out of bounds"));
        }

        // Inherit the first resource dimensions
        if (resource.valid && !this.valid)
        {
            this.resize(resource.width, resource.height);
        }

        this.items[index].setResource(resource);

        return this;
    };

    /**
     * Set the parent base texture
     * @member {PIXI.BaseTexture}
     * @override
     */
    ArrayResource.prototype.bind = function bind (baseTexture)
    {
        Resource.prototype.bind.call(this, baseTexture);

        baseTexture.target = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TARGETS */ "l"].TEXTURE_2D_ARRAY;

        for (var i = 0; i < this.length; i++)
        {
            this.items[i].on('update', baseTexture.update, baseTexture);
        }
    };

    /**
     * Unset the parent base texture
     * @member {PIXI.BaseTexture}
     * @override
     */
    ArrayResource.prototype.unbind = function unbind (baseTexture)
    {
        Resource.prototype.unbind.call(this, baseTexture);

        for (var i = 0; i < this.length; i++)
        {
            this.items[i].off('update', baseTexture.update, baseTexture);
        }
    };

    /**
     * Load all the resources simultaneously
     * @override
     * @return {Promise<void>} When load is resolved
     */
    ArrayResource.prototype.load = function load ()
    {
        var this$1 = this;

        if (this._load)
        {
            return this._load;
        }

        var resources = this.items.map(function (item) { return item.resource; });

        // TODO: also implement load part-by-part strategy
        var promises = resources.map(function (item) { return item.load(); });

        this._load = Promise.all(promises)
            .then(function () {
                var ref = resources[0];
                var width = ref.width;
                var height = ref.height;

                this$1.resize(width, height);

                return Promise.resolve(this$1);
            }
            );

        return this._load;
    };

    /**
     * Upload the resources to the GPU.
     * @param {PIXI.Renderer} renderer
     * @param {PIXI.BaseTexture} texture
     * @param {PIXI.GLTexture} glTexture
     * @returns {boolean} whether texture was uploaded
     */
    ArrayResource.prototype.upload = function upload (renderer, texture, glTexture)
    {
        var ref = this;
        var length = ref.length;
        var itemDirtyIds = ref.itemDirtyIds;
        var items = ref.items;
        var gl = renderer.gl;

        if (glTexture.dirtyId < 0)
        {
            gl.texImage3D(
                gl.TEXTURE_2D_ARRAY,
                0,
                texture.format,
                this._width,
                this._height,
                length,
                0,
                texture.format,
                texture.type,
                null
            );
        }

        for (var i = 0; i < length; i++)
        {
            var item = items[i];

            if (itemDirtyIds[i] < item.dirtyId)
            {
                itemDirtyIds[i] = item.dirtyId;
                if (item.valid)
                {
                    gl.texSubImage3D(
                        gl.TEXTURE_2D_ARRAY,
                        0,
                        0, // xoffset
                        0, // yoffset
                        i, // zoffset
                        item.resource.width,
                        item.resource.height,
                        1,
                        texture.format,
                        texture.type,
                        item.resource.source
                    );
                }
            }
        }

        return true;
    };

    return ArrayResource;
}(Resource));

/**
 * @interface OffscreenCanvas
 */

/**
 * Resource type for HTMLCanvasElement.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {HTMLCanvasElement} source - Canvas element to use
 */
var CanvasResource = /*@__PURE__*/(function (BaseImageResource) {
    function CanvasResource () {
        BaseImageResource.apply(this, arguments);
    }

    if ( BaseImageResource ) CanvasResource.__proto__ = BaseImageResource;
    CanvasResource.prototype = Object.create( BaseImageResource && BaseImageResource.prototype );
    CanvasResource.prototype.constructor = CanvasResource;

    CanvasResource.test = function test (source)
    {
        var OffscreenCanvas = window.OffscreenCanvas;

        // Check for browsers that don't yet support OffscreenCanvas
        if (OffscreenCanvas && source instanceof OffscreenCanvas)
        {
            return true;
        }

        return source instanceof HTMLCanvasElement;
    };

    return CanvasResource;
}(BaseImageResource));

/**
 * Resource for a CubeTexture which contains six resources.
 *
 * @class
 * @extends PIXI.resources.ArrayResource
 * @memberof PIXI.resources
 * @param {Array<string|PIXI.resources.Resource>} [source] Collection of URLs or resources
 *        to use as the sides of the cube.
 * @param {object} [options] - ImageResource options
 * @param {number} [options.width] - Width of resource
 * @param {number} [options.height] - Height of resource
 */
var CubeResource = /*@__PURE__*/(function (ArrayResource) {
    function CubeResource(source, options)
    {
        options = options || {};

        ArrayResource.call(this, source, options);

        if (this.length !== CubeResource.SIDES)
        {
            throw new Error(("Invalid length. Got " + (this.length) + ", expected 6"));
        }

        for (var i = 0; i < CubeResource.SIDES; i++)
        {
            this.items[i].target = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TARGETS */ "l"].TEXTURE_CUBE_MAP_POSITIVE_X + i;
        }

        if (options.autoLoad !== false)
        {
            this.load();
        }
    }

    if ( ArrayResource ) CubeResource.__proto__ = ArrayResource;
    CubeResource.prototype = Object.create( ArrayResource && ArrayResource.prototype );
    CubeResource.prototype.constructor = CubeResource;

    /**
     * Add binding
     *
     * @override
     * @param {PIXI.BaseTexture} baseTexture - parent base texture
     */
    CubeResource.prototype.bind = function bind (baseTexture)
    {
        ArrayResource.prototype.bind.call(this, baseTexture);

        baseTexture.target = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TARGETS */ "l"].TEXTURE_CUBE_MAP;
    };

    /**
     * Upload the resource
     *
     * @returns {boolean} true is success
     */
    CubeResource.prototype.upload = function upload (renderer, baseTexture, glTexture)
    {
        var dirty = this.itemDirtyIds;

        for (var i = 0; i < CubeResource.SIDES; i++)
        {
            var side = this.items[i];

            if (dirty[i] < side.dirtyId)
            {
                dirty[i] = side.dirtyId;
                if (side.valid)
                {
                    side.resource.upload(renderer, side, glTexture);
                }
            }
        }

        return true;
    };

    return CubeResource;
}(ArrayResource));

/**
 * Number of texture sides to store for CubeResources
 *
 * @name PIXI.resources.CubeResource.SIDES
 * @static
 * @member {number}
 * @default 6
 */
CubeResource.SIDES = 6;

/**
 * Resource type for SVG elements and graphics.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {string} source - Base64 encoded SVG element or URL for SVG file.
 * @param {object} [options] - Options to use
 * @param {number} [options.scale=1] Scale to apply to SVG. Overridden by...
 * @param {number} [options.width] Rasterize SVG this wide. Aspect ratio preserved if height not specified.
 * @param {number} [options.height] Rasterize SVG this high. Aspect ratio preserved if width not specified.
 * @param {boolean} [options.autoLoad=true] Start loading right away.
 */
var SVGResource = /*@__PURE__*/(function (BaseImageResource) {
    function SVGResource(source, options)
    {
        options = options || {};

        BaseImageResource.call(this, document.createElement('canvas'));
        this._width = 0;
        this._height = 0;

        /**
         * Base64 encoded SVG element or URL for SVG file
         * @readonly
         * @member {string}
         */
        this.svg = source;

        /**
         * The source scale to apply when rasterizing on load
         * @readonly
         * @member {number}
         */
        this.scale = options.scale || 1;

        /**
         * A width override for rasterization on load
         * @readonly
         * @member {number}
         */
        this._overrideWidth = options.width;

        /**
         * A height override for rasterization on load
         * @readonly
         * @member {number}
         */
        this._overrideHeight = options.height;

        /**
         * Call when completely loaded
         * @private
         * @member {function}
         */
        this._resolve = null;

        /**
         * Cross origin value to use
         * @private
         * @member {boolean|string}
         */
        this._crossorigin = options.crossorigin;

        /**
         * Promise when loading
         * @member {Promise<void>}
         * @private
         * @default null
         */
        this._load = null;

        if (options.autoLoad !== false)
        {
            this.load();
        }
    }

    if ( BaseImageResource ) SVGResource.__proto__ = BaseImageResource;
    SVGResource.prototype = Object.create( BaseImageResource && BaseImageResource.prototype );
    SVGResource.prototype.constructor = SVGResource;

    SVGResource.prototype.load = function load ()
    {
        var this$1 = this;

        if (this._load)
        {
            return this._load;
        }

        this._load = new Promise(function (resolve) {
            // Save this until after load is finished
            this$1._resolve = function () {
                this$1.resize(this$1.source.width, this$1.source.height);
                resolve(this$1);
            };

            // Convert SVG inline string to data-uri
            if ((/^\<svg/).test(this$1.svg.trim()))
            {
                if (!btoa)
                {
                    throw new Error('Your browser doesn\'t support base64 conversions.');
                }
                this$1.svg = "data:image/svg+xml;base64," + (btoa(unescape(encodeURIComponent(this$1.svg))));
            }

            this$1._loadSvg();
        });

        return this._load;
    };

    /**
     * Loads an SVG image from `imageUrl` or `data URL`.
     *
     * @private
     */
    SVGResource.prototype._loadSvg = function _loadSvg ()
    {
        var this$1 = this;

        var tempImage = new Image();

        BaseImageResource.crossOrigin(tempImage, this.svg, this._crossorigin);
        tempImage.src = this.svg;

        tempImage.onerror = function (event) {
            tempImage.onerror = null;
            this$1.onError.run(event);
        };

        tempImage.onload = function () {
            var svgWidth = tempImage.width;
            var svgHeight = tempImage.height;

            if (!svgWidth || !svgHeight)
            {
                throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
            }

            // Set render size
            var width = svgWidth * this$1.scale;
            var height = svgHeight * this$1.scale;

            if (this$1._overrideWidth || this$1._overrideHeight)
            {
                width = this$1._overrideWidth || this$1._overrideHeight / svgHeight * svgWidth;
                height = this$1._overrideHeight || this$1._overrideWidth / svgWidth * svgHeight;
            }
            width = Math.round(width);
            height = Math.round(height);

            // Create a canvas element
            var canvas = this$1.source;

            canvas.width = width;
            canvas.height = height;
            canvas._pixiId = "canvas_" + (Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["uid"])());

            // Draw the Svg to the canvas
            canvas
                .getContext('2d')
                .drawImage(tempImage, 0, 0, svgWidth, svgHeight, 0, 0, width, height);

            this$1._resolve();
            this$1._resolve = null;
        };
    };

    /**
     * Get size from an svg string using regexp.
     *
     * @method
     * @param {string} svgString - a serialized svg element
     * @return {PIXI.ISize} image extension
     */
    SVGResource.getSize = function getSize (svgString)
    {
        var sizeMatch = SVGResource.SVG_SIZE.exec(svgString);
        var size = {};

        if (sizeMatch)
        {
            size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
            size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
        }

        return size;
    };

    /**
     * Destroys this texture
     * @override
     */
    SVGResource.prototype.dispose = function dispose ()
    {
        BaseImageResource.prototype.dispose.call(this);
        this._resolve = null;
        this._crossorigin = null;
    };

    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {*} source - The source object
     * @param {string} extension - The extension of source, if set
     */
    SVGResource.test = function test (source, extension)
    {
        // url file extension is SVG
        return extension === 'svg'
            // source is SVG data-uri
            || (typeof source === 'string' && source.indexOf('data:image/svg+xml;base64') === 0)
            // source is SVG inline
            || (typeof source === 'string' && source.indexOf('<svg') === 0);
    };

    return SVGResource;
}(BaseImageResource));

/**
 * RegExp for SVG size.
 *
 * @static
 * @constant {RegExp|string} SVG_SIZE
 * @memberof PIXI.resources.SVGResource
 * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
 */
SVGResource.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i; // eslint-disable-line max-len

/**
 * Resource type for HTMLVideoElement.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {HTMLVideoElement|object|string|Array<string|object>} source - Video element to use.
 * @param {object} [options] - Options to use
 * @param {boolean} [options.autoLoad=true] - Start loading the video immediately
 * @param {boolean} [options.autoPlay=true] - Start playing video immediately
 * @param {number} [options.updateFPS=0] - How many times a second to update the texture from the video.
 * Leave at 0 to update at every render.
 * @param {boolean} [options.crossorigin=true] - Load image using cross origin
 */
var VideoResource = /*@__PURE__*/(function (BaseImageResource) {
    function VideoResource(source, options)
    {
        options = options || {};

        if (!(source instanceof HTMLVideoElement))
        {
            var videoElement = document.createElement('video');

            // workaround for https://github.com/pixijs/pixi.js/issues/5996
            videoElement.setAttribute('preload', 'auto');
            videoElement.setAttribute('webkit-playsinline', '');
            videoElement.setAttribute('playsinline', '');

            if (typeof source === 'string')
            {
                source = [source];
            }

            BaseImageResource.crossOrigin(videoElement, (source[0].src || source[0]), options.crossorigin);

            // array of objects or strings
            for (var i = 0; i < source.length; ++i)
            {
                var sourceElement = document.createElement('source');

                var ref = source[i];
                var src = ref.src;
                var mime = ref.mime;

                src = src || source[i];

                var baseSrc = src.split('?').shift().toLowerCase();
                var ext = baseSrc.substr(baseSrc.lastIndexOf('.') + 1);

                mime = mime || ("video/" + ext);

                sourceElement.src = src;
                sourceElement.type = mime;

                videoElement.appendChild(sourceElement);
            }

            // Override the source
            source = videoElement;
        }

        BaseImageResource.call(this, source);

        this.noSubImage = true;
        this._autoUpdate = true;
        this._isAutoUpdating = false;
        this._updateFPS = options.updateFPS || 0;
        this._msToNextUpdate = 0;

        /**
         * When set to true will automatically play videos used by this texture once
         * they are loaded. If false, it will not modify the playing state.
         *
         * @member {boolean}
         * @default true
         */
        this.autoPlay = options.autoPlay !== false;

        /**
         * Promise when loading
         * @member {Promise<void>}
         * @private
         * @default null
         */
        this._load = null;

        /**
         * Callback when completed with load.
         * @member {function}
         * @private
         */
        this._resolve = null;

        // Bind for listeners
        this._onCanPlay = this._onCanPlay.bind(this);
        this._onError = this._onError.bind(this);

        if (options.autoLoad !== false)
        {
            this.load();
        }
    }

    if ( BaseImageResource ) VideoResource.__proto__ = BaseImageResource;
    VideoResource.prototype = Object.create( BaseImageResource && BaseImageResource.prototype );
    VideoResource.prototype.constructor = VideoResource;

    var prototypeAccessors = { autoUpdate: { configurable: true },updateFPS: { configurable: true } };

    /**
     * Trigger updating of the texture
     *
     * @param {number} [deltaTime=0] - time delta since last tick
     */
    VideoResource.prototype.update = function update (deltaTime)
    {
        if ( deltaTime === void 0 ) deltaTime = 0;

        if (!this.destroyed)
        {
            // account for if video has had its playbackRate changed
            var elapsedMS = _pixi_ticker__WEBPACK_IMPORTED_MODULE_4__[/* Ticker */ "a"].shared.elapsedMS * this.source.playbackRate;

            this._msToNextUpdate = Math.floor(this._msToNextUpdate - elapsedMS);
            if (!this._updateFPS || this._msToNextUpdate <= 0)
            {
                BaseImageResource.prototype.update.call(this, deltaTime);
                this._msToNextUpdate = this._updateFPS ? Math.floor(1000 / this._updateFPS) : 0;
            }
        }
    };

    /**
     * Start preloading the video resource.
     *
     * @protected
     * @return {Promise<void>} Handle the validate event
     */
    VideoResource.prototype.load = function load ()
    {
        var this$1 = this;

        if (this._load)
        {
            return this._load;
        }

        var source = this.source;

        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA)
            && source.width && source.height)
        {
            source.complete = true;
        }

        source.addEventListener('play', this._onPlayStart.bind(this));
        source.addEventListener('pause', this._onPlayStop.bind(this));

        if (!this._isSourceReady())
        {
            source.addEventListener('canplay', this._onCanPlay);
            source.addEventListener('canplaythrough', this._onCanPlay);
            source.addEventListener('error', this._onError, true);
        }
        else
        {
            this._onCanPlay();
        }

        this._load = new Promise(function (resolve) {
            if (this$1.valid)
            {
                resolve(this$1);
            }
            else
            {
                this$1._resolve = resolve;

                source.load();
            }
        });

        return this._load;
    };

    /**
     * Handle video error events.
     *
     * @private
     */
    VideoResource.prototype._onError = function _onError ()
    {
        this.source.removeEventListener('error', this._onError, true);
        this.onError.run(event);
    };

    /**
     * Returns true if the underlying source is playing.
     *
     * @private
     * @return {boolean} True if playing.
     */
    VideoResource.prototype._isSourcePlaying = function _isSourcePlaying ()
    {
        var source = this.source;

        return (source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2);
    };

    /**
     * Returns true if the underlying source is ready for playing.
     *
     * @private
     * @return {boolean} True if ready.
     */
    VideoResource.prototype._isSourceReady = function _isSourceReady ()
    {
        return this.source.readyState === 3 || this.source.readyState === 4;
    };

    /**
     * Runs the update loop when the video is ready to play
     *
     * @private
     */
    VideoResource.prototype._onPlayStart = function _onPlayStart ()
    {
        // Just in case the video has not received its can play even yet..
        if (!this.valid)
        {
            this._onCanPlay();
        }

        if (!this._isAutoUpdating && this.autoUpdate)
        {
            _pixi_ticker__WEBPACK_IMPORTED_MODULE_4__[/* Ticker */ "a"].shared.add(this.update, this);
            this._isAutoUpdating = true;
        }
    };

    /**
     * Fired when a pause event is triggered, stops the update loop
     *
     * @private
     */
    VideoResource.prototype._onPlayStop = function _onPlayStop ()
    {
        if (this._isAutoUpdating)
        {
            _pixi_ticker__WEBPACK_IMPORTED_MODULE_4__[/* Ticker */ "a"].shared.remove(this.update, this);
            this._isAutoUpdating = false;
        }
    };

    /**
     * Fired when the video is loaded and ready to play
     *
     * @private
     */
    VideoResource.prototype._onCanPlay = function _onCanPlay ()
    {
        var ref = this;
        var source = ref.source;

        source.removeEventListener('canplay', this._onCanPlay);
        source.removeEventListener('canplaythrough', this._onCanPlay);

        var valid = this.valid;

        this.resize(source.videoWidth, source.videoHeight);

        // prevent multiple loaded dispatches..
        if (!valid && this._resolve)
        {
            this._resolve(this);
            this._resolve = null;
        }

        if (this._isSourcePlaying())
        {
            this._onPlayStart();
        }
        else if (this.autoPlay)
        {
            source.play();
        }
    };

    /**
     * Destroys this texture
     * @override
     */
    VideoResource.prototype.dispose = function dispose ()
    {
        if (this._isAutoUpdating)
        {
            _pixi_ticker__WEBPACK_IMPORTED_MODULE_4__[/* Ticker */ "a"].shared.remove(this.update, this);
        }

        if (this.source)
        {
            this.source.removeEventListener('error', this._onError, true);
            this.source.pause();
            this.source.src = '';
            this.source.load();
        }
        BaseImageResource.prototype.dispose.call(this);
    };

    /**
     * Should the base texture automatically update itself, set to true by default
     *
     * @member {boolean}
     */
    prototypeAccessors.autoUpdate.get = function ()
    {
        return this._autoUpdate;
    };

    prototypeAccessors.autoUpdate.set = function (value) // eslint-disable-line require-jsdoc
    {
        if (value !== this._autoUpdate)
        {
            this._autoUpdate = value;

            if (!this._autoUpdate && this._isAutoUpdating)
            {
                _pixi_ticker__WEBPACK_IMPORTED_MODULE_4__[/* Ticker */ "a"].shared.remove(this.update, this);
                this._isAutoUpdating = false;
            }
            else if (this._autoUpdate && !this._isAutoUpdating)
            {
                _pixi_ticker__WEBPACK_IMPORTED_MODULE_4__[/* Ticker */ "a"].shared.add(this.update, this);
                this._isAutoUpdating = true;
            }
        }
    };

    /**
     * How many times a second to update the texture from the video. Leave at 0 to update at every render.
     * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
     *
     * @member {number}
     */
    prototypeAccessors.updateFPS.get = function ()
    {
        return this._updateFPS;
    };

    prototypeAccessors.updateFPS.set = function (value) // eslint-disable-line require-jsdoc
    {
        if (value !== this._updateFPS)
        {
            this._updateFPS = value;
        }
    };

    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {*} source - The source object
     * @param {string} extension - The extension of source, if set
     * @return {boolean} `true` if video source
     */
    VideoResource.test = function test (source, extension)
    {
        return (source instanceof HTMLVideoElement)
            || VideoResource.TYPES.indexOf(extension) > -1;
    };

    Object.defineProperties( VideoResource.prototype, prototypeAccessors );

    return VideoResource;
}(BaseImageResource));

/**
 * List of common video file extensions supported by VideoResource.
 * @constant
 * @member {Array<string>}
 * @static
 * @readonly
 */
VideoResource.TYPES = ['mp4', 'm4v', 'webm', 'ogg', 'ogv', 'h264', 'avi', 'mov'];

/**
 * Resource type for ImageBitmap.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {ImageBitmap} source - Image element to use
 */
var ImageBitmapResource = /*@__PURE__*/(function (BaseImageResource) {
    function ImageBitmapResource () {
        BaseImageResource.apply(this, arguments);
    }

    if ( BaseImageResource ) ImageBitmapResource.__proto__ = BaseImageResource;
    ImageBitmapResource.prototype = Object.create( BaseImageResource && BaseImageResource.prototype );
    ImageBitmapResource.prototype.constructor = ImageBitmapResource;

    ImageBitmapResource.test = function test (source)
    {
        return !!window.createImageBitmap && source instanceof ImageBitmap;
    };

    return ImageBitmapResource;
}(BaseImageResource));

INSTALLED.push(
    ImageResource,
    ImageBitmapResource,
    CanvasResource,
    VideoResource,
    SVGResource,
    BufferResource,
    CubeResource,
    ArrayResource
);

var index = ({
    INSTALLED: INSTALLED,
    autoDetectResource: autoDetectResource,
    ArrayResource: ArrayResource,
    BufferResource: BufferResource,
    CanvasResource: CanvasResource,
    CubeResource: CubeResource,
    ImageResource: ImageResource,
    ImageBitmapResource: ImageBitmapResource,
    SVGResource: SVGResource,
    VideoResource: VideoResource,
    Resource: Resource,
    BaseImageResource: BaseImageResource
});

/**
 * System is a base class used for extending systems used by the {@link PIXI.Renderer}
 *
 * @see PIXI.Renderer#addSystem
 * @class
 * @memberof PIXI
 */
var System = function System(renderer)
{
    /**
     * The renderer this manager works for.
     *
     * @member {PIXI.Renderer}
     */
    this.renderer = renderer;
};

/**
 * Generic destroy methods to be overridden by the subclass
 */
System.prototype.destroy = function destroy ()
{
    this.renderer = null;
};

/**
 * Resource type for DepthTexture.
 * @class
 * @extends PIXI.resources.BufferResource
 * @memberof PIXI.resources
 */
var DepthResource = /*@__PURE__*/(function (BufferResource) {
    function DepthResource () {
        BufferResource.apply(this, arguments);
    }

    if ( BufferResource ) DepthResource.__proto__ = BufferResource;
    DepthResource.prototype = Object.create( BufferResource && BufferResource.prototype );
    DepthResource.prototype.constructor = DepthResource;

    DepthResource.prototype.upload = function upload (renderer, baseTexture, glTexture)
    {
        var gl = renderer.gl;

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ALPHA_MODES */ "a"].UNPACK);

        if (glTexture.width === baseTexture.width && glTexture.height === baseTexture.height)
        {
            gl.texSubImage2D(
                baseTexture.target,
                0,
                0,
                0,
                baseTexture.width,
                baseTexture.height,
                baseTexture.format,
                baseTexture.type,
                this.data
            );
        }
        else
        {
            glTexture.width = baseTexture.width;
            glTexture.height = baseTexture.height;

            gl.texImage2D(
                baseTexture.target,
                0,
                gl.DEPTH_COMPONENT16, // Needed for depth to render properly in webgl2.0
                baseTexture.width,
                baseTexture.height,
                0,
                baseTexture.format,
                baseTexture.type,
                this.data
            );
        }

        return true;
    };

    return DepthResource;
}(BufferResource));

/**
 * Frame buffer used by the BaseRenderTexture
 *
 * @class
 * @memberof PIXI
 */
var Framebuffer = function Framebuffer(width, height)
{
    this.width = Math.ceil(width || 100);
    this.height = Math.ceil(height || 100);

    this.stencil = false;
    this.depth = false;

    this.dirtyId = 0;
    this.dirtyFormat = 0;
    this.dirtySize = 0;

    this.depthTexture = null;
    this.colorTextures = [];

    this.glFramebuffers = {};

    this.disposeRunner = new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('disposeFramebuffer', 2);
};

var prototypeAccessors$1 = { colorTexture: { configurable: true } };

/**
 * Reference to the colorTexture.
 *
 * @member {PIXI.Texture[]}
 * @readonly
 */
prototypeAccessors$1.colorTexture.get = function ()
{
    return this.colorTextures[0];
};

/**
 * Add texture to the colorTexture array
 *
 * @param {number} [index=0] - Index of the array to add the texture to
 * @param {PIXI.Texture} [texture] - Texture to add to the array
 */
Framebuffer.prototype.addColorTexture = function addColorTexture (index, texture)
{
        if ( index === void 0 ) index = 0;

    // TODO add some validation to the texture - same width / height etc?
    this.colorTextures[index] = texture || new BaseTexture(null, { scaleMode: 0,
        resolution: 1,
        mipmap: false,
        width: this.width,
        height: this.height });

    this.dirtyId++;
    this.dirtyFormat++;

    return this;
};

/**
 * Add a depth texture to the frame buffer
 *
 * @param {PIXI.Texture} [texture] - Texture to add
 */
Framebuffer.prototype.addDepthTexture = function addDepthTexture (texture)
{
    /* eslint-disable max-len */
    this.depthTexture = texture || new BaseTexture(new DepthResource(null, { width: this.width, height: this.height }), { scaleMode: 0,
        resolution: 1,
        width: this.width,
        height: this.height,
        mipmap: false,
        format: _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* FORMATS */ "e"].DEPTH_COMPONENT,
        type: _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].UNSIGNED_SHORT });
    /* eslint-disable max-len */
    this.dirtyId++;
    this.dirtyFormat++;

    return this;
};

/**
 * Enable depth on the frame buffer
 */
Framebuffer.prototype.enableDepth = function enableDepth ()
{
    this.depth = true;

    this.dirtyId++;
    this.dirtyFormat++;

    return this;
};

/**
 * Enable stencil on the frame buffer
 */
Framebuffer.prototype.enableStencil = function enableStencil ()
{
    this.stencil = true;

    this.dirtyId++;
    this.dirtyFormat++;

    return this;
};

/**
 * Resize the frame buffer
 *
 * @param {number} width - Width of the frame buffer to resize to
 * @param {number} height - Height of the frame buffer to resize to
 */
Framebuffer.prototype.resize = function resize (width, height)
{
    width = Math.ceil(width);
    height = Math.ceil(height);

    if (width === this.width && height === this.height) { return; }

    this.width = width;
    this.height = height;

    this.dirtyId++;
    this.dirtySize++;

    for (var i = 0; i < this.colorTextures.length; i++)
    {
        var texture = this.colorTextures[i];
        var resolution = texture.resolution;

        // take into acount the fact the texture may have a different resolution..
        texture.setSize(width / resolution, height / resolution);
    }

    if (this.depthTexture)
    {
        var resolution$1 = this.depthTexture.resolution;

        this.depthTexture.setSize(width / resolution$1, height / resolution$1);
    }
};

/**
 * disposes WebGL resources that are connected to this geometry
 */
Framebuffer.prototype.dispose = function dispose ()
{
    this.disposeRunner.run(this, false);
};

Object.defineProperties( Framebuffer.prototype, prototypeAccessors$1 );

/**
 * A BaseRenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer();
 * let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 800, height: 600 });
 * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
 * let sprite = PIXI.Sprite.from("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderer.render(sprite, renderTexture);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 100, height: 100 });
 * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.BaseTexture
 * @memberof PIXI
 */
var BaseRenderTexture = /*@__PURE__*/(function (BaseTexture) {
    function BaseRenderTexture(options)
    {
        if (typeof options === 'number')
        {
            /* eslint-disable prefer-rest-params */
            // Backward compatibility of signature
            var width$1 = arguments[0];
            var height$1 = arguments[1];
            var scaleMode = arguments[2];
            var resolution = arguments[3];

            options = { width: width$1, height: height$1, scaleMode: scaleMode, resolution: resolution };
            /* eslint-enable prefer-rest-params */
        }

        BaseTexture.call(this, null, options);

        var ref = options || {};
        var width = ref.width;
        var height = ref.height;

        // Set defaults
        this.mipmap = false;
        this.width = Math.ceil(width) || 100;
        this.height = Math.ceil(height) || 100;
        this.valid = true;

        /**
         * A reference to the canvas render target (we only need one as this can be shared across renderers)
         *
         * @protected
         * @member {object}
         */
        this._canvasRenderTarget = null;

        this.clearColor = [0, 0, 0, 0];

        this.framebuffer = new Framebuffer(this.width * this.resolution, this.height * this.resolution)
            .addColorTexture(0, this);

        // TODO - could this be added the systems?

        /**
         * The data structure for the stencil masks.
         *
         * @member {PIXI.MaskData[]}
         */
        this.maskStack = [];

        /**
         * The data structure for the filters.
         *
         * @member {Object[]}
         */
        this.filterStack = [{}];
    }

    if ( BaseTexture ) BaseRenderTexture.__proto__ = BaseTexture;
    BaseRenderTexture.prototype = Object.create( BaseTexture && BaseTexture.prototype );
    BaseRenderTexture.prototype.constructor = BaseRenderTexture;

    /**
     * Resizes the BaseRenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     */
    BaseRenderTexture.prototype.resize = function resize (width, height)
    {
        width = Math.ceil(width);
        height = Math.ceil(height);
        this.framebuffer.resize(width * this.resolution, height * this.resolution);
    };

    /**
     * Frees the texture and framebuffer from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     *
     * @fires PIXI.BaseTexture#dispose
     */
    BaseRenderTexture.prototype.dispose = function dispose ()
    {
        this.framebuffer.dispose();

        BaseTexture.prototype.dispose.call(this);
    };

    /**
     * Destroys this texture.
     *
     */
    BaseRenderTexture.prototype.destroy = function destroy ()
    {
        BaseTexture.prototype.destroy.call(this, true);

        this.framebuffer = null;
    };

    return BaseRenderTexture;
}(BaseTexture));

/**
 * Stores a texture's frame in UV coordinates, in
 * which everything lies in the rectangle `[(0,0), (1,0),
 * (1,1), (0,1)]`.
 *
 * | Corner       | Coordinates |
 * |--------------|-------------|
 * | Top-Left     | `(x0,y0)`   |
 * | Top-Right    | `(x1,y1)`   |
 * | Bottom-Right | `(x2,y2)`   |
 * | Bottom-Left  | `(x3,y3)`   |
 *
 * @class
 * @protected
 * @memberof PIXI
 */
var TextureUvs = function TextureUvs()
{
    /**
     * X-component of top-left corner `(x0,y0)`.
     *
     * @member {number}
     */
    this.x0 = 0;

    /**
     * Y-component of top-left corner `(x0,y0)`.
     *
     * @member {number}
     */
    this.y0 = 0;

    /**
     * X-component of top-right corner `(x1,y1)`.
     *
     * @member {number}
     */
    this.x1 = 1;

    /**
     * Y-component of top-right corner `(x1,y1)`.
     *
     * @member {number}
     */
    this.y1 = 0;

    /**
     * X-component of bottom-right corner `(x2,y2)`.
     *
     * @member {number}
     */
    this.x2 = 1;

    /**
     * Y-component of bottom-right corner `(x2,y2)`.
     *
     * @member {number}
     */
    this.y2 = 1;

    /**
     * X-component of bottom-left corner `(x3,y3)`.
     *
     * @member {number}
     */
    this.x3 = 0;

    /**
     * Y-component of bottom-right corner `(x3,y3)`.
     *
     * @member {number}
     */
    this.y3 = 1;

    this.uvsFloat32 = new Float32Array(8);
};

/**
 * Sets the texture Uvs based on the given frame information.
 *
 * @protected
 * @param {PIXI.Rectangle} frame - The frame of the texture
 * @param {PIXI.Rectangle} baseFrame - The base frame of the texture
 * @param {number} rotate - Rotation of frame, see {@link PIXI.groupD8}
 */
TextureUvs.prototype.set = function set (frame, baseFrame, rotate)
{
    var tw = baseFrame.width;
    var th = baseFrame.height;

    if (rotate)
    {
        // width and height div 2 div baseFrame size
        var w2 = frame.width / 2 / tw;
        var h2 = frame.height / 2 / th;

        // coordinates of center
        var cX = (frame.x / tw) + w2;
        var cY = (frame.y / th) + h2;

        rotate = _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].add(rotate, _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].NW); // NW is top-left corner
        this.x0 = cX + (w2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uX(rotate));
        this.y0 = cY + (h2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uY(rotate));

        rotate = _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].add(rotate, 2); // rotate 90 degrees clockwise
        this.x1 = cX + (w2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uX(rotate));
        this.y1 = cY + (h2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uY(rotate));

        rotate = _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].add(rotate, 2);
        this.x2 = cX + (w2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uX(rotate));
        this.y2 = cY + (h2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uY(rotate));

        rotate = _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].add(rotate, 2);
        this.x3 = cX + (w2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uX(rotate));
        this.y3 = cY + (h2 * _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* groupD8 */ "n"].uY(rotate));
    }
    else
    {
        this.x0 = frame.x / tw;
        this.y0 = frame.y / th;

        this.x1 = (frame.x + frame.width) / tw;
        this.y1 = frame.y / th;

        this.x2 = (frame.x + frame.width) / tw;
        this.y2 = (frame.y + frame.height) / th;

        this.x3 = frame.x / tw;
        this.y3 = (frame.y + frame.height) / th;
    }

    this.uvsFloat32[0] = this.x0;
    this.uvsFloat32[1] = this.y0;
    this.uvsFloat32[2] = this.x1;
    this.uvsFloat32[3] = this.y1;
    this.uvsFloat32[4] = this.x2;
    this.uvsFloat32[5] = this.y2;
    this.uvsFloat32[6] = this.x3;
    this.uvsFloat32[7] = this.y3;
};

var DEFAULT_UVS = new TextureUvs();

/**
 * A texture stores the information that represents an image or part of an image.
 *
 * It cannot be added to the display list directly; instead use it as the texture for a Sprite.
 * If no frame is provided for a texture, then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * let texture = PIXI.Texture.from('assets/image.png');
 * let sprite1 = new PIXI.Sprite(texture);
 * let sprite2 = new PIXI.Sprite(texture);
 * ```
 *
 * If you didnt pass the texture frame to constructor, it enables `noFrame` mode:
 * it subscribes on baseTexture events, it automatically resizes at the same time as baseTexture.
 *
 * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
 * You can check for this by checking the sprite's _textureID property.
 * ```js
 * var texture = PIXI.Texture.from('assets/image.svg');
 * var sprite1 = new PIXI.Sprite(texture);
 * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
 * ```
 * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
 *
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI
 */
var Texture = /*@__PURE__*/(function (EventEmitter) {
    function Texture(baseTexture, frame, orig, trim, rotate, anchor)
    {
        EventEmitter.call(this);

        /**
         * Does this Texture have any frame data assigned to it?
         *
         * This mode is enabled automatically if no frame was passed inside constructor.
         *
         * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
         *
         * Beware, after loading or resize of baseTexture event can fired two times!
         * If you want more control, subscribe on baseTexture itself.
         *
         * ```js
         * texture.on('update', () => {});
         * ```
         *
         * Any assignment of `frame` switches off `noFrame` mode.
         *
         * @member {boolean}
         */
        this.noFrame = false;

        if (!frame)
        {
            this.noFrame = true;
            frame = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"](0, 0, 1, 1);
        }

        if (baseTexture instanceof Texture)
        {
            baseTexture = baseTexture.baseTexture;
        }

        /**
         * The base texture that this texture uses.
         *
         * @member {PIXI.BaseTexture}
         */
        this.baseTexture = baseTexture;

        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {PIXI.Rectangle}
         */
        this._frame = frame;

        /**
         * This is the trimmed area of original texture, before it was put in atlas
         * Please call `updateUvs()` after you change coordinates of `trim` manually.
         *
         * @member {PIXI.Rectangle}
         */
        this.trim = trim;

        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        this.valid = false;

        /**
         * This will let a renderer know that a texture has been updated (used mainly for WebGL uv updates)
         *
         * @member {boolean}
         */
        this.requiresUpdate = false;

        /**
         * The WebGL UV data cache. Can be used as quad UV
         *
         * @member {PIXI.TextureUvs}
         * @protected
         */
        this._uvs = DEFAULT_UVS;

        /**
         * Default TextureMatrix instance for this texture
         * By default that object is not created because its heavy
         *
         * @member {PIXI.TextureMatrix}
         */
        this.uvMatrix = null;

        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {PIXI.Rectangle}
         */
        this.orig = orig || frame;// new Rectangle(0, 0, 1, 1);

        this._rotate = Number(rotate || 0);

        if (rotate === true)
        {
            // this is old texturepacker legacy, some games/libraries are passing "true" for rotated textures
            this._rotate = 2;
        }
        else if (this._rotate % 2 !== 0)
        {
            throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
        }

        /**
         * Anchor point that is used as default if sprite is created with this texture.
         * Changing the `defaultAnchor` at a later point of time will not update Sprite's anchor point.
         * @member {PIXI.Point}
         * @default {0,0}
         */
        this.defaultAnchor = anchor ? new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Point */ "g"](anchor.x, anchor.y) : new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Point */ "g"](0, 0);

        /**
         * Update ID is observed by sprites and TextureMatrix instances.
         * Call updateUvs() to increment it.
         *
         * @member {number}
         * @protected
         */

        this._updateID = 0;

        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]}
         */
        this.textureCacheIds = [];

        if (!baseTexture.valid)
        {
            baseTexture.once('loaded', this.onBaseTextureUpdated, this);
        }
        else if (this.noFrame)
        {
            // if there is no frame we should monitor for any base texture changes..
            if (baseTexture.valid)
            {
                this.onBaseTextureUpdated(baseTexture);
            }
        }
        else
        {
            this.frame = frame;
        }

        if (this.noFrame)
        {
            baseTexture.on('update', this.onBaseTextureUpdated, this);
        }
    }

    if ( EventEmitter ) Texture.__proto__ = EventEmitter;
    Texture.prototype = Object.create( EventEmitter && EventEmitter.prototype );
    Texture.prototype.constructor = Texture;

    var prototypeAccessors = { resolution: { configurable: true },frame: { configurable: true },rotate: { configurable: true },width: { configurable: true },height: { configurable: true } };

    /**
     * Updates this texture on the gpu.
     *
     * Calls the TextureResource update.
     *
     * If you adjusted `frame` manually, please call `updateUvs()` instead.
     *
     */
    Texture.prototype.update = function update ()
    {
        if (this.baseTexture.resource)
        {
            this.baseTexture.resource.update();
        }
    };

    /**
     * Called when the base texture is updated
     *
     * @protected
     * @param {PIXI.BaseTexture} baseTexture - The base texture.
     */
    Texture.prototype.onBaseTextureUpdated = function onBaseTextureUpdated (baseTexture)
    {
        if (this.noFrame)
        {
            if (!this.baseTexture.valid)
            {
                return;
            }

            this._frame.width = baseTexture.width;
            this._frame.height = baseTexture.height;
            this.valid = true;
            this.updateUvs();
        }
        else
        {
            // TODO this code looks confusing.. boo to abusing getters and setters!
            // if user gave us frame that has bigger size than resized texture it can be a problem
            this.frame = this._frame;
        }

        this.emit('update', this);
    };

    /**
     * Destroys this texture
     *
     * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
     */
    Texture.prototype.destroy = function destroy (destroyBase)
    {
        if (this.baseTexture)
        {
            if (destroyBase)
            {
                var ref = this.baseTexture;
                var resource = ref.resource;

                // delete the texture if it exists in the texture cache..
                // this only needs to be removed if the base texture is actually destroyed too..
                if (resource && _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][resource.url])
                {
                    Texture.removeFromCache(resource.url);
                }

                this.baseTexture.destroy();
            }

            this.baseTexture.off('update', this.onBaseTextureUpdated, this);

            this.baseTexture = null;
        }

        this._frame = null;
        this._uvs = null;
        this.trim = null;
        this.orig = null;

        this.valid = false;

        Texture.removeFromCache(this);
        this.textureCacheIds = null;
    };

    /**
     * Creates a new texture object that acts the same as this one.
     *
     * @return {PIXI.Texture} The new texture
     */
    Texture.prototype.clone = function clone ()
    {
        return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor);
    };

    /**
     * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
     * Call it after changing the frame
     */
    Texture.prototype.updateUvs = function updateUvs ()
    {
        if (this._uvs === DEFAULT_UVS)
        {
            this._uvs = new TextureUvs();
        }

        this._uvs.set(this._frame, this.baseTexture, this.rotate);

        this._updateID++;
    };

    /**
     * Helper function that creates a new Texture based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture} source
     *        Source to create texture from
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @param {boolean} [strict] Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
     * @return {PIXI.Texture} The newly created texture
     */
    Texture.from = function from (source, options, strict)
    {
        if ( options === void 0 ) options = {};
        if ( strict === void 0 ) strict = _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].STRICT_TEXTURE_CACHE;

        var isFrame = typeof source === 'string';
        var cacheId = null;

        if (isFrame)
        {
            cacheId = source;
        }
        else
        {
            if (!source._pixiId)
            {
                source._pixiId = "pixiid_" + (Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["uid"])());
            }

            cacheId = source._pixiId;
        }

        var texture = _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][cacheId];

        // Strict-mode rejects invalid cacheIds
        if (isFrame && strict && !texture)
        {
            throw new Error(("The cacheId \"" + cacheId + "\" does not exist in TextureCache."));
        }

        if (!texture)
        {
            if (!options.resolution)
            {
                options.resolution = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["getResolutionOfUrl"])(source);
            }

            texture = new Texture(new BaseTexture(source, options));
            texture.baseTexture.cacheId = cacheId;

            BaseTexture.addToCache(texture.baseTexture, cacheId);
            Texture.addToCache(texture, cacheId);
        }

        // lets assume its a base texture!
        return texture;
    };

    /**
     * Create a new Texture with a BufferResource from a Float32Array.
     * RGBA values are floats from 0 to 1.
     * @static
     * @param {Float32Array|Uint8Array} buffer The optional array to use, if no data
     *        is provided, a new Float32Array is created.
     * @param {number} width - Width of the resource
     * @param {number} height - Height of the resource
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @return {PIXI.Texture} The resulting new BaseTexture
     */
    Texture.fromBuffer = function fromBuffer (buffer, width, height, options)
    {
        return new Texture(BaseTexture.fromBuffer(buffer, width, height, options));
    };

    /**
     * Create a texture from a source and add to the cache.
     *
     * @static
     * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
     * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
     * @param {String} [name] - Human readable name for the texture cache. If no name is
     *        specified, only `imageUrl` will be used as the cache ID.
     * @return {PIXI.Texture} Output texture
     */
    Texture.fromLoader = function fromLoader (source, imageUrl, name)
    {
        var resource = new ImageResource(source);

        resource.url = imageUrl;

        var baseTexture = new BaseTexture(resource, {
            scaleMode: _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].SCALE_MODE,
            resolution: Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["getResolutionOfUrl"])(imageUrl),
        });

        var texture = new Texture(baseTexture);

        // No name, use imageUrl instead
        if (!name)
        {
            name = imageUrl;
        }

        // lets also add the frame to pixi's global cache for 'fromLoader' function
        BaseTexture.addToCache(texture.baseTexture, name);
        Texture.addToCache(texture, name);

        // also add references by url if they are different.
        if (name !== imageUrl)
        {
            BaseTexture.addToCache(texture.baseTexture, imageUrl);
            Texture.addToCache(texture, imageUrl);
        }

        return texture;
    };

    /**
     * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
     *
     * @static
     * @param {PIXI.Texture} texture - The Texture to add to the cache.
     * @param {string} id - The id that the Texture will be stored against.
     */
    Texture.addToCache = function addToCache (texture, id)
    {
        if (id)
        {
            if (texture.textureCacheIds.indexOf(id) === -1)
            {
                texture.textureCacheIds.push(id);
            }

            if (_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][id])
            {
                // eslint-disable-next-line no-console
                console.warn(("Texture added to the cache with an id [" + id + "] that already had an entry"));
            }

            _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][id] = texture;
        }
    };

    /**
     * Remove a Texture from the global TextureCache.
     *
     * @static
     * @param {string|PIXI.Texture} texture - id of a Texture to be removed, or a Texture instance itself
     * @return {PIXI.Texture|null} The Texture that was removed
     */
    Texture.removeFromCache = function removeFromCache (texture)
    {
        if (typeof texture === 'string')
        {
            var textureFromCache = _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][texture];

            if (textureFromCache)
            {
                var index = textureFromCache.textureCacheIds.indexOf(texture);

                if (index > -1)
                {
                    textureFromCache.textureCacheIds.splice(index, 1);
                }

                delete _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][texture];

                return textureFromCache;
            }
        }
        else if (texture && texture.textureCacheIds)
        {
            for (var i = 0; i < texture.textureCacheIds.length; ++i)
            {
                // Check that texture matches the one being passed in before deleting it from the cache.
                if (_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][texture.textureCacheIds[i]] === texture)
                {
                    delete _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["TextureCache"][texture.textureCacheIds[i]];
                }
            }

            texture.textureCacheIds.length = 0;

            return texture;
        }

        return null;
    };

    /**
     * Returns resolution of baseTexture
     *
     * @member {number}
     * @readonly
     */
    prototypeAccessors.resolution.get = function ()
    {
        return this.baseTexture.resolution;
    };

    /**
     * The frame specifies the region of the base texture that this texture uses.
     * Please call `updateUvs()` after you change coordinates of `frame` manually.
     *
     * @member {PIXI.Rectangle}
     */
    prototypeAccessors.frame.get = function ()
    {
        return this._frame;
    };

    prototypeAccessors.frame.set = function (frame) // eslint-disable-line require-jsdoc
    {
        this._frame = frame;

        this.noFrame = false;

        var x = frame.x;
        var y = frame.y;
        var width = frame.width;
        var height = frame.height;
        var xNotFit = x + width > this.baseTexture.width;
        var yNotFit = y + height > this.baseTexture.height;

        if (xNotFit || yNotFit)
        {
            var relationship = xNotFit && yNotFit ? 'and' : 'or';
            var errorX = "X: " + x + " + " + width + " = " + (x + width) + " > " + (this.baseTexture.width);
            var errorY = "Y: " + y + " + " + height + " = " + (y + height) + " > " + (this.baseTexture.height);

            throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: '
                + errorX + " " + relationship + " " + errorY);
        }

        this.valid = width && height && this.baseTexture.valid;

        if (!this.trim && !this.rotate)
        {
            this.orig = frame;
        }

        if (this.valid)
        {
            this.updateUvs();
        }
    };

    /**
     * Indicates whether the texture is rotated inside the atlas
     * set to 2 to compensate for texture packer rotation
     * set to 6 to compensate for spine packer rotation
     * can be used to rotate or mirror sprites
     * See {@link PIXI.groupD8} for explanation
     *
     * @member {number}
     */
    prototypeAccessors.rotate.get = function ()
    {
        return this._rotate;
    };

    prototypeAccessors.rotate.set = function (rotate) // eslint-disable-line require-jsdoc
    {
        this._rotate = rotate;
        if (this.valid)
        {
            this.updateUvs();
        }
    };

    /**
     * The width of the Texture in pixels.
     *
     * @member {number}
     */
    prototypeAccessors.width.get = function ()
    {
        return this.orig.width;
    };

    /**
     * The height of the Texture in pixels.
     *
     * @member {number}
     */
    prototypeAccessors.height.get = function ()
    {
        return this.orig.height;
    };

    Object.defineProperties( Texture.prototype, prototypeAccessors );

    return Texture;
}(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]));

function createWhiteTexture()
{
    var canvas = document.createElement('canvas');

    canvas.width = 16;
    canvas.height = 16;

    var context = canvas.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, 16, 16);

    return new Texture(new BaseTexture(new CanvasResource(canvas)));
}

function removeAllHandlers(tex)
{
    tex.destroy = function _emptyDestroy() { /* empty */ };
    tex.on = function _emptyOn() { /* empty */ };
    tex.once = function _emptyOnce() { /* empty */ };
    tex.emit = function _emptyEmit() { /* empty */ };
}

/**
 * An empty texture, used often to not have to create multiple empty textures.
 * Can not be destroyed.
 *
 * @static
 * @constant
 * @member {PIXI.Texture}
 */
Texture.EMPTY = new Texture(new BaseTexture());
removeAllHandlers(Texture.EMPTY);
removeAllHandlers(Texture.EMPTY.baseTexture);

/**
 * A white texture of 16x16 size, used for graphics and other things
 * Can not be destroyed.
 *
 * @static
 * @constant
 * @member {PIXI.Texture}
 */
Texture.WHITE = createWhiteTexture();
removeAllHandlers(Texture.WHITE);
removeAllHandlers(Texture.WHITE.baseTexture);

/**
 * A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * __Hint-2__: The actual memory allocation will happen on first render.
 * You shouldn't create renderTextures each frame just to delete them after, try to reuse them.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer();
 * let renderTexture = PIXI.RenderTexture.create(800, 600);
 * let sprite = PIXI.Sprite.from("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderer.render(sprite, renderTexture);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let renderTexture = new PIXI.RenderTexture.create(100, 100);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.Texture
 * @memberof PIXI
 */
var RenderTexture = /*@__PURE__*/(function (Texture) {
    function RenderTexture(baseRenderTexture, frame)
    {
        // support for legacy..
        var _legacyRenderer = null;

        if (!(baseRenderTexture instanceof BaseRenderTexture))
        {
            /* eslint-disable prefer-rest-params, no-console */
            var width = arguments[1];
            var height = arguments[2];
            var scaleMode = arguments[3];
            var resolution = arguments[4];

            // we have an old render texture..
            console.warn(("Please use RenderTexture.create(" + width + ", " + height + ") instead of the ctor directly."));
            _legacyRenderer = arguments[0];
            /* eslint-enable prefer-rest-params, no-console */

            frame = null;
            baseRenderTexture = new BaseRenderTexture({
                width: width,
                height: height,
                scaleMode: scaleMode,
                resolution: resolution,
            });
        }

        /**
         * The base texture object that this texture uses
         *
         * @member {PIXI.BaseTexture}
         */
        Texture.call(this, baseRenderTexture, frame);

        this.legacyRenderer = _legacyRenderer;

        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        this.valid = true;

        /**
         * Stores `sourceFrame` when this texture is inside current filter stack.
         * You can read it inside filters.
         *
         * @readonly
         * @member {PIXI.Rectangle}
         */
        this.filterFrame = null;

        /**
         * The key for pooled texture of FilterSystem
         * @protected
         * @member {string}
         */
        this.filterPoolKey = null;

        this.updateUvs();
    }

    if ( Texture ) RenderTexture.__proto__ = Texture;
    RenderTexture.prototype = Object.create( Texture && Texture.prototype );
    RenderTexture.prototype.constructor = RenderTexture;

    /**
     * Resizes the RenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     * @param {boolean} [resizeBaseTexture=true] - Should the baseTexture.width and height values be resized as well?
     */
    RenderTexture.prototype.resize = function resize (width, height, resizeBaseTexture)
    {
        if ( resizeBaseTexture === void 0 ) resizeBaseTexture = true;

        width = Math.ceil(width);
        height = Math.ceil(height);

        // TODO - could be not required..
        this.valid = (width > 0 && height > 0);

        this._frame.width = this.orig.width = width;
        this._frame.height = this.orig.height = height;

        if (resizeBaseTexture)
        {
            this.baseTexture.resize(width, height);
        }

        this.updateUvs();
    };

    /**
     * Changes the resolution of baseTexture, but does not change framebuffer size.
     *
     * @param {number} resolution - The new resolution to apply to RenderTexture
     */
    RenderTexture.prototype.setResolution = function setResolution (resolution)
    {
        var ref = this;
        var baseTexture = ref.baseTexture;

        if (baseTexture.resolution === resolution)
        {
            return;
        }

        baseTexture.setResolution(resolution);
        this.resize(baseTexture.width, baseTexture.height, false);
    };

    /**
     * A short hand way of creating a render texture.
     *
     * @param {object} [options] - Options
     * @param {number} [options.width=100] - The width of the render texture
     * @param {number} [options.height=100] - The height of the render texture
     * @param {number} [options.scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the texture being generated
     * @return {PIXI.RenderTexture} The new render texture
     */
    RenderTexture.create = function create (options)
    {
        // fallback, old-style: create(width, height, scaleMode, resolution)
        if (typeof options === 'number')
        {
            /* eslint-disable prefer-rest-params */
            options = {
                width: options,
                height: arguments[1],
                scaleMode: arguments[2],
                resolution: arguments[3],
            };
            /* eslint-enable prefer-rest-params */
        }

        return new RenderTexture(new BaseRenderTexture(options));
    };

    return RenderTexture;
}(Texture));

/**
 * Experimental!
 *
 * Texture pool, used by FilterSystem and plugins
 * Stores collection of temporary pow2 or screen-sized renderTextures
 *
 * If you use custom RenderTexturePool for your filters, you can use methods
 * `getFilterTexture` and `returnFilterTexture` same as in
 *
 * @class
 * @memberof PIXI
 */
var RenderTexturePool = function RenderTexturePool(textureOptions)
{
    this.texturePool = {};
    this.textureOptions = textureOptions || {};
    /**
     * Allow renderTextures of the same size as screen, not just pow2
     *
     * Automatically sets to true after `setScreenSize`
     *
     * @member {boolean}
     * @default false
     */
    this.enableFullScreen = false;

    this._pixelsWidth = 0;
    this._pixelsHeight = 0;
};

/**
 * creates of texture with params that were specified in pool constructor
 *
 * @param {number} realWidth width of texture in pixels
 * @param {number} realHeight height of texture in pixels
 * @returns {RenderTexture}
 */
RenderTexturePool.prototype.createTexture = function createTexture (realWidth, realHeight)
{
    var baseRenderTexture = new BaseRenderTexture(Object.assign({
        width: realWidth,
        height: realHeight,
        resolution: 1,
    }, this.textureOptions));

    return new RenderTexture(baseRenderTexture);
};

/**
 * Gets a Power-of-Two render texture or fullScreen texture
 *
 * @protected
 * @param {number} minWidth - The minimum width of the render texture in real pixels.
 * @param {number} minHeight - The minimum height of the render texture in real pixels.
 * @param {number} [resolution=1] - The resolution of the render texture.
 * @return {PIXI.RenderTexture} The new render texture.
 */
RenderTexturePool.prototype.getOptimalTexture = function getOptimalTexture (minWidth, minHeight, resolution)
{
        if ( resolution === void 0 ) resolution = 1;

    var key = RenderTexturePool.SCREEN_KEY;

    minWidth *= resolution;
    minHeight *= resolution;

    if (!this.enableFullScreen || minWidth !== this._pixelsWidth || minHeight !== this._pixelsHeight)
    {
        minWidth = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["nextPow2"])(minWidth);
        minHeight = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["nextPow2"])(minHeight);
        key = ((minWidth & 0xFFFF) << 16) | (minHeight & 0xFFFF);
    }

    if (!this.texturePool[key])
    {
        this.texturePool[key] = [];
    }

    var renderTexture = this.texturePool[key].pop();

    if (!renderTexture)
    {
        renderTexture = this.createTexture(minWidth, minHeight);
    }

    renderTexture.filterPoolKey = key;
    renderTexture.setResolution(resolution);

    return renderTexture;
};

/**
 * Gets extra texture of the same size as input renderTexture
 *
 * `getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`
 *
 * @param {PIXI.RenderTexture} input renderTexture from which size and resolution will be copied
 * @param {number} [resolution] override resolution of the renderTexture
 *  It overrides, it does not multiply
 * @returns {PIXI.RenderTexture}
 */
RenderTexturePool.prototype.getFilterTexture = function getFilterTexture (input, resolution)
{
    var filterTexture = this.getOptimalTexture(input.width, input.height, resolution || input.resolution);

    filterTexture.filterFrame = input.filterFrame;

    return filterTexture;
};

/**
 * Place a render texture back into the pool.
 * @param {PIXI.RenderTexture} renderTexture - The renderTexture to free
 */
RenderTexturePool.prototype.returnTexture = function returnTexture (renderTexture)
{
    var key = renderTexture.filterPoolKey;

    renderTexture.filterFrame = null;
    this.texturePool[key].push(renderTexture);
};

/**
 * Alias for returnTexture, to be compliant with FilterSystem interface
 * @param {PIXI.RenderTexture} renderTexture - The renderTexture to free
 */
RenderTexturePool.prototype.returnFilterTexture = function returnFilterTexture (renderTexture)
{
    this.returnTexture(renderTexture);
};

/**
 * Clears the pool
 *
 * @param {boolean} [destroyTextures=true] destroy all stored textures
 */
RenderTexturePool.prototype.clear = function clear (destroyTextures)
{
    destroyTextures = destroyTextures !== false;
    if (destroyTextures)
    {
        for (var i in this.texturePool)
        {
            var textures = this.texturePool[i];

            if (textures)
            {
                for (var j = 0; j < textures.length; j++)
                {
                    textures[j].destroy(true);
                }
            }
        }
    }

    this.texturePool = {};
};

/**
 * If screen size was changed, drops all screen-sized textures,
 * sets new screen size, sets `enableFullScreen` to true
 *
 * Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`
 *
 * @param {PIXI.ISize} size - Initial size of screen
 */
RenderTexturePool.prototype.setScreenSize = function setScreenSize (size)
{
    if (size.width === this._pixelsWidth
        && size.height === this._pixelsHeight)
    {
        return;
    }

    var screenKey = RenderTexturePool.SCREEN_KEY;
    var textures = this.texturePool[screenKey];

    this.enableFullScreen = size.width > 0 && size.height > 0;

    if (textures)
    {
        for (var j = 0; j < textures.length; j++)
        {
            textures[j].destroy(true);
        }
    }
    this.texturePool[screenKey] = [];

    this._pixelsWidth = size.width;
    this._pixelsHeight = size.height;
};

/**
 * Key that is used to store fullscreen renderTextures in a pool
 *
 * @static
 * @const {string}
 */
RenderTexturePool.SCREEN_KEY = 'screen';

/* eslint-disable max-len */

/**
 * Holds the information for a single attribute structure required to render geometry.
 *
 * This does not contain the actual data, but instead has a buffer id that maps to a {@link PIXI.Buffer}
 * This can include anything from positions, uvs, normals, colors etc.
 *
 * @class
 * @memberof PIXI
 */
var Attribute = function Attribute(buffer, size, normalized, type, stride, start, instance)
{
    if ( normalized === void 0 ) normalized = false;
    if ( type === void 0 ) type = 5126;

    this.buffer = buffer;
    this.size = size;
    this.normalized = normalized;
    this.type = type;
    this.stride = stride;
    this.start = start;
    this.instance = instance;
};

/**
 * Destroys the Attribute.
 */
Attribute.prototype.destroy = function destroy ()
{
    this.buffer = null;
};

/**
 * Helper function that creates an Attribute based on the information provided
 *
 * @static
 * @param {string} buffer  the id of the buffer that this attribute will look for
 * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
 * @param {Boolean} [normalized=false] should the data be normalized.
 * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
 * @param {Number} [type=PIXI.TYPES.FLOAT] what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
 * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
 *
 * @returns {PIXI.Attribute} A new {@link PIXI.Attribute} based on the information provided
 */
Attribute.from = function from (buffer, size, normalized, type, stride)
{
    return new Attribute(buffer, size, normalized, type, stride);
};

var UID = 0;
/* eslint-disable max-len */

/**
 * A wrapper for data so that it can be used and uploaded by WebGL
 *
 * @class
 * @memberof PIXI
 */
var Buffer = function Buffer(data, _static, index)
{
    if ( _static === void 0 ) _static = true;
    if ( index === void 0 ) index = false;

    /**
     * The data in the buffer, as a typed array
     *
     * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView}
     */
    this.data = data || new Float32Array(1);

    /**
     * A map of renderer IDs to webgl buffer
     *
     * @private
     * @member {object<number, GLBuffer>}
     */
    this._glBuffers = {};

    this._updateID = 0;

    this.index = index;

    this.static = _static;

    this.id = UID++;

    this.disposeRunner = new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('disposeBuffer', 2);
};

// TODO could explore flagging only a partial upload?
/**
 * flags this buffer as requiring an upload to the GPU
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} [data] the data to update in the buffer.
 */
Buffer.prototype.update = function update (data)
{
    this.data = data || this.data;
    this._updateID++;
};

/**
 * disposes WebGL resources that are connected to this geometry
 */
Buffer.prototype.dispose = function dispose ()
{
    this.disposeRunner.run(this, false);
};

/**
 * Destroys the buffer
 */
Buffer.prototype.destroy = function destroy ()
{
    this.dispose();

    this.data = null;
};

/**
 * Helper function that creates a buffer based on an array or TypedArray
 *
 * @static
 * @param {ArrayBufferView | number[]} data the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array.
 * @return {PIXI.Buffer} A new Buffer based on the data provided.
 */
Buffer.from = function from (data)
{
    if (data instanceof Array)
    {
        data = new Float32Array(data);
    }

    return new Buffer(data);
};

function getBufferType(array)
{
    if (array.BYTES_PER_ELEMENT === 4)
    {
        if (array instanceof Float32Array)
        {
            return 'Float32Array';
        }
        else if (array instanceof Uint32Array)
        {
            return 'Uint32Array';
        }

        return 'Int32Array';
    }
    else if (array.BYTES_PER_ELEMENT === 2)
    {
        if (array instanceof Uint16Array)
        {
            return 'Uint16Array';
        }
    }
    else if (array.BYTES_PER_ELEMENT === 1)
    {
        if (array instanceof Uint8Array)
        {
            return 'Uint8Array';
        }
    }

    // TODO map out the rest of the array elements!
    return null;
}

/* eslint-disable object-shorthand */
var map = {
    Float32Array: Float32Array,
    Uint32Array: Uint32Array,
    Int32Array: Int32Array,
    Uint8Array: Uint8Array,
};

function interleaveTypedArrays(arrays, sizes)
{
    var outSize = 0;
    var stride = 0;
    var views = {};

    for (var i = 0; i < arrays.length; i++)
    {
        stride += sizes[i];
        outSize += arrays[i].length;
    }

    var buffer = new ArrayBuffer(outSize * 4);

    var out = null;
    var littleOffset = 0;

    for (var i$1 = 0; i$1 < arrays.length; i$1++)
    {
        var size = sizes[i$1];
        var array = arrays[i$1];

        var type = getBufferType(array);

        if (!views[type])
        {
            views[type] = new map[type](buffer);
        }

        out = views[type];

        for (var j = 0; j < array.length; j++)
        {
            var indexStart = ((j / size | 0) * stride) + littleOffset;
            var index = j % size;

            out[indexStart + index] = array[j];
        }

        littleOffset += size;
    }

    return new Float32Array(buffer);
}

var byteSizeMap = { 5126: 4, 5123: 2, 5121: 1 };
var UID$1 = 0;

/* eslint-disable object-shorthand */
var map$1 = {
    Float32Array: Float32Array,
    Uint32Array: Uint32Array,
    Int32Array: Int32Array,
    Uint8Array: Uint8Array,
    Uint16Array: Uint16Array,
};

/* eslint-disable max-len */

/**
 * The Geometry represents a model. It consists of two components:
 * - GeometryStyle - The structure of the model such as the attributes layout
 * - GeometryData - the data of the model - this consists of buffers.
 * This can include anything from positions, uvs, normals, colors etc.
 *
 * Geometry can be defined without passing in a style or data if required (thats how I prefer!)
 *
 * ```js
 * let geometry = new PIXI.Geometry();
 *
 * geometry.addAttribute('positions', [0, 0, 100, 0, 100, 100, 0, 100], 2);
 * geometry.addAttribute('uvs', [0,0,1,0,1,1,0,1],2)
 * geometry.addIndex([0,1,2,1,3,2])
 *
 * ```
 * @class
 * @memberof PIXI
 */
var Geometry = function Geometry(buffers, attributes)
{
    if ( buffers === void 0 ) buffers = [];
    if ( attributes === void 0 ) attributes = {};

    this.buffers = buffers;

    this.indexBuffer = null;

    this.attributes = attributes;

    /**
     * A map of renderer IDs to webgl VAOs
     *
     * @protected
     * @type {object}
     */
    this.glVertexArrayObjects = {};

    this.id = UID$1++;

    this.instanced = false;

    /**
     * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
     * @member {number}
     * @default 1
     */
    this.instanceCount = 1;

    this.disposeRunner = new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('disposeGeometry', 2);

    /**
     * Count of existing (not destroyed) meshes that reference this geometry
     * @member {number}
     */
    this.refCount = 0;
};

/**
*
* Adds an attribute to the geometry
*
* @param {String} id - the name of the attribute (matching up to a shader)
* @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
* @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
* @param {Boolean} [normalized=false] should the data be normalized.
* @param {Number} [type=PIXI.TYPES.FLOAT] what type of number is the attribute. Check {PIXI.TYPES} to see the ones available
* @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
* @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
*
* @return {PIXI.Geometry} returns self, useful for chaining.
*/
Geometry.prototype.addAttribute = function addAttribute (id, buffer, size, normalized, type, stride, start, instance)
{
        if ( normalized === void 0 ) normalized = false;
        if ( instance === void 0 ) instance = false;

    if (!buffer)
    {
        throw new Error('You must pass a buffer when creating an attribute');
    }

    // check if this is a buffer!
    if (!buffer.data)
    {
        // its an array!
        if (buffer instanceof Array)
        {
            buffer = new Float32Array(buffer);
        }

        buffer = new Buffer(buffer);
    }

    var ids = id.split('|');

    if (ids.length > 1)
    {
        for (var i = 0; i < ids.length; i++)
        {
            this.addAttribute(ids[i], buffer, size, normalized, type);
        }

        return this;
    }

    var bufferIndex = this.buffers.indexOf(buffer);

    if (bufferIndex === -1)
    {
        this.buffers.push(buffer);
        bufferIndex = this.buffers.length - 1;
    }

    this.attributes[id] = new Attribute(bufferIndex, size, normalized, type, stride, start, instance);

    // assuming that if there is instanced data then this will be drawn with instancing!
    this.instanced = this.instanced || instance;

    return this;
};

/**
 * returns the requested attribute
 *
 * @param {String} id  the name of the attribute required
 * @return {PIXI.Attribute} the attribute requested.
 */
Geometry.prototype.getAttribute = function getAttribute (id)
{
    return this.attributes[id];
};

/**
 * returns the requested buffer
 *
 * @param {String} id  the name of the buffer required
 * @return {PIXI.Buffer} the buffer requested.
 */
Geometry.prototype.getBuffer = function getBuffer (id)
{
    return this.buffers[this.getAttribute(id).buffer];
};

/**
*
* Adds an index buffer to the geometry
* The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
*
* @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
* @return {PIXI.Geometry} returns self, useful for chaining.
*/
Geometry.prototype.addIndex = function addIndex (buffer)
{
    if (!buffer.data)
    {
        // its an array!
        if (buffer instanceof Array)
        {
            buffer = new Uint16Array(buffer);
        }

        buffer = new Buffer(buffer);
    }

    buffer.index = true;
    this.indexBuffer = buffer;

    if (this.buffers.indexOf(buffer) === -1)
    {
        this.buffers.push(buffer);
    }

    return this;
};

/**
 * returns the index buffer
 *
 * @return {PIXI.Buffer} the index buffer.
 */
Geometry.prototype.getIndex = function getIndex ()
{
    return this.indexBuffer;
};

/**
 * this function modifies the structure so that all current attributes become interleaved into a single buffer
 * This can be useful if your model remains static as it offers a little performance boost
 *
 * @return {PIXI.Geometry} returns self, useful for chaining.
 */
Geometry.prototype.interleave = function interleave ()
{
    // a simple check to see if buffers are already interleaved..
    if (this.buffers.length === 1 || (this.buffers.length === 2 && this.indexBuffer)) { return this; }

    // assume already that no buffers are interleaved
    var arrays = [];
    var sizes = [];
    var interleavedBuffer = new Buffer();
    var i;

    for (i in this.attributes)
    {
        var attribute = this.attributes[i];

        var buffer = this.buffers[attribute.buffer];

        arrays.push(buffer.data);

        sizes.push((attribute.size * byteSizeMap[attribute.type]) / 4);

        attribute.buffer = 0;
    }

    interleavedBuffer.data = interleaveTypedArrays(arrays, sizes);

    for (i = 0; i < this.buffers.length; i++)
    {
        if (this.buffers[i] !== this.indexBuffer)
        {
            this.buffers[i].destroy();
        }
    }

    this.buffers = [interleavedBuffer];

    if (this.indexBuffer)
    {
        this.buffers.push(this.indexBuffer);
    }

    return this;
};

Geometry.prototype.getSize = function getSize ()
{
    for (var i in this.attributes)
    {
        var attribute = this.attributes[i];
        var buffer = this.buffers[attribute.buffer];

        return buffer.data.length / ((attribute.stride / 4) || attribute.size);
    }

    return 0;
};

/**
 * disposes WebGL resources that are connected to this geometry
 */
Geometry.prototype.dispose = function dispose ()
{
    this.disposeRunner.run(this, false);
};

/**
 * Destroys the geometry.
 */
Geometry.prototype.destroy = function destroy ()
{
    this.dispose();

    this.buffers = null;
    this.indexBuffer = null;
    this.attributes = null;
};

/**
 * returns a clone of the geometry
 *
 * @returns {PIXI.Geometry} a new clone of this geometry
 */
Geometry.prototype.clone = function clone ()
{
    var geometry = new Geometry();

    for (var i = 0; i < this.buffers.length; i++)
    {
        geometry.buffers[i] = new Buffer(this.buffers[i].data.slice());
    }

    for (var i$1 in this.attributes)
    {
        var attrib = this.attributes[i$1];

        geometry.attributes[i$1] = new Attribute(
            attrib.buffer,
            attrib.size,
            attrib.normalized,
            attrib.type,
            attrib.stride,
            attrib.start,
            attrib.instance
        );
    }

    if (this.indexBuffer)
    {
        geometry.indexBuffer = geometry.buffers[this.buffers.indexOf(this.indexBuffer)];
        geometry.indexBuffer.index = true;
    }

    return geometry;
};

/**
 * merges an array of geometries into a new single one
 * geometry attribute styles must match for this operation to work
 *
 * @param {PIXI.Geometry[]} geometries array of geometries to merge
 * @returns {PIXI.Geometry} shiny new geometry!
 */
Geometry.merge = function merge (geometries)
{
    // todo add a geometry check!
    // also a size check.. cant be too big!]

    var geometryOut = new Geometry();

    var arrays = [];
    var sizes = [];
    var offsets = [];

    var geometry;

    // pass one.. get sizes..
    for (var i = 0; i < geometries.length; i++)
    {
        geometry = geometries[i];

        for (var j = 0; j < geometry.buffers.length; j++)
        {
            sizes[j] = sizes[j] || 0;
            sizes[j] += geometry.buffers[j].data.length;
            offsets[j] = 0;
        }
    }

    // build the correct size arrays..
    for (var i$1 = 0; i$1 < geometry.buffers.length; i$1++)
    {
        // TODO types!
        arrays[i$1] = new map$1[getBufferType(geometry.buffers[i$1].data)](sizes[i$1]);
        geometryOut.buffers[i$1] = new Buffer(arrays[i$1]);
    }

    // pass to set data..
    for (var i$2 = 0; i$2 < geometries.length; i$2++)
    {
        geometry = geometries[i$2];

        for (var j$1 = 0; j$1 < geometry.buffers.length; j$1++)
        {
            arrays[j$1].set(geometry.buffers[j$1].data, offsets[j$1]);
            offsets[j$1] += geometry.buffers[j$1].data.length;
        }
    }

    geometryOut.attributes = geometry.attributes;

    if (geometry.indexBuffer)
    {
        geometryOut.indexBuffer = geometryOut.buffers[geometry.buffers.indexOf(geometry.indexBuffer)];
        geometryOut.indexBuffer.index = true;

        var offset = 0;
        var stride = 0;
        var offset2 = 0;
        var bufferIndexToCount = 0;

        // get a buffer
        for (var i$3 = 0; i$3 < geometry.buffers.length; i$3++)
        {
            if (geometry.buffers[i$3] !== geometry.indexBuffer)
            {
                bufferIndexToCount = i$3;
                break;
            }
        }

        // figure out the stride of one buffer..
        for (var i$4 in geometry.attributes)
        {
            var attribute = geometry.attributes[i$4];

            if ((attribute.buffer | 0) === bufferIndexToCount)
            {
                stride += ((attribute.size * byteSizeMap[attribute.type]) / 4);
            }
        }

        // time to off set all indexes..
        for (var i$5 = 0; i$5 < geometries.length; i$5++)
        {
            var indexBufferData = geometries[i$5].indexBuffer.data;

            for (var j$2 = 0; j$2 < indexBufferData.length; j$2++)
            {
                geometryOut.indexBuffer.data[j$2 + offset2] += offset;
            }

            offset += geometry.buffers[bufferIndexToCount].data.length / (stride);
            offset2 += indexBufferData.length;
        }
    }

    return geometryOut;
};

/**
 * Helper class to create a quad
 *
 * @class
 * @memberof PIXI
 */
var Quad = /*@__PURE__*/(function (Geometry) {
    function Quad()
    {
        Geometry.call(this);

        this.addAttribute('aVertexPosition', [
            0, 0,
            1, 0,
            1, 1,
            0, 1 ])
            .addIndex([0, 1, 3, 2]);
    }

    if ( Geometry ) Quad.__proto__ = Geometry;
    Quad.prototype = Object.create( Geometry && Geometry.prototype );
    Quad.prototype.constructor = Quad;

    return Quad;
}(Geometry));

/**
 * Helper class to create a quad with uvs like in v4
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.Geometry
 */
var QuadUv = /*@__PURE__*/(function (Geometry) {
    function QuadUv()
    {
        Geometry.call(this);

        /**
         * An array of vertices
         *
         * @member {Float32Array}
         */
        this.vertices = new Float32Array([
            -1, -1,
            1, -1,
            1, 1,
            -1, 1 ]);

        /**
         * The Uvs of the quad
         *
         * @member {Float32Array}
         */
        this.uvs = new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1 ]);

        this.vertexBuffer = new Buffer(this.vertices);
        this.uvBuffer = new Buffer(this.uvs);

        this.addAttribute('aVertexPosition', this.vertexBuffer)
            .addAttribute('aTextureCoord', this.uvBuffer)
            .addIndex([0, 1, 2, 0, 2, 3]);
    }

    if ( Geometry ) QuadUv.__proto__ = Geometry;
    QuadUv.prototype = Object.create( Geometry && Geometry.prototype );
    QuadUv.prototype.constructor = QuadUv;

    /**
     * Maps two Rectangle to the quad.
     *
     * @param {PIXI.Rectangle} targetTextureFrame - the first rectangle
     * @param {PIXI.Rectangle} destinationFrame - the second rectangle
     * @return {PIXI.Quad} Returns itself.
     */
    QuadUv.prototype.map = function map (targetTextureFrame, destinationFrame)
    {
        var x = 0; // destinationFrame.x / targetTextureFrame.width;
        var y = 0; // destinationFrame.y / targetTextureFrame.height;

        this.uvs[0] = x;
        this.uvs[1] = y;

        this.uvs[2] = x + (destinationFrame.width / targetTextureFrame.width);
        this.uvs[3] = y;

        this.uvs[4] = x + (destinationFrame.width / targetTextureFrame.width);
        this.uvs[5] = y + (destinationFrame.height / targetTextureFrame.height);

        this.uvs[6] = x;
        this.uvs[7] = y + (destinationFrame.height / targetTextureFrame.height);

        x = destinationFrame.x;
        y = destinationFrame.y;

        this.vertices[0] = x;
        this.vertices[1] = y;

        this.vertices[2] = x + destinationFrame.width;
        this.vertices[3] = y;

        this.vertices[4] = x + destinationFrame.width;
        this.vertices[5] = y + destinationFrame.height;

        this.vertices[6] = x;
        this.vertices[7] = y + destinationFrame.height;

        this.invalidate();

        return this;
    };

    /**
     * legacy upload method, just marks buffers dirty
     * @returns {PIXI.QuadUv} Returns itself.
     */
    QuadUv.prototype.invalidate = function invalidate ()
    {
        this.vertexBuffer._updateID++;
        this.uvBuffer._updateID++;

        return this;
    };

    return QuadUv;
}(Geometry));

var UID$2 = 0;

/**
 * Uniform group holds uniform map and some ID's for work
 *
 * @class
 * @memberof PIXI
 */
var UniformGroup = function UniformGroup(uniforms, _static)
{
    /**
     * uniform values
     * @member {object}
     * @readonly
     */
    this.uniforms = uniforms;

    /**
     * Its a group and not a single uniforms
     * @member {boolean}
     * @readonly
     * @default true
     */
    this.group = true;

    // lets generate this when the shader ?
    this.syncUniforms = {};

    /**
     * dirty version
     * @protected
     * @member {number}
     */
    this.dirtyId = 0;

    /**
     * unique id
     * @protected
     * @member {number}
     */
    this.id = UID$2++;

    /**
     * Uniforms wont be changed after creation
     * @member {boolean}
     */
    this.static = !!_static;
};

UniformGroup.prototype.update = function update ()
{
    this.dirtyId++;
};

UniformGroup.prototype.add = function add (name, uniforms, _static)
{
    this.uniforms[name] = new UniformGroup(uniforms, _static);
};

UniformGroup.from = function from (uniforms, _static)
{
    return new UniformGroup(uniforms, _static);
};

/**
 * System plugin to the renderer to manage filter states.
 *
 * @class
 * @private
 */
var FilterState = function FilterState()
{
    this.renderTexture = null;

    /**
     * Target of the filters
     * We store for case when custom filter wants to know the element it was applied on
     * @member {PIXI.DisplayObject}
     * @private
     */
    this.target = null;

    /**
     * Compatibility with PixiJS v4 filters
     * @member {boolean}
     * @default false
     * @private
     */
    this.legacy = false;

    /**
     * Resolution of filters
     * @member {number}
     * @default 1
     * @private
     */
    this.resolution = 1;

    // next three fields are created only for root
    // re-assigned for everything else

    /**
     * Source frame
     * @member {PIXI.Rectangle}
     * @private
     */
    this.sourceFrame = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();

    /**
     * Destination frame
     * @member {PIXI.Rectangle}
     * @private
     */
    this.destinationFrame = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();

    /**
     * Collection of filters
     * @member {PIXI.Filter[]}
     * @private
     */
    this.filters = [];
};

/**
 * clears the state
 * @private
 */
FilterState.prototype.clear = function clear ()
{
    this.target = null;
    this.filters = null;
    this.renderTexture = null;
};

/**
 * System plugin to the renderer to manage the filters.
 *
 * @class
 * @memberof PIXI.systems
 * @extends PIXI.System
 */
var FilterSystem = /*@__PURE__*/(function (System) {
    function FilterSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * List of filters for the FilterSystem
         * @member {Object[]}
         * @readonly
         */
        this.defaultFilterStack = [{}];

        /**
         * stores a bunch of PO2 textures used for filtering
         * @member {Object}
         */
        this.texturePool = new RenderTexturePool();

        this.texturePool.setScreenSize(renderer.view);

        /**
         * a pool for storing filter states, save us creating new ones each tick
         * @member {Object[]}
         */
        this.statePool = [];

        /**
         * A very simple geometry used when drawing a filter effect to the screen
         * @member {PIXI.Quad}
         */
        this.quad = new Quad();

        /**
         * Quad UVs
         * @member {PIXI.QuadUv}
         */
        this.quadUv = new QuadUv();

        /**
         * Temporary rect for maths
         * @type {PIXI.Rectangle}
         */
        this.tempRect = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();

        /**
         * Active state
         * @member {object}
         */
        this.activeState = {};

        /**
         * This uniform group is attached to filter uniforms when used
         * @member {PIXI.UniformGroup}
         * @property {PIXI.Rectangle} outputFrame
         * @property {Float32Array} inputSize
         * @property {Float32Array} inputPixel
         * @property {Float32Array} inputClamp
         * @property {Number} resolution
         * @property {Float32Array} filterArea
         * @property {Fload32Array} filterClamp
         */
        this.globalUniforms = new UniformGroup({
            outputFrame: this.tempRect,
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,

            // legacy variables
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4),
        }, true);

        this._pixelsWidth = renderer.view.width;
        this._pixelsHeight = renderer.view.height;
    }

    if ( System ) FilterSystem.__proto__ = System;
    FilterSystem.prototype = Object.create( System && System.prototype );
    FilterSystem.prototype.constructor = FilterSystem;

    /**
     * Adds a new filter to the System.
     *
     * @param {PIXI.DisplayObject} target - The target of the filter to render.
     * @param {PIXI.Filter[]} filters - The filters to apply.
     */
    FilterSystem.prototype.push = function push (target, filters)
    {
        var renderer = this.renderer;
        var filterStack = this.defaultFilterStack;
        var state = this.statePool.pop() || new FilterState();

        var resolution = filters[0].resolution;
        var padding = filters[0].padding;
        var autoFit = filters[0].autoFit;
        var legacy = filters[0].legacy;

        for (var i = 1; i < filters.length; i++)
        {
            var filter =  filters[i];

            // lets use the lowest resolution..
            resolution = Math.min(resolution, filter.resolution);
            // and the largest amount of padding!
            padding = Math.max(padding, filter.padding);
            // only auto fit if all filters are autofit
            autoFit = autoFit || filter.autoFit;

            legacy = legacy || filter.legacy;
        }

        if (filterStack.length === 1)
        {
            this.defaultFilterStack[0].renderTexture = renderer.renderTexture.current;
        }

        filterStack.push(state);

        state.resolution = resolution;

        state.legacy = legacy;

        state.target = target;

        state.sourceFrame.copyFrom(target.filterArea || target.getBounds(true));

        state.sourceFrame.pad(padding);
        if (autoFit)
        {
            state.sourceFrame.fit(this.renderer.renderTexture.sourceFrame);
        }

        // round to whole number based on resolution
        state.sourceFrame.ceil(resolution);

        state.renderTexture = this.getOptimalFilterTexture(state.sourceFrame.width, state.sourceFrame.height, resolution);
        state.filters = filters;

        state.destinationFrame.width = state.renderTexture.width;
        state.destinationFrame.height = state.renderTexture.height;

        state.renderTexture.filterFrame = state.sourceFrame;

        renderer.renderTexture.bind(state.renderTexture, state.sourceFrame);// /, state.destinationFrame);
        renderer.renderTexture.clear();
    };

    /**
     * Pops off the filter and applies it.
     *
     */
    FilterSystem.prototype.pop = function pop ()
    {
        var filterStack = this.defaultFilterStack;
        var state = filterStack.pop();
        var filters = state.filters;

        this.activeState = state;

        var globalUniforms = this.globalUniforms.uniforms;

        globalUniforms.outputFrame = state.sourceFrame;
        globalUniforms.resolution = state.resolution;

        var inputSize = globalUniforms.inputSize;
        var inputPixel = globalUniforms.inputPixel;
        var inputClamp = globalUniforms.inputClamp;

        inputSize[0] = state.destinationFrame.width;
        inputSize[1] = state.destinationFrame.height;
        inputSize[2] = 1.0 / inputSize[0];
        inputSize[3] = 1.0 / inputSize[1];

        inputPixel[0] = inputSize[0] * state.resolution;
        inputPixel[1] = inputSize[1] * state.resolution;
        inputPixel[2] = 1.0 / inputPixel[0];
        inputPixel[3] = 1.0 / inputPixel[1];

        inputClamp[0] = 0.5 * inputPixel[2];
        inputClamp[1] = 0.5 * inputPixel[3];
        inputClamp[2] = (state.sourceFrame.width * inputSize[2]) - (0.5 * inputPixel[2]);
        inputClamp[3] = (state.sourceFrame.height * inputSize[3]) - (0.5 * inputPixel[3]);

        // only update the rect if its legacy..
        if (state.legacy)
        {
            var filterArea = globalUniforms.filterArea;

            filterArea[0] = state.destinationFrame.width;
            filterArea[1] = state.destinationFrame.height;
            filterArea[2] = state.sourceFrame.x;
            filterArea[3] = state.sourceFrame.y;

            globalUniforms.filterClamp = globalUniforms.inputClamp;
        }

        this.globalUniforms.update();

        var lastState = filterStack[filterStack.length - 1];

        if (filters.length === 1)
        {
            filters[0].apply(this, state.renderTexture, lastState.renderTexture, false, state);

            this.returnFilterTexture(state.renderTexture);
        }
        else
        {
            var flip = state.renderTexture;
            var flop = this.getOptimalFilterTexture(
                flip.width,
                flip.height,
                state.resolution
            );

            flop.filterFrame = flip.filterFrame;

            var i = 0;

            for (i = 0; i < filters.length - 1; ++i)
            {
                filters[i].apply(this, flip, flop, true, state);

                var t = flip;

                flip = flop;
                flop = t;
            }

            filters[i].apply(this, flip, lastState.renderTexture, false, state);

            this.returnFilterTexture(flip);
            this.returnFilterTexture(flop);
        }

        state.clear();
        this.statePool.push(state);
    };

    /**
     * Draws a filter.
     *
     * @param {PIXI.Filter} filter - The filter to draw.
     * @param {PIXI.RenderTexture} input - The input render target.
     * @param {PIXI.RenderTexture} output - The target to output to.
     * @param {boolean} clear - Should the output be cleared before rendering to it
     */
    FilterSystem.prototype.applyFilter = function applyFilter (filter, input, output, clear)
    {
        var renderer = this.renderer;

        renderer.renderTexture.bind(output, output ? output.filterFrame : null);

        if (clear)
        {
            // gl.disable(gl.SCISSOR_TEST);
            renderer.renderTexture.clear();
            // gl.enable(gl.SCISSOR_TEST);
        }

        // set the uniforms..
        filter.uniforms.uSampler = input;
        filter.uniforms.filterGlobals = this.globalUniforms;

        // TODO make it so that the order of this does not matter..
        // because it does at the moment cos of global uniforms.
        // they need to get resynced

        renderer.state.set(filter.state);
        renderer.shader.bind(filter);

        if (filter.legacy)
        {
            this.quadUv.map(input._frame, input.filterFrame);

            renderer.geometry.bind(this.quadUv);
            renderer.geometry.draw(_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* DRAW_MODES */ "c"].TRIANGLES);
        }
        else
        {
            renderer.geometry.bind(this.quad);
            renderer.geometry.draw(_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* DRAW_MODES */ "c"].TRIANGLE_STRIP);
        }
    };

    /**
     * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
     *
     * Use `outputMatrix * vTextureCoord` in the shader.
     *
     * @param {PIXI.Matrix} outputMatrix - The matrix to output to.
     * @param {PIXI.Sprite} sprite - The sprite to map to.
     * @return {PIXI.Matrix} The mapped matrix.
     */
    FilterSystem.prototype.calculateSpriteMatrix = function calculateSpriteMatrix (outputMatrix, sprite)
    {
        var ref = this.activeState;
        var sourceFrame = ref.sourceFrame;
        var destinationFrame = ref.destinationFrame;
        var ref$1 = sprite._texture;
        var orig = ref$1.orig;
        var mappedMatrix = outputMatrix.set(destinationFrame.width, 0, 0,
            destinationFrame.height, sourceFrame.x, sourceFrame.y);
        var worldTransform = sprite.worldTransform.copyTo(_pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"].TEMP_MATRIX);

        worldTransform.invert();
        mappedMatrix.prepend(worldTransform);
        mappedMatrix.scale(1.0 / orig.width, 1.0 / orig.height);
        mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);

        return mappedMatrix;
    };

    /**
     * Destroys this Filter System.
     */
    FilterSystem.prototype.destroy = function destroy ()
    {
        // Those textures has to be destroyed by RenderTextureSystem or FramebufferSystem
        this.texturePool.clear(false);
    };

    /**
     * Gets a Power-of-Two render texture or fullScreen texture
     *
     * @protected
     * @param {number} minWidth - The minimum width of the render texture in real pixels.
     * @param {number} minHeight - The minimum height of the render texture in real pixels.
     * @param {number} [resolution=1] - The resolution of the render texture.
     * @return {PIXI.RenderTexture} The new render texture.
     */
    FilterSystem.prototype.getOptimalFilterTexture = function getOptimalFilterTexture (minWidth, minHeight, resolution)
    {
        if ( resolution === void 0 ) resolution = 1;

        return this.texturePool.getOptimalTexture(minWidth, minHeight, resolution);
    };

    /**
     * Gets extra render texture to use inside current filter
     * To be compliant with older filters, you can use params in any order
     *
     * @param {PIXI.RenderTexture} [input] renderTexture from which size and resolution will be copied
     * @param {number} [resolution] override resolution of the renderTexture
     * @returns {PIXI.RenderTexture}
     */
    FilterSystem.prototype.getFilterTexture = function getFilterTexture (input, resolution)
    {
        if (typeof input === 'number')
        {
            var swap = input;

            input = resolution;
            resolution = swap;
        }

        input = input || this.activeState.renderTexture;

        var filterTexture = this.texturePool.getOptimalTexture(input.width, input.height, resolution || input.resolution);

        filterTexture.filterFrame = input.filterFrame;

        return filterTexture;
    };

    /**
     * Frees a render texture back into the pool.
     *
     * @param {PIXI.RenderTexture} renderTexture - The renderTarget to free
     */
    FilterSystem.prototype.returnFilterTexture = function returnFilterTexture (renderTexture)
    {
        this.texturePool.returnTexture(renderTexture);
    };

    /**
     * Empties the texture pool.
     */
    FilterSystem.prototype.emptyPool = function emptyPool ()
    {
        this.texturePool.clear(true);
    };

    /**
     * calls `texturePool.resize()`, affects fullScreen renderTextures
     */
    FilterSystem.prototype.resize = function resize ()
    {
        this.texturePool.setScreenSize(this.renderer.view);
    };

    return FilterSystem;
}(System));

/**
 * Base for a common object renderer that can be used as a
 * system renderer plugin.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI
 */
var ObjectRenderer = function ObjectRenderer(renderer)
{
    /**
     * The renderer this manager works for.
     *
     * @member {PIXI.Renderer}
     */
    this.renderer = renderer;
};

/**
 * Stub method that should be used to empty the current
 * batch by rendering objects now.
 */
ObjectRenderer.prototype.flush = function flush ()
{
    // flush!
};

/**
 * Generic destruction method that frees all resources. This
 * should be called by subclasses.
 */
ObjectRenderer.prototype.destroy = function destroy ()
{
    this.renderer = null;
};

/**
 * Stub method that initializes any state required before
 * rendering starts. It is different from the `prerender`
 * signal, which occurs every frame, in that it is called
 * whenever an object requests _this_ renderer specifically.
 */
ObjectRenderer.prototype.start = function start ()
{
    // set the shader..
};

/**
 * Stops the renderer. It should free up any state and
 * become dormant.
 */
ObjectRenderer.prototype.stop = function stop ()
{
    this.flush();
};

/**
 * Keeps the object to render. It doesn't have to be
 * rendered immediately.
 *
 * @param {PIXI.DisplayObject} object - The object to render.
 */
ObjectRenderer.prototype.render = function render (object) // eslint-disable-line no-unused-vars
{
    // render the object
};

/**
 * System plugin to the renderer to manage batching.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var BatchSystem = /*@__PURE__*/(function (System) {
    function BatchSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * An empty renderer.
         *
         * @member {PIXI.ObjectRenderer}
         */
        this.emptyRenderer = new ObjectRenderer(renderer);

        /**
         * The currently active ObjectRenderer.
         *
         * @member {PIXI.ObjectRenderer}
         */
        this.currentRenderer = this.emptyRenderer;
    }

    if ( System ) BatchSystem.__proto__ = System;
    BatchSystem.prototype = Object.create( System && System.prototype );
    BatchSystem.prototype.constructor = BatchSystem;

    /**
     * Changes the current renderer to the one given in parameter
     *
     * @param {PIXI.ObjectRenderer} objectRenderer - The object renderer to use.
     */
    BatchSystem.prototype.setObjectRenderer = function setObjectRenderer (objectRenderer)
    {
        if (this.currentRenderer === objectRenderer)
        {
            return;
        }

        this.currentRenderer.stop();
        this.currentRenderer = objectRenderer;

        this.currentRenderer.start();
    };

    /**
     * This should be called if you wish to do some custom rendering
     * It will basically render anything that may be batched up such as sprites
     */
    BatchSystem.prototype.flush = function flush ()
    {
        this.setObjectRenderer(this.emptyRenderer);
    };

    /**
     * Reset the system to an empty renderer
     */
    BatchSystem.prototype.reset = function reset ()
    {
        this.setObjectRenderer(this.emptyRenderer);
    };

    /**
     * Handy function for batch renderers: copies bound textures in first maxTextures locations to array
     * sets actual _batchLocation for them
     *
     * @param arr
     * @param maxTextures
     */
    BatchSystem.prototype.copyBoundTextures = function copyBoundTextures (arr, maxTextures)
    {
        var ref = this.renderer.texture;
        var boundTextures = ref.boundTextures;

        for (var i = maxTextures - 1; i >= 0; --i)
        {
            arr[i] = boundTextures[i] || null;
            if (arr[i])
            {
                arr[i]._batchLocation = i;
            }
        }
    };

    /**
     * Assigns batch locations to textures in array based on boundTextures state.
     * All textures in texArray should have `_batchEnabled = _batchId`,
     * and their count should be less than `maxTextures`.
     *
     * @param {PIXI.BatchTextureArray} texArray textures to bound
     * @param {PIXI.BaseTexture[]} boundTextures current state of bound textures
     * @param {number} batchId marker for _batchEnabled param of textures in texArray
     * @param {number} maxTextures number of texture locations to manipulate
     */
    BatchSystem.prototype.boundArray = function boundArray (texArray, boundTextures, batchId, maxTextures)
    {
        var elements = texArray.elements;
        var ids = texArray.ids;
        var count = texArray.count;
        var j = 0;

        for (var i = 0; i < count; i++)
        {
            var tex = elements[i];
            var loc = tex._batchLocation;

            if (loc >= 0 && loc < maxTextures
                && boundTextures[loc] === tex)
            {
                ids[i] = loc;
                continue;
            }

            while (j < maxTextures)
            {
                var bound = boundTextures[j];

                if (bound && bound._batchEnabled === batchId
                    && bound._batchLocation === j)
                {
                    j++;
                    continue;
                }

                ids[i] = j;
                tex._batchLocation = j;
                boundTextures[j] = tex;
                break;
            }
        }
    };

    return BatchSystem;
}(System));

/**
 * The maximum support for using WebGL. If a device does not
 * support WebGL version, for instance WebGL 2, it will still
 * attempt to fallback support to WebGL 1. If you want to
 * explicitly remove feature support to target a more stable
 * baseline, prefer a lower environment.
 *
 * Due to {@link https://bugs.chromium.org/p/chromium/issues/detail?id=934823|bug in chromium}
 * we disable webgl2 by default for all non-apple mobile devices.
 *
 * @static
 * @name PREFER_ENV
 * @memberof PIXI.settings
 * @type {number}
 * @default PIXI.ENV.WEBGL2
 */
_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PREFER_ENV = _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["isMobile"].any ? _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ENV */ "d"].WEBGL : _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ENV */ "d"].WEBGL2;

/**
 * If set to `true`, Textures and BaseTexture objects stored
 * in the caches ({@link PIXI.utils.TextureCache TextureCache} and
 * {@link PIXI.utils.BaseTextureCache BaseTextureCache}) can *only* be
 * used when calling {@link PIXI.Texture.from Texture.from} or
 * {@link PIXI.BaseTexture.from BaseTexture.from}.
 * Otherwise, these `from` calls throw an exception. Using this property
 * can be useful if you want to enforce preloading all assets with
 * {@link PIXI.Loader Loader}.
 *
 * @static
 * @name STRICT_TEXTURE_CACHE
 * @memberof PIXI.settings
 * @type {boolean}
 * @default false
 */
_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].STRICT_TEXTURE_CACHE = false;

var CONTEXT_UID = 0;

/**
 * System plugin to the renderer to manage the context.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var ContextSystem = /*@__PURE__*/(function (System) {
    function ContextSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * Either 1 or 2 to reflect the WebGL version being used
         * @member {number}
         * @readonly
         */
        this.webGLVersion = 1;

        /**
         * Extensions being used
         * @member {object}
         * @readonly
         * @property {WEBGL_draw_buffers} drawBuffers - WebGL v1 extension
         * @property {WEBGL_depth_texture} depthTexture - WebGL v1 extension
         * @property {OES_texture_float} floatTexture - WebGL v1 extension
         * @property {WEBGL_lose_context} loseContext - WebGL v1 extension
         * @property {OES_vertex_array_object} vertexArrayObject - WebGL v1 extension
         * @property {EXT_texture_filter_anisotropic} anisotropicFiltering - WebGL v1 and v2 extension
         */
        this.extensions = {};

        // Bind functions
        this.handleContextLost = this.handleContextLost.bind(this);
        this.handleContextRestored = this.handleContextRestored.bind(this);

        renderer.view.addEventListener('webglcontextlost', this.handleContextLost, false);
        renderer.view.addEventListener('webglcontextrestored', this.handleContextRestored, false);
    }

    if ( System ) ContextSystem.__proto__ = System;
    ContextSystem.prototype = Object.create( System && System.prototype );
    ContextSystem.prototype.constructor = ContextSystem;

    var prototypeAccessors = { isLost: { configurable: true } };

    /**
     * `true` if the context is lost
     * @member {boolean}
     * @readonly
     */
    prototypeAccessors.isLost.get = function ()
    {
        return (!this.gl || this.gl.isContextLost());
    };

    /**
     * Handle the context change event
     * @param {WebGLRenderingContext} gl new webgl context
     */
    ContextSystem.prototype.contextChange = function contextChange (gl)
    {
        this.gl = gl;
        this.renderer.gl = gl;
        this.renderer.CONTEXT_UID = CONTEXT_UID++;

        // restore a context if it was previously lost
        if (gl.isContextLost() && gl.getExtension('WEBGL_lose_context'))
        {
            gl.getExtension('WEBGL_lose_context').restoreContext();
        }
    };

    /**
     * Initialize the context
     *
     * @protected
     * @param {WebGLRenderingContext} gl - WebGL context
     */
    ContextSystem.prototype.initFromContext = function initFromContext (gl)
    {
        this.gl = gl;
        this.validateContext(gl);
        this.renderer.gl = gl;
        this.renderer.CONTEXT_UID = CONTEXT_UID++;
        this.renderer.runners.contextChange.run(gl);
    };

    /**
     * Initialize from context options
     *
     * @protected
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     * @param {object} options - context attributes
     */
    ContextSystem.prototype.initFromOptions = function initFromOptions (options)
    {
        var gl = this.createContext(this.renderer.view, options);

        this.initFromContext(gl);
    };

    /**
     * Helper class to create a WebGL Context
     *
     * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
     * @param options {object} An options object that gets passed in to the canvas element containing the context attributes
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
     * @return {WebGLRenderingContext} the WebGL context
     */
    ContextSystem.prototype.createContext = function createContext (canvas, options)
    {
        var gl;

        if (_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PREFER_ENV >= _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ENV */ "d"].WEBGL2)
        {
            gl = canvas.getContext('webgl2', options);
        }

        if (gl)
        {
            this.webGLVersion = 2;
        }
        else
        {
            this.webGLVersion = 1;

            gl = canvas.getContext('webgl', options)
            || canvas.getContext('experimental-webgl', options);

            if (!gl)
            {
                // fail, not able to get a context
                throw new Error('This browser does not support WebGL. Try using the canvas renderer');
            }
        }

        this.gl = gl;

        this.getExtensions();

        return gl;
    };

    /**
     * Auto-populate the extensions
     *
     * @protected
     */
    ContextSystem.prototype.getExtensions = function getExtensions ()
    {
        // time to set up default extensions that Pixi uses.
        var ref = this;
        var gl = ref.gl;

        if (this.webGLVersion === 1)
        {
            Object.assign(this.extensions, {
                drawBuffers: gl.getExtension('WEBGL_draw_buffers'),
                depthTexture: gl.getExtension('WEBKIT_WEBGL_depth_texture'),
                loseContext: gl.getExtension('WEBGL_lose_context'),
                vertexArrayObject: gl.getExtension('OES_vertex_array_object')
                    || gl.getExtension('MOZ_OES_vertex_array_object')
                    || gl.getExtension('WEBKIT_OES_vertex_array_object'),
                anisotropicFiltering: gl.getExtension('EXT_texture_filter_anisotropic'),
                uint32ElementIndex: gl.getExtension('OES_element_index_uint'),
                // Floats and half-floats
                floatTexture: gl.getExtension('OES_texture_float'),
                floatTextureLinear: gl.getExtension('OES_texture_float_linear'),
                textureHalfFloat: gl.getExtension('OES_texture_half_float'),
                textureHalfFloatLinear: gl.getExtension('OES_texture_half_float_linear'),
            });
        }
        else if (this.webGLVersion === 2)
        {
            Object.assign(this.extensions, {
                anisotropicFiltering: gl.getExtension('EXT_texture_filter_anisotropic'),
                // Floats and half-floats
                colorBufferFloat: gl.getExtension('EXT_color_buffer_float'),
                floatTextureLinear: gl.getExtension('OES_texture_float_linear'),
            });
        }
    };

    /**
     * Handles a lost webgl context
     *
     * @protected
     * @param {WebGLContextEvent} event - The context lost event.
     */
    ContextSystem.prototype.handleContextLost = function handleContextLost (event)
    {
        event.preventDefault();
    };

    /**
     * Handles a restored webgl context
     *
     * @protected
     */
    ContextSystem.prototype.handleContextRestored = function handleContextRestored ()
    {
        this.renderer.runners.contextChange.run(this.gl);
    };

    ContextSystem.prototype.destroy = function destroy ()
    {
        var view = this.renderer.view;

        // remove listeners
        view.removeEventListener('webglcontextlost', this.handleContextLost);
        view.removeEventListener('webglcontextrestored', this.handleContextRestored);

        this.gl.useProgram(null);

        if (this.extensions.loseContext)
        {
            this.extensions.loseContext.loseContext();
        }
    };

    /**
     * Handle the post-render runner event
     *
     * @protected
     */
    ContextSystem.prototype.postrender = function postrender ()
    {
        if (this.renderer.renderingToScreen)
        {
            this.gl.flush();
        }
    };

    /**
     * Validate context
     *
     * @protected
     * @param {WebGLRenderingContext} gl - Render context
     */
    ContextSystem.prototype.validateContext = function validateContext (gl)
    {
        var attributes = gl.getContextAttributes();

        // this is going to be fairly simple for now.. but at least we have room to grow!
        if (!attributes.stencil)
        {
            /* eslint-disable max-len */

            /* eslint-disable no-console */
            console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
            /* eslint-enable no-console */

            /* eslint-enable max-len */
        }
    };

    Object.defineProperties( ContextSystem.prototype, prototypeAccessors );

    return ContextSystem;
}(System));

/**
 * System plugin to the renderer to manage framebuffers.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var FramebufferSystem = /*@__PURE__*/(function (System) {
    function FramebufferSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * A list of managed framebuffers
         * @member {PIXI.Framebuffer[]}
         * @readonly
         */
        this.managedFramebuffers = [];

        /**
         * Framebuffer value that shows that we don't know what is bound
         * @member {Framebuffer}
         * @readonly
         */
        this.unknownFramebuffer = new Framebuffer(10, 10);
    }

    if ( System ) FramebufferSystem.__proto__ = System;
    FramebufferSystem.prototype = Object.create( System && System.prototype );
    FramebufferSystem.prototype.constructor = FramebufferSystem;

    var prototypeAccessors = { size: { configurable: true } };

    /**
     * Sets up the renderer context and necessary buffers.
     */
    FramebufferSystem.prototype.contextChange = function contextChange ()
    {
        var gl = this.gl = this.renderer.gl;

        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        this.current = this.unknownFramebuffer;
        this.viewport = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();
        this.hasMRT = true;
        this.writeDepthTexture = true;

        this.disposeAll(true);

        // webgl2
        if (this.renderer.context.webGLVersion === 1)
        {
            // webgl 1!
            var nativeDrawBuffersExtension = this.renderer.context.extensions.drawBuffers;
            var nativeDepthTextureExtension = this.renderer.context.extensions.depthTexture;

            if (_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PREFER_ENV === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ENV */ "d"].WEBGL_LEGACY)
            {
                nativeDrawBuffersExtension = null;
                nativeDepthTextureExtension = null;
            }

            if (nativeDrawBuffersExtension)
            {
                gl.drawBuffers = function (activeTextures) { return nativeDrawBuffersExtension.drawBuffersWEBGL(activeTextures); };
            }
            else
            {
                this.hasMRT = false;
                gl.drawBuffers = function () {
                    // empty
                };
            }

            if (!nativeDepthTextureExtension)
            {
                this.writeDepthTexture = false;
            }
        }
    };

    /**
     * Bind a framebuffer
     *
     * @param {PIXI.Framebuffer} framebuffer
     * @param {PIXI.Rectangle} [frame] frame, default is framebuffer size
     */
    FramebufferSystem.prototype.bind = function bind (framebuffer, frame)
    {
        var ref = this;
        var gl = ref.gl;

        if (framebuffer)
        {
            // TODO caching layer!

            var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(framebuffer);

            if (this.current !== framebuffer)
            {
                this.current = framebuffer;
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
            }
            // make sure all textures are unbound..

            // now check for updates...
            if (fbo.dirtyId !== framebuffer.dirtyId)
            {
                fbo.dirtyId = framebuffer.dirtyId;

                if (fbo.dirtyFormat !== framebuffer.dirtyFormat)
                {
                    fbo.dirtyFormat = framebuffer.dirtyFormat;
                    this.updateFramebuffer(framebuffer);
                }
                else if (fbo.dirtySize !== framebuffer.dirtySize)
                {
                    fbo.dirtySize = framebuffer.dirtySize;
                    this.resizeFramebuffer(framebuffer);
                }
            }

            for (var i = 0; i < framebuffer.colorTextures.length; i++)
            {
                if (framebuffer.colorTextures[i].texturePart)
                {
                    this.renderer.texture.unbind(framebuffer.colorTextures[i].texture);
                }
                else
                {
                    this.renderer.texture.unbind(framebuffer.colorTextures[i]);
                }
            }

            if (framebuffer.depthTexture)
            {
                this.renderer.texture.unbind(framebuffer.depthTexture);
            }

            if (frame)
            {
                this.setViewport(frame.x, frame.y, frame.width, frame.height);
            }
            else
            {
                this.setViewport(0, 0, framebuffer.width, framebuffer.height);
            }
        }
        else
        {
            if (this.current)
            {
                this.current = null;
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }

            if (frame)
            {
                this.setViewport(frame.x, frame.y, frame.width, frame.height);
            }
            else
            {
                this.setViewport(0, 0, this.renderer.width, this.renderer.height);
            }
        }
    };

    /**
     * Set the WebGLRenderingContext's viewport.
     *
     * @param {Number} x - X position of viewport
     * @param {Number} y - Y position of viewport
     * @param {Number} width - Width of viewport
     * @param {Number} height - Height of viewport
     */
    FramebufferSystem.prototype.setViewport = function setViewport (x, y, width, height)
    {
        var v = this.viewport;

        if (v.width !== width || v.height !== height || v.x !== x || v.y !== y)
        {
            v.x = x;
            v.y = y;
            v.width = width;
            v.height = height;

            this.gl.viewport(x, y, width, height);
        }
    };

    /**
     * Get the size of the current width and height. Returns object with `width` and `height` values.
     *
     * @member {object}
     * @readonly
     */
    prototypeAccessors.size.get = function ()
    {
        if (this.current)
        {
            // TODO store temp
            return { x: 0, y: 0, width: this.current.width, height: this.current.height };
        }

        return { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
    };

    /**
     * Clear the color of the context
     *
     * @param {Number} r - Red value from 0 to 1
     * @param {Number} g - Green value from 0 to 1
     * @param {Number} b - Blue value from 0 to 1
     * @param {Number} a - Alpha value from 0 to 1
     */
    FramebufferSystem.prototype.clear = function clear (r, g, b, a)
    {
        var ref = this;
        var gl = ref.gl;

        // TODO clear color can be set only one right?
        gl.clearColor(r, g, b, a);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    };

    /**
     * Initialize framebuffer
     *
     * @protected
     * @param {PIXI.Framebuffer} framebuffer
     */
    FramebufferSystem.prototype.initFramebuffer = function initFramebuffer (framebuffer)
    {
        var ref = this;
        var gl = ref.gl;

        // TODO - make this a class?
        var fbo = {
            framebuffer: gl.createFramebuffer(),
            stencil: null,
            dirtyId: 0,
            dirtyFormat: 0,
            dirtySize: 0,
        };

        framebuffer.glFramebuffers[this.CONTEXT_UID] = fbo;

        this.managedFramebuffers.push(framebuffer);
        framebuffer.disposeRunner.add(this);

        return fbo;
    };

    /**
     * Resize the framebuffer
     *
     * @protected
     * @param {PIXI.Framebuffer} framebuffer
     */
    FramebufferSystem.prototype.resizeFramebuffer = function resizeFramebuffer (framebuffer)
    {
        var ref = this;
        var gl = ref.gl;

        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];

        if (fbo.stencil)
        {
            gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
        }

        var colorTextures = framebuffer.colorTextures;

        for (var i = 0; i < colorTextures.length; i++)
        {
            this.renderer.texture.bind(colorTextures[i], 0);
        }

        if (framebuffer.depthTexture)
        {
            this.renderer.texture.bind(framebuffer.depthTexture, 0);
        }
    };

    /**
     * Update the framebuffer
     *
     * @protected
     * @param {PIXI.Framebuffer} framebuffer
     */
    FramebufferSystem.prototype.updateFramebuffer = function updateFramebuffer (framebuffer)
    {
        var ref = this;
        var gl = ref.gl;

        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];

        // bind the color texture
        var colorTextures = framebuffer.colorTextures;

        var count = colorTextures.length;

        if (!gl.drawBuffers)
        {
            count = Math.min(count, 1);
        }

        var activeTextures = [];

        for (var i = 0; i < count; i++)
        {
            var texture = framebuffer.colorTextures[i];

            if (texture.texturePart)
            {
                this.renderer.texture.bind(texture.texture, 0);

                gl.framebufferTexture2D(gl.FRAMEBUFFER,
                    gl.COLOR_ATTACHMENT0 + i,
                    gl.TEXTURE_CUBE_MAP_NEGATIVE_X + texture.side,
                    texture.texture._glTextures[this.CONTEXT_UID].texture,
                    0);
            }
            else
            {
                this.renderer.texture.bind(texture, 0);

                gl.framebufferTexture2D(gl.FRAMEBUFFER,
                    gl.COLOR_ATTACHMENT0 + i,
                    gl.TEXTURE_2D,
                    texture._glTextures[this.CONTEXT_UID].texture,
                    0);
            }

            activeTextures.push(gl.COLOR_ATTACHMENT0 + i);
        }

        if (activeTextures.length > 1)
        {
            gl.drawBuffers(activeTextures);
        }

        if (framebuffer.depthTexture)
        {
            var writeDepthTexture = this.writeDepthTexture;

            if (writeDepthTexture)
            {
                var depthTexture = framebuffer.depthTexture;

                this.renderer.texture.bind(depthTexture, 0);

                gl.framebufferTexture2D(gl.FRAMEBUFFER,
                    gl.DEPTH_ATTACHMENT,
                    gl.TEXTURE_2D,
                    depthTexture._glTextures[this.CONTEXT_UID].texture,
                    0);
            }
        }

        if (!fbo.stencil && (framebuffer.stencil || framebuffer.depth))
        {
            fbo.stencil = gl.createRenderbuffer();

            gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);

            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
            // TODO.. this is depth AND stencil?
            if (!framebuffer.depthTexture)
            { // you can't have both, so one should take priority if enabled
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, fbo.stencil);
            }
        }
    };

    /**
     * Disposes framebuffer
     * @param {PIXI.Framebuffer} framebuffer framebuffer that has to be disposed of
     * @param {boolean} [contextLost=false] If context was lost, we suppress all delete function calls
     */
    FramebufferSystem.prototype.disposeFramebuffer = function disposeFramebuffer (framebuffer, contextLost)
    {
        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
        var gl = this.gl;

        if (!fbo)
        {
            return;
        }

        delete framebuffer.glFramebuffers[this.CONTEXT_UID];

        var index = this.managedFramebuffers.indexOf(framebuffer);

        if (index >= 0)
        {
            this.managedFramebuffers.splice(index, 1);
        }

        framebuffer.disposeRunner.remove(this);

        if (!contextLost)
        {
            gl.deleteFramebuffer(fbo.framebuffer);
            if (fbo.stencil)
            {
                gl.deleteRenderbuffer(fbo.stencil);
            }
        }
    };

    /**
     * Disposes all framebuffers, but not textures bound to them
     * @param {boolean} [contextLost=false] If context was lost, we suppress all delete function calls
     */
    FramebufferSystem.prototype.disposeAll = function disposeAll (contextLost)
    {
        var list = this.managedFramebuffers;

        this.managedFramebuffers = [];

        for (var i = 0; i < list.length; i++)
        {
            this.disposeFramebuffer(list[i], contextLost);
        }
    };

    /**
     * Forcing creation of stencil buffer for current framebuffer, if it wasn't done before.
     * Used by MaskSystem, when its time to use stencil mask for Graphics element.
     *
     * Its an alternative for public lazy `framebuffer.enableStencil`, in case we need stencil without rebind.
     *
     * @private
     */
    FramebufferSystem.prototype.forceStencil = function forceStencil ()
    {
        var framebuffer = this.current;

        if (!framebuffer)
        {
            return;
        }

        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];

        if (!fbo || fbo.stencil)
        {
            return;
        }
        framebuffer.enableStencil();

        var w = framebuffer.width;
        var h = framebuffer.height;
        var gl = this.gl;
        var stencil = gl.createRenderbuffer();

        gl.bindRenderbuffer(gl.RENDERBUFFER, stencil);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, w, h);

        fbo.stencil = stencil;
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, stencil);
    };

    /**
     * resets framebuffer stored state, binds screen framebuffer
     *
     * should be called before renderTexture reset()
     */
    FramebufferSystem.prototype.reset = function reset ()
    {
        this.current = this.unknownFramebuffer;
        this.viewport = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();
    };

    Object.defineProperties( FramebufferSystem.prototype, prototypeAccessors );

    return FramebufferSystem;
}(System));

var GLBuffer = function GLBuffer(buffer)
{
    this.buffer = buffer;
    this.updateID = -1;
    this.byteLength = -1;
    this.refCount = 0;
};

var byteSizeMap$1 = { 5126: 4, 5123: 2, 5121: 1 };

/**
 * System plugin to the renderer to manage geometry.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var GeometrySystem = /*@__PURE__*/(function (System) {
    function GeometrySystem(renderer)
    {
        System.call(this, renderer);

        this._activeGeometry = null;
        this._activeVao = null;

        /**
         * `true` if we has `*_vertex_array_object` extension
         * @member {boolean}
         * @readonly
         */
        this.hasVao = true;

        /**
         * `true` if has `ANGLE_instanced_arrays` extension
         * @member {boolean}
         * @readonly
         */
        this.hasInstance = true;

        /**
         * `true` if support `gl.UNSIGNED_INT` in `gl.drawElements` or `gl.drawElementsInstanced`
         * @member {boolean}
         * @readonly
         */
        this.canUseUInt32ElementIndex = false;

        /**
         * A cache of currently bound buffer,
         * contains only two members with keys ARRAY_BUFFER and ELEMENT_ARRAY_BUFFER
         * @member {Object.<number, PIXI.Buffer>}
         * @readonly
         */
        this.boundBuffers = {};

        /**
         * Cache for all geometries by id, used in case renderer gets destroyed or for profiling
         * @member {object}
         * @readonly
         */
        this.managedGeometries = {};

        /**
         * Cache for all buffers by id, used in case renderer gets destroyed or for profiling
         * @member {object}
         * @readonly
         */
        this.managedBuffers = {};
    }

    if ( System ) GeometrySystem.__proto__ = System;
    GeometrySystem.prototype = Object.create( System && System.prototype );
    GeometrySystem.prototype.constructor = GeometrySystem;

    /**
     * Sets up the renderer context and necessary buffers.
     */
    GeometrySystem.prototype.contextChange = function contextChange ()
    {
        this.disposeAll(true);

        var gl = this.gl = this.renderer.gl;
        var context = this.renderer.context;

        this.CONTEXT_UID = this.renderer.CONTEXT_UID;

        // webgl2
        if (!gl.createVertexArray)
        {
            // webgl 1!
            var nativeVaoExtension = this.renderer.context.extensions.vertexArrayObject;

            if (_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PREFER_ENV === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ENV */ "d"].WEBGL_LEGACY)
            {
                nativeVaoExtension = null;
            }

            if (nativeVaoExtension)
            {
                gl.createVertexArray = function () { return nativeVaoExtension.createVertexArrayOES(); };

                gl.bindVertexArray = function (vao) { return nativeVaoExtension.bindVertexArrayOES(vao); };

                gl.deleteVertexArray = function (vao) { return nativeVaoExtension.deleteVertexArrayOES(vao); };
            }
            else
            {
                this.hasVao = false;
                gl.createVertexArray = function () {
                    // empty
                };

                gl.bindVertexArray = function () {
                    // empty
                };

                gl.deleteVertexArray = function () {
                    // empty
                };
            }
        }

        if (!gl.vertexAttribDivisor)
        {
            var instanceExt = gl.getExtension('ANGLE_instanced_arrays');

            if (instanceExt)
            {
                gl.vertexAttribDivisor = function (a, b) { return instanceExt.vertexAttribDivisorANGLE(a, b); };

                gl.drawElementsInstanced = function (a, b, c, d, e) { return instanceExt.drawElementsInstancedANGLE(a, b, c, d, e); };

                gl.drawArraysInstanced = function (a, b, c, d) { return instanceExt.drawArraysInstancedANGLE(a, b, c, d); };
            }
            else
            {
                this.hasInstance = false;
            }
        }

        this.canUseUInt32ElementIndex = context.webGLVersion === 2 || !!context.extensions.uint32ElementIndex;
    };

    /**
     * Binds geometry so that is can be drawn. Creating a Vao if required
     *
     * @param {PIXI.Geometry} geometry instance of geometry to bind
     * @param {PIXI.Shader} [shader] instance of shader to use vao for
     */
    GeometrySystem.prototype.bind = function bind (geometry, shader)
    {
        shader = shader || this.renderer.shader.shader;

        var ref = this;
        var gl = ref.gl;

        // not sure the best way to address this..
        // currently different shaders require different VAOs for the same geometry
        // Still mulling over the best way to solve this one..
        // will likely need to modify the shader attribute locations at run time!
        var vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];

        if (!vaos)
        {
            this.managedGeometries[geometry.id] = geometry;
            geometry.disposeRunner.add(this);
            geometry.glVertexArrayObjects[this.CONTEXT_UID] = vaos = {};
        }

        var vao = vaos[shader.program.id] || this.initGeometryVao(geometry, shader.program);

        this._activeGeometry = geometry;

        if (this._activeVao !== vao)
        {
            this._activeVao = vao;

            if (this.hasVao)
            {
                gl.bindVertexArray(vao);
            }
            else
            {
                this.activateVao(geometry, shader.program);
            }
        }

        // TODO - optimise later!
        // don't need to loop through if nothing changed!
        // maybe look to add an 'autoupdate' to geometry?
        this.updateBuffers();
    };

    /**
     * Reset and unbind any active VAO and geometry
     */
    GeometrySystem.prototype.reset = function reset ()
    {
        this.unbind();
    };

    /**
     * Update buffers
     * @protected
     */
    GeometrySystem.prototype.updateBuffers = function updateBuffers ()
    {
        var geometry = this._activeGeometry;
        var ref = this;
        var gl = ref.gl;

        for (var i = 0; i < geometry.buffers.length; i++)
        {
            var buffer = geometry.buffers[i];

            var glBuffer = buffer._glBuffers[this.CONTEXT_UID];

            if (buffer._updateID !== glBuffer.updateID)
            {
                glBuffer.updateID = buffer._updateID;

                // TODO can cache this on buffer! maybe added a getter / setter?
                var type = buffer.index ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;

                // TODO this could change if the VAO changes...
                // need to come up with a better way to cache..
                // if (this.boundBuffers[type] !== glBuffer)
                // {
                // this.boundBuffers[type] = glBuffer;
                gl.bindBuffer(type, glBuffer.buffer);
                // }

                this._boundBuffer = glBuffer;

                if (glBuffer.byteLength >= buffer.data.byteLength)
                {
                    // offset is always zero for now!
                    gl.bufferSubData(type, 0, buffer.data);
                }
                else
                {
                    var drawType = buffer.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW;

                    glBuffer.byteLength = buffer.data.byteLength;
                    gl.bufferData(type, buffer.data, drawType);
                }
            }
        }
    };

    /**
     * Check compability between a geometry and a program
     * @protected
     * @param {PIXI.Geometry} geometry - Geometry instance
     * @param {PIXI.Program} program - Program instance
     */
    GeometrySystem.prototype.checkCompatibility = function checkCompatibility (geometry, program)
    {
        // geometry must have at least all the attributes that the shader requires.
        var geometryAttributes = geometry.attributes;
        var shaderAttributes = program.attributeData;

        for (var j in shaderAttributes)
        {
            if (!geometryAttributes[j])
            {
                throw new Error(("shader and geometry incompatible, geometry missing the \"" + j + "\" attribute"));
            }
        }
    };

    /**
     * Takes a geometry and program and generates a unique signature for them.
     *
     * @param {PIXI.Geometry} geometry to get signature from
     * @param {PIXI.Program} program to test geometry against
     * @returns {String} Unique signature of the geometry and program
     * @protected
     */
    GeometrySystem.prototype.getSignature = function getSignature (geometry, program)
    {
        var attribs = geometry.attributes;
        var shaderAttributes = program.attributeData;

        var strings = ['g', geometry.id];

        for (var i in attribs)
        {
            if (shaderAttributes[i])
            {
                strings.push(i);
            }
        }

        return strings.join('-');
    };

    /**
     * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
     * If vao is created, it is bound automatically.
     *
     * @protected
     * @param {PIXI.Geometry} geometry - Instance of geometry to to generate Vao for
     * @param {PIXI.Program} program - Instance of program
     */
    GeometrySystem.prototype.initGeometryVao = function initGeometryVao (geometry, program)
    {
        this.checkCompatibility(geometry, program);

        var gl = this.gl;
        var CONTEXT_UID = this.CONTEXT_UID;

        var signature = this.getSignature(geometry, program);

        var vaoObjectHash = geometry.glVertexArrayObjects[this.CONTEXT_UID];

        var vao = vaoObjectHash[signature];

        if (vao)
        {
            // this will give us easy access to the vao
            vaoObjectHash[program.id] = vao;

            return vao;
        }

        var buffers = geometry.buffers;
        var attributes = geometry.attributes;
        var tempStride = {};
        var tempStart = {};

        for (var j in buffers)
        {
            tempStride[j] = 0;
            tempStart[j] = 0;
        }

        for (var j$1 in attributes)
        {
            if (!attributes[j$1].size && program.attributeData[j$1])
            {
                attributes[j$1].size = program.attributeData[j$1].size;
            }
            else if (!attributes[j$1].size)
            {
                console.warn(("PIXI Geometry attribute '" + j$1 + "' size cannot be determined (likely the bound shader does not have the attribute)"));  // eslint-disable-line
            }

            tempStride[attributes[j$1].buffer] += attributes[j$1].size * byteSizeMap$1[attributes[j$1].type];
        }

        for (var j$2 in attributes)
        {
            var attribute = attributes[j$2];
            var attribSize = attribute.size;

            if (attribute.stride === undefined)
            {
                if (tempStride[attribute.buffer] === attribSize * byteSizeMap$1[attribute.type])
                {
                    attribute.stride = 0;
                }
                else
                {
                    attribute.stride = tempStride[attribute.buffer];
                }
            }

            if (attribute.start === undefined)
            {
                attribute.start = tempStart[attribute.buffer];

                tempStart[attribute.buffer] += attribSize * byteSizeMap$1[attribute.type];
            }
        }

        vao = gl.createVertexArray();

        gl.bindVertexArray(vao);

        // first update - and create the buffers!
        // only create a gl buffer if it actually gets
        for (var i = 0; i < buffers.length; i++)
        {
            var buffer = buffers[i];

            if (!buffer._glBuffers[CONTEXT_UID])
            {
                buffer._glBuffers[CONTEXT_UID] = new GLBuffer(gl.createBuffer());
                this.managedBuffers[buffer.id] = buffer;
                buffer.disposeRunner.add(this);
            }

            buffer._glBuffers[CONTEXT_UID].refCount++;
        }

        // TODO - maybe make this a data object?
        // lets wait to see if we need to first!

        this.activateVao(geometry, program);

        this._activeVao = vao;

        // add it to the cache!
        vaoObjectHash[program.id] = vao;
        vaoObjectHash[signature] = vao;

        return vao;
    };

    /**
     * Disposes buffer
     * @param {PIXI.Buffer} buffer buffer with data
     * @param {boolean} [contextLost=false] If context was lost, we suppress deleteVertexArray
     */
    GeometrySystem.prototype.disposeBuffer = function disposeBuffer (buffer, contextLost)
    {
        if (!this.managedBuffers[buffer.id])
        {
            return;
        }

        delete this.managedBuffers[buffer.id];

        var glBuffer = buffer._glBuffers[this.CONTEXT_UID];
        var gl = this.gl;

        buffer.disposeRunner.remove(this);

        if (!glBuffer)
        {
            return;
        }

        if (!contextLost)
        {
            gl.deleteBuffer(glBuffer.buffer);
        }

        delete buffer._glBuffers[this.CONTEXT_UID];
    };

    /**
     * Disposes geometry
     * @param {PIXI.Geometry} geometry Geometry with buffers. Only VAO will be disposed
     * @param {boolean} [contextLost=false] If context was lost, we suppress deleteVertexArray
     */
    GeometrySystem.prototype.disposeGeometry = function disposeGeometry (geometry, contextLost)
    {
        if (!this.managedGeometries[geometry.id])
        {
            return;
        }

        delete this.managedGeometries[geometry.id];

        var vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
        var gl = this.gl;
        var buffers = geometry.buffers;

        geometry.disposeRunner.remove(this);

        if (!vaos)
        {
            return;
        }

        for (var i = 0; i < buffers.length; i++)
        {
            var buf = buffers[i]._glBuffers[this.CONTEXT_UID];

            buf.refCount--;
            if (buf.refCount === 0 && !contextLost)
            {
                this.disposeBuffer(buffers[i], contextLost);
            }
        }

        if (!contextLost)
        {
            for (var vaoId in vaos)
            {
                // delete only signatures, everything else are copies
                if (vaoId[0] === 'g')
                {
                    var vao = vaos[vaoId];

                    if (this._activeVao === vao)
                    {
                        this.unbind();
                    }
                    gl.deleteVertexArray(vao);
                }
            }
        }

        delete geometry.glVertexArrayObjects[this.CONTEXT_UID];
    };

    /**
     * dispose all WebGL resources of all managed geometries and buffers
     * @param {boolean} [contextLost=false] If context was lost, we suppress `gl.delete` calls
     */
    GeometrySystem.prototype.disposeAll = function disposeAll (contextLost)
    {
        var all = Object.keys(this.managedGeometries);

        for (var i = 0; i < all.length; i++)
        {
            this.disposeGeometry(this.managedGeometries[all[i]], contextLost);
        }
        all = Object.keys(this.managedBuffers);
        for (var i$1 = 0; i$1 < all.length; i$1++)
        {
            this.disposeBuffer(this.managedBuffers[all[i$1]], contextLost);
        }
    };

    /**
     * Activate vertex array object
     *
     * @protected
     * @param {PIXI.Geometry} geometry - Geometry instance
     * @param {PIXI.Program} program - Shader program instance
     */
    GeometrySystem.prototype.activateVao = function activateVao (geometry, program)
    {
        var gl = this.gl;
        var CONTEXT_UID = this.CONTEXT_UID;
        var buffers = geometry.buffers;
        var attributes = geometry.attributes;

        if (geometry.indexBuffer)
        {
            // first update the index buffer if we have one..
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indexBuffer._glBuffers[CONTEXT_UID].buffer);
        }

        var lastBuffer = null;

        // add a new one!
        for (var j in attributes)
        {
            var attribute = attributes[j];
            var buffer = buffers[attribute.buffer];
            var glBuffer = buffer._glBuffers[CONTEXT_UID];

            if (program.attributeData[j])
            {
                if (lastBuffer !== glBuffer)
                {
                    gl.bindBuffer(gl.ARRAY_BUFFER, glBuffer.buffer);

                    lastBuffer = glBuffer;
                }

                var location = program.attributeData[j].location;

                // TODO introduce state again
                // we can optimise this for older devices that have no VAOs
                gl.enableVertexAttribArray(location);

                gl.vertexAttribPointer(location,
                    attribute.size,
                    attribute.type || gl.FLOAT,
                    attribute.normalized,
                    attribute.stride,
                    attribute.start);

                if (attribute.instance)
                {
                    // TODO calculate instance count based of this...
                    if (this.hasInstance)
                    {
                        gl.vertexAttribDivisor(location, 1);
                    }
                    else
                    {
                        throw new Error('geometry error, GPU Instancing is not supported on this device');
                    }
                }
            }
        }
    };

    /**
     * Draw the geometry
     *
     * @param {Number} type - the type primitive to render
     * @param {Number} [size] - the number of elements to be rendered
     * @param {Number} [start] - Starting index
     * @param {Number} [instanceCount] - the number of instances of the set of elements to execute
     */
    GeometrySystem.prototype.draw = function draw (type, size, start, instanceCount)
    {
        var ref = this;
        var gl = ref.gl;
        var geometry = this._activeGeometry;

        // TODO.. this should not change so maybe cache the function?

        if (geometry.indexBuffer)
        {
            var byteSize = geometry.indexBuffer.data.BYTES_PER_ELEMENT;
            var glType = byteSize === 2 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT;

            if (byteSize === 2 || (byteSize === 4 && this.canUseUInt32ElementIndex))
            {
                if (geometry.instanced)
                {
                    /* eslint-disable max-len */
                    gl.drawElementsInstanced(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize, instanceCount || 1);
                    /* eslint-enable max-len */
                }
                else
                {
                    /* eslint-disable max-len */
                    gl.drawElements(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize);
                    /* eslint-enable max-len */
                }
            }
            else
            {
                console.warn('unsupported index buffer type: uint32');
            }
        }
        else if (geometry.instanced)
        {
            // TODO need a better way to calculate size..
            gl.drawArraysInstanced(type, start, size || geometry.getSize(), instanceCount || 1);
        }
        else
        {
            gl.drawArrays(type, start, size || geometry.getSize());
        }

        return this;
    };

    /**
     * Unbind/reset everything
     * @protected
     */
    GeometrySystem.prototype.unbind = function unbind ()
    {
        this.gl.bindVertexArray(null);
        this._activeVao = null;
        this._activeGeometry = null;
    };

    return GeometrySystem;
}(System));

/**
 * Component for masked elements
 *
 * Holds mask mode and temporary data about current mask
 *
 * @class
 * @memberof PIXI
 */
var MaskData = function MaskData(maskObject)
{
    /**
     * Mask type
     * @member {PIXI.MASK_TYPES}
     */
    this.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].NONE;

    /**
     * Whether we know the mask type beforehand
     * @member {boolean}
     * @default true
     */
    this.autoDetect = true;

    /**
     * Which element we use to mask
     * @member {PIXI.DisplayObject}
     */
    this.maskObject = maskObject || null;

    /**
     * Whether it belongs to MaskSystem pool
     * @member {boolean}
     */
    this.pooled = false;

    /**
     * Indicator of the type
     * @member {boolean}
     */
    this.isMaskData = true;

    /**
     * Stencil counter above the mask in stack
     * @member {number}
     * @private
     */
    this._stencilCounter = 0;
    /**
     * Scissor counter above the mask in stack
     * @member {number}
     * @private
     */
    this._scissorCounter = 0;

    /**
     * Scissor operation above the mask in stack.
     * Null if _scissorCounter is zero, rectangle instance if positive.
     * @member {PIXI.Rectangle}
     */
    this._scissorRect = null;

    /**
     * Targeted element. Temporary variable set by MaskSystem
     * @member {PIXI.DisplayObject}
     * @private
     */
    this._target = null;
};

/**
 * resets the mask data after popMask()
 */
MaskData.prototype.reset = function reset ()
{
    if (this.pooled)
    {
        this.maskObject = null;

        this.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].NONE;

        this.autoDetect = true;
    }

    this._target = null;
};

/**
 * copies counters from maskData above, called from pushMask()
 * @param {PIXI.MaskData|null} maskAbove
 */
MaskData.prototype.copyCountersOrReset = function copyCountersOrReset (maskAbove)
{
    if (maskAbove)
    {
        this._stencilCounter = maskAbove._stencilCounter;
        this._scissorCounter = maskAbove._scissorCounter;
        this._scissorRect = maskAbove._scissorRect;
    }
    else
    {
        this._stencilCounter = 0;
        this._scissorCounter = 0;
        this._scissorRect = null;
    }
};

/**
 * @method compileProgram
 * @private
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param attributeLocations {Object} An attribute location map that lets you manually set the attribute locations
 * @return {WebGLProgram} the shader program
 */
function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations)
{
    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

    var program = gl.createProgram();

    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);

    // optionally, set the attributes manually for the program rather than letting WebGL decide..
    if (attributeLocations)
    {
        for (var i in attributeLocations)
        {
            gl.bindAttribLocation(program, attributeLocations[i], i);
        }
    }

    gl.linkProgram(program);

    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    {
        console.error('Pixi.js Error: Could not initialize shader.');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());

        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '')
        {
            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
    }

    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);

    return program;
}

/**
 * @private
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param type {Number} the type, can be either VERTEX_SHADER or FRAGMENT_SHADER
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @return {WebGLShader} the shader
 */
function compileShader(gl, type, src)
{
    var shader = gl.createShader(type);

    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    {
        console.warn(src);
        console.error(gl.getShaderInfoLog(shader));

        return null;
    }

    return shader;
}

/**
 * @method defaultValue
 * @memberof PIXI.glCore.shader
 * @param type {String} Type of value
 * @param size {Number}
 * @private
 */
function defaultValue(type, size)
{
    switch (type)
    {
        case 'float':
            return 0;

        case 'vec2':
            return new Float32Array(2 * size);

        case 'vec3':
            return new Float32Array(3 * size);

        case 'vec4':
            return new Float32Array(4 * size);

        case 'int':
        case 'sampler2D':
        case 'sampler2DArray':
            return 0;

        case 'ivec2':
            return new Int32Array(2 * size);

        case 'ivec3':
            return new Int32Array(3 * size);

        case 'ivec4':
            return new Int32Array(4 * size);

        case 'bool':
            return false;

        case 'bvec2':

            return booleanArray(2 * size);

        case 'bvec3':
            return booleanArray(3 * size);

        case 'bvec4':
            return booleanArray(4 * size);

        case 'mat2':
            return new Float32Array([1, 0,
                0, 1]);

        case 'mat3':
            return new Float32Array([1, 0, 0,
                0, 1, 0,
                0, 0, 1]);

        case 'mat4':
            return new Float32Array([1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1]);
    }

    return null;
}

function booleanArray(size)
{
    var array = new Array(size);

    for (var i = 0; i < array.length; i++)
    {
        array[i] = false;
    }

    return array;
}

var unknownContext = {};
var context = unknownContext;

/**
 * returns a little WebGL context to use for program inspection.
 *
 * @static
 * @private
 * @returns {WebGLRenderingContext} a gl context to test with
 */
function getTestContext()
{
    if (context === unknownContext || (context && context.isContextLost()))
    {
        var canvas = document.createElement('canvas');

        var gl;

        if (_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PREFER_ENV >= _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ENV */ "d"].WEBGL2)
        {
            gl = canvas.getContext('webgl2', {});
        }

        if (!gl)
        {
            gl = canvas.getContext('webgl', {})
            || canvas.getContext('experimental-webgl', {});

            if (!gl)
            {
                // fail, not able to get a context
                gl = null;
            }
            else
            {
                // for shader testing..
                gl.getExtension('WEBGL_draw_buffers');
            }
        }

        context = gl;
    }

    return context;
}

var maxFragmentPrecision;

function getMaxFragmentPrecision()
{
    if (!maxFragmentPrecision)
    {
        maxFragmentPrecision = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].MEDIUM;
        var gl = getTestContext();

        if (gl)
        {
            if (gl.getShaderPrecisionFormat)
            {
                var shaderFragment = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);

                maxFragmentPrecision = shaderFragment.precision ? _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].HIGH : _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].MEDIUM;
            }
        }
    }

    return maxFragmentPrecision;
}

/**
 * Sets the float precision on the shader, ensuring the device supports the request precision.
 * If the precision is already present, it just ensures that the device is able to handle it.
 *
 * @private
 * @param {string} src - The shader source
 * @param {string} requestedPrecision - The request float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 * @param {string} maxSupportedPrecision - The maximum precision the shader supports.
 *
 * @return {string} modified shader source
 */
function setPrecision(src, requestedPrecision, maxSupportedPrecision)
{
    if (src.substring(0, 9) !== 'precision')
    {
        // no precision supplied, so PixiJS will add the requested level.
        var precision = requestedPrecision;

        // If highp is requested but not supported, downgrade precision to a level all devices support.
        if (requestedPrecision === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].HIGH && maxSupportedPrecision !== _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].HIGH)
        {
            precision = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].MEDIUM;
        }

        return ("precision " + precision + " float;\n" + src);
    }
    else if (maxSupportedPrecision !== _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].HIGH && src.substring(0, 15) === 'precision highp')
    {
        // precision was supplied, but at a level this device does not support, so downgrading to mediump.
        return src.replace('precision highp', 'precision mediump');
    }

    return src;
}

var GLSL_TO_SIZE = {
    float:    1,
    vec2:     2,
    vec3:     3,
    vec4:     4,

    int:      1,
    ivec2:    2,
    ivec3:    3,
    ivec4:    4,

    bool:     1,
    bvec2:    2,
    bvec3:    3,
    bvec4:    4,

    mat2:     4,
    mat3:     9,
    mat4:     16,

    sampler2D:  1,
};

/**
 * @private
 * @method mapSize
 * @memberof PIXI.glCore.shader
 * @param type {String}
 * @return {Number}
 */
function mapSize(type)
{
    return GLSL_TO_SIZE[type];
}

var GL_TABLE = null;

var GL_TO_GLSL_TYPES = {
    FLOAT:       'float',
    FLOAT_VEC2:  'vec2',
    FLOAT_VEC3:  'vec3',
    FLOAT_VEC4:  'vec4',

    INT:         'int',
    INT_VEC2:    'ivec2',
    INT_VEC3:    'ivec3',
    INT_VEC4:    'ivec4',

    BOOL:        'bool',
    BOOL_VEC2:   'bvec2',
    BOOL_VEC3:   'bvec3',
    BOOL_VEC4:   'bvec4',

    FLOAT_MAT2:  'mat2',
    FLOAT_MAT3:  'mat3',
    FLOAT_MAT4:  'mat4',

    SAMPLER_2D:  'sampler2D',
    SAMPLER_CUBE:  'samplerCube',
    SAMPLER_2D_ARRAY:  'sampler2DArray',
};

function mapType(gl, type)
{
    if (!GL_TABLE)
    {
        var typeNames = Object.keys(GL_TO_GLSL_TYPES);

        GL_TABLE = {};

        for (var i = 0; i < typeNames.length; ++i)
        {
            var tn = typeNames[i];

            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
        }
    }

    return GL_TABLE[type];
}

// cv = CachedValue
// v = value
// ud = uniformData
// uv = uniformValue
// l = location
var GLSL_TO_SINGLE_SETTERS_CACHED = {

    float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",

    vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",

    vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",

    vec4:     'gl.uniform4f(location, v[0], v[1], v[2], v[3])',

    int:      'gl.uniform1i(location, v)',
    ivec2:    'gl.uniform2i(location, v[0], v[1])',
    ivec3:    'gl.uniform3i(location, v[0], v[1], v[2])',
    ivec4:    'gl.uniform4i(location, v[0], v[1], v[2], v[3])',

    bool:     'gl.uniform1i(location, v)',
    bvec2:    'gl.uniform2i(location, v[0], v[1])',
    bvec3:    'gl.uniform3i(location, v[0], v[1], v[2])',
    bvec4:    'gl.uniform4i(location, v[0], v[1], v[2], v[3])',

    mat2:     'gl.uniformMatrix2fv(location, false, v)',
    mat3:     'gl.uniformMatrix3fv(location, false, v)',
    mat4:     'gl.uniformMatrix4fv(location, false, v)',

    sampler2D:      'gl.uniform1i(location, v)',
    samplerCube:    'gl.uniform1i(location, v)',
    sampler2DArray: 'gl.uniform1i(location, v)',
};

var GLSL_TO_ARRAY_SETTERS = {

    float:    "gl.uniform1fv(location, v)",

    vec2:     "gl.uniform2fv(location, v)",
    vec3:     "gl.uniform3fv(location, v)",
    vec4:     'gl.uniform4fv(location, v)',

    mat4:     'gl.uniformMatrix4fv(location, false, v)',
    mat3:     'gl.uniformMatrix3fv(location, false, v)',
    mat2:     'gl.uniformMatrix2fv(location, false, v)',

    int:      'gl.uniform1iv(location, v)',
    ivec2:    'gl.uniform2iv(location, v)',
    ivec3:    'gl.uniform3iv(location, v)',
    ivec4:    'gl.uniform4iv(location, v)',

    bool:     'gl.uniform1iv(location, v)',
    bvec2:    'gl.uniform2iv(location, v)',
    bvec3:    'gl.uniform3iv(location, v)',
    bvec4:    'gl.uniform4iv(location, v)',

    sampler2D:      'gl.uniform1iv(location, v)',
    samplerCube:    'gl.uniform1iv(location, v)',
    sampler2DArray: 'gl.uniform1iv(location, v)',
};

function generateUniformsSync(group, uniformData)
{
    var textureCount = 0;
    var func = "var v = null;\n    var cv = null\n    var gl = renderer.gl";

    for (var i in group.uniforms)
    {
        var data = uniformData[i];

        if (!data)
        {
            if (group.uniforms[i].group)
            {
                func += "\n                    renderer.shader.syncUniformGroup(uv." + i + ");\n                ";
            }

            continue;
        }

        // TODO && uniformData[i].value !== 0 <-- do we still need this?
        if (data.type === 'float' && data.size === 1)
        {
            func += "\n            if(uv." + i + " !== ud." + i + ".value)\n            {\n                ud." + i + ".value = uv." + i + "\n                gl.uniform1f(ud." + i + ".location, uv." + i + ")\n            }\n";
        }
        /* eslint-disable max-len */
        else if ((data.type === 'sampler2D' || data.type === 'samplerCube' || data.type === 'sampler2DArray') && data.size === 1 && !data.isArray)
        /* eslint-disable max-len */
        {
            func += "\n            renderer.texture.bind(uv." + i + ", " + textureCount + ");\n\n            if(ud." + i + ".value !== " + textureCount + ")\n            {\n                ud." + i + ".value = " + textureCount + ";\n                gl.uniform1i(ud." + i + ".location, " + textureCount + ");\n; // eslint-disable-line max-len\n            }\n";

            textureCount++;
        }
        else if (data.type === 'mat3' && data.size === 1)
        {
            if (group.uniforms[i].a !== undefined)
            {
                // TODO and some smart caching dirty ids here!
                func += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ".toArray(true));\n                \n";
            }
            else
            {
                func += "\n                gl.uniformMatrix3fv(ud." + i + ".location, false, uv." + i + ");\n                \n";
            }
        }
        else if (data.type === 'vec2' && data.size === 1)
        {
            // TODO - do we need both here?
            // maybe we can get away with only using points?
            if (group.uniforms[i].x !== undefined)
            {
                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud." + i + ".location, v.x, v.y);\n                }\n";
            }
            else
            {
                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud." + i + ".location, v[0], v[1]);\n                }\n                \n";
            }
        }
        else if (data.type === 'vec4' && data.size === 1)
        {
            // TODO - do we need both here?
            // maybe we can get away with only using points?
            if (group.uniforms[i].width !== undefined)
            {
                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud." + i + ".location, v.x, v.y, v.width, v.height)\n                }\n";
            }
            else
            {
                func += "\n                cv = ud." + i + ".value;\n                v = uv." + i + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud." + i + ".location, v[0], v[1], v[2], v[3])\n                }\n                \n";
            }
        }
        else
        {
            var templateType = (data.size === 1) ? GLSL_TO_SINGLE_SETTERS_CACHED : GLSL_TO_ARRAY_SETTERS;

            var template =  templateType[data.type].replace('location', ("ud." + i + ".location"));

            func += "\n            cv = ud." + i + ".value;\n            v = uv." + i + ";\n            " + template + ";\n";
        }
    }

    return new Function('ud', 'uv', 'renderer', func); // eslint-disable-line no-new-func
}

var fragTemplate = [
    'precision mediump float;',
    'void main(void){',
    'float test = 0.1;',
    '%forloop%',
    'gl_FragColor = vec4(0.0);',
    '}' ].join('\n');

function checkMaxIfStatementsInShader(maxIfs, gl)
{
    if (maxIfs === 0)
    {
        throw new Error('Invalid value of `0` passed to `checkMaxIfStatementsInShader`');
    }

    var shader = gl.createShader(gl.FRAGMENT_SHADER);

    while (true) // eslint-disable-line no-constant-condition
    {
        var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));

        gl.shaderSource(shader, fragmentSrc);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        {
            maxIfs = (maxIfs / 2) | 0;
        }
        else
        {
            // valid!
            break;
        }
    }

    return maxIfs;
}

function generateIfTestSrc(maxIfs)
{
    var src = '';

    for (var i = 0; i < maxIfs; ++i)
    {
        if (i > 0)
        {
            src += '\nelse ';
        }

        if (i < maxIfs - 1)
        {
            src += "if(test == " + i + ".0){}";
        }
    }

    return src;
}

// Cache the result to prevent running this over and over
var unsafeEval;

/**
 * Not all platforms allow to generate function code (e.g., `new Function`).
 * this provides the platform-level detection.
 *
 * @private
 * @returns {boolean}
 */
function unsafeEvalSupported()
{
    if (typeof unsafeEval === 'boolean')
    {
        return unsafeEval;
    }

    try
    {
        /* eslint-disable no-new-func */
        var func = new Function('param1', 'param2', 'param3', 'return param1[param2] === param3;');
        /* eslint-enable no-new-func */

        unsafeEval = func({ a: 'b' }, 'a', 'b') === true;
    }
    catch (e)
    {
        unsafeEval = false;
    }

    return unsafeEval;
}

var defaultFragment = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";

var defaultVertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";

// import * as from '../systems/shader/shader';

var UID$3 = 0;

var nameCache = {};

/**
 * Helper class to create a shader program.
 *
 * @class
 * @memberof PIXI
 */
var Program = function Program(vertexSrc, fragmentSrc, name)
{
    if ( name === void 0 ) name = 'pixi-shader';

    this.id = UID$3++;

    /**
     * The vertex shader.
     *
     * @member {string}
     */
    this.vertexSrc = vertexSrc || Program.defaultVertexSrc;

    /**
     * The fragment shader.
     *
     * @member {string}
     */
    this.fragmentSrc = fragmentSrc || Program.defaultFragmentSrc;

    this.vertexSrc = this.vertexSrc.trim();
    this.fragmentSrc = this.fragmentSrc.trim();

    if (this.vertexSrc.substring(0, 8) !== '#version')
    {
        name = name.replace(/\s+/g, '-');

        if (nameCache[name])
        {
            nameCache[name]++;
            name += "-" + (nameCache[name]);
        }
        else
        {
            nameCache[name] = 1;
        }

        this.vertexSrc = "#define SHADER_NAME " + name + "\n" + (this.vertexSrc);
        this.fragmentSrc = "#define SHADER_NAME " + name + "\n" + (this.fragmentSrc);

        this.vertexSrc = setPrecision(this.vertexSrc, _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PRECISION_VERTEX, _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* PRECISION */ "i"].HIGH);
        this.fragmentSrc = setPrecision(this.fragmentSrc, _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PRECISION_FRAGMENT, getMaxFragmentPrecision());
    }

    // currently this does not extract structs only default types
    this.extractData(this.vertexSrc, this.fragmentSrc);

    // this is where we store shader references..
    this.glPrograms = {};

    this.syncUniforms = null;
};

var staticAccessors = { defaultVertexSrc: { configurable: true },defaultFragmentSrc: { configurable: true } };

/**
 * Extracts the data for a buy creating a small test program
 * or reading the src directly.
 * @protected
 *
 * @param {string} [vertexSrc] - The source of the vertex shader.
 * @param {string} [fragmentSrc] - The source of the fragment shader.
 */
Program.prototype.extractData = function extractData (vertexSrc, fragmentSrc)
{
    var gl = getTestContext();

    if (gl)
    {
        var program = compileProgram(gl, vertexSrc, fragmentSrc);

        this.attributeData = this.getAttributeData(program, gl);
        this.uniformData = this.getUniformData(program, gl);

        gl.deleteProgram(program);
    }
    else
    {
        this.uniformData = {};
        this.attributeData = {};
    }
};

/**
 * returns the attribute data from the program
 * @private
 *
 * @param {WebGLProgram} [program] - the WebGL program
 * @param {WebGLRenderingContext} [gl] - the WebGL context
 *
 * @returns {object} the attribute data for this program
 */
Program.prototype.getAttributeData = function getAttributeData (program, gl)
{
    var attributes = {};
    var attributesArray = [];

    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < totalAttributes; i++)
    {
        var attribData = gl.getActiveAttrib(program, i);
        var type = mapType(gl, attribData.type);

        /*eslint-disable */
        var data = {
            type: type,
            name: attribData.name,
            size: mapSize(type),
            location: 0,
        };
        /* eslint-enable */

        attributes[attribData.name] = data;
        attributesArray.push(data);
    }

    attributesArray.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; }); // eslint-disable-line no-confusing-arrow

    for (var i$1 = 0; i$1 < attributesArray.length; i$1++)
    {
        attributesArray[i$1].location = i$1;
    }

    return attributes;
};

/**
 * returns the uniform data from the program
 * @private
 *
 * @param {webGL-program} [program] - the webgl program
 * @param {context} [gl] - the WebGL context
 *
 * @returns {object} the uniform data for this program
 */
Program.prototype.getUniformData = function getUniformData (program, gl)
{
    var uniforms = {};

    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    // TODO expose this as a prop?
    // const maskRegex = new RegExp('^(projectionMatrix|uSampler|translationMatrix)$');
    // const maskRegex = new RegExp('^(projectionMatrix|uSampler|translationMatrix)$');

    for (var i = 0; i < totalUniforms; i++)
    {
        var uniformData = gl.getActiveUniform(program, i);
        var name = uniformData.name.replace(/\[.*?\]/, '');

        var isArray = uniformData.name.match(/\[.*?\]/, '');
        var type = mapType(gl, uniformData.type);

        /*eslint-disable */
        uniforms[name] = {
            type: type,
            size: uniformData.size,
            isArray:isArray,
            value: defaultValue(type, uniformData.size),
        };
        /* eslint-enable */
    }

    return uniforms;
};

/**
 * The default vertex shader source
 *
 * @static
 * @constant
 * @member {string}
 */
staticAccessors.defaultVertexSrc.get = function ()
{
    return defaultVertex;
};

/**
 * The default fragment shader source
 *
 * @static
 * @constant
 * @member {string}
 */
staticAccessors.defaultFragmentSrc.get = function ()
{
    return defaultFragment;
};

/**
 * A short hand function to create a program based of a vertex and fragment shader
 * this method will also check to see if there is a cached program.
 *
 * @param {string} [vertexSrc] - The source of the vertex shader.
 * @param {string} [fragmentSrc] - The source of the fragment shader.
 * @param {string} [name=pixi-shader] - Name for shader
 *
 * @returns {PIXI.Program} an shiny new Pixi shader!
 */
Program.from = function from (vertexSrc, fragmentSrc, name)
{
    var key = vertexSrc + fragmentSrc;

    var program = _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["ProgramCache"][key];

    if (!program)
    {
        _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["ProgramCache"][key] = program = new Program(vertexSrc, fragmentSrc, name);
    }

    return program;
};

Object.defineProperties( Program, staticAccessors );

/**
 * A helper class for shaders
 *
 * @class
 * @memberof PIXI
 */
var Shader = function Shader(program, uniforms)
{
    /**
     * Program that the shader uses
     *
     * @member {PIXI.Program}
     */
    this.program = program;

    // lets see whats been passed in
    // uniforms should be converted to a uniform group
    if (uniforms)
    {
        if (uniforms instanceof UniformGroup)
        {
            this.uniformGroup = uniforms;
        }
        else
        {
            this.uniformGroup = new UniformGroup(uniforms);
        }
    }
    else
    {
        this.uniformGroup = new UniformGroup({});
    }

    // time to build some getters and setters!
    // I guess down the line this could sort of generate an instruction list rather than use dirty ids?
    // does the trick for now though!
    for (var i in program.uniformData)
    {
        if (this.uniformGroup.uniforms[i] instanceof Array)
        {
            this.uniformGroup.uniforms[i] = new Float32Array(this.uniformGroup.uniforms[i]);
        }
    }
};

var prototypeAccessors$2 = { uniforms: { configurable: true } };

// TODO move to shader system..
Shader.prototype.checkUniformExists = function checkUniformExists (name, group)
{
    if (group.uniforms[name])
    {
        return true;
    }

    for (var i in group.uniforms)
    {
        var uniform = group.uniforms[i];

        if (uniform.group)
        {
            if (this.checkUniformExists(name, uniform))
            {
                return true;
            }
        }
    }

    return false;
};

Shader.prototype.destroy = function destroy ()
{
    // usage count on programs?
    // remove if not used!
    this.uniformGroup = null;
};

/**
 * Shader uniform values, shortcut for `uniformGroup.uniforms`
 * @readonly
 * @member {object}
 */
prototypeAccessors$2.uniforms.get = function ()
{
    return this.uniformGroup.uniforms;
};

/**
 * A short hand function to create a shader based of a vertex and fragment shader
 *
 * @param {string} [vertexSrc] - The source of the vertex shader.
 * @param {string} [fragmentSrc] - The source of the fragment shader.
 * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
 *
 * @returns {PIXI.Shader} an shiny new Pixi shader!
 */
Shader.from = function from (vertexSrc, fragmentSrc, uniforms)
{
    var program = Program.from(vertexSrc, fragmentSrc);

    return new Shader(program, uniforms);
};

Object.defineProperties( Shader.prototype, prototypeAccessors$2 );

/* eslint-disable max-len */

var BLEND = 0;
var OFFSET = 1;
var CULLING = 2;
var DEPTH_TEST = 3;
var WINDING = 4;

/**
 * This is a WebGL state, and is is passed The WebGL StateManager.
 *
 * Each mesh rendered may require WebGL to be in a different state.
 * For example you may want different blend mode or to enable polygon offsets
 *
 * @class
 * @memberof PIXI
 */
var State = function State()
{
    this.data = 0;

    this.blendMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].NORMAL;
    this.polygonOffset = 0;

    this.blend = true;
    //  this.depthTest = true;
};

var prototypeAccessors$3 = { blend: { configurable: true },offsets: { configurable: true },culling: { configurable: true },depthTest: { configurable: true },clockwiseFrontFace: { configurable: true },blendMode: { configurable: true },polygonOffset: { configurable: true } };

/**
 * Activates blending of the computed fragment color values
 *
 * @member {boolean}
 */
prototypeAccessors$3.blend.get = function ()
{
    return !!(this.data & (1 << BLEND));
};

prototypeAccessors$3.blend.set = function (value) // eslint-disable-line require-jsdoc
{
    if (!!(this.data & (1 << BLEND)) !== value)
    {
        this.data ^= (1 << BLEND);
    }
};

/**
 * Activates adding an offset to depth values of polygon's fragments
 *
 * @member {boolean}
 * @default false
 */
prototypeAccessors$3.offsets.get = function ()
{
    return !!(this.data & (1 << OFFSET));
};

prototypeAccessors$3.offsets.set = function (value) // eslint-disable-line require-jsdoc
{
    if (!!(this.data & (1 << OFFSET)) !== value)
    {
        this.data ^= (1 << OFFSET);
    }
};

/**
 * Activates culling of polygons.
 *
 * @member {boolean}
 * @default false
 */
prototypeAccessors$3.culling.get = function ()
{
    return !!(this.data & (1 << CULLING));
};

prototypeAccessors$3.culling.set = function (value) // eslint-disable-line require-jsdoc
{
    if (!!(this.data & (1 << CULLING)) !== value)
    {
        this.data ^= (1 << CULLING);
    }
};

/**
 * Activates depth comparisons and updates to the depth buffer.
 *
 * @member {boolean}
 * @default false
 */
prototypeAccessors$3.depthTest.get = function ()
{
    return !!(this.data & (1 << DEPTH_TEST));
};

prototypeAccessors$3.depthTest.set = function (value) // eslint-disable-line require-jsdoc
{
    if (!!(this.data & (1 << DEPTH_TEST)) !== value)
    {
        this.data ^= (1 << DEPTH_TEST);
    }
};

/**
 * Specifies whether or not front or back-facing polygons can be culled.
 * @member {boolean}
 * @default false
 */
prototypeAccessors$3.clockwiseFrontFace.get = function ()
{
    return !!(this.data & (1 << WINDING));
};

prototypeAccessors$3.clockwiseFrontFace.set = function (value) // eslint-disable-line require-jsdoc
{
    if (!!(this.data & (1 << WINDING)) !== value)
    {
        this.data ^= (1 << WINDING);
    }
};

/**
 * The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
 * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
 *
 * @member {number}
 * @default PIXI.BLEND_MODES.NORMAL
 * @see PIXI.BLEND_MODES
 */
prototypeAccessors$3.blendMode.get = function ()
{
    return this._blendMode;
};

prototypeAccessors$3.blendMode.set = function (value) // eslint-disable-line require-jsdoc
{
    this.blend = (value !== _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].NONE);
    this._blendMode = value;
};

/**
 * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
 *
 * @member {number}
 * @default 0
 */
prototypeAccessors$3.polygonOffset.get = function ()
{
    return this._polygonOffset;
};

prototypeAccessors$3.polygonOffset.set = function (value) // eslint-disable-line require-jsdoc
{
    this.offsets = !!value;
    this._polygonOffset = value;
};

State.for2d = function for2d ()
{
    var state = new State();

    state.depthTest = false;
    state.blend = true;

    return state;
};

Object.defineProperties( State.prototype, prototypeAccessors$3 );

var defaultVertex$1 = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

var defaultFragment$1 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";

/**
 * Filter is a special type of WebGL shader that is applied to the screen.
 *
 * {@link http://pixijs.io/examples/#/filters/blur-filter.js Example} of the
 * {@link PIXI.filters.BlurFilter BlurFilter}.
 *
 * ### Usage
 * Filters can be applied to any DisplayObject or Container.
 * PixiJS' `FilterSystem` renders the container into temporary Framebuffer,
 * then filter renders it to the screen.
 * Multiple filters can be added to the `filters` array property and stacked on each other.
 *
 * ```
 * const filter = new PIXI.Filter(myShaderVert, myShaderFrag, { myUniform: 0.5 });
 * const container = new PIXI.Container();
 * container.filters = [filter];
 * ```
 *
 * ### Previous Version Differences
 *
 * In PixiJS **v3**, a filter was always applied to _whole screen_.
 *
 * In PixiJS **v4**, a filter can be applied _only part of the screen_.
 * Developers had to create a set of uniforms to deal with coordinates.
 *
 * In PixiJS **v5** combines _both approaches_.
 * Developers can use normal coordinates of v3 and then allow filter to use partial Framebuffers,
 * bringing those extra uniforms into account.
 *
 * Also be aware that we have changed default vertex shader, please consult
 * {@link https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters Wiki}.
 *
 * ### Built-in Uniforms
 *
 * PixiJS viewport uses screen (CSS) coordinates, `(0, 0, renderer.screen.width, renderer.screen.height)`,
 * and `projectionMatrix` uniform maps it to the gl viewport.
 *
 * **uSampler**
 *
 * The most important uniform is the input texture that container was rendered into.
 * _Important note: as with all Framebuffers in PixiJS, both input and output are
 * premultiplied by alpha._
 *
 * By default, input normalized coordinates are passed to fragment shader with `vTextureCoord`.
 * Use it to sample the input.
 *
 * ```
 * const fragment = `
 * varying vec2 vTextureCoord;
 * uniform sampler2D uSampler;
 * void main(void)
 * {
 *    gl_FragColor = texture2D(uSampler, vTextureCoord);
 * }
 * `;
 *
 * const myFilter = new PIXI.Filter(null, fragment);
 * ```
 *
 * This filter is just one uniform less than {@link PIXI.filters.AlphaFilter AlphaFilter}.
 *
 * **outputFrame**
 *
 * The `outputFrame` holds the rectangle where filter is applied in screen (CSS) coordinates.
 * It's the same as `renderer.screen` for a fullscreen filter.
 * Only a part of  `outputFrame.zw` size of temporary Framebuffer is used,
 * `(0, 0, outputFrame.width, outputFrame.height)`,
 *
 * Filters uses this quad to normalized (0-1) space, its passed into `aVertexPosition` attribute.
 * To calculate vertex position in screen space using normalized (0-1) space:
 *
 * ```
 * vec4 filterVertexPosition( void )
 * {
 *     vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
 *     return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
 * }
 * ```
 *
 * **inputSize**
 *
 * Temporary framebuffer is different, it can be either the size of screen, either power-of-two.
 * The `inputSize.xy` are size of temporary framebuffer that holds input.
 * The `inputSize.zw` is inverted, it's a shortcut to evade division inside the shader.
 *
 * Set `inputSize.xy = outputFrame.zw` for a fullscreen filter.
 *
 * To calculate input normalized coordinate, you have to map it to filter normalized space.
 * Multiply by `outputFrame.zw` to get input coordinate.
 * Divide by `inputSize.xy` to get input normalized coordinate.
 *
 * ```
 * vec2 filterTextureCoord( void )
 * {
 *     return aVertexPosition * (outputFrame.zw * inputSize.zw); // same as /inputSize.xy
 * }
 * ```
 * **resolution**
 *
 * The `resolution` is the ratio of screen (CSS) pixels to real pixels.
 *
 * **inputPixel**
 *
 * `inputPixel.xy` is the size of framebuffer in real pixels, same as `inputSize.xy * resolution`
 * `inputPixel.zw` is inverted `inputPixel.xy`.
 *
 * It's handy for filters that use neighbour pixels, like {@link PIXI.filters.FXAAFilter FXAAFilter}.
 *
 * **inputClamp**
 *
 * If you try to get info from outside of used part of Framebuffer - you'll get undefined behaviour.
 * For displacements, coordinates has to be clamped.
 *
 * The `inputClamp.xy` is left-top pixel center, you may ignore it, because we use left-top part of Framebuffer
 * `inputClamp.zw` is bottom-right pixel center.
 *
 * ```
 * vec4 color = texture2D(uSampler, clamp(modifigedTextureCoord, inputClamp.xy, inputClamp.zw))
 * ```
 * OR
 * ```
 * vec4 color = texture2D(uSampler, min(modifigedTextureCoord, inputClamp.zw))
 * ```
 *
 * ### Additional Information
 *
 * Complete documentation on Filter usage is located in the
 * {@link https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters Wiki}.
 *
 * Since PixiJS only had a handful of built-in filters, additional filters can be downloaded
 * {@link https://github.com/pixijs/pixi-filters here} from the PixiJS Filters repository.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.Shader
 */
var Filter = /*@__PURE__*/(function (Shader) {
    function Filter(vertexSrc, fragmentSrc, uniforms)
    {
        var program = Program.from(vertexSrc || Filter.defaultVertexSrc,
            fragmentSrc || Filter.defaultFragmentSrc);

        Shader.call(this, program, uniforms);

        /**
         * The padding of the filter. Some filters require extra space to breath such as a blur.
         * Increasing this will add extra width and height to the bounds of the object that the
         * filter is applied to.
         *
         * @member {number}
         */
        this.padding = 0;

        /**
         * The resolution of the filter. Setting this to be lower will lower the quality but
         * increase the performance of the filter.
         *
         * @member {number}
         */
        this.resolution = _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].FILTER_RESOLUTION;

        /**
         * If enabled is true the filter is applied, if false it will not.
         *
         * @member {boolean}
         */
        this.enabled = true;

        /**
         * If enabled, PixiJS will fit the filter area into boundaries for better performance.
         * Switch it off if it does not work for specific shader.
         *
         * @member {boolean}
         */
        this.autoFit = true;

        /**
         * Legacy filters use position and uvs from attributes
         * @member {boolean}
         * @readonly
         */
        this.legacy = !!this.program.attributeData.aTextureCoord;

        /**
         * The WebGL state the filter requires to render
         * @member {PIXI.State}
         */
        this.state = new State();
    }

    if ( Shader ) Filter.__proto__ = Shader;
    Filter.prototype = Object.create( Shader && Shader.prototype );
    Filter.prototype.constructor = Filter;

    var prototypeAccessors = { blendMode: { configurable: true } };
    var staticAccessors = { defaultVertexSrc: { configurable: true },defaultFragmentSrc: { configurable: true } };

    /**
     * Applies the filter
     *
     * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
     * @param {PIXI.RenderTexture} input - The input render target.
     * @param {PIXI.RenderTexture} output - The target to output to.
     * @param {boolean} clear - Should the output be cleared before rendering to it
     * @param {object} [currentState] - It's current state of filter.
     *        There are some useful properties in the currentState :
     *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
     */
    Filter.prototype.apply = function apply (filterManager, input, output, clear, currentState)
    {
        // do as you please!

        filterManager.applyFilter(this, input, output, clear, currentState);

        // or just do a regular render..
    };

    /**
     * Sets the blendmode of the filter
     *
     * @member {number}
     * @default PIXI.BLEND_MODES.NORMAL
     */
    prototypeAccessors.blendMode.get = function ()
    {
        return this.state.blendMode;
    };

    prototypeAccessors.blendMode.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.state.blendMode = value;
    };

    /**
     * The default vertex shader source
     *
     * @static
     * @type {string}
     * @constant
     */
    staticAccessors.defaultVertexSrc.get = function ()
    {
        return defaultVertex$1;
    };

    /**
     * The default fragment shader source
     *
     * @static
     * @type {string}
     * @constant
     */
    staticAccessors.defaultFragmentSrc.get = function ()
    {
        return defaultFragment$1;
    };

    Object.defineProperties( Filter.prototype, prototypeAccessors );
    Object.defineProperties( Filter, staticAccessors );

    return Filter;
}(Shader));

/**
 * Used for caching shader IDs
 *
 * @static
 * @type {object}
 * @protected
 */
Filter.SOURCE_KEY_MAP = {};

var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n";

var fragment = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n";

var tempMat = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"]();

/**
 * Class controls uv mapping from Texture normal space to BaseTexture normal space.
 *
 * Takes `trim` and `rotate` into account. May contain clamp settings for Meshes and TilingSprite.
 *
 * Can be used in Texture `uvMatrix` field, or separately, you can use different clamp settings on the same texture.
 * If you want to add support for texture region of certain feature or filter, that's what you're looking for.
 *
 * Takes track of Texture changes through `_lastTextureID` private field.
 * Use `update()` method call to track it from outside.
 *
 * @see PIXI.Texture
 * @see PIXI.Mesh
 * @see PIXI.TilingSprite
 * @class
 * @memberof PIXI
 */
var TextureMatrix = function TextureMatrix(texture, clampMargin)
{
    this._texture = texture;

    /**
     * Matrix operation that converts texture region coords to texture coords
     * @member {PIXI.Matrix}
     * @readonly
     */
    this.mapCoord = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"]();

    /**
     * Clamp region for normalized coords, left-top pixel center in xy , bottom-right in zw.
     * Calculated based on clampOffset.
     * @member {Float32Array}
     * @readonly
     */
    this.uClampFrame = new Float32Array(4);

    /**
     * Normalized clamp offset.
     * Calculated based on clampOffset.
     * @member {Float32Array}
     * @readonly
     */
    this.uClampOffset = new Float32Array(2);

    /**
     * Tracks Texture frame changes
     * @member {number}
     * @protected
     */
    this._updateID = -1;

    /**
     * Changes frame clamping
     * Works with TilingSprite and Mesh
     * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders
     *
     * @default 0
     * @member {number}
     */
    this.clampOffset = 0;

    /**
     * Changes frame clamping
     * Works with TilingSprite and Mesh
     * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
     *
     * @default 0.5
     * @member {number}
     */
    this.clampMargin = (typeof clampMargin === 'undefined') ? 0.5 : clampMargin;

    /**
     * If texture size is the same as baseTexture
     * @member {boolean}
     * @default false
     * @readonly
     */
    this.isSimple = false;
};

var prototypeAccessors$4 = { texture: { configurable: true } };

/**
 * texture property
 * @member {PIXI.Texture}
 */
prototypeAccessors$4.texture.get = function ()
{
    return this._texture;
};

prototypeAccessors$4.texture.set = function (value) // eslint-disable-line require-jsdoc
{
    this._texture = value;
    this._updateID = -1;
};

/**
 * Multiplies uvs array to transform
 * @param {Float32Array} uvs mesh uvs
 * @param {Float32Array} [out=uvs] output
 * @returns {Float32Array} output
 */
TextureMatrix.prototype.multiplyUvs = function multiplyUvs (uvs, out)
{
    if (out === undefined)
    {
        out = uvs;
    }

    var mat = this.mapCoord;

    for (var i = 0; i < uvs.length; i += 2)
    {
        var x = uvs[i];
        var y = uvs[i + 1];

        out[i] = (x * mat.a) + (y * mat.c) + mat.tx;
        out[i + 1] = (x * mat.b) + (y * mat.d) + mat.ty;
    }

    return out;
};

/**
 * updates matrices if texture was changed
 * @param {boolean} [forceUpdate=false] if true, matrices will be updated any case
 * @returns {boolean} whether or not it was updated
 */
TextureMatrix.prototype.update = function update (forceUpdate)
{
    var tex = this._texture;

    if (!tex || !tex.valid)
    {
        return false;
    }

    if (!forceUpdate
        && this._updateID === tex._updateID)
    {
        return false;
    }

    this._updateID = tex._updateID;

    var uvs = tex._uvs;

    this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);

    var orig = tex.orig;
    var trim = tex.trim;

    if (trim)
    {
        tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height,
            -trim.x / trim.width, -trim.y / trim.height);
        this.mapCoord.append(tempMat);
    }

    var texBase = tex.baseTexture;
    var frame = this.uClampFrame;
    var margin = this.clampMargin / texBase.resolution;
    var offset = this.clampOffset;

    frame[0] = (tex._frame.x + margin + offset) / texBase.width;
    frame[1] = (tex._frame.y + margin + offset) / texBase.height;
    frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
    frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
    this.uClampOffset[0] = offset / texBase.realWidth;
    this.uClampOffset[1] = offset / texBase.realHeight;

    this.isSimple = tex._frame.width === texBase.width
        && tex._frame.height === texBase.height
        && tex.rotate === 0;

    return true;
};

Object.defineProperties( TextureMatrix.prototype, prototypeAccessors$4 );

/**
 * This handles a Sprite acting as a mask, as opposed to a Graphic.
 *
 * WebGL only.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 */
var SpriteMaskFilter = /*@__PURE__*/(function (Filter) {
    function SpriteMaskFilter(sprite)
    {
        var maskMatrix = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"]();

        Filter.call(this, vertex, fragment);

        sprite.renderable = false;

        /**
         * Sprite mask
         * @member {PIXI.Sprite}
         */
        this.maskSprite = sprite;

        /**
         * Mask matrix
         * @member {PIXI.Matrix}
         */
        this.maskMatrix = maskMatrix;
    }

    if ( Filter ) SpriteMaskFilter.__proto__ = Filter;
    SpriteMaskFilter.prototype = Object.create( Filter && Filter.prototype );
    SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;

    /**
     * Applies the filter
     *
     * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
     * @param {PIXI.RenderTexture} input - The input render target.
     * @param {PIXI.RenderTexture} output - The target to output to.
     * @param {boolean} clear - Should the output be cleared before rendering to it.
     */
    SpriteMaskFilter.prototype.apply = function apply (filterManager, input, output, clear)
    {
        var maskSprite = this.maskSprite;
        var tex = this.maskSprite.texture;

        if (!tex.valid)
        {
            return;
        }
        if (!tex.transform)
        {
            // margin = 0.0, let it bleed a bit, shader code becomes easier
            // assuming that atlas textures were made with 1-pixel padding
            tex.transform = new TextureMatrix(tex, 0.0);
        }
        tex.transform.update();

        this.uniforms.npmAlpha = tex.baseTexture.alphaMode ? 0.0 : 1.0;
        this.uniforms.mask = tex;
        // get _normalized sprite texture coords_ and convert them to _normalized atlas texture coords_ with `prepend`
        this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite)
            .prepend(tex.transform.mapCoord);
        this.uniforms.alpha = maskSprite.worldAlpha;
        this.uniforms.maskClamp = tex.transform.uClampFrame;

        filterManager.applyFilter(this, input, output, clear);
    };

    return SpriteMaskFilter;
}(Filter));

/**
 * System plugin to the renderer to manage masks.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var MaskSystem = /*@__PURE__*/(function (System) {
    function MaskSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * Target to mask
         * @member {PIXI.DisplayObject}
         * @readonly
         */
        this.scissorRenderTarget = null;

        /**
         * Enable scissor
         * @member {boolean}
         * @readonly
         */
        this.enableScissor = false;

        /**
         * Pool of used sprite mask filters
         * @member {PIXI.SpriteMaskFilter[]}
         * @readonly
         */
        this.alphaMaskPool = [];

        /**
         * Pool of mask data
         * @member {PIXI.MaskData[]}
         * @readonly
         */
        this.maskDataPool = [];

        this.maskStack = [];

        /**
         * Current index of alpha mask pool
         * @member {number}
         * @default 0
         * @readonly
         */
        this.alphaMaskIndex = 0;
    }

    if ( System ) MaskSystem.__proto__ = System;
    MaskSystem.prototype = Object.create( System && System.prototype );
    MaskSystem.prototype.constructor = MaskSystem;

    /**
     * Changes the mask stack that is used by this System.
     *
     * @param {PIXI.MaskData[]} maskStack - The mask stack
     */
    MaskSystem.prototype.setMaskStack = function setMaskStack (maskStack)
    {
        this.maskStack = maskStack;
        this.renderer.scissor.setMaskStack(maskStack);
        this.renderer.stencil.setMaskStack(maskStack);
    };

    /**
     * Applies the Mask and adds it to the current filter stack.
     * Renderer batch must be flushed beforehand.
     *
     * @param {PIXI.DisplayObject} target - Display Object to push the mask to
     * @param {PIXI.MaskData|PIXI.Sprite|PIXI.Graphics|PIXI.DisplayObject} maskData - The masking data.
     */
    MaskSystem.prototype.push = function push (target, maskData)
    {
        if (!maskData.isMaskData)
        {
            var d = this.maskDataPool.pop() || new MaskData();

            d.pooled = true;
            d.maskObject = maskData;
            maskData = d;
        }

        if (maskData.autoDetect)
        {
            this.detect(maskData);
        }

        maskData.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]);
        maskData._target = target;

        switch (maskData.type)
        {
            case _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].SCISSOR:
                this.maskStack.push(maskData);
                this.renderer.scissor.push(maskData);
                break;
            case _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].STENCIL:
                this.maskStack.push(maskData);
                this.renderer.stencil.push(maskData);
                break;
            case _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].SPRITE:
                maskData.copyCountersOrReset(null);
                this.pushSpriteMask(maskData);
                this.maskStack.push(maskData);
                break;
            default:
                break;
        }
    };

    /**
     * Removes the last mask from the mask stack and doesn't return it.
     * Renderer batch must be flushed beforehand.
     *
     * @param {PIXI.DisplayObject} target - Display Object to pop the mask from
     */
    MaskSystem.prototype.pop = function pop (target)
    {
        var maskData = this.maskStack.pop();

        if (!maskData || maskData._target !== target)
        {
            // TODO: add an assert when we have it

            return;
        }

        switch (maskData.type)
        {
            case _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].SCISSOR:
                this.renderer.scissor.pop();
                break;
            case _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].STENCIL:
                this.renderer.stencil.pop(maskData.maskObject);
                break;
            case _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].SPRITE:
                this.popSpriteMask();
                break;
            default:
                break;
        }

        maskData.reset();

        if (maskData.pooled)
        {
            this.maskDataPool.push(maskData);
        }
    };

    /**
     * Sets type of MaskData based on its maskObject
     * @param {PIXI.MaskData} maskData
     */
    MaskSystem.prototype.detect = function detect (maskData)
    {
        var maskObject = maskData.maskObject;

        if (maskObject.isSprite)
        {
            maskData.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].SPRITE;

            return;
        }
        maskData.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].STENCIL;
        // detect scissor in graphics
        if (this.enableScissor
            && maskObject.isFastRect
            && maskObject.isFastRect())
        {
            var matrix = maskObject.worldTransform;

            // TODO: move the check to the matrix itself
            // we are checking that its orthogonal and x rotation is 0 90 180 or 270

            var rotX = Math.atan2(matrix.b, matrix.a);
            var rotXY = Math.atan2(matrix.d, matrix.c);

            // use the nearest degree to 0.01
            rotX = Math.round(rotX * (180 / Math.PI) * 100);
            rotXY = Math.round(rotXY * (180 / Math.PI) * 100) - rotX;

            rotX = ((rotX % 9000) + 9000) % 9000;
            rotXY = ((rotXY % 18000) + 18000) % 18000;

            if (rotX === 0 && rotXY === 9000)
            {
                maskData.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MASK_TYPES */ "g"].SCISSOR;
            }
        }
    };

    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {PIXI.MaskData} maskData - Sprite to be used as the mask
     */
    MaskSystem.prototype.pushSpriteMask = function pushSpriteMask (maskData)
    {
        var maskObject = maskData.maskObject;
        var target = maskData._target;
        var alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];

        if (!alphaMaskFilter)
        {
            alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new SpriteMaskFilter(maskObject)];
        }

        alphaMaskFilter[0].resolution = this.renderer.resolution;
        alphaMaskFilter[0].maskSprite = maskObject;

        var stashFilterArea = target.filterArea;

        target.filterArea = maskObject.getBounds(true);
        this.renderer.filter.push(target, alphaMaskFilter);
        target.filterArea = stashFilterArea;

        this.alphaMaskIndex++;
    };

    /**
     * Removes the last filter from the filter stack and doesn't return it.
     */
    MaskSystem.prototype.popSpriteMask = function popSpriteMask ()
    {
        this.renderer.filter.pop();
        this.alphaMaskIndex--;
    };

    return MaskSystem;
}(System));

/**
 * System plugin to the renderer to manage masks of certain type
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var AbstractMaskSystem = /*@__PURE__*/(function (System) {
    function AbstractMaskSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * The mask stack
         * @member {PIXI.MaskData[]}
         */
        this.maskStack = [];

        /**
         * Constant for gl.enable
         * @member {number}
         * @private
         */
        this.glConst = 0;
    }

    if ( System ) AbstractMaskSystem.__proto__ = System;
    AbstractMaskSystem.prototype = Object.create( System && System.prototype );
    AbstractMaskSystem.prototype.constructor = AbstractMaskSystem;

    /**
     * gets count of masks of certain type
     * @returns {number}
     */
    AbstractMaskSystem.prototype.getStackLength = function getStackLength ()
    {
        return this.maskStack.length;
    };

    /**
     * Changes the mask stack that is used by this System.
     *
     * @param {PIXI.MaskData[]} maskStack - The mask stack
     */
    AbstractMaskSystem.prototype.setMaskStack = function setMaskStack (maskStack)
    {
        var ref = this.renderer;
        var gl = ref.gl;
        var curStackLen = this.getStackLength();

        this.maskStack = maskStack;

        var newStackLen = this.getStackLength();

        if (newStackLen !== curStackLen)
        {
            if (newStackLen === 0)
            {
                gl.disable(this.glConst);
            }
            else
            {
                gl.enable(this.glConst);
                this._useCurrent();
            }
        }
    };

    /**
     * Setup renderer to use the current mask data.
     * @private
     */
    AbstractMaskSystem.prototype._useCurrent = function _useCurrent ()
    {
        // OVERWRITE;
    };

    /**
     * Destroys the mask stack.
     *
     */
    AbstractMaskSystem.prototype.destroy = function destroy ()
    {
        System.prototype.destroy.call(this, this);

        this.maskStack = null;
    };

    return AbstractMaskSystem;
}(System));

/**
 * System plugin to the renderer to manage scissor rects (used for masks).
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var ScissorSystem = /*@__PURE__*/(function (AbstractMaskSystem) {
    function ScissorSystem(renderer)
    {
        AbstractMaskSystem.call(this, renderer);

        this.glConst = WebGLRenderingContext.SCISSOR_TEST;
    }

    if ( AbstractMaskSystem ) ScissorSystem.__proto__ = AbstractMaskSystem;
    ScissorSystem.prototype = Object.create( AbstractMaskSystem && AbstractMaskSystem.prototype );
    ScissorSystem.prototype.constructor = ScissorSystem;

    ScissorSystem.prototype.getStackLength = function getStackLength ()
    {
        var maskData = this.maskStack[this.maskStack.length - 1];

        if (maskData)
        {
            return maskData._scissorCounter;
        }

        return 0;
    };

    /**
     * Applies the Mask and adds it to the current stencil stack. @alvin
     *
     * @param {PIXI.MaskData} maskData - The mask data
     */
    ScissorSystem.prototype.push = function push (maskData)
    {
        var maskObject = maskData.maskObject;

        maskObject.renderable = true;

        var prevData = maskData._scissorRect;
        var bounds = maskObject.getBounds(true);
        var ref = this.renderer;
        var gl = ref.gl;

        maskObject.renderable = false;

        if (prevData)
        {
            bounds.fit(prevData);
        }
        else
        {
            gl.enable(gl.SCISSOR_TEST);
        }

        maskData._scissorCounter++;
        maskData._scissorRect = bounds;
        this._useCurrent();
    };

    /**
     * Pops scissor mask. MaskData is already removed from stack
     */
    ScissorSystem.prototype.pop = function pop ()
    {
        var ref = this.renderer;
        var gl = ref.gl;

        if (this.getStackLength() > 0)
        {
            this._useCurrent();
        }
        else
        {
            gl.disable(gl.SCISSOR_TEST);
        }
    };

    /**
     * Setup renderer to use the current scissor data.
     * @private
     */
    ScissorSystem.prototype._useCurrent = function _useCurrent ()
    {
        var rect = this.maskStack[this.maskStack.length - 1]._scissorRect;
        var rt = this.renderer.renderTexture.current;
        var ref = this.renderer.projection;
        var transform = ref.transform;
        var sourceFrame = ref.sourceFrame;
        var destinationFrame = ref.destinationFrame;
        var resolution = rt ? rt.resolution : this.renderer.resolution;
        var x = ((rect.x - sourceFrame.x) * resolution) + destinationFrame.x;
        var y = ((rect.y - sourceFrame.y) * resolution) + destinationFrame.y;
        var width = rect.width * resolution;
        var height = rect.height * resolution;

        if (transform)
        {
            x += transform.tx * resolution;
            y += transform.ty * resolution;
        }
        if (!rt)
        {
            // flipY. In future we'll have it over renderTextures as an option
            y = this.renderer.height - height - y;
        }

        this.renderer.gl.scissor(x, y, width, height);
    };

    return ScissorSystem;
}(AbstractMaskSystem));

/**
 * System plugin to the renderer to manage stencils (used for masks).
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var StencilSystem = /*@__PURE__*/(function (AbstractMaskSystem) {
    function StencilSystem(renderer)
    {
        AbstractMaskSystem.call(this, renderer);

        this.glConst = WebGLRenderingContext.STENCIL_TEST;
    }

    if ( AbstractMaskSystem ) StencilSystem.__proto__ = AbstractMaskSystem;
    StencilSystem.prototype = Object.create( AbstractMaskSystem && AbstractMaskSystem.prototype );
    StencilSystem.prototype.constructor = StencilSystem;

    StencilSystem.prototype.getStackLength = function getStackLength ()
    {
        var maskData = this.maskStack[this.maskStack.length - 1];

        if (maskData)
        {
            return maskData._stencilCounter;
        }

        return 0;
    };

    /**
     * Applies the Mask and adds it to the current stencil stack.
     *
     * @param {PIXI.MaskData} maskData - The mask data
     */
    StencilSystem.prototype.push = function push (maskData)
    {
        var maskObject = maskData.maskObject;
        var ref = this.renderer;
        var gl = ref.gl;
        var prevMaskCount = maskData._stencilCounter;

        if (prevMaskCount === 0)
        {
            // force use stencil texture in current framebuffer
            this.renderer.framebuffer.forceStencil();
            gl.enable(gl.STENCIL_TEST);
        }

        maskData._stencilCounter++;

        // Increment the reference stencil value where the new mask overlaps with the old ones.
        gl.colorMask(false, false, false, false);
        gl.stencilFunc(gl.EQUAL, prevMaskCount, this._getBitwiseMask());
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);

        maskObject.renderable = true;
        maskObject.render(this.renderer);
        this.renderer.batch.flush();
        maskObject.renderable = false;

        this._useCurrent();
    };

    /**
     * Pops stencil mask. MaskData is already removed from stack
     *
     * @param {PIXI.DisplayObject} maskObject - object of popped mask data
     */
    StencilSystem.prototype.pop = function pop (maskObject)
    {
        var gl = this.renderer.gl;

        if (this.getStackLength() === 0)
        {
            // the stack is empty!
            gl.disable(gl.STENCIL_TEST);
            gl.clear(gl.STENCIL_BUFFER_BIT);
            gl.clearStencil(0);
        }
        else
        {
            // Decrement the reference stencil value where the popped mask overlaps with the other ones
            gl.colorMask(false, false, false, false);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);

            maskObject.renderable = true;
            maskObject.render(this.renderer);
            this.renderer.batch.flush();
            maskObject.renderable = false;

            this._useCurrent();
        }
    };

    /**
     * Setup renderer to use the current stencil data.
     * @private
     */
    StencilSystem.prototype._useCurrent = function _useCurrent ()
    {
        var gl = this.renderer.gl;

        gl.colorMask(true, true, true, true);
        gl.stencilFunc(gl.EQUAL, this.getStackLength(), this._getBitwiseMask());
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    };

    /**
     * Fill 1s equal to the number of acitve stencil masks.
     * @private
     * @return {number} The bitwise mask.
     */
    StencilSystem.prototype._getBitwiseMask = function _getBitwiseMask ()
    {
        return (1 << this.getStackLength()) - 1;
    };

    return StencilSystem;
}(AbstractMaskSystem));

/**
 * System plugin to the renderer to manage the projection matrix.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */

var ProjectionSystem = /*@__PURE__*/(function (System) {
    function ProjectionSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * Destination frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        this.destinationFrame = null;

        /**
         * Source frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        this.sourceFrame = null;

        /**
         * Default destination frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        this.defaultFrame = null;

        /**
         * Project matrix
         * @member {PIXI.Matrix}
         * @readonly
         */
        this.projectionMatrix = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"]();

        /**
         * A transform that will be appended to the projection matrix
         * if null, nothing will be applied
         * @member {PIXI.Matrix}
         */
        this.transform = null;
    }

    if ( System ) ProjectionSystem.__proto__ = System;
    ProjectionSystem.prototype = Object.create( System && System.prototype );
    ProjectionSystem.prototype.constructor = ProjectionSystem;

    /**
     * Updates the projection matrix based on a projection frame (which is a rectangle)
     *
     * @param {PIXI.Rectangle} destinationFrame - The destination frame.
     * @param {PIXI.Rectangle} sourceFrame - The source frame.
     * @param {Number} resolution - Resolution
     * @param {boolean} root - If is root
     */
    ProjectionSystem.prototype.update = function update (destinationFrame, sourceFrame, resolution, root)
    {
        this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
        this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;

        this.calculateProjection(this.destinationFrame, this.sourceFrame, resolution, root);

        if (this.transform)
        {
            this.projectionMatrix.append(this.transform);
        }

        var renderer =  this.renderer;

        renderer.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
        renderer.globalUniforms.update();

        // this will work for now
        // but would be sweet to stick and even on the global uniforms..
        if (renderer.shader.shader)
        {
            renderer.shader.syncUniformGroup(renderer.shader.shader.uniforms.globals);
        }
    };

    /**
     * Updates the projection matrix based on a projection frame (which is a rectangle)
     *
     * @param {PIXI.Rectangle} destinationFrame - The destination frame.
     * @param {PIXI.Rectangle} sourceFrame - The source frame.
     * @param {Number} resolution - Resolution
     * @param {boolean} root - If is root
     */
    ProjectionSystem.prototype.calculateProjection = function calculateProjection (destinationFrame, sourceFrame, resolution, root)
    {
        var pm = this.projectionMatrix;

        // I don't think we will need this line..
        // pm.identity();

        if (!root)
        {
            pm.a = (1 / destinationFrame.width * 2) * resolution;
            pm.d = (1 / destinationFrame.height * 2) * resolution;

            pm.tx = -1 - (sourceFrame.x * pm.a);
            pm.ty = -1 - (sourceFrame.y * pm.d);
        }
        else
        {
            pm.a = (1 / destinationFrame.width * 2) * resolution;
            pm.d = (-1 / destinationFrame.height * 2) * resolution;

            pm.tx = -1 - (sourceFrame.x * pm.a);
            pm.ty = 1 - (sourceFrame.y * pm.d);
        }
    };

    /**
     * Sets the transform of the active render target to the given matrix
     *
     * @param {PIXI.Matrix} matrix - The transformation matrix
     */
    ProjectionSystem.prototype.setTransform = function setTransform ()// matrix)
    {
        // this._activeRenderTarget.transform = matrix;
    };

    return ProjectionSystem;
}(System));

var tempRect = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();

/**
 * System plugin to the renderer to manage render textures.
 *
 * Should be added after FramebufferSystem
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */

var RenderTextureSystem = /*@__PURE__*/(function (System) {
    function RenderTextureSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * The clear background color as rgba
         * @member {number[]}
         */
        this.clearColor = renderer._backgroundColorRgba;

        // TODO move this property somewhere else!
        /**
         * List of masks for the StencilSystem
         * @member {PIXI.Graphics[]}
         * @readonly
         */
        this.defaultMaskStack = [];

        // empty render texture?
        /**
         * Render texture
         * @member {PIXI.RenderTexture}
         * @readonly
         */
        this.current = null;

        /**
         * Source frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        this.sourceFrame = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();

        /**
         * Destination frame
         * @member {PIXI.Rectangle}
         * @readonly
         */
        this.destinationFrame = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"]();
    }

    if ( System ) RenderTextureSystem.__proto__ = System;
    RenderTextureSystem.prototype = Object.create( System && System.prototype );
    RenderTextureSystem.prototype.constructor = RenderTextureSystem;

    /**
     * Bind the current render texture
     * @param {PIXI.RenderTexture} [renderTexture] - RenderTexture to bind, by default its `null`, the screen
     * @param {PIXI.Rectangle} [sourceFrame] - part of screen that is mapped to the renderTexture
     * @param {PIXI.Rectangle} [destinationFrame] - part of renderTexture, by default it has the same size as sourceFrame
     */
    RenderTextureSystem.prototype.bind = function bind (renderTexture, sourceFrame, destinationFrame)
    {
        if ( renderTexture === void 0 ) renderTexture = null;

        this.current = renderTexture;

        var renderer = this.renderer;

        var resolution;

        if (renderTexture)
        {
            var baseTexture = renderTexture.baseTexture;

            resolution = baseTexture.resolution;

            if (!destinationFrame)
            {
                tempRect.width = baseTexture.realWidth;
                tempRect.height = baseTexture.realHeight;

                destinationFrame = tempRect;
            }

            if (!sourceFrame)
            {
                sourceFrame = destinationFrame;
            }

            this.renderer.framebuffer.bind(baseTexture.framebuffer, destinationFrame);

            this.renderer.projection.update(destinationFrame, sourceFrame, resolution, false);
            this.renderer.mask.setMaskStack(baseTexture.maskStack);
        }
        else
        {
            resolution = this.renderer.resolution;

            // TODO these validation checks happen deeper down..
            // thing they can be avoided..
            if (!destinationFrame)
            {
                tempRect.width = renderer.width;
                tempRect.height = renderer.height;

                destinationFrame = tempRect;
            }

            if (!sourceFrame)
            {
                sourceFrame = destinationFrame;
            }

            renderer.framebuffer.bind(null, destinationFrame);

            // TODO store this..
            this.renderer.projection.update(destinationFrame, sourceFrame, resolution, true);
            this.renderer.mask.setMaskStack(this.defaultMaskStack);
        }

        this.sourceFrame.copyFrom(sourceFrame);

        this.destinationFrame.x = destinationFrame.x / resolution;
        this.destinationFrame.y = destinationFrame.y / resolution;

        this.destinationFrame.width = destinationFrame.width / resolution;
        this.destinationFrame.height = destinationFrame.height / resolution;

        if (sourceFrame === destinationFrame)
        {
            this.sourceFrame.copyFrom(this.destinationFrame);
        }
    };

    /**
     * Erases the render texture and fills the drawing area with a colour
     *
     * @param {number[]} [clearColor] - The color as rgba, default to use the renderer backgroundColor
     * @return {PIXI.Renderer} Returns itself.
     */
    RenderTextureSystem.prototype.clear = function clear (clearColor)
    {
        if (this.current)
        {
            clearColor = clearColor || this.current.baseTexture.clearColor;
        }
        else
        {
            clearColor = clearColor || this.clearColor;
        }

        this.renderer.framebuffer.clear(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
    };

    RenderTextureSystem.prototype.resize = function resize ()// screenWidth, screenHeight)
    {
        // resize the root only!
        this.bind(null);
    };

    /**
     * Resets renderTexture state
     */
    RenderTextureSystem.prototype.reset = function reset ()
    {
        this.bind(null);
    };

    return RenderTextureSystem;
}(System));

/**
 * Helper class to create a WebGL Program
 *
 * @class
 * @memberof PIXI
 */
var GLProgram = function GLProgram(program, uniformData)
{
    /**
     * The shader program
     *
     * @member {WebGLProgram}
     */
    this.program = program;

    /**
     * holds the uniform data which contains uniform locations
     * and current uniform values used for caching and preventing unneeded GPU commands
     * @member {Object}
     */
    this.uniformData = uniformData;

    /**
     * uniformGroups holds the various upload functions for the shader. Each uniform group
     * and program have a unique upload function generated.
     * @member {Object}
     */
    this.uniformGroups = {};
};

/**
 * Destroys this program
 */
GLProgram.prototype.destroy = function destroy ()
{
    this.uniformData = null;
    this.uniformGroups = null;
    this.program = null;
};

var UID$4 = 0;

/**
 * System plugin to the renderer to manage shaders.
 *
 * @class
 * @memberof PIXI.systems
 * @extends PIXI.System
 */
var ShaderSystem = /*@__PURE__*/(function (System) {
    function ShaderSystem(renderer)
    {
        System.call(this, renderer);

        // Validation check that this environment support `new Function`
        this.systemCheck();

        /**
         * The current WebGL rendering context
         *
         * @member {WebGLRenderingContext}
         */
        this.gl = null;

        this.shader = null;
        this.program = null;

        /**
         * Cache to holds the generated functions. Stored against UniformObjects unique signature
         * @type {Object}
         * @private
         */
        this.cache = {};

        this.id = UID$4++;
    }

    if ( System ) ShaderSystem.__proto__ = System;
    ShaderSystem.prototype = Object.create( System && System.prototype );
    ShaderSystem.prototype.constructor = ShaderSystem;

    /**
     * Overrideable function by `@pixi/unsafe-eval` to silence
     * throwing an error if platform doesn't support unsafe-evals.
     *
     * @private
     */
    ShaderSystem.prototype.systemCheck = function systemCheck ()
    {
        if (!unsafeEvalSupported())
        {
            throw new Error('Current environment does not allow unsafe-eval, '
                + 'please use @pixi/unsafe-eval module to enable support.');
        }
    };

    ShaderSystem.prototype.contextChange = function contextChange (gl)
    {
        this.gl = gl;
        this.reset();
    };

    /**
     * Changes the current shader to the one given in parameter
     *
     * @param {PIXI.Shader} shader - the new shader
     * @param {boolean} dontSync - false if the shader should automatically sync its uniforms.
     * @returns {PIXI.GLProgram} the glProgram that belongs to the shader.
     */
    ShaderSystem.prototype.bind = function bind (shader, dontSync)
    {
        shader.uniforms.globals = this.renderer.globalUniforms;

        var program = shader.program;
        var glProgram = program.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(shader);

        this.shader = shader;

        // TODO - some current Pixi plugins bypass this.. so it not safe to use yet..
        if (this.program !== program)
        {
            this.program = program;
            this.gl.useProgram(glProgram.program);
        }

        if (!dontSync)
        {
            this.syncUniformGroup(shader.uniformGroup);
        }

        return glProgram;
    };

    /**
     * Uploads the uniforms values to the currently bound shader.
     *
     * @param {object} uniforms - the uniforms values that be applied to the current shader
     */
    ShaderSystem.prototype.setUniforms = function setUniforms (uniforms)
    {
        var shader = this.shader.program;
        var glProgram = shader.glPrograms[this.renderer.CONTEXT_UID];

        shader.syncUniforms(glProgram.uniformData, uniforms, this.renderer);
    };

    ShaderSystem.prototype.syncUniformGroup = function syncUniformGroup (group)
    {
        var glProgram = this.getglProgram();

        if (!group.static || group.dirtyId !== glProgram.uniformGroups[group.id])
        {
            glProgram.uniformGroups[group.id] = group.dirtyId;

            this.syncUniforms(group, glProgram);
        }
    };

    /**
     * Overrideable by the @pixi/unsafe-eval package to use static
     * syncUnforms instead.
     *
     * @private
     */
    ShaderSystem.prototype.syncUniforms = function syncUniforms (group, glProgram)
    {
        var syncFunc = group.syncUniforms[this.shader.program.id] || this.createSyncGroups(group);

        syncFunc(glProgram.uniformData, group.uniforms, this.renderer);
    };

    ShaderSystem.prototype.createSyncGroups = function createSyncGroups (group)
    {
        var id = this.getSignature(group, this.shader.program.uniformData);

        if (!this.cache[id])
        {
            this.cache[id] = generateUniformsSync(group, this.shader.program.uniformData);
        }

        group.syncUniforms[this.shader.program.id] = this.cache[id];

        return group.syncUniforms[this.shader.program.id];
    };

    /**
     * Takes a uniform group and data and generates a unique signature for them.
     *
     * @param {PIXI.UniformGroup} group the uniform group to get signature of
     * @param {Object} uniformData uniform information generated by the shader
     * @returns {String} Unique signature of the uniform group
     * @private
     */
    ShaderSystem.prototype.getSignature = function getSignature (group, uniformData)
    {
        var uniforms = group.uniforms;

        var strings = [];

        for (var i in uniforms)
        {
            strings.push(i);

            if (uniformData[i])
            {
                strings.push(uniformData[i].type);
            }
        }

        return strings.join('-');
    };

    /**
     * Returns the underlying GLShade rof the currently bound shader.
     * This can be handy for when you to have a little more control over the setting of your uniforms.
     *
     * @return {PIXI.GLProgram} the glProgram for the currently bound Shader for this context
     */
    ShaderSystem.prototype.getglProgram = function getglProgram ()
    {
        if (this.shader)
        {
            return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
        }

        return null;
    };

    /**
     * Generates a glProgram version of the Shader provided.
     *
     * @private
     * @param {PIXI.Shader} shader the shader that the glProgram will be based on.
     * @return {PIXI.GLProgram} A shiny new glProgram!
     */
    ShaderSystem.prototype.generateShader = function generateShader (shader)
    {
        var gl = this.gl;

        var program = shader.program;

        var attribMap = {};

        for (var i in program.attributeData)
        {
            attribMap[i] = program.attributeData[i].location;
        }

        var shaderProgram = compileProgram(gl, program.vertexSrc, program.fragmentSrc, attribMap);
        var uniformData = {};

        for (var i$1 in program.uniformData)
        {
            var data = program.uniformData[i$1];

            uniformData[i$1] = {
                location: gl.getUniformLocation(shaderProgram, i$1),
                value: defaultValue(data.type, data.size),
            };
        }

        var glProgram = new GLProgram(shaderProgram, uniformData);

        program.glPrograms[this.renderer.CONTEXT_UID] = glProgram;

        return glProgram;
    };

    /**
     * Resets ShaderSystem state, does not affect WebGL state
     */
    ShaderSystem.prototype.reset = function reset ()
    {
        this.program = null;
        this.shader = null;
    };

    /**
     * Destroys this System and removes all its textures
     */
    ShaderSystem.prototype.destroy = function destroy ()
    {
        // TODO implement destroy method for ShaderSystem
        this.destroyed = true;
    };

    return ShaderSystem;
}(System));

/**
 * Maps gl blend combinations to WebGL.
 *
 * @memberof PIXI
 * @function mapWebGLBlendModesToPixi
 * @private
 * @param {WebGLRenderingContext} gl - The rendering context.
 * @param {number[][]} [array=[]] - The array to output into.
 * @return {number[][]} Mapped modes.
 */
function mapWebGLBlendModesToPixi(gl, array)
{
    if ( array === void 0 ) array = [];

    // TODO - premultiply alpha would be different.
    // add a boolean for that!
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].ADD] = [gl.ONE, gl.ONE];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].NONE] = [0, 0];

    // not-premultiplied blend modes
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].ADD_NPM] = [gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];

    // composite operations
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SRC_IN] = [gl.DST_ALPHA, gl.ZERO];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SRC_OUT] = [gl.ONE_MINUS_DST_ALPHA, gl.ZERO];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SRC_ATOP] = [gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].DST_OVER] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].DST_IN] = [gl.ZERO, gl.SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].DST_OUT] = [gl.ZERO, gl.ONE_MINUS_SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].DST_ATOP] = [gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA];
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].XOR] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];

    // SUBTRACT from flash
    array[_pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].SUBTRACT] = [gl.ONE, gl.ONE, gl.ONE, gl.ONE, gl.FUNC_REVERSE_SUBTRACT, gl.FUNC_ADD];

    return array;
}

var BLEND$1 = 0;
var OFFSET$1 = 1;
var CULLING$1 = 2;
var DEPTH_TEST$1 = 3;
var WINDING$1 = 4;

/**
 * System plugin to the renderer to manage WebGL state machines.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var StateSystem = /*@__PURE__*/(function (System) {
    function StateSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * GL context
         * @member {WebGLRenderingContext}
         * @readonly
         */
        this.gl = null;

        /**
         * State ID
         * @member {number}
         * @readonly
         */
        this.stateId = 0;

        /**
         * Polygon offset
         * @member {number}
         * @readonly
         */
        this.polygonOffset = 0;

        /**
         * Blend mode
         * @member {number}
         * @default PIXI.BLEND_MODES.NONE
         * @readonly
         */
        this.blendMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* BLEND_MODES */ "b"].NONE;

        /**
         * Whether current blend equation is different
         * @member {boolean}
         * @protected
         */
        this._blendEq = false;

        /**
         * Collection of calls
         * @member {function[]}
         * @readonly
         */
        this.map = [];

        // map functions for when we set state..
        this.map[BLEND$1] = this.setBlend;
        this.map[OFFSET$1] = this.setOffset;
        this.map[CULLING$1] = this.setCullFace;
        this.map[DEPTH_TEST$1] = this.setDepthTest;
        this.map[WINDING$1] = this.setFrontFace;

        /**
         * Collection of check calls
         * @member {function[]}
         * @readonly
         */
        this.checks = [];

        /**
         * Default WebGL State
         * @member {PIXI.State}
         * @readonly
         */
        this.defaultState = new State();
        this.defaultState.blend = true;
        this.defaultState.depth = true;
    }

    if ( System ) StateSystem.__proto__ = System;
    StateSystem.prototype = Object.create( System && System.prototype );
    StateSystem.prototype.constructor = StateSystem;

    StateSystem.prototype.contextChange = function contextChange (gl)
    {
        this.gl = gl;

        this.blendModes = mapWebGLBlendModesToPixi(gl);

        this.set(this.defaultState);

        this.reset();
    };

    /**
     * Sets the current state
     *
     * @param {*} state - The state to set.
     */
    StateSystem.prototype.set = function set (state)
    {
        state = state || this.defaultState;

        // TODO maybe to an object check? ( this.state === state )?
        if (this.stateId !== state.data)
        {
            var diff = this.stateId ^ state.data;
            var i = 0;

            // order from least to most common
            while (diff)
            {
                if (diff & 1)
                {
                    // state change!
                    this.map[i].call(this, !!(state.data & (1 << i)));
                }

                diff = diff >> 1;
                i++;
            }

            this.stateId = state.data;
        }

        // based on the above settings we check for specific modes..
        // for example if blend is active we check and set the blend modes
        // or of polygon offset is active we check the poly depth.
        for (var i$1 = 0; i$1 < this.checks.length; i$1++)
        {
            this.checks[i$1](this, state);
        }
    };

    /**
     * Sets the state, when previous state is unknown
     *
     * @param {*} state - The state to set
     */
    StateSystem.prototype.forceState = function forceState (state)
    {
        state = state || this.defaultState;
        for (var i = 0; i < this.map.length; i++)
        {
            this.map[i].call(this, !!(state.data & (1 << i)));
        }
        for (var i$1 = 0; i$1 < this.checks.length; i$1++)
        {
            this.checks[i$1](this, state);
        }

        this.stateId = state.data;
    };

    /**
     * Enables or disabled blending.
     *
     * @param {boolean} value - Turn on or off webgl blending.
     */
    StateSystem.prototype.setBlend = function setBlend (value)
    {
        this.updateCheck(StateSystem.checkBlendMode, value);

        this.gl[value ? 'enable' : 'disable'](this.gl.BLEND);
    };

    /**
     * Enables or disable polygon offset fill
     *
     * @param {boolean} value - Turn on or off webgl polygon offset testing.
     */
    StateSystem.prototype.setOffset = function setOffset (value)
    {
        this.updateCheck(StateSystem.checkPolygonOffset, value);

        this.gl[value ? 'enable' : 'disable'](this.gl.POLYGON_OFFSET_FILL);
    };

    /**
     * Sets whether to enable or disable depth test.
     *
     * @param {boolean} value - Turn on or off webgl depth testing.
     */
    StateSystem.prototype.setDepthTest = function setDepthTest (value)
    {
        this.gl[value ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
    };

    /**
     * Sets whether to enable or disable cull face.
     *
     * @param {boolean} value - Turn on or off webgl cull face.
     */
    StateSystem.prototype.setCullFace = function setCullFace (value)
    {
        this.gl[value ? 'enable' : 'disable'](this.gl.CULL_FACE);
    };

    /**
     * Sets the gl front face.
     *
     * @param {boolean} value - true is clockwise and false is counter-clockwise
     */
    StateSystem.prototype.setFrontFace = function setFrontFace (value)
    {
        this.gl.frontFace(this.gl[value ? 'CW' : 'CCW']);
    };

    /**
     * Sets the blend mode.
     *
     * @param {number} value - The blend mode to set to.
     */
    StateSystem.prototype.setBlendMode = function setBlendMode (value)
    {
        if (value === this.blendMode)
        {
            return;
        }

        this.blendMode = value;

        var mode = this.blendModes[value];
        var gl = this.gl;

        if (mode.length === 2)
        {
            gl.blendFunc(mode[0], mode[1]);
        }
        else
        {
            gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
        }
        if (mode.length === 6)
        {
            this._blendEq = true;
            gl.blendEquationSeparate(mode[4], mode[5]);
        }
        else if (this._blendEq)
        {
            this._blendEq = false;
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
        }
    };

    /**
     * Sets the polygon offset.
     *
     * @param {number} value - the polygon offset
     * @param {number} scale - the polygon offset scale
     */
    StateSystem.prototype.setPolygonOffset = function setPolygonOffset (value, scale)
    {
        this.gl.polygonOffset(value, scale);
    };

    // used
    /**
     * Resets all the logic and disables the vaos
     */
    StateSystem.prototype.reset = function reset ()
    {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);

        this.forceState(0);

        this._blendEq = true;
        this.blendMode = -1;
        this.setBlendMode(0);
    };

    /**
     * checks to see which updates should be checked based on which settings have been activated.
     * For example, if blend is enabled then we should check the blend modes each time the state is changed
     * or if polygon fill is activated then we need to check if the polygon offset changes.
     * The idea is that we only check what we have too.
     *
     * @param {Function} func  the checking function to add or remove
     * @param {boolean} value  should the check function be added or removed.
     */
    StateSystem.prototype.updateCheck = function updateCheck (func, value)
    {
        var index = this.checks.indexOf(func);

        if (value && index === -1)
        {
            this.checks.push(func);
        }
        else if (!value && index !== -1)
        {
            this.checks.splice(index, 1);
        }
    };

    /**
     * A private little wrapper function that we call to check the blend mode.
     *
     * @static
     * @private
     * @param {PIXI.StateSystem} System  the System to perform the state check on
     * @param {PIXI.State} state  the state that the blendMode will pulled from
     */
    StateSystem.checkBlendMode = function checkBlendMode (system, state)
    {
        system.setBlendMode(state.blendMode);
    };

    /**
     * A private little wrapper function that we call to check the polygon offset.
     *
     * @static
     * @private
     * @param {PIXI.StateSystem} System  the System to perform the state check on
     * @param {PIXI.State} state  the state that the blendMode will pulled from
     */
    StateSystem.checkPolygonOffset = function checkPolygonOffset (system, state)
    {
        system.setPolygonOffset(state.polygonOffset, 0);
    };

    return StateSystem;
}(System));

/**
 * System plugin to the renderer to manage texture garbage collection on the GPU,
 * ensuring that it does not get clogged up with textures that are no longer being used.
 *
 * @class
 * @memberof PIXI.systems
 * @extends PIXI.System
 */
var TextureGCSystem = /*@__PURE__*/(function (System) {
    function TextureGCSystem(renderer)
    {
        System.call(this, renderer);

        /**
         * Count
         * @member {number}
         * @readonly
         */
        this.count = 0;

        /**
         * Check count
         * @member {number}
         * @readonly
         */
        this.checkCount = 0;

        /**
         * Maximum idle time, in seconds
         * @member {number}
         * @see PIXI.settings.GC_MAX_IDLE
         */
        this.maxIdle = _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].GC_MAX_IDLE;

        /**
         * Maximum number of item to check
         * @member {number}
         * @see PIXI.settings.GC_MAX_CHECK_COUNT
         */
        this.checkCountMax = _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].GC_MAX_CHECK_COUNT;

        /**
         * Current garabage collection mode
         * @member {PIXI.GC_MODES}
         * @see PIXI.settings.GC_MODE
         */
        this.mode = _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].GC_MODE;
    }

    if ( System ) TextureGCSystem.__proto__ = System;
    TextureGCSystem.prototype = Object.create( System && System.prototype );
    TextureGCSystem.prototype.constructor = TextureGCSystem;

    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */
    TextureGCSystem.prototype.postrender = function postrender ()
    {
        if (!this.renderer.renderingToScreen)
        {
            return;
        }

        this.count++;

        if (this.mode === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* GC_MODES */ "f"].MANUAL)
        {
            return;
        }

        this.checkCount++;

        if (this.checkCount > this.checkCountMax)
        {
            this.checkCount = 0;

            this.run();
        }
    };

    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */
    TextureGCSystem.prototype.run = function run ()
    {
        var tm = this.renderer.texture;
        var managedTextures =  tm.managedTextures;
        var wasRemoved = false;

        for (var i = 0; i < managedTextures.length; i++)
        {
            var texture = managedTextures[i];

            // only supports non generated textures at the moment!
            if (!texture.framebuffer && this.count - texture.touched > this.maxIdle)
            {
                tm.destroyTexture(texture, true);
                managedTextures[i] = null;
                wasRemoved = true;
            }
        }

        if (wasRemoved)
        {
            var j = 0;

            for (var i$1 = 0; i$1 < managedTextures.length; i$1++)
            {
                if (managedTextures[i$1] !== null)
                {
                    managedTextures[j++] = managedTextures[i$1];
                }
            }

            managedTextures.length = j;
        }
    };

    /**
     * Removes all the textures within the specified displayObject and its children from the GPU
     *
     * @param {PIXI.DisplayObject} displayObject - the displayObject to remove the textures from.
     */
    TextureGCSystem.prototype.unload = function unload (displayObject)
    {
        var tm = this.renderer.textureSystem;

        // only destroy non generated textures
        if (displayObject._texture && displayObject._texture._glRenderTargets)
        {
            tm.destroyTexture(displayObject._texture);
        }

        for (var i = displayObject.children.length - 1; i >= 0; i--)
        {
            this.unload(displayObject.children[i]);
        }
    };

    return TextureGCSystem;
}(System));

/**
 * Internal texture for WebGL context
 * @class
 * @memberof PIXI
 */
var GLTexture = function GLTexture(texture)
{
    /**
     * The WebGL texture
     * @member {WebGLTexture}
     */
    this.texture = texture;

    /**
     * Width of texture that was used in texImage2D
     * @member {number}
     */
    this.width = -1;

    /**
     * Height of texture that was used in texImage2D
     * @member {number}
     */
    this.height = -1;

    /**
     * Texture contents dirty flag
     * @member {number}
     */
    this.dirtyId = -1;

    /**
     * Texture style dirty flag
     * @member {number}
     */
    this.dirtyStyleId = -1;

    /**
     * Whether mip levels has to be generated
     * @member {boolean}
     */
    this.mipmap = false;

    /**
     * WrapMode copied from baseTexture
     * @member {number}
     */
    this.wrapMode = 33071;

    /**
     * Type copied from baseTexture
     * @member {number}
     */
    this.type = 6408;

    /**
     * Type copied from baseTexture
     * @member {number}
     */
    this.internalFormat = 5121;
};

/**
 * System plugin to the renderer to manage textures.
 *
 * @class
 * @extends PIXI.System
 * @memberof PIXI.systems
 */
var TextureSystem = /*@__PURE__*/(function (System) {
    function TextureSystem(renderer)
    {
        System.call(this, renderer);

        // TODO set to max textures...
        /**
         * Bound textures
         * @member {PIXI.BaseTexture[]}
         * @readonly
         */
        this.boundTextures = [];
        /**
         * Current location
         * @member {number}
         * @readonly
         */
        this.currentLocation = -1;

        /**
         * List of managed textures
         * @member {PIXI.BaseTexture[]}
         * @readonly
         */
        this.managedTextures = [];

        /**
         * Did someone temper with textures state? We'll overwrite them when we need to unbind something.
         * @member {boolean}
         * @private
         */
        this._unknownBoundTextures = false;

        /**
         * BaseTexture value that shows that we don't know what is bound
         * @member {PIXI.BaseTexture}
         * @readonly
         */
        this.unknownTexture = new BaseTexture();
    }

    if ( System ) TextureSystem.__proto__ = System;
    TextureSystem.prototype = Object.create( System && System.prototype );
    TextureSystem.prototype.constructor = TextureSystem;

    /**
     * Sets up the renderer context and necessary buffers.
     */
    TextureSystem.prototype.contextChange = function contextChange ()
    {
        var gl = this.gl = this.renderer.gl;

        this.CONTEXT_UID = this.renderer.CONTEXT_UID;

        this.webGLVersion = this.renderer.context.webGLVersion;

        var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);

        this.boundTextures.length = maxTextures;

        for (var i = 0; i < maxTextures; i++)
        {
            this.boundTextures[i] = null;
        }

        // TODO move this.. to a nice make empty textures class..
        this.emptyTextures = {};

        var emptyTexture2D = new GLTexture(gl.createTexture());

        gl.bindTexture(gl.TEXTURE_2D, emptyTexture2D.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));

        this.emptyTextures[gl.TEXTURE_2D] = emptyTexture2D;
        this.emptyTextures[gl.TEXTURE_CUBE_MAP] = new GLTexture(gl.createTexture());

        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.emptyTextures[gl.TEXTURE_CUBE_MAP].texture);

        for (var i$1 = 0; i$1 < 6; i$1++)
        {
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i$1, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }

        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        for (var i$2 = 0; i$2 < this.boundTextures.length; i$2++)
        {
            this.bind(null, i$2);
        }
    };

    /**
     * Bind a texture to a specific location
     *
     * If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`
     *
     * @param {PIXI.Texture|PIXI.BaseTexture} texture - Texture to bind
     * @param {number} [location=0] - Location to bind at
     */
    TextureSystem.prototype.bind = function bind (texture, location)
    {
        if ( location === void 0 ) location = 0;

        var ref = this;
        var gl = ref.gl;

        if (texture)
        {
            texture = texture.baseTexture || texture;

            if (texture.valid)
            {
                texture.touched = this.renderer.textureGC.count;

                var glTexture = texture._glTextures[this.CONTEXT_UID] || this.initTexture(texture);

                if (this.boundTextures[location] !== texture)
                {
                    if (this.currentLocation !== location)
                    {
                        this.currentLocation = location;
                        gl.activeTexture(gl.TEXTURE0 + location);
                    }
                    gl.bindTexture(texture.target, glTexture.texture);
                }

                if (glTexture.dirtyId !== texture.dirtyId)
                {
                    if (this.currentLocation !== location)
                    {
                        this.currentLocation = location;
                        gl.activeTexture(gl.TEXTURE0 + location);
                    }
                    this.updateTexture(texture);
                }

                this.boundTextures[location] = texture;
            }
        }
        else
        {
            if (this.currentLocation !== location)
            {
                this.currentLocation = location;
                gl.activeTexture(gl.TEXTURE0 + location);
            }

            gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[gl.TEXTURE_2D].texture);
            this.boundTextures[location] = null;
        }
    };

    /**
     * Resets texture location and bound textures
     *
     * Actual `bind(null, i)` calls will be performed at next `unbind()` call
     */
    TextureSystem.prototype.reset = function reset ()
    {
        this._unknownBoundTextures = true;
        this.currentLocation = -1;

        for (var i = 0; i < this.boundTextures.length; i++)
        {
            this.boundTextures[i] = this.unknownTexture;
        }
    };

    /**
     * Unbind a texture
     * @param {PIXI.Texture|PIXI.BaseTexture} texture - Texture to bind
     */
    TextureSystem.prototype.unbind = function unbind (texture)
    {
        var ref = this;
        var gl = ref.gl;
        var boundTextures = ref.boundTextures;

        if (this._unknownBoundTextures)
        {
            this._unknownBoundTextures = false;
            // someone changed webGL state,
            // we have to be sure that our texture does not appear in multi-texture renderer samplers
            for (var i = 0; i < boundTextures.length; i++)
            {
                if (boundTextures[i] === this.unknownTexture)
                {
                    this.bind(null, i);
                }
            }
        }

        for (var i$1 = 0; i$1 < boundTextures.length; i$1++)
        {
            if (boundTextures[i$1] === texture)
            {
                if (this.currentLocation !== i$1)
                {
                    gl.activeTexture(gl.TEXTURE0 + i$1);
                    this.currentLocation = i$1;
                }

                gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[texture.target].texture);
                boundTextures[i$1] = null;
            }
        }
    };

    /**
     * Initialize a texture
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to initialize
     */
    TextureSystem.prototype.initTexture = function initTexture (texture)
    {
        var glTexture = new GLTexture(this.gl.createTexture());

        // guarantee an update..
        glTexture.dirtyId = -1;

        texture._glTextures[this.CONTEXT_UID] = glTexture;

        this.managedTextures.push(texture);
        texture.on('dispose', this.destroyTexture, this);

        return glTexture;
    };

    TextureSystem.prototype.initTextureType = function initTextureType (texture, glTexture)
    {
        glTexture.internalFormat = texture.format;
        glTexture.type = texture.type;
        if (this.webGLVersion !== 2)
        {
            return;
        }
        var gl = this.renderer.gl;

        if (texture.type === gl.FLOAT
            && texture.format === gl.RGBA)
        {
            glTexture.internalFormat = gl.RGBA32F;
        }
        // that's WebGL1 HALF_FLOAT_OES
        // we have to convert it to WebGL HALF_FLOAT
        if (texture.type === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].HALF_FLOAT)
        {
            glTexture.type = gl.HALF_FLOAT;
        }
        if (glTexture.type === gl.HALF_FLOAT
            && texture.format === gl.RGBA)
        {
            glTexture.internalFormat = gl.RGBA16F;
        }
    };

    /**
     * Update a texture
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to initialize
     */
    TextureSystem.prototype.updateTexture = function updateTexture (texture)
    {
        var glTexture = texture._glTextures[this.CONTEXT_UID];

        if (!glTexture)
        {
            return;
        }

        var renderer = this.renderer;

        this.initTextureType(texture, glTexture);

        if (texture.resource && texture.resource.upload(renderer, texture, glTexture))
        ;
        else
        {
            // default, renderTexture-like logic
            var width = texture.realWidth;
            var height = texture.realHeight;
            var gl = renderer.gl;

            if (glTexture.width !== width
                || glTexture.height !== height
                || glTexture.dirtyId < 0)
            {
                glTexture.width = width;
                glTexture.height = height;

                gl.texImage2D(texture.target, 0,
                    glTexture.internalFormat,
                    width,
                    height,
                    0,
                    texture.format,
                    glTexture.type,
                    null);
            }
        }

        // lets only update what changes..
        if (texture.dirtyStyleId !== glTexture.dirtyStyleId)
        {
            this.updateTextureStyle(texture);
        }
        glTexture.dirtyId = texture.dirtyId;
    };

    /**
     * Deletes the texture from WebGL
     *
     * @private
     * @param {PIXI.BaseTexture|PIXI.Texture} texture - the texture to destroy
     * @param {boolean} [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
     */
    TextureSystem.prototype.destroyTexture = function destroyTexture (texture, skipRemove)
    {
        var ref = this;
        var gl = ref.gl;

        texture = texture.baseTexture || texture;

        if (texture._glTextures[this.CONTEXT_UID])
        {
            this.unbind(texture);

            gl.deleteTexture(texture._glTextures[this.CONTEXT_UID].texture);
            texture.off('dispose', this.destroyTexture, this);

            delete texture._glTextures[this.CONTEXT_UID];

            if (!skipRemove)
            {
                var i = this.managedTextures.indexOf(texture);

                if (i !== -1)
                {
                    Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["removeItems"])(this.managedTextures, i, 1);
                }
            }
        }
    };

    /**
     * Update texture style such as mipmap flag
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to update
     */
    TextureSystem.prototype.updateTextureStyle = function updateTextureStyle (texture)
    {
        var glTexture = texture._glTextures[this.CONTEXT_UID];

        if (!glTexture)
        {
            return;
        }

        if ((texture.mipmap === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* MIPMAP_MODES */ "h"].POW2 || this.webGLVersion !== 2) && !texture.isPowerOfTwo)
        {
            glTexture.mipmap = 0;
        }
        else
        {
            glTexture.mipmap = texture.mipmap >= 1;
        }

        if (this.webGLVersion !== 2 && !texture.isPowerOfTwo)
        {
            glTexture.wrapMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* WRAP_MODES */ "n"].CLAMP;
        }
        else
        {
            glTexture.wrapMode = texture.wrapMode;
        }

        if (texture.resource && texture.resource.style(this.renderer, texture, glTexture))
        ;
        else
        {
            this.setStyle(texture, glTexture);
        }

        glTexture.dirtyStyleId = texture.dirtyStyleId;
    };

    /**
     * Set style for texture
     *
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to update
     * @param {PIXI.GLTexture} glTexture
     */
    TextureSystem.prototype.setStyle = function setStyle (texture, glTexture)
    {
        var gl = this.gl;

        if (glTexture.mipmap)
        {
            gl.generateMipmap(texture.target);
        }

        gl.texParameteri(texture.target, gl.TEXTURE_WRAP_S, glTexture.wrapMode);
        gl.texParameteri(texture.target, gl.TEXTURE_WRAP_T, glTexture.wrapMode);

        if (glTexture.mipmap)
        {
            /* eslint-disable max-len */
            gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
            /* eslint-disable max-len */

            var anisotropicExt = this.renderer.context.extensions.anisotropicFiltering;

            if (anisotropicExt && texture.anisotropicLevel > 0 && texture.scaleMode === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* SCALE_MODES */ "k"].LINEAR)
            {
                var level = Math.min(texture.anisotropicLevel, gl.getParameter(anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT));

                gl.texParameterf(texture.target, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, level);
            }
        }
        else
        {
            gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode ? gl.LINEAR : gl.NEAREST);
        }

        gl.texParameteri(texture.target, gl.TEXTURE_MAG_FILTER, texture.scaleMode ? gl.LINEAR : gl.NEAREST);
    };

    return TextureSystem;
}(System));

/**
 * Systems are individual components to the Renderer pipeline.
 * @namespace PIXI.systems
 */

var systems = ({
    FilterSystem: FilterSystem,
    BatchSystem: BatchSystem,
    ContextSystem: ContextSystem,
    FramebufferSystem: FramebufferSystem,
    GeometrySystem: GeometrySystem,
    MaskSystem: MaskSystem,
    ScissorSystem: ScissorSystem,
    StencilSystem: StencilSystem,
    ProjectionSystem: ProjectionSystem,
    RenderTextureSystem: RenderTextureSystem,
    ShaderSystem: ShaderSystem,
    StateSystem: StateSystem,
    TextureGCSystem: TextureGCSystem,
    TextureSystem: TextureSystem
});

var tempMatrix = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"]();

/**
 * The AbstractRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
 * and {@link PIXI.Renderer} which can be used for rendering a PixiJS scene.
 *
 * @abstract
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI
 */
var AbstractRenderer = /*@__PURE__*/(function (EventEmitter) {
    function AbstractRenderer(system, options)
    {
        EventEmitter.call(this);

        // Add the default render options
        options = Object.assign({}, _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].RENDER_OPTIONS, options);

        // Deprecation notice for renderer roundPixels option
        if (options.roundPixels)
        {
            _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].ROUND_PIXELS = options.roundPixels;
            Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["deprecation"])('5.0.0', 'Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS', 2);
        }

        /**
         * The supplied constructor options.
         *
         * @member {Object}
         * @readOnly
         */
        this.options = options;

        /**
         * The type of the renderer.
         *
         * @member {number}
         * @default PIXI.RENDERER_TYPE.UNKNOWN
         * @see PIXI.RENDERER_TYPE
         */
        this.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* RENDERER_TYPE */ "j"].UNKNOWN;

        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         *
         * @member {PIXI.Rectangle}
         */
        this.screen = new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Rectangle */ "j"](0, 0, options.width, options.height);

        /**
         * The canvas element that everything is drawn to.
         *
         * @member {HTMLCanvasElement}
         */
        this.view = options.view || document.createElement('canvas');

        /**
         * The resolution / device pixel ratio of the renderer.
         *
         * @member {number}
         * @default 1
         */
        this.resolution = options.resolution || _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].RESOLUTION;

        /**
         * Whether the render view is transparent.
         *
         * @member {boolean}
         */
        this.transparent = options.transparent;

        /**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         *
         * @member {boolean}
         */
        this.autoDensity = options.autoDensity || options.autoResize || false;
        // autoResize is deprecated, provides fallback support

        /**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         *
         * @member {boolean}
         */
        this.preserveDrawingBuffer = options.preserveDrawingBuffer;

        /**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         *
         * @member {boolean}
         * @default
         */
        this.clearBeforeRender = options.clearBeforeRender;

        /**
         * The background color as a number.
         *
         * @member {number}
         * @protected
         */
        this._backgroundColor = 0x000000;

        /**
         * The background color as an [R, G, B] array.
         *
         * @member {number[]}
         * @protected
         */
        this._backgroundColorRgba = [0, 0, 0, 0];

        /**
         * The background color as a string.
         *
         * @member {string}
         * @protected
         */
        this._backgroundColorString = '#000000';

        this.backgroundColor = options.backgroundColor || this._backgroundColor; // run bg color setter

        /**
         * This temporary display object used as the parent of the currently being rendered item.
         *
         * @member {PIXI.DisplayObject}
         * @protected
         */
        this._tempDisplayObjectParent = new _pixi_display__WEBPACK_IMPORTED_MODULE_6__[/* Container */ "b"]();

        /**
         * The last root object that the renderer tried to render.
         *
         * @member {PIXI.DisplayObject}
         * @protected
         */
        this._lastObjectRendered = this._tempDisplayObjectParent;

        /**
         * Collection of plugins.
         * @readonly
         * @member {object}
         */
        this.plugins = {};
    }

    if ( EventEmitter ) AbstractRenderer.__proto__ = EventEmitter;
    AbstractRenderer.prototype = Object.create( EventEmitter && EventEmitter.prototype );
    AbstractRenderer.prototype.constructor = AbstractRenderer;

    var prototypeAccessors = { width: { configurable: true },height: { configurable: true },backgroundColor: { configurable: true } };

    /**
     * Initialize the plugins.
     *
     * @protected
     * @param {object} staticMap - The dictionary of statically saved plugins.
     */
    AbstractRenderer.prototype.initPlugins = function initPlugins (staticMap)
    {
        for (var o in staticMap)
        {
            this.plugins[o] = new (staticMap[o])(this);
        }
    };

    /**
     * Same as view.width, actual number of pixels in the canvas by horizontal.
     *
     * @member {number}
     * @readonly
     * @default 800
     */
    prototypeAccessors.width.get = function ()
    {
        return this.view.width;
    };

    /**
     * Same as view.height, actual number of pixels in the canvas by vertical.
     *
     * @member {number}
     * @readonly
     * @default 600
     */
    prototypeAccessors.height.get = function ()
    {
        return this.view.height;
    };

    /**
     * Resizes the screen and canvas to the specified width and height.
     * Canvas dimensions are multiplied by resolution.
     *
     * @param {number} screenWidth - The new width of the screen.
     * @param {number} screenHeight - The new height of the screen.
     */
    AbstractRenderer.prototype.resize = function resize (screenWidth, screenHeight)
    {
        this.screen.width = screenWidth;
        this.screen.height = screenHeight;

        this.view.width = screenWidth * this.resolution;
        this.view.height = screenHeight * this.resolution;

        if (this.autoDensity)
        {
            this.view.style.width = screenWidth + "px";
            this.view.style.height = screenHeight + "px";
        }
    };

    /**
     * Useful function that returns a texture of the display object that can then be used to create sprites
     * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
     *
     * @param {PIXI.DisplayObject} displayObject - The displayObject the object will be generated from.
     * @param {number} scaleMode - Should be one of the scaleMode consts.
     * @param {number} resolution - The resolution / device pixel ratio of the texture being generated.
     * @param {PIXI.Rectangle} [region] - The region of the displayObject, that shall be rendered,
     *        if no region is specified, defaults to the local bounds of the displayObject.
     * @return {PIXI.RenderTexture} A texture of the graphics object.
     */
    AbstractRenderer.prototype.generateTexture = function generateTexture (displayObject, scaleMode, resolution, region)
    {
        region = region || displayObject.getLocalBounds();

        // minimum texture size is 1x1, 0x0 will throw an error
        if (region.width === 0) { region.width = 1; }
        if (region.height === 0) { region.height = 1; }

        var renderTexture = RenderTexture.create(region.width | 0, region.height | 0, scaleMode, resolution);

        tempMatrix.tx = -region.x;
        tempMatrix.ty = -region.y;

        this.render(displayObject, renderTexture, false, tempMatrix, !!displayObject.parent);

        return renderTexture;
    };

    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     */
    AbstractRenderer.prototype.destroy = function destroy (removeView)
    {
        for (var o in this.plugins)
        {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }

        if (removeView && this.view.parentNode)
        {
            this.view.parentNode.removeChild(this.view);
        }

        this.plugins = null;

        this.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* RENDERER_TYPE */ "j"].UNKNOWN;

        this.view = null;

        this.screen = null;

        this.resolution = 0;

        this.transparent = false;

        this.autoDensity = false;

        this.blendModes = null;

        this.options = null;

        this.preserveDrawingBuffer = false;
        this.clearBeforeRender = false;

        this._backgroundColor = 0;
        this._backgroundColorRgba = null;
        this._backgroundColorString = null;

        this._tempDisplayObjectParent = null;
        this._lastObjectRendered = null;
    };

    /**
     * The background color to fill if not transparent
     *
     * @member {number}
     */
    prototypeAccessors.backgroundColor.get = function ()
    {
        return this._backgroundColor;
    };

    prototypeAccessors.backgroundColor.set = function (value) // eslint-disable-line require-jsdoc
    {
        this._backgroundColor = value;
        this._backgroundColorString = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["hex2string"])(value);
        Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["hex2rgb"])(value, this._backgroundColorRgba);
    };

    Object.defineProperties( AbstractRenderer.prototype, prototypeAccessors );

    return AbstractRenderer;
}(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]));

/**
 * The Renderer draws the scene and all its content onto a WebGL enabled canvas.
 *
 * This renderer should be used for browsers that support WebGL.
 *
 * This renderer works by automatically managing WebGLBatchesm, so no need for Sprite Batches or Sprite Clouds.
 * Don't forget to add the view to your DOM or you will not see anything!
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.AbstractRenderer
 */
var Renderer = /*@__PURE__*/(function (AbstractRenderer) {
    function Renderer(options)
    {
        if ( options === void 0 ) options = {};

        AbstractRenderer.call(this, 'WebGL', options);

        // the options will have been modified here in the super constructor with pixi's default settings..
        options = this.options;

        /**
         * The type of this renderer as a standardized const
         *
         * @member {number}
         * @see PIXI.RENDERER_TYPE
         */
        this.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* RENDERER_TYPE */ "j"].WEBGL;

        /**
         * WebGL context, set by the contextSystem (this.context)
         *
         * @readonly
         * @member {WebGLRenderingContext}
         */
        this.gl = null;

        this.CONTEXT_UID = 0;

        // TODO legacy!

        /**
         * Internal signal instances of **runner**, these
         * are assigned to each system created.
         * @see PIXI.Runner
         * @name PIXI.Renderer#runners
         * @private
         * @type {object}
         * @readonly
         * @property {PIXI.Runner} destroy - Destroy runner
         * @property {PIXI.Runner} contextChange - Context change runner
         * @property {PIXI.Runner} reset - Reset runner
         * @property {PIXI.Runner} update - Update runner
         * @property {PIXI.Runner} postrender - Post-render runner
         * @property {PIXI.Runner} prerender - Pre-render runner
         * @property {PIXI.Runner} resize - Resize runner
         */
        this.runners = {
            destroy: new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('destroy'),
            contextChange: new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('contextChange', 1),
            reset: new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('reset'),
            update: new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('update'),
            postrender: new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('postrender'),
            prerender: new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('prerender'),
            resize: new _pixi_runner__WEBPACK_IMPORTED_MODULE_0__[/* Runner */ "a"]('resize', 2),
        };

        /**
         * Global uniforms
         * @member {PIXI.UniformGroup}
         */
        this.globalUniforms = new UniformGroup({
            projectionMatrix: new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"](),
        }, true);

        /**
         * Mask system instance
         * @member {PIXI.systems.MaskSystem} mask
         * @memberof PIXI.Renderer#
         * @readonly
         */
        this.addSystem(MaskSystem, 'mask')
            /**
             * Context system instance
             * @member {PIXI.systems.ContextSystem} context
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ContextSystem, 'context')
            /**
             * State system instance
             * @member {PIXI.systems.StateSystem} state
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(StateSystem, 'state')
            /**
             * Shader system instance
             * @member {PIXI.systems.ShaderSystem} shader
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ShaderSystem, 'shader')
            /**
             * Texture system instance
             * @member {PIXI.systems.TextureSystem} texture
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(TextureSystem, 'texture')
            /**
             * Geometry system instance
             * @member {PIXI.systems.GeometrySystem} geometry
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(GeometrySystem, 'geometry')
            /**
             * Framebuffer system instance
             * @member {PIXI.systems.FramebufferSystem} framebuffer
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(FramebufferSystem, 'framebuffer')
            /**
             * Scissor system instance
             * @member {PIXI.systems.ScissorSystem} scissor
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ScissorSystem, 'scissor')
            /**
             * Stencil system instance
             * @member {PIXI.systems.StencilSystem} stencil
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(StencilSystem, 'stencil')
            /**
             * Projection system instance
             * @member {PIXI.systems.ProjectionSystem} projection
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(ProjectionSystem, 'projection')
            /**
             * Texture garbage collector system instance
             * @member {PIXI.systems.TextureGCSystem} textureGC
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(TextureGCSystem, 'textureGC')
            /**
             * Filter system instance
             * @member {PIXI.systems.FilterSystem} filter
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(FilterSystem, 'filter')
            /**
             * RenderTexture system instance
             * @member {PIXI.systems.RenderTextureSystem} renderTexture
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(RenderTextureSystem, 'renderTexture')

            /**
             * Batch system instance
             * @member {PIXI.systems.BatchSystem} batch
             * @memberof PIXI.Renderer#
             * @readonly
             */
            .addSystem(BatchSystem, 'batch');

        this.initPlugins(Renderer.__plugins);

        /**
         * The options passed in to create a new WebGL context.
         */
        if (options.context)
        {
            this.context.initFromContext(options.context);
        }
        else
        {
            this.context.initFromOptions({
                alpha: this.transparent,
                antialias: options.antialias,
                premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',
                stencil: true,
                preserveDrawingBuffer: options.preserveDrawingBuffer,
                powerPreference: this.options.powerPreference,
            });
        }

        /**
         * Flag if we are rendering to the screen vs renderTexture
         * @member {boolean}
         * @readonly
         * @default true
         */
        this.renderingToScreen = true;

        Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["sayHello"])(this.context.webGLVersion === 2 ? 'WebGL 2' : 'WebGL 1');

        this.resize(this.options.width, this.options.height);
    }

    if ( AbstractRenderer ) Renderer.__proto__ = AbstractRenderer;
    Renderer.prototype = Object.create( AbstractRenderer && AbstractRenderer.prototype );
    Renderer.prototype.constructor = Renderer;

    /**
     * Add a new system to the renderer.
     * @param {Function} ClassRef - Class reference
     * @param {string} [name] - Property name for system, if not specified
     *        will use a static `name` property on the class itself. This
     *        name will be assigned as s property on the Renderer so make
     *        sure it doesn't collide with properties on Renderer.
     * @return {PIXI.Renderer} Return instance of renderer
     */
    Renderer.create = function create (options)
    {
        if (Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["isWebGLSupported"])())
        {
            return new Renderer(options);
        }

        throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
    };

    Renderer.prototype.addSystem = function addSystem (ClassRef, name)
    {
        if (!name)
        {
            name = ClassRef.name;
        }

        var system = new ClassRef(this);

        if (this[name])
        {
            throw new Error(("Whoops! The name \"" + name + "\" is already in use"));
        }

        this[name] = system;

        for (var i in this.runners)
        {
            this.runners[i].add(system);
        }

        /**
         * Fired after rendering finishes.
         *
         * @event PIXI.Renderer#postrender
         */

        /**
         * Fired before rendering starts.
         *
         * @event PIXI.Renderer#prerender
         */

        /**
         * Fired when the WebGL context is set.
         *
         * @event PIXI.Renderer#context
         * @param {WebGLRenderingContext} gl - WebGL context.
         */

        return this;
    };

    /**
     * Renders the object to its WebGL view
     *
     * @param {PIXI.DisplayObject} displayObject - The object to be rendered.
     * @param {PIXI.RenderTexture} [renderTexture] - The render texture to render to.
     * @param {boolean} [clear=true] - Should the canvas be cleared before the new render.
     * @param {PIXI.Matrix} [transform] - A transform to apply to the render texture before rendering.
     * @param {boolean} [skipUpdateTransform=false] - Should we skip the update transform pass?
     */
    Renderer.prototype.render = function render (displayObject, renderTexture, clear, transform, skipUpdateTransform)
    {
        // can be handy to know!
        this.renderingToScreen = !renderTexture;

        this.runners.prerender.run();
        this.emit('prerender');

        // apply a transform at a GPU level
        this.projection.transform = transform;

        // no point rendering if our context has been blown up!
        if (this.context.isLost)
        {
            return;
        }

        if (!renderTexture)
        {
            this._lastObjectRendered = displayObject;
        }

        if (!skipUpdateTransform)
        {
            // update the scene graph
            var cacheParent = displayObject.parent;

            displayObject.parent = this._tempDisplayObjectParent;
            displayObject.updateTransform();
            displayObject.parent = cacheParent;
            // displayObject.hitArea = //TODO add a temp hit area
        }

        this.renderTexture.bind(renderTexture);
        this.batch.currentRenderer.start();

        if (clear !== undefined ? clear : this.clearBeforeRender)
        {
            this.renderTexture.clear();
        }

        displayObject.render(this);

        // apply transform..
        this.batch.currentRenderer.flush();

        if (renderTexture)
        {
            renderTexture.baseTexture.update();
        }

        this.runners.postrender.run();

        // reset transform after render
        this.projection.transform = null;

        this.emit('postrender');
    };

    /**
     * Resizes the WebGL view to the specified width and height.
     *
     * @param {number} screenWidth - The new width of the screen.
     * @param {number} screenHeight - The new height of the screen.
     */
    Renderer.prototype.resize = function resize (screenWidth, screenHeight)
    {
        AbstractRenderer.prototype.resize.call(this, screenWidth, screenHeight);

        this.runners.resize.run(screenWidth, screenHeight);
    };

    /**
     * Resets the WebGL state so you can render things however you fancy!
     *
     * @return {PIXI.Renderer} Returns itself.
     */
    Renderer.prototype.reset = function reset ()
    {
        this.runners.reset.run();

        return this;
    };

    /**
     * Clear the frame buffer
     */
    Renderer.prototype.clear = function clear ()
    {
        this.framebuffer.bind();
        this.framebuffer.clear();
    };

    /**
     * Removes everything from the renderer (event listeners, spritebatch, etc...)
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     *  See: https://github.com/pixijs/pixi.js/issues/2233
     */
    Renderer.prototype.destroy = function destroy (removeView)
    {
        this.runners.destroy.run();

        for (var r in this.runners)
        {
            this.runners[r].destroy();
        }

        // call base destroy
        AbstractRenderer.prototype.destroy.call(this, removeView);

        // TODO nullify all the managers..
        this.gl = null;
    };

    /**
     * Collection of installed plugins. These are included by default in PIXI, but can be excluded
     * by creating a custom build. Consult the README for more information about creating custom
     * builds and excluding plugins.
     * @name PIXI.Renderer#plugins
     * @type {object}
     * @readonly
     * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
     * @property {PIXI.extract.Extract} extract Extract image data from renderer.
     * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
     * @property {PIXI.prepare.Prepare} prepare Pre-render display objects.
     */

    /**
     * Adds a plugin to the renderer.
     *
     * @method
     * @param {string} pluginName - The name of the plugin.
     * @param {Function} ctor - The constructor function or class for the plugin.
     */
    Renderer.registerPlugin = function registerPlugin (pluginName, ctor)
    {
        Renderer.__plugins = Renderer.__plugins || {};
        Renderer.__plugins[pluginName] = ctor;
    };

    return Renderer;
}(AbstractRenderer));

/**
 * This helper function will automatically detect which renderer you should be using.
 * WebGL is the preferred renderer as it is a lot faster. If WebGL is not supported by
 * the browser then this function will return a canvas renderer
 *
 * @memberof PIXI
 * @function autoDetectRenderer
 * @param {object} [options] - The optional renderer parameters
 * @param {number} [options.width=800] - the width of the renderers view
 * @param {number} [options.height=600] - the height of the renderers view
 * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
 * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
 * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
 *   resolutions other than 1
 * @param {boolean} [options.antialias=false] - sets antialias
 * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
 *  need to call toDataUrl on the webgl context
 * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
 *  (shown if not transparent).
 * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
 *   not before the new render pass.
 * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
 * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present, this
 *   option only is available when using **pixi.js-legacy** or **@pixi/canvas-renderer** modules, otherwise
 *   it is ignored.
 * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
 *  FXAA is faster, but may not always look as great **webgl only**
 * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
 *  for devices with dual graphics card **webgl only**
 * @return {PIXI.Renderer|PIXI.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
 */
function autoDetectRenderer(options)
{
    return Renderer.create(options);
}

var _default = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

var defaultFilter = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

/**
 * A Texture that depends on six other resources.
 *
 * @class
 * @extends PIXI.BaseTexture
 * @memberof PIXI
 */
var CubeTexture = /*@__PURE__*/(function (BaseTexture) {
    function CubeTexture () {
        BaseTexture.apply(this, arguments);
    }

    if ( BaseTexture ) CubeTexture.__proto__ = BaseTexture;
    CubeTexture.prototype = Object.create( BaseTexture && BaseTexture.prototype );
    CubeTexture.prototype.constructor = CubeTexture;

    CubeTexture.from = function from (resources, options)
    {
        return new CubeTexture(new CubeResource(resources, options));
    };

    return CubeTexture;
}(BaseTexture));

/**
 * Used by the batcher to draw batches.
 * Each one of these contains all information required to draw a bound geometry.
 *
 * @class
 * @memberof PIXI
 */
var BatchDrawCall = function BatchDrawCall()
{
    this.texArray = null;
    this.blend = 0;
    this.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* DRAW_MODES */ "c"].TRIANGLES;

    this.start = 0;
    this.size = 0;

    /**
     * data for uniforms or custom webgl state
     * @member {object}
     */
    this.data = null;
};

/**
 * Used by the batcher to build texture batches.
 * Holds list of textures and their respective locations.
 *
 * @class
 * @memberof PIXI
 */
var BatchTextureArray = function BatchTextureArray()
{
    /**
     * inside textures array
     * @member {PIXI.BaseTexture[]}
     */
    this.elements = [];
    /**
     * Respective locations for textures
     * @member {number[]}
     */
    this.ids = [];
    /**
     * number of filled elements
     * @member {number}
     */
    this.count = 0;
};

BatchTextureArray.prototype.clear = function clear ()
{
    for (var i = 0; i < this.count; i++)
    {
        this.elements[i] = null;
    }
    this.count = 0;
};

/**
 * Flexible wrapper around `ArrayBuffer` that also provides
 * typed array views on demand.
 *
 * @class
 * @memberof PIXI
 */
var ViewableBuffer = function ViewableBuffer(size)
{
    /**
     * Underlying `ArrayBuffer` that holds all the data
     * and is of capacity `size`.
     *
     * @member {ArrayBuffer}
     */
    this.rawBinaryData = new ArrayBuffer(size);

    /**
     * View on the raw binary data as a `Uint32Array`.
     *
     * @member {Uint32Array}
     */
    this.uint32View = new Uint32Array(this.rawBinaryData);

    /**
     * View on the raw binary data as a `Float32Array`.
     *
     * @member {Float32Array}
     */
    this.float32View = new Float32Array(this.rawBinaryData);
};

var prototypeAccessors$5 = { int8View: { configurable: true },uint8View: { configurable: true },int16View: { configurable: true },uint16View: { configurable: true },int32View: { configurable: true } };

/**
 * View on the raw binary data as a `Int8Array`.
 *
 * @member {Int8Array}
 */
prototypeAccessors$5.int8View.get = function ()
{
    if (!this._int8View)
    {
        this._int8View = new Int8Array(this.rawBinaryData);
    }

    return this._int8View;
};

/**
 * View on the raw binary data as a `Uint8Array`.
 *
 * @member {Uint8Array}
 */
prototypeAccessors$5.uint8View.get = function ()
{
    if (!this._uint8View)
    {
        this._uint8View = new Uint8Array(this.rawBinaryData);
    }

    return this._uint8View;
};

/**
 * View on the raw binary data as a `Int16Array`.
 *
 * @member {Int16Array}
 */
prototypeAccessors$5.int16View.get = function ()
{
    if (!this._int16View)
    {
        this._int16View = new Int16Array(this.rawBinaryData);
    }

    return this._int16View;
};

/**
 * View on the raw binary data as a `Uint16Array`.
 *
 * @member {Uint16Array}
 */
prototypeAccessors$5.uint16View.get = function ()
{
    if (!this._uint16View)
    {
        this._uint16View = new Uint16Array(this.rawBinaryData);
    }

    return this._uint16View;
};

/**
 * View on the raw binary data as a `Int32Array`.
 *
 * @member {Int32Array}
 */
prototypeAccessors$5.int32View.get = function ()
{
    if (!this._int32View)
    {
        this._int32View = new Int32Array(this.rawBinaryData);
    }

    return this._int32View;
};

/**
 * Returns the view of the given type.
 *
 * @param {string} type - One of `int8`, `uint8`, `int16`,
 *`uint16`, `int32`, `uint32`, and `float32`.
 * @return {object} typed array of given type
 */
ViewableBuffer.prototype.view = function view (type)
{
    return this[(type + "View")];
};

/**
 * Destroys all buffer references. Do not use after calling
 * this.
 */
ViewableBuffer.prototype.destroy = function destroy ()
{
    this.rawBinaryData = null;
    this._int8View = null;
    this._uint8View = null;
    this._int16View = null;
    this._uint16View = null;
    this._int32View = null;
    this.uint32View = null;
    this.float32View = null;
};

ViewableBuffer.sizeOf = function sizeOf (type)
{
    switch (type)
    {
        case 'int8':
        case 'uint8':
            return 1;
        case 'int16':
        case 'uint16':
            return 2;
        case 'int32':
        case 'uint32':
        case 'float32':
            return 4;
        default:
            throw new Error((type + " isn't a valid view type"));
    }
};

Object.defineProperties( ViewableBuffer.prototype, prototypeAccessors$5 );

/**
 * Renderer dedicated to drawing and batching sprites.
 *
 * This is the default batch renderer. It buffers objects
 * with texture-based geometries and renders them in
 * batches. It uploads multiple textures to the GPU to
 * reduce to the number of draw calls.
 *
 * @class
 * @protected
 * @memberof PIXI
 * @extends PIXI.ObjectRenderer
 */
var AbstractBatchRenderer = /*@__PURE__*/(function (ObjectRenderer) {
    function AbstractBatchRenderer(renderer)
    {
        ObjectRenderer.call(this, renderer);

        /**
         * This is used to generate a shader that can
         * color each vertex based on a `aTextureId`
         * attribute that points to an texture in `uSampler`.
         *
         * This enables the objects with different textures
         * to be drawn in the same draw call.
         *
         * You can customize your shader by creating your
         * custom shader generator.
         *
         * @member {PIXI.BatchShaderGenerator}
         * @protected
         */
        this.shaderGenerator = null;

        /**
         * The class that represents the geometry of objects
         * that are going to be batched with this.
         *
         * @member {object}
         * @default PIXI.BatchGeometry
         * @protected
         */
        this.geometryClass = null;

        /**
         * Size of data being buffered per vertex in the
         * attribute buffers (in floats). By default, the
         * batch-renderer plugin uses 6:
         *
         * | aVertexPosition | 2 |
         * |-----------------|---|
         * | aTextureCoords  | 2 |
         * | aColor          | 1 |
         * | aTextureId      | 1 |
         *
         * @member {number}
         * @readonly
         */
        this.vertexSize = null;

        /**
         * The WebGL state in which this renderer will work.
         *
         * @member {PIXI.State}
         * @readonly
         */
        this.state = State.for2d();

        /**
         * The number of bufferable objects before a flush
         * occurs automatically.
         *
         * @member {number}
         * @default settings.SPRITE_BATCH_SIZE * 4
         */
        this.size = _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].SPRITE_BATCH_SIZE * 4;

        /**
         * Total count of all vertices used by the currently
         * buffered objects.
         *
         * @member {number}
         * @private
         */
        this._vertexCount = 0;

        /**
         * Total count of all indices used by the currently
         * buffered objects.
         *
         * @member {number}
         * @private
         */
        this._indexCount = 0;

        /**
         * Buffer of objects that are yet to be rendered.
         *
         * @member {PIXI.DisplayObject[]}
         * @private
         */
        this._bufferedElements = [];

        /**
         * Data for texture batch builder, helps to save a bit of CPU on a pass
         * @type {PIXI.BaseTexture[]}
         * @private
         */
        this._bufferedTextures = [];

        /**
         * Number of elements that are buffered and are
         * waiting to be flushed.
         *
         * @member {number}
         * @private
         */
        this._bufferSize = 0;

        /**
         * This shader is generated by `this.shaderGenerator`.
         *
         * It is generated specifically to handle the required
         * number of textures being batched together.
         *
         * @member {PIXI.Shader}
         * @protected
         */
        this._shader = null;

        /**
         * Pool of `this.geometryClass` geometry objects
         * that store buffers. They are used to pass data
         * to the shader on each draw call.
         *
         * These are never re-allocated again, unless a
         * context change occurs; however, the pool may
         * be expanded if required.
         *
         * @member {PIXI.Geometry[]}
         * @private
         * @see PIXI.AbstractBatchRenderer.contextChange
         */
        this._packedGeometries = [];

        /**
         * Size of `this._packedGeometries`. It can be expanded
         * if more than `this._packedGeometryPoolSize` flushes
         * occur in a single frame.
         *
         * @member {number}
         * @private
         */
        this._packedGeometryPoolSize = 2;

        /**
         * A flush may occur multiple times in a single
         * frame. On iOS devices or when
         * `settings.CAN_UPLOAD_SAME_BUFFER` is false, the
         * batch renderer does not upload data to the same
         * `WebGLBuffer` for performance reasons.
         *
         * This is the index into `packedGeometries` that points to
         * geometry holding the most recent buffers.
         *
         * @member {number}
         * @private
         */
        this._flushId = 0;

        /**
         * Pool of `ViewableBuffer` objects that are sorted in
         * order of increasing size. The flush method uses
         * the buffer with the least size above the amount
         * it requires. These are used for passing attributes.
         *
         * The first buffer has a size of 8; each subsequent
         * buffer has double capacity of its previous.
         *
         * @member {PIXI.ViewableBuffer[]}
         * @private
         * @see PIXI.AbstractBatchRenderer#getAttributeBuffer
         */
        this._aBuffers = {};

        /**
         * Pool of `Uint16Array` objects that are sorted in
         * order of increasing size. The flush method uses
         * the buffer with the least size above the amount
         * it requires. These are used for passing indices.
         *
         * The first buffer has a size of 12; each subsequent
         * buffer has double capacity of its previous.
         *
         * @member {Uint16Array[]}
         * @private
         * @see PIXI.AbstractBatchRenderer#getIndexBuffer
         */
        this._iBuffers = {};

        /**
         * Maximum number of textures that can be uploaded to
         * the GPU under the current context. It is initialized
         * properly in `this.contextChange`.
         *
         * @member {number}
         * @see PIXI.AbstractBatchRenderer#contextChange
         * @readonly
         */
        this.MAX_TEXTURES = 1;

        this.renderer.on('prerender', this.onPrerender, this);
        renderer.runners.contextChange.add(this);

        this._dcIndex = 0;
        this._aIndex = 0;
        this._iIndex = 0;
        this._attributeBuffer = null;
        this._indexBuffer = null;
        this._tempBoundTextures = [];
    }

    if ( ObjectRenderer ) AbstractBatchRenderer.__proto__ = ObjectRenderer;
    AbstractBatchRenderer.prototype = Object.create( ObjectRenderer && ObjectRenderer.prototype );
    AbstractBatchRenderer.prototype.constructor = AbstractBatchRenderer;

    /**
     * Handles the `contextChange` signal.
     *
     * It calculates `this.MAX_TEXTURES` and allocating the
     * packed-geometry object pool.
     */
    AbstractBatchRenderer.prototype.contextChange = function contextChange ()
    {
        var gl = this.renderer.gl;

        if (_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].PREFER_ENV === _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* ENV */ "d"].WEBGL_LEGACY)
        {
            this.MAX_TEXTURES = 1;
        }
        else
        {
            // step 1: first check max textures the GPU can handle.
            this.MAX_TEXTURES = Math.min(
                gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
                _pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].SPRITE_MAX_TEXTURES);

            // step 2: check the maximum number of if statements the shader can have too..
            this.MAX_TEXTURES = checkMaxIfStatementsInShader(
                this.MAX_TEXTURES, gl);
        }

        this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);

        // we use the second shader as the first one depending on your browser
        // may omit aTextureId as it is not used by the shader so is optimized out.
        for (var i = 0; i < this._packedGeometryPoolSize; i++)
        {
            /* eslint-disable max-len */
            this._packedGeometries[i] = new (this.geometryClass)();
        }

        this.initFlushBuffers();
    };

    /**
     * Makes sure that static and dynamic flush pooled objects have correct dimensions
     */
    AbstractBatchRenderer.prototype.initFlushBuffers = function initFlushBuffers ()
    {
        var _drawCallPool = AbstractBatchRenderer._drawCallPool;
        var _textureArrayPool = AbstractBatchRenderer._textureArrayPool;
        // max draw calls
        var MAX_SPRITES = this.size / 4;
        // max texture arrays
        var MAX_TA = Math.floor(MAX_SPRITES / this.MAX_TEXTURES) + 1;

        while (_drawCallPool.length < MAX_SPRITES)
        {
            _drawCallPool.push(new BatchDrawCall());
        }
        while (_textureArrayPool.length < MAX_TA)
        {
            _textureArrayPool.push(new BatchTextureArray());
        }
        for (var i = 0; i < this.MAX_TEXTURES; i++)
        {
            this._tempBoundTextures[i] = null;
        }
    };

    /**
     * Handles the `prerender` signal.
     *
     * It ensures that flushes start from the first geometry
     * object again.
     */
    AbstractBatchRenderer.prototype.onPrerender = function onPrerender ()
    {
        this._flushId = 0;
    };

    /**
     * Buffers the "batchable" object. It need not be rendered
     * immediately.
     *
     * @param {PIXI.DisplayObject} element - the element to render when
     *    using this renderer
     */
    AbstractBatchRenderer.prototype.render = function render (element)
    {
        if (!element._texture.valid)
        {
            return;
        }

        if (this._vertexCount + (element.vertexData.length / 2) > this.size)
        {
            this.flush();
        }

        this._vertexCount += element.vertexData.length / 2;
        this._indexCount += element.indices.length;
        this._bufferedTextures[this._bufferSize] = element._texture.baseTexture;
        this._bufferedElements[this._bufferSize++] = element;
    };

    AbstractBatchRenderer.prototype.buildTexturesAndDrawCalls = function buildTexturesAndDrawCalls ()
    {
        var ref = this;
        var textures = ref._bufferedTextures;
        var MAX_TEXTURES = ref.MAX_TEXTURES;
        var textureArrays = AbstractBatchRenderer._textureArrayPool;
        var batch = this.renderer.batch;
        var boundTextures = this._tempBoundTextures;
        var touch = this.renderer.textureGC.count;

        var TICK = ++BaseTexture._globalBatch;
        var countTexArrays = 0;
        var texArray = textureArrays[0];
        var start = 0;

        batch.copyBoundTextures(boundTextures, MAX_TEXTURES);

        for (var i = 0; i < this._bufferSize; ++i)
        {
            var tex = textures[i];

            textures[i] = null;
            if (tex._batchEnabled === TICK)
            {
                continue;
            }

            if (texArray.count >= MAX_TEXTURES)
            {
                batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
                this.buildDrawCalls(texArray, start, i);
                start = i;
                texArray = textureArrays[++countTexArrays];
                ++TICK;
            }

            tex._batchEnabled = TICK;
            tex.touched = touch;
            texArray.elements[texArray.count++] = tex;
        }

        if (texArray.count > 0)
        {
            batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
            this.buildDrawCalls(texArray, start, this._bufferSize);
            ++countTexArrays;
            ++TICK;
        }

        // Clean-up

        for (var i$1 = 0; i$1 < boundTextures.length; i$1++)
        {
            boundTextures[i$1] = null;
        }
        BaseTexture._globalBatch = TICK;
    };

    /**
     * Populating drawcalls for rendering
     *
     * @param {PIXI.BatchTextureArray} texArray
     * @param {number} start
     * @param {number} finish
     */
    AbstractBatchRenderer.prototype.buildDrawCalls = function buildDrawCalls (texArray, start, finish)
    {
        var ref = this;
        var elements = ref._bufferedElements;
        var _attributeBuffer = ref._attributeBuffer;
        var _indexBuffer = ref._indexBuffer;
        var vertexSize = ref.vertexSize;
        var drawCalls = AbstractBatchRenderer._drawCallPool;

        var dcIndex = this._dcIndex;
        var aIndex = this._aIndex;
        var iIndex = this._iIndex;

        var drawCall = drawCalls[dcIndex];

        drawCall.start = this._iIndex;
        drawCall.texArray = texArray;

        for (var i = start; i < finish; ++i)
        {
            var sprite = elements[i];
            var tex = sprite._texture.baseTexture;
            var spriteBlendMode = _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["premultiplyBlendMode"][
                tex.alphaMode ? 1 : 0][sprite.blendMode];

            elements[i] = null;

            if (start < i && drawCall.blend !== spriteBlendMode)
            {
                drawCall.size = iIndex - drawCall.start;
                start = i;
                drawCall = drawCalls[++dcIndex];
                drawCall.texArray = texArray;
                drawCall.start = iIndex;
            }

            this.packInterleavedGeometry(sprite, _attributeBuffer, _indexBuffer, aIndex, iIndex);
            aIndex += sprite.vertexData.length / 2 * vertexSize;
            iIndex += sprite.indices.length;

            drawCall.blend = spriteBlendMode;
        }

        if (start < finish)
        {
            drawCall.size = iIndex - drawCall.start;
            ++dcIndex;
        }

        this._dcIndex = dcIndex;
        this._aIndex = aIndex;
        this._iIndex = iIndex;
    };

    /**
     * Bind textures for current rendering
     *
     * @param {PIXI.BatchTextureArray} texArray
     */
    AbstractBatchRenderer.prototype.bindAndClearTexArray = function bindAndClearTexArray (texArray)
    {
        var textureSystem = this.renderer.texture;

        for (var j = 0; j < texArray.count; j++)
        {
            textureSystem.bind(texArray.elements[j], texArray.ids[j]);
            texArray.elements[j] = null;
        }
        texArray.count = 0;
    };

    AbstractBatchRenderer.prototype.updateGeometry = function updateGeometry ()
    {
        var ref = this;
        var packedGeometries = ref._packedGeometries;
        var attributeBuffer = ref._attributeBuffer;
        var indexBuffer = ref._indexBuffer;

        if (!_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].CAN_UPLOAD_SAME_BUFFER)
        { /* Usually on iOS devices, where the browser doesn't
            like uploads to the same buffer in a single frame. */
            if (this._packedGeometryPoolSize <= this._flushId)
            {
                this._packedGeometryPoolSize++;
                packedGeometries[this._flushId] = new (this.geometryClass)();
            }

            packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
            packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);

            this.renderer.geometry.bind(packedGeometries[this._flushId]);
            this.renderer.geometry.updateBuffers();
            this._flushId++;
        }
        else
        {
            // lets use the faster option, always use buffer number 0
            packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
            packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);

            this.renderer.geometry.updateBuffers();
        }
    };

    AbstractBatchRenderer.prototype.drawBatches = function drawBatches ()
    {
        var dcCount = this._dcIndex;
        var ref = this.renderer;
        var gl = ref.gl;
        var stateSystem = ref.state;
        var drawCalls = AbstractBatchRenderer._drawCallPool;

        var curTexArray = null;

        // Upload textures and do the draw calls
        for (var i = 0; i < dcCount; i++)
        {
            var ref$1 = drawCalls[i];
            var texArray = ref$1.texArray;
            var type = ref$1.type;
            var size = ref$1.size;
            var start = ref$1.start;
            var blend = ref$1.blend;

            if (curTexArray !== texArray)
            {
                curTexArray = texArray;
                this.bindAndClearTexArray(texArray);
            }

            stateSystem.setBlendMode(blend);
            gl.drawElements(type, size, gl.UNSIGNED_SHORT, start * 2);
        }
    };

    /**
     * Renders the content _now_ and empties the current batch.
     */
    AbstractBatchRenderer.prototype.flush = function flush ()
    {
        if (this._vertexCount === 0)
        {
            return;
        }

        this._attributeBuffer = this.getAttributeBuffer(this._vertexCount);
        this._indexBuffer = this.getIndexBuffer(this._indexCount);
        this._aIndex = 0;
        this._iIndex = 0;
        this._dcIndex = 0;

        this.buildTexturesAndDrawCalls();
        this.updateGeometry();
        this.drawBatches();

        // reset elements buffer for the next flush
        this._bufferSize = 0;
        this._vertexCount = 0;
        this._indexCount = 0;
    };

    /**
     * Starts a new sprite batch.
     */
    AbstractBatchRenderer.prototype.start = function start ()
    {
        this.renderer.state.set(this.state);

        this.renderer.shader.bind(this._shader);

        if (_pixi_settings__WEBPACK_IMPORTED_MODULE_3__[/* settings */ "b"].CAN_UPLOAD_SAME_BUFFER)
        {
            // bind buffer #0, we don't need others
            this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
        }
    };

    /**
     * Stops and flushes the current batch.
     */
    AbstractBatchRenderer.prototype.stop = function stop ()
    {
        this.flush();
    };

    /**
     * Destroys this `AbstractBatchRenderer`. It cannot be used again.
     */
    AbstractBatchRenderer.prototype.destroy = function destroy ()
    {
        for (var i = 0; i < this._packedGeometryPoolSize; i++)
        {
            if (this._packedGeometries[i])
            {
                this._packedGeometries[i].destroy();
            }
        }

        this.renderer.off('prerender', this.onPrerender, this);

        this._aBuffers = null;
        this._iBuffers = null;
        this._packedGeometries = null;
        this._attributeBuffer = null;
        this._indexBuffer = null;

        if (this._shader)
        {
            this._shader.destroy();
            this._shader = null;
        }

        ObjectRenderer.prototype.destroy.call(this);
    };

    /**
     * Fetches an attribute buffer from `this._aBuffers` that
     * can hold atleast `size` floats.
     *
     * @param {number} size - minimum capacity required
     * @return {ViewableBuffer} - buffer than can hold atleast `size` floats
     * @private
     */
    AbstractBatchRenderer.prototype.getAttributeBuffer = function getAttributeBuffer (size)
    {
        // 8 vertices is enough for 2 quads
        var roundedP2 = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["nextPow2"])(Math.ceil(size / 8));
        var roundedSizeIndex = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["log2"])(roundedP2);
        var roundedSize = roundedP2 * 8;

        if (this._aBuffers.length <= roundedSizeIndex)
        {
            this._iBuffers.length = roundedSizeIndex + 1;
        }

        var buffer = this._aBuffers[roundedSize];

        if (!buffer)
        {
            this._aBuffers[roundedSize] = buffer = new ViewableBuffer(roundedSize * this.vertexSize * 4);
        }

        return buffer;
    };

    /**
     * Fetches an index buffer from `this._iBuffers` that can
     * has atleast `size` capacity.
     *
     * @param {number} size - minimum required capacity
     * @return {Uint16Array} - buffer that can fit `size`
     *    indices.
     * @private
     */
    AbstractBatchRenderer.prototype.getIndexBuffer = function getIndexBuffer (size)
    {
        // 12 indices is enough for 2 quads
        var roundedP2 = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["nextPow2"])(Math.ceil(size / 12));
        var roundedSizeIndex = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["log2"])(roundedP2);
        var roundedSize = roundedP2 * 12;

        if (this._iBuffers.length <= roundedSizeIndex)
        {
            this._iBuffers.length = roundedSizeIndex + 1;
        }

        var buffer = this._iBuffers[roundedSizeIndex];

        if (!buffer)
        {
            this._iBuffers[roundedSizeIndex] = buffer = new Uint16Array(roundedSize);
        }

        return buffer;
    };

    /**
     * Takes the four batching parameters of `element`, interleaves
     * and pushes them into the batching attribute/index buffers given.
     *
     * It uses these properties: `vertexData` `uvs`, `textureId` and
     * `indicies`. It also uses the "tint" of the base-texture, if
     * present.
     *
     * @param {PIXI.Sprite} element - element being rendered
     * @param {PIXI.ViewableBuffer} attributeBuffer - attribute buffer.
     * @param {Uint16Array} indexBuffer - index buffer
     * @param {number} aIndex - number of floats already in the attribute buffer
     * @param {number} iIndex - number of indices already in `indexBuffer`
     */
    AbstractBatchRenderer.prototype.packInterleavedGeometry = function packInterleavedGeometry (element, attributeBuffer, indexBuffer, aIndex, iIndex)
    {
        var uint32View = attributeBuffer.uint32View;
        var float32View = attributeBuffer.float32View;

        var packedVertices = aIndex / this.vertexSize;
        var uvs = element.uvs;
        var indicies = element.indices;
        var vertexData = element.vertexData;
        var textureId = element._texture.baseTexture._batchLocation;

        var alpha = Math.min(element.worldAlpha, 1.0);
        var argb = (alpha < 1.0
            && element._texture.baseTexture.alphaMode)
            ? Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["premultiplyTint"])(element._tintRGB, alpha)
            : element._tintRGB + (alpha * 255 << 24);

        // lets not worry about tint! for now..
        for (var i = 0; i < vertexData.length; i += 2)
        {
            float32View[aIndex++] = vertexData[i];
            float32View[aIndex++] = vertexData[i + 1];
            float32View[aIndex++] = uvs[i];
            float32View[aIndex++] = uvs[i + 1];
            uint32View[aIndex++] = argb;
            float32View[aIndex++] = textureId;
        }

        for (var i$1 = 0; i$1 < indicies.length; i$1++)
        {
            indexBuffer[iIndex++] = packedVertices + indicies[i$1];
        }
    };

    return AbstractBatchRenderer;
}(ObjectRenderer));

/**
 * Pool of `BatchDrawCall` objects that `flush` used
 * to create "batches" of the objects being rendered.
 *
 * These are never re-allocated again.
 * Shared between all batch renderers because it can be only one "flush" working at the moment.
 *
 * @static
 * @member {PIXI.BatchDrawCall[]}
 */
AbstractBatchRenderer._drawCallPool = [];

/**
 * Pool of `BatchDrawCall` objects that `flush` used
 * to create "batches" of the objects being rendered.
 *
 * These are never re-allocated again.
 * Shared between all batch renderers because it can be only one "flush" working at the moment.
 *
 * @static
 * @member {PIXI.BatchTextureArray[]}
 */
AbstractBatchRenderer._textureArrayPool = [];

/**
 * Helper that generates batching multi-texture shader. Use it with your new BatchRenderer
 *
 * @class
 * @memberof PIXI
 */
var BatchShaderGenerator = function BatchShaderGenerator(vertexSrc, fragTemplate)
{
    /**
     * Reference to the vertex shader source.
     *
     * @member {string}
     */
    this.vertexSrc = vertexSrc;

    /**
     * Reference to the fragement shader template. Must contain "%count%" and "%forloop%".
     *
     * @member {string}
     */
    this.fragTemplate = fragTemplate;

    this.programCache = {};
    this.defaultGroupCache = {};

    if (fragTemplate.indexOf('%count%') < 0)
    {
        throw new Error('Fragment template must contain "%count%".');
    }

    if (fragTemplate.indexOf('%forloop%') < 0)
    {
        throw new Error('Fragment template must contain "%forloop%".');
    }
};

BatchShaderGenerator.prototype.generateShader = function generateShader (maxTextures)
{
    if (!this.programCache[maxTextures])
    {
        var sampleValues = new Int32Array(maxTextures);

        for (var i = 0; i < maxTextures; i++)
        {
            sampleValues[i] = i;
        }

        this.defaultGroupCache[maxTextures] = UniformGroup.from({ uSamplers: sampleValues }, true);

        var fragmentSrc = this.fragTemplate;

        fragmentSrc = fragmentSrc.replace(/%count%/gi, ("" + maxTextures));
        fragmentSrc = fragmentSrc.replace(/%forloop%/gi, this.generateSampleSrc(maxTextures));

        this.programCache[maxTextures] = new Program(this.vertexSrc, fragmentSrc);
    }

    var uniforms = {
        tint: new Float32Array([1, 1, 1, 1]),
        translationMatrix: new _pixi_math__WEBPACK_IMPORTED_MODULE_5__[/* Matrix */ "d"](),
        default: this.defaultGroupCache[maxTextures],
    };

    return new Shader(this.programCache[maxTextures], uniforms);
};

BatchShaderGenerator.prototype.generateSampleSrc = function generateSampleSrc (maxTextures)
{
    var src = '';

    src += '\n';
    src += '\n';

    for (var i = 0; i < maxTextures; i++)
    {
        if (i > 0)
        {
            src += '\nelse ';
        }

        if (i < maxTextures - 1)
        {
            src += "if(vTextureId < " + i + ".5)";
        }

        src += '\n{';
        src += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);";
        src += '\n}';
    }

    src += '\n';
    src += '\n';

    return src;
};

/**
 * Geometry used to batch standard PIXI content (e.g. Mesh, Sprite, Graphics objects).
 *
 * @class
 * @memberof PIXI
 */
var BatchGeometry = /*@__PURE__*/(function (Geometry) {
    function BatchGeometry(_static)
    {
        if ( _static === void 0 ) _static = false;

        Geometry.call(this);

        /**
         * Buffer used for position, color, texture IDs
         *
         * @member {PIXI.Buffer}
         * @protected
         */
        this._buffer = new Buffer(null, _static, false);

        /**
         * Index buffer data
         *
         * @member {PIXI.Buffer}
         * @protected
         */
        this._indexBuffer = new Buffer(null, _static, true);

        this.addAttribute('aVertexPosition', this._buffer, 2, false, _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].FLOAT)
            .addAttribute('aTextureCoord', this._buffer, 2, false, _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].FLOAT)
            .addAttribute('aColor', this._buffer, 4, true, _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].UNSIGNED_BYTE)
            .addAttribute('aTextureId', this._buffer, 1, true, _pixi_constants__WEBPACK_IMPORTED_MODULE_2__[/* TYPES */ "m"].FLOAT)
            .addIndex(this._indexBuffer);
    }

    if ( Geometry ) BatchGeometry.__proto__ = Geometry;
    BatchGeometry.prototype = Object.create( Geometry && Geometry.prototype );
    BatchGeometry.prototype.constructor = BatchGeometry;

    return BatchGeometry;
}(Geometry));

var defaultVertex$2 = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n";

var defaultFragment$2 = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";

/**
 * @class
 * @memberof PIXI
 * @hideconstructor
 */
var BatchPluginFactory = function BatchPluginFactory () {};

var staticAccessors$1 = { defaultVertexSrc: { configurable: true },defaultFragmentTemplate: { configurable: true } };

BatchPluginFactory.create = function create (options)
{
    var ref = Object.assign({
        vertex: defaultVertex$2,
        fragment: defaultFragment$2,
        geometryClass: BatchGeometry,
        vertexSize: 6,
    }, options);
        var vertex = ref.vertex;
        var fragment = ref.fragment;
        var vertexSize = ref.vertexSize;
        var geometryClass = ref.geometryClass;

    return /*@__PURE__*/(function (AbstractBatchRenderer) {
            function BatchPlugin(renderer)
        {
            AbstractBatchRenderer.call(this, renderer);

            this.shaderGenerator = new BatchShaderGenerator(vertex, fragment);
            this.geometryClass = geometryClass;
            this.vertexSize = vertexSize;
        }

            if ( AbstractBatchRenderer ) BatchPlugin.__proto__ = AbstractBatchRenderer;
            BatchPlugin.prototype = Object.create( AbstractBatchRenderer && AbstractBatchRenderer.prototype );
            BatchPlugin.prototype.constructor = BatchPlugin;

            return BatchPlugin;
        }(AbstractBatchRenderer));
};

/**
 * The default vertex shader source
 *
 * @static
 * @type {string}
 * @constant
 */
staticAccessors$1.defaultVertexSrc.get = function ()
{
    return defaultVertex$2;
};

/**
 * The default fragment shader source
 *
 * @static
 * @type {string}
 * @constant
 */
staticAccessors$1.defaultFragmentTemplate.get = function ()
{
    return defaultFragment$2;
};

Object.defineProperties( BatchPluginFactory, staticAccessors$1 );

// Setup the default BatchRenderer plugin, this is what
// we'll actually export at the root level
var BatchRenderer = BatchPluginFactory.create();


//# sourceMappingURL=core.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/display/lib/display.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DisplayObject; });
/* harmony import */ var _pixi_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/settings/lib/settings.es.js");
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/*!
 * @pixi/display - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */




/**
 * Sets the default value for the container property 'sortableChildren'.
 * If set to true, the container will sort its children by zIndex value
 * when updateTransform() is called, or manually if sortChildren() is called.
 *
 * This actually changes the order of elements in the array, so should be treated
 * as a basic solution that is not performant compared to other solutions,
 * such as @link https://github.com/pixijs/pixi-display
 *
 * Also be aware of that this may not work nicely with the addChildAt() function,
 * as the zIndex sorting may cause the child to automatically sorted to another position.
 *
 * @static
 * @constant
 * @name SORTABLE_CHILDREN
 * @memberof PIXI.settings
 * @type {boolean}
 * @default false
 */
_pixi_settings__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "b"].SORTABLE_CHILDREN = false;

/**
 * 'Builder' pattern for bounds rectangles.
 *
 * This could be called an Axis-Aligned Bounding Box.
 * It is not an actual shape. It is a mutable thing; no 'EMPTY' or those kind of problems.
 *
 * @class
 * @memberof PIXI
 */
var Bounds = function Bounds()
{
    /**
     * @member {number}
     * @default 0
     */
    this.minX = Infinity;

    /**
     * @member {number}
     * @default 0
     */
    this.minY = Infinity;

    /**
     * @member {number}
     * @default 0
     */
    this.maxX = -Infinity;

    /**
     * @member {number}
     * @default 0
     */
    this.maxY = -Infinity;

    this.rect = null;
};

/**
 * Checks if bounds are empty.
 *
 * @return {boolean} True if empty.
 */
Bounds.prototype.isEmpty = function isEmpty ()
{
    return this.minX > this.maxX || this.minY > this.maxY;
};

/**
 * Clears the bounds and resets.
 *
 */
Bounds.prototype.clear = function clear ()
{
    this.updateID++;

    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
};

/**
 * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
 * It is not guaranteed that it will return tempRect
 *
 * @param {PIXI.Rectangle} rect - temporary object will be used if AABB is not empty
 * @returns {PIXI.Rectangle} A rectangle of the bounds
 */
Bounds.prototype.getRectangle = function getRectangle (rect)
{
    if (this.minX > this.maxX || this.minY > this.maxY)
    {
        return _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Rectangle */ "j"].EMPTY;
    }

    rect = rect || new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Rectangle */ "j"](0, 0, 1, 1);

    rect.x = this.minX;
    rect.y = this.minY;
    rect.width = this.maxX - this.minX;
    rect.height = this.maxY - this.minY;

    return rect;
};

/**
 * This function should be inlined when its possible.
 *
 * @param {PIXI.Point} point - The point to add.
 */
Bounds.prototype.addPoint = function addPoint (point)
{
    this.minX = Math.min(this.minX, point.x);
    this.maxX = Math.max(this.maxX, point.x);
    this.minY = Math.min(this.minY, point.y);
    this.maxY = Math.max(this.maxY, point.y);
};

/**
 * Adds a quad, not transformed
 *
 * @param {Float32Array} vertices - The verts to add.
 */
Bounds.prototype.addQuad = function addQuad (vertices)
{
    var minX = this.minX;
    var minY = this.minY;
    var maxX = this.maxX;
    var maxY = this.maxY;

    var x = vertices[0];
    var y = vertices[1];

    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    x = vertices[2];
    y = vertices[3];
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    x = vertices[4];
    y = vertices[5];
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    x = vertices[6];
    y = vertices[7];
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
};

/**
 * Adds sprite frame, transformed.
 *
 * @param {PIXI.Transform} transform - transform to apply
 * @param {number} x0 - left X of frame
 * @param {number} y0 - top Y of frame
 * @param {number} x1 - right X of frame
 * @param {number} y1 - bottom Y of frame
 */
Bounds.prototype.addFrame = function addFrame (transform, x0, y0, x1, y1)
{
    this.addFrameMatrix(transform.worldTransform, x0, y0, x1, y1);
};

/**
 * Adds sprite frame, multiplied by matrix
 *
 * @param {PIXI.Matrix} matrix - matrix to apply
 * @param {number} x0 - left X of frame
 * @param {number} y0 - top Y of frame
 * @param {number} x1 - right X of frame
 * @param {number} y1 - bottom Y of frame
 */
Bounds.prototype.addFrameMatrix = function addFrameMatrix (matrix, x0, y0, x1, y1)
{
    var a = matrix.a;
    var b = matrix.b;
    var c = matrix.c;
    var d = matrix.d;
    var tx = matrix.tx;
    var ty = matrix.ty;

    var minX = this.minX;
    var minY = this.minY;
    var maxX = this.maxX;
    var maxY = this.maxY;

    var x = (a * x0) + (c * y0) + tx;
    var y = (b * x0) + (d * y0) + ty;

    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    x = (a * x1) + (c * y0) + tx;
    y = (b * x1) + (d * y0) + ty;
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    x = (a * x0) + (c * y1) + tx;
    y = (b * x0) + (d * y1) + ty;
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    x = (a * x1) + (c * y1) + tx;
    y = (b * x1) + (d * y1) + ty;
    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;

    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
};

/**
 * Adds screen vertices from array
 *
 * @param {Float32Array} vertexData - calculated vertices
 * @param {number} beginOffset - begin offset
 * @param {number} endOffset - end offset, excluded
 */
Bounds.prototype.addVertexData = function addVertexData (vertexData, beginOffset, endOffset)
{
    var minX = this.minX;
    var minY = this.minY;
    var maxX = this.maxX;
    var maxY = this.maxY;

    for (var i = beginOffset; i < endOffset; i += 2)
    {
        var x = vertexData[i];
        var y = vertexData[i + 1];

        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
    }

    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
};

/**
 * Add an array of mesh vertices
 *
 * @param {PIXI.Transform} transform - mesh transform
 * @param {Float32Array} vertices - mesh coordinates in array
 * @param {number} beginOffset - begin offset
 * @param {number} endOffset - end offset, excluded
 */
Bounds.prototype.addVertices = function addVertices (transform, vertices, beginOffset, endOffset)
{
    this.addVerticesMatrix(transform.worldTransform, vertices, beginOffset, endOffset);
};

/**
 * Add an array of mesh vertices
 *
 * @param {PIXI.Matrix} matrix - mesh matrix
 * @param {Float32Array} vertices - mesh coordinates in array
 * @param {number} beginOffset - begin offset
 * @param {number} endOffset - end offset, excluded
 * @param {number} [padX] - x padding
 * @param {number} [padY] - y padding
 */
Bounds.prototype.addVerticesMatrix = function addVerticesMatrix (matrix, vertices, beginOffset, endOffset, padX, padY)
{
    var a = matrix.a;
    var b = matrix.b;
    var c = matrix.c;
    var d = matrix.d;
    var tx = matrix.tx;
    var ty = matrix.ty;

    padX = padX || 0;
    padY = padY || 0;

    var minX = this.minX;
    var minY = this.minY;
    var maxX = this.maxX;
    var maxY = this.maxY;

    for (var i = beginOffset; i < endOffset; i += 2)
    {
        var rawX = vertices[i];
        var rawY = vertices[i + 1];
        var x = (a * rawX) + (c * rawY) + tx;
        var y = (d * rawY) + (b * rawX) + ty;

        minX = Math.min(minX, x - padX);
        maxX = Math.max(maxX, x + padX);
        minY = Math.min(minY, y - padY);
        maxY = Math.max(maxY, y + padY);
    }

    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
};

/**
 * Adds other Bounds
 *
 * @param {PIXI.Bounds} bounds - TODO
 */
Bounds.prototype.addBounds = function addBounds (bounds)
{
    var minX = this.minX;
    var minY = this.minY;
    var maxX = this.maxX;
    var maxY = this.maxY;

    this.minX = bounds.minX < minX ? bounds.minX : minX;
    this.minY = bounds.minY < minY ? bounds.minY : minY;
    this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
    this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
};

/**
 * Adds other Bounds, masked with Bounds
 *
 * @param {PIXI.Bounds} bounds - TODO
 * @param {PIXI.Bounds} mask - TODO
 */
Bounds.prototype.addBoundsMask = function addBoundsMask (bounds, mask)
{
    var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
    var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
    var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
    var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;

    if (_minX <= _maxX && _minY <= _maxY)
    {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
    }
};

/**
 * Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty
 *
 * @param {PIXI.Bounds} bounds other bounds
 * @param {PIXI.Matrix} matrix multiplicator
 */
Bounds.prototype.addBoundsMatrix = function addBoundsMatrix (bounds, matrix)
{
    this.addFrameMatrix(matrix, bounds.minX, bounds.minY, bounds.maxX, bounds.maxY);
};

/**
 * Adds other Bounds, masked with Rectangle
 *
 * @param {PIXI.Bounds} bounds - TODO
 * @param {PIXI.Rectangle} area - TODO
 */
Bounds.prototype.addBoundsArea = function addBoundsArea (bounds, area)
{
    var _minX = bounds.minX > area.x ? bounds.minX : area.x;
    var _minY = bounds.minY > area.y ? bounds.minY : area.y;
    var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : (area.x + area.width);
    var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : (area.y + area.height);

    if (_minX <= _maxX && _minY <= _maxY)
    {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
    }
};

/**
 * Pads bounds object, making it grow in all directions.
 * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
 *
 * @param {number} [paddingX=0] - The horizontal padding amount.
 * @param {number} [paddingY=0] - The vertical padding amount.
 */
Bounds.prototype.pad = function pad (paddingX, paddingY)
{
    paddingX = paddingX || 0;
    paddingY = paddingY || ((paddingY !== 0) ? paddingX : 0);

    if (!this.isEmpty())
    {
        this.minX -= paddingX;
        this.maxX += paddingX;
        this.minY -= paddingY;
        this.maxY += paddingY;
    }
};

/**
 * Adds padded frame. (x0, y0) should be strictly less than (x1, y1)
 *
 * @param {number} x0 - left X of frame
 * @param {number} y0 - top Y of frame
 * @param {number} x1 - right X of frame
 * @param {number} y1 - bottom Y of frame
 * @param {number} padX - padding X
 * @param {number} padY - padding Y
 */
Bounds.prototype.addFramePad = function addFramePad (x0, y0, x1, y1, padX, padY)
{
    x0 -= padX;
    y0 -= padY;
    x1 += padX;
    y1 += padY;

    this.minX = this.minX < x0 ? this.minX : x0;
    this.maxX = this.maxX > x1 ? this.maxX : x1;
    this.minY = this.minY < y0 ? this.minY : y0;
    this.maxY = this.maxY > y1 ? this.maxY : y1;
};

// _tempDisplayObjectParent = new DisplayObject();

/**
 * The base class for all objects that are rendered on the screen.
 *
 * This is an abstract class and should not be used on its own; rather it should be extended.
 *
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI
 */
var DisplayObject = /*@__PURE__*/(function (EventEmitter) {
    function DisplayObject()
    {
        EventEmitter.call(this);

        this.tempDisplayObjectParent = null;

        // TODO: need to create Transform from factory
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform}
         */
        this.transform = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Transform */ "m"]();

        /**
         * The opacity of the object.
         *
         * @member {number}
         */
        this.alpha = 1;

        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean}
         */
        this.visible = true;

        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean}
         */
        this.renderable = true;

        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container}
         * @readonly
         */
        this.parent = null;

        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number}
         * @readonly
         */
        this.worldAlpha = 1;

        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number}
         * @protected
         */
        this._lastSortedIndex = 0;

        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         * @protected
         */
        this._zIndex = 0;

        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle}
         */
        this.filterArea = null;

        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]}
         */
        this.filters = null;
        this._enabledFilters = null;

        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds}
         * @protected
         */
        this._bounds = new Bounds();
        this._boundsID = 0;
        this._lastBoundsID = -1;
        this._boundsRect = null;
        this._localBoundsRect = null;

        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         * @protected
         */
        this._mask = null;

        /**
         * Fired when this DisplayObject is added to a Container.
         *
         * @event PIXI.DisplayObject#added
         * @param {PIXI.Container} container - The container added to.
         */

        /**
         * Fired when this DisplayObject is removed from a Container.
         *
         * @event PIXI.DisplayObject#removed
         * @param {PIXI.Container} container - The container removed from.
         */

        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean}
         * @protected
         */
        this._destroyed = false;

        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean}
         */
        this.isSprite = false;

        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean}
         */
        this.isMask = false;
    }

    if ( EventEmitter ) DisplayObject.__proto__ = EventEmitter;
    DisplayObject.prototype = Object.create( EventEmitter && EventEmitter.prototype );
    DisplayObject.prototype.constructor = DisplayObject;

    var prototypeAccessors = { _tempDisplayObjectParent: { configurable: true },x: { configurable: true },y: { configurable: true },worldTransform: { configurable: true },localTransform: { configurable: true },position: { configurable: true },scale: { configurable: true },pivot: { configurable: true },skew: { configurable: true },rotation: { configurable: true },angle: { configurable: true },zIndex: { configurable: true },worldVisible: { configurable: true },mask: { configurable: true } };

    /**
     * @protected
     * @member {PIXI.DisplayObject}
     */
    DisplayObject.mixin = function mixin (source)
    {
        // in ES8/ES2017, this would be really easy:
        // Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

        // get all the enumerable property keys
        var keys = Object.keys(source);

        // loop through properties
        for (var i = 0; i < keys.length; ++i)
        {
            var propertyName = keys[i];

            // Set the property using the property descriptor - this works for accessors and normal value properties
            Object.defineProperty(
                DisplayObject.prototype,
                propertyName,
                Object.getOwnPropertyDescriptor(source, propertyName)
            );
        }
    };

    prototypeAccessors._tempDisplayObjectParent.get = function ()
    {
        if (this.tempDisplayObjectParent === null)
        {
            this.tempDisplayObjectParent = new DisplayObject();
        }

        return this.tempDisplayObjectParent;
    };

    /**
     * Updates the object transform for rendering.
     *
     * TODO - Optimization pass!
     */
    DisplayObject.prototype.updateTransform = function updateTransform ()
    {
        this.transform.updateTransform(this.parent.transform);
        // multiply the alphas..
        this.worldAlpha = this.alpha * this.parent.worldAlpha;

        this._bounds.updateID++;
    };

    /**
     * Recursively updates transform of all objects from the root to this one
     * internal function for toLocal()
     */
    DisplayObject.prototype._recursivePostUpdateTransform = function _recursivePostUpdateTransform ()
    {
        if (this.parent)
        {
            this.parent._recursivePostUpdateTransform();
            this.transform.updateTransform(this.parent.transform);
        }
        else
        {
            this.transform.updateTransform(this._tempDisplayObjectParent.transform);
        }
    };

    /**
     * Retrieves the bounds of the displayObject as a rectangle object.
     *
     * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
     *  being updated. This means the calculation returned MAY be out of date BUT will give you a
     *  nice performance boost.
     * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
     * @return {PIXI.Rectangle} The rectangular bounding area.
     */
    DisplayObject.prototype.getBounds = function getBounds (skipUpdate, rect)
    {
        if (!skipUpdate)
        {
            if (!this.parent)
            {
                this.parent = this._tempDisplayObjectParent;
                this.updateTransform();
                this.parent = null;
            }
            else
            {
                this._recursivePostUpdateTransform();
                this.updateTransform();
            }
        }

        if (this._boundsID !== this._lastBoundsID)
        {
            this.calculateBounds();
            this._lastBoundsID = this._boundsID;
        }

        if (!rect)
        {
            if (!this._boundsRect)
            {
                this._boundsRect = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Rectangle */ "j"]();
            }

            rect = this._boundsRect;
        }

        return this._bounds.getRectangle(rect);
    };

    /**
     * Retrieves the local bounds of the displayObject as a rectangle object.
     *
     * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
     * @return {PIXI.Rectangle} The rectangular bounding area.
     */
    DisplayObject.prototype.getLocalBounds = function getLocalBounds (rect)
    {
        var transformRef = this.transform;
        var parentRef = this.parent;

        this.parent = null;
        this.transform = this._tempDisplayObjectParent.transform;

        if (!rect)
        {
            if (!this._localBoundsRect)
            {
                this._localBoundsRect = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Rectangle */ "j"]();
            }

            rect = this._localBoundsRect;
        }

        var bounds = this.getBounds(false, rect);

        this.parent = parentRef;
        this.transform = transformRef;

        return bounds;
    };

    /**
     * Calculates the global position of the display object.
     *
     * @param {PIXI.IPoint} position - The world origin to calculate from.
     * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
     *  (otherwise will create a new Point).
     * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
     * @return {PIXI.IPoint} A point object representing the position of this object.
     */
    DisplayObject.prototype.toGlobal = function toGlobal (position, point, skipUpdate)
    {
        if ( skipUpdate === void 0 ) skipUpdate = false;

        if (!skipUpdate)
        {
            this._recursivePostUpdateTransform();

            // this parent check is for just in case the item is a root object.
            // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
            // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
            if (!this.parent)
            {
                this.parent = this._tempDisplayObjectParent;
                this.displayObjectUpdateTransform();
                this.parent = null;
            }
            else
            {
                this.displayObjectUpdateTransform();
            }
        }

        // don't need to update the lot
        return this.worldTransform.apply(position, point);
    };

    /**
     * Calculates the local position of the display object relative to another point.
     *
     * @param {PIXI.IPoint} position - The world origin to calculate from.
     * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
     * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
     *  (otherwise will create a new Point).
     * @param {boolean} [skipUpdate=false] - Should we skip the update transform
     * @return {PIXI.IPoint} A point object representing the position of this object
     */
    DisplayObject.prototype.toLocal = function toLocal (position, from, point, skipUpdate)
    {
        if (from)
        {
            position = from.toGlobal(position, point, skipUpdate);
        }

        if (!skipUpdate)
        {
            this._recursivePostUpdateTransform();

            // this parent check is for just in case the item is a root object.
            // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
            // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
            if (!this.parent)
            {
                this.parent = this._tempDisplayObjectParent;
                this.displayObjectUpdateTransform();
                this.parent = null;
            }
            else
            {
                this.displayObjectUpdateTransform();
            }
        }

        // simply apply the matrix..
        return this.worldTransform.applyInverse(position, point);
    };

    /**
     * Renders the object using the WebGL renderer.
     *
     * @param {PIXI.Renderer} renderer - The renderer.
     */
    DisplayObject.prototype.render = function render (renderer) // eslint-disable-line no-unused-vars
    {
        // OVERWRITE;
    };

    /**
     * Set the parent Container of this DisplayObject.
     *
     * @param {PIXI.Container} container - The Container to add this DisplayObject to.
     * @return {PIXI.Container} The Container that this DisplayObject was added to.
     */
    DisplayObject.prototype.setParent = function setParent (container)
    {
        if (!container || !container.addChild)
        {
            throw new Error('setParent: Argument must be a Container');
        }

        container.addChild(this);

        return container;
    };

    /**
     * Convenience function to set the position, scale, skew and pivot at once.
     *
     * @param {number} [x=0] - The X position
     * @param {number} [y=0] - The Y position
     * @param {number} [scaleX=1] - The X scale value
     * @param {number} [scaleY=1] - The Y scale value
     * @param {number} [rotation=0] - The rotation
     * @param {number} [skewX=0] - The X skew value
     * @param {number} [skewY=0] - The Y skew value
     * @param {number} [pivotX=0] - The X pivot value
     * @param {number} [pivotY=0] - The Y pivot value
     * @return {PIXI.DisplayObject} The DisplayObject instance
     */
    DisplayObject.prototype.setTransform = function setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)
    {
        if ( x === void 0 ) x = 0;
        if ( y === void 0 ) y = 0;
        if ( scaleX === void 0 ) scaleX = 1;
        if ( scaleY === void 0 ) scaleY = 1;
        if ( rotation === void 0 ) rotation = 0;
        if ( skewX === void 0 ) skewX = 0;
        if ( skewY === void 0 ) skewY = 0;
        if ( pivotX === void 0 ) pivotX = 0;
        if ( pivotY === void 0 ) pivotY = 0;

        this.position.x = x;
        this.position.y = y;
        this.scale.x = !scaleX ? 1 : scaleX;
        this.scale.y = !scaleY ? 1 : scaleY;
        this.rotation = rotation;
        this.skew.x = skewX;
        this.skew.y = skewY;
        this.pivot.x = pivotX;
        this.pivot.y = pivotY;

        return this;
    };

    /**
     * Base destroy method for generic display objects. This will automatically
     * remove the display object from its parent Container as well as remove
     * all current event listeners and internal references. Do not use a DisplayObject
     * after calling `destroy()`.
     *
     */
    DisplayObject.prototype.destroy = function destroy ()
    {
        this.removeAllListeners();
        if (this.parent)
        {
            this.parent.removeChild(this);
        }
        this.transform = null;

        this.parent = null;
        this._bounds = null;
        this._currentBounds = null;
        this._mask = null;

        this.filters = null;
        this.filterArea = null;
        this.hitArea = null;

        this.interactive = false;
        this.interactiveChildren = false;

        this._destroyed = true;
    };

    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     * An alias to position.x
     *
     * @member {number}
     */
    prototypeAccessors.x.get = function ()
    {
        return this.position.x;
    };

    prototypeAccessors.x.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.position.x = value;
    };

    /**
     * The position of the displayObject on the y axis relative to the local coordinates of the parent.
     * An alias to position.y
     *
     * @member {number}
     */
    prototypeAccessors.y.get = function ()
    {
        return this.position.y;
    };

    prototypeAccessors.y.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.position.y = value;
    };

    /**
     * Current transform of the object based on world (parent) factors.
     *
     * @member {PIXI.Matrix}
     * @readonly
     */
    prototypeAccessors.worldTransform.get = function ()
    {
        return this.transform.worldTransform;
    };

    /**
     * Current transform of the object based on local factors: position, scale, other stuff.
     *
     * @member {PIXI.Matrix}
     * @readonly
     */
    prototypeAccessors.localTransform.get = function ()
    {
        return this.transform.localTransform;
    };

    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     * Assignment by value since pixi-v4.
     *
     * @member {PIXI.IPoint}
     */
    prototypeAccessors.position.get = function ()
    {
        return this.transform.position;
    };

    prototypeAccessors.position.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.position.copyFrom(value);
    };

    /**
     * The scale factor of the object.
     * Assignment by value since pixi-v4.
     *
     * @member {PIXI.IPoint}
     */
    prototypeAccessors.scale.get = function ()
    {
        return this.transform.scale;
    };

    prototypeAccessors.scale.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.scale.copyFrom(value);
    };

    /**
     * The pivot point of the displayObject that it rotates around.
     * Assignment by value since pixi-v4.
     *
     * @member {PIXI.IPoint}
     */
    prototypeAccessors.pivot.get = function ()
    {
        return this.transform.pivot;
    };

    prototypeAccessors.pivot.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.pivot.copyFrom(value);
    };

    /**
     * The skew factor for the object in radians.
     * Assignment by value since pixi-v4.
     *
     * @member {PIXI.ObservablePoint}
     */
    prototypeAccessors.skew.get = function ()
    {
        return this.transform.skew;
    };

    prototypeAccessors.skew.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.skew.copyFrom(value);
    };

    /**
     * The rotation of the object in radians.
     * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
     *
     * @member {number}
     */
    prototypeAccessors.rotation.get = function ()
    {
        return this.transform.rotation;
    };

    prototypeAccessors.rotation.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.rotation = value;
    };

    /**
     * The angle of the object in degrees.
     * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
     *
     * @member {number}
     */
    prototypeAccessors.angle.get = function ()
    {
        return this.transform.rotation * _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* RAD_TO_DEG */ "i"];
    };

    prototypeAccessors.angle.set = function (value) // eslint-disable-line require-jsdoc
    {
        this.transform.rotation = value * _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* DEG_TO_RAD */ "b"];
    };

    /**
     * The zIndex of the displayObject.
     * If a container has the sortableChildren property set to true, children will be automatically
     * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
     * and thus rendered on top of other displayObjects within the same container.
     *
     * @member {number}
     */
    prototypeAccessors.zIndex.get = function ()
    {
        return this._zIndex;
    };

    prototypeAccessors.zIndex.set = function (value) // eslint-disable-line require-jsdoc
    {
        this._zIndex = value;
        if (this.parent)
        {
            this.parent.sortDirty = true;
        }
    };

    /**
     * Indicates if the object is globally visible.
     *
     * @member {boolean}
     * @readonly
     */
    prototypeAccessors.worldVisible.get = function ()
    {
        var item = this;

        do
        {
            if (!item.visible)
            {
                return false;
            }

            item = item.parent;
        } while (item);

        return true;
    };

    /**
     * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
     * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
     * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
     * utilities shape clipping. To remove a mask, set this property to `null`.
     *
     * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
     * @example
     * const graphics = new PIXI.Graphics();
     * graphics.beginFill(0xFF3300);
     * graphics.drawRect(50, 250, 100, 100);
     * graphics.endFill();
     *
     * const sprite = new PIXI.Sprite(texture);
     * sprite.mask = graphics;
     * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
     *
     * @member {PIXI.Graphics|PIXI.Sprite|null}
     */
    prototypeAccessors.mask.get = function ()
    {
        return this._mask;
    };

    prototypeAccessors.mask.set = function (value) // eslint-disable-line require-jsdoc
    {
        if (this._mask)
        {
            var maskObject = this._mask.maskObject || this._mask;

            maskObject.renderable = true;
            maskObject.isMask = false;
        }

        this._mask = value;

        if (this._mask)
        {
            var maskObject$1 = this._mask.maskObject || this._mask;

            maskObject$1.renderable = false;
            maskObject$1.isMask = true;
        }
    };

    Object.defineProperties( DisplayObject.prototype, prototypeAccessors );

    return DisplayObject;
}(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]));

/**
 * DisplayObject default updateTransform, does not update children of container.
 * Will crash if there's no parent element.
 *
 * @memberof PIXI.DisplayObject#
 * @function displayObjectUpdateTransform
 */
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

function sortChildren(a, b)
{
    if (a.zIndex === b.zIndex)
    {
        return a._lastSortedIndex - b._lastSortedIndex;
    }

    return a.zIndex - b.zIndex;
}

/**
 * A Container represents a collection of display objects.
 *
 * It is the base class of all display objects that act as a container for other objects (like Sprites).
 *
 *```js
 * let container = new PIXI.Container();
 * container.addChild(sprite);
 * ```
 *
 * @class
 * @extends PIXI.DisplayObject
 * @memberof PIXI
 */
var Container = /*@__PURE__*/(function (DisplayObject) {
    function Container()
    {
        DisplayObject.call(this);

        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]}
         * @readonly
         */
        this.children = [];

        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean}
         */
        this.sortableChildren = _pixi_settings__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "b"].SORTABLE_CHILDREN;

        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean}
         */
        this.sortDirty = false;

        /**
         * Fired when a DisplayObject is added to this Container.
         *
         * @event PIXI.Container#childAdded
         * @param {PIXI.DisplayObject} child - The child added to the Container.
         * @param {PIXI.Container} container - The container that added the child.
         * @param {number} index - The children's index of the added child.
         */

        /**
         * Fired when a DisplayObject is removed from this Container.
         *
         * @event PIXI.DisplayObject#removedFrom
         * @param {PIXI.DisplayObject} child - The child removed from the Container.
         * @param {PIXI.Container} container - The container that removed removed the child.
         * @param {number} index - The former children's index of the removed child
         */
    }

    if ( DisplayObject ) Container.__proto__ = DisplayObject;
    Container.prototype = Object.create( DisplayObject && DisplayObject.prototype );
    Container.prototype.constructor = Container;

    var prototypeAccessors = { width: { configurable: true },height: { configurable: true } };

    /**
     * Overridable method that can be used by Container subclasses whenever the children array is modified
     *
     * @protected
     */
    Container.prototype.onChildrenChange = function onChildrenChange ()
    {
        /* empty */
    };

    /**
     * Adds one or more children to the container.
     *
     * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
     *
     * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
     * @return {PIXI.DisplayObject} The first child that was added.
     */
    Container.prototype.addChild = function addChild (child)
    {
        var arguments$1 = arguments;

        var argumentsLength = arguments.length;

        // if there is only one argument we can bypass looping through the them
        if (argumentsLength > 1)
        {
            // loop through the arguments property and add all children
            // use it the right way (.length and [i]) so that this function can still be optimized by JS runtimes
            for (var i = 0; i < argumentsLength; i++)
            {
                this.addChild(arguments$1[i]);
            }
        }
        else
        {
            // if the child has a parent then lets remove it as PixiJS objects can only exist in one place
            if (child.parent)
            {
                child.parent.removeChild(child);
            }

            child.parent = this;
            this.sortDirty = true;

            // ensure child transform will be recalculated
            child.transform._parentID = -1;

            this.children.push(child);

            // ensure bounds will be recalculated
            this._boundsID++;

            // TODO - lets either do all callbacks or all events.. not both!
            this.onChildrenChange(this.children.length - 1);
            this.emit('childAdded', child, this, this.children.length - 1);
            child.emit('added', this);
        }

        return child;
    };

    /**
     * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
     *
     * @param {PIXI.DisplayObject} child - The child to add
     * @param {number} index - The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added.
     */
    Container.prototype.addChildAt = function addChildAt (child, index)
    {
        if (index < 0 || index > this.children.length)
        {
            throw new Error((child + "addChildAt: The index " + index + " supplied is out of bounds " + (this.children.length)));
        }

        if (child.parent)
        {
            child.parent.removeChild(child);
        }

        child.parent = this;
        this.sortDirty = true;

        // ensure child transform will be recalculated
        child.transform._parentID = -1;

        this.children.splice(index, 0, child);

        // ensure bounds will be recalculated
        this._boundsID++;

        // TODO - lets either do all callbacks or all events.. not both!
        this.onChildrenChange(index);
        child.emit('added', this);
        this.emit('childAdded', child, this, index);

        return child;
    };

    /**
     * Swaps the position of 2 Display Objects within this container.
     *
     * @param {PIXI.DisplayObject} child - First display object to swap
     * @param {PIXI.DisplayObject} child2 - Second display object to swap
     */
    Container.prototype.swapChildren = function swapChildren (child, child2)
    {
        if (child === child2)
        {
            return;
        }

        var index1 = this.getChildIndex(child);
        var index2 = this.getChildIndex(child2);

        this.children[index1] = child2;
        this.children[index2] = child;
        this.onChildrenChange(index1 < index2 ? index1 : index2);
    };

    /**
     * Returns the index position of a child DisplayObject instance
     *
     * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
     * @return {number} The index position of the child display object to identify
     */
    Container.prototype.getChildIndex = function getChildIndex (child)
    {
        var index = this.children.indexOf(child);

        if (index === -1)
        {
            throw new Error('The supplied DisplayObject must be a child of the caller');
        }

        return index;
    };

    /**
     * Changes the position of an existing child in the display object container
     *
     * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
     * @param {number} index - The resulting index number for the child display object
     */
    Container.prototype.setChildIndex = function setChildIndex (child, index)
    {
        if (index < 0 || index >= this.children.length)
        {
            throw new Error(("The index " + index + " supplied is out of bounds " + (this.children.length)));
        }

        var currentIndex = this.getChildIndex(child);

        Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["removeItems"])(this.children, currentIndex, 1); // remove from old position
        this.children.splice(index, 0, child); // add at new position

        this.onChildrenChange(index);
    };

    /**
     * Returns the child at the specified index
     *
     * @param {number} index - The index to get the child at
     * @return {PIXI.DisplayObject} The child at the given index, if any.
     */
    Container.prototype.getChildAt = function getChildAt (index)
    {
        if (index < 0 || index >= this.children.length)
        {
            throw new Error(("getChildAt: Index (" + index + ") does not exist."));
        }

        return this.children[index];
    };

    /**
     * Removes one or more children from the container.
     *
     * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
     * @return {PIXI.DisplayObject} The first child that was removed.
     */
    Container.prototype.removeChild = function removeChild (child)
    {
        var arguments$1 = arguments;

        var argumentsLength = arguments.length;

        // if there is only one argument we can bypass looping through the them
        if (argumentsLength > 1)
        {
            // loop through the arguments property and add all children
            // use it the right way (.length and [i]) so that this function can still be optimized by JS runtimes
            for (var i = 0; i < argumentsLength; i++)
            {
                this.removeChild(arguments$1[i]);
            }
        }
        else
        {
            var index = this.children.indexOf(child);

            if (index === -1) { return null; }

            child.parent = null;
            // ensure child transform will be recalculated
            child.transform._parentID = -1;
            Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["removeItems"])(this.children, index, 1);

            // ensure bounds will be recalculated
            this._boundsID++;

            // TODO - lets either do all callbacks or all events.. not both!
            this.onChildrenChange(index);
            child.emit('removed', this);
            this.emit('childRemoved', child, this, index);
        }

        return child;
    };

    /**
     * Removes a child from the specified index position.
     *
     * @param {number} index - The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed.
     */
    Container.prototype.removeChildAt = function removeChildAt (index)
    {
        var child = this.getChildAt(index);

        // ensure child transform will be recalculated..
        child.parent = null;
        child.transform._parentID = -1;
        Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["removeItems"])(this.children, index, 1);

        // ensure bounds will be recalculated
        this._boundsID++;

        // TODO - lets either do all callbacks or all events.. not both!
        this.onChildrenChange(index);
        child.emit('removed', this);
        this.emit('childRemoved', child, this, index);

        return child;
    };

    /**
     * Removes all children from this container that are within the begin and end indexes.
     *
     * @param {number} [beginIndex=0] - The beginning position.
     * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
     * @returns {PIXI.DisplayObject[]} List of removed children
     */
    Container.prototype.removeChildren = function removeChildren (beginIndex, endIndex)
    {
        if ( beginIndex === void 0 ) beginIndex = 0;

        var begin = beginIndex;
        var end = typeof endIndex === 'number' ? endIndex : this.children.length;
        var range = end - begin;
        var removed;

        if (range > 0 && range <= end)
        {
            removed = this.children.splice(begin, range);

            for (var i = 0; i < removed.length; ++i)
            {
                removed[i].parent = null;
                if (removed[i].transform)
                {
                    removed[i].transform._parentID = -1;
                }
            }

            this._boundsID++;

            this.onChildrenChange(beginIndex);

            for (var i$1 = 0; i$1 < removed.length; ++i$1)
            {
                removed[i$1].emit('removed', this);
                this.emit('childRemoved', removed[i$1], this, i$1);
            }

            return removed;
        }
        else if (range === 0 && this.children.length === 0)
        {
            return [];
        }

        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
    };

    /**
     * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
     */
    Container.prototype.sortChildren = function sortChildren$1 ()
    {
        var sortRequired = false;

        for (var i = 0, j = this.children.length; i < j; ++i)
        {
            var child = this.children[i];

            child._lastSortedIndex = i;

            if (!sortRequired && child.zIndex !== 0)
            {
                sortRequired = true;
            }
        }

        if (sortRequired && this.children.length > 1)
        {
            this.children.sort(sortChildren);
        }

        this.sortDirty = false;
    };

    /**
     * Updates the transform on all children of this container for rendering
     */
    Container.prototype.updateTransform = function updateTransform ()
    {
        if (this.sortableChildren && this.sortDirty)
        {
            this.sortChildren();
        }

        this._boundsID++;

        this.transform.updateTransform(this.parent.transform);

        // TODO: check render flags, how to process stuff here
        this.worldAlpha = this.alpha * this.parent.worldAlpha;

        for (var i = 0, j = this.children.length; i < j; ++i)
        {
            var child = this.children[i];

            if (child.visible)
            {
                child.updateTransform();
            }
        }
    };

    /**
     * Recalculates the bounds of the container.
     *
     */
    Container.prototype.calculateBounds = function calculateBounds ()
    {
        this._bounds.clear();

        this._calculateBounds();

        for (var i = 0; i < this.children.length; i++)
        {
            var child = this.children[i];

            if (!child.visible || !child.renderable)
            {
                continue;
            }

            child.calculateBounds();

            // TODO: filter+mask, need to mask both somehow
            if (child._mask)
            {
                var maskObject = child._mask.maskObject || child._mask;

                maskObject.calculateBounds();
                this._bounds.addBoundsMask(child._bounds, maskObject._bounds);
            }
            else if (child.filterArea)
            {
                this._bounds.addBoundsArea(child._bounds, child.filterArea);
            }
            else
            {
                this._bounds.addBounds(child._bounds);
            }
        }

        this._lastBoundsID = this._boundsID;
    };

    /**
     * Recalculates the bounds of the object. Override this to
     * calculate the bounds of the specific object (not including children).
     *
     * @protected
     */
    Container.prototype._calculateBounds = function _calculateBounds ()
    {
        // FILL IN//
    };

    /**
     * Renders the object using the WebGL renderer
     *
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Container.prototype.render = function render (renderer)
    {
        // if the object is not visible or the alpha is 0 then no need to render this element
        if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
        {
            return;
        }

        // do a quick check to see if this element has a mask or a filter.
        if (this._mask || (this.filters && this.filters.length))
        {
            this.renderAdvanced(renderer);
        }
        else
        {
            this._render(renderer);

            // simple render children!
            for (var i = 0, j = this.children.length; i < j; ++i)
            {
                this.children[i].render(renderer);
            }
        }
    };

    /**
     * Render the object using the WebGL renderer and advanced features.
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Container.prototype.renderAdvanced = function renderAdvanced (renderer)
    {
        renderer.batch.flush();

        var filters = this.filters;
        var mask = this._mask;

        // push filter first as we need to ensure the stencil buffer is correct for any masking
        if (filters)
        {
            if (!this._enabledFilters)
            {
                this._enabledFilters = [];
            }

            this._enabledFilters.length = 0;

            for (var i = 0; i < filters.length; i++)
            {
                if (filters[i].enabled)
                {
                    this._enabledFilters.push(filters[i]);
                }
            }

            if (this._enabledFilters.length)
            {
                renderer.filter.push(this, this._enabledFilters);
            }
        }

        if (mask)
        {
            renderer.mask.push(this, this._mask);
        }

        // add this object to the batch, only rendered if it has a texture.
        this._render(renderer);

        // now loop through the children and make sure they get rendered
        for (var i$1 = 0, j = this.children.length; i$1 < j; i$1++)
        {
            this.children[i$1].render(renderer);
        }

        renderer.batch.flush();

        if (mask)
        {
            renderer.mask.pop(this, this._mask);
        }

        if (filters && this._enabledFilters && this._enabledFilters.length)
        {
            renderer.filter.pop();
        }
    };

    /**
     * To be overridden by the subclasses.
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Container.prototype._render = function _render (renderer) // eslint-disable-line no-unused-vars
    {
        // this is where content itself gets rendered...
    };

    /**
     * Removes all internal references and listeners as well as removes children from the display list.
     * Do not use a Container after calling `destroy`.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *  method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */
    Container.prototype.destroy = function destroy (options)
    {
        DisplayObject.prototype.destroy.call(this);

        this.sortDirty = false;

        var destroyChildren = typeof options === 'boolean' ? options : options && options.children;

        var oldChildren = this.removeChildren(0, this.children.length);

        if (destroyChildren)
        {
            for (var i = 0; i < oldChildren.length; ++i)
            {
                oldChildren[i].destroy(options);
            }
        }
    };

    /**
     * The width of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    prototypeAccessors.width.get = function ()
    {
        return this.scale.x * this.getLocalBounds().width;
    };

    prototypeAccessors.width.set = function (value) // eslint-disable-line require-jsdoc
    {
        var width = this.getLocalBounds().width;

        if (width !== 0)
        {
            this.scale.x = value / width;
        }
        else
        {
            this.scale.x = 1;
        }

        this._width = value;
    };

    /**
     * The height of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    prototypeAccessors.height.get = function ()
    {
        return this.scale.y * this.getLocalBounds().height;
    };

    prototypeAccessors.height.set = function (value) // eslint-disable-line require-jsdoc
    {
        var height = this.getLocalBounds().height;

        if (height !== 0)
        {
            this.scale.y = value / height;
        }
        else
        {
            this.scale.y = 1;
        }

        this._height = value;
    };

    Object.defineProperties( Container.prototype, prototypeAccessors );

    return Container;
}(DisplayObject));

// performance increase to avoid using call.. (10x faster)
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;


//# sourceMappingURL=display.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/graphics/lib/graphics.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GRAPHICS_CURVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Graphics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GraphicsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GraphicsGeometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LineStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return index; });
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/* harmony import */ var _pixi_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/constants/lib/constants.es.js");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@pixi/display/lib/display.es.js");
/*!
 * @pixi/graphics - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */






/**
 * Graphics curves resolution settings. If `adaptive` flag is set to `true`,
 * the resolution is calculated based on the curve's length to ensure better visual quality.
 * Adaptive draw works with `bezierCurveTo` and `quadraticCurveTo`.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name GRAPHICS_CURVES
 * @type {object}
 * @property {boolean} adaptive=false - flag indicating if the resolution should be adaptive
 * @property {number} maxLength=10 - maximal length of a single segment of the curve (if adaptive = false, ignored)
 * @property {number} minSegments=8 - minimal number of segments in the curve (if adaptive = false, ignored)
 * @property {number} maxSegments=2048 - maximal number of segments in the curve (if adaptive = false, ignored)
 */
var GRAPHICS_CURVES = {
    adaptive: true,
    maxLength: 10,
    minSegments: 8,
    maxSegments: 2048,
    _segmentsCount: function _segmentsCount(length, defaultSegments)
    {
        if ( defaultSegments === void 0 ) defaultSegments = 20;

        if (!this.adaptive)
        {
            return defaultSegments;
        }

        var result = Math.ceil(length / this.maxLength);

        if (result < this.minSegments)
        {
            result = this.minSegments;
        }
        else if (result > this.maxSegments)
        {
            result = this.maxSegments;
        }

        return result;
    },
};

/**
 * Fill style object for Graphics.
 *
 * @class
 * @memberof PIXI
 */
var FillStyle = function FillStyle()
{
    this.reset();
};

/**
 * Clones the object
 *
 * @return {PIXI.FillStyle}
 */
FillStyle.prototype.clone = function clone ()
{
    var obj = new FillStyle();

    obj.color = this.color;
    obj.alpha = this.alpha;
    obj.texture = this.texture;
    obj.matrix = this.matrix;
    obj.visible = this.visible;

    return obj;
};

/**
 * Reset
 */
FillStyle.prototype.reset = function reset ()
{
    /**
     * The hex color value used when coloring the Graphics object.
     *
     * @member {number}
     * @default 1
     */
    this.color = 0xFFFFFF;

    /**
     * The alpha value used when filling the Graphics object.
     *
     * @member {number}
     * @default 1
     */
    this.alpha = 1;

    /**
     * The texture to be used for the fill.
     *
     * @member {string}
     * @default 0
     */
    this.texture = _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"].WHITE;

    /**
     * The transform aplpied to the texture.
     *
     * @member {string}
     * @default 0
     */
    this.matrix = null;

    /**
     * If the current fill is visible.
     *
     * @member {boolean}
     * @default false
     */
    this.visible = false;
};

/**
 * Destroy and don't use after this
 */
FillStyle.prototype.destroy = function destroy ()
{
    this.texture = null;
    this.matrix = null;
};

/**
 * Builds a polygon to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildPoly = {

    build: function build(graphicsData)
    {
        graphicsData.points = graphicsData.shape.points.slice();
    },

    triangulate: function triangulate(graphicsData, graphicsGeometry)
    {
        var points = graphicsData.points;
        var holes = graphicsData.holes;
        var verts = graphicsGeometry.points;
        var indices = graphicsGeometry.indices;

        if (points.length >= 6)
        {
            var holeArray = [];
            // Process holes..

            for (var i = 0; i < holes.length; i++)
            {
                var hole = holes[i];

                holeArray.push(points.length / 2);
                points = points.concat(hole.points);
            }

            // sort color
            var triangles = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["earcut"])(points, holeArray, 2);

            if (!triangles)
            {
                return;
            }

            var vertPos = verts.length / 2;

            for (var i$1 = 0; i$1 < triangles.length; i$1 += 3)
            {
                indices.push(triangles[i$1] + vertPos);
                indices.push(triangles[i$1 + 1] + vertPos);
                indices.push(triangles[i$1 + 2] + vertPos);
            }

            for (var i$2 = 0; i$2 < points.length; i$2++)
            {
                verts.push(points[i$2]);
            }
        }
    },
};

/**
 * Builds a circle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object to draw
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildCircle = {

    build: function build(graphicsData)
    {
        // need to convert points to a nice regular data
        var circleData = graphicsData.shape;
        var points = graphicsData.points;
        var x = circleData.x;
        var y = circleData.y;
        var width;
        var height;

        points.length = 0;

        // TODO - bit hacky??
        if (graphicsData.type === _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].CIRC)
        {
            width = circleData.radius;
            height = circleData.radius;
        }
        else
        {
            width = circleData.width;
            height = circleData.height;
        }

        if (width === 0 || height === 0)
        {
            return;
        }

        var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius))
            || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));

        totalSegs /= 2.3;

        var seg = (Math.PI * 2) / totalSegs;

        for (var i = 0; i < totalSegs; i++)
        {
            points.push(
                x + (Math.sin(-seg * i) * width),
                y + (Math.cos(-seg * i) * height)
            );
        }

        points.push(
            points[0],
            points[1]
        );
    },

    triangulate: function triangulate(graphicsData, graphicsGeometry)
    {
        var points = graphicsData.points;
        var verts = graphicsGeometry.points;
        var indices = graphicsGeometry.indices;

        var vertPos = verts.length / 2;
        var center = vertPos;

        verts.push(graphicsData.shape.x, graphicsData.shape.y);

        for (var i = 0; i < points.length; i += 2)
        {
            verts.push(points[i], points[i + 1]);

            // add some uvs
            indices.push(vertPos++, center, vertPos);
        }
    },
};

/**
 * Builds a rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildRectangle = {

    build: function build(graphicsData)
    {
        // --- //
        // need to convert points to a nice regular data
        //
        var rectData = graphicsData.shape;
        var x = rectData.x;
        var y = rectData.y;
        var width = rectData.width;
        var height = rectData.height;

        var points = graphicsData.points;

        points.length = 0;

        points.push(x, y,
            x + width, y,
            x + width, y + height,
            x, y + height);
    },

    triangulate: function triangulate(graphicsData, graphicsGeometry)
    {
        var points = graphicsData.points;
        var verts = graphicsGeometry.points;

        var vertPos = verts.length / 2;

        verts.push(points[0], points[1],
            points[2], points[3],
            points[6], points[7],
            points[4], points[5]);

        graphicsGeometry.indices.push(vertPos, vertPos + 1, vertPos + 2,
            vertPos + 1, vertPos + 2, vertPos + 3);
    },
};

/**
 * Builds a rounded rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */
var buildRoundedRectangle = {

    build: function build(graphicsData)
    {
        var rrectData = graphicsData.shape;
        var points = graphicsData.points;
        var x = rrectData.x;
        var y = rrectData.y;
        var width = rrectData.width;
        var height = rrectData.height;

        var radius = rrectData.radius;

        points.length = 0;

        quadraticBezierCurve(x, y + radius,
            x, y,
            x + radius, y,
            points);
        quadraticBezierCurve(x + width - radius,
            y, x + width, y,
            x + width, y + radius,
            points);
        quadraticBezierCurve(x + width, y + height - radius,
            x + width, y + height,
            x + width - radius, y + height,
            points);
        quadraticBezierCurve(x + radius, y + height,
            x, y + height,
            x, y + height - radius,
            points);

        // this tiny number deals with the issue that occurs when points overlap and earcut fails to triangulate the item.
        // TODO - fix this properly, this is not very elegant.. but it works for now.
    },

    triangulate: function triangulate(graphicsData, graphicsGeometry)
    {
        var points = graphicsData.points;

        var verts = graphicsGeometry.points;
        var indices = graphicsGeometry.indices;

        var vecPos = verts.length / 2;

        var triangles = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["earcut"])(points, null, 2);

        for (var i = 0, j = triangles.length; i < j; i += 3)
        {
            indices.push(triangles[i] + vecPos);
            //     indices.push(triangles[i] + vecPos);
            indices.push(triangles[i + 1] + vecPos);
            //   indices.push(triangles[i + 2] + vecPos);
            indices.push(triangles[i + 2] + vecPos);
        }

        for (var i$1 = 0, j$1 = points.length; i$1 < j$1; i$1++)
        {
            verts.push(points[i$1], points[++i$1]);
        }
    },
};

/**
 * Calculate a single point for a quadratic bezier curve.
 * Utility function used by quadraticBezierCurve.
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} n1 - first number
 * @param {number} n2 - second number
 * @param {number} perc - percentage
 * @return {number} the result
 *
 */
function getPt(n1, n2, perc)
{
    var diff = n2 - n1;

    return n1 + (diff * perc);
}

/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} fromX - Origin point x
 * @param {number} fromY - Origin point x
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} [out=[]] - The output array to add points into. If not passed, a new array is created.
 * @return {number[]} an array of points
 */
function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY, out)
{
    if ( out === void 0 ) out = [];

    var n = 20;
    var points = out;

    var xa = 0;
    var ya = 0;
    var xb = 0;
    var yb = 0;
    var x = 0;
    var y = 0;

    for (var i = 0, j = 0; i <= n; ++i)
    {
        j = i / n;

        // The Green Line
        xa = getPt(fromX, cpX, j);
        ya = getPt(fromY, cpY, j);
        xb = getPt(cpX, toX, j);
        yb = getPt(cpY, toY, j);

        // The Black Dot
        x = getPt(xa, xb, j);
        y = getPt(ya, yb, j);

        points.push(x, y);
    }

    return points;
}

/**
 * Builds a line to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */
function buildLine(graphicsData, graphicsGeometry)
{
    if (graphicsData.lineStyle.native)
    {
        buildNativeLine(graphicsData, graphicsGeometry);
    }
    else
    {
        buildNonNativeLine(graphicsData, graphicsGeometry);
    }
}

/**
 * Builds a line to draw using the polygon method.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */
function buildNonNativeLine(graphicsData, graphicsGeometry)
{
    var shape = graphicsData.shape;
    var points = graphicsData.points || shape.points.slice();
    var eps = graphicsGeometry.closePointEps;

    if (points.length === 0)
    {
        return;
    }
    // if the line width is an odd number add 0.5 to align to a whole pixel
    // commenting this out fixes #711 and #1620
    // if (graphicsData.lineWidth%2)
    // {
    //     for (i = 0; i < points.length; i++)
    //     {
    //         points[i] += 0.5;
    //     }
    // }

    var style = graphicsData.lineStyle;

    // get first and last point.. figure out the middle!
    var firstPoint = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Point */ "g"](points[0], points[1]);
    var lastPoint = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Point */ "g"](points[points.length - 2], points[points.length - 1]);
    var closedShape = shape.type !== _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].POLY || shape.closeStroke;
    var closedPath = Math.abs(firstPoint.x - lastPoint.x) < eps
        && Math.abs(firstPoint.y - lastPoint.y) < eps;

    // if the first point is the last point - gonna have issues :)
    if (closedShape)
    {
        // need to clone as we are going to slightly modify the shape..
        points = points.slice();

        if (closedPath)
        {
            points.pop();
            points.pop();
            lastPoint.set(points[points.length - 2], points[points.length - 1]);
        }

        var midPointX = lastPoint.x + ((firstPoint.x - lastPoint.x) * 0.5);
        var midPointY = lastPoint.y + ((firstPoint.y - lastPoint.y) * 0.5);

        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }

    var verts = graphicsGeometry.points;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length / 2;

    // DRAW the Line
    var width = style.width / 2;

    // sort color
    var p1x = points[0];
    var p1y = points[1];
    var p2x = points[2];
    var p2y = points[3];
    var p3x = 0;
    var p3y = 0;

    var perpx = -(p1y - p2y);
    var perpy = p1x - p2x;
    var perp2x = 0;
    var perp2y = 0;
    var perp3x = 0;
    var perp3y = 0;

    var dist = Math.sqrt((perpx * perpx) + (perpy * perpy));

    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    var ratio = style.alignment;// 0.5;
    var r1 = (1 - ratio) * 2;
    var r2 = ratio * 2;

    // start
    verts.push(
        p1x - (perpx * r1),
        p1y - (perpy * r1));

    verts.push(
        p1x + (perpx * r2),
        p1y + (perpy * r2));

    for (var i = 1; i < length - 1; ++i)
    {
        p1x = points[(i - 1) * 2];
        p1y = points[((i - 1) * 2) + 1];

        p2x = points[i * 2];
        p2y = points[(i * 2) + 1];

        p3x = points[(i + 1) * 2];
        p3y = points[((i + 1) * 2) + 1];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;

        perp2x = -(p2y - p3y);
        perp2y = p2x - p3x;

        dist = Math.sqrt((perp2x * perp2x) + (perp2y * perp2y));
        perp2x /= dist;
        perp2y /= dist;
        perp2x *= width;
        perp2y *= width;

        var a1 = (-perpy + p1y) - (-perpy + p2y);
        var b1 = (-perpx + p2x) - (-perpx + p1x);
        var c1 = ((-perpx + p1x) * (-perpy + p2y)) - ((-perpx + p2x) * (-perpy + p1y));
        var a2 = (-perp2y + p3y) - (-perp2y + p2y);
        var b2 = (-perp2x + p2x) - (-perp2x + p3x);
        var c2 = ((-perp2x + p3x) * (-perp2y + p2y)) - ((-perp2x + p2x) * (-perp2y + p3y));

        var denom = (a1 * b2) - (a2 * b1);

        if (Math.abs(denom) < 0.1)
        {
            denom += 10.1;
            verts.push(
                p2x - (perpx * r1),
                p2y - (perpy * r1));

            verts.push(
                p2x + (perpx * r2),
                p2y + (perpy * r2));

            continue;
        }

        var px = ((b1 * c2) - (b2 * c1)) / denom;
        var py = ((a2 * c1) - (a1 * c2)) / denom;
        var pdist = ((px - p2x) * (px - p2x)) + ((py - p2y) * (py - p2y));

        if (pdist > (196 * width * width))
        {
            perp3x = perpx - perp2x;
            perp3y = perpy - perp2y;

            dist = Math.sqrt((perp3x * perp3x) + (perp3y * perp3y));
            perp3x /= dist;
            perp3y /= dist;
            perp3x *= width;
            perp3y *= width;

            verts.push(p2x - (perp3x * r1), p2y - (perp3y * r1));

            verts.push(p2x + (perp3x * r2), p2y + (perp3y * r2));

            verts.push(p2x - (perp3x * r2 * r1), p2y - (perp3y * r1));

            indexCount++;
        }
        else
        {
            verts.push(p2x + ((px - p2x) * r1), p2y + ((py - p2y) * r1));

            verts.push(p2x - ((px - p2x) * r2), p2y - ((py - p2y) * r2));
        }
    }

    p1x = points[(length - 2) * 2];
    p1y = points[((length - 2) * 2) + 1];

    p2x = points[(length - 1) * 2];
    p2y = points[((length - 1) * 2) + 1];

    perpx = -(p1y - p2y);
    perpy = p1x - p2x;

    dist = Math.sqrt((perpx * perpx) + (perpy * perpy));
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    verts.push(p2x - (perpx * r1), p2y - (perpy * r1));

    verts.push(p2x + (perpx * r2), p2y + (perpy * r2));

    var indices = graphicsGeometry.indices;

    // indices.push(indexStart);

    for (var i$1 = 0; i$1 < indexCount - 2; ++i$1)
    {
        indices.push(indexStart, indexStart + 1, indexStart + 2);

        indexStart++;
    }
}

/**
 * Builds a line to draw using the gl.drawArrays(gl.LINES) method
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */
function buildNativeLine(graphicsData, graphicsGeometry)
{
    var i = 0;

    var shape = graphicsData.shape;
    var points = graphicsData.points || shape.points;
    var closedShape = shape.type !== _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].POLY || shape.closeStroke;

    if (points.length === 0) { return; }

    var verts = graphicsGeometry.points;
    var indices = graphicsGeometry.indices;
    var length = points.length / 2;

    var startIndex = verts.length / 2;
    var currentIndex = startIndex;

    verts.push(points[0], points[1]);

    for (i = 1; i < length; i++)
    {
        verts.push(points[i * 2], points[(i * 2) + 1]);
        indices.push(currentIndex, currentIndex + 1);

        currentIndex++;
    }

    if (closedShape)
    {
        indices.push(currentIndex, startIndex);
    }
}

/**
 * Builds a complex polygon to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.Graphics} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 */
function buildComplexPoly(graphicsData, webGLData)
{
    // TODO - no need to copy this as it gets turned into a Float32Array anyways..
    var points = graphicsData.points.slice();

    if (points.length < 6)
    {
        return;
    }

    // get first and last point.. figure out the middle!
    var indices = webGLData.indices;

    webGLData.points = points;
    webGLData.alpha = graphicsData.fillAlpha;
    webGLData.color = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["hex2rgb"])(graphicsData.fillColor);

    // calculate the bounds..
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    var x = 0;
    var y = 0;

    // get size..
    for (var i = 0; i < points.length; i += 2)
    {
        x = points[i];
        y = points[i + 1];

        minX = x < minX ? x : minX;
        maxX = x > maxX ? x : maxX;

        minY = y < minY ? y : minY;
        maxY = y > maxY ? y : maxY;
    }

    // add a quad to the end cos there is no point making another buffer!
    points.push(minX, minY,
        maxX, minY,
        maxX, maxY,
        minX, maxY);

    // push a quad onto the end..

    // TODO - this ain't needed!
    var length = points.length / 2;

    for (var i$1 = 0; i$1 < length; i$1++)
    {
        indices.push(i$1);
    }
}

/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @param {number} fromX - Starting point x
 * @param {number} fromY - Starting point y
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} cpX2 - Second Control point x
 * @param {number} cpY2 - Second Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number} n - Number of segments approximating the bezier curve
 * @param {number[]} [path=[]] - Path array to push points into
 * @return {number[]} Array of points of the curve
 */
function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, n, path)
{
    if ( path === void 0 ) path = [];

    var dt = 0;
    var dt2 = 0;
    var dt3 = 0;
    var t2 = 0;
    var t3 = 0;

    path.push(fromX, fromY);

    for (var i = 1, j = 0; i <= n; ++i)
    {
        j = i / n;

        dt = (1 - j);
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        path.push(
            (dt3 * fromX) + (3 * dt2 * j * cpX) + (3 * dt * t2 * cpX2) + (t3 * toX),
            (dt3 * fromY) + (3 * dt2 * j * cpY) + (3 * dt * t2 * cpY2) + (t3 * toY)
        );
    }

    return path;
}

/**
 * Draw a star shape with an arbitrary number of points.
 *
 * @class
 * @extends PIXI.Polygon
 * @memberof PIXI
 * @param {number} x - Center X position of the star
 * @param {number} y - Center Y position of the star
 * @param {number} points - The number of points of the star, must be > 1
 * @param {number} radius - The outer radius of the star
 * @param {number} [innerRadius] - The inner radius between points, default half `radius`
 * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
 * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
 */
var Star = /*@__PURE__*/(function (Polygon) {
    function Star(x, y, points, radius, innerRadius, rotation)
    {
        innerRadius = innerRadius || radius / 2;

        var startAngle = (-1 * Math.PI / 2) + rotation;
        var len = points * 2;
        var delta = _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* PI_2 */ "f"] / len;
        var polygon = [];

        for (var i = 0; i < len; i++)
        {
            var r = i % 2 ? innerRadius : radius;
            var angle = (i * delta) + startAngle;

            polygon.push(
                x + (r * Math.cos(angle)),
                y + (r * Math.sin(angle))
            );
        }

        Polygon.call(this, polygon);
    }

    if ( Polygon ) Star.__proto__ = Polygon;
    Star.prototype = Object.create( Polygon && Polygon.prototype );
    Star.prototype.constructor = Star;

    return Star;
}(_pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Polygon */ "h"]));

/**
 * Utilities for arc curves
 * @class
 * @private
 */
var ArcUtils = function ArcUtils () {};

ArcUtils.curveTo = function curveTo (x1, y1, x2, y2, radius, points)
{
    var fromX = points[points.length - 2];
    var fromY = points[points.length - 1];

    var a1 = fromY - y1;
    var b1 = fromX - x1;
    var a2 = y2 - y1;
    var b2 = x2 - x1;
    var mm = Math.abs((a1 * b2) - (b1 * a2));

    if (mm < 1.0e-8 || radius === 0)
    {
        if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1)
        {
            points.push(x1, y1);
        }

        return null;
    }

    var dd = (a1 * a1) + (b1 * b1);
    var cc = (a2 * a2) + (b2 * b2);
    var tt = (a1 * a2) + (b1 * b2);
    var k1 = radius * Math.sqrt(dd) / mm;
    var k2 = radius * Math.sqrt(cc) / mm;
    var j1 = k1 * tt / dd;
    var j2 = k2 * tt / cc;
    var cx = (k1 * b2) + (k2 * b1);
    var cy = (k1 * a2) + (k2 * a1);
    var px = b1 * (k2 + j1);
    var py = a1 * (k2 + j1);
    var qx = b2 * (k1 + j2);
    var qy = a2 * (k1 + j2);
    var startAngle = Math.atan2(py - cy, px - cx);
    var endAngle = Math.atan2(qy - cy, qx - cx);

    return {
        cx: (cx + x1),
        cy: (cy + y1),
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle,
        anticlockwise: (b1 * a2 > b2 * a1),
    };
};

/**
 * The arc method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @private
 * @param {number} startX - Start x location of arc
 * @param {number} startY - Start y location of arc
 * @param {number} cx - The x-coordinate of the center of the circle
 * @param {number} cy - The y-coordinate of the center of the circle
 * @param {number} radius - The radius of the circle
 * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
 *  of the arc's circle)
 * @param {number} endAngle - The ending angle, in radians
 * @param {boolean} anticlockwise - Specifies whether the drawing should be
 *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
 *  indicates counter-clockwise.
 * @param {number} n - Number of segments
 * @param {number[]} points - Collection of points to add to
 */
ArcUtils.arc = function arc (startX, startY, cx, cy, radius, startAngle, endAngle, anticlockwise, points)
{
    var sweep = endAngle - startAngle;
    var n = GRAPHICS_CURVES._segmentsCount(
        Math.abs(sweep) * radius,
        Math.ceil(Math.abs(sweep) / _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* PI_2 */ "f"]) * 40
    );

    var theta = (sweep) / (n * 2);
    var theta2 = theta * 2;
    var cTheta = Math.cos(theta);
    var sTheta = Math.sin(theta);
    var segMinus = n - 1;
    var remainder = (segMinus % 1) / segMinus;

    for (var i = 0; i <= segMinus; ++i)
    {
        var real = i + (remainder * i);
        var angle = ((theta) + startAngle + (theta2 * real));
        var c = Math.cos(angle);
        var s = -Math.sin(angle);

        points.push(
            (((cTheta * c) + (sTheta * s)) * radius) + cx,
            (((cTheta * -s) + (sTheta * c)) * radius) + cy
        );
    }
};

/**
 * Utilities for bezier curves
 * @class
 * @private
 */
var BezierUtils = function BezierUtils () {};

BezierUtils.curveLength = function curveLength (fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY)
{
    var n = 10;
    var result = 0.0;
    var t = 0.0;
    var t2 = 0.0;
    var t3 = 0.0;
    var nt = 0.0;
    var nt2 = 0.0;
    var nt3 = 0.0;
    var x = 0.0;
    var y = 0.0;
    var dx = 0.0;
    var dy = 0.0;
    var prevX = fromX;
    var prevY = fromY;

    for (var i = 1; i <= n; ++i)
    {
        t = i / n;
        t2 = t * t;
        t3 = t2 * t;
        nt = (1.0 - t);
        nt2 = nt * nt;
        nt3 = nt2 * nt;

        x = (nt3 * fromX) + (3.0 * nt2 * t * cpX) + (3.0 * nt * t2 * cpX2) + (t3 * toX);
        y = (nt3 * fromY) + (3.0 * nt2 * t * cpY) + (3 * nt * t2 * cpY2) + (t3 * toY);
        dx = prevX - x;
        dy = prevY - y;
        prevX = x;
        prevY = y;

        result += Math.sqrt((dx * dx) + (dy * dy));
    }

    return result;
};

/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} cpX2 - Second Control point x
 * @param {number} cpY2 - Second Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} points - Path array to push points into
 */
BezierUtils.curveTo = function curveTo (cpX, cpY, cpX2, cpY2, toX, toY, points)
{
    var fromX = points[points.length - 2];
    var fromY = points[points.length - 1];

    points.length -= 2;

    var n = GRAPHICS_CURVES._segmentsCount(
        BezierUtils.curveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY)
    );

    var dt = 0;
    var dt2 = 0;
    var dt3 = 0;
    var t2 = 0;
    var t3 = 0;

    points.push(fromX, fromY);

    for (var i = 1, j = 0; i <= n; ++i)
    {
        j = i / n;

        dt = (1 - j);
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        points.push(
            (dt3 * fromX) + (3 * dt2 * j * cpX) + (3 * dt * t2 * cpX2) + (t3 * toX),
            (dt3 * fromY) + (3 * dt2 * j * cpY) + (3 * dt * t2 * cpY2) + (t3 * toY)
        );
    }
};

/**
 * Utilities for quadratic curves
 * @class
 * @private
 */
var QuadraticUtils = function QuadraticUtils () {};

QuadraticUtils.curveLength = function curveLength (fromX, fromY, cpX, cpY, toX, toY)
{
    var ax = fromX - (2.0 * cpX) + toX;
    var ay = fromY - (2.0 * cpY) + toY;
    var bx = (2.0 * cpX) - (2.0 * fromX);
    var by = (2.0 * cpY) - (2.0 * fromY);
    var a = 4.0 * ((ax * ax) + (ay * ay));
    var b = 4.0 * ((ax * bx) + (ay * by));
    var c = (bx * bx) + (by * by);

    var s = 2.0 * Math.sqrt(a + b + c);
    var a2 = Math.sqrt(a);
    var a32 = 2.0 * a * a2;
    var c2 = 2.0 * Math.sqrt(c);
    var ba = b / a2;

    return (
        (a32 * s)
            + (a2 * b * (s - c2))
            + (
                ((4.0 * c * a) - (b * b))
               * Math.log(((2.0 * a2) + ba + s) / (ba + c2))
            )
    ) / (4.0 * a32);
};

/**
 * Calculate the points for a quadratic bezier curve and then draws it.
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @private
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} points - Points to add segments to.
 */
QuadraticUtils.curveTo = function curveTo (cpX, cpY, toX, toY, points)
{
    var fromX = points[points.length - 2];
    var fromY = points[points.length - 1];

    var n = GRAPHICS_CURVES._segmentsCount(
        QuadraticUtils.curveLength(fromX, fromY, cpX, cpY, toX, toY)
    );

    var xa = 0;
    var ya = 0;

    for (var i = 1; i <= n; ++i)
    {
        var j = i / n;

        xa = fromX + ((cpX - fromX) * j);
        ya = fromY + ((cpY - fromY) * j);

        points.push(xa + (((cpX + ((toX - cpX) * j)) - xa) * j),
            ya + (((cpY + ((toY - cpY) * j)) - ya) * j));
    }
};

/**
 * A structure to hold interim batch objects.
 *
 */
var BatchPart = function BatchPart()
{
    this.reset();
};

/**
 * Begin batch part
 *
 * @param {PIXI.FillStyle | PIXI.LineStyle} style
 * @param {number} startIndex
 * @param {number} attribStart
 */
BatchPart.prototype.begin = function begin (style, startIndex, attribStart)
{
    this.reset();
    this.style = style;
    this.start = startIndex;
    this.attribStart = attribStart;
};

/**
 * End batch part
 *
 * @param {number} endIndex
 * @param {number} endAttrib
 */
BatchPart.prototype.end = function end (endIndex, endAttrib)
{
    this.attribSize = endAttrib - this.attribStart;
    this.size = endIndex - this.start;
};

BatchPart.prototype.reset = function reset ()
{
    this.style = null;
    this.size = 0;
    this.start = 0;
    this.attribStart = 0;
    this.attribSize = 0;
};

/**
 * Generalized convenience utilities for Graphics.
 *
 * @namespace PIXI.graphicsUtils
 */

/**
 * Map of fill commands for each shape type.
 *
 * @member {Object}
 */
var FILL_COMMANDS = {};
FILL_COMMANDS[_pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].POLY] = buildPoly;
FILL_COMMANDS[_pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].CIRC] = buildCircle;
FILL_COMMANDS[_pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].ELIP] = buildCircle;
FILL_COMMANDS[_pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].RECT] = buildRectangle;
FILL_COMMANDS[_pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].RREC] = buildRoundedRectangle;

/**
 * Batch pool, stores unused batches for preventing allocations.
 *
 * @type {Array<BatchPart>}
 */
var BATCH_POOL = [];

/**
 * Draw call pool, stores unused draw calls for preventing allocations.
 *
 * @type {Array<PIXI.BatchDrawCall>}
 */
var DRAW_CALL_POOL = [];

var index = ({
    buildPoly: buildPoly,
    buildCircle: buildCircle,
    buildRectangle: buildRectangle,
    buildRoundedRectangle: buildRoundedRectangle,
    FILL_COMMANDS: FILL_COMMANDS,
    BATCH_POOL: BATCH_POOL,
    DRAW_CALL_POOL: DRAW_CALL_POOL,
    buildLine: buildLine,
    buildComplexPoly: buildComplexPoly,
    bezierCurveTo: bezierCurveTo,
    Star: Star,
    ArcUtils: ArcUtils,
    BezierUtils: BezierUtils,
    QuadraticUtils: QuadraticUtils,
    BatchPart: BatchPart
});

/**
 * A class to contain data useful for Graphics objects
 *
 * @class
 * @memberof PIXI
 */
var GraphicsData = function GraphicsData(shape, fillStyle, lineStyle, matrix)
{
    if ( fillStyle === void 0 ) fillStyle = null;
    if ( lineStyle === void 0 ) lineStyle = null;
    if ( matrix === void 0 ) matrix = null;

    /**
     * The shape object to draw.
     * @member {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle}
     */
    this.shape = shape;

    /**
     * The style of the line.
     * @member {PIXI.LineStyle}
     */
    this.lineStyle = lineStyle;

    /**
     * The style of the fill.
     * @member {PIXI.FillStyle}
     */
    this.fillStyle = fillStyle;

    /**
     * The transform matrix.
     * @member {PIXI.Matrix}
     */
    this.matrix = matrix;

    /**
     * The type of the shape, see the Const.Shapes file for all the existing types,
     * @member {number}
     */
    this.type = shape.type;

    /**
     * The collection of points.
     * @member {number[]}
     */
    this.points = [];

    /**
     * The collection of holes.
     * @member {PIXI.GraphicsData[]}
     */
    this.holes = [];
};

/**
 * Creates a new GraphicsData object with the same values as this one.
 *
 * @return {PIXI.GraphicsData} Cloned GraphicsData object
 */
GraphicsData.prototype.clone = function clone ()
{
    return new GraphicsData(
        this.shape,
        this.fillStyle,
        this.lineStyle,
        this.matrix
    );
};

/**
 * Destroys the Graphics data.
 */
GraphicsData.prototype.destroy = function destroy ()
{
    this.shape = null;
    this.holes.length = 0;
    this.holes = null;
    this.points.length = 0;
    this.points = null;
    this.lineStyle = null;
    this.fillStyle = null;
};

var tmpPoint = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Point */ "g"]();
var tmpBounds = new _pixi_display__WEBPACK_IMPORTED_MODULE_4__[/* Bounds */ "a"]();

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * GraphicsGeometry is designed to not be continually updating the geometry since it's expensive
 * to re-tesselate using **earcut**. Consider using {@link PIXI.Mesh} for this use-case, it's much faster.
 *
 * @class
 * @extends PIXI.BatchGeometry
 * @memberof PIXI
 */
var GraphicsGeometry = /*@__PURE__*/(function (BatchGeometry) {
    function GraphicsGeometry()
    {
        BatchGeometry.call(this);

        /**
         * An array of points to draw, 2 numbers per point
         *
         * @member {number[]}
         * @protected
         */
        this.points = [];

        /**
         * The collection of colors
         *
         * @member {number[]}
         * @protected
         */
        this.colors = [];

        /**
         * The UVs collection
         *
         * @member {number[]}
         * @protected
         */
        this.uvs = [];

        /**
         * The indices of the vertices
         *
         * @member {number[]}
         * @protected
         */
        this.indices = [];

        /**
         * Reference to the texture IDs.
         *
         * @member {number[]}
         * @protected
         */
        this.textureIds = [];

        /**
         * The collection of drawn shapes.
         *
         * @member {PIXI.GraphicsData[]}
         * @protected
         */
        this.graphicsData = [];

        /**
         * Used to detect if the graphics object has changed.
         *
         * @member {number}
         * @protected
         */
        this.dirty = 0;

        /**
         * Batches need to regenerated if the geometry is updated.
         *
         * @member {number}
         * @protected
         */
        this.batchDirty = -1;

        /**
         * Used to check if the cache is dirty.
         *
         * @member {number}
         * @protected
         */
        this.cacheDirty = -1;

        /**
         * Used to detect if we cleared the graphicsData.
         *
         * @member {number}
         * @default 0
         * @protected
         */
        this.clearDirty = 0;

        /**
         * List of current draw calls drived from the batches.
         *
         * @member {object[]}
         * @protected
         */
        this.drawCalls = [];

        /**
         * Intermediate abstract format sent to batch system.
         * Can be converted to drawCalls or to batchable objects.
         *
         * @member {BatchPart[]}
         * @protected
         */
        this.batches = [];

        /**
         * Index of the last batched shape in the stack of calls.
         *
         * @member {number}
         * @protected
         */
        this.shapeIndex = 0;

        /**
         * Cached bounds.
         *
         * @member {PIXI.Bounds}
         * @protected
         */
        this._bounds = new _pixi_display__WEBPACK_IMPORTED_MODULE_4__[/* Bounds */ "a"]();

        /**
         * The bounds dirty flag.
         *
         * @member {number}
         * @protected
         */
        this.boundsDirty = -1;

        /**
         * Padding to add to the bounds.
         *
         * @member {number}
         * @default 0
         */
        this.boundsPadding = 0;

        this.batchable = false;

        this.indicesUint16 = null;

        this.uvsFloat32 = null;

        /**
         * Minimal distance between points that are considered different.
         * Affects line tesselation.
         *
         * @member {number}
         */
        this.closePointEps = 1e-4;
    }

    if ( BatchGeometry ) GraphicsGeometry.__proto__ = BatchGeometry;
    GraphicsGeometry.prototype = Object.create( BatchGeometry && BatchGeometry.prototype );
    GraphicsGeometry.prototype.constructor = GraphicsGeometry;

    var prototypeAccessors = { bounds: { configurable: true } };

    /**
     * Get the current bounds of the graphic geometry.
     *
     * @member {PIXI.Bounds}
     * @readonly
     */
    prototypeAccessors.bounds.get = function ()
    {
        if (this.boundsDirty !== this.dirty)
        {
            this.boundsDirty = this.dirty;
            this.calculateBounds();
        }

        return this._bounds;
    };

    /**
     * Call if you changed graphicsData manually.
     * Empties all batch buffers.
     */
    GraphicsGeometry.prototype.invalidate = function invalidate ()
    {
        this.boundsDirty = -1;
        this.dirty++;
        this.batchDirty++;
        this.shapeIndex = 0;

        this.points.length = 0;
        this.colors.length = 0;
        this.uvs.length = 0;
        this.indices.length = 0;
        this.textureIds.length = 0;

        for (var i = 0; i < this.drawCalls.length; i++)
        {
            this.drawCalls[i].textures.length = 0;
            DRAW_CALL_POOL.push(this.drawCalls[i]);
        }

        this.drawCalls.length = 0;

        for (var i$1 = 0; i$1 < this.batches.length; i$1++)
        {
            var batch =  this.batches[i$1];

            batch.start = 0;
            batch.attribStart = 0;
            batch.style = null;
            BATCH_POOL.push(batch);
        }

        this.batches.length = 0;
    };

    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     *
     * @return {PIXI.GraphicsGeometry} This GraphicsGeometry object. Good for chaining method calls
     */
    GraphicsGeometry.prototype.clear = function clear ()
    {
        if (this.graphicsData.length > 0)
        {
            this.invalidate();
            this.clearDirty++;
            this.graphicsData.length = 0;
        }

        return this;
    };

    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param {PIXI.FillStyle} fillStyle - Defines style of the fill.
     * @param {PIXI.LineStyle} lineStyle - Defines style of the lines.
     * @param {PIXI.Matrix} matrix - Transform applied to the points of the shape.
     * @return {PIXI.GraphicsGeometry} Returns geometry for chaining.
     */
    GraphicsGeometry.prototype.drawShape = function drawShape (shape, fillStyle, lineStyle, matrix)
    {
        var data = new GraphicsData(shape, fillStyle, lineStyle, matrix);

        this.graphicsData.push(data);
        this.dirty++;

        return this;
    };

    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param {PIXI.Matrix} matrix - Transform applied to the points of the shape.
     * @return {PIXI.GraphicsGeometry} Returns geometry for chaining.
     */
    GraphicsGeometry.prototype.drawHole = function drawHole (shape, matrix)
    {
        if (!this.graphicsData.length)
        {
            return null;
        }

        var data = new GraphicsData(shape, null, null, matrix);

        var lastShape = this.graphicsData[this.graphicsData.length - 1];

        data.lineStyle = lastShape.lineStyle;

        lastShape.holes.push(data);

        this.dirty++;

        return this;
    };

    /**
     * Destroys the Graphics object.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
     *  options have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have
     *  their destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */
    GraphicsGeometry.prototype.destroy = function destroy (options)
    {
        BatchGeometry.prototype.destroy.call(this, options);

        // destroy each of the GraphicsData objects
        for (var i = 0; i < this.graphicsData.length; ++i)
        {
            this.graphicsData[i].destroy();
        }

        this.points.length = 0;
        this.points = null;
        this.colors.length = 0;
        this.colors = null;
        this.uvs.length = 0;
        this.uvs = null;
        this.indices.length = 0;
        this.indices = null;
        this.indexBuffer.destroy();
        this.indexBuffer = null;
        this.graphicsData.length = 0;
        this.graphicsData = null;
        this.drawCalls.length = 0;
        this.drawCalls = null;
        this.batches.length = 0;
        this.batches = null;
        this._bounds = null;
    };

    /**
     * Check to see if a point is contained within this geometry.
     *
     * @param {PIXI.Point} point - Point to check if it's contained.
     * @return {Boolean} `true` if the point is contained within geometry.
     */
    GraphicsGeometry.prototype.containsPoint = function containsPoint (point)
    {
        var graphicsData = this.graphicsData;

        for (var i = 0; i < graphicsData.length; ++i)
        {
            var data = graphicsData[i];

            if (!data.fillStyle.visible)
            {
                continue;
            }

            // only deal with fills..
            if (data.shape)
            {
                if (data.matrix)
                {
                    data.matrix.applyInverse(point, tmpPoint);
                }
                else
                {
                    tmpPoint.copyFrom(point);
                }

                if (data.shape.contains(tmpPoint.x, tmpPoint.y))
                {
                    var hitHole = false;

                    if (data.holes)
                    {
                        for (var i$1 = 0; i$1 < data.holes.length; i$1++)
                        {
                            var hole = data.holes[i$1];

                            if (hole.shape.contains(tmpPoint.x, tmpPoint.y))
                            {
                                hitHole = true;
                                break;
                            }
                        }
                    }

                    if (!hitHole)
                    {
                        return true;
                    }
                }
            }
        }

        return false;
    };

    /**
     * Generates intermediate batch data. Either gets converted to drawCalls
     * or used to convert to batch objects directly by the Graphics object.
     */
    GraphicsGeometry.prototype.updateBatches = function updateBatches ()
    {
        if (!this.graphicsData.length)
        {
            this.batchable = true;

            return;
        }

        if (!this.validateBatching())
        {
            return;
        }

        this.cacheDirty = this.dirty;

        var uvs = this.uvs;
        var graphicsData = this.graphicsData;

        var batchPart = null;

        var currentStyle = null;

        if (this.batches.length > 0)
        {
            batchPart = this.batches[this.batches.length - 1];
            currentStyle = batchPart.style;
        }

        for (var i = this.shapeIndex; i < graphicsData.length; i++)
        {
            this.shapeIndex++;

            var data = graphicsData[i];
            var fillStyle = data.fillStyle;
            var lineStyle = data.lineStyle;
            var command = FILL_COMMANDS[data.type];

            // build out the shapes points..
            command.build(data);

            if (data.matrix)
            {
                this.transformPoints(data.points, data.matrix);
            }

            for (var j = 0; j < 2; j++)
            {
                var style = (j === 0) ? fillStyle : lineStyle;

                if (!style.visible) { continue; }

                var nextTexture = style.texture.baseTexture;
                var index$1 = this.indices.length;
                var attribIndex = this.points.length / 2;

                nextTexture.wrapMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* WRAP_MODES */ "n"].REPEAT;

                // close batch if style is different
                if (batchPart && !this._compareStyles(currentStyle, style))
                {
                    batchPart.end(index$1, attribIndex);

                    if (batchPart.size > 0)
                    {
                        batchPart = null;
                    }
                }
                // spawn new batch if its first batch or previous was closed
                if (!batchPart)
                {
                    batchPart = BATCH_POOL.pop() || new BatchPart();
                    batchPart.begin(style, index$1, attribIndex);
                    this.batches.push(batchPart);

                    currentStyle = style;
                }

                var start = this.points.length / 2;

                if (j === 0)
                {
                    this.processFill(data);
                }
                else
                {
                    this.processLine(data);
                }

                var size = (this.points.length / 2) - start;

                this.addUvs(this.points, uvs, style.texture, start, size, style.matrix);
            }
        }

        if (!batchPart)
        {
            // there are no visible styles in GraphicsData
            // its possible that someone wants Graphics just for the bounds
            this.batchable = true;

            return;
        }

        var index = this.indices.length;
        var attrib = this.points.length / 2;

        batchPart.end(index, attrib);

        this.indicesUint16 = new Uint16Array(this.indices);

        // TODO make this a const..
        this.batchable = this.isBatchable();

        if (this.batchable)
        {
            this.packBatches();
        }
        else
        {
            this.buildDrawCalls();
        }
    };

    /**
     * Affinity check
     *
     * @param {PIXI.FillStyle | PIXI.LineStyle} styleA
     * @param {PIXI.FillStyle | PIXI.LineStyle} styleB
     */
    GraphicsGeometry.prototype._compareStyles = function _compareStyles (styleA, styleB)
    {
        if (!styleA || !styleB)
        {
            return false;
        }

        if (styleA.texture.baseTexture !== styleB.texture.baseTexture)
        {
            return false;
        }

        if (styleA.color + styleA.alpha !== styleB.color + styleB.alpha)
        {
            return false;
        }

        if (!!styleA.native !== !!styleB.native)
        {
            return false;
        }

        return true;
    };

    /**
     * Test geometry for batching process.
     *
     * @protected
     */
    GraphicsGeometry.prototype.validateBatching = function validateBatching ()
    {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length)
        {
            return false;
        }

        for (var i = 0, l = this.graphicsData.length; i < l; i++)
        {
            var data = this.graphicsData[i];
            var fill = data.fillStyle;
            var line = data.lineStyle;

            if (fill && !fill.texture.baseTexture.valid) { return false; }
            if (line && !line.texture.baseTexture.valid) { return false; }
        }

        return true;
    };

    /**
     * Offset the indices so that it works with the batcher.
     *
     * @protected
     */
    GraphicsGeometry.prototype.packBatches = function packBatches ()
    {
        this.batchDirty++;
        this.uvsFloat32 = new Float32Array(this.uvs);

        var batches = this.batches;

        for (var i = 0, l = batches.length; i < l; i++)
        {
            var batch = batches[i];

            for (var j = 0; j < batch.size; j++)
            {
                var index = batch.start + j;

                this.indicesUint16[index] = this.indicesUint16[index] - batch.attribStart;
            }
        }
    };

    /**
     * Checks to see if this graphics geometry can be batched.
     * Currently it needs to be small enough and not contain any native lines.
     *
     * @protected
     */
    GraphicsGeometry.prototype.isBatchable = function isBatchable ()
    {
        var batches = this.batches;

        for (var i = 0; i < batches.length; i++)
        {
            if (batches[i].style.native)
            {
                return false;
            }
        }

        return (this.points.length < GraphicsGeometry.BATCHABLE_SIZE * 2);
    };

    /**
     * Converts intermediate batches data to drawCalls.
     *
     * @protected
     */
    GraphicsGeometry.prototype.buildDrawCalls = function buildDrawCalls ()
    {
        var TICK = ++_pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BaseTexture */ "e"]._globalBatch;

        for (var i = 0; i < this.drawCalls.length; i++)
        {
            this.drawCalls[i].textures.length = 0;
            DRAW_CALL_POOL.push(this.drawCalls[i]);
        }

        this.drawCalls.length = 0;

        var colors = this.colors;
        var textureIds = this.textureIds;

        var currentGroup =  DRAW_CALL_POOL.pop();

        if (!currentGroup)
        {
            currentGroup = new _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BatchDrawCall */ "f"]();
            currentGroup.textures = new _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BatchTextureArray */ "k"]();
        }
        currentGroup.textures.count = 0;
        currentGroup.start = 0;
        currentGroup.size = 0;
        currentGroup.type = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* DRAW_MODES */ "c"].TRIANGLES;

        var textureCount = 0;
        var currentTexture = null;
        var textureId = 0;
        var native = false;
        var drawMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* DRAW_MODES */ "c"].TRIANGLES;

        var index = 0;

        this.drawCalls.push(currentGroup);

        // TODO - this can be simplified
        for (var i$1 = 0; i$1 < this.batches.length; i$1++)
        {
            var data = this.batches[i$1];

            // TODO add some full on MAX_TEXTURE CODE..
            var MAX_TEXTURES = 8;

            var style = data.style;

            var nextTexture = style.texture.baseTexture;

            if (native !== !!style.native)
            {
                native = !!style.native;
                drawMode = native ? _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* DRAW_MODES */ "c"].LINES : _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* DRAW_MODES */ "c"].TRIANGLES;

                // force the batch to break!
                currentTexture = null;
                textureCount = MAX_TEXTURES;
                TICK++;
            }

            if (currentTexture !== nextTexture)
            {
                currentTexture = nextTexture;

                if (nextTexture._batchEnabled !== TICK)
                {
                    if (textureCount === MAX_TEXTURES)
                    {
                        TICK++;

                        textureCount = 0;

                        if (currentGroup.size > 0)
                        {
                            currentGroup = DRAW_CALL_POOL.pop();
                            if (!currentGroup)
                            {
                                currentGroup = new _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BatchDrawCall */ "f"]();
                                currentGroup.textures = new _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BatchTextureArray */ "k"]();
                            }
                            this.drawCalls.push(currentGroup);
                        }

                        currentGroup.start = index;
                        currentGroup.size = 0;
                        currentGroup.textures.count = 0;
                        currentGroup.type = drawMode;
                    }

                    // TODO add this to the render part..
                    nextTexture.touched = 1;// touch;
                    nextTexture._batchEnabled = TICK;
                    nextTexture._batchLocation = textureCount;
                    nextTexture.wrapMode = 10497;

                    currentGroup.textures.elements[currentGroup.textures.count++] = nextTexture;
                    textureCount++;
                }
            }

            currentGroup.size += data.size;
            index += data.size;

            textureId = nextTexture._batchLocation;

            this.addColors(colors, style.color, style.alpha, data.attribSize);
            this.addTextureIds(textureIds, textureId, data.attribSize);
        }

        _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BaseTexture */ "e"]._globalBatch = TICK;

        // upload..
        // merge for now!
        this.packAttributes();
    };

    /**
     * Packs attributes to single buffer.
     *
     * @protected
     */
    GraphicsGeometry.prototype.packAttributes = function packAttributes ()
    {
        var verts = this.points;
        var uvs = this.uvs;
        var colors = this.colors;
        var textureIds = this.textureIds;

        // verts are 2 positions.. so we * by 3 as there are 6 properties.. then 4 cos its bytes
        var glPoints = new ArrayBuffer(verts.length * 3 * 4);
        var f32 = new Float32Array(glPoints);
        var u32 = new Uint32Array(glPoints);

        var p = 0;

        for (var i = 0; i < verts.length / 2; i++)
        {
            f32[p++] = verts[i * 2];
            f32[p++] = verts[(i * 2) + 1];

            f32[p++] = uvs[i * 2];
            f32[p++] = uvs[(i * 2) + 1];

            u32[p++] = colors[i];

            f32[p++] = textureIds[i];
        }

        this._buffer.update(glPoints);
        this._indexBuffer.update(this.indicesUint16);
    };

    /**
     * Process fill part of Graphics.
     *
     * @param {PIXI.GraphicsData} data
     * @protected
     */
    GraphicsGeometry.prototype.processFill = function processFill (data)
    {
        if (data.holes.length)
        {
            this.processHoles(data.holes);

            buildPoly.triangulate(data, this);
        }
        else
        {
            var command = FILL_COMMANDS[data.type];

            command.triangulate(data, this);
        }
    };

    /**
     * Process line part of Graphics.
     *
     * @param {PIXI.GraphicsData} data
     * @protected
     */
    GraphicsGeometry.prototype.processLine = function processLine (data)
    {
        buildLine(data, this);

        for (var i = 0; i < data.holes.length; i++)
        {
            buildLine(data.holes[i], this);
        }
    };

    /**
     * Process the holes data.
     *
     * @param {PIXI.GraphicsData[]} holes - Holes to render
     * @protected
     */
    GraphicsGeometry.prototype.processHoles = function processHoles (holes)
    {
        for (var i = 0; i < holes.length; i++)
        {
            var hole = holes[i];
            var command = FILL_COMMANDS[hole.type];

            command.build(hole);

            if (hole.matrix)
            {
                this.transformPoints(hole.points, hole.matrix);
            }
        }
    };

    /**
     * Update the local bounds of the object. Expensive to use performance-wise.
     *
     * @protected
     */
    GraphicsGeometry.prototype.calculateBounds = function calculateBounds ()
    {
        var bounds = this._bounds;
        var sequenceBounds = tmpBounds;
        var curMatrix = _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Matrix */ "d"].IDENTITY;

        this._bounds.clear();
        sequenceBounds.clear();

        for (var i = 0; i < this.graphicsData.length; i++)
        {
            var data = this.graphicsData[i];
            var shape = data.shape;
            var type = data.type;
            var lineStyle = data.lineStyle;
            var nextMatrix = data.matrix || _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Matrix */ "d"].IDENTITY;
            var lineWidth = 0.0;

            if (lineStyle && lineStyle.visible)
            {
                var alignment = lineStyle.alignment;

                lineWidth = lineStyle.width;

                if (type === _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].POLY)
                {
                    lineWidth = lineWidth * (0.5 + Math.abs(0.5 - alignment));
                }
                else
                {
                    lineWidth = lineWidth * Math.max(0, alignment);
                }
            }

            if (curMatrix !== nextMatrix)
            {
                if (!sequenceBounds.isEmpty())
                {
                    bounds.addBoundsMatrix(sequenceBounds, curMatrix);
                    sequenceBounds.clear();
                }
                curMatrix = nextMatrix;
            }

            if (type === _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].RECT || type === _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].RREC)
            {
                sequenceBounds.addFramePad(shape.x, shape.y, shape.x + shape.width, shape.y + shape.height,
                    lineWidth, lineWidth);
            }
            else if (type === _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].CIRC)
            {
                sequenceBounds.addFramePad(shape.x, shape.y, shape.x, shape.y,
                    shape.radius + lineWidth, shape.radius + lineWidth);
            }
            else if (type === _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].ELIP)
            {
                sequenceBounds.addFramePad(shape.x, shape.y, shape.x, shape.y,
                    shape.width + lineWidth, shape.height + lineWidth);
            }
            else
            {
                // adding directly to the bounds
                bounds.addVerticesMatrix(curMatrix, shape.points, 0, shape.points.length, lineWidth, lineWidth);
            }
        }

        if (!sequenceBounds.isEmpty())
        {
            bounds.addBoundsMatrix(sequenceBounds, curMatrix);
        }

        bounds.pad(this.boundsPadding, this.boundsPadding);
    };

    /**
     * Transform points using matrix.
     *
     * @protected
     * @param {number[]} points - Points to transform
     * @param {PIXI.Matrix} matrix - Transform matrix
     */
    GraphicsGeometry.prototype.transformPoints = function transformPoints (points, matrix)
    {
        for (var i = 0; i < points.length / 2; i++)
        {
            var x = points[(i * 2)];
            var y = points[(i * 2) + 1];

            points[(i * 2)] = (matrix.a * x) + (matrix.c * y) + matrix.tx;
            points[(i * 2) + 1] = (matrix.b * x) + (matrix.d * y) + matrix.ty;
        }
    };

    /**
     * Add colors.
     *
     * @protected
     * @param {number[]} colors - List of colors to add to
     * @param {number} color - Color to add
     * @param {number} alpha - Alpha to use
     * @param {number} size - Number of colors to add
     */
    GraphicsGeometry.prototype.addColors = function addColors (colors, color, alpha, size)
    {
        // TODO use the premultiply bits Ivan added
        var rgb = (color >> 16) + (color & 0xff00) + ((color & 0xff) << 16);

        var rgba =  Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["premultiplyTint"])(rgb, alpha);

        while (size-- > 0)
        {
            colors.push(rgba);
        }
    };

    /**
     * Add texture id that the shader/fragment wants to use.
     *
     * @protected
     * @param {number[]} textureIds
     * @param {number} id
     * @param {number} size
     */
    GraphicsGeometry.prototype.addTextureIds = function addTextureIds (textureIds, id, size)
    {
        while (size-- > 0)
        {
            textureIds.push(id);
        }
    };

    /**
     * Generates the UVs for a shape.
     *
     * @protected
     * @param {number[]} verts - Vertices
     * @param {number[]} uvs - UVs
     * @param {PIXI.Texture} texture - Reference to Texture
     * @param {number} start - Index buffer start index.
     * @param {number} size - The size/length for index buffer.
     * @param {PIXI.Matrix} [matrix] - Optional transform for all points.
     */
    GraphicsGeometry.prototype.addUvs = function addUvs (verts, uvs, texture, start, size, matrix)
    {
        var index = 0;
        var uvsStart = uvs.length;
        var frame = texture.frame;

        while (index < size)
        {
            var x = verts[(start + index) * 2];
            var y = verts[((start + index) * 2) + 1];

            if (matrix)
            {
                var nx = (matrix.a * x) + (matrix.c * y) + matrix.tx;

                y = (matrix.b * x) + (matrix.d * y) + matrix.ty;
                x = nx;
            }

            index++;

            uvs.push(x / frame.width, y / frame.height);
        }

        var baseTexture = texture.baseTexture;

        if (frame.width < baseTexture.width
            || frame.height < baseTexture.height)
        {
            this.adjustUvs(uvs, texture, uvsStart, size);
        }
    };

    /**
     * Modify uvs array according to position of texture region
     * Does not work with rotated or trimmed textures
     *
     * @param {number[]} uvs array
     * @param {PIXI.Texture} texture region
     * @param {number} start starting index for uvs
     * @param {number} size how many points to adjust
     */
    GraphicsGeometry.prototype.adjustUvs = function adjustUvs (uvs, texture, start, size)
    {
        var baseTexture = texture.baseTexture;
        var eps = 1e-6;
        var finish = start + (size * 2);
        var frame = texture.frame;
        var scaleX = frame.width / baseTexture.width;
        var scaleY = frame.height / baseTexture.height;
        var offsetX = frame.x / frame.width;
        var offsetY = frame.y / frame.height;
        var minX = Math.floor(uvs[start] + eps);
        var minY = Math.floor(uvs[start + 1] + eps);

        for (var i = start + 2; i < finish; i += 2)
        {
            minX = Math.min(minX, Math.floor(uvs[i] + eps));
            minY = Math.min(minY, Math.floor(uvs[i + 1] + eps));
        }
        offsetX -= minX;
        offsetY -= minY;
        for (var i$1 = start; i$1 < finish; i$1 += 2)
        {
            uvs[i$1] = (uvs[i$1] + offsetX) * scaleX;
            uvs[i$1 + 1] = (uvs[i$1 + 1] + offsetY) * scaleY;
        }
    };

    Object.defineProperties( GraphicsGeometry.prototype, prototypeAccessors );

    return GraphicsGeometry;
}(_pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* BatchGeometry */ "g"]));

/**
 * The maximum number of points to consider an object "batchable",
 * able to be batched by the renderer's batch system.
 *
 * @memberof PIXI.GraphicsGeometry
 * @static
 * @member {number} BATCHABLE_SIZE
 * @default 100
 */
GraphicsGeometry.BATCHABLE_SIZE = 100;

/**
 * Represents the line style for Graphics.
 * @memberof PIXI
 * @class
 * @extends PIXI.FillStyle
 */
var LineStyle = /*@__PURE__*/(function (FillStyle) {
    function LineStyle () {
        FillStyle.apply(this, arguments);
    }

    if ( FillStyle ) LineStyle.__proto__ = FillStyle;
    LineStyle.prototype = Object.create( FillStyle && FillStyle.prototype );
    LineStyle.prototype.constructor = LineStyle;

    LineStyle.prototype.clone = function clone ()
    {
        var obj = new LineStyle();

        obj.color = this.color;
        obj.alpha = this.alpha;
        obj.texture = this.texture;
        obj.matrix = this.matrix;
        obj.visible = this.visible;
        obj.width = this.width;
        obj.alignment = this.alignment;
        obj.native = this.native;

        return obj;
    };
    /**
     * Reset the line style to default.
     */
    LineStyle.prototype.reset = function reset ()
    {
        FillStyle.prototype.reset.call(this);

        // Override default line style color
        this.color = 0x0;

        /**
         * The width (thickness) of any lines drawn.
         *
         * @member {number}
         * @default 0
         */
        this.width = 0;

        /**
         * The alignment of any lines drawn (0.5 = middle, 1 = outter, 0 = inner).
         *
         * @member {number}
         * @default 0
         */
        this.alignment = 0.5;

        /**
         * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         *
         * @member {boolean}
         * @default false
         */
        this.native = false;
    };

    return LineStyle;
}(FillStyle));

var temp = new Float32Array(3);

// a default shaders map used by graphics..
var DEFAULT_SHADERS = {};

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * Note that because Graphics can share a GraphicsGeometry with other instances,
 * it is necessary to call `destroy()` to properly dereference the underlying
 * GraphicsGeometry and avoid a memory leak. Alternatively, keep using the same
 * Graphics instance and call `clear()` between redraws.
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */
var Graphics = /*@__PURE__*/(function (Container) {
    function Graphics(geometry)
    {
        if ( geometry === void 0 ) geometry = null;

        Container.call(this);
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
         * @member {PIXI.GraphicsGeometry}
         * @readonly
         */
        this.geometry = geometry || new GraphicsGeometry();

        this.geometry.refCount++;

        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Graphics objects.
         * @member {PIXI.Shader}
         */
        this.shader = null;

        /**
         * Represents the WebGL state the Graphics required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {PIXI.State}
         */
        this.state = _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* State */ "C"].for2d();

        /**
         * Current fill style
         *
         * @member {PIXI.FillStyle}
         * @protected
         */
        this._fillStyle = new FillStyle();

        /**
         * Current line style
         *
         * @member {PIXI.LineStyle}
         * @protected
         */
        this._lineStyle = new LineStyle();

        /**
         * Current shape transform matrix.
         *
         * @member {PIXI.Matrix}
         * @protected
         */
        this._matrix = null;

        /**
         * Current hole mode is enabled.
         *
         * @member {boolean}
         * @default false
         * @protected
         */
        this._holeMode = false;

        /**
         * Current path
         *
         * @member {PIXI.Polygon}
         * @protected
         */
        this.currentPath = null;

        /**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         *
         * @name cacheAsBitmap
         * @member {boolean}
         * @memberof PIXI.Graphics#
         * @default false
         */

        /**
         * A collections of batches! These can be drawn by the renderer batch system.
         *
         * @protected
         * @member {object[]}
         */
        this.batches = [];

        /**
         * Update dirty for limiting calculating tints for batches.
         *
         * @protected
         * @member {number}
         * @default -1
         */
        this.batchTint = -1;

        /**
         * Copy of the object vertex data.
         *
         * @protected
         * @member {Float32Array}
         */
        this.vertexData = null;

        this._transformID = -1;
        this.batchDirty = -1;

        /**
         * Renderer plugin for batching
         *
         * @member {string}
         * @default 'batch'
         */
        this.pluginName = 'batch';

        // Set default
        this.tint = 0xFFFFFF;
        this.blendMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL;
    }

    if ( Container ) Graphics.__proto__ = Container;
    Graphics.prototype = Object.create( Container && Container.prototype );
    Graphics.prototype.constructor = Graphics;

    var prototypeAccessors = { blendMode: { configurable: true },tint: { configurable: true },fill: { configurable: true },line: { configurable: true } };

    /**
     * Creates a new Graphics object with the same values as this one.
     * Note that the only the properties of the object are cloned, not its transform (position,scale,etc)
     *
     * @return {PIXI.Graphics} A clone of the graphics object
     */
    Graphics.prototype.clone = function clone ()
    {
        this.finishPoly();

        return new Graphics(this.geometry);
    };

    /**
     * The blend mode to be applied to the graphic shape. Apply a value of
     * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
     *
     * @member {number}
     * @default PIXI.BLEND_MODES.NORMAL;
     * @see PIXI.BLEND_MODES
     */
    prototypeAccessors.blendMode.set = function (value)
    {
        this.state.blendMode = value;
    };

    prototypeAccessors.blendMode.get = function ()
    {
        return this.state.blendMode;
    };

    /**
     * The tint applied to the graphic shape. This is a hex value. A value of
     * 0xFFFFFF will remove any tint effect.
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    prototypeAccessors.tint.get = function ()
    {
        return this._tint;
    };
    prototypeAccessors.tint.set = function (value)
    {
        this._tint = value;
    };

    /**
     * The current fill style.
     *
     * @member {PIXI.FillStyle}
     * @readonly
     */
    prototypeAccessors.fill.get = function ()
    {
        return this._fillStyle;
    };

    /**
     * The current line style.
     *
     * @member {PIXI.LineStyle}
     * @readonly
     */
    prototypeAccessors.line.get = function ()
    {
        return this._lineStyle;
    };

    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     *
     * @method PIXI.Graphics#lineStyle
     * @param {number} [width=0] - width of the line to draw, will update the objects stored style
     * @param {number} [color=0x0] - color of the line to draw, will update the objects stored style
     * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {number} [alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
     * @param {boolean} [native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     *
     * @param {object} [options] - Line style options
     * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
     * @param {number} [options.color=0x0] - color of the line to draw, will update the objects stored style
     * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
     * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.lineStyle = function lineStyle (options)
    {
        // Support non-object params: (width, color, alpha, alignment, native)
        if (typeof options === 'number')
        {
            var args = arguments;

            options = {
                width: args[0] || 0,
                color: args[1] || 0x0,
                alpha: args[2] !== undefined ? args[2] : 1,
                alignment: args[3] !== undefined ? args[3] : 0.5,
                native: !!args[4],
            };
        }

        return this.lineTextureStyle(options);
    };

    /**
     * Like line style but support texture for line fill.
     *
     * @param {object} [options] - Collection of options for setting line style.
     * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
     * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to use
     * @param {number} [options.color=0x0] - color of the line to draw, will update the objects stored style.
     *  Default 0xFFFFFF if texture present.
     * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {PIXI.Matrix} [options.matrix=null] Texture matrix to transform texture
     * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
     * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.lineTextureStyle = function lineTextureStyle (options)
    {
        // backward compatibility with params: (width, texture,
        // color, alpha, matrix, alignment, native)
        if (typeof options === 'number')
        {
            Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["deprecation"])('v5.2.0', 'Please use object-based options for Graphics#lineTextureStyle');

            var width = arguments[0];
            var texture = arguments[1];
            var color = arguments[2];
            var alpha = arguments[3];
            var matrix = arguments[4];
            var alignment = arguments[5];
            var native = arguments[6];

            options = { width: width, texture: texture, color: color, alpha: alpha, matrix: matrix, alignment: alignment, native: native };

            // Remove undefined keys
            Object.keys(options).forEach(function (key) { return options[key] === undefined && delete options[key]; });
        }

        // Apply defaults
        options = Object.assign({
            width: 0,
            texture: _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"].WHITE,
            color: (options && options.texture) ? 0xFFFFFF : 0x0,
            alpha: 1,
            matrix: null,
            alignment: 0.5,
            native: false,
        }, options);

        if (this.currentPath)
        {
            this.startPoly();
        }

        var visible = options.width > 0 && options.alpha > 0;

        if (!visible)
        {
            this._lineStyle.reset();
        }
        else
        {
            if (options.matrix)
            {
                options.matrix = options.matrix.clone();
                options.matrix.invert();
            }

            Object.assign(this._lineStyle, { visible: visible }, options);
        }

        return this;
    };

    /**
     * Start a polygon object internally
     * @protected
     */
    Graphics.prototype.startPoly = function startPoly ()
    {
        if (this.currentPath)
        {
            var points = this.currentPath.points;
            var len = this.currentPath.points.length;

            if (len > 2)
            {
                this.drawShape(this.currentPath);
                this.currentPath = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Polygon */ "h"]();
                this.currentPath.closeStroke = false;
                this.currentPath.points.push(points[len - 2], points[len - 1]);
            }
        }
        else
        {
            this.currentPath = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Polygon */ "h"]();
            this.currentPath.closeStroke = false;
        }
    };

    /**
     * Finish the polygon object.
     * @protected
     */
    Graphics.prototype.finishPoly = function finishPoly ()
    {
        if (this.currentPath)
        {
            if (this.currentPath.points.length > 2)
            {
                this.drawShape(this.currentPath);
                this.currentPath = null;
            }
            else
            {
                this.currentPath.points.length = 0;
            }
        }
    };

    /**
     * Moves the current drawing position to x, y.
     *
     * @param {number} x - the X coordinate to move to
     * @param {number} y - the Y coordinate to move to
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.moveTo = function moveTo (x, y)
    {
        this.startPoly();
        this.currentPath.points[0] = x;
        this.currentPath.points[1] = y;

        return this;
    };

    /**
     * Draws a line using the current line style from the current drawing position to (x, y);
     * The current drawing position is then set to (x, y).
     *
     * @param {number} x - the X coordinate to draw to
     * @param {number} y - the Y coordinate to draw to
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.lineTo = function lineTo (x, y)
    {
        if (!this.currentPath)
        {
            this.moveTo(0, 0);
        }

        // remove duplicates..
        var points = this.currentPath.points;
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];

        if (fromX !== x || fromY !== y)
        {
            points.push(x, y);
        }

        return this;
    };

    /**
     * Initialize the curve
     *
     * @protected
     * @param {number} [x=0]
     * @param {number} [y=0]
     */
    Graphics.prototype._initCurve = function _initCurve (x, y)
    {
        if ( x === void 0 ) x = 0;
        if ( y === void 0 ) y = 0;

        if (this.currentPath)
        {
            if (this.currentPath.points.length === 0)
            {
                this.currentPath.points = [x, y];
            }
        }
        else
        {
            this.moveTo(x, y);
        }
    };

    /**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.quadraticCurveTo = function quadraticCurveTo (cpX, cpY, toX, toY)
    {
        this._initCurve();

        var points = this.currentPath.points;

        if (points.length === 0)
        {
            this.moveTo(0, 0);
        }

        QuadraticUtils.curveTo(cpX, cpY, toX, toY, points);

        return this;
    };

    /**
     * Calculate the points for a bezier curve and then draws it.
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} cpX2 - Second Control point x
     * @param {number} cpY2 - Second Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.bezierCurveTo = function bezierCurveTo (cpX, cpY, cpX2, cpY2, toX, toY)
    {
        this._initCurve();

        BezierUtils.curveTo(cpX, cpY, cpX2, cpY2, toX, toY, this.currentPath.points);

        return this;
    };

    /**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     *
     * @param {number} x1 - The x-coordinate of the first tangent point of the arc
     * @param {number} y1 - The y-coordinate of the first tangent point of the arc
     * @param {number} x2 - The x-coordinate of the end of the arc
     * @param {number} y2 - The y-coordinate of the end of the arc
     * @param {number} radius - The radius of the arc
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.arcTo = function arcTo (x1, y1, x2, y2, radius)
    {
        this._initCurve(x1, y1);

        var points = this.currentPath.points;

        var result = ArcUtils.curveTo(x1, y1, x2, y2, radius, points);

        if (result)
        {
            var cx = result.cx;
            var cy = result.cy;
            var radius$1 = result.radius;
            var startAngle = result.startAngle;
            var endAngle = result.endAngle;
            var anticlockwise = result.anticlockwise;

            this.arc(cx, cy, radius$1, startAngle, endAngle, anticlockwise);
        }

        return this;
    };

    /**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     *
     * @param {number} cx - The x-coordinate of the center of the circle
     * @param {number} cy - The y-coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
     *  of the arc's circle)
     * @param {number} endAngle - The ending angle, in radians
     * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
     *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
     *  indicates counter-clockwise.
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.arc = function arc (cx, cy, radius, startAngle, endAngle, anticlockwise)
    {
        if ( anticlockwise === void 0 ) anticlockwise = false;

        if (startAngle === endAngle)
        {
            return this;
        }

        if (!anticlockwise && endAngle <= startAngle)
        {
            endAngle += _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* PI_2 */ "f"];
        }
        else if (anticlockwise && startAngle <= endAngle)
        {
            startAngle += _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* PI_2 */ "f"];
        }

        var sweep = endAngle - startAngle;

        if (sweep === 0)
        {
            return this;
        }

        var startX = cx + (Math.cos(startAngle) * radius);
        var startY = cy + (Math.sin(startAngle) * radius);
        var eps = this.geometry.closePointEps;

        // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.
        var points = this.currentPath ? this.currentPath.points : null;

        if (points)
        {
            // TODO: make a better fix.

            // We check how far our start is from the last existing point
            var xDiff = Math.abs(points[points.length - 2] - startX);
            var yDiff = Math.abs(points[points.length - 1] - startY);

            if (xDiff < eps && yDiff < eps)
            ;
            else
            {
                points.push(startX, startY);
            }
        }
        else
        {
            this.moveTo(startX, startY);
            points = this.currentPath.points;
        }

        ArcUtils.arc(startX, startY, cx, cy, radius, startAngle, endAngle, anticlockwise, points);

        return this;
    };

    /**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     *
     * @param {number} [color=0] - the color of the fill
     * @param {number} [alpha=1] - the alpha of the fill
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.beginFill = function beginFill (color, alpha)
    {
        if ( color === void 0 ) color = 0;
        if ( alpha === void 0 ) alpha = 1;

        return this.beginTextureFill({ texture: _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"].WHITE, color: color, alpha: alpha });
    };

    /**
     * Begin the texture fill
     *
     * @param {object} [options] - Object object.
     * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to fill
     * @param {number} [options.color=0xffffff] - Background to fill behind texture
     * @param {number} [options.alpha=1] - Alpha of fill
     * @param {PIXI.Matrix} [options.matrix=null] - Transform matrix
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.beginTextureFill = function beginTextureFill (options)
    {
        // backward compatibility with params: (texture, color, alpha, matrix)
        if (options instanceof _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"])
        {
            Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["deprecation"])('v5.2.0', 'Please use object-based options for Graphics#beginTextureFill');

            var texture = arguments[0];
            var color = arguments[1];
            var alpha = arguments[2];
            var matrix = arguments[3];

            options = { texture: texture, color: color, alpha: alpha, matrix: matrix };

            // Remove undefined keys
            Object.keys(options).forEach(function (key) { return options[key] === undefined && delete options[key]; });
        }

        // Apply defaults
        options = Object.assign({
            texture: _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"].WHITE,
            color: 0xFFFFFF,
            alpha: 1,
            matrix: null,
        }, options);

        if (this.currentPath)
        {
            this.startPoly();
        }

        var visible = options.alpha > 0;

        if (!visible)
        {
            this._fillStyle.reset();
        }
        else
        {
            if (options.matrix)
            {
                options.matrix = options.matrix.clone();
                options.matrix.invert();
            }

            Object.assign(this._fillStyle, { visible: visible }, options);
        }

        return this;
    };

    /**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     *
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.endFill = function endFill ()
    {
        this.finishPoly();

        this._fillStyle.reset();

        return this;
    };

    /**
     * Draws a rectangle shape.
     *
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawRect = function drawRect (x, y, width, height)
    {
        return this.drawShape(new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Rectangle */ "j"](x, y, width, height));
    };

    /**
     * Draw a rectangle shape with rounded/beveled corners.
     *
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @param {number} radius - Radius of the rectangle corners
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawRoundedRect = function drawRoundedRect (x, y, width, height, radius)
    {
        return this.drawShape(new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* RoundedRectangle */ "k"](x, y, width, height, radius));
    };

    /**
     * Draws a circle.
     *
     * @param {number} x - The X coordinate of the center of the circle
     * @param {number} y - The Y coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawCircle = function drawCircle (x, y, radius)
    {
        return this.drawShape(new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Circle */ "a"](x, y, radius));
    };

    /**
     * Draws an ellipse.
     *
     * @param {number} x - The X coordinate of the center of the ellipse
     * @param {number} y - The Y coordinate of the center of the ellipse
     * @param {number} width - The half width of the ellipse
     * @param {number} height - The half height of the ellipse
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawEllipse = function drawEllipse (x, y, width, height)
    {
        return this.drawShape(new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Ellipse */ "c"](x, y, width, height));
    };

    /**
     * Draws a polygon using the given path.
     *
     * @param {number[]|PIXI.Point[]|PIXI.Polygon} path - The path data used to construct the polygon.
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawPolygon = function drawPolygon (path)
    {
        var arguments$1 = arguments;

        // prevents an argument assignment deopt
        // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
        var points = path;

        var closeStroke = true;// !!this._fillStyle;

        // check if data has points..
        if (points.points)
        {
            closeStroke = points.closeStroke;
            points = points.points;
        }

        if (!Array.isArray(points))
        {
            // prevents an argument leak deopt
            // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
            points = new Array(arguments.length);

            for (var i = 0; i < points.length; ++i)
            {
                points[i] = arguments$1[i]; // eslint-disable-line prefer-rest-params
            }
        }

        var shape = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Polygon */ "h"](points);

        shape.closeStroke = closeStroke;

        this.drawShape(shape);

        return this;
    };

    /**
     * Draw any shape.
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - Shape to draw
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawShape = function drawShape (shape)
    {
        if (!this._holeMode)
        {
            this.geometry.drawShape(
                shape,
                this._fillStyle.clone(),
                this._lineStyle.clone(),
                this._matrix
            );
        }
        else
        {
            this.geometry.drawHole(shape, this._matrix);
        }

        return this;
    };

    /**
     * Draw a star shape with an arbitrary number of points.
     *
     * @param {number} x - Center X position of the star
     * @param {number} y - Center Y position of the star
     * @param {number} points - The number of points of the star, must be > 1
     * @param {number} radius - The outer radius of the star
     * @param {number} [innerRadius] - The inner radius between points, default half `radius`
     * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.drawStar = function drawStar (x, y, points, radius, innerRadius, rotation)
    {
        if ( rotation === void 0 ) rotation = 0;

        return this.drawPolygon(new Star(x, y, points, radius, innerRadius, rotation));
    };

    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     *
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    Graphics.prototype.clear = function clear ()
    {
        this.geometry.clear();
        this._lineStyle.reset();
        this._fillStyle.reset();

        this._matrix = null;
        this._holeMode = false;
        this.currentPath = null;

        return this;
    };

    /**
     * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
     * masked with gl.scissor.
     *
     * @returns {boolean} True if only 1 rect.
     */
    Graphics.prototype.isFastRect = function isFastRect ()
    {
        return this.geometry.graphicsData.length === 1
        && this.geometry.graphicsData[0].shape.type === _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* SHAPES */ "l"].RECT
        && !this.geometry.graphicsData[0].lineWidth;
    };

    /**
     * Renders the object using the WebGL renderer
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._render = function _render (renderer)
    {
        this.finishPoly();

        var geometry = this.geometry;

        // batch part..
        // batch it!
        geometry.updateBatches();

        if (geometry.batchable)
        {
            if (this.batchDirty !== geometry.batchDirty)
            {
                this._populateBatches();
            }

            this._renderBatched(renderer);
        }
        else
        {
            // no batching...
            renderer.batch.flush();

            this._renderDirect(renderer);
        }
    };

    /**
     * Populating batches for rendering
     *
     * @protected
     */
    Graphics.prototype._populateBatches = function _populateBatches ()
    {
        var geometry = this.geometry;
        var blendMode = this.blendMode;

        this.batches = [];
        this.batchTint = -1;
        this._transformID = -1;
        this.batchDirty = geometry.batchDirty;

        this.vertexData = new Float32Array(geometry.points);

        for (var i = 0, l = geometry.batches.length; i < l; i++)
        {
            var gI = geometry.batches[i];
            var color = gI.style.color;
            var vertexData = new Float32Array(this.vertexData.buffer,
                gI.attribStart * 4 * 2,
                gI.attribSize * 2);

            var uvs = new Float32Array(geometry.uvsFloat32.buffer,
                gI.attribStart * 4 * 2,
                gI.attribSize * 2);

            var indices = new Uint16Array(geometry.indicesUint16.buffer,
                gI.start * 2,
                gI.size);

            var batch = {
                vertexData: vertexData,
                blendMode: blendMode,
                indices: indices,
                uvs: uvs,
                _batchRGB: Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["hex2rgb"])(color),
                _tintRGB: color,
                _texture: gI.style.texture,
                alpha: gI.style.alpha,
                worldAlpha: 1 };

            this.batches[i] = batch;
        }
    };

    /**
     * Renders the batches using the BathedRenderer plugin
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._renderBatched = function _renderBatched (renderer)
    {
        if (!this.batches.length)
        {
            return;
        }

        renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);

        this.calculateVertices();
        this.calculateTints();

        for (var i = 0, l = this.batches.length; i < l; i++)
        {
            var batch = this.batches[i];

            batch.worldAlpha = this.worldAlpha * batch.alpha;

            renderer.plugins[this.pluginName].render(batch);
        }
    };

    /**
     * Renders the graphics direct
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._renderDirect = function _renderDirect (renderer)
    {
        var shader = this._resolveDirectShader(renderer);

        var geometry = this.geometry;
        var tint = this.tint;
        var worldAlpha = this.worldAlpha;
        var uniforms = shader.uniforms;
        var drawCalls = geometry.drawCalls;

        // lets set the transfomr
        uniforms.translationMatrix = this.transform.worldTransform;

        // and then lets set the tint..
        uniforms.tint[0] = (((tint >> 16) & 0xFF) / 255) * worldAlpha;
        uniforms.tint[1] = (((tint >> 8) & 0xFF) / 255) * worldAlpha;
        uniforms.tint[2] = ((tint & 0xFF) / 255) * worldAlpha;
        uniforms.tint[3] = worldAlpha;

        // the first draw call, we can set the uniforms of the shader directly here.

        // this means that we can tack advantage of the sync function of pixi!
        // bind and sync uniforms..
        // there is a way to optimise this..
        renderer.shader.bind(shader);
        renderer.geometry.bind(geometry, shader);

        // set state..
        renderer.state.set(this.state);

        // then render the rest of them...
        for (var i = 0, l = drawCalls.length; i < l; i++)
        {
            this._renderDrawCallDirect(renderer, geometry.drawCalls[i]);
        }
    };

    /**
     * Renders specific DrawCall
     *
     * @param {PIXI.Renderer} renderer
     * @param {PIXI.BatchDrawCall} drawCall
     */
    Graphics.prototype._renderDrawCallDirect = function _renderDrawCallDirect (renderer, drawCall)
    {
        var textures = drawCall.textures;
        var type = drawCall.type;
        var size = drawCall.size;
        var start = drawCall.start;
        var groupTextureCount = textures.count;

        for (var j = 0; j < groupTextureCount; j++)
        {
            renderer.texture.bind(textures.elements[j], j);
        }

        renderer.geometry.draw(type, size, start);
    };

    /**
     * Resolves shader for direct rendering
     *
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */
    Graphics.prototype._resolveDirectShader = function _resolveDirectShader (renderer)
    {
        var shader = this.shader;

        var pluginName = this.pluginName;

        if (!shader)
        {
            // if there is no shader here, we can use the default shader.
            // and that only gets created if we actually need it..
            // but may be more than one plugins for graphics
            if (!DEFAULT_SHADERS[pluginName])
            {
                var sampleValues = new Int32Array(16);

                for (var i = 0; i < 16; i++)
                {
                    sampleValues[i] = i;
                }

                var uniforms = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Matrix */ "d"](),
                    default: _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* UniformGroup */ "H"].from({ uSamplers: sampleValues }, true),
                };

                var program = renderer.plugins[pluginName]._shader.program;

                DEFAULT_SHADERS[pluginName] = new _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Shader */ "A"](program, uniforms);
            }

            shader = DEFAULT_SHADERS[pluginName];
        }

        return shader;
    };

    /**
     * Retrieves the bounds of the graphic shape as a rectangle object
     *
     * @protected
     */
    Graphics.prototype._calculateBounds = function _calculateBounds ()
    {
        this.finishPoly();

        var geometry = this.geometry;

        // skipping when graphics is empty, like a container
        if (!geometry.graphicsData.length)
        {
            return;
        }

        var ref = geometry.bounds;
        var minX = ref.minX;
        var minY = ref.minY;
        var maxX = ref.maxX;
        var maxY = ref.maxY;

        this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
    };

    /**
     * Tests if a point is inside this graphics object
     *
     * @param {PIXI.Point} point - the point to test
     * @return {boolean} the result of the test
     */
    Graphics.prototype.containsPoint = function containsPoint (point)
    {
        this.worldTransform.applyInverse(point, Graphics._TEMP_POINT);

        return this.geometry.containsPoint(Graphics._TEMP_POINT);
    };

    /**
     * Recalcuate the tint by applying tin to batches using Graphics tint.
     * @protected
     */
    Graphics.prototype.calculateTints = function calculateTints ()
    {
        if (this.batchTint !== this.tint)
        {
            this.batchTint = this.tint;

            var tintRGB = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_2__["hex2rgb"])(this.tint, temp);

            for (var i = 0; i < this.batches.length; i++)
            {
                var batch = this.batches[i];

                var batchTint = batch._batchRGB;

                var r = (tintRGB[0] * batchTint[0]) * 255;
                var g = (tintRGB[1] * batchTint[1]) * 255;
                var b = (tintRGB[2] * batchTint[2]) * 255;

                // TODO Ivan, can this be done in one go?
                var color = (r << 16) + (g << 8) + (b | 0);

                batch._tintRGB = (color >> 16)
                        + (color & 0xff00)
                        + ((color & 0xff) << 16);
            }
        }
    };

    /**
     * If there's a transform update or a change to the shape of the
     * geometry, recaculate the vertices.
     * @protected
     */
    Graphics.prototype.calculateVertices = function calculateVertices ()
    {
        if (this._transformID === this.transform._worldID)
        {
            return;
        }

        this._transformID = this.transform._worldID;

        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;

        var data = this.geometry.points;// batch.vertexDataOriginal;
        var vertexData = this.vertexData;

        var count = 0;

        for (var i = 0; i < data.length; i += 2)
        {
            var x = data[i];
            var y = data[i + 1];

            vertexData[count++] = (a * x) + (c * y) + tx;
            vertexData[count++] = (d * y) + (b * x) + ty;
        }
    };

    /**
     * Closes the current path.
     *
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.closePath = function closePath ()
    {
        var currentPath = this.currentPath;

        if (currentPath)
        {
            // we don't need to add extra point in the end because buildLine will take care of that
            currentPath.closeStroke = true;
        }

        return this;
    };

    /**
     * Apply a matrix to the positional data.
     *
     * @param {PIXI.Matrix} matrix - Matrix to use for transform current shape.
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.setMatrix = function setMatrix (matrix)
    {
        this._matrix = matrix;

        return this;
    };

    /**
     * Begin adding holes to the last draw shape
     * IMPORTANT: holes must be fully inside a shape to work
     * Also weirdness ensues if holes overlap!
     * Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
     * please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.beginHole = function beginHole ()
    {
        this.finishPoly();
        this._holeMode = true;

        return this;
    };

    /**
     * End adding holes to the last draw shape
     * @return {PIXI.Graphics} Returns itself.
     */
    Graphics.prototype.endHole = function endHole ()
    {
        this.finishPoly();
        this._holeMode = false;

        return this;
    };

    /**
     * Destroys the Graphics object.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
     *  options have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have
     *  their destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */
    Graphics.prototype.destroy = function destroy (options)
    {
        Container.prototype.destroy.call(this, options);

        this.geometry.refCount--;
        if (this.geometry.refCount === 0)
        {
            this.geometry.dispose();
        }

        this._matrix = null;
        this.currentPath = null;
        this._lineStyle.destroy();
        this._lineStyle = null;
        this._fillStyle.destroy();
        this._fillStyle = null;
        this.geometry = null;
        this.shader = null;
        this.vertexData = null;
        this.batches.length = 0;
        this.batches = null;

        Container.prototype.destroy.call(this, options);
    };

    Object.defineProperties( Graphics.prototype, prototypeAccessors );

    return Graphics;
}(_pixi_display__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "b"]));

/**
 * Temporary point to use for containsPoint
 *
 * @static
 * @private
 * @member {PIXI.Point}
 */
Graphics._TEMP_POINT = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__[/* Point */ "g"]();


//# sourceMappingURL=graphics.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/interaction/lib/interaction.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionData", function() { return InteractionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionEvent", function() { return InteractionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionManager", function() { return InteractionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionTrackingData", function() { return InteractionTrackingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactiveTarget", function() { return interactiveTarget; });
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_ticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/ticker/lib/ticker.es.js");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/display/lib/display.es.js");
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/*!
 * @pixi/interaction - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */





/**
 * Holds all information related to an Interaction event
 *
 * @class
 * @memberof PIXI.interaction
 */
var InteractionData = function InteractionData()
{
    /**
     * This point stores the global coords of where the touch/mouse event happened
     *
     * @member {PIXI.Point}
     */
    this.global = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* Point */ "g"]();

    /**
     * The target Sprite that was interacted with
     *
     * @member {PIXI.Sprite}
     */
    this.target = null;

    /**
     * When passed to an event handler, this will be the original DOM Event that was captured
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
     * @member {MouseEvent|TouchEvent|PointerEvent}
     */
    this.originalEvent = null;

    /**
     * Unique identifier for this interaction
     *
     * @member {number}
     */
    this.identifier = null;

    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     * @type {Boolean}
     */
    this.isPrimary = false;

    /**
     * Indicates which button was pressed on the mouse or pointer device to trigger the event.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
     * @type {number}
     */
    this.button = 0;

    /**
     * Indicates which buttons are pressed on the mouse or pointer device when the event is triggered.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
     * @type {number}
     */
    this.buttons = 0;

    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     * @type {number}
     */
    this.width = 0;

    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     * @type {number}
     */
    this.height = 0;

    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
     * @type {number}
     */
    this.tiltX = 0;

    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
     * @type {number}
     */
    this.tiltY = 0;

    /**
     * The type of pointer that triggered the event.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
     * @type {string}
     */
    this.pointerType = null;

    /**
     * Pressure applied by the pointing device during the event. A Touch's force property
     * will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
     * @type {number}
     */
    this.pressure = 0;

    /**
     * From TouchEvents (not PointerEvents triggered by touches), the rotationAngle of the Touch.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle
     * @type {number}
     */
    this.rotationAngle = 0;

    /**
     * Twist of a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    this.twist = 0;

    /**
     * Barrel pressure on a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    this.tangentialPressure = 0;
};

var prototypeAccessors = { pointerId: { configurable: true } };

/**
 * The unique identifier of the pointer. It will be the same as `identifier`.
 * @readonly
 * @member {number}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
 */
prototypeAccessors.pointerId.get = function ()
{
    return this.identifier;
};

/**
 * This will return the local coordinates of the specified displayObject for this InteractionData
 *
 * @param {PIXI.DisplayObject} displayObject - The DisplayObject that you would like the local
 *  coords off
 * @param {PIXI.Point} [point] - A Point object in which to store the value, optional (otherwise
 *  will create a new point)
 * @param {PIXI.Point} [globalPos] - A Point object containing your custom global coords, optional
 *  (otherwise will use the current global coords)
 * @return {PIXI.Point} A point containing the coordinates of the InteractionData position relative
 *  to the DisplayObject
 */
InteractionData.prototype.getLocalPosition = function getLocalPosition (displayObject, point, globalPos)
{
    return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
};

/**
 * Copies properties from normalized event data.
 *
 * @param {Touch|MouseEvent|PointerEvent} event The normalized event data
 */
InteractionData.prototype.copyEvent = function copyEvent (event)
{
    // isPrimary should only change on touchstart/pointerdown, so we don't want to overwrite
    // it with "false" on later events when our shim for it on touch events might not be
    // accurate
    if (event.isPrimary)
    {
        this.isPrimary = true;
    }
    this.button = event.button;
    // event.buttons is not available in all browsers (ie. Safari), but it does have a non-standard
    // event.which property instead, which conveys the same information.
    this.buttons = Number.isInteger(event.buttons) ? event.buttons : event.which;
    this.width = event.width;
    this.height = event.height;
    this.tiltX = event.tiltX;
    this.tiltY = event.tiltY;
    this.pointerType = event.pointerType;
    this.pressure = event.pressure;
    this.rotationAngle = event.rotationAngle;
    this.twist = event.twist || 0;
    this.tangentialPressure = event.tangentialPressure || 0;
};

/**
 * Resets the data for pooling.
 */
InteractionData.prototype.reset = function reset ()
{
    // isPrimary is the only property that we really need to reset - everything else is
    // guaranteed to be overwritten
    this.isPrimary = false;
};

Object.defineProperties( InteractionData.prototype, prototypeAccessors );

/**
 * Event class that mimics native DOM events.
 *
 * @class
 * @memberof PIXI.interaction
 */
var InteractionEvent = function InteractionEvent()
{
    /**
     * Whether this event will continue propagating in the tree.
     *
     * Remaining events for the {@link stopsPropagatingAt} object
     * will still be dispatched.
     *
     * @member {boolean}
     */
    this.stopped = false;

    /**
     * At which object this event stops propagating.
     *
     * @private
     * @member {PIXI.DisplayObject}
     */
    this.stopsPropagatingAt = null;

    /**
     * Whether we already reached the element we want to
     * stop propagating at. This is important for delayed events,
     * where we start over deeper in the tree again.
     *
     * @private
     * @member {boolean}
     */
    this.stopPropagationHint = false;

    /**
     * The object which caused this event to be dispatched.
     * For listener callback see {@link PIXI.interaction.InteractionEvent.currentTarget}.
     *
     * @member {PIXI.DisplayObject}
     */
    this.target = null;

    /**
     * The object whose event listener’s callback is currently being invoked.
     *
     * @member {PIXI.DisplayObject}
     */
    this.currentTarget = null;

    /**
     * Type of the event
     *
     * @member {string}
     */
    this.type = null;

    /**
     * InteractionData related to this event
     *
     * @member {PIXI.interaction.InteractionData}
     */
    this.data = null;
};

/**
 * Prevents event from reaching any objects other than the current object.
 *
 */
InteractionEvent.prototype.stopPropagation = function stopPropagation ()
{
    this.stopped = true;
    this.stopPropagationHint = true;
    this.stopsPropagatingAt = this.currentTarget;
};

/**
 * Resets the event.
 */
InteractionEvent.prototype.reset = function reset ()
{
    this.stopped = false;
    this.stopsPropagatingAt = null;
    this.stopPropagationHint = false;
    this.currentTarget = null;
    this.target = null;
};

/**
 * DisplayObjects with the {@link PIXI.interaction.interactiveTarget} mixin use this class to track interactions
 *
 * @class
 * @private
 * @memberof PIXI.interaction
 */
var InteractionTrackingData = function InteractionTrackingData(pointerId)
{
    this._pointerId = pointerId;
    this._flags = InteractionTrackingData.FLAGS.NONE;
};

var prototypeAccessors$1 = { pointerId: { configurable: true },flags: { configurable: true },none: { configurable: true },over: { configurable: true },rightDown: { configurable: true },leftDown: { configurable: true } };

/**
 *
 * @private
 * @param {number} flag - The interaction flag to set
 * @param {boolean} yn - Should the flag be set or unset
 */
InteractionTrackingData.prototype._doSet = function _doSet (flag, yn)
{
    if (yn)
    {
        this._flags = this._flags | flag;
    }
    else
    {
        this._flags = this._flags & (~flag);
    }
};

/**
 * Unique pointer id of the event
 *
 * @readonly
 * @private
 * @member {number}
 */
prototypeAccessors$1.pointerId.get = function ()
{
    return this._pointerId;
};

/**
 * State of the tracking data, expressed as bit flags
 *
 * @private
 * @member {number}
 */
prototypeAccessors$1.flags.get = function ()
{
    return this._flags;
};

prototypeAccessors$1.flags.set = function (flags) // eslint-disable-line require-jsdoc
{
    this._flags = flags;
};

/**
 * Is the tracked event inactive (not over or down)?
 *
 * @private
 * @member {number}
 */
prototypeAccessors$1.none.get = function ()
{
    return this._flags === this.constructor.FLAGS.NONE;
};

/**
 * Is the tracked event over the DisplayObject?
 *
 * @private
 * @member {boolean}
 */
prototypeAccessors$1.over.get = function ()
{
    return (this._flags & this.constructor.FLAGS.OVER) !== 0;
};

prototypeAccessors$1.over.set = function (yn) // eslint-disable-line require-jsdoc
{
    this._doSet(this.constructor.FLAGS.OVER, yn);
};

/**
 * Did the right mouse button come down in the DisplayObject?
 *
 * @private
 * @member {boolean}
 */
prototypeAccessors$1.rightDown.get = function ()
{
    return (this._flags & this.constructor.FLAGS.RIGHT_DOWN) !== 0;
};

prototypeAccessors$1.rightDown.set = function (yn) // eslint-disable-line require-jsdoc
{
    this._doSet(this.constructor.FLAGS.RIGHT_DOWN, yn);
};

/**
 * Did the left mouse button come down in the DisplayObject?
 *
 * @private
 * @member {boolean}
 */
prototypeAccessors$1.leftDown.get = function ()
{
    return (this._flags & this.constructor.FLAGS.LEFT_DOWN) !== 0;
};

prototypeAccessors$1.leftDown.set = function (yn) // eslint-disable-line require-jsdoc
{
    this._doSet(this.constructor.FLAGS.LEFT_DOWN, yn);
};

Object.defineProperties( InteractionTrackingData.prototype, prototypeAccessors$1 );

InteractionTrackingData.FLAGS = Object.freeze({
    NONE: 0,
    OVER: 1 << 0,
    LEFT_DOWN: 1 << 1,
    RIGHT_DOWN: 1 << 2,
});

/**
 * Strategy how to search through stage tree for interactive objects
 *
 * @private
 * @class
 * @memberof PIXI.interaction
 */
var TreeSearch = function TreeSearch()
{
    this._tempPoint = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* Point */ "g"]();
};

/**
 * Recursive implementation for findHit
 *
 * @private
 * @param {PIXI.interaction.InteractionEvent} interactionEvent - event containing the point that
 *  is tested for collision
 * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - the displayObject
 *  that will be hit test (recursively crawls its children)
 * @param {Function} [func] - the function that will be called on each interactive object. The
 *  interactionEvent, displayObject and hit will be passed to the function
 * @param {boolean} [hitTest] - this indicates if the objects inside should be hit test against the point
 * @param {boolean} [interactive] - Whether the displayObject is interactive
 * @return {boolean} returns true if the displayObject hit the point
 */
TreeSearch.prototype.recursiveFindHit = function recursiveFindHit (interactionEvent, displayObject, func, hitTest, interactive)
{
    if (!displayObject || !displayObject.visible)
    {
        return false;
    }

    var point = interactionEvent.data.global;

    // Took a little while to rework this function correctly! But now it is done and nice and optimized! ^_^
    //
    // This function will now loop through all objects and then only hit test the objects it HAS
    // to, not all of them. MUCH faster..
    // An object will be hit test if the following is true:
    //
    // 1: It is interactive.
    // 2: It belongs to a parent that is interactive AND one of the parents children have not already been hit.
    //
    // As another little optimization once an interactive object has been hit we can carry on
    // through the scenegraph, but we know that there will be no more hits! So we can avoid extra hit tests
    // A final optimization is that an object is not hit test directly if a child has already been hit.

    interactive = displayObject.interactive || interactive;

    var hit = false;
    var interactiveParent = interactive;

    // Flag here can set to false if the event is outside the parents hitArea or mask
    var hitTestChildren = true;

    // If there is a hitArea, no need to test against anything else if the pointer is not within the hitArea
    // There is also no longer a need to hitTest children.
    if (displayObject.hitArea)
    {
        if (hitTest)
        {
            displayObject.worldTransform.applyInverse(point, this._tempPoint);
            if (!displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y))
            {
                hitTest = false;
                hitTestChildren = false;
            }
            else
            {
                hit = true;
            }
        }
        interactiveParent = false;
    }
    // If there is a mask, no need to hitTest against anything else if the pointer is not within the mask.
    // We still want to hitTestChildren, however, to ensure a mouseout can still be generated.
    // https://github.com/pixijs/pixi.js/issues/5135
    else if (displayObject._mask)
    {
        if (hitTest)
        {
            if (!(displayObject._mask.containsPoint && displayObject._mask.containsPoint(point)))
            {
                hitTest = false;
            }
        }
    }

    // ** FREE TIP **! If an object is not interactive or has no buttons in it
    // (such as a game scene!) set interactiveChildren to false for that displayObject.
    // This will allow PixiJS to completely ignore and bypass checking the displayObjects children.
    if (hitTestChildren && displayObject.interactiveChildren && displayObject.children)
    {
        var children = displayObject.children;

        for (var i = children.length - 1; i >= 0; i--)
        {
            var child = children[i];

            // time to get recursive.. if this function will return if something is hit..
            var childHit = this.recursiveFindHit(interactionEvent, child, func, hitTest, interactiveParent);

            if (childHit)
            {
                // its a good idea to check if a child has lost its parent.
                // this means it has been removed whilst looping so its best
                if (!child.parent)
                {
                    continue;
                }

                // we no longer need to hit test any more objects in this container as we we
                // now know the parent has been hit
                interactiveParent = false;

                // If the child is interactive , that means that the object hit was actually
                // interactive and not just the child of an interactive object.
                // This means we no longer need to hit test anything else. We still need to run
                // through all objects, but we don't need to perform any hit tests.

                if (childHit)
                {
                    if (interactionEvent.target)
                    {
                        hitTest = false;
                    }
                    hit = true;
                }
            }
        }
    }

    // no point running this if the item is not interactive or does not have an interactive parent.
    if (interactive)
    {
        // if we are hit testing (as in we have no hit any objects yet)
        // We also don't need to worry about hit testing if once of the displayObjects children
        // has already been hit - but only if it was interactive, otherwise we need to keep
        // looking for an interactive child, just in case we hit one
        if (hitTest && !interactionEvent.target)
        {
            // already tested against hitArea if it is defined
            if (!displayObject.hitArea && displayObject.containsPoint)
            {
                if (displayObject.containsPoint(point))
                {
                    hit = true;
                }
            }
        }

        if (displayObject.interactive)
        {
            if (hit && !interactionEvent.target)
            {
                interactionEvent.target = displayObject;
            }

            if (func)
            {
                func(interactionEvent, displayObject, !!hit);
            }
        }
    }

    return hit;
};

/**
 * This function is provides a neat way of crawling through the scene graph and running a
 * specified function on all interactive objects it finds. It will also take care of hit
 * testing the interactive objects and passes the hit across in the function.
 *
 * @private
 * @param {PIXI.interaction.InteractionEvent} interactionEvent - event containing the point that
 *  is tested for collision
 * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - the displayObject
 *  that will be hit test (recursively crawls its children)
 * @param {Function} [func] - the function that will be called on each interactive object. The
 *  interactionEvent, displayObject and hit will be passed to the function
 * @param {boolean} [hitTest] - this indicates if the objects inside should be hit test against the point
 * @return {boolean} returns true if the displayObject hit the point
 */
TreeSearch.prototype.findHit = function findHit (interactionEvent, displayObject, func, hitTest)
{
    this.recursiveFindHit(interactionEvent, displayObject, func, hitTest, false);
};

/**
 * Interface for classes that represent a hit area.
 *
 * It is implemented by the following classes:
 * - {@link PIXI.Circle}
 * - {@link PIXI.Ellipse}
 * - {@link PIXI.Polygon}
 * - {@link PIXI.RoundedRectangle}
 *
 * @interface IHitArea
 * @memberof PIXI
 */

/**
 * Checks whether the x and y coordinates given are contained within this area
 *
 * @method
 * @name contains
 * @memberof PIXI.IHitArea#
 * @param {number} x - The X coordinate of the point to test
 * @param {number} y - The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this area
 */

/**
 * Default property values of interactive objects
 * Used by {@link PIXI.interaction.InteractionManager} to automatically give all DisplayObjects these properties
 *
 * @private
 * @name interactiveTarget
 * @type {Object}
 * @memberof PIXI.interaction
 * @example
 *      function MyObject() {}
 *
 *      Object.assign(
 *          DisplayObject.prototype,
 *          PIXI.interaction.interactiveTarget
 *      );
 */
var interactiveTarget = {

    /**
     * Enable interaction events for the DisplayObject. Touch, pointer and mouse
     * events will not be emitted unless `interactive` is set to `true`.
     *
     * @example
     * const sprite = new PIXI.Sprite(texture);
     * sprite.interactive = true;
     * sprite.on('tap', (event) => {
     *    //handle event
     * });
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     */
    interactive: false,

    /**
     * Determines if the children to the displayObject can be clicked/touched
     * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
     *
     * @member {boolean}
     * @memberof PIXI.Container#
     */
    interactiveChildren: true,

    /**
     * Interaction shape. Children will be hit first, then this shape will be checked.
     * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
     *
     * @example
     * const sprite = new PIXI.Sprite(texture);
     * sprite.interactive = true;
     * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
     * @member {PIXI.IHitArea}
     * @memberof PIXI.DisplayObject#
     */
    hitArea: null,

    /**
     * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
     * Setting this changes the 'cursor' property to `'pointer'`.
     *
     * @example
     * const sprite = new PIXI.Sprite(texture);
     * sprite.interactive = true;
     * sprite.buttonMode = true;
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     */
    get buttonMode()
    {
        return this.cursor === 'pointer';
    },
    set buttonMode(value)
    {
        if (value)
        {
            this.cursor = 'pointer';
        }
        else if (this.cursor === 'pointer')
        {
            this.cursor = null;
        }
    },

    /**
     * This defines what cursor mode is used when the mouse cursor
     * is hovered over the displayObject.
     *
     * @example
     * const sprite = new PIXI.Sprite(texture);
     * sprite.interactive = true;
     * sprite.cursor = 'wait';
     * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
     *
     * @member {string}
     * @memberof PIXI.DisplayObject#
     */
    cursor: null,

    /**
     * Internal set of all active pointers, by identifier
     *
     * @member {Map<number, InteractionTrackingData>}
     * @memberof PIXI.DisplayObject#
     * @private
     */
    get trackedPointers()
    {
        if (this._trackedPointers === undefined) { this._trackedPointers = {}; }

        return this._trackedPointers;
    },

    /**
     * Map of all tracked pointers, by identifier. Use trackedPointers to access.
     *
     * @private
     * @type {Map<number, InteractionTrackingData>}
     */
    _trackedPointers: undefined,
};

// Mix interactiveTarget into DisplayObject.prototype,
// after deprecation has been handled
_pixi_display__WEBPACK_IMPORTED_MODULE_2__[/* DisplayObject */ "c"].mixin(interactiveTarget);

var MOUSE_POINTER_ID = 1;

// helpers for hitTest() - only used inside hitTest()
var hitTestEvent = {
    target: null,
    data: {
        global: null,
    },
};

/**
 * The interaction manager deals with mouse, touch and pointer events.
 *
 * Any DisplayObject can be interactive if its `interactive` property is set to true.
 *
 * This manager also supports multitouch.
 *
 * An instance of this class is automatically created by default, and can be found at `renderer.plugins.interaction`
 *
 * @class
 * @extends PIXI.utils.EventEmitter
 * @memberof PIXI.interaction
 */
var InteractionManager = /*@__PURE__*/(function (EventEmitter) {
    function InteractionManager(renderer, options)
    {
        EventEmitter.call(this);

        options = options || {};

        /**
         * The renderer this interaction manager works for.
         *
         * @member {PIXI.AbstractRenderer}
         */
        this.renderer = renderer;

        /**
         * Should default browser actions automatically be prevented.
         * Does not apply to pointer events for backwards compatibility
         * preventDefault on pointer events stops mouse events from firing
         * Thus, for every pointer event, there will always be either a mouse of touch event alongside it.
         *
         * @member {boolean}
         * @default true
         */
        this.autoPreventDefault = options.autoPreventDefault !== undefined ? options.autoPreventDefault : true;

        /**
         * Frequency in milliseconds that the mousemove, mouseover & mouseout interaction events will be checked.
         *
         * @member {number}
         * @default 10
         */
        this.interactionFrequency = options.interactionFrequency || 10;

        /**
         * The mouse data
         *
         * @member {PIXI.interaction.InteractionData}
         */
        this.mouse = new InteractionData();
        this.mouse.identifier = MOUSE_POINTER_ID;

        // setting the mouse to start off far off screen will mean that mouse over does
        //  not get called before we even move the mouse.
        this.mouse.global.set(-999999);

        /**
         * Actively tracked InteractionData
         *
         * @private
         * @member {Object.<number,PIXI.interaction.InteractionData>}
         */
        this.activeInteractionData = {};
        this.activeInteractionData[MOUSE_POINTER_ID] = this.mouse;

        /**
         * Pool of unused InteractionData
         *
         * @private
         * @member {PIXI.interaction.InteractionData[]}
         */
        this.interactionDataPool = [];

        /**
         * An event data object to handle all the event tracking/dispatching
         *
         * @member {object}
         */
        this.eventData = new InteractionEvent();

        /**
         * The DOM element to bind to.
         *
         * @protected
         * @member {HTMLElement}
         */
        this.interactionDOMElement = null;

        /**
         * This property determines if mousemove and touchmove events are fired only when the cursor
         * is over the object.
         * Setting to true will make things work more in line with how the DOM version works.
         * Setting to false can make things easier for things like dragging
         * It is currently set to false as this is how PixiJS used to work. This will be set to true in
         * future versions of pixi.
         *
         * @member {boolean}
         * @default false
         */
        this.moveWhenInside = false;

        /**
         * Have events been attached to the dom element?
         *
         * @protected
         * @member {boolean}
         */
        this.eventsAdded = false;

        /**
         * Is the mouse hovering over the renderer?
         *
         * @protected
         * @member {boolean}
         */
        this.mouseOverRenderer = false;

        /**
         * Does the device support touch events
         * https://www.w3.org/TR/touch-events/
         *
         * @readonly
         * @member {boolean}
         */
        this.supportsTouchEvents = 'ontouchstart' in window;

        /**
         * Does the device support pointer events
         * https://www.w3.org/Submission/pointer-events/
         *
         * @readonly
         * @member {boolean}
         */
        this.supportsPointerEvents = !!window.PointerEvent;

        // this will make it so that you don't have to call bind all the time

        /**
         * @private
         * @member {Function}
         */
        this.onPointerUp = this.onPointerUp.bind(this);
        this.processPointerUp = this.processPointerUp.bind(this);

        /**
         * @private
         * @member {Function}
         */
        this.onPointerCancel = this.onPointerCancel.bind(this);
        this.processPointerCancel = this.processPointerCancel.bind(this);

        /**
         * @private
         * @member {Function}
         */
        this.onPointerDown = this.onPointerDown.bind(this);
        this.processPointerDown = this.processPointerDown.bind(this);

        /**
         * @private
         * @member {Function}
         */
        this.onPointerMove = this.onPointerMove.bind(this);
        this.processPointerMove = this.processPointerMove.bind(this);

        /**
         * @private
         * @member {Function}
         */
        this.onPointerOut = this.onPointerOut.bind(this);
        this.processPointerOverOut = this.processPointerOverOut.bind(this);

        /**
         * @private
         * @member {Function}
         */
        this.onPointerOver = this.onPointerOver.bind(this);

        /**
         * Dictionary of how different cursor modes are handled. Strings are handled as CSS cursor
         * values, objects are handled as dictionaries of CSS values for interactionDOMElement,
         * and functions are called instead of changing the CSS.
         * Default CSS cursor values are provided for 'default' and 'pointer' modes.
         * @member {Object.<string, Object>}
         */
        this.cursorStyles = {
            default: 'inherit',
            pointer: 'pointer',
        };

        /**
         * The mode of the cursor that is being used.
         * The value of this is a key from the cursorStyles dictionary.
         *
         * @member {string}
         */
        this.currentCursorMode = null;

        /**
         * Internal cached let.
         *
         * @private
         * @member {string}
         */
        this.cursor = null;

        /**
         * The current resolution / device pixel ratio.
         *
         * @member {number}
         * @default 1
         */
        this.resolution = 1;

        /**
         * Delayed pointer events. Used to guarantee correct ordering of over/out events.
         *
         * @private
         * @member {Array}
         */
        this.delayedEvents = [];

        /**
         * TreeSearch component that is used to hitTest stage tree
         *
         * @private
         * @member {PIXI.interaction.TreeSearch}
         */
        this.search = new TreeSearch();

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed on the display
         * object.
         *
         * @event PIXI.interaction.InteractionManager#mousedown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * on the display object.
         *
         * @event PIXI.interaction.InteractionManager#rightdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released over the display
         * object.
         *
         * @event PIXI.interaction.InteractionManager#mouseup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * over the display object.
         *
         * @event PIXI.interaction.InteractionManager#rightup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
         * the display object.
         *
         * @event PIXI.interaction.InteractionManager#click
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * and released on the display object.
         *
         * @event PIXI.interaction.InteractionManager#rightclick
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released outside the
         * display object that initially registered a
         * [mousedown]{@link PIXI.interaction.InteractionManager#event:mousedown}.
         *
         * @event PIXI.interaction.InteractionManager#mouseupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * outside the display object that initially registered a
         * [rightdown]{@link PIXI.interaction.InteractionManager#event:rightdown}.
         *
         * @event PIXI.interaction.InteractionManager#rightupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved while over the display object
         *
         * @event PIXI.interaction.InteractionManager#mousemove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved onto the display object
         *
         * @event PIXI.interaction.InteractionManager#mouseover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved off the display object
         *
         * @event PIXI.interaction.InteractionManager#mouseout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed on the display object.
         *
         * @event PIXI.interaction.InteractionManager#pointerdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released over the display object.
         * Not always fired when some buttons are held down while others are released. In those cases,
         * use [mousedown]{@link PIXI.interaction.InteractionManager#event:mousedown} and
         * [mouseup]{@link PIXI.interaction.InteractionManager#event:mouseup} instead.
         *
         * @event PIXI.interaction.InteractionManager#pointerup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a pointer event
         *
         * @event PIXI.interaction.InteractionManager#pointercancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed and released on the display object.
         *
         * @event PIXI.interaction.InteractionManager#pointertap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released outside the display object that initially
         * registered a [pointerdown]{@link PIXI.interaction.InteractionManager#event:pointerdown}.
         *
         * @event PIXI.interaction.InteractionManager#pointerupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved while over the display object
         *
         * @event PIXI.interaction.InteractionManager#pointermove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved onto the display object
         *
         * @event PIXI.interaction.InteractionManager#pointerover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved off the display object
         *
         * @event PIXI.interaction.InteractionManager#pointerout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed on the display object.
         *
         * @event PIXI.interaction.InteractionManager#touchstart
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed from the display object.
         *
         * @event PIXI.interaction.InteractionManager#touchend
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a touch
         *
         * @event PIXI.interaction.InteractionManager#touchcancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed and removed from the display object.
         *
         * @event PIXI.interaction.InteractionManager#tap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed outside of the display object that initially
         * registered a [touchstart]{@link PIXI.interaction.InteractionManager#event:touchstart}.
         *
         * @event PIXI.interaction.InteractionManager#touchendoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is moved along the display object.
         *
         * @event PIXI.interaction.InteractionManager#touchmove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed on the display.
         * object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mousedown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released over the display
         * object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * over the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
         * the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#click
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * and released on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightclick
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button (usually a mouse left-button) is released outside the
         * display object that initially registered a
         * [mousedown]{@link PIXI.DisplayObject#event:mousedown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * outside the display object that initially registered a
         * [rightdown]{@link PIXI.DisplayObject#event:rightdown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#rightupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved while over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mousemove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved onto the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device (usually a mouse) is moved off the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#mouseout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerdown
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerup
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a pointer event.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointercancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is pressed and released on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointertap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device button is released outside the display object that initially
         * registered a [pointerdown]{@link PIXI.DisplayObject#event:pointerdown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerupoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved while over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointermove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved onto the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerover
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a pointer device is moved off the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#pointerout
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchstart
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed from the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchend
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when the operating system cancels a touch.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchcancel
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is placed and removed from the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#tap
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is removed outside of the display object that initially
         * registered a [touchstart]{@link PIXI.DisplayObject#event:touchstart}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchendoutside
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        /**
         * Fired when a touch point is moved along the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * @event PIXI.DisplayObject#touchmove
         * @param {PIXI.interaction.InteractionEvent} event - Interaction event
         */

        this.setTargetElement(this.renderer.view, this.renderer.resolution);
    }

    if ( EventEmitter ) InteractionManager.__proto__ = EventEmitter;
    InteractionManager.prototype = Object.create( EventEmitter && EventEmitter.prototype );
    InteractionManager.prototype.constructor = InteractionManager;

    /**
     * Hit tests a point against the display tree, returning the first interactive object that is hit.
     *
     * @param {PIXI.Point} globalPoint - A point to hit test with, in global space.
     * @param {PIXI.Container} [root] - The root display object to start from. If omitted, defaults
     * to the last rendered root of the associated renderer.
     * @return {PIXI.DisplayObject} The hit display object, if any.
     */
    InteractionManager.prototype.hitTest = function hitTest (globalPoint, root)
    {
        // clear the target for our hit test
        hitTestEvent.target = null;
        // assign the global point
        hitTestEvent.data.global = globalPoint;
        // ensure safety of the root
        if (!root)
        {
            root = this.renderer._lastObjectRendered;
        }
        // run the hit test
        this.processInteractive(hitTestEvent, root, null, true);
        // return our found object - it'll be null if we didn't hit anything

        return hitTestEvent.target;
    };

    /**
     * Sets the DOM element which will receive mouse/touch events. This is useful for when you have
     * other DOM elements on top of the renderers Canvas element. With this you'll be bale to delegate
     * another DOM element to receive those events.
     *
     * @param {HTMLElement} element - the DOM element which will receive mouse and touch events.
     * @param {number} [resolution=1] - The resolution / device pixel ratio of the new element (relative to the canvas).
     */
    InteractionManager.prototype.setTargetElement = function setTargetElement (element, resolution)
    {
        if ( resolution === void 0 ) resolution = 1;

        this.removeEvents();

        this.interactionDOMElement = element;

        this.resolution = resolution;

        this.addEvents();
    };

    /**
     * Registers all the DOM events
     *
     * @private
     */
    InteractionManager.prototype.addEvents = function addEvents ()
    {
        if (!this.interactionDOMElement)
        {
            return;
        }

        _pixi_ticker__WEBPACK_IMPORTED_MODULE_1__[/* Ticker */ "a"].system.add(this.update, this, _pixi_ticker__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE_PRIORITY */ "c"].INTERACTION);

        if (window.navigator.msPointerEnabled)
        {
            this.interactionDOMElement.style['-ms-content-zooming'] = 'none';
            this.interactionDOMElement.style['-ms-touch-action'] = 'none';
        }
        else if (this.supportsPointerEvents)
        {
            this.interactionDOMElement.style['touch-action'] = 'none';
        }

        /**
         * These events are added first, so that if pointer events are normalized, they are fired
         * in the same order as non-normalized events. ie. pointer event 1st, mouse / touch 2nd
         */
        if (this.supportsPointerEvents)
        {
            window.document.addEventListener('pointermove', this.onPointerMove, true);
            this.interactionDOMElement.addEventListener('pointerdown', this.onPointerDown, true);
            // pointerout is fired in addition to pointerup (for touch events) and pointercancel
            // we already handle those, so for the purposes of what we do in onPointerOut, we only
            // care about the pointerleave event
            this.interactionDOMElement.addEventListener('pointerleave', this.onPointerOut, true);
            this.interactionDOMElement.addEventListener('pointerover', this.onPointerOver, true);
            window.addEventListener('pointercancel', this.onPointerCancel, true);
            window.addEventListener('pointerup', this.onPointerUp, true);
        }
        else
        {
            window.document.addEventListener('mousemove', this.onPointerMove, true);
            this.interactionDOMElement.addEventListener('mousedown', this.onPointerDown, true);
            this.interactionDOMElement.addEventListener('mouseout', this.onPointerOut, true);
            this.interactionDOMElement.addEventListener('mouseover', this.onPointerOver, true);
            window.addEventListener('mouseup', this.onPointerUp, true);
        }

        // always look directly for touch events so that we can provide original data
        // In a future version we should change this to being just a fallback and rely solely on
        // PointerEvents whenever available
        if (this.supportsTouchEvents)
        {
            this.interactionDOMElement.addEventListener('touchstart', this.onPointerDown, true);
            this.interactionDOMElement.addEventListener('touchcancel', this.onPointerCancel, true);
            this.interactionDOMElement.addEventListener('touchend', this.onPointerUp, true);
            this.interactionDOMElement.addEventListener('touchmove', this.onPointerMove, true);
        }

        this.eventsAdded = true;
    };

    /**
     * Removes all the DOM events that were previously registered
     *
     * @private
     */
    InteractionManager.prototype.removeEvents = function removeEvents ()
    {
        if (!this.interactionDOMElement)
        {
            return;
        }

        _pixi_ticker__WEBPACK_IMPORTED_MODULE_1__[/* Ticker */ "a"].system.remove(this.update, this);

        if (window.navigator.msPointerEnabled)
        {
            this.interactionDOMElement.style['-ms-content-zooming'] = '';
            this.interactionDOMElement.style['-ms-touch-action'] = '';
        }
        else if (this.supportsPointerEvents)
        {
            this.interactionDOMElement.style['touch-action'] = '';
        }

        if (this.supportsPointerEvents)
        {
            window.document.removeEventListener('pointermove', this.onPointerMove, true);
            this.interactionDOMElement.removeEventListener('pointerdown', this.onPointerDown, true);
            this.interactionDOMElement.removeEventListener('pointerleave', this.onPointerOut, true);
            this.interactionDOMElement.removeEventListener('pointerover', this.onPointerOver, true);
            window.removeEventListener('pointercancel', this.onPointerCancel, true);
            window.removeEventListener('pointerup', this.onPointerUp, true);
        }
        else
        {
            window.document.removeEventListener('mousemove', this.onPointerMove, true);
            this.interactionDOMElement.removeEventListener('mousedown', this.onPointerDown, true);
            this.interactionDOMElement.removeEventListener('mouseout', this.onPointerOut, true);
            this.interactionDOMElement.removeEventListener('mouseover', this.onPointerOver, true);
            window.removeEventListener('mouseup', this.onPointerUp, true);
        }

        if (this.supportsTouchEvents)
        {
            this.interactionDOMElement.removeEventListener('touchstart', this.onPointerDown, true);
            this.interactionDOMElement.removeEventListener('touchcancel', this.onPointerCancel, true);
            this.interactionDOMElement.removeEventListener('touchend', this.onPointerUp, true);
            this.interactionDOMElement.removeEventListener('touchmove', this.onPointerMove, true);
        }

        this.interactionDOMElement = null;

        this.eventsAdded = false;
    };

    /**
     * Updates the state of interactive objects.
     * Invoked by a throttled ticker update from {@link PIXI.Ticker.system}.
     *
     * @param {number} deltaTime - time delta since last tick
     */
    InteractionManager.prototype.update = function update (deltaTime)
    {
        this._deltaTime += deltaTime;

        if (this._deltaTime < this.interactionFrequency)
        {
            return;
        }

        this._deltaTime = 0;

        if (!this.interactionDOMElement)
        {
            return;
        }

        // if the user move the mouse this check has already been done using the mouse move!
        if (this.didMove)
        {
            this.didMove = false;

            return;
        }

        this.cursor = null;

        // Resets the flag as set by a stopPropagation call. This flag is usually reset by a user interaction of any kind,
        // but there was a scenario of a display object moving under a static mouse cursor.
        // In this case, mouseover and mouseevents would not pass the flag test in dispatchEvent function
        for (var k in this.activeInteractionData)
        {
            // eslint-disable-next-line no-prototype-builtins
            if (this.activeInteractionData.hasOwnProperty(k))
            {
                var interactionData = this.activeInteractionData[k];

                if (interactionData.originalEvent && interactionData.pointerType !== 'touch')
                {
                    var interactionEvent = this.configureInteractionEventForDOMEvent(
                        this.eventData,
                        interactionData.originalEvent,
                        interactionData
                    );

                    this.processInteractive(
                        interactionEvent,
                        this.renderer._lastObjectRendered,
                        this.processPointerOverOut,
                        true
                    );
                }
            }
        }

        this.setCursorMode(this.cursor);
    };

    /**
     * Sets the current cursor mode, handling any callbacks or CSS style changes.
     *
     * @param {string} mode - cursor mode, a key from the cursorStyles dictionary
     */
    InteractionManager.prototype.setCursorMode = function setCursorMode (mode)
    {
        mode = mode || 'default';
        // if the mode didn't actually change, bail early
        if (this.currentCursorMode === mode)
        {
            return;
        }
        this.currentCursorMode = mode;
        var style = this.cursorStyles[mode];

        // only do things if there is a cursor style for it
        if (style)
        {
            switch (typeof style)
            {
                case 'string':
                    // string styles are handled as cursor CSS
                    this.interactionDOMElement.style.cursor = style;
                    break;
                case 'function':
                    // functions are just called, and passed the cursor mode
                    style(mode);
                    break;
                case 'object':
                    // if it is an object, assume that it is a dictionary of CSS styles,
                    // apply it to the interactionDOMElement
                    Object.assign(this.interactionDOMElement.style, style);
                    break;
            }
        }
        else if (typeof mode === 'string' && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode))
        {
            // if it mode is a string (not a Symbol) and cursorStyles doesn't have any entry
            // for the mode, then assume that the dev wants it to be CSS for the cursor.
            this.interactionDOMElement.style.cursor = mode;
        }
    };

    /**
     * Dispatches an event on the display object that was interacted with
     *
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - the display object in question
     * @param {string} eventString - the name of the event (e.g, mousedown)
     * @param {object} eventData - the event data object
     * @private
     */
    InteractionManager.prototype.dispatchEvent = function dispatchEvent (displayObject, eventString, eventData)
    {
        // Even if the event was stopped, at least dispatch any remaining events
        // for the same display object.
        if (!eventData.stopPropagationHint || displayObject === eventData.stopsPropagatingAt)
        {
            eventData.currentTarget = displayObject;
            eventData.type = eventString;

            displayObject.emit(eventString, eventData);

            if (displayObject[eventString])
            {
                displayObject[eventString](eventData);
            }
        }
    };

    /**
     * Puts a event on a queue to be dispatched later. This is used to guarantee correct
     * ordering of over/out events.
     *
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - the display object in question
     * @param {string} eventString - the name of the event (e.g, mousedown)
     * @param {object} eventData - the event data object
     * @private
     */
    InteractionManager.prototype.delayDispatchEvent = function delayDispatchEvent (displayObject, eventString, eventData)
    {
        this.delayedEvents.push({ displayObject: displayObject, eventString: eventString, eventData: eventData });
    };

    /**
     * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
     * resulting value is stored in the point. This takes into account the fact that the DOM
     * element could be scaled and positioned anywhere on the screen.
     *
     * @param  {PIXI.Point} point - the point that the result will be stored in
     * @param  {number} x - the x coord of the position to map
     * @param  {number} y - the y coord of the position to map
     */
    InteractionManager.prototype.mapPositionToPoint = function mapPositionToPoint (point, x, y)
    {
        var rect;

        // IE 11 fix
        if (!this.interactionDOMElement.parentElement)
        {
            rect = { x: 0, y: 0, width: 0, height: 0 };
        }
        else
        {
            rect = this.interactionDOMElement.getBoundingClientRect();
        }

        var resolutionMultiplier = 1.0 / this.resolution;

        point.x = ((x - rect.left) * (this.interactionDOMElement.width / rect.width)) * resolutionMultiplier;
        point.y = ((y - rect.top) * (this.interactionDOMElement.height / rect.height)) * resolutionMultiplier;
    };

    /**
     * This function is provides a neat way of crawling through the scene graph and running a
     * specified function on all interactive objects it finds. It will also take care of hit
     * testing the interactive objects and passes the hit across in the function.
     *
     * @protected
     * @param {PIXI.interaction.InteractionEvent} interactionEvent - event containing the point that
     *  is tested for collision
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - the displayObject
     *  that will be hit test (recursively crawls its children)
     * @param {Function} [func] - the function that will be called on each interactive object. The
     *  interactionEvent, displayObject and hit will be passed to the function
     * @param {boolean} [hitTest] - indicates whether we want to calculate hits
     *  or just iterate through all interactive objects
     */
    InteractionManager.prototype.processInteractive = function processInteractive (interactionEvent, displayObject, func, hitTest)
    {
        var hit = this.search.findHit(interactionEvent, displayObject, func, hitTest);

        var delayedEvents = this.delayedEvents;

        if (!delayedEvents.length)
        {
            return hit;
        }
        // Reset the propagation hint, because we start deeper in the tree again.
        interactionEvent.stopPropagationHint = false;

        var delayedLen = delayedEvents.length;

        this.delayedEvents = [];

        for (var i = 0; i < delayedLen; i++)
        {
            var ref = delayedEvents[i];
            var displayObject$1 = ref.displayObject;
            var eventString = ref.eventString;
            var eventData = ref.eventData;

            // When we reach the object we wanted to stop propagating at,
            // set the propagation hint.
            if (eventData.stopsPropagatingAt === displayObject$1)
            {
                eventData.stopPropagationHint = true;
            }

            this.dispatchEvent(displayObject$1, eventString, eventData);
        }

        return hit;
    };

    /**
     * Is called when the pointer button is pressed down on the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer button being pressed down
     */
    InteractionManager.prototype.onPointerDown = function onPointerDown (originalEvent)
    {
        // if we support touch events, then only use those for touch events, not pointer events
        if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') { return; }

        var events = this.normalizeToPointerData(originalEvent);

        /**
         * No need to prevent default on natural pointer events, as there are no side effects
         * Normalized events, however, may have the double mousedown/touchstart issue on the native android browser,
         * so still need to be prevented.
         */

        // Guaranteed that there will be at least one event in events, and all events must have the same pointer type

        if (this.autoPreventDefault && events[0].isNormalized)
        {
            var cancelable = originalEvent.cancelable || !('cancelable' in originalEvent);

            if (cancelable)
            {
                originalEvent.preventDefault();
            }
        }

        var eventLen = events.length;

        for (var i = 0; i < eventLen; i++)
        {
            var event = events[i];

            var interactionData = this.getInteractionDataForPointerId(event);

            var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

            interactionEvent.data.originalEvent = originalEvent;

            this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerDown, true);

            this.emit('pointerdown', interactionEvent);
            if (event.pointerType === 'touch')
            {
                this.emit('touchstart', interactionEvent);
            }
            // emit a mouse event for "pen" pointers, the way a browser would emit a fallback event
            else if (event.pointerType === 'mouse' || event.pointerType === 'pen')
            {
                var isRightButton = event.button === 2;

                this.emit(isRightButton ? 'rightdown' : 'mousedown', this.eventData);
            }
        }
    };

    /**
     * Processes the result of the pointer down check and dispatches the event if need be
     *
     * @private
     * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */
    InteractionManager.prototype.processPointerDown = function processPointerDown (interactionEvent, displayObject, hit)
    {
        var data = interactionEvent.data;
        var id = interactionEvent.data.identifier;

        if (hit)
        {
            if (!displayObject.trackedPointers[id])
            {
                displayObject.trackedPointers[id] = new InteractionTrackingData(id);
            }
            this.dispatchEvent(displayObject, 'pointerdown', interactionEvent);

            if (data.pointerType === 'touch')
            {
                this.dispatchEvent(displayObject, 'touchstart', interactionEvent);
            }
            else if (data.pointerType === 'mouse' || data.pointerType === 'pen')
            {
                var isRightButton = data.button === 2;

                if (isRightButton)
                {
                    displayObject.trackedPointers[id].rightDown = true;
                }
                else
                {
                    displayObject.trackedPointers[id].leftDown = true;
                }

                this.dispatchEvent(displayObject, isRightButton ? 'rightdown' : 'mousedown', interactionEvent);
            }
        }
    };

    /**
     * Is called when the pointer button is released on the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer button being released
     * @param {boolean} cancelled - true if the pointer is cancelled
     * @param {Function} func - Function passed to {@link processInteractive}
     */
    InteractionManager.prototype.onPointerComplete = function onPointerComplete (originalEvent, cancelled, func)
    {
        var events = this.normalizeToPointerData(originalEvent);

        var eventLen = events.length;

        // if the event wasn't targeting our canvas, then consider it to be pointerupoutside
        // in all cases (unless it was a pointercancel)
        var eventAppend = originalEvent.target !== this.interactionDOMElement ? 'outside' : '';

        for (var i = 0; i < eventLen; i++)
        {
            var event = events[i];

            var interactionData = this.getInteractionDataForPointerId(event);

            var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

            interactionEvent.data.originalEvent = originalEvent;

            // perform hit testing for events targeting our canvas or cancel events
            this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, func, cancelled || !eventAppend);

            this.emit(cancelled ? 'pointercancel' : ("pointerup" + eventAppend), interactionEvent);

            if (event.pointerType === 'mouse' || event.pointerType === 'pen')
            {
                var isRightButton = event.button === 2;

                this.emit(isRightButton ? ("rightup" + eventAppend) : ("mouseup" + eventAppend), interactionEvent);
            }
            else if (event.pointerType === 'touch')
            {
                this.emit(cancelled ? 'touchcancel' : ("touchend" + eventAppend), interactionEvent);
                this.releaseInteractionDataForPointerId(event.pointerId, interactionData);
            }
        }
    };

    /**
     * Is called when the pointer button is cancelled
     *
     * @private
     * @param {PointerEvent} event - The DOM event of a pointer button being released
     */
    InteractionManager.prototype.onPointerCancel = function onPointerCancel (event)
    {
        // if we support touch events, then only use those for touch events, not pointer events
        if (this.supportsTouchEvents && event.pointerType === 'touch') { return; }

        this.onPointerComplete(event, true, this.processPointerCancel);
    };

    /**
     * Processes the result of the pointer cancel check and dispatches the event if need be
     *
     * @private
     * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - The display object that was tested
     */
    InteractionManager.prototype.processPointerCancel = function processPointerCancel (interactionEvent, displayObject)
    {
        var data = interactionEvent.data;

        var id = interactionEvent.data.identifier;

        if (displayObject.trackedPointers[id] !== undefined)
        {
            delete displayObject.trackedPointers[id];
            this.dispatchEvent(displayObject, 'pointercancel', interactionEvent);

            if (data.pointerType === 'touch')
            {
                this.dispatchEvent(displayObject, 'touchcancel', interactionEvent);
            }
        }
    };

    /**
     * Is called when the pointer button is released on the renderer element
     *
     * @private
     * @param {PointerEvent} event - The DOM event of a pointer button being released
     */
    InteractionManager.prototype.onPointerUp = function onPointerUp (event)
    {
        // if we support touch events, then only use those for touch events, not pointer events
        if (this.supportsTouchEvents && event.pointerType === 'touch') { return; }

        this.onPointerComplete(event, false, this.processPointerUp);
    };

    /**
     * Processes the result of the pointer up check and dispatches the event if need be
     *
     * @private
     * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */
    InteractionManager.prototype.processPointerUp = function processPointerUp (interactionEvent, displayObject, hit)
    {
        var data = interactionEvent.data;

        var id = interactionEvent.data.identifier;

        var trackingData = displayObject.trackedPointers[id];

        var isTouch = data.pointerType === 'touch';

        var isMouse = (data.pointerType === 'mouse' || data.pointerType === 'pen');
        // need to track mouse down status in the mouse block so that we can emit
        // event in a later block
        var isMouseTap = false;

        // Mouse only
        if (isMouse)
        {
            var isRightButton = data.button === 2;

            var flags = InteractionTrackingData.FLAGS;

            var test = isRightButton ? flags.RIGHT_DOWN : flags.LEFT_DOWN;

            var isDown = trackingData !== undefined && (trackingData.flags & test);

            if (hit)
            {
                this.dispatchEvent(displayObject, isRightButton ? 'rightup' : 'mouseup', interactionEvent);

                if (isDown)
                {
                    this.dispatchEvent(displayObject, isRightButton ? 'rightclick' : 'click', interactionEvent);
                    // because we can confirm that the mousedown happened on this object, flag for later emit of pointertap
                    isMouseTap = true;
                }
            }
            else if (isDown)
            {
                this.dispatchEvent(displayObject, isRightButton ? 'rightupoutside' : 'mouseupoutside', interactionEvent);
            }
            // update the down state of the tracking data
            if (trackingData)
            {
                if (isRightButton)
                {
                    trackingData.rightDown = false;
                }
                else
                {
                    trackingData.leftDown = false;
                }
            }
        }

        // Pointers and Touches, and Mouse
        if (hit)
        {
            this.dispatchEvent(displayObject, 'pointerup', interactionEvent);
            if (isTouch) { this.dispatchEvent(displayObject, 'touchend', interactionEvent); }

            if (trackingData)
            {
                // emit pointertap if not a mouse, or if the mouse block decided it was a tap
                if (!isMouse || isMouseTap)
                {
                    this.dispatchEvent(displayObject, 'pointertap', interactionEvent);
                }
                if (isTouch)
                {
                    this.dispatchEvent(displayObject, 'tap', interactionEvent);
                    // touches are no longer over (if they ever were) when we get the touchend
                    // so we should ensure that we don't keep pretending that they are
                    trackingData.over = false;
                }
            }
        }
        else if (trackingData)
        {
            this.dispatchEvent(displayObject, 'pointerupoutside', interactionEvent);
            if (isTouch) { this.dispatchEvent(displayObject, 'touchendoutside', interactionEvent); }
        }
        // Only remove the tracking data if there is no over/down state still associated with it
        if (trackingData && trackingData.none)
        {
            delete displayObject.trackedPointers[id];
        }
    };

    /**
     * Is called when the pointer moves across the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer moving
     */
    InteractionManager.prototype.onPointerMove = function onPointerMove (originalEvent)
    {
        // if we support touch events, then only use those for touch events, not pointer events
        if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') { return; }

        var events = this.normalizeToPointerData(originalEvent);

        if (events[0].pointerType === 'mouse' || events[0].pointerType === 'pen')
        {
            this.didMove = true;

            this.cursor = null;
        }

        var eventLen = events.length;

        for (var i = 0; i < eventLen; i++)
        {
            var event = events[i];

            var interactionData = this.getInteractionDataForPointerId(event);

            var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

            interactionEvent.data.originalEvent = originalEvent;

            this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerMove, true);

            this.emit('pointermove', interactionEvent);
            if (event.pointerType === 'touch') { this.emit('touchmove', interactionEvent); }
            if (event.pointerType === 'mouse' || event.pointerType === 'pen') { this.emit('mousemove', interactionEvent); }
        }

        if (events[0].pointerType === 'mouse')
        {
            this.setCursorMode(this.cursor);

            // TODO BUG for parents interactive object (border order issue)
        }
    };

    /**
     * Processes the result of the pointer move check and dispatches the event if need be
     *
     * @private
     * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */
    InteractionManager.prototype.processPointerMove = function processPointerMove (interactionEvent, displayObject, hit)
    {
        var data = interactionEvent.data;

        var isTouch = data.pointerType === 'touch';

        var isMouse = (data.pointerType === 'mouse' || data.pointerType === 'pen');

        if (isMouse)
        {
            this.processPointerOverOut(interactionEvent, displayObject, hit);
        }

        if (!this.moveWhenInside || hit)
        {
            this.dispatchEvent(displayObject, 'pointermove', interactionEvent);
            if (isTouch) { this.dispatchEvent(displayObject, 'touchmove', interactionEvent); }
            if (isMouse) { this.dispatchEvent(displayObject, 'mousemove', interactionEvent); }
        }
    };

    /**
     * Is called when the pointer is moved out of the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer being moved out
     */
    InteractionManager.prototype.onPointerOut = function onPointerOut (originalEvent)
    {
        // if we support touch events, then only use those for touch events, not pointer events
        if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') { return; }

        var events = this.normalizeToPointerData(originalEvent);

        // Only mouse and pointer can call onPointerOut, so events will always be length 1
        var event = events[0];

        if (event.pointerType === 'mouse')
        {
            this.mouseOverRenderer = false;
            this.setCursorMode(null);
        }

        var interactionData = this.getInteractionDataForPointerId(event);

        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

        interactionEvent.data.originalEvent = event;

        this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, false);

        this.emit('pointerout', interactionEvent);
        if (event.pointerType === 'mouse' || event.pointerType === 'pen')
        {
            this.emit('mouseout', interactionEvent);
        }
        else
        {
            // we can get touchleave events after touchend, so we want to make sure we don't
            // introduce memory leaks
            this.releaseInteractionDataForPointerId(interactionData.identifier);
        }
    };

    /**
     * Processes the result of the pointer over/out check and dispatches the event if need be
     *
     * @private
     * @param {PIXI.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */
    InteractionManager.prototype.processPointerOverOut = function processPointerOverOut (interactionEvent, displayObject, hit)
    {
        var data = interactionEvent.data;

        var id = interactionEvent.data.identifier;

        var isMouse = (data.pointerType === 'mouse' || data.pointerType === 'pen');

        var trackingData = displayObject.trackedPointers[id];

        // if we just moused over the display object, then we need to track that state
        if (hit && !trackingData)
        {
            trackingData = displayObject.trackedPointers[id] = new InteractionTrackingData(id);
        }

        if (trackingData === undefined) { return; }

        if (hit && this.mouseOverRenderer)
        {
            if (!trackingData.over)
            {
                trackingData.over = true;
                this.delayDispatchEvent(displayObject, 'pointerover', interactionEvent);
                if (isMouse)
                {
                    this.delayDispatchEvent(displayObject, 'mouseover', interactionEvent);
                }
            }

            // only change the cursor if it has not already been changed (by something deeper in the
            // display tree)
            if (isMouse && this.cursor === null)
            {
                this.cursor = displayObject.cursor;
            }
        }
        else if (trackingData.over)
        {
            trackingData.over = false;
            this.dispatchEvent(displayObject, 'pointerout', this.eventData);
            if (isMouse)
            {
                this.dispatchEvent(displayObject, 'mouseout', interactionEvent);
            }
            // if there is no mouse down information for the pointer, then it is safe to delete
            if (trackingData.none)
            {
                delete displayObject.trackedPointers[id];
            }
        }
    };

    /**
     * Is called when the pointer is moved into the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer button being moved into the renderer view
     */
    InteractionManager.prototype.onPointerOver = function onPointerOver (originalEvent)
    {
        var events = this.normalizeToPointerData(originalEvent);

        // Only mouse and pointer can call onPointerOver, so events will always be length 1
        var event = events[0];

        var interactionData = this.getInteractionDataForPointerId(event);

        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

        interactionEvent.data.originalEvent = event;

        if (event.pointerType === 'mouse')
        {
            this.mouseOverRenderer = true;
        }

        this.emit('pointerover', interactionEvent);
        if (event.pointerType === 'mouse' || event.pointerType === 'pen')
        {
            this.emit('mouseover', interactionEvent);
        }
    };

    /**
     * Get InteractionData for a given pointerId. Store that data as well
     *
     * @private
     * @param {PointerEvent} event - Normalized pointer event, output from normalizeToPointerData
     * @return {PIXI.interaction.InteractionData} - Interaction data for the given pointer identifier
     */
    InteractionManager.prototype.getInteractionDataForPointerId = function getInteractionDataForPointerId (event)
    {
        var pointerId = event.pointerId;

        var interactionData;

        if (pointerId === MOUSE_POINTER_ID || event.pointerType === 'mouse')
        {
            interactionData = this.mouse;
        }
        else if (this.activeInteractionData[pointerId])
        {
            interactionData = this.activeInteractionData[pointerId];
        }
        else
        {
            interactionData = this.interactionDataPool.pop() || new InteractionData();
            interactionData.identifier = pointerId;
            this.activeInteractionData[pointerId] = interactionData;
        }
        // copy properties from the event, so that we can make sure that touch/pointer specific
        // data is available
        interactionData.copyEvent(event);

        return interactionData;
    };

    /**
     * Return unused InteractionData to the pool, for a given pointerId
     *
     * @private
     * @param {number} pointerId - Identifier from a pointer event
     */
    InteractionManager.prototype.releaseInteractionDataForPointerId = function releaseInteractionDataForPointerId (pointerId)
    {
        var interactionData = this.activeInteractionData[pointerId];

        if (interactionData)
        {
            delete this.activeInteractionData[pointerId];
            interactionData.reset();
            this.interactionDataPool.push(interactionData);
        }
    };

    /**
     * Configure an InteractionEvent to wrap a DOM PointerEvent and InteractionData
     *
     * @private
     * @param {PIXI.interaction.InteractionEvent} interactionEvent - The event to be configured
     * @param {PointerEvent} pointerEvent - The DOM event that will be paired with the InteractionEvent
     * @param {PIXI.interaction.InteractionData} interactionData - The InteractionData that will be paired
     *        with the InteractionEvent
     * @return {PIXI.interaction.InteractionEvent} the interaction event that was passed in
     */
    InteractionManager.prototype.configureInteractionEventForDOMEvent = function configureInteractionEventForDOMEvent (interactionEvent, pointerEvent, interactionData)
    {
        interactionEvent.data = interactionData;

        this.mapPositionToPoint(interactionData.global, pointerEvent.clientX, pointerEvent.clientY);

        // Not really sure why this is happening, but it's how a previous version handled things
        if (pointerEvent.pointerType === 'touch')
        {
            pointerEvent.globalX = interactionData.global.x;
            pointerEvent.globalY = interactionData.global.y;
        }

        interactionData.originalEvent = pointerEvent;
        interactionEvent.reset();

        return interactionEvent;
    };

    /**
     * Ensures that the original event object contains all data that a regular pointer event would have
     *
     * @private
     * @param {TouchEvent|MouseEvent|PointerEvent} event - The original event data from a touch or mouse event
     * @return {PointerEvent[]} An array containing a single normalized pointer event, in the case of a pointer
     *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
     */
    InteractionManager.prototype.normalizeToPointerData = function normalizeToPointerData (event)
    {
        var normalizedEvents = [];

        if (this.supportsTouchEvents && event instanceof TouchEvent)
        {
            for (var i = 0, li = event.changedTouches.length; i < li; i++)
            {
                var touch = event.changedTouches[i];

                if (typeof touch.button === 'undefined') { touch.button = event.touches.length ? 1 : 0; }
                if (typeof touch.buttons === 'undefined') { touch.buttons = event.touches.length ? 1 : 0; }
                if (typeof touch.isPrimary === 'undefined')
                {
                    touch.isPrimary = event.touches.length === 1 && event.type === 'touchstart';
                }
                if (typeof touch.width === 'undefined') { touch.width = touch.radiusX || 1; }
                if (typeof touch.height === 'undefined') { touch.height = touch.radiusY || 1; }
                if (typeof touch.tiltX === 'undefined') { touch.tiltX = 0; }
                if (typeof touch.tiltY === 'undefined') { touch.tiltY = 0; }
                if (typeof touch.pointerType === 'undefined') { touch.pointerType = 'touch'; }
                if (typeof touch.pointerId === 'undefined') { touch.pointerId = touch.identifier || 0; }
                if (typeof touch.pressure === 'undefined') { touch.pressure = touch.force || 0.5; }
                if (typeof touch.twist === 'undefined') { touch.twist = 0; }
                if (typeof touch.tangentialPressure === 'undefined') { touch.tangentialPressure = 0; }
                // TODO: Remove these, as layerX/Y is not a standard, is deprecated, has uneven
                // support, and the fill ins are not quite the same
                // offsetX/Y might be okay, but is not the same as clientX/Y when the canvas's top
                // left is not 0,0 on the page
                if (typeof touch.layerX === 'undefined') { touch.layerX = touch.offsetX = touch.clientX; }
                if (typeof touch.layerY === 'undefined') { touch.layerY = touch.offsetY = touch.clientY; }

                // mark the touch as normalized, just so that we know we did it
                touch.isNormalized = true;

                normalizedEvents.push(touch);
            }
        }
        // apparently PointerEvent subclasses MouseEvent, so yay
        else if (event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof window.PointerEvent)))
        {
            if (typeof event.isPrimary === 'undefined') { event.isPrimary = true; }
            if (typeof event.width === 'undefined') { event.width = 1; }
            if (typeof event.height === 'undefined') { event.height = 1; }
            if (typeof event.tiltX === 'undefined') { event.tiltX = 0; }
            if (typeof event.tiltY === 'undefined') { event.tiltY = 0; }
            if (typeof event.pointerType === 'undefined') { event.pointerType = 'mouse'; }
            if (typeof event.pointerId === 'undefined') { event.pointerId = MOUSE_POINTER_ID; }
            if (typeof event.pressure === 'undefined') { event.pressure = 0.5; }
            if (typeof event.twist === 'undefined') { event.twist = 0; }
            if (typeof event.tangentialPressure === 'undefined') { event.tangentialPressure = 0; }

            // mark the mouse event as normalized, just so that we know we did it
            event.isNormalized = true;

            normalizedEvents.push(event);
        }
        else
        {
            normalizedEvents.push(event);
        }

        return normalizedEvents;
    };

    /**
     * Destroys the interaction manager
     *
     */
    InteractionManager.prototype.destroy = function destroy ()
    {
        this.removeEvents();

        this.removeAllListeners();

        this.renderer = null;

        this.mouse = null;

        this.eventData = null;

        this.interactionDOMElement = null;

        this.onPointerDown = null;
        this.processPointerDown = null;

        this.onPointerUp = null;
        this.processPointerUp = null;

        this.onPointerCancel = null;
        this.processPointerCancel = null;

        this.onPointerMove = null;
        this.processPointerMove = null;

        this.onPointerOut = null;
        this.processPointerOverOut = null;

        this.onPointerOver = null;

        this.search = null;
    };

    return InteractionManager;
}(_pixi_utils__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]));

/**
 * This namespace contains a renderer plugin for handling mouse, pointer, and touch events.
 *
 * Do not instantiate this plugin directly. It is available from the `renderer.plugins` property.
 * See {@link PIXI.CanvasRenderer#plugins} or {@link PIXI.Renderer#plugins}.
 * @namespace PIXI.interaction
 */


//# sourceMappingURL=interaction.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/math/lib/math.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEG_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Ellipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ObservablePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PI_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RAD_TO_DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RoundedRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return groupD8; });
/*!
 * @pixi/math - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
/**
 * Common interface for points. Both Point and ObservablePoint implement it
 * @memberof PIXI
 * @interface IPoint
 */
/**
 * X coord
 * @memberof PIXI.IPoint#
 * @member {number} x
 */
/**
 * Y coord
 * @memberof PIXI.IPoint#
 * @member {number} y
 */
/**
 * Sets the point to a new x and y position.
 * If y is omitted, both x and y will be set to x.
 *
 * @method set
 * @memberof PIXI.IPoint#
 * @param {number} [x=0] - position of the point on the x axis
 * @param {number} [y=x] - position of the point on the y axis
 */
/**
 * Copies x and y from the given point
 * @method copyFrom
 * @memberof PIXI.IPoint#
 * @param {PIXI.IPoint} p - The point to copy from
 * @returns {this} Returns itself.
 */
/**
 * Copies x and y into the given point
 * @method copyTo
 * @memberof PIXI.IPoint#
 * @param {PIXI.IPoint} p - The point to copy.
 * @returns {PIXI.IPoint} Given point with values updated
 */
/**
 * Returns true if the given point is equal to this point
 *
 * @method equals
 * @memberof PIXI.IPoint#
 * @param {PIXI.IPoint} p - The point to check
 * @returns {boolean} Whether the given point equal to this point
 */

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @memberof PIXI
 * @implements IPoint
 */
var Point = /** @class */ (function () {
    /**
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        /**
         * @member {number}
         * @default 0
         */
        this.x = x;
        /**
         * @member {number}
         * @default 0
         */
        this.y = y;
    }
    /**
     * Creates a clone of this point
     *
     * @return {PIXI.Point} a copy of the point
     */
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    /**
     * Copies x and y from the given point
     *
     * @param {PIXI.IPoint} p - The point to copy from
     * @returns {this} Returns itself.
     */
    Point.prototype.copyFrom = function (p) {
        this.set(p.x, p.y);
        return this;
    };
    /**
     * Copies x and y into the given point
     *
     * @param {PIXI.IPoint} p - The point to copy.
     * @returns {PIXI.IPoint} Given point with values updated
     */
    Point.prototype.copyTo = function (p) {
        p.set(this.x, this.y);
        return p;
    };
    /**
     * Returns true if the given point is equal to this point
     *
     * @param {PIXI.IPoint} p - The point to check
     * @returns {boolean} Whether the given point equal to this point
     */
    Point.prototype.equals = function (p) {
        return (p.x === this.x) && (p.y === this.y);
    };
    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=x] - position of the point on the y axis
     */
    Point.prototype.set = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        this.x = x;
        this.y = y;
    };
    return Point;
}());

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * An ObservablePoint is a point that triggers a callback when the point's position is changed.
 *
 * @class
 * @memberof PIXI
 * @implements IPoint
 */
var ObservablePoint = /** @class */ (function () {
    /**
     * @param {Function} cb - callback when changed
     * @param {object} scope - owner of callback
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    function ObservablePoint(cb, scope, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
        this.cb = cb;
        this.scope = scope;
    }
    /**
     * Creates a clone of this point.
     * The callback and scope params can be overidden otherwise they will default
     * to the clone object's values.
     *
     * @override
     * @param {Function} [cb=null] - callback when changed
     * @param {object} [scope=null] - owner of callback
     * @return {PIXI.ObservablePoint} a copy of the point
     */
    ObservablePoint.prototype.clone = function (cb, scope) {
        if (cb === void 0) { cb = this.cb; }
        if (scope === void 0) { scope = this.scope; }
        return new ObservablePoint(cb, scope, this._x, this._y);
    };
    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=x] - position of the point on the y axis
     */
    ObservablePoint.prototype.set = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        if (this._x !== x || this._y !== y) {
            this._x = x;
            this._y = y;
            this.cb.call(this.scope);
        }
    };
    /**
     * Copies x and y from the given point
     *
     * @param {PIXI.IPoint} p - The point to copy from.
     * @returns {this} Returns itself.
     */
    ObservablePoint.prototype.copyFrom = function (p) {
        if (this._x !== p.x || this._y !== p.y) {
            this._x = p.x;
            this._y = p.y;
            this.cb.call(this.scope);
        }
        return this;
    };
    /**
     * Copies x and y into the given point
     *
     * @param {PIXI.IPoint} p - The point to copy.
     * @returns {PIXI.IPoint} Given point with values updated
     */
    ObservablePoint.prototype.copyTo = function (p) {
        p.set(this._x, this._y);
        return p;
    };
    /**
     * Returns true if the given point is equal to this point
     *
     * @param {PIXI.IPoint} p - The point to check
     * @returns {boolean} Whether the given point equal to this point
     */
    ObservablePoint.prototype.equals = function (p) {
        return (p.x === this._x) && (p.y === this._y);
    };
    Object.defineProperty(ObservablePoint.prototype, "x", {
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (this._x !== value) {
                this._x = value;
                this.cb.call(this.scope);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservablePoint.prototype, "y", {
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (this._y !== value) {
                this._y = value;
                this.cb.call(this.scope);
            }
        },
        enumerable: true,
        configurable: true
    });
    return ObservablePoint;
}());

/**
 * Two Pi.
 *
 * @static
 * @constant {number} PI_2
 * @memberof PIXI
 */
var PI_2 = Math.PI * 2;
/**
 * Conversion factor for converting radians to degrees.
 *
 * @static
 * @constant {number} RAD_TO_DEG
 * @memberof PIXI
 */
var RAD_TO_DEG = 180 / Math.PI;
/**
 * Conversion factor for converting degrees to radians.
 *
 * @static
 * @constant {number} DEG_TO_RAD
 * @memberof PIXI
 */
var DEG_TO_RAD = Math.PI / 180;
var SHAPES;
(function (SHAPES) {
    SHAPES[SHAPES["POLY"] = 0] = "POLY";
    SHAPES[SHAPES["RECT"] = 1] = "RECT";
    SHAPES[SHAPES["CIRC"] = 2] = "CIRC";
    SHAPES[SHAPES["ELIP"] = 3] = "ELIP";
    SHAPES[SHAPES["RREC"] = 4] = "RREC";
})(SHAPES || (SHAPES = {}));
/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @constant
 * @name SHAPES
 * @memberof PIXI
 * @type {enum}
 * @property {number} POLY Polygon
 * @property {number} RECT Rectangle
 * @property {number} CIRC Circle
 * @property {number} ELIP Ellipse
 * @property {number} RREC Rounded Rectangle
 * @enum {number}
 */

/**
 * The PixiJS Matrix as a class makes it a lot faster.
 *
 * Here is a representation of it:
 * ```js
 * | a | c | tx|
 * | b | d | ty|
 * | 0 | 0 | 1 |
 * ```
 * @class
 * @memberof PIXI
 */
var Matrix = /** @class */ (function () {
    /**
     * @param {number} [a=1] - x scale
     * @param {number} [b=0] - x skew
     * @param {number} [c=0] - y skew
     * @param {number} [d=1] - y scale
     * @param {number} [tx=0] - x translation
     * @param {number} [ty=0] - y translation
     */
    function Matrix(a, b, c, d, tx, ty) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 0; }
        if (c === void 0) { c = 0; }
        if (d === void 0) { d = 1; }
        if (tx === void 0) { tx = 0; }
        if (ty === void 0) { ty = 0; }
        this.array = null;
        /**
         * @member {number}
         * @default 1
         */
        this.a = a;
        /**
         * @member {number}
         * @default 0
         */
        this.b = b;
        /**
         * @member {number}
         * @default 0
         */
        this.c = c;
        /**
         * @member {number}
         * @default 1
         */
        this.d = d;
        /**
         * @member {number}
         * @default 0
         */
        this.tx = tx;
        /**
         * @member {number}
         * @default 0
         */
        this.ty = ty;
    }
    /**
     * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
     *
     * a = array[0]
     * b = array[1]
     * c = array[3]
     * d = array[4]
     * tx = array[2]
     * ty = array[5]
     *
     * @param {number[]} array - The array that the matrix will be populated from.
     */
    Matrix.prototype.fromArray = function (array) {
        this.a = array[0];
        this.b = array[1];
        this.c = array[3];
        this.d = array[4];
        this.tx = array[2];
        this.ty = array[5];
    };
    /**
     * sets the matrix properties
     *
     * @param {number} a - Matrix component
     * @param {number} b - Matrix component
     * @param {number} c - Matrix component
     * @param {number} d - Matrix component
     * @param {number} tx - Matrix component
     * @param {number} ty - Matrix component
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.set = function (a, b, c, d, tx, ty) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    };
    /**
     * Creates an array from the current Matrix object.
     *
     * @param {boolean} transpose - Whether we need to transpose the matrix or not
     * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
     * @return {number[]} the newly created array which contains the matrix
     */
    Matrix.prototype.toArray = function (transpose, out) {
        if (!this.array) {
            this.array = new Float32Array(9);
        }
        var array = out || this.array;
        if (transpose) {
            array[0] = this.a;
            array[1] = this.b;
            array[2] = 0;
            array[3] = this.c;
            array[4] = this.d;
            array[5] = 0;
            array[6] = this.tx;
            array[7] = this.ty;
            array[8] = 1;
        }
        else {
            array[0] = this.a;
            array[1] = this.c;
            array[2] = this.tx;
            array[3] = this.b;
            array[4] = this.d;
            array[5] = this.ty;
            array[6] = 0;
            array[7] = 0;
            array[8] = 1;
        }
        return array;
    };
    /**
     * Get a new position with the current transformation applied.
     * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
     *
     * @param {PIXI.Point} pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {PIXI.Point} The new point, transformed through this matrix
     */
    Matrix.prototype.apply = function (pos, newPos) {
        newPos = newPos || new Point();
        var x = pos.x;
        var y = pos.y;
        newPos.x = (this.a * x) + (this.c * y) + this.tx;
        newPos.y = (this.b * x) + (this.d * y) + this.ty;
        return newPos;
    };
    /**
     * Get a new position with the inverse of the current transformation applied.
     * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
     *
     * @param {PIXI.Point} pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {PIXI.Point} The new point, inverse-transformed through this matrix
     */
    Matrix.prototype.applyInverse = function (pos, newPos) {
        newPos = newPos || new Point();
        var id = 1 / ((this.a * this.d) + (this.c * -this.b));
        var x = pos.x;
        var y = pos.y;
        newPos.x = (this.d * id * x) + (-this.c * id * y) + (((this.ty * this.c) - (this.tx * this.d)) * id);
        newPos.y = (this.a * id * y) + (-this.b * id * x) + (((-this.ty * this.a) + (this.tx * this.b)) * id);
        return newPos;
    };
    /**
     * Translates the matrix on the x and y.
     *
     * @param {number} x How much to translate x by
     * @param {number} y How much to translate y by
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.translate = function (x, y) {
        this.tx += x;
        this.ty += y;
        return this;
    };
    /**
     * Applies a scale transformation to the matrix.
     *
     * @param {number} x The amount to scale horizontally
     * @param {number} y The amount to scale vertically
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.scale = function (x, y) {
        this.a *= x;
        this.d *= y;
        this.c *= x;
        this.b *= y;
        this.tx *= x;
        this.ty *= y;
        return this;
    };
    /**
     * Applies a rotation transformation to the matrix.
     *
     * @param {number} angle - The angle in radians.
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.rotate = function (angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var a1 = this.a;
        var c1 = this.c;
        var tx1 = this.tx;
        this.a = (a1 * cos) - (this.b * sin);
        this.b = (a1 * sin) + (this.b * cos);
        this.c = (c1 * cos) - (this.d * sin);
        this.d = (c1 * sin) + (this.d * cos);
        this.tx = (tx1 * cos) - (this.ty * sin);
        this.ty = (tx1 * sin) + (this.ty * cos);
        return this;
    };
    /**
     * Appends the given Matrix to this Matrix.
     *
     * @param {PIXI.Matrix} matrix - The matrix to append.
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.append = function (matrix) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        this.a = (matrix.a * a1) + (matrix.b * c1);
        this.b = (matrix.a * b1) + (matrix.b * d1);
        this.c = (matrix.c * a1) + (matrix.d * c1);
        this.d = (matrix.c * b1) + (matrix.d * d1);
        this.tx = (matrix.tx * a1) + (matrix.ty * c1) + this.tx;
        this.ty = (matrix.tx * b1) + (matrix.ty * d1) + this.ty;
        return this;
    };
    /**
     * Sets the matrix based on all the available properties
     *
     * @param {number} x - Position on the x axis
     * @param {number} y - Position on the y axis
     * @param {number} pivotX - Pivot on the x axis
     * @param {number} pivotY - Pivot on the y axis
     * @param {number} scaleX - Scale on the x axis
     * @param {number} scaleY - Scale on the y axis
     * @param {number} rotation - Rotation in radians
     * @param {number} skewX - Skew on the x axis
     * @param {number} skewY - Skew on the y axis
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.setTransform = function (x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
        this.a = Math.cos(rotation + skewY) * scaleX;
        this.b = Math.sin(rotation + skewY) * scaleX;
        this.c = -Math.sin(rotation - skewX) * scaleY;
        this.d = Math.cos(rotation - skewX) * scaleY;
        this.tx = x - ((pivotX * this.a) + (pivotY * this.c));
        this.ty = y - ((pivotX * this.b) + (pivotY * this.d));
        return this;
    };
    /**
     * Prepends the given Matrix to this Matrix.
     *
     * @param {PIXI.Matrix} matrix - The matrix to prepend
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.prepend = function (matrix) {
        var tx1 = this.tx;
        if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
            var a1 = this.a;
            var c1 = this.c;
            this.a = (a1 * matrix.a) + (this.b * matrix.c);
            this.b = (a1 * matrix.b) + (this.b * matrix.d);
            this.c = (c1 * matrix.a) + (this.d * matrix.c);
            this.d = (c1 * matrix.b) + (this.d * matrix.d);
        }
        this.tx = (tx1 * matrix.a) + (this.ty * matrix.c) + matrix.tx;
        this.ty = (tx1 * matrix.b) + (this.ty * matrix.d) + matrix.ty;
        return this;
    };
    /**
     * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
     *
     * @param {PIXI.Transform} transform - The transform to apply the properties to.
     * @return {PIXI.Transform} The transform with the newly applied properties
     */
    Matrix.prototype.decompose = function (transform) {
        // sort out rotation / skew..
        var a = this.a;
        var b = this.b;
        var c = this.c;
        var d = this.d;
        var skewX = -Math.atan2(-c, d);
        var skewY = Math.atan2(b, a);
        var delta = Math.abs(skewX + skewY);
        if (delta < 0.00001 || Math.abs(PI_2 - delta) < 0.00001) {
            transform.rotation = skewY;
            transform.skew.x = transform.skew.y = 0;
        }
        else {
            transform.rotation = 0;
            transform.skew.x = skewX;
            transform.skew.y = skewY;
        }
        // next set scale
        transform.scale.x = Math.sqrt((a * a) + (b * b));
        transform.scale.y = Math.sqrt((c * c) + (d * d));
        // next set position
        transform.position.x = this.tx;
        transform.position.y = this.ty;
        return transform;
    };
    /**
     * Inverts this matrix
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.invert = function () {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var n = (a1 * d1) - (b1 * c1);
        this.a = d1 / n;
        this.b = -b1 / n;
        this.c = -c1 / n;
        this.d = a1 / n;
        this.tx = ((c1 * this.ty) - (d1 * tx1)) / n;
        this.ty = -((a1 * this.ty) - (b1 * tx1)) / n;
        return this;
    };
    /**
     * Resets this Matrix to an identity (default) matrix.
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */
    Matrix.prototype.identity = function () {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        return this;
    };
    /**
     * Creates a new Matrix object with the same values as this one.
     *
     * @return {PIXI.Matrix} A copy of this matrix. Good for chaining method calls.
     */
    Matrix.prototype.clone = function () {
        var matrix = new Matrix();
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
    };
    /**
     * Changes the values of the given matrix to be the same as the ones in this matrix
     *
     * @param {PIXI.Matrix} matrix - The matrix to copy to.
     * @return {PIXI.Matrix} The matrix given in parameter with its values updated.
     */
    Matrix.prototype.copyTo = function (matrix) {
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
    };
    /**
     * Changes the values of the matrix to be the same as the ones in given matrix
     *
     * @param {PIXI.Matrix} matrix - The matrix to copy from.
     * @return {PIXI.Matrix} this
     */
    Matrix.prototype.copyFrom = function (matrix) {
        this.a = matrix.a;
        this.b = matrix.b;
        this.c = matrix.c;
        this.d = matrix.d;
        this.tx = matrix.tx;
        this.ty = matrix.ty;
        return this;
    };
    Object.defineProperty(Matrix, "IDENTITY", {
        /**
         * A default (identity) matrix
         *
         * @static
         * @const
         * @member {PIXI.Matrix}
         */
        get: function () {
            return new Matrix();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix, "TEMP_MATRIX", {
        /**
         * A temp matrix
         *
         * @static
         * @const
         * @member {PIXI.Matrix}
         */
        get: function () {
            return new Matrix();
        },
        enumerable: true,
        configurable: true
    });
    return Matrix;
}());

// Your friendly neighbour https://en.wikipedia.org/wiki/Dihedral_group
/*
 * Transform matrix for operation n is:
 * | ux | vx |
 * | uy | vy |
 */
var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
/**
 * [Cayley Table]{@link https://en.wikipedia.org/wiki/Cayley_table}
 * for the composition of each rotation in the dihederal group D8.
 *
 * @type number[][]
 * @private
 */
var rotationCayley = [];
/**
 * Matrices for each `GD8Symmetry` rotation.
 *
 * @type Matrix[]
 * @private
 */
var rotationMatrices = [];
/*
 * Alias for {@code Math.sign}.
 */
var signum = Math.sign;
/*
 * Initializes `rotationCayley` and `rotationMatrices`. It is called
 * only once below.
 */
function init() {
    for (var i = 0; i < 16; i++) {
        var row = [];
        rotationCayley.push(row);
        for (var j = 0; j < 16; j++) {
            /* Multiplies rotation matrices i and j. */
            var _ux = signum((ux[i] * ux[j]) + (vx[i] * uy[j]));
            var _uy = signum((uy[i] * ux[j]) + (vy[i] * uy[j]));
            var _vx = signum((ux[i] * vx[j]) + (vx[i] * vy[j]));
            var _vy = signum((uy[i] * vx[j]) + (vy[i] * vy[j]));
            /* Finds rotation matrix matching the product and pushes it. */
            for (var k = 0; k < 16; k++) {
                if (ux[k] === _ux && uy[k] === _uy
                    && vx[k] === _vx && vy[k] === _vy) {
                    row.push(k);
                    break;
                }
            }
        }
    }
    for (var i = 0; i < 16; i++) {
        var mat = new Matrix();
        mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
        rotationMatrices.push(mat);
    }
}
init();
/**
 * @memberof PIXI
 * @typedef {number} GD8Symmetry
 * @see PIXI.groupD8
 */
/**
 * Implements the dihedral group D8, which is similar to
 * [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html};
 * D8 is the same but with diagonals, and it is used for texture
 * rotations.
 *
 * The directions the U- and V- axes after rotation
 * of an angle of `a: GD8Constant` are the vectors `(uX(a), uY(a))`
 * and `(vX(a), vY(a))`. These aren't necessarily unit vectors.
 *
 * **Origin:**<br>
 *  This is the small part of gameofbombs.com portal system. It works.
 *
 * @see PIXI.groupD8.E
 * @see PIXI.groupD8.SE
 * @see PIXI.groupD8.S
 * @see PIXI.groupD8.SW
 * @see PIXI.groupD8.W
 * @see PIXI.groupD8.NW
 * @see PIXI.groupD8.N
 * @see PIXI.groupD8.NE
 * @author Ivan @ivanpopelyshev
 * @namespace PIXI.groupD8
 * @memberof PIXI
 */
var groupD8 = {
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 0°       | East      |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    E: 0,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 45°↻     | Southeast |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    SE: 1,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 90°↻     | South     |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    S: 2,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 135°↻    | Southwest |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    SW: 3,
    /**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 180°     | West      |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    W: 4,
    /**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -135°/225°↻ | Northwest    |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    NW: 5,
    /**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -90°/270°↻  | North        |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    N: 6,
    /**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -45°/315°↻  | Northeast    |
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    NE: 7,
    /**
     * Reflection about Y-axis.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    MIRROR_VERTICAL: 8,
    /**
     * Reflection about the main diagonal.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    MAIN_DIAGONAL: 10,
    /**
     * Reflection about X-axis.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    MIRROR_HORIZONTAL: 12,
    /**
     * Reflection about reverse diagonal.
     *
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */
    REVERSE_DIAGONAL: 14,
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The X-component of the U-axis
     *    after rotating the axes.
     */
    uX: function (ind) { return ux[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The Y-component of the U-axis
     *    after rotating the axes.
     */
    uY: function (ind) { return uy[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The X-component of the V-axis
     *    after rotating the axes.
     */
    vX: function (ind) { return vx[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @return {PIXI.GD8Symmetry} The Y-component of the V-axis
     *    after rotating the axes.
     */
    vY: function (ind) { return vy[ind]; },
    /**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotation - symmetry whose opposite
     *   is needed. Only rotations have opposite symmetries while
     *   reflections don't.
     * @return {PIXI.GD8Symmetry} The opposite symmetry of `rotation`
     */
    inv: function (rotation) {
        if (rotation & 8) // true only if between 8 & 15 (reflections)
         {
            return rotation & 15; // or rotation % 16
        }
        return (-rotation) & 7; // or (8 - rotation) % 8
    },
    /**
     * Composes the two D8 operations.
     *
     * Taking `^` as reflection:
     *
     * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
     * |-------|-----|-----|-----|-----|------|-------|-------|-------|
     * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
     * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
     * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
     * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
     * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
     * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
     * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
     * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
     *
     * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotationSecond - Second operation, which
     *   is the row in the above cayley table.
     * @param {PIXI.GD8Symmetry} rotationFirst - First operation, which
     *   is the column in the above cayley table.
     * @return {PIXI.GD8Symmetry} Composed operation
     */
    add: function (rotationSecond, rotationFirst) { return (rotationCayley[rotationSecond][rotationFirst]); },
    /**
     * Reverse of `add`.
     *
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotationSecond - Second operation
     * @param {PIXI.GD8Symmetry} rotationFirst - First operation
     * @return {PIXI.GD8Symmetry} Result
     */
    sub: function (rotationSecond, rotationFirst) { return (rotationCayley[rotationSecond][groupD8.inv(rotationFirst)]); },
    /**
     * Adds 180 degrees to rotation, which is a commutative
     * operation.
     *
     * @memberof PIXI.groupD8
     * @param {number} rotation - The number to rotate.
     * @returns {number} Rotated number
     */
    rotate180: function (rotation) { return rotation ^ 4; },
    /**
     * Checks if the rotation angle is vertical, i.e. south
     * or north. It doesn't work for reflections.
     *
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotation - The number to check.
     * @returns {boolean} Whether or not the direction is vertical
     */
    isVertical: function (rotation) { return (rotation & 3) === 2; },
    /**
     * Approximates the vector `V(dx,dy)` into one of the
     * eight directions provided by `groupD8`.
     *
     * @memberof PIXI.groupD8
     * @param {number} dx - X-component of the vector
     * @param {number} dy - Y-component of the vector
     * @return {PIXI.GD8Symmetry} Approximation of the vector into
     *  one of the eight symmetries.
     */
    byDirection: function (dx, dy) {
        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
            if (dy >= 0) {
                return groupD8.S;
            }
            return groupD8.N;
        }
        else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
            if (dx > 0) {
                return groupD8.E;
            }
            return groupD8.W;
        }
        else if (dy > 0) {
            if (dx > 0) {
                return groupD8.SE;
            }
            return groupD8.SW;
        }
        else if (dx > 0) {
            return groupD8.NE;
        }
        return groupD8.NW;
    },
    /**
     * Helps sprite to compensate texture packer rotation.
     *
     * @memberof PIXI.groupD8
     * @param {PIXI.Matrix} matrix - sprite world matrix
     * @param {PIXI.GD8Symmetry} rotation - The rotation factor to use.
     * @param {number} tx - sprite anchoring
     * @param {number} ty - sprite anchoring
     */
    matrixAppendRotationInv: function (matrix, rotation, tx, ty) {
        if (tx === void 0) { tx = 0; }
        if (ty === void 0) { ty = 0; }
        // Packer used "rotation", we use "inv(rotation)"
        var mat = rotationMatrices[groupD8.inv(rotation)];
        mat.tx = tx;
        mat.ty = ty;
        matrix.append(mat);
    },
};

/**
 * Transform that takes care about its versions
 *
 * @class
 * @memberof PIXI
 */
var Transform = /** @class */ (function () {
    function Transform() {
        /**
         * The world transformation matrix.
         *
         * @member {PIXI.Matrix}
         */
        this.worldTransform = new Matrix();
        /**
         * The local transformation matrix.
         *
         * @member {PIXI.Matrix}
         */
        this.localTransform = new Matrix();
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.position = new ObservablePoint(this.onChange, this, 0, 0);
        /**
         * The scale factor of the object.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.scale = new ObservablePoint(this.onChange, this, 1, 1);
        /**
         * The pivot point of the displayObject that it rotates around.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.pivot = new ObservablePoint(this.onChange, this, 0, 0);
        /**
         * The skew amount, on the x and y axis.
         *
         * @member {PIXI.ObservablePoint}
         */
        this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);
        /**
         * The rotation amount.
         *
         * @protected
         * @member {number}
         */
        this._rotation = 0;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._cx = 1;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._sx = 0;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._cy = 0;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number}
         */
        this._sy = 1;
        /**
         * The locally unique ID of the local transform.
         *
         * @protected
         * @member {number}
         */
        this._localID = 0;
        /**
         * The locally unique ID of the local transform
         * used to calculate the current local transformation matrix.
         *
         * @protected
         * @member {number}
         */
        this._currentLocalID = 0;
        /**
         * The locally unique ID of the world transform.
         *
         * @protected
         * @member {number}
         */
        this._worldID = 0;
        /**
         * The locally unique ID of the parent's world transform
         * used to calculate the current world transformation matrix.
         *
         * @protected
         * @member {number}
         */
        this._parentID = 0;
    }
    /**
     * Called when a value changes.
     *
     * @protected
     */
    Transform.prototype.onChange = function () {
        this._localID++;
    };
    /**
     * Called when the skew or the rotation changes.
     *
     * @protected
     */
    Transform.prototype.updateSkew = function () {
        this._cx = Math.cos(this._rotation + this.skew.y);
        this._sx = Math.sin(this._rotation + this.skew.y);
        this._cy = -Math.sin(this._rotation - this.skew.x); // cos, added PI/2
        this._sy = Math.cos(this._rotation - this.skew.x); // sin, added PI/2
        this._localID++;
    };
    /**
     * Updates the local transformation matrix.
     */
    Transform.prototype.updateLocalTransform = function () {
        var lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale.x;
            lt.b = this._sx * this.scale.x;
            lt.c = this._cy * this.scale.y;
            lt.d = this._sy * this.scale.y;
            lt.tx = this.position.x - ((this.pivot.x * lt.a) + (this.pivot.y * lt.c));
            lt.ty = this.position.y - ((this.pivot.x * lt.b) + (this.pivot.y * lt.d));
            this._currentLocalID = this._localID;
            // force an update..
            this._parentID = -1;
        }
    };
    /**
     * Updates the local and the world transformation matrices.
     *
     * @param {PIXI.Transform} parentTransform - The parent transform
     */
    Transform.prototype.updateTransform = function (parentTransform) {
        var lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale.x;
            lt.b = this._sx * this.scale.x;
            lt.c = this._cy * this.scale.y;
            lt.d = this._sy * this.scale.y;
            lt.tx = this.position.x - ((this.pivot.x * lt.a) + (this.pivot.y * lt.c));
            lt.ty = this.position.y - ((this.pivot.x * lt.b) + (this.pivot.y * lt.d));
            this._currentLocalID = this._localID;
            // force an update..
            this._parentID = -1;
        }
        if (this._parentID !== parentTransform._worldID) {
            // concat the parent matrix with the objects transform.
            var pt = parentTransform.worldTransform;
            var wt = this.worldTransform;
            wt.a = (lt.a * pt.a) + (lt.b * pt.c);
            wt.b = (lt.a * pt.b) + (lt.b * pt.d);
            wt.c = (lt.c * pt.a) + (lt.d * pt.c);
            wt.d = (lt.c * pt.b) + (lt.d * pt.d);
            wt.tx = (lt.tx * pt.a) + (lt.ty * pt.c) + pt.tx;
            wt.ty = (lt.tx * pt.b) + (lt.ty * pt.d) + pt.ty;
            this._parentID = parentTransform._worldID;
            // update the id of the transform..
            this._worldID++;
        }
    };
    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     *
     * @param {PIXI.Matrix} matrix - The matrix to decompose
     */
    Transform.prototype.setFromMatrix = function (matrix) {
        matrix.decompose(this);
        this._localID++;
    };
    Object.defineProperty(Transform.prototype, "rotation", {
        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            if (this._rotation !== value) {
                this._rotation = value;
                this.updateSkew();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A default (identity) transform
     *
     * @static
     * @constant
     * @member {PIXI.Transform}
     */
    Transform.IDENTITY = new Transform();
    return Transform;
}());

/**
 * Size object, contains width and height
 *
 * @memberof PIXI
 * @typedef {object} ISize
 * @property {number} width - Width component
 * @property {number} height - Height component
 */
/**
 * Rectangle object is an area defined by its position, as indicated by its top-left corner
 * point (x, y) and by its width and its height.
 *
 * @class
 * @memberof PIXI
 */
var Rectangle = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
     * @param {number} [width=0] - The overall width of this rectangle
     * @param {number} [height=0] - The overall height of this rectangle
     */
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        /**
         * @member {number}
         * @default 0
         */
        this.x = Number(x);
        /**
         * @member {number}
         * @default 0
         */
        this.y = Number(y);
        /**
         * @member {number}
         * @default 0
         */
        this.width = Number(width);
        /**
         * @member {number}
         * @default 0
         */
        this.height = Number(height);
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.RECT
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.RECT;
    }
    Object.defineProperty(Rectangle.prototype, "left", {
        /**
         * returns the left edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "right", {
        /**
         * returns the right edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.x + this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "top", {
        /**
         * returns the top edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottom", {
        /**
         * returns the bottom edge of the rectangle
         *
         * @member {number}
         */
        get: function () {
            return this.y + this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle, "EMPTY", {
        /**
         * A constant empty rectangle.
         *
         * @static
         * @constant
         * @member {PIXI.Rectangle}
         * @return {PIXI.Rectangle} An empty rectangle
         */
        get: function () {
            return new Rectangle(0, 0, 0, 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a clone of this Rectangle
     *
     * @return {PIXI.Rectangle} a copy of the rectangle
     */
    Rectangle.prototype.clone = function () {
        return new Rectangle(this.x, this.y, this.width, this.height);
    };
    /**
     * Copies another rectangle to this one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to copy from.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.copyFrom = function (rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        return this;
    };
    /**
     * Copies this rectangle to another one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to copy to.
     * @return {PIXI.Rectangle} Returns given parameter.
     */
    Rectangle.prototype.copyTo = function (rectangle) {
        rectangle.x = this.x;
        rectangle.y = this.y;
        rectangle.width = this.width;
        rectangle.height = this.height;
        return rectangle;
    };
    /**
     * Checks whether the x and y coordinates given are contained within this Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rectangle
     */
    Rectangle.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        if (x >= this.x && x < this.x + this.width) {
            if (y >= this.y && y < this.y + this.height) {
                return true;
            }
        }
        return false;
    };
    /**
     * Pads the rectangle making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     *
     * @param {number} [paddingX=0] - The horizontal padding amount.
     * @param {number} [paddingY=0] - The vertical padding amount.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.pad = function (paddingX, paddingY) {
        if (paddingX === void 0) { paddingX = 0; }
        if (paddingY === void 0) { paddingY = paddingX; }
        this.x -= paddingX;
        this.y -= paddingY;
        this.width += paddingX * 2;
        this.height += paddingY * 2;
        return this;
    };
    /**
     * Fits this rectangle around the passed one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to fit.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.fit = function (rectangle) {
        var x1 = Math.max(this.x, rectangle.x);
        var x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
        var y1 = Math.max(this.y, rectangle.y);
        var y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = Math.max(x2 - x1, 0);
        this.y = y1;
        this.height = Math.max(y2 - y1, 0);
        return this;
    };
    /**
     * Enlarges rectangle that way its corners lie on grid
     *
     * @param {number} [resolution=1] resolution
     * @param {number} [eps=0.001] precision
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.ceil = function (resolution, eps) {
        if (resolution === void 0) { resolution = 1; }
        if (eps === void 0) { eps = 0.001; }
        var x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
        var y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
        this.x = Math.floor((this.x + eps) * resolution) / resolution;
        this.y = Math.floor((this.y + eps) * resolution) / resolution;
        this.width = x2 - this.x;
        this.height = y2 - this.y;
        return this;
    };
    /**
     * Enlarges this rectangle to include the passed rectangle.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to include.
     * @return {PIXI.Rectangle} Returns itself.
     */
    Rectangle.prototype.enlarge = function (rectangle) {
        var x1 = Math.min(this.x, rectangle.x);
        var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
        var y1 = Math.min(this.y, rectangle.y);
        var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = x2 - x1;
        this.y = y1;
        this.height = y2 - y1;
        return this;
    };
    return Rectangle;
}());

/**
 * The Circle object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
 *
 * @class
 * @memberof PIXI
 */
var Circle = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the center of this circle
     * @param {number} [y=0] - The Y coordinate of the center of this circle
     * @param {number} [radius=0] - The radius of the circle
     */
    function Circle(x, y, radius) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (radius === void 0) { radius = 0; }
        /**
         * @member {number}
         * @default 0
         */
        this.x = x;
        /**
         * @member {number}
         * @default 0
         */
        this.y = y;
        /**
         * @member {number}
         * @default 0
         */
        this.radius = radius;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.CIRC
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.CIRC;
    }
    /**
     * Creates a clone of this Circle instance
     *
     * @return {PIXI.Circle} a copy of the Circle
     */
    Circle.prototype.clone = function () {
        return new Circle(this.x, this.y, this.radius);
    };
    /**
     * Checks whether the x and y coordinates given are contained within this circle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Circle
     */
    Circle.prototype.contains = function (x, y) {
        if (this.radius <= 0) {
            return false;
        }
        var r2 = this.radius * this.radius;
        var dx = (this.x - x);
        var dy = (this.y - y);
        dx *= dx;
        dy *= dy;
        return (dx + dy <= r2);
    };
    /**
    * Returns the framing rectangle of the circle as a Rectangle object
    *
    * @return {PIXI.Rectangle} the framing rectangle
    */
    Circle.prototype.getBounds = function () {
        return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    };
    return Circle;
}());

/**
 * The Ellipse object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
 *
 * @class
 * @memberof PIXI
 */
var Ellipse = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the center of this ellipse
     * @param {number} [y=0] - The Y coordinate of the center of this ellipse
     * @param {number} [halfWidth=0] - The half width of this ellipse
     * @param {number} [halfHeight=0] - The half height of this ellipse
     */
    function Ellipse(x, y, halfWidth, halfHeight) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (halfWidth === void 0) { halfWidth = 0; }
        if (halfHeight === void 0) { halfHeight = 0; }
        /**
         * @member {number}
         * @default 0
         */
        this.x = x;
        /**
         * @member {number}
         * @default 0
         */
        this.y = y;
        /**
         * @member {number}
         * @default 0
         */
        this.width = halfWidth;
        /**
         * @member {number}
         * @default 0
         */
        this.height = halfHeight;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.ELIP
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.ELIP;
    }
    /**
     * Creates a clone of this Ellipse instance
     *
     * @return {PIXI.Ellipse} a copy of the ellipse
     */
    Ellipse.prototype.clone = function () {
        return new Ellipse(this.x, this.y, this.width, this.height);
    };
    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coords are within this ellipse
     */
    Ellipse.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        // normalize the coords to an ellipse with center 0,0
        var normx = ((x - this.x) / this.width);
        var normy = ((y - this.y) / this.height);
        normx *= normx;
        normy *= normy;
        return (normx + normy <= 1);
    };
    /**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     *
     * @return {PIXI.Rectangle} the framing rectangle
     */
    Ellipse.prototype.getBounds = function () {
        return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
    };
    return Ellipse;
}());

/**
 * A class to define a shape via user defined co-orinates.
 *
 * @class
 * @memberof PIXI
 */
var Polygon = /** @class */ (function () {
    /**
     * @param {PIXI.Point[]|number[]|number[][]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    function Polygon() {
        var arguments$1 = arguments;

        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments$1[_i];
        }
        if (Array.isArray(points[0])) {
            points = points[0];
        }
        // if this is an array of points, convert it to a flat array of numbers
        if (points[0] instanceof Point) {
            points = points;
            var p = [];
            for (var i = 0, il = points.length; i < il; i++) {
                p.push(points[i].x, points[i].y);
            }
            points = p;
        }
        /**
         * An array of the points of this polygon
         *
         * @member {number[]}
         */
        this.points = points;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.POLY
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.POLY;
        /**
         * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
         * @member {boolean}
         * @default true
         */
        this.closeStroke = true;
    }
    /**
     * Creates a clone of this polygon
     *
     * @return {PIXI.Polygon} a copy of the polygon
     */
    Polygon.prototype.clone = function () {
        var points = this.points.slice();
        var polygon = new Polygon(points);
        polygon.closeStroke = this.closeStroke;
        return polygon;
    };
    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this polygon
     */
    Polygon.prototype.contains = function (x, y) {
        var inside = false;
        // use some raycasting to test hits
        // https://github.com/substack/point-in-polygon/blob/master/index.js
        var length = this.points.length / 2;
        for (var i = 0, j = length - 1; i < length; j = i++) {
            var xi = this.points[i * 2];
            var yi = this.points[(i * 2) + 1];
            var xj = this.points[j * 2];
            var yj = this.points[(j * 2) + 1];
            var intersect = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * ((y - yi) / (yj - yi))) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        return inside;
    };
    return Polygon;
}());

/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
 * top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof PIXI
 */
var RoundedRectangle = /** @class */ (function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [width=0] - The overall width of this rounded rectangle
     * @param {number} [height=0] - The overall height of this rounded rectangle
     * @param {number} [radius=20] - Controls the radius of the rounded corners
     */
    function RoundedRectangle(x, y, width, height, radius) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (radius === void 0) { radius = 20; }
        /**
         * @member {number}
         * @default 0
         */
        this.x = x;
        /**
         * @member {number}
         * @default 0
         */
        this.y = y;
        /**
         * @member {number}
         * @default 0
         */
        this.width = width;
        /**
         * @member {number}
         * @default 0
         */
        this.height = height;
        /**
         * @member {number}
         * @default 20
         */
        this.radius = radius;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readonly
         * @default PIXI.SHAPES.RREC
         * @see PIXI.SHAPES
         */
        this.type = SHAPES.RREC;
    }
    /**
     * Creates a clone of this Rounded Rectangle
     *
     * @return {PIXI.RoundedRectangle} a copy of the rounded rectangle
     */
    RoundedRectangle.prototype.clone = function () {
        return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
    };
    /**
     * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
     */
    RoundedRectangle.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        if (x >= this.x && x <= this.x + this.width) {
            if (y >= this.y && y <= this.y + this.height) {
                if ((y >= this.y + this.radius && y <= this.y + this.height - this.radius)
                    || (x >= this.x + this.radius && x <= this.x + this.width - this.radius)) {
                    return true;
                }
                var dx = x - (this.x + this.radius);
                var dy = y - (this.y + this.radius);
                var radius2 = this.radius * this.radius;
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
                dx = x - (this.x + this.width - this.radius);
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
                dy = y - (this.y + this.height - this.radius);
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
                dx = x - (this.x + this.radius);
                if ((dx * dx) + (dy * dy) <= radius2) {
                    return true;
                }
            }
        }
        return false;
    };
    return RoundedRectangle;
}());

/**
 * Math classes and utilities mixed into PIXI namespace.
 *
 * @lends PIXI
 */


//# sourceMappingURL=math.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/runner/lib/runner.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Runner; });
/*!
 * @pixi/runner - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
/**
 * A Runner is a highly performant and simple alternative to signals. Best used in situations
 * where events are dispatched to many objects at high frequency (say every frame!)
 *
 *
 * like a signal..
 * ```
 * import { Runner } from '@pixi/runner';
 *
 * const myObject = {
 *     loaded: new Runner('loaded')
 * }
 *
 * const listener = {
 *     loaded: function(){
 *         // thin
 *     }
 * }
 *
 * myObject.update.add(listener);
 *
 * myObject.loaded.emit();
 * ```
 *
 * Or for handling calling the same function on many items
 * ```
 * import { Runner } from '@pixi/runner';
 *
 * const myGame = {
 *     update: new Runner('update')
 * }
 *
 * const gameObject = {
 *     update: function(time){
 *         // update my gamey state
 *     }
 * }
 *
 * myGame.update.add(gameObject1);
 *
 * myGame.update.emit(time);
 * ```
 * @class
 * @memberof PIXI
 */
var Runner = /** @class */ (function () {
    /**
     *  @param {string} name the function name that will be executed on the listeners added to this Runner.
     */
    function Runner(name) {
        this.items = [];
        this._name = name;
        this._aliasCount = 0;
    }
    /**
     * Dispatch/Broadcast Runner to all listeners added to the queue.
     * @param {...any} params - optional parameters to pass to each listener
     * @return {PIXI.Runner}
     */
    Runner.prototype.emit = function (a0, a1, a2, a3, a4, a5, a6, a7) {
        if (arguments.length > 8) {
            throw new Error('max arguments reached');
        }
        var _a = this, name = _a.name, items = _a.items;
        this._aliasCount++;
        for (var i = 0, len = items.length; i < len; i++) {
            items[i][name](a0, a1, a2, a3, a4, a5, a6, a7);
        }
        if (items === this.items) {
            this._aliasCount--;
        }
        return this;
    };
    Runner.prototype.ensureNonAliasedItems = function () {
        if (this._aliasCount > 0 && this.items.length > 1) {
            this._aliasCount = 0;
            this.items = this.items.slice(0);
        }
    };
    /**
     * Add a listener to the Runner
     *
     * Runners do not need to have scope or functions passed to them.
     * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
     * as the name provided to the Runner when it was created.
     *
     * Eg A listener passed to this Runner will require a 'complete' function.
     *
     * ```
     * import { Runner } from '@pixi/runner';
     *
     * const complete = new Runner('complete');
     * ```
     *
     * The scope used will be the object itself.
     *
     * @param {any} item - The object that will be listening.
     * @return {PIXI.Runner}
     */
    Runner.prototype.add = function (item) {
        if (item[this._name]) {
            this.ensureNonAliasedItems();
            this.remove(item);
            this.items.push(item);
        }
        return this;
    };
    /**
     * Remove a single listener from the dispatch queue.
     * @param {any} item - The listenr that you would like to remove.
     * @return {PIXI.Runner}
     */
    Runner.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.ensureNonAliasedItems();
            this.items.splice(index, 1);
        }
        return this;
    };
    /**
     * Check to see if the listener is already in the Runner
     * @param {any} item - The listener that you would like to check.
     */
    Runner.prototype.contains = function (item) {
        return this.items.indexOf(item) !== -1;
    };
    /**
     * Remove all listeners from the Runner
     * @return {PIXI.Runner}
     */
    Runner.prototype.removeAll = function () {
        this.ensureNonAliasedItems();
        this.items.length = 0;
        return this;
    };
    /**
     * Remove all references, don't use after this.
     */
    Runner.prototype.destroy = function () {
        this.removeAll();
        this.items = null;
        this._name = null;
    };
    Object.defineProperty(Runner.prototype, "empty", {
        /**
         * `true` if there are no this Runner contains no listeners
         *
         * @member {boolean}
         * @readonly
         */
        get: function () {
            return this.items.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Runner.prototype, "name", {
        /**
         * The name of the runner.
         *
         * @member {string}
         * @readonly
         */
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Runner;
}());
Object.defineProperties(Runner.prototype, {
    /**
     * Alias for `emit`
     * @memberof PIXI.Runner#
     * @method dispatch
     * @see PIXI.Runner#emit
     */
    dispatch: { value: Runner.prototype.emit },
    /**
     * Alias for `emit`
     * @memberof PIXI.Runner#
     * @method run
     * @see PIXI.Runner#emit
     */
    run: { value: Runner.prototype.emit },
});


//# sourceMappingURL=runner.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/sprite/lib/sprite.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sprite; });
/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/* harmony import */ var _pixi_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/constants/lib/constants.es.js");
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@pixi/display/lib/display.es.js");
/* harmony import */ var _pixi_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@pixi/settings/lib/settings.es.js");
/*!
 * @pixi/sprite - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */







var tempPoint = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* Point */ "g"]();
var indices = new Uint16Array([0, 1, 2, 0, 2, 3]);

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
*
 * A sprite can be created directly from an image like this:
 *
 * ```js
 * let sprite = PIXI.Sprite.from('assets/image.png');
 * ```
 *
 * The more efficient way to create sprites is using a {@link PIXI.Spritesheet},
 * as swapping base textures when rendering to the screen is inefficient.
 *
 * ```js
 * PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);
 *
 * function setup() {
 *   let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
 *   let sprite = new PIXI.Sprite(sheet.textures["image.png"]);
 *   ...
 * }
 * ```
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */
var Sprite = /*@__PURE__*/(function (Container) {
    function Sprite(texture)
    {
        Container.call(this);

        /**
         * The anchor point defines the normalized coordinates
         * in the texture that map to the position of this
         * sprite.
         *
         * By default, this is `(0,0)` (or `texture.defaultAnchor`
         * if you have modified that), which means the position
         * `(x,y)` of this `Sprite` will be the top-left corner.
         *
         * Note: Updating `texture.defaultAnchor` after
         * constructing a `Sprite` does _not_ update its anchor.
         *
         * {@link https://docs.cocos2d-x.org/cocos2d-x/en/sprites/manipulation.html}
         *
         * @default `texture.defaultAnchor`
         * @member {PIXI.ObservablePoint}
         * @private
         */
        this._anchor = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* ObservablePoint */ "e"](
            this._onAnchorUpdate,
            this,
            (texture ? texture.defaultAnchor.x : 0),
            (texture ? texture.defaultAnchor.y : 0)
        );

        /**
         * The texture that the sprite is using
         *
         * @private
         * @member {PIXI.Texture}
         */
        this._texture = null;

        /**
         * The width of the sprite (this is initially set by the texture)
         *
         * @private
         * @member {number}
         */
        this._width = 0;

        /**
         * The height of the sprite (this is initially set by the texture)
         *
         * @private
         * @member {number}
         */
        this._height = 0;

        /**
         * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
         *
         * @private
         * @member {number}
         * @default 0xFFFFFF
         */
        this._tint = null;
        this._tintRGB = null;
        this.tint = 0xFFFFFF;

        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        this.blendMode = _pixi_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLEND_MODES */ "b"].NORMAL;

        /**
         * The shader that will be used to render the sprite. Set to null to remove a current shader.
         *
         * @member {PIXI.Filter|PIXI.Shader}
         */
        this.shader = null;

        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number}
         * @default 0xFFFFFF
         */
        this._cachedTint = 0xFFFFFF;

        /**
         * this is used to store the uvs data of the sprite, assigned at the same time
         * as the vertexData in calculateVertices()
         *
         * @private
         * @member {Float32Array}
         */
        this.uvs = null;

        // call texture setter
        this.texture = texture || _pixi_core__WEBPACK_IMPORTED_MODULE_2__[/* Texture */ "E"].EMPTY;

        /**
         * this is used to store the vertex data of the sprite (basically a quad)
         *
         * @private
         * @member {Float32Array}
         */
        this.vertexData = new Float32Array(8);

        /**
         * This is used to calculate the bounds of the object IF it is a trimmed sprite
         *
         * @private
         * @member {Float32Array}
         */
        this.vertexTrimmedData = null;

        this._transformID = -1;
        this._textureID = -1;

        this._transformTrimmedID = -1;
        this._textureTrimmedID = -1;

        // Batchable stuff..
        // TODO could make this a mixin?
        this.indices = indices;
        this.size = 4;
        this.start = 0;

        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string}
         * @default 'batch'
         */
        this.pluginName = 'batch';

        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean}
         */
        this.isSprite = true;

        /**
         * Internal roundPixels field
         *
         * @member {boolean}
         * @private
         */
        this._roundPixels = _pixi_settings__WEBPACK_IMPORTED_MODULE_5__[/* settings */ "b"].ROUND_PIXELS;
    }

    if ( Container ) Sprite.__proto__ = Container;
    Sprite.prototype = Object.create( Container && Container.prototype );
    Sprite.prototype.constructor = Sprite;

    var prototypeAccessors = { roundPixels: { configurable: true },width: { configurable: true },height: { configurable: true },anchor: { configurable: true },tint: { configurable: true },texture: { configurable: true } };

    /**
     * When the texture is updated, this event will fire to update the scale and frame
     *
     * @private
     */
    Sprite.prototype._onTextureUpdate = function _onTextureUpdate ()
    {
        this._textureID = -1;
        this._textureTrimmedID = -1;
        this._cachedTint = 0xFFFFFF;

        // so if _width is 0 then width was not set..
        if (this._width)
        {
            this.scale.x = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["sign"])(this.scale.x) * this._width / this._texture.orig.width;
        }

        if (this._height)
        {
            this.scale.y = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["sign"])(this.scale.y) * this._height / this._texture.orig.height;
        }
    };

    /**
     * Called when the anchor position updates.
     *
     * @private
     */
    Sprite.prototype._onAnchorUpdate = function _onAnchorUpdate ()
    {
        this._transformID = -1;
        this._transformTrimmedID = -1;
    };

    /**
     * calculates worldTransform * vertices, store it in vertexData
     */
    Sprite.prototype.calculateVertices = function calculateVertices ()
    {
        var texture = this._texture;

        if (this._transformID === this.transform._worldID && this._textureID === texture._updateID)
        {
            return;
        }

        // update texture UV here, because base texture can be changed without calling `_onTextureUpdate`
        if (this._textureID !== texture._updateID)
        {
            this.uvs = this._texture._uvs.uvsFloat32;
        }

        this._transformID = this.transform._worldID;
        this._textureID = texture._updateID;

        // set the vertex data

        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;
        var vertexData = this.vertexData;
        var trim = texture.trim;
        var orig = texture.orig;
        var anchor = this._anchor;

        var w0 = 0;
        var w1 = 0;
        var h0 = 0;
        var h1 = 0;

        if (trim)
        {
            // if the sprite is trimmed and is not a tilingsprite then we need to add the extra
            // space before transforming the sprite coords.
            w1 = trim.x - (anchor._x * orig.width);
            w0 = w1 + trim.width;

            h1 = trim.y - (anchor._y * orig.height);
            h0 = h1 + trim.height;
        }
        else
        {
            w1 = -anchor._x * orig.width;
            w0 = w1 + orig.width;

            h1 = -anchor._y * orig.height;
            h0 = h1 + orig.height;
        }

        // xy
        vertexData[0] = (a * w1) + (c * h1) + tx;
        vertexData[1] = (d * h1) + (b * w1) + ty;

        // xy
        vertexData[2] = (a * w0) + (c * h1) + tx;
        vertexData[3] = (d * h1) + (b * w0) + ty;

        // xy
        vertexData[4] = (a * w0) + (c * h0) + tx;
        vertexData[5] = (d * h0) + (b * w0) + ty;

        // xy
        vertexData[6] = (a * w1) + (c * h0) + tx;
        vertexData[7] = (d * h0) + (b * w1) + ty;

        if (this._roundPixels)
        {
            for (var i = 0; i < 8; i++)
            {
                vertexData[i] = Math.round(vertexData[i]);
            }
        }
    };

    /**
     * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
     * This is used to ensure that the true width and height of a trimmed texture is respected
     */
    Sprite.prototype.calculateTrimmedVertices = function calculateTrimmedVertices ()
    {
        if (!this.vertexTrimmedData)
        {
            this.vertexTrimmedData = new Float32Array(8);
        }
        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
        {
            return;
        }

        this._transformTrimmedID = this.transform._worldID;
        this._textureTrimmedID = this._texture._updateID;

        // lets do some special trim code!
        var texture = this._texture;
        var vertexData = this.vertexTrimmedData;
        var orig = texture.orig;
        var anchor = this._anchor;

        // lets calculate the new untrimmed bounds..
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;

        var w1 = -anchor._x * orig.width;
        var w0 = w1 + orig.width;

        var h1 = -anchor._y * orig.height;
        var h0 = h1 + orig.height;

        // xy
        vertexData[0] = (a * w1) + (c * h1) + tx;
        vertexData[1] = (d * h1) + (b * w1) + ty;

        // xy
        vertexData[2] = (a * w0) + (c * h1) + tx;
        vertexData[3] = (d * h1) + (b * w0) + ty;

        // xy
        vertexData[4] = (a * w0) + (c * h0) + tx;
        vertexData[5] = (d * h0) + (b * w0) + ty;

        // xy
        vertexData[6] = (a * w1) + (c * h0) + tx;
        vertexData[7] = (d * h0) + (b * w1) + ty;
    };

    /**
    *
    * Renders the object using the WebGL renderer
    *
    * @protected
    * @param {PIXI.Renderer} renderer - The webgl renderer to use.
    */
    Sprite.prototype._render = function _render (renderer)
    {
        this.calculateVertices();

        renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]);
        renderer.plugins[this.pluginName].render(this);
    };

    /**
     * Updates the bounds of the sprite.
     *
     * @protected
     */
    Sprite.prototype._calculateBounds = function _calculateBounds ()
    {
        var trim = this._texture.trim;
        var orig = this._texture.orig;

        // First lets check to see if the current texture has a trim..
        if (!trim || (trim.width === orig.width && trim.height === orig.height))
        {
            // no trim! lets use the usual calculations..
            this.calculateVertices();
            this._bounds.addQuad(this.vertexData);
        }
        else
        {
            // lets calculate a special trimmed bounds...
            this.calculateTrimmedVertices();
            this._bounds.addQuad(this.vertexTrimmedData);
        }
    };

    /**
     * Gets the local bounds of the sprite object.
     *
     * @param {PIXI.Rectangle} [rect] - The output rectangle.
     * @return {PIXI.Rectangle} The bounds.
     */
    Sprite.prototype.getLocalBounds = function getLocalBounds (rect)
    {
        // we can do a fast local bounds if the sprite has no children!
        if (this.children.length === 0)
        {
            this._bounds.minX = this._texture.orig.width * -this._anchor._x;
            this._bounds.minY = this._texture.orig.height * -this._anchor._y;
            this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
            this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y);

            if (!rect)
            {
                if (!this._localBoundsRect)
                {
                    this._localBoundsRect = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__[/* Rectangle */ "j"]();
                }

                rect = this._localBoundsRect;
            }

            return this._bounds.getRectangle(rect);
        }

        return Container.prototype.getLocalBounds.call(this, rect);
    };

    /**
     * Tests if a point is inside this sprite
     *
     * @param {PIXI.Point} point - the point to test
     * @return {boolean} the result of the test
     */
    Sprite.prototype.containsPoint = function containsPoint (point)
    {
        this.worldTransform.applyInverse(point, tempPoint);

        var width = this._texture.orig.width;
        var height = this._texture.orig.height;
        var x1 = -width * this.anchor.x;
        var y1 = 0;

        if (tempPoint.x >= x1 && tempPoint.x < x1 + width)
        {
            y1 = -height * this.anchor.y;

            if (tempPoint.y >= y1 && tempPoint.y < y1 + height)
            {
                return true;
            }
        }

        return false;
    };

    /**
     * Destroys this sprite and optionally its texture and children
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
     */
    Sprite.prototype.destroy = function destroy (options)
    {
        Container.prototype.destroy.call(this, options);

        this._texture.off('update', this._onTextureUpdate, this);

        this._anchor = null;

        var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;

        if (destroyTexture)
        {
            var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;

            this._texture.destroy(!!destroyBaseTexture);
        }

        this._texture = null;
        this.shader = null;
    };

    // some helper functions..

    /**
     * Helper function that creates a new sprite based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {number|string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source Source to create texture from
     * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
     * @return {PIXI.Sprite} The newly created sprite
     */
    Sprite.from = function from (source, options)
    {
        var texture = (source instanceof _pixi_core__WEBPACK_IMPORTED_MODULE_2__[/* Texture */ "E"])
            ? source
            : _pixi_core__WEBPACK_IMPORTED_MODULE_2__[/* Texture */ "E"].from(source, options);

        return new Sprite(texture);
    };

    /**
     * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Advantages can include sharper image quality (like text) and faster rendering on canvas.
     * The main disadvantage is movement of objects may appear less smooth.
     * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
     *
     * @member {boolean}
     * @default false
     */
    prototypeAccessors.roundPixels.set = function (value)
    {
        if (this._roundPixels !== value)
        {
            this._transformID = -1;
        }
        this._roundPixels = value;
    };

    prototypeAccessors.roundPixels.get = function ()
    {
        return this._roundPixels;
    };

    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    prototypeAccessors.width.get = function ()
    {
        return Math.abs(this.scale.x) * this._texture.orig.width;
    };

    prototypeAccessors.width.set = function (value) // eslint-disable-line require-jsdoc
    {
        var s = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["sign"])(this.scale.x) || 1;

        this.scale.x = s * value / this._texture.orig.width;
        this._width = value;
    };

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    prototypeAccessors.height.get = function ()
    {
        return Math.abs(this.scale.y) * this._texture.orig.height;
    };

    prototypeAccessors.height.set = function (value) // eslint-disable-line require-jsdoc
    {
        var s = Object(_pixi_utils__WEBPACK_IMPORTED_MODULE_1__["sign"])(this.scale.y) || 1;

        this.scale.y = s * value / this._texture.orig.height;
        this._height = value;
    };

    /**
     * The anchor sets the origin point of the text. The default value is taken from the {@link PIXI.Texture|Texture}
     * and passed to the constructor.
     *
     * The default is `(0,0)`, this means the text's origin is the top left.
     *
     * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
     *
     * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
     *
     * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
     *
     * @example
     * const sprite = new PIXI.Sprite(texture);
     * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
     *
     * @member {PIXI.ObservablePoint}
     */
    prototypeAccessors.anchor.get = function ()
    {
        return this._anchor;
    };

    prototypeAccessors.anchor.set = function (value) // eslint-disable-line require-jsdoc
    {
        this._anchor.copyFrom(value);
    };

    /**
     * The tint applied to the sprite. This is a hex value.
     * A value of 0xFFFFFF will remove any tint effect.
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    prototypeAccessors.tint.get = function ()
    {
        return this._tint;
    };

    prototypeAccessors.tint.set = function (value) // eslint-disable-line require-jsdoc
    {
        this._tint = value;
        this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
    };

    /**
     * The texture that the sprite is using
     *
     * @member {PIXI.Texture}
     */
    prototypeAccessors.texture.get = function ()
    {
        return this._texture;
    };

    prototypeAccessors.texture.set = function (value) // eslint-disable-line require-jsdoc
    {
        if (this._texture === value)
        {
            return;
        }

        if (this._texture)
        {
            this._texture.off('update', this._onTextureUpdate, this);
        }

        this._texture = value || _pixi_core__WEBPACK_IMPORTED_MODULE_2__[/* Texture */ "E"].EMPTY;
        this._cachedTint = 0xFFFFFF;

        this._textureID = -1;
        this._textureTrimmedID = -1;

        if (value)
        {
            // wait for the texture to load
            if (value.baseTexture.valid)
            {
                this._onTextureUpdate();
            }
            else
            {
                value.once('update', this._onTextureUpdate, this);
            }
        }
    };

    Object.defineProperties( Sprite.prototype, prototypeAccessors );

    return Sprite;
}(_pixi_display__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "b"]));


//# sourceMappingURL=sprite.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/ticker/lib/ticker.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TickerPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_PRIORITY; });
/* harmony import */ var _pixi_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/settings/lib/settings.es.js");
/*!
 * @pixi/ticker - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */


/**
 * Target frames per millisecond.
 *
 * @static
 * @name TARGET_FPMS
 * @memberof PIXI.settings
 * @type {number}
 * @default 0.06
 */
_pixi_settings__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "b"].TARGET_FPMS = 0.06;

/**
 * Represents the update priorities used by internal PIXI classes when registered with
 * the {@link PIXI.Ticker} object. Higher priority items are updated first and lower
 * priority items, such as render, should go later.
 *
 * @static
 * @constant
 * @name UPDATE_PRIORITY
 * @memberof PIXI
 * @enum {number}
 * @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.interaction.InteractionManager}
 * @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.AnimatedSprite}
 * @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.Ticker#add}.
 * @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
 * @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.prepare.BasePrepare} utility.
 */
var UPDATE_PRIORITY;
(function (UPDATE_PRIORITY) {
    UPDATE_PRIORITY[UPDATE_PRIORITY["INTERACTION"] = 50] = "INTERACTION";
    UPDATE_PRIORITY[UPDATE_PRIORITY["HIGH"] = 25] = "HIGH";
    UPDATE_PRIORITY[UPDATE_PRIORITY["NORMAL"] = 0] = "NORMAL";
    UPDATE_PRIORITY[UPDATE_PRIORITY["LOW"] = -25] = "LOW";
    UPDATE_PRIORITY[UPDATE_PRIORITY["UTILITY"] = -50] = "UTILITY";
})(UPDATE_PRIORITY || (UPDATE_PRIORITY = {}));

/**
 * Internal class for handling the priority sorting of ticker handlers.
 *
 * @private
 * @class
 * @memberof PIXI
 */
var TickerListener = /** @class */ (function () {
    /**
     * Constructor
     * @private
     * @param {Function} fn - The listener function to be added for one update
     * @param {*} [context=null] - The listener context
     * @param {number} [priority=0] - The priority for emitting
     * @param {boolean} [once=false] - If the handler should fire once
     */
    function TickerListener(fn, context, priority, once) {
        if (context === void 0) { context = null; }
        if (priority === void 0) { priority = 0; }
        if (once === void 0) { once = false; }
        /**
         * The handler function to execute.
         * @private
         * @member {Function}
         */
        this.fn = fn;
        /**
         * The calling to execute.
         * @private
         * @member {*}
         */
        this.context = context;
        /**
         * The current priority.
         * @private
         * @member {number}
         */
        this.priority = priority;
        /**
         * If this should only execute once.
         * @private
         * @member {boolean}
         */
        this.once = once;
        /**
         * The next item in chain.
         * @private
         * @member {TickerListener}
         */
        this.next = null;
        /**
         * The previous item in chain.
         * @private
         * @member {TickerListener}
         */
        this.previous = null;
        /**
         * `true` if this listener has been destroyed already.
         * @member {boolean}
         * @private
         */
        this._destroyed = false;
    }
    /**
     * Simple compare function to figure out if a function and context match.
     * @private
     * @param {Function} fn - The listener function to be added for one update
     * @param {any} [context] - The listener context
     * @return {boolean} `true` if the listener match the arguments
     */
    TickerListener.prototype.match = function (fn, context) {
        if (context === void 0) { context = null; }
        return this.fn === fn && this.context === context;
    };
    /**
     * Emit by calling the current function.
     * @private
     * @param {number} deltaTime - time since the last emit.
     * @return {TickerListener} Next ticker
     */
    TickerListener.prototype.emit = function (deltaTime) {
        if (this.fn) {
            if (this.context) {
                this.fn.call(this.context, deltaTime);
            }
            else {
                this.fn(deltaTime);
            }
        }
        var redirect = this.next;
        if (this.once) {
            this.destroy(true);
        }
        // Soft-destroying should remove
        // the next reference
        if (this._destroyed) {
            this.next = null;
        }
        return redirect;
    };
    /**
     * Connect to the list.
     * @private
     * @param {TickerListener} previous - Input node, previous listener
     */
    TickerListener.prototype.connect = function (previous) {
        this.previous = previous;
        if (previous.next) {
            previous.next.previous = this;
        }
        this.next = previous.next;
        previous.next = this;
    };
    /**
     * Destroy and don't use after this.
     * @private
     * @param {boolean} [hard = false] `true` to remove the `next` reference, this
     *        is considered a hard destroy. Soft destroy maintains the next reference.
     * @return {TickerListener} The listener to redirect while emitting or removing.
     */
    TickerListener.prototype.destroy = function (hard) {
        if (hard === void 0) { hard = false; }
        this._destroyed = true;
        this.fn = null;
        this.context = null;
        // Disconnect, hook up next and previous
        if (this.previous) {
            this.previous.next = this.next;
        }
        if (this.next) {
            this.next.previous = this.previous;
        }
        // Redirect to the next item
        var redirect = this.next;
        // Remove references
        this.next = hard ? null : redirect;
        this.previous = null;
        return redirect;
    };
    return TickerListener;
}());

/**
 * A Ticker class that runs an update loop that other objects listen to.
 *
 * This class is composed around listeners meant for execution on the next requested animation frame.
 * Animation frames are requested only when necessary, e.g. When the ticker is started and the emitter has listeners.
 *
 * @class
 * @memberof PIXI
 */
var Ticker = /** @class */ (function () {
    function Ticker() {
        var _this = this;
        /**
         * The first listener. All new listeners added are chained on this.
         * @private
         * @type {TickerListener}
         */
        this._head = new TickerListener(null, null, Infinity);
        /**
         * Internal current frame request ID
         * @type {?number}
         * @private
         */
        this._requestId = null;
        /**
         * Internal value managed by minFPS property setter and getter.
         * This is the maximum allowed milliseconds between updates.
         * @type {number}
         * @private
         */
        this._maxElapsedMS = 100;
        /**
         * Internal value managed by maxFPS property setter and getter.
         * This is the minimum allowed milliseconds between updates.
         * @type {number}
         * @private
         */
        this._minElapsedMS = 0;
        /**
         * Whether or not this ticker should invoke the method
         * {@link PIXI.Ticker#start} automatically
         * when a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.autoStart = false;
        /**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link PIXI.Ticker#minFPS}
         * and is scaled with {@link PIXI.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         *
         * @member {number}
         * @default 1
         */
        this.deltaTime = 1;
        /**
         * Scaler time elapsed in milliseconds from last frame to this frame.
         * This value is capped by setting {@link PIXI.Ticker#minFPS}
         * and is scaled with {@link PIXI.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number}
         * @default 16.66
         */
        this.deltaMS = 1 / _pixi_settings__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "b"].TARGET_FPMS;
        /**
         * Time elapsed in milliseconds from last frame to this frame.
         * Opposed to what the scalar {@link PIXI.Ticker#deltaTime}
         * is based, this value is neither capped nor scaled.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number}
         * @default 16.66
         */
        this.elapsedMS = 1 / _pixi_settings__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "b"].TARGET_FPMS;
        /**
         * The last time {@link PIXI.Ticker#update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         *
         * @member {number}
         * @default -1
         */
        this.lastTime = -1;
        /**
         * Factor of current {@link PIXI.Ticker#deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         *
         * @member {number}
         * @default 1
         */
        this.speed = 1;
        /**
         * Whether or not this ticker has been started.
         * `true` if {@link PIXI.Ticker#start} has been called.
         * `false` if {@link PIXI.Ticker#stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link PIXI.Ticker#autoStart} being `true`
         * and a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.started = false;
        /**
         * If enabled, deleting is disabled.
         * @member {boolean}
         * @default false
         * @private
         */
        this._protected = false;
        /**
         * The last time keyframe was executed.
         * Maintains a relatively fixed interval with the previous value.
         * @member {number}
         * @default -1
         * @private
         */
        this._lastFrame = -1;
        /**
         * Internal tick method bound to ticker instance.
         * This is because in early 2015, Function.bind
         * is still 60% slower in high performance scenarios.
         * Also separating frame requests from update method
         * so listeners may be called at any time and with
         * any animation API, just invoke ticker.update(time).
         *
         * @private
         * @param {number} time - Time since last tick.
         */
        this._tick = function (time) {
            _this._requestId = null;
            if (_this.started) {
                // Invoke listeners now
                _this.update(time);
                // Listener side effects may have modified ticker state.
                if (_this.started && _this._requestId === null && _this._head.next) {
                    _this._requestId = requestAnimationFrame(_this._tick);
                }
            }
        };
    }
    /**
     * Conditionally requests a new animation frame.
     * If a frame has not already been requested, and if the internal
     * emitter has listeners, a new frame is requested.
     *
     * @private
     */
    Ticker.prototype._requestIfNeeded = function () {
        if (this._requestId === null && this._head.next) {
            // ensure callbacks get correct delta
            this.lastTime = performance.now();
            this._lastFrame = this.lastTime;
            this._requestId = requestAnimationFrame(this._tick);
        }
    };
    /**
     * Conditionally cancels a pending animation frame.
     *
     * @private
     */
    Ticker.prototype._cancelIfNeeded = function () {
        if (this._requestId !== null) {
            cancelAnimationFrame(this._requestId);
            this._requestId = null;
        }
    };
    /**
     * Conditionally requests a new animation frame.
     * If the ticker has been started it checks if a frame has not already
     * been requested, and if the internal emitter has listeners. If these
     * conditions are met, a new frame is requested. If the ticker has not
     * been started, but autoStart is `true`, then the ticker starts now,
     * and continues with the previous conditions to request a new frame.
     *
     * @private
     */
    Ticker.prototype._startIfPossible = function () {
        if (this.started) {
            this._requestIfNeeded();
        }
        else if (this.autoStart) {
            this.start();
        }
    };
    /**
     * Register a handler for tick events. Calls continuously unless
     * it is removed or the ticker is stopped.
     *
     * @param {Function} fn - The listener function to be added for updates
     * @param {*} [context] - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype.add = function (fn, context, priority) {
        if (priority === void 0) { priority = UPDATE_PRIORITY.NORMAL; }
        return this._addListener(new TickerListener(fn, context, priority));
    };
    /**
     * Add a handler for the tick event which is only execute once.
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {*} [context] - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype.addOnce = function (fn, context, priority) {
        if (priority === void 0) { priority = UPDATE_PRIORITY.NORMAL; }
        return this._addListener(new TickerListener(fn, context, priority, true));
    };
    /**
     * Internally adds the event handler so that it can be sorted by priority.
     * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
     * before the rendering.
     *
     * @private
     * @param {TickerListener} listener - Current listener being added.
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype._addListener = function (listener) {
        // For attaching to head
        var current = this._head.next;
        var previous = this._head;
        // Add the first item
        if (!current) {
            listener.connect(previous);
        }
        else {
            // Go from highest to lowest priority
            while (current) {
                if (listener.priority > current.priority) {
                    listener.connect(previous);
                    break;
                }
                previous = current;
                current = current.next;
            }
            // Not yet connected
            if (!listener.previous) {
                listener.connect(previous);
            }
        }
        this._startIfPossible();
        return this;
    };
    /**
     * Removes any handlers matching the function and context parameters.
     * If no handlers are left after removing, then it cancels the animation frame.
     *
     * @param {Function} fn - The listener function to be removed
     * @param {*} [context] - The listener context to be removed
     * @returns {PIXI.Ticker} This instance of a ticker
     */
    Ticker.prototype.remove = function (fn, context) {
        var listener = this._head.next;
        while (listener) {
            // We found a match, lets remove it
            // no break to delete all possible matches
            // incase a listener was added 2+ times
            if (listener.match(fn, context)) {
                listener = listener.destroy();
            }
            else {
                listener = listener.next;
            }
        }
        if (!this._head.next) {
            this._cancelIfNeeded();
        }
        return this;
    };
    /**
     * Starts the ticker. If the ticker has listeners
     * a new animation frame is requested at this point.
     */
    Ticker.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this._requestIfNeeded();
        }
    };
    /**
     * Stops the ticker. If the ticker has requested
     * an animation frame it is canceled at this point.
     */
    Ticker.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this._cancelIfNeeded();
        }
    };
    /**
     * Destroy the ticker and don't use after this. Calling
     * this method removes all references to internal events.
     */
    Ticker.prototype.destroy = function () {
        if (!this._protected) {
            this.stop();
            var listener = this._head.next;
            while (listener) {
                listener = listener.destroy(true);
            }
            this._head.destroy();
            this._head = null;
        }
    };
    /**
     * Triggers an update. An update entails setting the
     * current {@link PIXI.Ticker#elapsedMS},
     * the current {@link PIXI.Ticker#deltaTime},
     * invoking all listeners with current deltaTime,
     * and then finally setting {@link PIXI.Ticker#lastTime}
     * with the value of currentTime that was provided.
     * This method will be called automatically by animation
     * frame callbacks if the ticker instance has been started
     * and listeners are added.
     *
     * @param {number} [currentTime=performance.now()] - the current time of execution
     */
    Ticker.prototype.update = function (currentTime) {
        if (currentTime === void 0) { currentTime = performance.now(); }
        var elapsedMS;
        // If the difference in time is zero or negative, we ignore most of the work done here.
        // If there is no valid difference, then should be no reason to let anyone know about it.
        // A zero delta, is exactly that, nothing should update.
        //
        // The difference in time can be negative, and no this does not mean time traveling.
        // This can be the result of a race condition between when an animation frame is requested
        // on the current JavaScript engine event loop, and when the ticker's start method is invoked
        // (which invokes the internal _requestIfNeeded method). If a frame is requested before
        // _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
        // can receive a time argument that can be less than the lastTime value that was set within
        // _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
        //
        // This check covers this browser engine timing issue, as well as if consumers pass an invalid
        // currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.
        if (currentTime > this.lastTime) {
            // Save uncapped elapsedMS for measurement
            elapsedMS = this.elapsedMS = currentTime - this.lastTime;
            // cap the milliseconds elapsed used for deltaTime
            if (elapsedMS > this._maxElapsedMS) {
                elapsedMS = this._maxElapsedMS;
            }
            elapsedMS *= this.speed;
            // If not enough time has passed, exit the function.
            // Get ready for next frame by setting _lastFrame, but based on _minElapsedMS
            // adjustment to ensure a relatively stable interval.
            if (this._minElapsedMS) {
                var delta = currentTime - this._lastFrame | 0;
                if (delta < this._minElapsedMS) {
                    return;
                }
                this._lastFrame = currentTime - (delta % this._minElapsedMS);
            }
            this.deltaMS = elapsedMS;
            this.deltaTime = this.deltaMS * _pixi_settings__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "b"].TARGET_FPMS;
            // Cache a local reference, in-case ticker is destroyed
            // during the emit, we can still check for head.next
            var head = this._head;
            // Invoke listeners added to internal emitter
            var listener = head.next;
            while (listener) {
                listener = listener.emit(this.deltaTime);
            }
            if (!head.next) {
                this._cancelIfNeeded();
            }
        }
        else {
            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        }
        this.lastTime = currentTime;
    };
    Object.defineProperty(Ticker.prototype, "FPS", {
        /**
         * The frames per second at which this ticker is running.
         * The default is approximately 60 in most modern browsers.
         * **Note:** This does not factor in the value of
         * {@link PIXI.Ticker#speed}, which is specific
         * to scaling {@link PIXI.Ticker#deltaTime}.
         *
         * @member {number}
         * @readonly
         */
        get: function () {
            return 1000 / this.elapsedMS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticker.prototype, "minFPS", {
        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This value is used to cap {@link PIXI.Ticker#deltaTime},
         * but does not effect the measured value of {@link PIXI.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
         *
         * @member {number}
         * @default 10
         */
        get: function () {
            return 1000 / this._maxElapsedMS;
        },
        set: function (fps) {
            // Minimum must be below the maxFPS
            var minFPS = Math.min(this.maxFPS, fps);
            // Must be at least 0, but below 1 / settings.TARGET_FPMS
            var minFPMS = Math.min(Math.max(0, minFPS) / 1000, _pixi_settings__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "b"].TARGET_FPMS);
            this._maxElapsedMS = 1 / minFPMS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticker.prototype, "maxFPS", {
        /**
         * Manages the minimum amount of milliseconds required to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This will effect the measured value of {@link PIXI.Ticker#FPS}.
         * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
         * Otherwise it will be at least `minFPS`
         *
         * @member {number}
         * @default 0
         */
        get: function () {
            if (this._minElapsedMS) {
                return Math.round(1000 / this._minElapsedMS);
            }
            return 0;
        },
        set: function (fps) {
            if (fps === 0) {
                this._minElapsedMS = 0;
            }
            else {
                // Max must be at least the minFPS
                var maxFPS = Math.max(this.minFPS, fps);
                this._minElapsedMS = 1 / (maxFPS / 1000);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticker, "shared", {
        /**
         * The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
         * {@link PIXI.VideoResource} to update animation frames / video textures.
         *
         * It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
         *
         * @example
         * let ticker = PIXI.Ticker.shared;
         * // Set this to prevent starting this ticker when listeners are added.
         * // By default this is true only for the PIXI.Ticker.shared instance.
         * ticker.autoStart = false;
         * // FYI, call this to ensure the ticker is stopped. It should be stopped
         * // if you have not attempted to render anything yet.
         * ticker.stop();
         * // Call this when you are ready for a running shared ticker.
         * ticker.start();
         *
         * @example
         * // You may use the shared ticker to render...
         * let renderer = PIXI.autoDetectRenderer();
         * let stage = new PIXI.Container();
         * document.body.appendChild(renderer.view);
         * ticker.add(function (time) {
         *     renderer.render(stage);
         * });
         *
         * @example
         * // Or you can just update it manually.
         * ticker.autoStart = false;
         * ticker.stop();
         * function animate(time) {
         *     ticker.update(time);
         *     renderer.render(stage);
         *     requestAnimationFrame(animate);
         * }
         * animate(performance.now());
         *
         * @member {PIXI.Ticker}
         * @static
         */
        get: function () {
            if (!Ticker._shared) {
                var shared = Ticker._shared = new Ticker();
                shared.autoStart = true;
                shared._protected = true;
            }
            return Ticker._shared;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticker, "system", {
        /**
         * The system ticker instance used by {@link PIXI.interaction.InteractionManager} and by
         * {@link PIXI.BasePrepare} for core timing functionality that shouldn't usually need to be paused,
         * unlike the `shared` ticker which drives visual animations and rendering which may want to be paused.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         *
         * @member {PIXI.Ticker}
         * @static
         */
        get: function () {
            if (!Ticker._system) {
                var system = Ticker._system = new Ticker();
                system.autoStart = true;
                system._protected = true;
            }
            return Ticker._system;
        },
        enumerable: true,
        configurable: true
    });
    return Ticker;
}());

/**
 * Middleware for for Application Ticker.
 *
 * @example
 * import {TickerPlugin} from '@pixi/ticker';
 * import {Application} from '@pixi/app';
 * Application.registerPlugin(TickerPlugin);
 *
 * @class
 * @memberof PIXI
 */
var TickerPlugin = /** @class */ (function () {
    function TickerPlugin() {
    }
    /**
     * Initialize the plugin with scope of application instance
     *
     * @static
     * @private
     * @param {object} [options] - See application options
     */
    TickerPlugin.init = function (options) {
        var _this = this;
        // Set default
        options = Object.assign({
            autoStart: true,
            sharedTicker: false,
        }, options);
        // Create ticker setter
        Object.defineProperty(this, 'ticker', {
            set: function (ticker) {
                if (this._ticker) {
                    this._ticker.remove(this.render, this);
                }
                this._ticker = ticker;
                if (ticker) {
                    ticker.add(this.render, this, UPDATE_PRIORITY.LOW);
                }
            },
            get: function () {
                return this._ticker;
            },
        });
        /**
         * Convenience method for stopping the render.
         *
         * @method PIXI.Application#stop
         */
        this.stop = function () {
            _this._ticker.stop();
        };
        /**
         * Convenience method for starting the render.
         *
         * @method PIXI.Application#start
         */
        this.start = function () {
            _this._ticker.start();
        };
        /**
         * Internal reference to the ticker.
         *
         * @type {PIXI.Ticker}
         * @name _ticker
         * @memberof PIXI.Application#
         * @private
         */
        this._ticker = null;
        /**
         * Ticker for doing render updates.
         *
         * @type {PIXI.Ticker}
         * @name ticker
         * @memberof PIXI.Application#
         * @default PIXI.Ticker.shared
         */
        this.ticker = options.sharedTicker ? Ticker.shared : new Ticker();
        // Start the rendering
        if (options.autoStart) {
            this.start();
        }
    };
    /**
     * Clean up the ticker, scoped to application.
     *
     * @static
     * @private
     */
    TickerPlugin.destroy = function () {
        if (this._ticker) {
            var oldTicker = this._ticker;
            this.ticker = null;
            oldTicker.destroy();
        }
    };
    return TickerPlugin;
}());


//# sourceMappingURL=ticker.es.js.map


/***/ })

}]);
//# sourceMappingURL=1.core_script_compiled.js.map