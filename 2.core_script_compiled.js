(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./modules/pixi-viewport/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export Plugin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewport; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./modules/pixi.js/index.js");























function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }
























function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



/**
 * @typedef ViewportTouch
 * @property {number} id
 * @property {PIXI.Point} last
*/

/**
 * handles all input for Viewport
 * @private
 */

var InputManager =
/*#__PURE__*/
function () {
  function InputManager(viewport) {
    _classCallCheck(this, InputManager);

    this.viewport = viewport;
    /**
     * list of active touches on viewport
     * @type {ViewportTouch[]}
     */

    this.touches = [];
    this.addListeners();
  }
  /**
   * add input listeners
   * @private
   */


  _createClass(InputManager, [{
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.viewport.interactive = true;

      if (!this.viewport.forceHitArea) {
        this.viewport.hitArea = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Rectangle"](0, 0, this.viewport.worldWidth, this.viewport.worldHeight);
      }

      this.viewport.on('pointerdown', this.down, this);
      this.viewport.on('pointermove', this.move, this);
      this.viewport.on('pointerup', this.up, this);
      this.viewport.on('pointerupoutside', this.up, this);
      this.viewport.on('pointercancel', this.up, this);
      this.viewport.on('pointerout', this.up, this);

      this.wheelFunction = function (e) {
        return _this.handleWheel(e);
      };

      this.viewport.options.divWheel.addEventListener('wheel', this.wheelFunction, {
        passive: this.viewport.options.passiveWheel
      });
      this.isMouseDown = false;
    }
    /**
     * removes all event listeners from viewport
     * (useful for cleanup of wheel when removing viewport)
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.viewport.options.divWheel.removeEventListener('wheel', this.wheelFunction);
    }
    /**
     * handle down events for viewport
     * @param {PIXI.interaction.InteractionEvent} event
     */

  }, {
    key: "down",
    value: function down(event) {
      if (this.viewport.pause || !this.viewport.worldVisible) {
        return;
      }

      if (event.data.pointerType === 'mouse') {
        this.isMouseDown = true;
      } else if (!this.get(event.data.pointerId)) {
        this.touches.push({
          id: event.data.pointerId,
          last: null
        });
      }

      if (this.count() === 1) {
        this.last = event.data.global.clone(); // clicked event does not fire if viewport is decelerating or bouncing

        var decelerate = this.viewport.plugins.get('decelerate');
        var bounce = this.viewport.plugins.get('bounce');

        if ((!decelerate || !decelerate.isActive()) && (!bounce || !bounce.isActive())) {
          this.clickedAvailable = true;
        } else {
          this.clickedAvailable = false;
        }
      } else {
        this.clickedAvailable = false;
      }

      var stop = this.viewport.plugins.down(event);

      if (stop && this.viewport.options.stopPropagation) {
        event.stopPropagation();
      }
    }
    /**
     * @param {number} change
     * @returns whether change exceeds threshold
     */

  }, {
    key: "checkThreshold",
    value: function checkThreshold(change) {
      if (Math.abs(change) >= this.viewport.threshold) {
        return true;
      }

      return false;
    }
    /**
     * handle move events for viewport
     * @param {PIXI.interaction.InteractionEvent} event
     */

  }, {
    key: "move",
    value: function move(event) {
      if (this.viewport.pause || !this.viewport.worldVisible) {
        return;
      }

      var stop = this.viewport.plugins.move(event);

      if (this.clickedAvailable) {
        var distX = event.data.global.x - this.last.x;
        var distY = event.data.global.y - this.last.y;

        if (this.checkThreshold(distX) || this.checkThreshold(distY)) {
          this.clickedAvailable = false;
        }
      }

      if (stop && this.viewport.options.stopPropagation) {
        event.stopPropagation();
      }
    }
    /**
     * handle up events for viewport
     * @param {PIXI.interaction.InteractionEvent} event
     */

  }, {
    key: "up",
    value: function up(event) {
      if (this.viewport.pause || !this.viewport.worldVisible) {
        return;
      }

      if (event.data.pointerType === 'mouse') {
        this.isMouseDown = false;
      }

      if (event.data.pointerType !== 'mouse') {
        this.remove(event.data.pointerId);
      }

      var stop = this.viewport.plugins.up(event);

      if (this.clickedAvailable && this.count() === 0) {
        this.viewport.emit('clicked', {
          screen: this.last,
          world: this.viewport.toWorld(this.last),
          viewport: this
        });
        this.clickedAvailable = false;
      }

      if (stop && this.viewport.options.stopPropagation) {
        event.stopPropagation();
      }
    }
    /**
     * gets pointer position if this.interaction is set
     * @param {WheelEvent} event
     * @return {PIXI.Point}
     */

  }, {
    key: "getPointerPosition",
    value: function getPointerPosition(event) {
      var point = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"]();

      if (this.viewport.options.interaction) {
        this.viewport.options.interaction.mapPositionToPoint(point, event.clientX, event.clientY);
      } else {
        point.x = event.clientX;
        point.y = event.clientY;
      }

      return point;
    }
    /**
     * handle wheel events
     * @param {WheelEvent} event
     */

  }, {
    key: "handleWheel",
    value: function handleWheel(event) {
      if (this.viewport.pause || !this.viewport.worldVisible) {
        return;
      } // only handle wheel events where the mouse is over the viewport


      var point = this.viewport.toLocal(this.getPointerPosition(event));

      if (this.viewport.left <= point.x && point.x <= this.viewport.right && this.viewport.top <= point.y && point.y <= this.viewport.bottom) {
        var stop = this.viewport.plugins.wheel(event);

        if (stop) {
          event.preventDefault();
        }
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.touches = [];
      this.isMouseDown = false;
    }
    /**
     * get touch by id
     * @param {number} id
     * @return {ViewportTouch}
     */

  }, {
    key: "get",
    value: function get(id) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.touches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var touch = _step.value;

          if (touch.id === id) {
            return touch;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
    /**
     * remove touch by number
     * @param {number} id
     */

  }, {
    key: "remove",
    value: function remove(id) {
      for (var i = 0; i < this.touches.length; i++) {
        if (this.touches[i].id === id) {
          this.touches.splice(i, 1);
          return;
        }
      }
    }
    /**
     * @returns {number} count of mouse/touch pointers that are down on the viewport
     */

  }, {
    key: "count",
    value: function count() {
      return (this.isMouseDown ? 1 : 0) + this.touches.length;
    }
  }]);

  return InputManager;
}();

var PLUGIN_ORDER = ['drag', 'pinch', 'wheel', 'follow', 'mouse-edges', 'decelerate', 'bounce', 'snap-zoom', 'clamp-zoom', 'snap', 'clamp'];
/**
 * Use this to access current plugins or add user-defined plugins
 */

var PluginManager =
/*#__PURE__*/
function () {
  /**
   * instantiated by Viewport
   * @param {Viewport} viewport
   */
  function PluginManager(viewport) {
    _classCallCheck(this, PluginManager);

    this.viewport = viewport;
    this.list = [];
    this.plugins = {};
  }
  /**
   * Inserts a named plugin or a user plugin into the viewport
   * default plugin order: 'drag', 'pinch', 'wheel', 'follow', 'mouse-edges', 'decelerate', 'bounce', 'snap-zoom', 'clamp-zoom', 'snap', 'clamp'
   * @param {string} name of plugin
   * @param {Plugin} plugin - instantiated Plugin class
   * @param {number} index to insert userPlugin (otherwise inserts it at the end)
   */


  _createClass(PluginManager, [{
    key: "add",
    value: function add(name, plugin) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PLUGIN_ORDER.length;
      this.plugins[name] = plugin;
      var current = PLUGIN_ORDER.indexOf(name);

      if (current !== -1) {
        PLUGIN_ORDER.splice(current, 1);
      }

      PLUGIN_ORDER.splice(index, 0, name);
      this.sort();
    }
    /**
     * get plugin
     * @param {string} name of plugin
     * @return {Plugin}
     */

  }, {
    key: "get",
    value: function get(name) {
      return this.plugins[name];
    }
    /**
     * update all active plugins
     * @private
     * @param {number} elapsed type in milliseconds since last update
     */

  }, {
    key: "update",
    value: function update(elapsed) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var plugin = _step2.value;
          plugin.update(elapsed);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    /**
     * resize all active plugins
     * @private
     */

  }, {
    key: "resize",
    value: function resize() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var plugin = _step3.value;
          plugin.resize();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
    /**
     * clamps and resets bounce and decelerate (as needed) after manually moving viewport
     */

  }, {
    key: "reset",
    value: function reset() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var plugin = _step4.value;
          plugin.reset();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
    /**
     * removes installed plugin
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */

  }, {
    key: "remove",
    value: function remove(name) {
      if (this.plugins[name]) {
        this.plugins[name] = null;
        this.viewport.emit(name + '-remove');
        this.sort();
      }
    }
    /**
     * pause plugin
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */

  }, {
    key: "pause",
    value: function pause(name) {
      if (this.plugins[name]) {
        this.plugins[name].pause();
      }
    }
    /**
     * resume plugin
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */

  }, {
    key: "resume",
    value: function resume(name) {
      if (this.plugins[name]) {
        this.plugins[name].resume();
      }
    }
    /**
     * sort plugins according to PLUGIN_ORDER
     * @private
     */

  }, {
    key: "sort",
    value: function sort() {
      this.list = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = PLUGIN_ORDER[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var plugin = _step5.value;

          if (this.plugins[plugin]) {
            this.list.push(this.plugins[plugin]);
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
    /**
     * handle down for all plugins
     * @private
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "down",
    value: function down(event) {
      var stop = false;
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.list[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var plugin = _step6.value;

          if (plugin.down(event)) {
            stop = true;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return stop;
    }
    /**
     * handle move for all plugins
     * @private
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "move",
    value: function move(event) {
      var stop = false;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.viewport.plugins.list[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var plugin = _step7.value;

          if (plugin.move(event)) {
            stop = true;
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return stop;
    }
    /**
     * handle up for all plugins
     * @private
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "up",
    value: function up(event) {
      var stop = false;
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this.list[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var plugin = _step8.value;

          if (plugin.up(event)) {
            stop = true;
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return stop;
    }
    /**
     * handle wheel event for all plugins
     * @private
     * @param {WheelEvent} event
     * @returns {boolean}
     */

  }, {
    key: "wheel",
    value: function wheel(e) {
      var result = false;
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = this.list[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var plugin = _step9.value;

          if (plugin.wheel(e)) {
            result = true;
          }
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
            _iterator9["return"]();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return result;
    }
  }]);

  return PluginManager;
}();
/**
 * derive this class to create user-defined plugins
 */


var Plugin =
/*#__PURE__*/
function () {
  /**
   * @param {Viewport} parent
   */
  function Plugin(parent) {
    _classCallCheck(this, Plugin);

    this.parent = parent;
    this.paused = false;
  }
  /** called when plugin is removed */


  _createClass(Plugin, [{
    key: "destroy",
    value: function destroy() {}
    /**
     * handler for pointerdown PIXI event
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "down",
    value: function down() {
      return false;
    }
    /**
     * handler for pointermove PIXI event
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "move",
    value: function move() {
      return false;
    }
    /**
     * handler for pointerup PIXI event
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "up",
    value: function up() {
      return false;
    }
    /**
     * handler for wheel event on div
     * @param {WheelEvent} event
     * @returns {boolean}
     */

  }, {
    key: "wheel",
    value: function wheel() {
      return false;
    }
    /**
     * called on each tick
     * @param {number} elapsed time in millisecond since last update
     */

  }, {
    key: "update",
    value: function update() {}
    /** called when the viewport is resized */

  }, {
    key: "resize",
    value: function resize() {}
    /** called when the viewport is manually moved */

  }, {
    key: "reset",
    value: function reset() {}
    /** pause the plugin */

  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
    /** un-pause the plugin */

  }, {
    key: "resume",
    value: function resume() {
      this.paused = false;
    }
  }]);

  return Plugin;
}();
/**
 * @typedef {object} LastDrag
 * @property {number} x
 * @property {number} y
 * @property {PIXI.Point} parent
 */

/**
 * @typedef DragOptions
 * @property {string} [direction=all] direction to drag
 * @property {boolean} [wheel=true] use wheel to scroll in y direction(unless wheel plugin is active)
 * @property {number} [wheelScroll=1] number of pixels to scroll with each wheel spin
 * @property {boolean} [reverse] reverse the direction of the wheel scroll
 * @property {(boolean|string)} [clampWheel=false] clamp wheel(to avoid weird bounce with mouse wheel)
 * @property {string} [underflow=center] where to place world if too small for screen
 * @property {number} [factor=1] factor to multiply drag to increase the speed of movement
 * @property {string} [mouseButtons=all] changes which mouse buttons trigger drag, use: 'all', 'left', right' 'middle', or some combination, like, 'middle-right'; you may want to set viewport.options.disableOnContextMenu if you want to use right-click dragging
 * @property {string[]} [keyToPress=null] array containing {@link key|https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code} codes of keys that can be pressed for the drag to be triggered, e.g.: ['ShiftLeft', 'ShiftRight'}.
 * @property {boolean} [ignoreKeyToPressOnTouch=false] ignore keyToPress for touch events
 */


var dragOptions = {
  direction: 'all',
  wheel: true,
  wheelScroll: 1,
  reverse: false,
  clampWheel: false,
  underflow: 'center',
  factor: 1,
  mouseButtons: 'all',
  keyToPress: null,
  ignoreKeyToPressOnTouch: false
};
/**
 * @private
 */

var Drag =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Drag, _Plugin);
  /**
   * @param {Viewport} parent
   * @param {DragOptions} options
   */


  function Drag(parent) {
    var _this2;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Drag);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Drag).call(this, parent));
    _this2.options = Object.assign({}, dragOptions, options);
    _this2.moved = false;
    _this2.reverse = _this2.options.reverse ? 1 : -1;
    _this2.xDirection = !_this2.options.direction || _this2.options.direction === 'all' || _this2.options.direction === 'x';
    _this2.yDirection = !_this2.options.direction || _this2.options.direction === 'all' || _this2.options.direction === 'y';
    _this2.keyIsPressed = false;

    _this2.parseUnderflow();

    _this2.mouseButtons(_this2.options.mouseButtons);

    if (_this2.options.keyToPress) {
      _this2.handleKeyPresses(_this2.options.keyToPress);
    }

    return _this2;
  }
  /**
   * Handles keypress events and set the keyIsPressed boolean accordingly
   * @param {array} codes - key codes that can be used to trigger drag event
   */


  _createClass(Drag, [{
    key: "handleKeyPresses",
    value: function handleKeyPresses(codes) {
      var _this3 = this;

      parent.addEventListener("keydown", function (e) {
        if (codes.includes(e.code)) _this3.keyIsPressed = true;
      });
      parent.addEventListener("keyup", function (e) {
        if (codes.includes(e.code)) _this3.keyIsPressed = false;
      });
    }
    /**
     * initialize mousebuttons array
     * @param {string} buttons
     */

  }, {
    key: "mouseButtons",
    value: function mouseButtons(buttons) {
      if (!buttons || buttons === 'all') {
        this.mouse = [true, true, true];
      } else {
        this.mouse = [buttons.indexOf('left') === -1 ? false : true, buttons.indexOf('middle') === -1 ? false : true, buttons.indexOf('right') === -1 ? false : true];
      }
    }
  }, {
    key: "parseUnderflow",
    value: function parseUnderflow() {
      var clamp = this.options.underflow.toLowerCase();

      if (clamp === 'center') {
        this.underflowX = 0;
        this.underflowY = 0;
      } else {
        this.underflowX = clamp.indexOf('left') !== -1 ? -1 : clamp.indexOf('right') !== -1 ? 1 : 0;
        this.underflowY = clamp.indexOf('top') !== -1 ? -1 : clamp.indexOf('bottom') !== -1 ? 1 : 0;
      }
    }
    /**
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "checkButtons",
    value: function checkButtons(event) {
      var isMouse = event.data.pointerType === 'mouse';
      var count = this.parent.input.count();

      if (count === 1 || count > 1 && !this.parent.plugins.get('pinch')) {
        if (!isMouse || this.mouse[event.data.button]) {
          return true;
        }
      }

      return false;
    }
    /**
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "checkKeyPress",
    value: function checkKeyPress(event) {
      if (!this.options.keyToPress || this.keyIsPressed || this.options.ignoreKeyToPressOnTouch && event.data.pointerType === 'touch') return true;
      return false;
    }
    /**
     * @param {PIXI.interaction.InteractionEvent} event
     */

  }, {
    key: "down",
    value: function down(event) {
      if (this.paused) {
        return;
      }

      if (this.checkButtons(event) && this.checkKeyPress(event)) {
        this.last = {
          x: event.data.global.x,
          y: event.data.global.y
        };
        this.current = event.data.pointerId;
        return true;
      } else {
        this.last = null;
      }
    }
  }, {
    key: "move",

    /**
     * @param {PIXI.interaction.InteractionEvent} event
     */
    value: function move(event) {
      if (this.paused) {
        return;
      }

      if (this.last && this.current === event.data.pointerId) {
        var x = event.data.global.x;
        var y = event.data.global.y;
        var count = this.parent.input.count();

        if (count === 1 || count > 1 && !this.parent.plugins.get('pinch')) {
          var distX = x - this.last.x;
          var distY = y - this.last.y;

          if (this.moved || this.xDirection && this.parent.input.checkThreshold(distX) || this.yDirection && this.parent.input.checkThreshold(distY)) {
            var newPoint = {
              x: x,
              y: y
            };

            if (this.xDirection) {
              this.parent.x += (newPoint.x - this.last.x) * this.options.factor;
            }

            if (this.yDirection) {
              this.parent.y += (newPoint.y - this.last.y) * this.options.factor;
            }

            this.last = newPoint;

            if (!this.moved) {
              this.parent.emit('drag-start', {
                screen: new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](this.last.x, this.last.y),
                world: this.parent.toWorld(new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](this.last.x, this.last.y)),
                viewport: this.parent
              });
            }

            this.moved = true;
            this.parent.emit('moved', {
              viewport: this.parent,
              type: 'drag'
            });
            return true;
          }
        } else {
          this.moved = false;
        }
      }
    }
    /**
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "up",
    value: function up() {
      if (this.paused) {
        return;
      }

      var touches = this.parent.input.touches;

      if (touches.length === 1) {
        var pointer = touches[0];

        if (pointer.last) {
          this.last = {
            x: pointer.last.x,
            y: pointer.last.y
          };
          this.current = pointer.id;
        }

        this.moved = false;
        return true;
      } else if (this.last) {
        if (this.moved) {
          var screen = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](this.last.x, this.last.y);
          this.parent.emit('drag-end', {
            screen: screen,
            world: this.parent.toWorld(screen),
            viewport: this.parent
          });
          this.last = null;
          this.moved = false;
          return true;
        }
      }
    }
    /**
     * @param {WheelEvent} event
     * @returns {boolean}
     */

  }, {
    key: "wheel",
    value: function wheel(event) {
      if (this.paused) {
        return;
      }

      if (this.options.wheel) {
        var wheel = this.parent.plugins.get('wheel');

        if (!wheel) {
          if (this.xDirection) {
            this.parent.x += event.deltaX * this.options.wheelScroll * this.reverse;
          }

          if (this.yDirection) {
            this.parent.y += event.deltaY * this.options.wheelScroll * this.reverse;
          }

          if (this.options.clampWheel) {
            this.clamp();
          }

          this.parent.emit('wheel-scroll', this.parent);
          this.parent.emit('moved', {
            viewport: this.parent,
            type: 'wheel'
          });

          if (!this.parent.options.passiveWheel) {
            event.preventDefault();
          }

          return true;
        }
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      this.last = null;
      this.paused = false;
    }
  }, {
    key: "clamp",
    value: function clamp() {
      var decelerate = this.parent.plugins.get('decelerate') || {};

      if (this.options.clampWheel !== 'y') {
        if (this.parent.screenWorldWidth < this.parent.screenWidth) {
          switch (this.underflowX) {
            case -1:
              this.parent.x = 0;
              break;

            case 1:
              this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth;
              break;

            default:
              this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
          }
        } else {
          if (this.parent.left < 0) {
            this.parent.x = 0;
            decelerate.x = 0;
          } else if (this.parent.right > this.parent.worldWidth) {
            this.parent.x = -this.parent.worldWidth * this.parent.scale.x + this.parent.screenWidth;
            decelerate.x = 0;
          }
        }
      }

      if (this.options.clampWheel !== 'x') {
        if (this.parent.screenWorldHeight < this.parent.screenHeight) {
          switch (this.underflowY) {
            case -1:
              this.parent.y = 0;
              break;

            case 1:
              this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight;
              break;

            default:
              this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
          }
        } else {
          if (this.parent.top < 0) {
            this.parent.y = 0;
            decelerate.y = 0;
          }

          if (this.parent.bottom > this.parent.worldHeight) {
            this.parent.y = -this.parent.worldHeight * this.parent.scale.y + this.parent.screenHeight;
            decelerate.y = 0;
          }
        }
      }
    }
  }, {
    key: "active",
    get: function get() {
      return this.moved;
    }
  }]);

  return Drag;
}(Plugin);
/**
 * @typedef {object} PinchOptions
 * @property {boolean} [noDrag] disable two-finger dragging
 * @property {number} [percent=1.0] percent to modify pinch speed
 * @property {PIXI.Point} [center] place this point at center during zoom instead of center of two fingers
 */


var pinchOptions = {
  noDrag: false,
  percent: 1.0,
  center: null
};

var Pinch =
/*#__PURE__*/
function (_Plugin2) {
  _inherits(Pinch, _Plugin2);
  /**
   * @private
   * @param {Viewport} parent
   * @param {PinchOptions} [options]
   */


  function Pinch(parent) {
    var _this4;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Pinch);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Pinch).call(this, parent));
    _this4.options = Object.assign({}, pinchOptions, options);
    return _this4;
  }

  _createClass(Pinch, [{
    key: "down",
    value: function down() {
      if (this.parent.input.count() >= 2) {
        this.active = true;
        return true;
      }
    }
  }, {
    key: "move",
    value: function move(e) {
      if (this.paused || !this.active) {
        return;
      }

      var x = e.data.global.x;
      var y = e.data.global.y;
      var pointers = this.parent.input.touches;

      if (pointers.length >= 2) {
        var first = pointers[0];
        var second = pointers[1];
        var last = first.last && second.last ? Math.sqrt(Math.pow(second.last.x - first.last.x, 2) + Math.pow(second.last.y - first.last.y, 2)) : null;

        if (first.id === e.data.pointerId) {
          first.last = {
            x: x,
            y: y,
            data: e.data
          };
        } else if (second.id === e.data.pointerId) {
          second.last = {
            x: x,
            y: y,
            data: e.data
          };
        }

        if (last) {
          var oldPoint;
          var point = {
            x: first.last.x + (second.last.x - first.last.x) / 2,
            y: first.last.y + (second.last.y - first.last.y) / 2
          };

          if (!this.options.center) {
            oldPoint = this.parent.toLocal(point);
          }

          var dist = Math.sqrt(Math.pow(second.last.x - first.last.x, 2) + Math.pow(second.last.y - first.last.y, 2));
          var change = (dist - last) / this.parent.screenWidth * this.parent.scale.x * this.options.percent;
          this.parent.scale.x += change;
          this.parent.scale.y += change;
          this.parent.emit('zoomed', {
            viewport: this.parent,
            type: 'pinch'
          });
          var clamp = this.parent.plugins.get('clamp-zoom');

          if (clamp) {
            clamp.clamp();
          }

          if (this.options.center) {
            this.parent.moveCenter(this.options.center);
          } else {
            var newPoint = this.parent.toGlobal(oldPoint);
            this.parent.x += point.x - newPoint.x;
            this.parent.y += point.y - newPoint.y;
            this.parent.emit('moved', {
              viewport: this.parent,
              type: 'pinch'
            });
          }

          if (!this.options.noDrag && this.lastCenter) {
            this.parent.x += point.x - this.lastCenter.x;
            this.parent.y += point.y - this.lastCenter.y;
            this.parent.emit('moved', {
              viewport: this.parent,
              type: 'pinch'
            });
          }

          this.lastCenter = point;
          this.moved = true;
        } else {
          if (!this.pinching) {
            this.parent.emit('pinch-start', this.parent);
            this.pinching = true;
          }
        }

        return true;
      }
    }
  }, {
    key: "up",
    value: function up() {
      if (this.pinching) {
        if (this.parent.input.touches.length <= 1) {
          this.active = false;
          this.lastCenter = null;
          this.pinching = false;
          this.moved = false;
          this.parent.emit('pinch-end', this.parent);
          return true;
        }
      }
    }
  }]);

  return Pinch;
}(Plugin);
/**
 * @typedef ClampOptions
 * @property {(number|boolean)} [left=false] clamp left; true = 0
 * @property {(number|boolean)} [right=false] clamp right; true = viewport.worldWidth
 * @property {(number|boolean)} [top=false] clamp top; true = 0
 * @property {(number|boolean)} [bottom=false] clamp bottom; true = viewport.worldHeight
 * @property {string} [direction] (all, x, or y) using clamps of [0, viewport.worldWidth/viewport.worldHeight]; replaces left/right/top/bottom if set
 * @property {string} [underflow=center] where to place world if too small for screen (e.g., top-right, center, none, bottomleft)
 */


var clampOptions = {
  left: false,
  right: false,
  top: false,
  bottom: false,
  direction: null,
  underflow: 'center'
};

var Clamp =
/*#__PURE__*/
function (_Plugin3) {
  _inherits(Clamp, _Plugin3);
  /**
   * @private
   * @param {Viewport} parent
   * @param {ClampOptions} [options]
   */


  function Clamp(parent) {
    var _this5;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Clamp);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Clamp).call(this, parent));
    _this5.options = Object.assign({}, clampOptions, options);

    if (_this5.options.direction) {
      _this5.options.left = _this5.options.direction === 'x' || _this5.options.direction === 'all' ? true : null;
      _this5.options.right = _this5.options.direction === 'x' || _this5.options.direction === 'all' ? true : null;
      _this5.options.top = _this5.options.direction === 'y' || _this5.options.direction === 'all' ? true : null;
      _this5.options.bottom = _this5.options.direction === 'y' || _this5.options.direction === 'all' ? true : null;
    }

    _this5.parseUnderflow();

    _this5.last = {
      x: null,
      y: null,
      scaleX: null,
      scaleY: null
    };

    _this5.update();

    return _this5;
  }

  _createClass(Clamp, [{
    key: "parseUnderflow",
    value: function parseUnderflow() {
      var clamp = this.options.underflow.toLowerCase();

      if (clamp === 'none') {
        this.noUnderflow = true;
      } else if (clamp === 'center') {
        this.underflowX = this.underflowY = 0;
        this.noUnderflow = false;
      } else {
        this.underflowX = clamp.indexOf('left') !== -1 ? -1 : clamp.indexOf('right') !== -1 ? 1 : 0;
        this.underflowY = clamp.indexOf('top') !== -1 ? -1 : clamp.indexOf('bottom') !== -1 ? 1 : 0;
        this.noUnderflow = false;
      }
    }
    /**
     * handle move events
     * @param {PIXI.interaction.InteractionEvent} event
     * @returns {boolean}
     */

  }, {
    key: "move",
    value: function move() {
      this.update();
      return false;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.paused) {
        return;
      } // only clamp on change


      if (this.parent.x === this.last.x && this.parent.y === this.last.y && this.parent.scale.x === this.last.scaleX && this.parent.scale.y === this.last.scaleY) {
        return;
      }

      var original = {
        x: this.parent.x,
        y: this.parent.y
      };
      var decelerate = this.parent.plugins['decelerate'] || {};

      if (this.options.left !== null || this.options.right !== null) {
        var moved = false;

        if (this.parent.screenWorldWidth < this.parent.screenWidth) {
          if (!this.noUnderflow) {
            switch (this.underflowX) {
              case -1:
                if (this.parent.x !== 0) {
                  this.parent.x = 0;
                  moved = true;
                }

                break;

              case 1:
                if (this.parent.x !== this.parent.screenWidth - this.parent.screenWorldWidth) {
                  this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth;
                  moved = true;
                }

                break;

              default:
                if (this.parent.x !== (this.parent.screenWidth - this.parent.screenWorldWidth) / 2) {
                  this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
                  moved = true;
                }

            }
          }
        } else {
          if (this.options.left !== null) {
            if (this.parent.left < (this.options.left === true ? 0 : this.options.left)) {
              this.parent.x = -(this.options.left === true ? 0 : this.options.left) * this.parent.scale.x;
              decelerate.x = 0;
              moved = true;
            }
          }

          if (this.options.right !== null) {
            if (this.parent.right > (this.options.right === true ? this.parent.worldWidth : this.options.right)) {
              this.parent.x = -(this.options.right === true ? this.parent.worldWidth : this.options.right) * this.parent.scale.x + this.parent.screenWidth;
              decelerate.x = 0;
              moved = true;
            }
          }
        }

        if (moved) {
          this.parent.emit('moved', {
            viewport: this.parent,
            original: original,
            type: 'clamp-x'
          });
        }
      }

      if (this.options.top !== null || this.options.bottom !== null) {
        var _moved = false;

        if (this.parent.screenWorldHeight < this.parent.screenHeight) {
          if (!this.noUnderflow) {
            switch (this.underflowY) {
              case -1:
                if (this.parent.y !== 0) {
                  this.parent.y = 0;
                  _moved = true;
                }

                break;

              case 1:
                if (this.parent.y !== this.parent.screenHeight - this.parent.screenWorldHeight) {
                  this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight;
                  _moved = true;
                }

                break;

              default:
                if (this.parent.y !== (this.parent.screenHeight - this.parent.screenWorldHeight) / 2) {
                  this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
                  _moved = true;
                }

            }
          }
        } else {
          if (this.options.top !== null) {
            if (this.parent.top < (this.options.top === true ? 0 : this.options.top)) {
              this.parent.y = -(this.options.top === true ? 0 : this.options.top) * this.parent.scale.y;
              decelerate.y = 0;
              _moved = true;
            }
          }

          if (this.options.bottom !== null) {
            if (this.parent.bottom > (this.options.bottom === true ? this.parent.worldHeight : this.options.bottom)) {
              this.parent.y = -(this.options.bottom === true ? this.parent.worldHeight : this.options.bottom) * this.parent.scale.y + this.parent.screenHeight;
              decelerate.y = 0;
              _moved = true;
            }
          }
        }

        if (_moved) {
          this.parent.emit('moved', {
            viewport: this.parent,
            original: original,
            type: 'clamp-y'
          });
        }
      }

      this.last.x = this.parent.x;
      this.last.y = this.parent.y;
      this.last.scaleX = this.parent.scale.x;
      this.last.scaleY = this.parent.scale.y;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.update();
    }
  }]);

  return Clamp;
}(Plugin);
/**
 * @typedef {object} ClampZoomOptions
 * @property {number} [minWidth] minimum width
 * @property {number} [minHeight] minimum height
 * @property {number} [maxWidth] maximum width
 * @property {number} [maxHeight] maximum height
 */


var clampZoomOptions = {
  minWidth: null,
  minHeight: null,
  maxWidth: null,
  maxHeight: null
};

var ClampZoom =
/*#__PURE__*/
function (_Plugin4) {
  _inherits(ClampZoom, _Plugin4);
  /**
   * @private
   * @param {Viewport} parent
   * @param {ClampZoomOptions} [options]
   */


  function ClampZoom(parent) {
    var _this6;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ClampZoom);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ClampZoom).call(this, parent));
    _this6.options = Object.assign({}, clampZoomOptions, options);

    _this6.clamp();

    return _this6;
  }

  _createClass(ClampZoom, [{
    key: "resize",
    value: function resize() {
      this.clamp();
    }
  }, {
    key: "clamp",
    value: function clamp() {
      if (this.paused) {
        return;
      }

      var width = this.parent.worldScreenWidth;
      var height = this.parent.worldScreenHeight;

      if (this.options.minWidth !== null && width < this.options.minWidth) {
        var original = this.parent.scale.x;
        this.parent.fitWidth(this.options.minWidth, false, false, true);
        this.parent.scale.y *= this.parent.scale.x / original;
        width = this.parent.worldScreenWidth;
        height = this.parent.worldScreenHeight;
        this.parent.emit('zoomed', {
          viewport: this.parent,
          type: 'clamp-zoom'
        });
      }

      if (this.options.maxWidth !== null && width > this.options.maxWidth) {
        var _original = this.parent.scale.x;
        this.parent.fitWidth(this.options.maxWidth, false, false, true);
        this.parent.scale.y *= this.parent.scale.x / _original;
        width = this.parent.worldScreenWidth;
        height = this.parent.worldScreenHeight;
        this.parent.emit('zoomed', {
          viewport: this.parent,
          type: 'clamp-zoom'
        });
      }

      if (this.options.minHeight !== null && height < this.options.minHeight) {
        var _original2 = this.parent.scale.y;
        this.parent.fitHeight(this.options.minHeight, false, false, true);
        this.parent.scale.x *= this.parent.scale.y / _original2;
        width = this.parent.worldScreenWidth;
        height = this.parent.worldScreenHeight;
        this.parent.emit('zoomed', {
          viewport: this.parent,
          type: 'clamp-zoom'
        });
      }

      if (this.options.maxHeight !== null && height > this.options.maxHeight) {
        var _original3 = this.parent.scale.y;
        this.parent.fitHeight(this.options.maxHeight, false, false, true);
        this.parent.scale.x *= this.parent.scale.y / _original3;
        this.parent.emit('zoomed', {
          viewport: this.parent,
          type: 'clamp-zoom'
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.clamp();
    }
  }]);

  return ClampZoom;
}(Plugin);
/**
 * @typedef {object} DecelerateOptions
 * @property {number} [friction=0.95] percent to decelerate after movement
 * @property {number} [bounce=0.8] percent to decelerate when past boundaries (only applicable when viewport.bounce() is active)
 * @property {number} [minSpeed=0.01] minimum velocity before stopping/reversing acceleration
 */


var decelerateOptions = {
  friction: 0.95,
  bounce: 0.8,
  minSpeed: 0.01
};

var Decelerate =
/*#__PURE__*/
function (_Plugin5) {
  _inherits(Decelerate, _Plugin5);
  /**
   * @private
   * @param {Viewport} parent
   * @param {DecelerateOptions} [options]
   */


  function Decelerate(parent) {
    var _this7;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Decelerate);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Decelerate).call(this, parent));
    _this7.options = Object.assign({}, decelerateOptions, options);
    _this7.saved = [];

    _this7.reset();

    _this7.parent.on('moved', function (data) {
      return _this7.moved(data);
    });

    return _this7;
  }

  _createClass(Decelerate, [{
    key: "destroy",
    value: function destroy() {
      this.parent;
    }
  }, {
    key: "down",
    value: function down() {
      this.saved = [];
      this.x = this.y = false;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.x || this.y;
    }
  }, {
    key: "move",
    value: function move() {
      if (this.paused) {
        return;
      }

      var count = this.parent.input.count();

      if (count === 1 || count > 1 && !this.parent.plugins.get('pinch')) {
        this.saved.push({
          x: this.parent.x,
          y: this.parent.y,
          time: performance.now()
        });

        if (this.saved.length > 60) {
          this.saved.splice(0, 30);
        }
      }
    }
  }, {
    key: "moved",
    value: function moved(data) {
      if (this.saved.length) {
        var last = this.saved[this.saved.length - 1];

        if (data.type === 'clamp-x') {
          if (last.x === data.original.x) {
            last.x = this.parent.x;
          }
        } else if (data.type === 'clamp-y') {
          if (last.y === data.original.y) {
            last.y = this.parent.y;
          }
        }
      }
    }
  }, {
    key: "up",
    value: function up() {
      if (this.parent.input.count() === 0 && this.saved.length) {
        var now = performance.now();
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = this.saved[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var save = _step10.value;

            if (save.time >= now - 100) {
              var time = now - save.time;
              this.x = (this.parent.x - save.x) / time;
              this.y = (this.parent.y - save.y) / time;
              this.percentChangeX = this.percentChangeY = this.options.friction;
              break;
            }
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
              _iterator10["return"]();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      }
    }
    /**
     * manually activate plugin
     * @param {object} options
     * @param {number} [options.x]
     * @param {number} [options.y]
     */

  }, {
    key: "activate",
    value: function activate(options) {
      options = options || {};

      if (typeof options.x !== 'undefined') {
        this.x = options.x;
        this.percentChangeX = this.options.friction;
      }

      if (typeof options.y !== 'undefined') {
        this.y = options.y;
        this.percentChangeY = this.options.friction;
      }
    }
  }, {
    key: "update",
    value: function update(elapsed) {
      if (this.paused) {
        return;
      }

      var moved;

      if (this.x) {
        this.parent.x += this.x * elapsed;
        this.x *= this.percentChangeX;

        if (Math.abs(this.x) < this.options.minSpeed) {
          this.x = 0;
        }

        moved = true;
      }

      if (this.y) {
        this.parent.y += this.y * elapsed;
        this.y *= this.percentChangeY;

        if (Math.abs(this.y) < this.options.minSpeed) {
          this.y = 0;
        }

        moved = true;
      }

      if (moved) {
        this.parent.emit('moved', {
          viewport: this.parent,
          type: 'decelerate'
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.x = this.y = null;
    }
  }]);

  return Decelerate;
}(Plugin);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var penner = createCommonjsModule(function (module, exports) {
  /*
  	Copyright © 2001 Robert Penner
  	All rights reserved.
  
  	Redistribution and use in source and binary forms, with or without modification, 
  	are permitted provided that the following conditions are met:
  
  	Redistributions of source code must retain the above copyright notice, this list of 
  	conditions and the following disclaimer.
  	Redistributions in binary form must reproduce the above copyright notice, this list 
  	of conditions and the following disclaimer in the documentation and/or other materials 
  	provided with the distribution.
  
  	Neither the name of the author nor the names of contributors may be used to endorse 
  	or promote products derived from this software without specific prior written permission.
  
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
  	EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
  	MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
  	COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  	EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
  	GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
  	AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  	NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
  	OF THE POSSIBILITY OF SUCH DAMAGE.
   */
  (function () {
    var penner, umd;

    umd = function umd(factory) {
      {
        return module.exports = factory;
      }
    };

    penner = {
      linear: function linear(t, b, c, d) {
        return c * t / d + b;
      },
      easeInQuad: function easeInQuad(t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function easeOutQuad(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        } else {
          return -c / 2 * (--t * (t - 2) - 1) + b;
        }
      },
      easeInCubic: function easeInCubic(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function easeOutCubic(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
      },
      easeInQuart: function easeInQuart(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function easeOutQuart(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function easeInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t + b;
        } else {
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
      },
      easeInQuint: function easeInQuint(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function easeOutQuint(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function easeInOutQuint(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
      },
      easeInSine: function easeInSine(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function easeOutSine(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOutSine: function easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },
      easeInExpo: function easeInExpo(t, b, c, d) {
        if (t === 0) {
          return b;
        } else {
          return c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
      },
      easeOutExpo: function easeOutExpo(t, b, c, d) {
        if (t === d) {
          return b + c;
        } else {
          return c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
      },
      easeInOutExpo: function easeInOutExpo(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        } else {
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
      },
      easeInCirc: function easeInCirc(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function easeOutCirc(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function easeInOutCirc(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        } else {
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
      },
      easeInElastic: function easeInElastic(t, b, c, d) {
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) ;else if ((t /= d) === 1) ;

        if (!p) {
          p = d * .3;
        }

        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOutElastic: function easeOutElastic(t, b, c, d) {
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) ;else if ((t /= d) === 1) ;

        if (!p) {
          p = d * .3;
        }

        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOutElastic: function easeInOutElastic(t, b, c, d) {
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) ;else if ((t /= d / 2) === 2) ;

        if (!p) {
          p = d * (.3 * 1.5);
        }

        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        if (t < 1) {
          return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        } else {
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
      },
      easeInBack: function easeInBack(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }

        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function easeOutBack(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }

        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function easeInOutBack(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }

        if ((t /= d / 2) < 1) {
          return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        } else {
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
      },
      easeInBounce: function easeInBounce(t, b, c, d) {
        var v;
        v = penner.easeOutBounce(d - t, 0, c, d);
        return c - v + b;
      },
      easeOutBounce: function easeOutBounce(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
      },
      easeInOutBounce: function easeInOutBounce(t, b, c, d) {
        var v;

        if (t < d / 2) {
          v = penner.easeInBounce(t * 2, 0, c, d);
          return v * .5 + b;
        } else {
          v = penner.easeOutBounce(t * 2 - d, 0, c, d);
          return v * .5 + c * .5 + b;
        }
      }
    };
    umd(penner);
  }).call(commonjsGlobal);
});
/**
 * returns correct Penner equation using string or Function
 * @param {(function|string)} [ease]
 * @param {defaults} default penner equation to use if none is provided
 */

function ease(ease, defaults) {
  if (!ease) {
    return penner[defaults];
  } else if (typeof ease === 'function') {
    return ease;
  } else if (typeof ease === 'string') {
    return penner[ease];
  }
}
/**
 * @typedef {options} BounceOptions
 * @property {string} [sides=all] all, horizontal, vertical, or combination of top, bottom, right, left (e.g., 'top-bottom-right')
 * @property {number} [friction=0.5] friction to apply to decelerate if active
 * @property {number} [time=150] time in ms to finish bounce
 * @property {object} [bounceBox] use this bounceBox instead of (0, 0, viewport.worldWidth, viewport.worldHeight)
 * @property {number} [bounceBox.x=0]
 * @property {number} [bounceBox.y=0]
 * @property {number} [bounceBox.width=viewport.worldWidth]
 * @property {number} [bounceBox.height=viewport.worldHeight]
 * @property {string|function} [ease=easeInOutSine] ease function or name (see http://easings.net/ for supported names)
 * @property {string} [underflow=center] (top/bottom/center and left/right/center, or center) where to place world if too small for screen
 */


var bounceOptions = {
  sides: 'all',
  friction: 0.5,
  time: 150,
  ease: 'easeInOutSine',
  underflow: 'center',
  bounceBox: null
};

var Bounce =
/*#__PURE__*/
function (_Plugin6) {
  _inherits(Bounce, _Plugin6);
  /**
   * @private
   * @param {Viewport} parent
   * @param {BounceOptions} [options]
   * @fires bounce-start-x
   * @fires bounce.end-x
   * @fires bounce-start-y
   * @fires bounce-end-y
   */


  function Bounce(parent) {
    var _this8;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Bounce);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Bounce).call(this, parent));
    _this8.options = Object.assign({}, bounceOptions, options);
    _this8.ease = ease(_this8.options.ease, 'easeInOutSine');

    if (_this8.options.sides) {
      if (_this8.options.sides === 'all') {
        _this8.top = _this8.bottom = _this8.left = _this8.right = true;
      } else if (_this8.options.sides === 'horizontal') {
        _this8.right = _this8.left = true;
      } else if (_this8.options.sides === 'vertical') {
        _this8.top = _this8.bottom = true;
      } else {
        _this8.top = _this8.options.sides.indexOf('top') !== -1;
        _this8.bottom = _this8.options.sides.indexOf('bottom') !== -1;
        _this8.left = _this8.options.sides.indexOf('left') !== -1;
        _this8.right = _this8.options.sides.indexOf('right') !== -1;
      }
    }

    _this8.parseUnderflow();

    _this8.last = {};

    _this8.reset();

    return _this8;
  }

  _createClass(Bounce, [{
    key: "parseUnderflow",
    value: function parseUnderflow() {
      var clamp = this.options.underflow.toLowerCase();

      if (clamp === 'center') {
        this.underflowX = 0;
        this.underflowY = 0;
      } else {
        this.underflowX = clamp.indexOf('left') !== -1 ? -1 : clamp.indexOf('right') !== -1 ? 1 : 0;
        this.underflowY = clamp.indexOf('top') !== -1 ? -1 : clamp.indexOf('bottom') !== -1 ? 1 : 0;
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.toX !== null || this.toY !== null;
    }
  }, {
    key: "down",
    value: function down() {
      this.toX = this.toY = null;
    }
  }, {
    key: "up",
    value: function up() {
      this.bounce();
    }
  }, {
    key: "update",
    value: function update(elapsed) {
      if (this.paused) {
        return;
      }

      this.bounce();

      if (this.toX) {
        var toX = this.toX;
        toX.time += elapsed;
        this.parent.emit('moved', {
          viewport: this.parent,
          type: 'bounce-x'
        });

        if (toX.time >= this.options.time) {
          this.parent.x = toX.end;
          this.toX = null;
          this.parent.emit('bounce-x-end', this.parent);
        } else {
          this.parent.x = this.ease(toX.time, toX.start, toX.delta, this.options.time);
        }
      }

      if (this.toY) {
        var toY = this.toY;
        toY.time += elapsed;
        this.parent.emit('moved', {
          viewport: this.parent,
          type: 'bounce-y'
        });

        if (toY.time >= this.options.time) {
          this.parent.y = toY.end;
          this.toY = null;
          this.parent.emit('bounce-y-end', this.parent);
        } else {
          this.parent.y = this.ease(toY.time, toY.start, toY.delta, this.options.time);
        }
      }
    }
  }, {
    key: "calcUnderflowX",
    value: function calcUnderflowX() {
      var x;

      switch (this.underflowX) {
        case -1:
          x = 0;
          break;

        case 1:
          x = this.parent.screenWidth - this.parent.screenWorldWidth;
          break;

        default:
          x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
      }

      return x;
    }
  }, {
    key: "calcUnderflowY",
    value: function calcUnderflowY() {
      var y;

      switch (this.underflowY) {
        case -1:
          y = 0;
          break;

        case 1:
          y = this.parent.screenHeight - this.parent.screenWorldHeight;
          break;

        default:
          y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
      }

      return y;
    }
  }, {
    key: "oob",
    value: function oob() {
      var box = this.options.bounceBox;

      if (box) {
        var x1 = typeof box.x === 'undefined' ? 0 : box.x;
        var y1 = typeof box.y === 'undefined' ? 0 : box.y;
        var width = typeof box.width === 'undefined' ? this.parent.worldWidth : box.width;
        var height = typeof box.height === 'undefined' ? this.parent.worldHeight : box.height;
        return {
          left: this.parent.left < x1,
          right: this.parent.right > width,
          top: this.parent.top < y1,
          bottom: this.parent.bottom > height,
          topLeft: new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](x1 * this.parent.scale.x, y1 * this.parent.scale.y),
          bottomRight: new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](width * this.parent.scale.x - this.parent.screenWidth, height * this.parent.scale.y - this.parent.screenHeight)
        };
      }

      return {
        left: this.parent.left < 0,
        right: this.parent.right > this.parent.worldWidth,
        top: this.parent.top < 0,
        bottom: this.parent.bottom > this.parent.worldHeight,
        topLeft: new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](0, 0),
        bottomRight: new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](this.parent.worldWidth * this.parent.scale.x - this.parent.screenWidth, this.parent.worldHeight * this.parent.scale.y - this.parent.screenHeight)
      };
    }
  }, {
    key: "bounce",
    value: function bounce() {
      if (this.paused) {
        return;
      }

      var oob;
      var decelerate = this.parent.plugins.get('decelerate');

      if (decelerate && (decelerate.x || decelerate.y)) {
        if (decelerate.x && decelerate.percentChangeX === decelerate.options.friction || decelerate.y && decelerate.percentChangeY === decelerate.options.friction) {
          oob = this.oob();

          if (oob.left && this.left || oob.right && this.right) {
            decelerate.percentChangeX = this.options.friction;
          }

          if (oob.top && this.top || oob.bottom && this.bottom) {
            decelerate.percentChangeY = this.options.friction;
          }
        }
      }

      var drag = this.parent.plugins.get('drag') || {};
      var pinch = this.parent.plugins.get('pinch') || {};
      decelerate = decelerate || {};

      if (!drag.active && !pinch.active && (!this.toX || !this.toY) && (!decelerate.x || !decelerate.y)) {
        oob = oob || this.oob();
        var topLeft = oob.topLeft;
        var bottomRight = oob.bottomRight;

        if (!this.toX && !decelerate.x) {
          var x = null;

          if (oob.left && this.left) {
            x = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -topLeft.x;
          } else if (oob.right && this.right) {
            x = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -bottomRight.x;
          }

          if (x !== null && this.parent.x !== x) {
            this.toX = {
              time: 0,
              start: this.parent.x,
              delta: x - this.parent.x,
              end: x
            };
            this.parent.emit('bounce-x-start', this.parent);
          }
        }

        if (!this.toY && !decelerate.y) {
          var y = null;

          if (oob.top && this.top) {
            y = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -topLeft.y;
          } else if (oob.bottom && this.bottom) {
            y = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -bottomRight.y;
          }

          if (y !== null && this.parent.y !== y) {
            this.toY = {
              time: 0,
              start: this.parent.y,
              delta: y - this.parent.y,
              end: y
            };
            this.parent.emit('bounce-y-start', this.parent);
          }
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.toX = this.toY = null;
      this.bounce();
    }
  }]);

  return Bounce;
}(Plugin);
/**
 * @typedef SnapOptions
 * @property {boolean} [topLeft] snap to the top-left of viewport instead of center
 * @property {number} [friction=0.8] friction/frame to apply if decelerate is active
 * @property {number} [time=1000]
 * @property {string|function} [ease=easeInOutSine] ease function or name (see http://easings.net/ for supported names)
 * @property {boolean} [interrupt=true] pause snapping with any user input on the viewport
 * @property {boolean} [removeOnComplete] removes this plugin after snapping is complete
 * @property {boolean} [removeOnInterrupt] removes this plugin if interrupted by any user input
 * @property {boolean} [forceStart] starts the snap immediately regardless of whether the viewport is at the desired location
 */


var snapOptions = {
  topLeft: false,
  friction: 0.8,
  time: 1000,
  ease: 'easeInOutSine',
  interrupt: true,
  removeOnComplete: false,
  removeOnInterrupt: false,
  forceStart: false
};

var Snap =
/*#__PURE__*/
function (_Plugin7) {
  _inherits(Snap, _Plugin7);
  /**
   * @private
   * @param {Viewport} parent
   * @param {number} x
   * @param {number} y
   * @param {SnapOptions} [options]
   * @event snap-start(Viewport) emitted each time a snap animation starts
   * @event snap-restart(Viewport) emitted each time a snap resets because of a change in viewport size
   * @event snap-end(Viewport) emitted each time snap reaches its target
   * @event snap-remove(Viewport) emitted if snap plugin is removed
   */


  function Snap(parent, x, y) {
    var _this9;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Snap);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Snap).call(this, parent));
    _this9.options = Object.assign({}, snapOptions, options);
    _this9.ease = ease(options.ease, 'easeInOutSine');
    _this9.x = x;
    _this9.y = y;

    if (_this9.options.forceStart) {
      _this9.snapStart();
    }

    return _this9;
  }

  _createClass(Snap, [{
    key: "snapStart",
    value: function snapStart() {
      this.percent = 0;
      this.snapping = {
        time: 0
      };
      var current = this.options.topLeft ? this.parent.corner : this.parent.center;
      this.deltaX = this.x - current.x;
      this.deltaY = this.y - current.y;
      this.startX = current.x;
      this.startY = current.y;
      this.parent.emit('snap-start', this.parent);
    }
  }, {
    key: "wheel",
    value: function wheel() {
      if (this.options.removeOnInterrupt) {
        this.parent.plugins.remove('snap');
      }
    }
  }, {
    key: "down",
    value: function down() {
      if (this.options.removeOnInterrupt) {
        this.parent.plugins.remove('snap');
      } else if (this.options.interrupt) {
        this.snapping = null;
      }
    }
  }, {
    key: "up",
    value: function up() {
      if (this.parent.input.count() === 0) {
        var decelerate = this.parent.plugins.get('decelerate');

        if (decelerate && (decelerate.x || decelerate.y)) {
          decelerate.percentChangeX = decelerate.percentChangeY = this.options.friction;
        }
      }
    }
  }, {
    key: "update",
    value: function update(elapsed) {
      if (this.paused) {
        return;
      }

      if (this.options.interrupt && this.parent.input.count() !== 0) {
        return;
      }

      if (!this.snapping) {
        var current = this.options.topLeft ? this.parent.corner : this.parent.center;

        if (current.x !== this.x || current.y !== this.y) {
          this.snapStart();
        }
      } else {
        var snapping = this.snapping;
        snapping.time += elapsed;
        var finished, x, y;

        if (snapping.time > this.options.time) {
          finished = true;
          x = this.startX + this.deltaX;
          y = this.startY + this.deltaY;
        } else {
          var percent = this.ease(snapping.time, 0, 1, this.options.time);
          x = this.startX + this.deltaX * percent;
          y = this.startY + this.deltaY * percent;
        }

        if (this.options.topLeft) {
          this.parent.moveCorner(x, y);
        } else {
          this.parent.moveCenter(x, y);
        }

        this.parent.emit('moved', {
          viewport: this.parent,
          type: 'snap'
        });

        if (finished) {
          if (this.options.removeOnComplete) {
            this.parent.plugins.remove('snap');
          }

          this.parent.emit('snap-end', this.parent);
          this.snapping = null;
        }
      }
    }
  }]);

  return Snap;
}(Plugin);
/**
 * @typedef {Object} SnapZoomOptions
 * @property {number} [width=0] the desired width to snap (to maintain aspect ratio, choose only width or height)
 * @property {number} [height=0] the desired height to snap (to maintain aspect ratio, choose only width or height)
 * @property {number} [time=1000] time for snapping in ms
 * @property {(string|function)} [ease=easeInOutSine] ease function or name (see http://easings.net/ for supported names)
 * @property {PIXI.Point} [center] place this point at center during zoom instead of center of the viewport
 * @property {boolean} [interrupt=true] pause snapping with any user input on the viewport
 * @property {boolean} [removeOnComplete] removes this plugin after snapping is complete
 * @property {boolean} [removeOnInterrupt] removes this plugin if interrupted by any user input
 * @property {boolean} [forceStart] starts the snap immediately regardless of whether the viewport is at the desired zoom
 * @property {boolean} [noMove] zoom but do not move
 */


var snapZoomOptions = {
  width: 0,
  height: 0,
  time: 1000,
  ease: 'easeInOutSine',
  center: null,
  interrupt: true,
  removeOnComplete: false,
  removeOnInterrupts: false,
  forceStart: false,
  noMove: false
};

var SnapZoom =
/*#__PURE__*/
function (_Plugin8) {
  _inherits(SnapZoom, _Plugin8);
  /**
   * @param {Viewport} parent
   * @param {SnapZoomOptions} options
   * @event snap-zoom-start(Viewport) emitted each time a fit animation starts
   * @event snap-zoom-end(Viewport) emitted each time fit reaches its target
   * @event snap-zoom-end(Viewport) emitted each time fit reaches its target
   */


  function SnapZoom(parent) {
    var _this10;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SnapZoom);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(SnapZoom).call(this, parent));
    _this10.options = Object.assign({}, snapZoomOptions, options);
    _this10.ease = ease(_this10.options.ease);

    if (_this10.options.width > 0) {
      _this10.xScale = parent.screenWidth / _this10.options.width;
    }

    if (_this10.options.height > 0) {
      _this10.yScale = parent.screenHeight / _this10.options.height;
    }

    _this10.xIndependent = _this10.xScale ? true : false;
    _this10.yIndependent = _this10.yScale ? true : false;
    _this10.xScale = _this10.xIndependent ? _this10.xScale : _this10.yScale;
    _this10.yScale = _this10.yIndependent ? _this10.yScale : _this10.xScale;

    if (_this10.options.time === 0) {
      parent.container.scale.x = _this10.xScale;
      parent.container.scale.y = _this10.yScale;

      if (_this10.options.removeOnComplete) {
        _this10.parent.plugins.remove('snap-zoom');
      }
    } else if (options.forceStart) {
      _this10.createSnapping();
    }

    return _this10;
  }

  _createClass(SnapZoom, [{
    key: "createSnapping",
    value: function createSnapping() {
      var scale = this.parent.scale;
      this.snapping = {
        time: 0,
        startX: scale.x,
        startY: scale.y,
        deltaX: this.xScale - scale.x,
        deltaY: this.yScale - scale.y
      };
      this.parent.emit('snap-zoom-start', this.parent);
    }
  }, {
    key: "resize",
    value: function resize() {
      this.snapping = null;

      if (this.options.width > 0) {
        this.xScale = this.parent.screenWidth / this.options.width;
      }

      if (this.options.height > 0) {
        this.yScale = this.parent.screenHeight / this.options.height;
      }

      this.xScale = this.xIndependent ? this.xScale : this.yScale;
      this.yScale = this.yIndependent ? this.yScale : this.xScale;
    }
  }, {
    key: "wheel",
    value: function wheel() {
      if (this.options.removeOnInterrupt) {
        this.parent.plugins.remove('snap-zoom');
      }
    }
  }, {
    key: "down",
    value: function down() {
      if (this.options.removeOnInterrupt) {
        this.parent.plugins.remove('snap-zoom');
      } else if (this.options.interrupt) {
        this.snapping = null;
      }
    }
  }, {
    key: "update",
    value: function update(elapsed) {
      if (this.paused) {
        return;
      }

      if (this.options.interrupt && this.parent.input.count() !== 0) {
        return;
      }

      var oldCenter;

      if (!this.options.center && !this.options.noMove) {
        oldCenter = this.parent.center;
      }

      if (!this.snapping) {
        if (this.parent.scale.x !== this.xScale || this.parent.scale.y !== this.yScale) {
          this.createSnapping();
        }
      } else if (this.snapping) {
        var snapping = this.snapping;
        snapping.time += elapsed;

        if (snapping.time >= this.options.time) {
          this.parent.scale.set(this.xScale, this.yScale);

          if (this.options.removeOnComplete) {
            this.parent.plugins.remove('snap-zoom');
          }

          this.parent.emit('snap-zoom-end', this.parent);
          this.snapping = null;
        } else {
          var _snapping = this.snapping;
          this.parent.scale.x = this.ease(_snapping.time, _snapping.startX, _snapping.deltaX, this.options.time);
          this.parent.scale.y = this.ease(_snapping.time, _snapping.startY, _snapping.deltaY, this.options.time);
        }

        var clamp = this.parent.plugins.get('clamp-zoom');

        if (clamp) {
          clamp.clamp();
        }

        if (!this.options.noMove) {
          if (!this.options.center) {
            this.parent.moveCenter(oldCenter);
          } else {
            this.parent.moveCenter(this.options.center);
          }
        }
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      this.snapping = null;

      _get(_getPrototypeOf(SnapZoom.prototype), "resume", this).call(this);
    }
  }]);

  return SnapZoom;
}(Plugin);
/**
 * @typedef {object} FollowOptions
 * @property {number} [speed=0] to follow in pixels/frame (0=teleport to location)
 * @property {number} [acceleration] set acceleration to accelerate and decelerate at this rate; speed cannot be 0 to use acceleration
 * @property {number} [radius] radius (in world coordinates) of center circle where movement is allowed without moving the viewport
 */


var followOptions = {
  speed: 0,
  acceleration: null,
  radius: null
};

var Follow =
/*#__PURE__*/
function (_Plugin9) {
  _inherits(Follow, _Plugin9);
  /**
   * @private
   * @param {Viewport} parent
   * @param {PIXI.DisplayObject} target to follow
   * @param {FollowOptions} [options]
   */


  function Follow(parent, target) {
    var _this11;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Follow);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Follow).call(this, parent));
    _this11.target = target;
    _this11.options = Object.assign({}, followOptions, options);
    _this11.velocity = {
      x: 0,
      y: 0
    };
    return _this11;
  }

  _createClass(Follow, [{
    key: "update",
    value: function update(elapsed) {
      if (this.paused) {
        return;
      }

      var center = this.parent.center;
      var toX = this.target.x,
          toY = this.target.y;

      if (this.options.radius) {
        var distance = Math.sqrt(Math.pow(this.target.y - center.y, 2) + Math.pow(this.target.x - center.x, 2));

        if (distance > this.options.radius) {
          var angle = Math.atan2(this.target.y - center.y, this.target.x - center.x);
          toX = this.target.x - Math.cos(angle) * this.options.radius;
          toY = this.target.y - Math.sin(angle) * this.options.radius;
        } else {
          return;
        }
      }

      var deltaX = toX - center.x;
      var deltaY = toY - center.y;

      if (deltaX || deltaY) {
        if (this.options.speed) {
          if (this.options.acceleration) {
            var _angle = Math.atan2(toY - center.y, toX - center.x);

            var _distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

            if (_distance) {
              var decelerationDistance = (Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2)) / (2 * this.options.acceleration);

              if (_distance > decelerationDistance) {
                this.velocity = {
                  x: Math.min(this.velocity.x + this.options.acceleration * elapsed, this.options.speed),
                  y: Math.min(this.velocity.y + this.options.acceleration * elapsed, this.options.speed)
                };
              } else {
                this.velocity = {
                  x: Math.max(this.velocity.x - this.options.acceleration * this.options.speed, 0),
                  y: Math.max(this.velocity.y - this.options.acceleration * this.options.speed, 0)
                };
              }

              var changeX = Math.cos(_angle) * this.velocity.x;
              var changeY = Math.sin(_angle) * this.velocity.y;
              var x = Math.abs(changeX) > Math.abs(deltaX) ? toX : center.x + changeX;
              var y = Math.abs(changeY) > Math.abs(deltaY) ? toY : center.y + changeY;
              this.parent.moveCenter(x, y);
              this.parent.emit('moved', {
                viewport: this.parent,
                type: 'follow'
              });
            }
          } else {
            var _angle2 = Math.atan2(toY - center.y, toX - center.x);

            var _changeX = Math.cos(_angle2) * this.options.speed;

            var _changeY = Math.sin(_angle2) * this.options.speed;

            var _x = Math.abs(_changeX) > Math.abs(deltaX) ? toX : center.x + _changeX;

            var _y = Math.abs(_changeY) > Math.abs(deltaY) ? toY : center.y + _changeY;

            this.parent.moveCenter(_x, _y);
            this.parent.emit('moved', {
              viewport: this.parent,
              type: 'follow'
            });
          }
        } else {
          this.parent.moveCenter(toX, toY);
          this.parent.emit('moved', {
            viewport: this.parent,
            type: 'follow'
          });
        }
      }
    }
  }]);

  return Follow;
}(Plugin);
/**
 * @typedef WheelOptions
 * @property {number} [percent=0.1] percent to scroll with each spin
 * @property {number} [smooth] smooth the zooming by providing the number of frames to zoom between wheel spins
 * @property {boolean} [interrupt=true] stop smoothing with any user input on the viewport
 * @property {boolean} [reverse] reverse the direction of the scroll
 * @property {PIXI.Point} [center] place this point at center during zoom instead of current mouse position
 */


var wheelOptions = {
  percent: 0.1,
  smooth: false,
  interrupt: true,
  reverse: false,
  center: null
};

var Wheel =
/*#__PURE__*/
function (_Plugin10) {
  _inherits(Wheel, _Plugin10);
  /**
   * @private
   * @param {Viewport} parent
   * @param {WheelOptions} [options]
   * @event wheel({wheel: {dx, dy, dz}, event, viewport})
   */


  function Wheel(parent) {
    var _this12;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Wheel);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Wheel).call(this, parent));
    _this12.options = Object.assign({}, wheelOptions, options);
    return _this12;
  }

  _createClass(Wheel, [{
    key: "down",
    value: function down() {
      if (this.options.interrupt) {
        this.smoothing = null;
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.smoothing) {
        var point = this.smoothingCenter;
        var change = this.smoothing;
        var oldPoint;

        if (!this.options.center) {
          oldPoint = this.parent.toLocal(point);
        }

        this.parent.scale.x += change.x;
        this.parent.scale.y += change.y;
        this.parent.emit('zoomed', {
          viewport: this.parent,
          type: 'wheel'
        });
        var clamp = this.parent.plugins.get('clamp-zoom');

        if (clamp) {
          clamp.clamp();
        }

        if (this.options.center) {
          this.parent.moveCenter(this.options.center);
        } else {
          var newPoint = this.parent.toGlobal(oldPoint);
          this.parent.x += point.x - newPoint.x;
          this.parent.y += point.y - newPoint.y;
        }

        this.smoothingCount++;

        if (this.smoothingCount >= this.options.smooth) {
          this.smoothing = null;
        }
      }
    }
  }, {
    key: "wheel",
    value: function wheel(e) {
      if (this.paused) {
        return;
      }

      var point = this.parent.input.getPointerPosition(e);
      var sign = this.options.reverse ? -1 : 1;
      var step = sign * -e.deltaY * (e.deltaMode ? 120 : 1) / 500;
      var change = Math.pow(2, (1 + this.options.percent) * step);

      if (this.options.smooth) {
        var original = {
          x: this.smoothing ? this.smoothing.x * (this.options.smooth - this.smoothingCount) : 0,
          y: this.smoothing ? this.smoothing.y * (this.options.smooth - this.smoothingCount) : 0
        };
        this.smoothing = {
          x: ((this.parent.scale.x + original.x) * change - this.parent.scale.x) / this.options.smooth,
          y: ((this.parent.scale.y + original.y) * change - this.parent.scale.y) / this.options.smooth
        };
        this.smoothingCount = 0;
        this.smoothingCenter = point;
      } else {
        var oldPoint;

        if (!this.options.center) {
          oldPoint = this.parent.toLocal(point);
        }

        this.parent.scale.x *= change;
        this.parent.scale.y *= change;
        this.parent.emit('zoomed', {
          viewport: this.parent,
          type: 'wheel'
        });
        var clamp = this.parent.plugins.get('clamp-zoom');

        if (clamp) {
          clamp.clamp();
        }

        if (this.options.center) {
          this.parent.moveCenter(this.options.center);
        } else {
          var newPoint = this.parent.toGlobal(oldPoint);
          this.parent.x += point.x - newPoint.x;
          this.parent.y += point.y - newPoint.y;
        }
      }

      this.parent.emit('moved', {
        viewport: this.parent,
        type: 'wheel'
      });
      this.parent.emit('wheel', {
        wheel: {
          dx: e.deltaX,
          dy: e.deltaY,
          dz: e.deltaZ
        },
        event: e,
        viewport: this.parent
      });

      if (!this.parent.options.passiveWheel) {
        return true;
      }
    }
  }]);

  return Wheel;
}(Plugin);
/**
 * @typedef MouseEdgesOptions
 * @property {number} [radius] distance from center of screen in screen pixels
 * @property {number} [distance] distance from all sides in screen pixels
 * @property {number} [top] alternatively, set top distance (leave unset for no top scroll)
 * @property {number} [bottom] alternatively, set bottom distance (leave unset for no top scroll)
 * @property {number} [left] alternatively, set left distance (leave unset for no top scroll)
 * @property {number} [right] alternatively, set right distance (leave unset for no top scroll)
 * @property {number} [speed=8] speed in pixels/frame to scroll viewport
 * @property {boolean} [reverse] reverse direction of scroll
 * @property {boolean} [noDecelerate] don't use decelerate plugin even if it's installed
 * @property {boolean} [linear] if using radius, use linear movement (+/- 1, +/- 1) instead of angled movement (Math.cos(angle from center), Math.sin(angle from center))
 * @property {boolean} [allowButtons] allows plugin to continue working even when there's a mousedown event
 */


var mouseEdgesOptions = {
  radius: null,
  distance: null,
  top: null,
  bottom: null,
  left: null,
  right: null,
  speed: 8,
  reverse: false,
  noDecelerate: false,
  linear: false,
  allowButtons: false
};

var MouseEdges =
/*#__PURE__*/
function (_Plugin11) {
  _inherits(MouseEdges, _Plugin11);
  /**
   * Scroll viewport when mouse hovers near one of the edges.
   * @private
   * @param {Viewport} parent
   * @param {MouseEdgeOptions} [options]
   * @event mouse-edge-start(Viewport) emitted when mouse-edge starts
   * @event mouse-edge-end(Viewport) emitted when mouse-edge ends
   */


  function MouseEdges(parent) {
    var _this13;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MouseEdges);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(MouseEdges).call(this, parent));
    _this13.options = Object.assign({}, mouseEdgesOptions, options);
    _this13.reverse = _this13.options.reverse ? 1 : -1;
    _this13.radiusSquared = Math.pow(_this13.options.radius, 2);

    _this13.resize();

    return _this13;
  }

  _createClass(MouseEdges, [{
    key: "resize",
    value: function resize() {
      var distance = this.options.distance;

      if (distance !== null) {
        this.left = distance;
        this.top = distance;
        this.right = this.parent.worldScreenWidth - distance;
        this.bottom = this.parent.worldScreenHeight - distance;
      } else if (!this.radius) {
        this.left = this.options.left;
        this.top = this.options.top;
        this.right = this.options.right === null ? null : this.parent.worldScreenWidth - this.options.right;
        this.bottom = this.options.bottom === null ? null : this.parent.worldScreenHeight - this.options.bottom;
      }
    }
  }, {
    key: "down",
    value: function down() {
      if (!this.options.allowButtons) {
        this.horizontal = this.vertical = null;
      }
    }
  }, {
    key: "move",
    value: function move(event) {
      if (event.data.pointerType !== 'mouse' && event.data.identifier !== 1 || !this.options.allowButtons && event.data.buttons !== 0) {
        return;
      }

      var x = event.data.global.x;
      var y = event.data.global.y;

      if (this.radiusSquared) {
        var center = this.parent.toScreen(this.parent.center);
        var distance = Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2);

        if (distance >= this.radiusSquared) {
          var angle = Math.atan2(center.y - y, center.x - x);

          if (this.options.linear) {
            this.horizontal = Math.round(Math.cos(angle)) * this.options.speed * this.reverse * (60 / 1000);
            this.vertical = Math.round(Math.sin(angle)) * this.options.speed * this.reverse * (60 / 1000);
          } else {
            this.horizontal = Math.cos(angle) * this.options.speed * this.reverse * (60 / 1000);
            this.vertical = Math.sin(angle) * this.options.speed * this.reverse * (60 / 1000);
          }
        } else {
          if (this.horizontal) {
            this.decelerateHorizontal();
          }

          if (this.vertical) {
            this.decelerateVertical();
          }

          this.horizontal = this.vertical = 0;
        }
      } else {
        if (this.left !== null && x < this.left) {
          this.horizontal = 1 * this.reverse * this.options.speed * (60 / 1000);
        } else if (this.right !== null && x > this.right) {
          this.horizontal = -1 * this.reverse * this.options.speed * (60 / 1000);
        } else {
          this.decelerateHorizontal();
          this.horizontal = 0;
        }

        if (this.top !== null && y < this.top) {
          this.vertical = 1 * this.reverse * this.options.speed * (60 / 1000);
        } else if (this.bottom !== null && y > this.bottom) {
          this.vertical = -1 * this.reverse * this.options.speed * (60 / 1000);
        } else {
          this.decelerateVertical();
          this.vertical = 0;
        }
      }
    }
  }, {
    key: "decelerateHorizontal",
    value: function decelerateHorizontal() {
      var decelerate = this.parent.plugins.get('decelerate');

      if (this.horizontal && decelerate && !this.options.noDecelerate) {
        decelerate.activate({
          x: this.horizontal * this.options.speed * this.reverse / (1000 / 60)
        });
      }
    }
  }, {
    key: "decelerateVertical",
    value: function decelerateVertical() {
      var decelerate = this.parent.plugins.get('decelerate');

      if (this.vertical && decelerate && !this.options.noDecelerate) {
        decelerate.activate({
          y: this.vertical * this.options.speed * this.reverse / (1000 / 60)
        });
      }
    }
  }, {
    key: "up",
    value: function up() {
      if (this.horizontal) {
        this.decelerateHorizontal();
      }

      if (this.vertical) {
        this.decelerateVertical();
      }

      this.horizontal = this.vertical = null;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.paused) {
        return;
      }

      if (this.horizontal || this.vertical) {
        var center = this.parent.center;

        if (this.horizontal) {
          center.x += this.horizontal * this.options.speed;
        }

        if (this.vertical) {
          center.y += this.vertical * this.options.speed;
        }

        this.parent.moveCenter(center);
        this.parent.emit('moved', {
          viewport: this.parent,
          type: 'mouse-edges'
        });
      }
    }
  }]);

  return MouseEdges;
}(Plugin);
/**
 * @typedef {object} ViewportOptions
 * @property {number} [screenWidth=window.innerWidth]
 * @property {number} [screenHeight=window.innerHeight]
 * @property {number} [worldWidth=this.width]
 * @property {number} [worldHeight=this.height]
 * @property {number} [threshold=5] number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event
 * @property {boolean} [passiveWheel=true] whether the 'wheel' event is set to passive (note: if false, e.preventDefault() will be called when wheel is used over the viewport)
 * @property {boolean} [stopPropagation=false] whether to stopPropagation of events that impact the viewport (except wheel events, see options.passiveWheel)
 * @property {HitArea} [forceHitArea] change the default hitArea from world size to a new value
 * @property {boolean} [noTicker] set this if you want to manually call update() function on each frame
 * @property {PIXI.Ticker} [ticker=PIXI.Ticker.shared] use this PIXI.ticker for updates
 * @property {PIXI.InteractionManager} [interaction=null] InteractionManager, available from instantiated WebGLRenderer/CanvasRenderer.plugins.interaction - used to calculate pointer postion relative to canvas location on screen
 * @property {HTMLElement} [divWheel=document.body] div to attach the wheel event
 * @property {boolean} [disableOnContextMenu] remove oncontextmenu=() => {} from the divWheel element
 */


var viewportOptions = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  worldWidth: null,
  worldHeight: null,
  threshold: 5,
  passiveWheel: true,
  stopPropagation: false,
  forceHitArea: null,
  noTicker: false,
  interaction: null,
  disableOnContextMenu: false
};
/**
 * Main class to use when creating a Viewport
 */

var Viewport =
/*#__PURE__*/
function (_Container) {
  _inherits(Viewport, _Container);
  /**
   * @param {ViewportOptions} [options]
   * @fires clicked
   * @fires drag-start
   * @fires drag-end
   * @fires drag-remove
   * @fires pinch-start
   * @fires pinch-end
   * @fires pinch-remove
   * @fires snap-start
   * @fires snap-end
   * @fires snap-remove
   * @fires snap-zoom-start
   * @fires snap-zoom-end
   * @fires snap-zoom-remove
   * @fires bounce-x-start
   * @fires bounce-x-end
   * @fires bounce-y-start
   * @fires bounce-y-end
   * @fires bounce-remove
   * @fires wheel
   * @fires wheel-remove
   * @fires wheel-scroll
   * @fires wheel-scroll-remove
   * @fires mouse-edge-start
   * @fires mouse-edge-end
   * @fires mouse-edge-remove
   * @fires moved
   * @fires moved-end
   * @fires zoomed
   * @fires zoomed-end
   * @fires frame-end
   */


  function Viewport() {
    var _this14;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Viewport);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Viewport).call(this));
    _this14.options = Object.assign({}, viewportOptions, options); // needed to pull this out of viewportOptions because of pixi.js v4 support (which changed from PIXI.ticker.shared to PIXI.Ticker.shared...sigh)

    if (options.ticker) {
      _this14.options.ticker = options.ticker;
    } else {
      // to avoid Rollup transforming our import, save pixi namespace in a variable
      // from here: https://github.com/pixijs/pixi.js/issues/5757
      var ticker;
      var pixiNS = pixi_js__WEBPACK_IMPORTED_MODULE_22__;

      if (parseInt(/^(\d+)\./.exec(pixi_js__WEBPACK_IMPORTED_MODULE_22__["VERSION"])[1]) < 5) {
        ticker = pixiNS.ticker.shared;
      } else {
        ticker = pixiNS.Ticker.shared;
      }

      _this14.options.ticker = options.ticker || ticker;
    }
    /** @type {number} */


    _this14.screenWidth = _this14.options.screenWidth;
    /** @type {number} */

    _this14.screenHeight = _this14.options.screenHeight;
    _this14._worldWidth = _this14.options.worldWidth;
    _this14._worldHeight = _this14.options.worldHeight;
    _this14.forceHitArea = _this14.options.forceHitArea;
    /**
     * number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event
     * @type {number}
     */

    _this14.threshold = _this14.options.threshold;
    _this14.options.divWheel = _this14.options.divWheel || document.body;

    if (_this14.options.disableOnContextMenu) {
      _this14.options.divWheel.oncontextmenu = function (e) {
        return e.preventDefault();
      };
    }

    if (!_this14.options.noTicker) {
      _this14.tickerFunction = function () {
        return _this14.update(_this14.options.ticker.elapsedMS);
      };

      _this14.options.ticker.add(_this14.tickerFunction);
    }

    _this14.input = new InputManager(_assertThisInitialized(_this14));
    /**
     * Use this to add user plugins or access existing plugins (e.g., to pause, resume, or remove them)
     * @type {PluginManager}
     */

    _this14.plugins = new PluginManager(_assertThisInitialized(_this14));
    return _this14;
  }
  /**
   * overrides PIXI.Container's destroy to also remove the 'wheel' and PIXI.Ticker listeners
   * @param {(object|boolean)} [options] - Options parameter. A boolean will act as if all options have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true. Should it destroy the texture of the child sprite
   * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true. Should it destroy the base texture of the child sprite     */


  _createClass(Viewport, [{
    key: "destroy",
    value: function destroy(options) {
      if (!this.options.noTicker) {
        this.options.ticker.remove(this.tickerFunction);
      }

      this.input.destroy();

      _get(_getPrototypeOf(Viewport.prototype), "destroy", this).call(this, options);
    }
    /**
     * update viewport on each frame
     * by default, you do not need to call this unless you set options.noTicker=true
     * @param {number} elapsed time in milliseconds since last update
     */

  }, {
    key: "update",
    value: function update(elapsed) {
      if (!this.pause) {
        this.plugins.update(elapsed);

        if (this.lastViewport) {
          // check for moved-end event
          if (this.lastViewport.x !== this.x || this.lastViewport.y !== this.y) {
            this.moving = true;
          } else {
            if (this.moving) {
              this.emit('moved-end', this);
              this.moving = false;
            }
          } // check for zoomed-end event


          if (this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y) {
            this.zooming = true;
          } else {
            if (this.zooming) {
              this.emit('zoomed-end', this);
              this.zooming = false;
            }
          }
        }

        if (!this.forceHitArea) {
          this._hitAreaDefault = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Rectangle"](this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
          this.hitArea = this._hitAreaDefault;
        }

        this._dirty = this._dirty || !this.lastViewport || this.lastViewport.x !== this.x || this.lastViewport.y !== this.y || this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y;
        this.lastViewport = {
          x: this.x,
          y: this.y,
          scaleX: this.scale.x,
          scaleY: this.scale.y
        };
        this.emit('frame-end', this);
      }
    }
    /**
     * use this to set screen and world sizes--needed for pinch/wheel/clamp/bounce
     * @param {number} [screenWidth=window.innerWidth]
     * @param {number} [screenHeight=window.innerHeight]
     * @param {number} [worldWidth]
     * @param {number} [worldHeight]
     */

  }, {
    key: "resize",
    value: function resize() {
      var screenWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.innerWidth;
      var screenHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.innerHeight;
      var worldWidth = arguments.length > 2 ? arguments[2] : undefined;
      var worldHeight = arguments.length > 3 ? arguments[3] : undefined;
      this.screenWidth = screenWidth;
      this.screenHeight = screenHeight;

      if (typeof worldWidth !== 'undefined') {
        this._worldWidth = worldWidth;
      }

      if (typeof worldHeight !== 'undefined') {
        this._worldHeight = worldHeight;
      }

      this.plugins.resize();
    }
    /**
     * world width in pixels
     * @type {number}
     */

  }, {
    key: "getVisibleBounds",

    /**
     * get visible bounds of viewport
     * @returns {PIXI.Rectangle}
     */
    value: function getVisibleBounds() {
      return new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Rectangle"](this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
    }
    /**
     * change coordinates from screen to world
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {PIXI.Point}
     */

  }, {
    key: "toWorld",
    value: function toWorld(x, y) {
      if (arguments.length === 2) {
        return this.toLocal(new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](x, y));
      } else {
        return this.toLocal(x);
      }
    }
    /**
     * change coordinates from world to screen
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {PIXI.Point}
     */

  }, {
    key: "toScreen",
    value: function toScreen(x, y) {
      if (arguments.length === 2) {
        return this.toGlobal(new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](x, y));
      } else {
        return this.toGlobal(x);
      }
    }
    /**
     * screen width in world coordinates
     * @type {number}
     */

  }, {
    key: "moveCenter",

    /**
     * move center of viewport to point
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {Viewport} this
     */
    value: function moveCenter() {
      var x, y;

      if (!isNaN(arguments[0])) {
        x = arguments[0];
        y = arguments[1];
      } else {
        x = arguments[0].x;
        y = arguments[0].y;
      }

      this.position.set((this.worldScreenWidth / 2 - x) * this.scale.x, (this.worldScreenHeight / 2 - y) * this.scale.y);
      this.plugins.reset();
      this.dirty = true;
      return this;
    }
    /**
     * top-left corner of Viewport
     * @type {PIXI.Point}
     */

  }, {
    key: "moveCorner",

    /**
     * move viewport's top-left corner; also clamps and resets decelerate and bounce (as needed)
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {Viewport} this
     */
    value: function moveCorner(x, y) {
      if (arguments.length === 1) {
        this.position.set(-x.x * this.scale.x, -x.y * this.scale.y);
      } else {
        this.position.set(-x * this.scale.x, -y * this.scale.y);
      }

      this.plugins.reset();
      return this;
    }
    /**
     * change zoom so the width fits in the viewport
     * @param {number} [width=this.worldWidth] in world coordinates
     * @param {boolean} [center] maintain the same center
     * @param {boolean} [scaleY=true] whether to set scaleY=scaleX
     * @param {boolean} [noClamp] whether to disable clamp-zoom
     * @returns {Viewport} this
     */

  }, {
    key: "fitWidth",
    value: function fitWidth(width, center) {
      var scaleY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var noClamp = arguments.length > 3 ? arguments[3] : undefined;
      var save;

      if (center) {
        save = this.center;
      }

      this.scale.x = this.screenWidth / width;

      if (scaleY) {
        this.scale.y = this.scale.x;
      }

      var clampZoom = this.plugins.get('clamp-zoom');

      if (!noClamp && clampZoom) {
        clampZoom.clamp();
      }

      if (center) {
        this.moveCenter(save);
      }

      return this;
    }
    /**
     * change zoom so the height fits in the viewport
     * @param {number} [height=this.worldHeight] in world coordinates
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @param {boolean} [scaleX=true] whether to set scaleX = scaleY
     * @param {boolean} [noClamp] whether to disable clamp-zoom
     * @returns {Viewport} this
     */

  }, {
    key: "fitHeight",
    value: function fitHeight(height, center) {
      var scaleX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var noClamp = arguments.length > 3 ? arguments[3] : undefined;
      var save;

      if (center) {
        save = this.center;
      }

      this.scale.y = this.screenHeight / height;

      if (scaleX) {
        this.scale.x = this.scale.y;
      }

      var clampZoom = this.plugins.get('clamp-zoom');

      if (!noClamp && clampZoom) {
        clampZoom.clamp();
      }

      if (center) {
        this.moveCenter(save);
      }

      return this;
    }
    /**
     * change zoom so it fits the entire world in the viewport
     * @param {boolean} center maintain the same center of the screen after zoom
     * @returns {Viewport} this
     */

  }, {
    key: "fitWorld",
    value: function fitWorld(center) {
      var save;

      if (center) {
        save = this.center;
      }

      this.scale.x = this.screenWidth / this.worldWidth;
      this.scale.y = this.screenHeight / this.worldHeight;

      if (this.scale.x < this.scale.y) {
        this.scale.y = this.scale.x;
      } else {
        this.scale.x = this.scale.y;
      }

      var clampZoom = this.plugins.get('clamp-zoom');

      if (clampZoom) {
        clampZoom.clamp();
      }

      if (center) {
        this.moveCenter(save);
      }

      return this;
    }
    /**
     * change zoom so it fits the size or the entire world in the viewport
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @param {number} [width=this.worldWidth] desired width
     * @param {number} [height=this.worldHeight] desired height
     * @returns {Viewport} this
     */

  }, {
    key: "fit",
    value: function fit(center) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.worldWidth;
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.worldHeight;
      var save;

      if (center) {
        save = this.center;
      }

      this.scale.x = this.screenWidth / width;
      this.scale.y = this.screenHeight / height;

      if (this.scale.x < this.scale.y) {
        this.scale.y = this.scale.x;
      } else {
        this.scale.x = this.scale.y;
      }

      var clampZoom = this.plugins.get('clamp-zoom');

      if (clampZoom) {
        clampZoom.clamp();
      }

      if (center) {
        this.moveCenter(save);
      }

      return this;
    }
    /**
     * zoom viewport to specific value
     * @param {number} scale value (e.g., 1 would be 100%, 0.25 would be 25%)
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */

  }, {
    key: "setZoom",
    value: function setZoom(scale, center) {
      var save;

      if (center) {
        save = this.center;
      }

      this.scale.set(scale);
      var clampZoom = this.plugins.get('clamp-zoom');

      if (clampZoom) {
        clampZoom.clamp();
      }

      if (center) {
        this.moveCenter(save);
      }

      return this;
    }
    /**
     * zoom viewport by a certain percent (in both x and y direction)
     * @param {number} percent change (e.g., 0.25 would increase a starting scale of 1.0 to 1.25)
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */

  }, {
    key: "zoomPercent",
    value: function zoomPercent(percent, center) {
      return this.setZoom(this.scale.x + this.scale.x * percent, center);
    }
    /**
     * zoom viewport by increasing/decreasing width by a certain number of pixels
     * @param {number} change in pixels
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */

  }, {
    key: "zoom",
    value: function zoom(change, center) {
      this.fitWidth(change + this.worldScreenWidth, center);
      return this;
    }
    /**
     * changes scale of viewport and maintains center of viewport--same as calling setScale(scale, true)
     * @type {number}
     */

  }, {
    key: "snapZoom",

    /**
     * @param {SnapZoomOptions} options
     */
    value: function snapZoom(options) {
      this.plugins.add('snap-zoom', new SnapZoom(this, options));
      return this;
    }
    /**
     * is container out of world bounds
     * @returns {OutOfBounds}
     */

  }, {
    key: "OOB",
    value: function OOB() {
      return {
        left: this.left < 0,
        right: this.right > this.worldWidth,
        top: this.top < 0,
        bottom: this.bottom > this._worldHeight,
        cornerPoint: new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](this.worldWidth * this.scale.x - this.screenWidth, this.worldHeight * this.scale.y - this.screenHeight)
      };
    }
    /**
     * world coordinates of the right edge of the screen
     * @type {number}
     */

  }, {
    key: "drag",

    /**
     * enable one-finger touch to drag
     * NOTE: if you expect users to use right-click dragging, you should enable viewport.options.disableOnContextMenu to avoid the context menu popping up on each right-click drag
     * @param {DragOptions} [options]
     * @returns {Viewport} this
     */
    value: function drag(options) {
      this.plugins.add('drag', new Drag(this, options));
      return this;
    }
    /**
     * clamp to world boundaries or other provided boundaries
     * NOTES:
     *   clamp is disabled if called with no options; use { direction: 'all' } for all edge clamping
     *   screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
     * @param {ClampOptions} [options]
     * @returns {Viewport} this
     */

  }, {
    key: "clamp",
    value: function clamp(options) {
      this.plugins.add('clamp', new Clamp(this, options));
      return this;
    }
    /**
     * decelerate after a move
     * NOTE: this fires 'moved' event during deceleration
     * @param {DecelerateOptions} [options]
     * @return {Viewport} this
     */

  }, {
    key: "decelerate",
    value: function decelerate(options) {
      this.plugins.add('decelerate', new Decelerate(this, options));
      return this;
    }
    /**
     * bounce on borders
     * NOTES:
     *    screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
     *    fires 'moved', 'bounce-x-start', 'bounce-y-start', 'bounce-x-end', and 'bounce-y-end' events
     * @param {object} [options]
     * @param {string} [options.sides=all] all, horizontal, vertical, or combination of top, bottom, right, left (e.g., 'top-bottom-right')
     * @param {number} [options.friction=0.5] friction to apply to decelerate if active
     * @param {number} [options.time=150] time in ms to finish bounce
     * @param {string|function} [options.ease=easeInOutSine] ease function or name (see http://easings.net/ for supported names)
     * @param {string} [options.underflow=center] (top/bottom/center and left/right/center, or center) where to place world if too small for screen
     * @return {Viewport} this
     */

  }, {
    key: "bounce",
    value: function bounce(options) {
      this.plugins.add('bounce', new Bounce(this, options));
      return this;
    }
    /**
     * enable pinch to zoom and two-finger touch to drag
     * @param {PinchOptions} [options]
     * @return {Viewport} this
     */

  }, {
    key: "pinch",
    value: function pinch(options) {
      this.plugins.add('pinch', new Pinch(this, options));
      return this;
    }
    /**
     * snap to a point
     * @param {number} x
     * @param {number} y
     * @param {SnapOptions} [options]
     * @return {Viewport} this
     */

  }, {
    key: "snap",
    value: function snap(x, y, options) {
      this.plugins.add('snap', new Snap(this, x, y, options));
      return this;
    }
    /**
     * follow a target
     * NOTES:
     *    uses the (x, y) as the center to follow; for PIXI.Sprite to work properly, use sprite.anchor.set(0.5)
     *    options.acceleration is not perfect as it doesn't know the velocity of the target
     *    it adds acceleration to the start of movement and deceleration to the end of movement when the target is stopped
     *    fires 'moved' event
     * @param {PIXI.DisplayObject} target to follow
     * @param {FollowOptions} [options]
     * @returns {Viewport} this
     */

  }, {
    key: "follow",
    value: function follow(target, options) {
      this.plugins.add('follow', new Follow(this, target, options));
      return this;
    }
    /**
     * zoom using mouse wheel
     * @param {WheelOptions} [options]
     * @return {Viewport} this
     */

  }, {
    key: "wheel",
    value: function wheel(options) {
      this.plugins.add('wheel', new Wheel(this, options));
      return this;
    }
    /**
     * enable clamping of zoom to constraints
     * @param {ClampZoomOptions} [options]
     * @return {Viewport} this
     */

  }, {
    key: "clampZoom",
    value: function clampZoom(options) {
      this.plugins.add('clamp-zoom', new ClampZoom(this, options));
      return this;
    }
    /**
     * Scroll viewport when mouse hovers near one of the edges or radius-distance from center of screen.
     * NOTE: fires 'moved' event
     * @param {MouseEdgesOptions} [options]
     */

  }, {
    key: "mouseEdges",
    value: function mouseEdges(options) {
      this.plugins.add('mouse-edges', new MouseEdges(this, options));
      return this;
    }
    /**
     * pause viewport (including animation updates such as decelerate)
     * @type {boolean}
     */

  }, {
    key: "ensureVisible",

    /**
     * move the viewport so the bounding box is visible
     * @param {number} x - left
     * @param {number} y - top
     * @param {number} width
     * @param {number} height
     */
    value: function ensureVisible(x, y, width, height) {
      if (x < this.left) {
        this.left = x;
      } else if (x + width > this.right) {
        this.right = x + width;
      }

      if (y < this.top) {
        this.top = y;
      } else if (y + height > this.bottom) {
        this.bottom = y + height;
      }
    }
  }, {
    key: "worldWidth",
    get: function get() {
      if (this._worldWidth) {
        return this._worldWidth;
      } else {
        return this.width / this.scale.x;
      }
    },
    set: function set(value) {
      this._worldWidth = value;
      this.plugins.resize();
    }
    /**
     * world height in pixels
     * @type {number}
     */

  }, {
    key: "worldHeight",
    get: function get() {
      if (this._worldHeight) {
        return this._worldHeight;
      } else {
        return this.height / this.scale.y;
      }
    },
    set: function set(value) {
      this._worldHeight = value;
      this.plugins.resize();
    }
  }, {
    key: "worldScreenWidth",
    get: function get() {
      return this.screenWidth / this.scale.x;
    }
    /**
     * screen height in world coordinates
     * @type {number}
     */

  }, {
    key: "worldScreenHeight",
    get: function get() {
      return this.screenHeight / this.scale.y;
    }
    /**
     * world width in screen coordinates
     * @type {number}
     */

  }, {
    key: "screenWorldWidth",
    get: function get() {
      return this.worldWidth * this.scale.x;
    }
    /**
     * world height in screen coordinates
     * @type {number}
     */

  }, {
    key: "screenWorldHeight",
    get: function get() {
      return this.worldHeight * this.scale.y;
    }
    /**
     * center of screen in world coordinates
     * @type {PIXI.Point}
     */

  }, {
    key: "center",
    get: function get() {
      return new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](this.worldScreenWidth / 2 - this.x / this.scale.x, this.worldScreenHeight / 2 - this.y / this.scale.y);
    },
    set: function set(value) {
      this.moveCenter(value);
    }
  }, {
    key: "corner",
    get: function get() {
      return new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Point"](-this.x / this.scale.x, -this.y / this.scale.y);
    },
    set: function set(value) {
      this.moveCorner(value);
    }
  }, {
    key: "scaled",
    set: function set(scale) {
      this.setZoom(scale, true);
    },
    get: function get() {
      return this.scale.x;
    }
  }, {
    key: "right",
    get: function get() {
      return -this.x / this.scale.x + this.worldScreenWidth;
    },
    set: function set(value) {
      this.x = -value * this.scale.x + this.screenWidth;
      this.plugins.reset();
    }
    /**
     * world coordinates of the left edge of the screen
     * @type { number }
     */

  }, {
    key: "left",
    get: function get() {
      return -this.x / this.scale.x;
    },
    set: function set(value) {
      this.x = -value * this.scale.x;
      this.plugins.reset();
    }
    /**
     * world coordinates of the top edge of the screen
     * @type {number}
     */

  }, {
    key: "top",
    get: function get() {
      return -this.y / this.scale.y;
    },
    set: function set(value) {
      this.y = -value * this.scale.y;
      this.plugins.reset();
    }
    /**
     * world coordinates of the bottom edge of the screen
     * @type {number}
     */

  }, {
    key: "bottom",
    get: function get() {
      return -this.y / this.scale.y + this.worldScreenHeight;
    },
    set: function set(value) {
      this.y = -value * this.scale.y + this.screenHeight;
      this.plugins.reset();
    }
    /**
     * determines whether the viewport is dirty (i.e., needs to be renderered to the screen because of a change)
     * @type {boolean}
     */

  }, {
    key: "dirty",
    get: function get() {
      return this._dirty;
    },
    set: function set(value) {
      this._dirty = value;
    }
    /**
     * permanently changes the Viewport's hitArea
     * NOTE: if not set then hitArea = PIXI.Rectangle(Viewport.left, Viewport.top, Viewport.worldScreenWidth, Viewport.worldScreenHeight)
     * @returns {HitArea}
     */

  }, {
    key: "forceHitArea",
    get: function get() {
      return this._forceHitArea;
    },
    set: function set(value) {
      if (value) {
        this._forceHitArea = value;
        this.hitArea = value;
      } else {
        this._forceHitArea = null;
        this.hitArea = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Rectangle"](0, 0, this.worldWidth, this.worldHeight);
      }
    }
  }, {
    key: "pause",
    get: function get() {
      return this._pause;
    },
    set: function set(value) {
      this._pause = value;
      this.lastViewport = null;
      this.moving = false;
      this.zooming = false;

      if (value) {
        this.input.pause();
      }
    }
  }]);

  return Viewport;
}(pixi_js__WEBPACK_IMPORTED_MODULE_22__["Container"]);
/**
 * fires after a mouse or touch click
 * @event Viewport#clicked
 * @type {object}
 * @property {PIXI.Point} screen
 * @property {PIXI.Point} world
 * @property {Viewport} viewport
 */

/**
 * fires when a drag starts
 * @event Viewport#drag-start
 * @type {object}
 * @property {PIXI.Point} screen
 * @property {PIXI.Point} world
 * @property {Viewport} viewport
 */

/**
 * fires when a drag ends
 * @event Viewport#drag-end
 * @type {object}
 * @property {PIXI.Point} screen
 * @property {PIXI.Point} world
 * @property {Viewport} viewport
 */

/**
 * fires when a pinch starts
 * @event Viewport#pinch-start
 * @type {Viewport}
 */

/**
 * fires when a pinch end
 * @event Viewport#pinch-end
 * @type {Viewport}
 */

/**
 * fires when a snap starts
 * @event Viewport#snap-start
 * @type {Viewport}
 */

/**
 * fires when a snap ends
 * @event Viewport#snap-end
 * @type {Viewport}
 */

/**
 * fires when a snap-zoom starts
 * @event Viewport#snap-zoom-start
 * @type {Viewport}
 */

/**
 * fires when a snap-zoom ends
 * @event Viewport#snap-zoom-end
 * @type {Viewport}
 */

/**
 * fires when a bounce starts in the x direction
 * @event Viewport#bounce-x-start
 * @type {Viewport}
 */

/**
 * fires when a bounce ends in the x direction
 * @event Viewport#bounce-x-end
 * @type {Viewport}
 */

/**
 * fires when a bounce starts in the y direction
 * @event Viewport#bounce-y-start
 * @type {Viewport}
 */

/**
 * fires when a bounce ends in the y direction
 * @event Viewport#bounce-y-end
 * @type {Viewport}
 */

/**
 * fires when for a mouse wheel event
 * @event Viewport#wheel
 * @type {object}
 * @property {object} wheel
 * @property {number} wheel.dx
 * @property {number} wheel.dy
 * @property {number} wheel.dz
 * @property {Viewport} viewport
 */

/**
 * fires when a wheel-scroll occurs
 * @event Viewport#wheel-scroll
 * @type {Viewport}
 */

/**
 * fires when a mouse-edge starts to scroll
 * @event Viewport#mouse-edge-start
 * @type {Viewport}
 */

/**
 * fires when the mouse-edge scrolling ends
 * @event Viewport#mouse-edge-end
 * @type {Viewport}
 */

/**
 * fires when viewport moves through UI interaction, deceleration, or follow
 * @event Viewport#moved
 * @type {object}
 * @property {Viewport} viewport
 * @property {string} type (drag, snap, pinch, follow, bounce-x, bounce-y, clamp-x, clamp-y, decelerate, mouse-edges, wheel)
 */

/**
 * fires when viewport moves through UI interaction, deceleration, or follow
 * @event Viewport#zoomed
 * @type {object}
 * @property {Viewport} viewport
 * @property {string} type (drag-zoom, pinch, wheel, clamp-zoom)
 */

/**
 * fires when viewport stops moving
 * @event Viewport#moved-end
 * @type {Viewport}
 */

/**
 * fires when viewport stops zooming
 * @event Viewport#zoomed-end
 * @type {Viewport}
 */

/**
* fires at the end of an update frame
* @event Viewport#frame-end
* @type {Viewport}
*/

/** @typedef HitArea {(PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle)} */

/**
 * @typedef {Object} OutOfBounds
 * @private
 * @property {boolean} left
 * @property {boolean} right
 * @property {boolean} top
 * @property {boolean} bottom
 * @property {PIXI.Point} cornerPoint
 */

/**
 * @typedef {Object} LastViewport
 * @private
 * @property {number} x
 * @property {number} y
 * @property {number} scaleX
 * @property {number} scaleY
 */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./modules/pixi.js/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _pixi_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/polyfill/lib/polyfill.es.js");
/* harmony import */ var _pixi_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/constants/lib/constants.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALPHA_MODES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BLEND_MODES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DRAW_MODES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORMATS", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GC_MODES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MASK_TYPES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIPMAP_MODES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRECISION", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDERER_TYPE", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCALE_MODES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TARGETS", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WRAP_MODES", function() { return _pixi_constants__WEBPACK_IMPORTED_MODULE_1__["n"]; });

/* harmony import */ var _pixi_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/math/lib/math.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEG_TO_RAD", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservablePoint", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PI_2", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RAD_TO_DEG", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundedRectangle", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupD8", function() { return _pixi_math__WEBPACK_IMPORTED_MODULE_2__["n"]; });

/* harmony import */ var _pixi_runner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@pixi/runner/lib/runner.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Runner", function() { return _pixi_runner__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _pixi_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@pixi/settings/lib/settings.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _pixi_settings__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return _pixi_settings__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony import */ var _pixi_ticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@pixi/ticker/lib/ticker.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return _pixi_ticker__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TickerPlugin", function() { return _pixi_ticker__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PRIORITY", function() { return _pixi_ticker__WEBPACK_IMPORTED_MODULE_5__["c"]; });

/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _pixi_utils__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@pixi/display/lib/display.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return _pixi_display__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _pixi_display__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayObject", function() { return _pixi_display__WEBPACK_IMPORTED_MODULE_7__["c"]; });

/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractBatchRenderer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractRenderer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseRenderTexture", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTexture", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchDrawCall", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchGeometry", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchPluginFactory", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchRenderer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchShaderGenerator", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchTextureArray", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeTexture", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Framebuffer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLProgram", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTexture", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskData", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectRenderer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quad", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuadUv", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTexture", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTexturePool", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpriteMaskFilter", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "State", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "System", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureMatrix", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureUvs", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniformGroup", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewableBuffer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoDetectRenderer", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkMaxIfStatementsInShader", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFilterVertex", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultVertex", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systems", function() { return _pixi_core__WEBPACK_IMPORTED_MODULE_8__["O"]; });

/* harmony import */ var _pixi_loaders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@pixi/loaders/lib/loaders.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppLoaderPlugin", function() { return _pixi_loaders__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _pixi_loaders__WEBPACK_IMPORTED_MODULE_9__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderResource", function() { return _pixi_loaders__WEBPACK_IMPORTED_MODULE_9__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return _pixi_loaders__WEBPACK_IMPORTED_MODULE_9__["d"]; });

/* harmony import */ var _pixi_sprite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@pixi/sprite/lib/sprite.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _pixi_sprite__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _pixi_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@pixi/app/lib/app.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _pixi_app__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@pixi/graphics/lib/graphics.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FillStyle", function() { return _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GRAPHICS_CURVES", function() { return _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Graphics", function() { return _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsData", function() { return _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsGeometry", function() { return _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineStyle", function() { return _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphicsUtils", function() { return _pixi_graphics__WEBPACK_IMPORTED_MODULE_12__["g"]; });

/* harmony import */ var _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@pixi/interaction/lib/interaction.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractionData", function() { return _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["InteractionData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractionEvent", function() { return _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["InteractionEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractionManager", function() { return _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["InteractionManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractionTrackingData", function() { return _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["InteractionTrackingData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interactiveTarget", function() { return _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["interactiveTarget"]; });

/* harmony import */ var _pixi_sprite_animated__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@pixi/sprite-animated/lib/sprite-animated.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedSprite", function() { return _pixi_sprite_animated__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "interaction", function() { return _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__; });
/* harmony import */ var _pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@pixi/canvas-renderer/lib/canvas-renderer.es.js");
/* harmony import */ var _pixi_canvas_graphics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@pixi/canvas-graphics/lib/canvas-graphics.es.js");
/* harmony import */ var _pixi_canvas_sprite__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@pixi/canvas-sprite/lib/canvas-sprite.es.js");
/* harmony import */ var _pixi_canvas_display__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@pixi/canvas-display/lib/canvas-display.es.js");
/* ---- default pixi ---- */
var VERSION = '5.2.0';



















/* ----    canvas    ---- */





 //CanvasRenderer.registerPlugin('accessibility', accessibility.AccessibilityManager);

_pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_15__[/* CanvasRenderer */ "a"].registerPlugin('graphics', _pixi_canvas_graphics__WEBPACK_IMPORTED_MODULE_16__[/* CanvasGraphicsRenderer */ "a"]);
_pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_15__[/* CanvasRenderer */ "a"].registerPlugin('interaction', _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["InteractionManager"]);
_pixi_canvas_renderer__WEBPACK_IMPORTED_MODULE_15__[/* CanvasRenderer */ "a"].registerPlugin('sprite', _pixi_canvas_sprite__WEBPACK_IMPORTED_MODULE_17__[/* CanvasSpriteRenderer */ "a"]); // Renderer plugins



_pixi_core__WEBPACK_IMPORTED_MODULE_8__[/* Renderer */ "z"].registerPlugin('interaction', _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["InteractionManager"]);
_pixi_core__WEBPACK_IMPORTED_MODULE_8__[/* Renderer */ "z"].registerPlugin('batch', _pixi_core__WEBPACK_IMPORTED_MODULE_8__[/* BatchRenderer */ "i"]);



_pixi_app__WEBPACK_IMPORTED_MODULE_11__[/* Application */ "a"].registerPlugin(_pixi_loaders__WEBPACK_IMPORTED_MODULE_9__[/* AppLoaderPlugin */ "a"]);
_pixi_app__WEBPACK_IMPORTED_MODULE_11__[/* Application */ "a"].registerPlugin(_pixi_ticker__WEBPACK_IMPORTED_MODULE_5__[/* TickerPlugin */ "b"]);

/***/ }),

/***/ "./src/Construction.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionType; });
var ConstructionType;
(function (ConstructionType) {
    ConstructionType[ConstructionType["Structures"] = 0] = "Structures";
    ConstructionType[ConstructionType["Teardown"] = 1] = "Teardown";
    ConstructionType[ConstructionType["TerraformUp"] = 2] = "TerraformUp";
    ConstructionType[ConstructionType["TerraformDown"] = 3] = "TerraformDown";
    ConstructionType[ConstructionType["ChangeGroundType"] = 4] = "ChangeGroundType";
    ConstructionType[ConstructionType["ShowInfo"] = 5] = "ShowInfo";
    ConstructionType[ConstructionType["Evacuate"] = 6] = "Evacuate";
})(ConstructionType || (ConstructionType = {}));
;


/***/ }),

/***/ "./src/ConstructionBuildOptions.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Building.ts");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/Icons.tsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/ConstructionOptionImage.tsx");













var ConstructionBuildingInfo = function (props) {
    var occupancy = undefined;
    if (typeof props.occupancy != 'undefined') {
        occupancy = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__[/* BlueHouseIcon */ "b"], null),
            "\u00A0",
            props.occupancy);
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "construction-building-info" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { variant: "h6" }, props.name),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, occupancy));
};
var ConstructionOption = function (props) {
    var _a, _b, _c;
    var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "e"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), infoShown = _d[0], setInfoShown = _d[1];
    var building = props.buildable; /* FIXME */
    var onChooseItem = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () { return props.onChooseItem.bind(props, building); }, [props.onChooseItem, props.buildable]);
    var triggerDialogClose = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () { return setInfoShown(false); }, []);
    var triggerDialogOpen = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () { return setInfoShown(true); }, []);
    var extraDescription = undefined;
    if (typeof building.description != 'undefined') {
        extraDescription = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: triggerDialogOpen },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__[/* PurpleInfoIcon */ "i"], null));
    }
    var baseSprite = typeof building.baseSprite != 'undefined' ? building.baseSprite : (_a = props.targetTile) === null || _a === void 0 ? void 0 : _a.getGroundSprite();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], { mainSprite: building.mainSprite, baseSprite: baseSprite, leftColor: (_b = props.targetTile) === null || _b === void 0 ? void 0 : _b.leftColor, rightColor: (_c = props.targetTile) === null || _c === void 0 ? void 0 : _c.rightColor }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ConstructionBuildingInfo, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, building)),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "construction-item-buttons" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "construction-item-buttons-spacer" }),
            extraDescription,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: onChooseItem },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__[/* HammerIcon */ "f"], null))),
        typeof building.description != 'undefined' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], { open: infoShown, onClose: triggerDialogClose },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, building.name),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { dividers: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, building.description)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], { onClick: triggerDialogClose, color: "primary" }, "OK"))));
};
var ConstructionBuildOptions = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { className: "construction-build-options" }, _Building__WEBPACK_IMPORTED_MODULE_2__[/* buildings */ "a"].map(function (building) { return building.hidden ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ConstructionOption, { key: building.mainSprite, onChooseItem: props.onChooseItem, targetTile: props.targetTile, buildable: building }); }));
};
/* harmony default export */ __webpack_exports__["a"] = (ConstructionBuildOptions);


/***/ }),

/***/ "./src/ConstructionDialog.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Construction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Construction.tsx");
/* harmony import */ var _ConstructionBuildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/ConstructionBuildOptions.tsx");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/ConstructionOptionImage.tsx");










var TargetTileWrapper = function (props) {
    var _a, _b, _c, _d, _e;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "construction-target-tile-wrapper", style: { backgroundColor: "#" + ((_a = props.targetTile) === null || _a === void 0 ? void 0 : _a.getRiskLevelColor().toString(16)) } },
        "Risk " + ((_b = props.targetTile) === null || _b === void 0 ? void 0 : _b.riskLevel),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], { baseSprite: (_c = props.targetTile) === null || _c === void 0 ? void 0 : _c.getGroundSprite(), leftColor: (_d = props.targetTile) === null || _d === void 0 ? void 0 : _d.leftColor, rightColor: (_e = props.targetTile) === null || _e === void 0 ? void 0 : _e.rightColor })));
};
var ConstructionDialog = function (props) {
    var isTeardown = props.type == _Construction__WEBPACK_IMPORTED_MODULE_1__[/* ConstructionType */ "a"].Teardown;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { open: props.show, onClose: props.onBuildCancel },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null,
            "DEVELOPMENT: ",
            _Construction__WEBPACK_IMPORTED_MODULE_1__[/* ConstructionType */ "a"][props.type]),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { dividers: true, className: "construction-dialog-content" },
            !isTeardown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "construction-dialog-summary" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TargetTileWrapper, { targetTile: props.targetTile }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: 'inline-block' } }, "Choose a building to construct on this tile.")),
            !isTeardown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConstructionBuildOptions__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { targetTile: props.targetTile, type: props.type, onChooseItem: props.onChooseItem }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Are you sure you want to remove this?")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], { onClick: props.onBuildCancel, color: "primary" }, isTeardown ? "No" : "Cancel"),
            isTeardown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], { onClick: function () { return props.onChooseItem(null); }, color: "primary" }, "Yes")));
};
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ConstructionDialog));


/***/ }),

/***/ "./src/ConstructionOptionImage.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ConstructionOptionImage = function (props) {
    var leftColor = undefined, rightColor = undefined;
    if (typeof props.leftColor != 'undefined') {
        leftColor = "#" + props.leftColor.toString(16);
        rightColor = "#" + props.rightColor.toString(16);
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "construction-avatar-container " + (props.mainSprite ? "" : "no-mainsprite ") + "selectDisable" },
        props.mainSprite && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: props.mainSprite, className: "construction-mainsprite selectDisable" }),
        props.baseSprite && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: props.baseSprite, className: "construction-basesprite selectDisable" }),
        leftColor && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "construction-avatar-side construction-avatar-leftside selectDisable", style: { backgroundColor: leftColor } }),
        rightColor && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "construction-avatar-side construction-avatar-rightside selectDisable", style: { backgroundColor: rightColor } }));
};
/* harmony default export */ __webpack_exports__["a"] = (ConstructionOptionImage);


/***/ }),

/***/ "./src/ControlBar.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ControlButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ControlSeparator; });
/* unused harmony export ControlMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ControlGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utilities.tsx");




var ControlBar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(ControlBar, _super);
    function ControlBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlBar.prototype.render = function () { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "top-controls" }, this.props.children); };
    return ControlBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));

var ControlSeparator = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "controls-separator" });
};
function onButtonHover() {
    Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* playAudio */ "i"])("audio/hover.mp3");
}
var ControlButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(ControlButton, _super);
    function ControlButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlButton.prototype.render = function () {
        var _a = this.props, icon = _a.icon, active = _a.active, playHoverSound = _a.playHoverSound, title = _a.title, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "f"])(_a, ["icon", "active", "playHoverSound", "title"]);
        var buttonClass = "hoverable-button control-button" + ((active && !rest.disabled) ? " hoverable-button-active" : "");
        var IconComponent = icon;
        if (typeof playHoverSound == 'undefined')
            playHoverSound = true;
        var buttonElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ onMouseEnter: playHoverSound ? onButtonHover : null, className: buttonClass }, rest),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconComponent, null));
        return buttonElement;
        if (typeof title == 'string' && title.trim().length > 0)
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { title: title }, buttonElement);
        else
            return buttonElement;
    };
    return ControlButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));

var ControlArrow = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-caret-" + props.direction });
};
var ControlMenu = function (props) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "e"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), menuOpen = _a[0], setMenuOpen = _a[1];
    var onClick = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
        setMenuOpen(!menuOpen);
    }, [menuOpen]);
    var childCount = menuOpen ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children) + 1.5) : 1;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "control-menu", style: {
            maxWidth: (childCount * 2) + "em"
        } },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ControlButton, { icon: props.menuIcon, active: menuOpen, onClick: onClick }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "control-menu" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ControlArrow, { direction: "right" }),
            props.children));
};
var ControlGroup = function (props) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "control-group" }, props.children); };



/***/ }),

/***/ "./src/Icons.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GreenSecurityIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BlueHouseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FontAwesomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PurpleInfoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RedBombIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TerraformUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TerraformDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return WaterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LandIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PauseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RiskLevelButtonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BuildingIcon; });
/* unused harmony export SaveIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HammerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UnhousedPersonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EvacuationIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SkullIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var FontAwesomeIcon = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-" + props.type, style: { color: props.color }, ref: ref });
});
function iconFactory(type, color) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FontAwesomeIcon, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ type: type, color: color, ref: ref }, p)); });
}
function imageIconFactory(src) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ className: "disaster-image-icon", src: src, ref: ref }, p)); });
}
var GreenSecurityIcon = iconFactory("shield-alt", "#3bcc62");
var BlueHouseIcon = iconFactory("home", "#3d94ff");
var PurpleInfoIcon = iconFactory("info-circle", "#b65bfc");
var RedBombIcon = iconFactory("bomb", "#cc2900");
var TerraformUpIcon = iconFactory("arrow-up", "#009933");
var TerraformDownIcon = iconFactory("arrow-down", "#009933");
var WaterIcon = iconFactory("water", "#00ccff");
var LandIcon = iconFactory("mountain", "#00cc00");
var PauseIcon = iconFactory("pause", "#0099ff");
var RiskLevelButtonIcon = imageIconFactory("sprites/gui/risk_level_btn.png");
var BuildingIcon = iconFactory("building", "#996633");
var SaveIcon = iconFactory("save", "#0066ff");
var BackIcon = iconFactory("chevron-left", "#0066ff");
var HammerIcon = iconFactory("hammer", "#996633");
var UnhousedPersonIcon = iconFactory("male", "#ff0000");
var EvacuationIcon = iconFactory("helicopter", "#ff9933");
var SkullIcon = iconFactory("skull", "#bbb");



/***/ }),

/***/ "./src/PIXIContainer.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TileSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/TileSystem.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./modules/pixi.js/index.js");
/* harmony import */ var pixi_viewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./modules/pixi-viewport/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utilities.tsx");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/Tile.tsx");
/* harmony import */ var _TileOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/TileOverlay.tsx");
/* harmony import */ var _Construction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/Construction.tsx");
/* harmony import */ var _ConstructionDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/ConstructionDialog.tsx");
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/Building.ts");
/* harmony import */ var _RenderController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/RenderController.ts");
/* harmony import */ var pixi_cull__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/pixi-cull/dist/index.js");
/* harmony import */ var pixi_cull__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pixi_cull__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ControlBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/ControlBar.tsx");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/Icons.tsx");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _MapLoadingScreen__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/MapLoadingScreen.tsx");
/* harmony import */ var _ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/ConstructionOptionImage.tsx");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _PopulationInfo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/PopulationInfo.tsx");
/* harmony import */ var _PhoneDialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/PhoneDialog.tsx");




























function getTileSize() {
    var VMIN_FACTOR = (20 / 100);
    return roundToNearestMultipleOf(2)(getWindowVmins() * VMIN_FACTOR);
}
function getWindowVmins() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return Math.min(w, h);
}
var roundToNearestMultipleOf = function (m) { return function (n) { return Math.round(n / m) * m; }; };
var isNewMode = false;
var EVACUATION_RANGE = 7;
function buildingSprites(building) {
    var arr = [];
    arr.push(building.mainSprite);
    if (typeof building.baseSprite != 'undefined')
        arr.push(building.baseSprite);
    if (typeof building.destroyedSprite != 'undefined' && building.destroyedSprite != building.mainSprite)
        arr.push(building.destroyedSprite);
    return arr;
}
var enableCulling = true;
var DisasterControlButton = function (props) {
    var onClick = props.onClick, sticky = props.sticky, flag = props.flag, active = props.active, constructionType = props.constructionType, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "f"])(props, ["onClick", "sticky", "flag", "active", "constructionType"]);
    var realOnClick = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
        onClick(constructionType, sticky, flag);
    }, [onClick, constructionType, sticky, flag]);
    var realActive;
    if (typeof active == 'function')
        realActive = active(constructionType, flag);
    else
        realActive = active;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ onClick: realOnClick, active: realActive }, rest));
};
var notifiedAdblocker = false;
var PIXIContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(PIXIContainer, _super);
    function PIXIContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
        _this.nextStateToSet = null;
        _this.previouslyChosenTile = null;
        _this.pendingTimeouts = [];
        _this._isMounted = false;
        _this.runDisaster = function () {
            var triggerCensus = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* _debounce */ "b"])(2000, function () {
                _this.forceUpdate();
            }, true);
            if (_this.state.disasterRunning)
                throw new Error("Disaster already running");
            _this.clearSelectedTile();
            _this.tileSystem.interactionAllowed = true;
            _this.setState({ constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ShowInfo, constructionFlag: null, stickyActionInProgress: true, disasterRunning: true }, function () {
                var iterateMap = function (startTile, dirs, invertSpeed) {
                    return new Promise(function (resolve) {
                        var allProcessedIndexes = new Set();
                        var processTile = function (t, prevElev) {
                            if (t == null)
                                return;
                            var i = t.getIndex();
                            if (allProcessedIndexes.has(i))
                                return;
                            allProcessedIndexes.add(i);
                            var speedTiles = invertSpeed ? (_this.props.tileMap.length - allProcessedIndexes.size) : allProcessedIndexes.size;
                            var disasterPower;
                            if (invertSpeed)
                                disasterPower = 0;
                            else
                                disasterPower = (100 - Math.min(((allProcessedIndexes.size / _this.props.tileMap.length) * 110), 100));
                            disasterPower = disasterPower / Math.max(0, t.getHighestElevation() + 1);
                            /* Scale it based on relative elevation */
                            var relElevation = (t.getHighestElevation() - prevElev);
                            disasterPower += -(relElevation * 4) * Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getRandomArbitrary */ "d"])(0.5, 1);
                            /*disasterPower = Math.max(Math.min(100, disasterPower), 0);*/
                            var speedReductionFactor = 1;
                            if (_this.doDisasterTileProcess(t, invertSpeed, disasterPower, prevElev)) {
                                _this.tileSystem.updateTile(i);
                            }
                            else
                                speedReductionFactor = 32;
                            setTimeout(function () {
                                var allWereNull = true;
                                var curElevation = t.getHighestElevation();
                                dirs.forEach(function (dir) {
                                    var tid = t.getTileInDirection(dir);
                                    if (tid != null)
                                        allWereNull = false;
                                    try {
                                        processTile(tid, curElevation);
                                    }
                                    catch (e) {
                                        console.error(e);
                                    }
                                });
                                if (allWereNull)
                                    resolve(allProcessedIndexes);
                            }, (speedTiles / 16) / speedReductionFactor);
                            triggerCensus();
                        };
                        try {
                            processTile(startTile, startTile.getHighestElevation());
                        }
                        catch (e) {
                            console.error(e);
                        }
                    });
                };
                var startTile = _this.props.tileMap[_this.props.tileMap.length - _this.props.tileMap.rowLength];
                iterateMap(startTile, [_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Northwest, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Northeast], false).then(function (allTiles) {
                    _this.forceUpdate();
                    var a = Array.from(allTiles);
                    iterateMap(_this.props.tileMap[a[a.length - 1]], [_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southwest, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southeast], true).then(function () {
                        _this.tileSystem.interactionAllowed = false;
                        _this.setState({ constructionType: null, stickyActionInProgress: false, disasterRunning: false, disasterFinished: true, currentlyHoveredTile: null, currentlySelectedTile: null });
                    });
                });
            });
        };
        _this.invertRiskLevel = function () {
            Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/pop.mp3", function () {
                _this.tileSystem.tileRiskLevelVisible = !_this.tileSystem.tileRiskLevelVisible;
                _RenderController__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].queueRender();
            });
        };
        _this.onErrorAcknowledge = function () {
            _this.setState({ showError: false });
        };
        _this.endQuery = function () {
            _this.setState({ showForcedQuery: false });
        };
        _this.closeNewspaper = function () {
            //this.setState({ newspaperClosed: true });
        };
        _this.cull = null;
        _this.state = {
            hoverX: null,
            hoverY: null,
            currentlyHoveredTile: null,
            currentlySelectedTile: null,
            constructionType: null,
            initiallyRendered: false,
            willNeedToCull: false,
            interactionAllowed: false,
            tileRiskLevelVisible: false,
            stickyActionInProgress: false,
            constructionFlag: null,
            showError: false,
            errString: "",
            disasterRunning: false,
            expiryDate: 0,
            forcedQueryTile: null,
            showForcedQuery: false,
            disasterFinished: false,
            newspaperClosed: false
        };
        _this.nextStateToSet = {};
        _this.tileSystem = new _TileSystem__WEBPACK_IMPORTED_MODULE_2__[/* _TileSystem */ "a"](_this);
        _this.clearSelectedTile = _this.clearSelectedTile.bind(_this);
        _this.updatePixiSize = _this.updatePixiSize.bind(_this);
        _this.performBuild = _this.performBuild.bind(_this);
        _this.startTileBasedAction = _this.startTileBasedAction.bind(_this);
        _this.checkActive = _this.checkActive.bind(_this);
        return _this;
    }
    PIXIContainer.prototype.clearFromPending = function (n) {
        var idx = this.pendingTimeouts.indexOf(n);
        if (idx != -1)
            this.pendingTimeouts.splice(idx, 1);
    };
    PIXIContainer.prototype.setTimeout = function (fn, time) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var n = setTimeout.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])([function () {
                var cbargs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    cbargs[_i] = arguments[_i];
                }
                _this.clearFromPending(n);
                fn.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])(cbargs));
            }, time], args));
        this.pendingTimeouts.push(n);
        return n;
    };
    PIXIContainer.prototype.clearTimeout = function (n) {
        this.clearTimeout(n);
        this.clearFromPending(n);
    };
    PIXIContainer.prototype.checkSnackbarCompatibility = function (ref) {
        if (notifiedAdblocker)
            return;
        notifiedAdblocker = true;
        if (window.getComputedStyle(ref).display == 'none') {
            window.alert("It appears that you have an adblocker which is blocking some game notifications from appearing. You may want to disable it for this game (it does not have any ads).");
        }
    };
    PIXIContainer.prototype.performBuild = function (item) {
        var e_1, _a, e_2, _b;
        var building = item; /* FIXME */
        this.state.currentlySelectedTile.building = JSON.parse(JSON.stringify(building));
        this.state.currentlySelectedTile.building.id = shortid__WEBPACK_IMPORTED_MODULE_23___default.a.generate();
        /* Move as many people into the building as possible */
        var rings = this.state.currentlySelectedTile.searchInRing(3);
        var movers = 0;
        try {
            for (var rings_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(rings), rings_1_1 = rings_1.next(); !rings_1_1.done; rings_1_1 = rings_1.next()) {
                var ring = rings_1_1.value;
                try {
                    for (var ring_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(ring)), ring_1_1 = ring_1.next(); !ring_1_1.done; ring_1_1 = ring_1.next()) {
                        var tile = ring_1_1.value;
                        var maxMovers = this.state.currentlySelectedTile.building.occupancy - movers;
                        var newMovers = Math.min(maxMovers, Math.min(this.props.tileMap[tile].population, this.state.currentlySelectedTile.building.occupancy));
                        if (newMovers > 0) {
                            this.props.tileMap[tile].population -= newMovers;
                            this.tileSystem.updateTile(tile);
                            movers += newMovers;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (ring_1_1 && !ring_1_1.done && (_b = ring_1.return)) _b.call(ring_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rings_1_1 && !rings_1_1.done && (_a = rings_1.return)) _a.call(rings_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.state.currentlySelectedTile.building.residents += movers;
        var isBuildingFull = this.state.currentlySelectedTile.building.residents == this.state.currentlySelectedTile.building.occupancy;
        if (movers > 0)
            this.props.enqueueSnackbar(movers + " people " + (isBuildingFull ? "(the maximum this building can hold) " : "") + " were safely sheltered!", { variant: 'success', ref: this.checkSnackbarCompatibility });
        if (this.state.currentlySelectedTile.explosionOverride != null) {
            this.state.currentlySelectedTile.ground = this.state.currentlySelectedTile.explosionOverride;
            this.state.currentlySelectedTile.explosionOverride = null;
        }
        else if (!Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(this.state.currentlySelectedTile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Sand))
            this.state.currentlySelectedTile.ground = _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Grass;
        var index = this.state.currentlySelectedTile.getIndex();
        Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/construction.mp3");
        this.onActionCompleted(this.state.currentlySelectedTile);
    };
    PIXIContainer.prototype.updatePixiSize = function () {
        var _this = this;
        this.tileSystem.tileSize = getTileSize();
        this.tileSystem.app.renderer.resize(0, 0);
        this.viewport.resize(this.tileSystem.app.view.clientWidth, this.tileSystem.app.view.clientHeight);
        this.tileSystem.app.renderer.resize(this.tileSystem.app.view.clientWidth, this.tileSystem.app.view.clientHeight);
        window.removeEventListener("resize", this.pixiSizeHandler);
        this.tileSystem.onResize().then(function () {
            if (_this._isMounted) {
                window.addEventListener("resize", _this.pixiSizeHandler);
                _this.viewport.dirty = true;
            }
        });
    };
    PIXIContainer.prototype.onTileChange = function (index) {
        if (this.state.currentlyHoveredTile == this.props.tileMap[index] || this.state.currentlySelectedTile == this.props.tileMap[index])
            this.forceUpdate();
    };
    PIXIContainer.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        window.removeEventListener("resize", this.pixiSizeHandler);
        this.tileSystem.app.destroy(false);
        this.pendingTimeouts.forEach(function (n) {
            clearTimeout(n);
        });
        this.pendingTimeouts = [];
        for (var textureUrl in pixi_js__WEBPACK_IMPORTED_MODULE_3__["utils"].BaseTextureCache) {
            delete pixi_js__WEBPACK_IMPORTED_MODULE_3__["utils"].BaseTextureCache[textureUrl];
        }
        for (var textureUrl in pixi_js__WEBPACK_IMPORTED_MODULE_3__["utils"].TextureCache) {
            delete pixi_js__WEBPACK_IMPORTED_MODULE_3__["utils"].TextureCache[textureUrl];
        }
        this.tileSystem.lastTileMap.tileSystem = null;
        this.tileSystem = new _TileSystem__WEBPACK_IMPORTED_MODULE_2__[/* _TileSystem */ "a"](this); /* fresh TileSystem */
    };
    PIXIContainer.prototype.clearSelectedTile = function (evt) {
        var _this = this;
        if (typeof evt == 'object' && evt.doIgnoreTileClick) {
            /* It seems that PIXI might cache the event object */
            evt.doIgnoreTileClick = false;
            return;
        }
        this.setState({ currentlySelectedTile: null }, function () { return _this.tileSystem.clearSelectedTile(evt); });
    };
    PIXIContainer.prototype.doDisasterTileProcess = function (t, isReceding, disasterPower, previousElevation) {
        if (isReceding) {
            if (t.wasPreviouslyWater != true) {
                if (t.wasFlooded) {
                    if (!Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(t.oldGroundType, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Sand)) {
                        t.ground = _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Dirt1;
                    }
                    else
                        t.ground = _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Sand;
                    t.setAllElevations(t.getHighestElevation() - 0.2);
                }
            }
            else {
                t.setAllElevations(t.oldElevation);
            }
            return true;
        }
        t.wasFlooded = false;
        t.wasPreviouslyWater = false;
        if (Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(t.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water)) {
            /* Tsunami wave */
            t.oldElevation = t.getHighestElevation();
            t.setAllElevations(2);
            t.wasPreviouslyWater = true;
            return true;
        }
        else {
            /* Hitting the coastline */
            t.oldGroundType = t.ground;
            t.ground = _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water;
            t.wasFlooded = true;
            t.dead += t.population;
            t.population = 0;
            if (disasterPower > 20 && t.building != null) {
                t.building.destroyed = true;
                var killed = Math.round(t.building.residents * 3 / 4);
                t.building.residents -= killed;
                t.dead += killed;
            }
            return true;
        }
        return false;
    };
    PIXIContainer.prototype.componentDidMount = function () {
        var _this = this;
        var tileMap = this.props.tileMap;
        pixi_js__WEBPACK_IMPORTED_MODULE_3__["Application"].prototype.render = null; // Disable auto-rendering by removing the function
        this.tileSystem.app = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Application"]({ view: this.canvasRef.current, transparent: true });
        this.tileSystem.app.view.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        this.viewport = new pixi_viewport__WEBPACK_IMPORTED_MODULE_4__[/* Viewport */ "a"]({
            screenWidth: this.tileSystem.app.view.clientWidth,
            screenHeight: this.tileSystem.app.view.clientHeight,
            worldWidth: 1000,
            worldHeight: 1000,
            divWheel: this.canvasRef.current,
            interaction: this.tileSystem.app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        });
        this.viewport.zIndex = 1000;
        // hook into hover events
        this.viewport.on("disaster-hover", function (data) {
            if (_this.state.currentlySelectedTile != null) {
                delete data.hoverX;
                delete data.hoverY;
            }
            _this.nextStateToSet = Object.assign(_this.nextStateToSet, data);
        });
        this.viewport.on("disaster-tilepicked", function (data) {
            _this.onTilePick(data.currentlySelectedTile);
        });
        this.viewport.on("click", this.clearSelectedTile);
        // add the this.viewport to the stage
        this.tileSystem.app.stage.addChild(this.viewport);
        this.tileSystem.app.renderer.plugins.interaction.moveWhenInside = true;
        this.tileSystem.app.renderer.plugins.interaction.setTargetElement(this.canvasRef.current);
        this.tileSystem.rootObject = this.viewport;
        // activate plugins
        this.tileSystem.plugins.forEach(function (plugin) { return _this.viewport[plugin](); });
        this.tileSystem.tileSize = getTileSize();
        var loader = this.tileSystem.app.loader;
        this.tileSystem.loadedSprites = this.tileSystem.loadedSprites.concat(this.tileSystem.explosionSprites, Object.values(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* overlayTextures */ "j"]), Object.values(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"]).map(function (groundType) { return Object.values(groundType); }).flat(), _Building__WEBPACK_IMPORTED_MODULE_10__[/* buildings */ "a"].map(function (building) { return buildingSprites(building); }).flat(), _Building__WEBPACK_IMPORTED_MODULE_10__[/* trees */ "b"].map(function (building) { return buildingSprites(building); }).flat(), "sprites/person.png").filter(function (val) { return val != null; });
        var loadedPromise;
        this._isMounted = true;
        this.tileSystem.loadedSprites.forEach(function (sprite) { return loader.add(sprite, sprite); });
        loadedPromise = new Promise(function (resolve) { return loader.load(resolve); });
        loadedPromise.then(function () {
            _this.tileSystem.setupObjects();
            _this.tileSystem.updateTileObjects(tileMap).then(function (centerPoint) {
                var p;
                _this.viewport.moveCenter(centerPoint);
                if (enableCulling) {
                    _this.cull = new pixi_cull__WEBPACK_IMPORTED_MODULE_12__["SpatialHash"]({
                        dirtyTest: false
                    });
                    _this.cull.addContainerPromisified = function (container, staticObject) {
                        var _this = this;
                        return new Promise(function (resolve) {
                            var added = function (object) {
                                object[this.spatial] = { hashes: [] };
                                this.updateObject(object);
                            }.bind(_this);
                            var removed = function (object) {
                                this.removeFromHash(object);
                            }.bind(_this);
                            Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* scheduleIdleWorkLoop */ "l"])(container.children.length, function (i) {
                                var object = container.children[i];
                                object[_this.spatial] = { hashes: [] };
                                _this.updateObject(object);
                            }, 20).then(function () {
                                container.cull = {};
                                _this.containers.push(container);
                                container.on('childAdded', added);
                                container.on('childRemoved', removed);
                                container.cull.added = added;
                                container.cull.removed = removed;
                                if (staticObject) {
                                    container.cull.static = true;
                                }
                                resolve();
                            });
                        });
                    };
                    p = _this.cull.addContainerPromisified(_this.viewport);
                }
                else
                    p = Promise.resolve();
                p.then(function () {
                    _this.viewport.dirty = true;
                    var firstRenderCompleted = false;
                    _this.tileSystem.app.ticker.add(function () {
                        if (Object.keys(_this.nextStateToSet).length > 0) {
                            try {
                                _this.setState(_this.nextStateToSet);
                            }
                            catch (e) {
                                console.error("error", e);
                            }
                            _this.nextStateToSet = {};
                        }
                        if (enableCulling && _this.viewport.dirty) {
                            _this.cull.cull(_this.viewport.getVisibleBounds());
                            _RenderController__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].queueRender();
                        }
                        if (_RenderController__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].needsRender() || _this.tileSystem.isDragging()) { // Manually render when something has changed
                            _RenderController__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]._queuedRender = false;
                            _this.tileSystem.app.renderer.render(_this.tileSystem.app.stage);
                            _this.viewport.dirty = false;
                            if (!firstRenderCompleted) {
                                firstRenderCompleted = true;
                                _this.setState({ initiallyRendered: true });
                                _this.setTimeout(_this.runDisaster, 5000);
                                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* preloadAudio */ "j"])("audio/construction.mp3");
                                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* preloadAudio */ "j"])("audio/explosion.mp3");
                                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* preloadAudio */ "j"])("audio/ocean.mp3");
                            }
                        }
                    });
                });
            });
        });
        this.pixiSizeHandler = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* _debounce */ "b"])(250, this.updatePixiSize);
        window.addEventListener("resize", this.pixiSizeHandler);
        this.updatePixiSize();
    };
    PIXIContainer.prototype.getCurrentOverlayTile = function () {
        if (this.state.currentlyHoveredTile != null)
            return this.state.currentlyHoveredTile;
        else if (this.state.currentlySelectedTile != null)
            return this.state.currentlySelectedTile;
        else
            return null;
    };
    PIXIContainer.prototype.isDialogBasedConstructionType = function (type) {
        return type == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Structures;
    };
    PIXIContainer.prototype.checkActive = function (type, flag) {
        if (type != this.state.constructionType)
            return false;
        if (flag == undefined || typeof flag == 'undefined')
            flag = null;
        if (flag != this.state.constructionFlag)
            return false;
        return true;
    };
    PIXIContainer.prototype.cancelCurrentAction = function (additionalState, onComplete) {
        this.clearSelectedTile();
        this.setState(Object.assign({}, additionalState, { constructionType: null, constructionFlag: null }), onComplete);
        this.tileSystem.interactionAllowed = false;
        this.previouslyChosenTile = null;
    };
    PIXIContainer.prototype.startTileBasedAction = function (type, sticky, flag) {
        Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/pop.mp3");
        if (this.state.constructionType != null) {
            /* Action in progress - check if it's the same */
            if (this.checkActive(type, flag)) {
                this.cancelCurrentAction();
                return;
            }
        }
        this.previouslyChosenTile = null;
        this.tileSystem.interactionAllowed = true;
        this.setState({ constructionType: type, constructionFlag: flag, stickyActionInProgress: sticky });
    };
    PIXIContainer.prototype.performAction = function (tile) {
        var _this = this;
        new Promise(function (resolve) {
            var e_3, _a;
            if (_this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformDown) {
                tile.raiseWholeTile(-0.5);
                var didFlood = false;
                try {
                    for (var AllDirections_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* AllDirections */ "a"]), AllDirections_1_1 = AllDirections_1.next(); !AllDirections_1_1.done; AllDirections_1_1 = AllDirections_1.next()) {
                        var direction = AllDirections_1_1.value;
                        var tileInDirection = tile.getTileInDirection(direction);
                        if (tileInDirection != null && tileInDirection.getLowestElevation() >= tile.getHighestElevation() && Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tileInDirection.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water)) {
                            tile.flood();
                            didFlood = true;
                            break;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (AllDirections_1_1 && !AllDirections_1_1.done && (_a = AllDirections_1.return)) _a.call(AllDirections_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])(didFlood ? "audio/flood.mp3" : "audio/terraform.mp3", resolve);
            }
            else if (_this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformUp) {
                tile.raiseWholeTile(0.5);
                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/terraform.mp3", resolve);
            }
            else if (_this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Teardown) {
                _this.tileSystem.tileObjects[tile.getIndex()].triggerExplosion().then(function () {
                    var e_4, _a, e_5, _b;
                    if (tile.building != null) {
                        if (tile.building.residents > 0) {
                            console.log(tile.building.residents);
                            _this.props.enqueueSnackbar(tile.building.residents + ' people just became homeless.', { variant: 'warning', ref: _this.checkSnackbarCompatibility });
                        }
                        var rings = tile.searchInRing(3, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* AllDirections */ "a"], function (t) { return !Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(t.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water); });
                        var totalTiles = rings.reduce(function (prev, cur) { return prev + cur.length; }, 0);
                        var peoplePerTile = Math.trunc(tile.building.occupancy / totalTiles);
                        try {
                            for (var rings_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(rings), rings_2_1 = rings_2.next(); !rings_2_1.done; rings_2_1 = rings_2.next()) {
                                var ring = rings_2_1.value;
                                try {
                                    for (var ring_2 = (e_5 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(ring)), ring_2_1 = ring_2.next(); !ring_2_1.done; ring_2_1 = ring_2.next()) {
                                        var surroundingTile = ring_2_1.value;
                                        tile.building.occupancy -= peoplePerTile;
                                        _this.props.tileMap[surroundingTile].population += peoplePerTile;
                                        _this.tileSystem.updateTile(surroundingTile);
                                    }
                                }
                                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                finally {
                                    try {
                                        if (ring_2_1 && !ring_2_1.done && (_b = ring_2.return)) _b.call(ring_2);
                                    }
                                    finally { if (e_5) throw e_5.error; }
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (rings_2_1 && !rings_2_1.done && (_a = rings_2.return)) _a.call(rings_2);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        tile.population += tile.building.occupancy;
                    }
                    tile.building = null;
                    if (Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Sand))
                        tile.explosionOverride = _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Sand;
                    tile.ground = _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Dirt1;
                    resolve();
                });
            }
            else if (_this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ChangeGroundType) {
                tile.ground = _this.state.constructionFlag;
                if (tile.ground == _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water)
                    Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/ocean.mp3", resolve);
                else
                    resolve();
            }
            else if (_this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ShowInfo) {
                _this.setState({ forcedQueryTile: tile, showForcedQuery: true });
                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/pop.mp3", resolve);
            }
            else {
                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/pop.mp3", resolve);
            }
        }).then(function () { return _this.onActionCompleted(tile); });
    };
    PIXIContainer.prototype.onActionCompleted = function (tile) {
        if (tile != null)
            this.tileSystem.updateTile(tile.getIndex());
        if (!this.state.stickyActionInProgress) {
            this.cancelCurrentAction();
        }
    };
    PIXIContainer.prototype.setSelectionHighlightVisible = function (tile, visible) {
        this.tileSystem.tileObjects[tile.getIndex()].tileSelectionHighlight.visible = visible;
    };
    PIXIContainer.prototype.housePeople = function (destination, numPeople, radius) {
        var e_6, _a, e_7, _b;
        var _this = this;
        if (radius === void 0) { radius = 5; }
        var availableTiles = destination.searchInRing(radius).flat(2).map(function (n) { return _this.props.tileMap[n]; });
        try {
            /* First try and put everyone in buildings */
            for (var availableTiles_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(availableTiles), availableTiles_1_1 = availableTiles_1.next(); !availableTiles_1_1.done; availableTiles_1_1 = availableTiles_1.next()) {
                var tile = availableTiles_1_1.value;
                if (Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water))
                    continue;
                if (tile.building != null) {
                    var availableSpace = Math.min(numPeople, tile.building.occupancy - tile.building.residents);
                    numPeople -= availableSpace;
                    tile.building.residents += availableSpace;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (availableTiles_1_1 && !availableTiles_1_1.done && (_a = availableTiles_1.return)) _a.call(availableTiles_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        /* Now spread the remaining population over all the tiles */
        var perTile = Math.floor(numPeople / availableTiles.length);
        try {
            for (var availableTiles_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(availableTiles), availableTiles_2_1 = availableTiles_2.next(); !availableTiles_2_1.done; availableTiles_2_1 = availableTiles_2.next()) {
                var tile = availableTiles_2_1.value;
                if (Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water))
                    continue;
                tile.population += perTile;
                numPeople -= perTile;
                this.tileSystem.updateTile(tile.getIndex());
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (availableTiles_2_1 && !availableTiles_2_1.done && (_b = availableTiles_2.return)) _b.call(availableTiles_2);
            }
            finally { if (e_7) throw e_7.error; }
        }
        destination.population += numPeople;
        this.tileSystem.updateTile(destination.getIndex());
    };
    PIXIContainer.prototype.evacuateTiles = function (from, to) {
        var e_8, _a;
        var _this = this;
        var evacuateSources = from.searchInRing(EVACUATION_RANGE).flat(2).map(function (n) { return _this.props.tileMap[n]; });
        var totalEvacuees = 0;
        try {
            for (var evacuateSources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(evacuateSources), evacuateSources_1_1 = evacuateSources_1.next(); !evacuateSources_1_1.done; evacuateSources_1_1 = evacuateSources_1.next()) {
                var tile = evacuateSources_1_1.value;
                if (Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water))
                    continue;
                var agreeableDishoused = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getRandomInt */ "f"])(0, tile.population + 1);
                totalEvacuees += agreeableDishoused;
                tile.population -= agreeableDishoused;
                if (tile.building != null) {
                    var agreeableResidents = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getRandomInt */ "f"])(0, tile.building.residents + 1);
                    totalEvacuees += agreeableResidents;
                    tile.building.residents -= agreeableResidents;
                }
                this.tileSystem.updateTile(tile.getIndex());
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (evacuateSources_1_1 && !evacuateSources_1_1.done && (_a = evacuateSources_1.return)) _a.call(evacuateSources_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        if (totalEvacuees > 0) {
            this.housePeople(to, totalEvacuees, EVACUATION_RANGE);
            this.props.enqueueSnackbar(totalEvacuees + " people agreed to evacuate!", { variant: 'success' });
        }
        else
            this.props.enqueueSnackbar("No one chose to evacuate.", { variant: 'error' });
    };
    PIXIContainer.prototype.checkActionAllowed = function (tile) {
        var e_9, _a;
        var _this = this;
        if (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Structures) {
            if (tile.building != null)
                return "You can't build that here; there is already something else on this tile.";
            else if (Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water))
                return "Building in the ocean is too expensive and dangerous.";
        }
        else if (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformDown || this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformUp) {
            var keyword = this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformDown ? "lower" : "raise";
            if (tile.building != null)
                return "You can't " + keyword + " tiles with something on them.";
            else if (Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water))
                return "You can't " + keyword + " water.";
            var elevationsSurroundingTile = {};
            var whichElevationSurrounding = "get" + (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformUp ? 'Lowest' : 'Highest') + "Elevation";
            var whichElevationUs = "get" + (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformDown ? 'Lowest' : 'Highest') + "Elevation";
            var nw = tile.getTileInDirection(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Northwest);
            if (nw != null)
                elevationsSurroundingTile[_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Northwest] = (nw[whichElevationSurrounding]());
            var ne = tile.getTileInDirection(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Northeast);
            if (ne != null)
                elevationsSurroundingTile[_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Northeast] = (ne[whichElevationSurrounding]());
            var sw = tile.getTileInDirection(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southwest);
            if (sw != null)
                elevationsSurroundingTile[_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southwest] = (sw[whichElevationSurrounding]());
            var se = tile.getTileInDirection(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southeast);
            if (se != null)
                elevationsSurroundingTile[_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southeast] = (se[whichElevationSurrounding]());
            var tileElevation = tile[whichElevationUs]();
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(Object.values(elevationsSurroundingTile)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var elevationSurroundingTile = _c.value;
                    var difference = tileElevation - elevationSurroundingTile;
                    if ((this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformUp && difference >= 1.5) || (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformDown && difference <= -1.5)) {
                        return "You can't " + keyword + " that tile any further.";
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        else if (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ChangeGroundType) {
            if (this.state.constructionFlag == _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water) {
                if (tile.getSlantDirection() != null)
                    return "Water can't be slanted.";
                else if (tile.building != null)
                    return "Ground under a building can't be changed to water.";
            }
        }
        else if (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Teardown && Object(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* isGroundType */ "i"])(tile.ground, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water))
            return "You can't clear water tiles.";
        else if (this.state.constructionType == _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Evacuate) {
            if (tile.building == null || (tile.building.name != "Heliport" && tile.building.name != "Hospital")) {
                return "Evacuation can only be done between heliports and/or hospitals.";
            }
            var tooClose = this.previouslyChosenTile == null ? false : tile.searchInRing(EVACUATION_RANGE).some(function (ring) { return ring.some(function (idx) { return _this.props.tileMap[idx] == _this.previouslyChosenTile; }); });
            if (tooClose) {
                this.setSelectionHighlightVisible(this.previouslyChosenTile, false);
                var sameTile = this.previouslyChosenTile == tile;
                this.previouslyChosenTile = null;
                return sameTile ? "It's pointless to move people where they came from." : "These evacuation centres are too close to each other.";
            }
            if (this.previouslyChosenTile != null) {
                this.setSelectionHighlightVisible(this.previouslyChosenTile, false);
                this.evacuateTiles(this.previouslyChosenTile, tile);
                this.cancelCurrentAction();
            }
            else
                this.setSelectionHighlightVisible(tile, true);
        }
        return null;
    };
    PIXIContainer.prototype.onTilePick = function (tile) {
        /* Check if the action is valid */
        var errString = this.checkActionAllowed(tile);
        if (errString != null && errString.trim().length > 0) {
            Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* playAudio */ "i"])("audio/error.mp3", undefined, undefined, false);
            this.setState({ showError: true, errString: errString });
        }
        else {
            /* Trigger an action */
            if (!this.isDialogBasedConstructionType(this.state.constructionType)) {
                this.performAction(tile);
            }
            else {
                this.setState({ currentlySelectedTile: tile });
            }
            this.previouslyChosenTile = tile;
        }
    };
    /*
    saveTileMap = () => {
        import("./TileMapSaver").then(mod => mod.saveMap(this.props.tileMap));
    };
    */
    PIXIContainer.prototype.getTileName = function (tile) {
        var _a, _b;
        return ((_a = tile) === null || _a === void 0 ? void 0 : _a.building) ? "" + tile.building.name + (tile.building.destroyed ? " (destroyed)" : "") : Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* stringTillFirstDigit */ "m"])(Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getStringEnumName */ "g"])(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"], (_b = tile) === null || _b === void 0 ? void 0 : _b.ground));
    };
    PIXIContainer.prototype.validHover = function () {
        return this.state.hoverX != null && this.state.hoverY != null;
    };
    PIXIContainer.prototype.getDisasterString = function () {
        var census = this.props.tileMap.takeCensus();
        var success = ((census.dead) / (census.housed + census.unhoused + census.dead)) <= (1 / 8);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "head" }, "Vicious tsunami strikes"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "content" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "columns" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "column" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "On " + new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ", " +
                            "a devastating tsunami struck the region. The waves inundated many coastal buildings and most remaining displaced people " +
                            "were killed or severely injured."),
                        success && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            "The city's evacuations manager did an excellent job of providing shelter for displaced people. With their help, most of the population was able to survive the tsunami. Only ",
                            census.dead,
                            " people died, compared to the ",
                            census.housed,
                            " who had been safely sheltered."),
                        success && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Several other cities are now requesting to hire the evacuations manager on a contract basis."),
                        !success && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Civilians were furious about the steps taken to prevent damage. \"Significantly more time could have been spent evacuating low-lying areas and sheltering those without homes,\" one angry survivor stated."),
                        !success && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            "The disaster's toll on the city was high, with over ",
                            census.dead,
                            " people dead."),
                        !success && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Local officials are looking for  a replacement for the current evacuations manager, who has been suspended pending a full investigation."),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            "Thanks for playing ",
                            document.title,
                            "! If you want to play the game again, refresh the page.")))));
    };
    PIXIContainer.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        var tile = this.getCurrentOverlayTile();
        var name = this.getTileName(tile);
        var census = this.props.tileMap.takeCensus();
        var buttons = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            isNewMode && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], { icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* BackIcon */ "a"], onClick: this.props.onGoBack }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], { icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* PauseIcon */ "h"], onClick: this.runDisaster }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "d"], null)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlGroup */ "c"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], { active: this.tileSystem.tileRiskLevelVisible, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* RiskLevelButtonIcon */ "k"], onClick: this.invertRiskLevel, title: (this.state.tileRiskLevelVisible ? "Hide" : "Show") + " tile risk level" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "d"], null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Lower tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformDown, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* TerraformDownIcon */ "m"], onClick: this.startTileBasedAction, active: this.checkActive }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Raise tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformUp, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* TerraformUpIcon */ "n"], onClick: this.startTileBasedAction, active: this.checkActive })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "d"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlGroup */ "c"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Add building", constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Structures, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* BuildingIcon */ "c"], onClick: this.startTileBasedAction, active: this.checkActive }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Clear tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Teardown, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* RedBombIcon */ "j"], onClick: this.startTileBasedAction, active: this.checkActive })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Query tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ShowInfo, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* PurpleInfoIcon */ "i"], onClick: this.startTileBasedAction, active: this.checkActive }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "d"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Trigger evacuation", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Evacuate, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* EvacuationIcon */ "d"], onClick: this.startTileBasedAction, active: this.checkActive }),
            isNewMode && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "d"], null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { sticky: true, title: "Make water", constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ChangeGroundType, flag: _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* WaterIcon */ "p"], onClick: this.startTileBasedAction, active: this.checkActive }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { sticky: true, title: "Make grass", constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ChangeGroundType, flag: _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Grass, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* LandIcon */ "g"], onClick: this.startTileBasedAction, active: this.checkActive })));
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            (this.state.initiallyRendered && !this.state.disasterFinished) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlBar */ "a"], null, this.state.disasterRunning ? "A disaster is taking place!" : buttons),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TileOverlay__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { constructionMode: true, show: tile != null && this.state.interactionAllowed && this.validHover() && !this.isDialogBasedConstructionType(this.state.constructionType), name: name, riskLevel: (_a = tile) === null || _a === void 0 ? void 0 : _a.riskLevel, riskColor: (_b = tile) === null || _b === void 0 ? void 0 : _b.getRiskLevelColor(), isSelected: false, residents: (_d = (_c = tile) === null || _c === void 0 ? void 0 : _c.building) === null || _d === void 0 ? void 0 : _d.residents, occupancy: (_f = (_e = tile) === null || _e === void 0 ? void 0 : _e.building) === null || _f === void 0 ? void 0 : _f.occupancy, unhoused: (_g = tile) === null || _g === void 0 ? void 0 : _g.population, dead: (_h = tile) === null || _h === void 0 ? void 0 : _h.dead, style: {
                    transform: "translateX(1em) translateY(-50%) translate(" + this.state.hoverX + "px, " + this.state.hoverY + "px)"
                } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", { ref: this.canvasRef, style: {
                    visibility: this.state.initiallyRendered ? null : 'hidden',
                    touchAction: 'none',
                    cursor: 'inherit'
                } }),
            !this.state.initiallyRendered && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MapLoadingScreen__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], { loadingText: "Populating the area..." }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConstructionDialog__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], { show: this.state.currentlySelectedTile != null && this.isDialogBasedConstructionType(this.state.constructionType), type: this.state.constructionType, onChooseItem: this.performBuild, targetTile: this.state.currentlySelectedTile, onBuildCancel: this.onActionCompleted.bind(this, null) }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], { open: this.state.showError, onClose: this.onErrorAcknowledge },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null, "Action not allowed"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], { dividers: true }, this.state.errString),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], { onClick: this.onErrorAcknowledge, color: "primary" }, "OK"))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], { open: this.state.showForcedQuery, onClose: this.endQuery, hideBackdrop: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], { className: "tile-overlay-embed-parent" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], { mainSprite: (_j = this.state.forcedQueryTile) === null || _j === void 0 ? void 0 : _j.getAppropriateMainSprite(), baseSprite: (_k = this.state.forcedQueryTile) === null || _k === void 0 ? void 0 : _k.getAppropriateBaseSprite(), leftColor: (_m = this.tileSystem.tileObjects[(_l = this.state.forcedQueryTile) === null || _l === void 0 ? void 0 : _l.getIndex()]) === null || _m === void 0 ? void 0 : _m.leftColor, rightColor: (_p = this.tileSystem.tileObjects[(_o = this.state.forcedQueryTile) === null || _o === void 0 ? void 0 : _o.getIndex()]) === null || _p === void 0 ? void 0 : _p.rightColor }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TileOverlay__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { embed: true, constructionMode: true, show: this.state.forcedQueryTile != null, name: this.getTileName(this.state.forcedQueryTile), riskLevel: (_q = this.state.forcedQueryTile) === null || _q === void 0 ? void 0 : _q.riskLevel, riskColor: (_r = this.state.forcedQueryTile) === null || _r === void 0 ? void 0 : _r.getRiskLevelColor(), isSelected: false, residents: (_t = (_s = this.state.forcedQueryTile) === null || _s === void 0 ? void 0 : _s.building) === null || _t === void 0 ? void 0 : _t.residents, occupancy: (_v = (_u = this.state.forcedQueryTile) === null || _u === void 0 ? void 0 : _u.building) === null || _v === void 0 ? void 0 : _v.occupancy, unhoused: (_w = this.state.forcedQueryTile) === null || _w === void 0 ? void 0 : _w.population, dead: (_x = this.state.forcedQueryTile) === null || _x === void 0 ? void 0 : _x.dead })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], { onClick: this.endQuery, color: "primary" }, "OK"))),
            this.state.initiallyRendered && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PopulationInfo__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ showTimer: !this.state.disasterFinished && !this.state.disasterRunning, forceOpen: this.state.disasterFinished }, census, { onExpiry: this.runDisaster })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PhoneDialog__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"], { open: this.state.disasterFinished && !this.state.newspaperClosed, onClose: this.closeNewspaper },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], { className: "newspaper" }, this.getDisasterString())));
    };
    return PIXIContainer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));
var SnackbarPixiCont = Object(notistack__WEBPACK_IMPORTED_MODULE_22__["withSnackbar"])(PIXIContainer);
var PixiContProvider = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(notistack__WEBPACK_IMPORTED_MODULE_22__["SnackbarProvider"], null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SnackbarPixiCont, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props), props.children));
};
/* harmony default export */ __webpack_exports__["default"] = (PixiContProvider);


/***/ }),

/***/ "./src/PhoneDialog.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@material-ui/core/esm/Dialog/index.js");





var PhoneDialog = function (props) {
    var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
    var fullScreen = props.fullScreen, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "f"])(props, ["fullScreen"]);
    fullScreen = fullScreen || Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(theme.breakpoints.down('sm'));
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, rest, { fullScreen: fullScreen }), props.children);
};
/* harmony default export */ __webpack_exports__["a"] = (PhoneDialog);


/***/ }),

/***/ "./src/PopulationInfo.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _TimerBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/TimerBar.tsx");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/Typography/index.js");








var PopulationInfo = function (props) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "e"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), isOpen = _a[0], setIsOpen = _a[1];
    var onChange = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (evt, state) {
        setIsOpen(state);
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
        if (props.forceOpen)
            setIsOpen(true);
    }, [props.forceOpen]);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { square: true, expanded: isOpen, onChange: onChange, className: "population-info" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default.a, null) }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "population-column" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { variant: "h5" }, "POPULATION"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { style: { color: "red" } },
                        "Deceased: ",
                        props.dead),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { style: { color: "black" } },
                        "Homeless: ",
                        props.unhoused),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { style: { color: "green" } },
                        "Sheltered: ",
                        props.housed))),
            props.showTimer && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "population-column" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { variant: "h5" }, "DISASTER TIMER"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TimerBar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { amountOfTime: 1000 * 60 * 20, onExpiry: props.onExpiry }))));
};
/* harmony default export */ __webpack_exports__["a"] = (PopulationInfo);


/***/ }),

/***/ "./src/RenderController.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderController */
var RenderController = {
    _queuedRender: false,
    queueRender: function () {
        RenderController._queuedRender = true;
    },
    needsRender: function () {
        return RenderController._queuedRender || RenderController.activeAnimations.size > 0;
    },
    activeAnimations: new Set()
};
/* harmony default export */ __webpack_exports__["a"] = (RenderController);


/***/ }),

/***/ "./src/TileContainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./modules/pixi.js/index.js");
/* harmony import */ var _TileSprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/TileSprite.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utilities.tsx");
/* harmony import */ var _RenderController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/RenderController.ts");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/Tile.tsx");






var RISK_LEVEL_SHRINK_FACTOR = 0.95;
function randomPeopleVariation(n) {
    return n + Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* getRandomArbitrary */ "d"])(-0.02, 0.02);
}
var TileContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(TileContainer, _super);
    function TileContainer(i, getTexture, explosionSprites) {
        var _this = _super.call(this) || this;
        _this.getTexture = getTexture;
        _this.disasterGameIndex = i;
        _this.interactive = true;
        _this.interactiveChildren = true;
        _this.tileObject = new _TileSprite__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](), i);
        _this.tileObject.base.name = "tilemain" + i;
        _this.tileObject.base.interactive = true;
        var pickHandler = _this.onForwardEvent.bind(_this, "pick");
        _this.tileObject.base.on("touchstart", _this.handleTouchEvent);
        _this.tileObject.base.on("touchmove", _this.handleTouchEvent);
        _this.tileObject.base.on("touchend", function (e) {
            var touches = [];
            touches[0] = _this.lastTouch;
            e.data.originalEvent = Object.create(e.data.originalEvent, {
                touches: { value: touches /* configurable, enumerable, writable? */ }
            });
            pickHandler(e);
        });
        _this.tileObject.base.on("click", pickHandler);
        _this.tileObject.base.on("mouseover", _this.onForwardEvent.bind(_this, "hoverin"));
        _this.tileObject.base.on("mouseout", _this.onForwardEvent.bind(_this, "hoverout"));
        _this.tileObject.base.on("mousemove", _this.onForwardEvent.bind(_this, "hovermove"));
        _this.tileObject.base.zIndex = 0;
        _this.addChild(_this.tileObject.base);
        _this.tileRiskLevel = new _TileSprite__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](), i);
        _this.tileRiskLevel.usingHitmap = false;
        _this.tileRiskLevel.setInteractive(false);
        _this.tileRiskLevel.base.zIndex = 0;
        _this.tileRiskLevel.visible = true;
        _this.tileRiskLevel.base.tint = 0xFF0000;
        _this.addChild(_this.tileRiskLevel.base);
        _this.tileHoverObject = new _TileSprite__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](), i);
        _this.tileHoverObject.setInteractive(false);
        _this.tileHoverObject.base.zIndex = 0;
        _this.tileHoverObject.visible = false;
        _this.tileSelectionHighlight = new _TileSprite__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](), i);
        _this.tileSelectionHighlight.setInteractive(false);
        _this.tileSelectionHighlight.base.zIndex = 0;
        _this.tileSelectionHighlight.base.tint = 0x9900ff;
        _this.tileSelectionHighlight.visible = false;
        _this.addChild(_this.tileSelectionHighlight.base);
        _this.slant = null;
        _this.addChild(_this.tileHoverObject.base);
        _this.numPeople = 0;
        _this.tileBuildingObject = new _TileSprite__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](), i);
        _this.tileBuildingObject.usingHitmap = false;
        _this.tileBuildingObject.base.name = "tileBuilding" + i;
        _this.tileBuildingObject.setInteractive(false);
        _this.tileBuildingObject.base.hitArea = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](0, 0, 0, 0);
        _this.tileBuildingObject.base.zIndex = 0;
        _this.addChild(_this.tileBuildingObject.base);
        _this.tileAnimation = new _TileSprite__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](new pixi_js__WEBPACK_IMPORTED_MODULE_1__["AnimatedSprite"]([pixi_js__WEBPACK_IMPORTED_MODULE_1__["Texture"].EMPTY], true), i);
        _this.tileAnimation.usingHitmap = false;
        _this.tileAnimation.base.textures = explosionSprites;
        _this.tileAnimation.setInteractive(false);
        _this.tileAnimation.base.zIndex = 0;
        _this.tileAnimation.base.hitArea = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](0, 0, 0, 0);
        _this.tileAnimation.base.animationSpeed = 0.5;
        _this.tileAnimation.base.loop = false;
        _this.tileAnimation.base.onComplete = function () {
            _this.tileAnimation.visible = false;
            _RenderController__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].activeAnimations.delete(_this.tileAnimation);
            _RenderController__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].queueRender();
        };
        _this.tileAnimation.base.visible = false;
        _this.addChild(_this.tileAnimation.base);
        var left = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Graphics"]();
        _this.addChild(left);
        left.position.x = 0;
        left.position.y = 0;
        left.pivot.x = 0;
        left.pivot.y = 0;
        left.cacheAsBitmap = true;
        left.zIndex = 0;
        left.interactive = false;
        left.drawPolygon = _this.myDrawPolygon;
        _this.tileLeftObject = left;
        var right = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Graphics"]();
        _this.addChild(right);
        right.position.x = 0;
        right.position.y = 0;
        right.pivot.x = 0;
        right.pivot.y = 0;
        right.cacheAsBitmap = true;
        right.zIndex = 0;
        right.interactive = false;
        right.drawPolygon = _this.myDrawPolygon;
        _this.tileRightObject = right;
        return _this;
    }
    Object.defineProperty(TileContainer.prototype, "numPeople", {
        get: function () {
            return this.people.length;
        },
        set: function (newVal) {
            var _this = this;
            if (typeof this.people != 'undefined') {
                this.people.forEach(function (person) { return _this.removeChild(person); });
            }
            this.people = [];
            if (newVal > 0) {
                var personTexture = this.getTexture("sprites/person.png");
                for (var i = 0; i < newVal; i++) {
                    this.people[i] = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](personTexture);
                    this.people[i].anchor = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](0.5, 1);
                    this.addChild(this.people[i]);
                }
                this.repositionPeople();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileContainer.prototype, "tileSideHue", {
        get: function () {
            return this._tileSideHue;
        },
        set: function (newVal) {
            this._tileSideHue = newVal;
            this.redrawTileSides();
        },
        enumerable: true,
        configurable: true
    });
    TileContainer.prototype.getOverlayTexture = function () {
        if (this.slant == null)
            return this.getTexture(_Tile__WEBPACK_IMPORTED_MODULE_5__[/* overlayTextures */ "j"].noSlope);
        else
            return this.getTexture(_Tile__WEBPACK_IMPORTED_MODULE_5__[/* overlayTextures */ "j"][this.slant]);
    };
    Object.defineProperty(TileContainer.prototype, "slant", {
        get: function () {
            return this._slant;
        },
        set: function (newVal) {
            this._slant = newVal;
            this.redrawTileSides();
            this.tileRiskLevel.texture = this.getOverlayTexture();
            this.tileHoverObject.texture = this.getOverlayTexture();
            this.tileSelectionHighlight.texture = this.getOverlayTexture();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileContainer.prototype, "hoverVisible", {
        get: function () {
            return this.tileHoverObject.visible;
        },
        set: function (visible) {
            this.tileHoverObject.visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileContainer.prototype, "tileSize", {
        get: function () {
            return this._tileSize;
        },
        set: function (newVal) {
            this._tileSize = newVal;
            this.tileObject.tileSize = newVal;
            this.tileHoverObject.tileSize = newVal;
            this.tileSelectionHighlight.tileSize = newVal;
            this.tileAnimation.tileSize = newVal;
            this.tileRiskLevel.tileSize = newVal * RISK_LEVEL_SHRINK_FACTOR;
            if (typeof this.tileBuildingObject == 'object')
                this.tileBuildingObject.tileSize = newVal;
            this.repositionPeople();
            if (typeof newVal == 'number') {
                this.repositionTiles();
                this.redrawTileSides();
            }
        },
        enumerable: true,
        configurable: true
    });
    TileContainer.prototype.repositionPeople = function () {
        var _this = this;
        this.people.forEach(function (person) {
            person.width = _this.tileSize / 20;
            person.scale.y = person.scale.x;
            var pos = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* getRandomArbitrary */ "d"])(0.5, 0.9);
            person.x = pos * _this.tileSize;
            person.y = (1 - ((pos - 0.5) * 0.55)) * _this.tileSize;
        });
    };
    TileContainer.prototype.repositionTiles = function () {
        this.tileObject.x = 0;
        this.tileObject.y = 1 * this.tileSize;
        this.tileHoverObject.x = 0;
        this.tileHoverObject.y = 1 * this.tileSize;
        this.tileAnimation.x = 0;
        this.tileSelectionHighlight.x = 0;
        this.tileSelectionHighlight.y = 1 * this.tileSize;
        this.tileAnimation.y = 1 * this.tileSize;
        if (typeof this.tileBuildingObject == 'object') {
            this.tileBuildingObject.x = 0;
            this.tileBuildingObject.y = 1 * this.tileSize;
        }
        this.tileRiskLevel.x = (1 - RISK_LEVEL_SHRINK_FACTOR) * this.tileSize / 2; // 0.5 * this.tileSize;
        this.tileRiskLevel.y = (1 - ((1 - RISK_LEVEL_SHRINK_FACTOR) / 4)) * this.tileSize; //0.5 * this.tileSize;
        this.repositionPeople();
    };
    TileContainer.prototype.redrawTileSides = function () {
        var left_em = 0;
        var top_em = 0;
        if (typeof this.tileLeftObject == 'object') {
            this.tileLeftObject.cacheAsBitmap = false;
            this.tileLeftObject.clear();
            var color = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* HSVtoRGB */ "a"])(this.tileSideHue / 360, 68.6 / 100, 35 / 100);
            this.leftColor = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* rgbToHexNum */ "k"])(color);
            this.tileLeftObject.beginFill(this.leftColor);
            var leftXCoordinates = [left_em * this.tileSize, this.tileSize * (left_em + 0.5), this.tileSize * (left_em + 0.5), left_em * this.tileSize];
            if (this.slant == null || this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].NortheastSouthwest) {
                this.tileLeftObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[0], this.tileSize * (top_em + 0.75)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[1], this.tileSize * (top_em + 1)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[2], this.tileSize * (top_em + 1.5)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[3], this.tileSize * (top_em + 1.25))
                ]);
            }
            else if (this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].SouthwestNortheast) {
                this.tileLeftObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[0], this.tileSize * (top_em + 0.625)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[1], this.tileSize * (top_em + 0.875)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[2], this.tileSize * (top_em + 1.375)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[3], this.tileSize * (top_em + 1.125))
                ]);
            }
            else if (this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].NorthwestSoutheast) {
                this.tileLeftObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[0], this.tileSize * (top_em + 0.625)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[1], this.tileSize * (top_em + 1)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[2], this.tileSize * (top_em + 1.5)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[3], this.tileSize * (top_em + 1.125))
                ]);
            }
            else if (this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].SoutheastNorthwest) {
                this.tileLeftObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[0], this.tileSize * (top_em + 0.75)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[1], this.tileSize * (top_em + 0.875)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[2], this.tileSize * (top_em + 1.375)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](leftXCoordinates[3], this.tileSize * (top_em + 1.25))
                ]);
            }
            this.tileLeftObject.endFill();
            this.tileLeftObject.cacheAsBitmap = true;
        }
        if (typeof this.tileRightObject == 'object') {
            this.tileRightObject.cacheAsBitmap = true;
            this.tileRightObject.clear();
            var color = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* HSVtoRGB */ "a"])(this.tileSideHue / 360, 67.9 / 100, 28 / 100);
            this.rightColor = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* rgbToHexNum */ "k"])(color);
            this.tileRightObject.beginFill(this.rightColor);
            var rightXCoordinates = [(left_em + 1) * this.tileSize, this.tileSize * (left_em + 0.5), this.tileSize * (left_em + 0.5), this.tileSize * (left_em + 1)];
            if (this.slant == null || this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].NorthwestSoutheast) {
                this.tileRightObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[0], this.tileSize * (top_em + 0.75)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[1], this.tileSize * (top_em + 1)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[2], this.tileSize * (top_em + 1.5)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[3], this.tileSize * (top_em + 1.25))
                ]);
            }
            else if (this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].SouthwestNortheast) {
                this.tileRightObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[0], this.tileSize * (top_em + 0.75)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[1], this.tileSize * (top_em + 0.875)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[2], this.tileSize * (top_em + 1.375)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[3], this.tileSize * (top_em + 1.25))
                ]);
            }
            else if (this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].NortheastSouthwest) {
                this.tileRightObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[0], this.tileSize * (top_em + 0.625)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[1], this.tileSize * (top_em + 1)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[2], this.tileSize * (top_em + 1.5)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[3], this.tileSize * (top_em + 1.125))
                ]);
            }
            else if (this.slant == _Tile__WEBPACK_IMPORTED_MODULE_5__[/* TileSlant */ "g"].SoutheastNorthwest) {
                this.tileRightObject.drawPolygon([
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[0], this.tileSize * (top_em + 0.625)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[1], this.tileSize * (top_em + 0.875)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[2], this.tileSize * (top_em + 1.375)),
                    new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Point"](rightXCoordinates[3], this.tileSize * (top_em + 1.125))
                ]);
            }
            this.tileRightObject.endFill();
            this.tileRightObject.cacheAsBitmap = false;
        }
    };
    TileContainer.prototype.onForwardEvent = function (newEventName, evt) {
        this.emit(newEventName, evt);
    };
    TileContainer.prototype.triggerExplosion = function () {
        var _this = this;
        return new Promise(function (resolve) {
            Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* playAudio */ "i"])("audio/explosion.mp3", function () {
                _this.tileAnimation.visible = true;
                _RenderController__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].activeAnimations.add(_this.tileAnimation);
                _this.tileAnimation.base.gotoAndPlay(0);
                resolve();
            }, false);
        });
    };
    TileContainer.prototype.handleTouchEvent = function (e) {
        var t = e.data.originalEvent;
        this.lastTouch = t.touches[0];
        t.preventDefault();
    };
    TileContainer.prototype.myDrawPolygon = function (path) {
        path.forEach(function (point, index) {
            point.x = Math.trunc(point.x);
            point.y = Math.trunc(point.y);
        });
        pixi_js__WEBPACK_IMPORTED_MODULE_1__["Graphics"].prototype.drawPolygon.apply(this, arguments);
        return this;
    };
    return TileContainer;
}(pixi_js__WEBPACK_IMPORTED_MODULE_1__["Container"]));
/* harmony default export */ __webpack_exports__["a"] = (TileContainer);


/***/ }),

/***/ "./src/TileOverlay.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Icons.tsx");



var BuildButton = function (props) {
    var icon = props.icon, onClick = props.onClick, constructionType = props.constructionType, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "f"])(props, ["icon", "onClick", "constructionType"]);
    var IconComponent = icon;
    var internalOnClick = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
        if (typeof onClick == 'function')
            onClick(constructionType);
    }, [constructionType]);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ className: "hoverable-button build-button", onClick: internalOnClick }, rest),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconComponent, null));
};
/*<div className="tile-overlay-clipper">
            <div className={`tile-overlay-wrapper tile-overlay-${props.isSelected ? "selected" : "unselected"}`}>*/
var TileOverlay = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    if (!props.show || props.name == undefined)
        return null;
    var riskColor = props.riskColor.toString(16);
    var residencyComponent;
    if (typeof props.residents != 'undefined' && props.occupancy > 0) {
        residencyComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            "\u00A0",
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__[/* BlueHouseIcon */ "b"], null),
                "\u00A0", props.residents + "/" + props.occupancy));
    }
    var deadComponent;
    if (props.dead > 0)
        deadComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            "\u00A0",
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__[/* SkullIcon */ "l"], null),
                "\u00A0",
                props.dead));
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "tile-overlay-container tile-overlay-" + (props.isSelected ? "selected" : "unselected") + " " + (props.embed ? "tile-overlay-embed" : ""), ref: ref, style: props.style },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "tile-risk-level-text", style: { backgroundColor: "#" + riskColor } }, props.riskLevel),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "tile-info-container" },
            props.name,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "icon-information" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__[/* FontAwesomeIcon */ "e"], { type: "exclamation-triangle", color: "#fccf03" }),
                    "\u00A0",
                    "100%"),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__[/* UnhousedPersonIcon */ "o"], null),
                    "\u00A0",
                    props.unhoused),
                residencyComponent,
                deadComponent)));
    /*</div>
        </div>
        {props.isSelected && <div className={`modal-backdrop ${!props.isSelected ? "modal-backdrop-clear" : "modal-backdrop-translucent"}`} onClick={onClickAway}></div>}*/
});
/* harmony default export */ __webpack_exports__["a"] = (TileOverlay);


/***/ }),

/***/ "./src/TileSprite.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./modules/pixi.js/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utilities.tsx");


var TileSprite = /** @class */ (function () {
    function TileSprite(_base, index) {
        this._base = _base;
        this._tileSize = null;
        this.usingHitmap = true;
        _base.texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].EMPTY;
        this.disasterGameIndex = index;
        _base.disasterGameIndex = index;
        this.handleTextureResize = this.handleTextureResize.bind(this);
        _base.anchor = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 1);
    }
    TileSprite.prototype.getBaseObject = function () {
        return this._base;
    };
    Object.defineProperty(TileSprite.prototype, "tileSize", {
        get: function () {
            return this._tileSize;
        },
        set: function (newVal) {
            this._tileSize = newVal;
            this.handleTextureResize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileSprite.prototype, "base", {
        get: function () {
            return this._base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileSprite.prototype, "visible", {
        get: function () {
            return this._base.visible;
        },
        set: function (v) {
            this._base.visible = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileSprite.prototype, "x", {
        get: function () {
            return this._base.x;
        },
        set: function (x) {
            this._base.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileSprite.prototype, "y", {
        get: function () {
            return this._base.y;
        },
        set: function (y) {
            this._base.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileSprite.prototype, "texture", {
        get: function () {
            return this._base.texture;
        },
        set: function (texture) {
            if (texture == null) {
                this._base.texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].EMPTY;
                return;
            }
            this._base.texture.off("update", this.handleTextureResize);
            this._base.texture = texture;
            this._base.texture.on("update", this.handleTextureResize);
            if ((this.usingHitmap && typeof texture.baseTexture.hitmap == 'undefined') || typeof texture.baseTexture.averageHue == 'undefined') {
                Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[/* genHitmapAndAverageHue */ "c"])(texture.baseTexture, 127);
            }
            this.handleTextureResize(false);
        },
        enumerable: true,
        configurable: true
    });
    TileSprite.prototype.setInteractive = function (interactive) {
        this._base.interactive = interactive;
    };
    TileSprite.prototype.handleTextureResize = function (generateHitmap) {
        if (this.tileSize == null)
            return;
        this._base.width = this.tileSize;
        this._base.scale.y = this._base.scale.x;
        this.setInteractive(this._base.interactive);
        /*
        if(generateHitmap != false && typeof (this.texture as any).hitmap != 'undefined') {
            genHitmap(this.texture.baseTexture, 127);
        }
        */
    };
    return TileSprite;
}());
/* harmony default export */ __webpack_exports__["a"] = (TileSprite);
var tempPoint = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Point"]();
pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"].prototype.containsPoint = function (point) {
    this.worldTransform.applyInverse(point, tempPoint);
    var width = this._texture.orig.width;
    var height = this._texture.orig.height;
    var x1 = -width * this.anchor.x;
    var y1 = 0;
    var flag = false;
    if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
        y1 = -height * this.anchor.y;
        if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
            flag = true;
        }
    }
    if (!flag) {
        return false;
    }
    // bitmap check
    var tex = this.texture;
    var baseTex = this.texture.baseTexture;
    var res = baseTex.resolution;
    if (!baseTex.hitmap) {
        return true;
    }
    var hitmap = baseTex.hitmap;
    // this does not account for rotation yet!!!
    var dx = Math.round((tempPoint.x - x1 + tex.frame.x) * res);
    var dy = Math.round((tempPoint.y - y1 + tex.frame.y) * res);
    var ind = (dx + dy * baseTex.realWidth);
    var ind1 = ind % 32;
    var ind2 = ind / 32 | 0;
    return (hitmap[ind2] & (1 << ind1)) !== 0;
};


/***/ }),

/***/ "./src/TileSystem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _TileSystem; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./modules/pixi.js/index.js");
/* harmony import */ var _TileContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/TileContainer.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utilities.tsx");
/* harmony import */ var _RenderController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/RenderController.ts");
/// <reference path="customtypes.d.ts"/>




var TILE_SIZE = 1;
var TILE_MARGIN = 0;
var TILE_WHOLE = TILE_SIZE + TILE_MARGIN;
var _TileSystem = /** @class */ (function () {
    function _TileSystem(stateHolder) {
        this.stateHolder = stateHolder;
        this.plugins = ['drag', 'pinch', 'wheel', 'mouseEdges'];
        this.previousHoveredObject = null;
        this._interactionAllowed = false;
        this.loadedSprites = [];
        this.tileObjects = [];
        this.topLevelOrderChanged = true;
        /* buildingAlphaFilter = new PIXI.filters.AlphaFilter(0.5);*/
        this.lastTileMap = null;
        this.lastRowLength = 0;
        this.currentlyHoveredTile = -1;
        this.currentlySelectedTile = -1;
        this.explosionSprites = (function () {
            var arr = [];
            for (var i = 1; i <= 16; i++) {
                arr.push("sprites/dynamite/256_00" + Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* pad */ "h"])(i, 2) + ".png");
            }
            return arr;
        }());
        this.onPickTile = this.onPickTile.bind(this);
        this.onHoverInTile = this.onHoverInTile.bind(this);
        this.onHoverOutTile = this.onHoverOutTile.bind(this);
        this.onHoverMoveTile = this.onHoverMoveTile.bind(this);
        this.updateTile = this.updateTile.bind(this);
        this.getTexture = this.getTexture.bind(this);
        this.isPinching = false;
    }
    Object.defineProperty(_TileSystem.prototype, "interactionAllowed", {
        get: function () {
            return this._interactionAllowed;
        },
        set: function (newVal) {
            this._interactionAllowed = newVal;
            this.onHoverOutTile(null);
            this.clearSelectedTile(null);
            this.rootObject.emit("disaster-hover", {
                interactionAllowed: this._interactionAllowed
            });
            if (this.tileObjects != null)
                this.tileObjects.forEach(function (object) { return object.tileObject.base.cursor = newVal ? "pointer" : "default"; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_TileSystem.prototype, "tileRiskLevelVisible", {
        get: function () {
            if (typeof this.tileObjects[0] != 'undefined')
                return this.tileObjects[0].tileRiskLevel.visible;
            else
                return false;
        },
        set: function (visible) {
            this.tileObjects.forEach(function (obj) { return obj.tileRiskLevel.visible = visible; });
            this.rootObject.emit("disaster-hover", {
                tileRiskLevelVisible: visible
            });
        },
        enumerable: true,
        configurable: true
    });
    _TileSystem.prototype.onTileChange = function (index) {
        if (typeof this.stateHolder.onTileChange == 'function')
            this.stateHolder.onTileChange(index);
    };
    _TileSystem.getTileIndex = function (tile) {
        if (typeof tile.disasterGameIndex != 'number')
            throw new Error("Not a tile-based object");
        return tile.disasterGameIndex;
    };
    _TileSystem.prototype.isDragging = function () {
        return this.rootObject.plugins.get('drag').active || this.rootObject.plugins.get('pinch').active || this.isPinching;
    };
    _TileSystem.prototype.shouldIgnoreTileInteraction = function () {
        return this.isDragging() || this.currentlySelectedTile != -1 || !this.interactionAllowed || (typeof window.event != 'undefined' && window.event.disasterIgnore == true);
    };
    _TileSystem.prototype.clearSelectedTile = function (evt) {
        if (this.currentlySelectedTile == -1)
            return;
        if (this.currentlyHoveredTile != this.currentlySelectedTile) {
            /* No longer hovering over the previously selected tile... hide its outline */
            this.tileObjects[this.currentlySelectedTile].hoverVisible = false;
            if (this.currentlyHoveredTile != -1) {
                /* Show the new tile's outline */
                this.tileObjects[this.currentlyHoveredTile].hoverVisible = true;
            }
            _RenderController__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queueRender();
        }
        this.currentlySelectedTile = -1;
        if (this.currentlyHoveredTile != -1 && typeof evt == 'object') {
            this.onHoverMoveTile(evt);
        }
        this.rootObject.emit("disaster-hover", {
            currentlySelectedTile: null
        });
    };
    _TileSystem.prototype.onPickTile = function (evt) {
        if (this.shouldIgnoreTileInteraction() || evt.data.originalEvent.disasterIgnore == true)
            return;
        //this.currentlySelectedTile = this.currentlyHoveredTile;
        //this.plugins.forEach((plugin) =>  this.rootObject.plugins.pause(plugin));
        this.rootObject.emit("disaster-tilepicked", {
            currentlySelectedTile: this.lastTileMap[_TileSystem.getTileIndex(evt.target)]
        });
        evt.doIgnoreTileClick = true;
        _RenderController__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queueRender();
    };
    _TileSystem.retrieveEventCoords = function (e) {
        if (typeof e.clientX != 'undefined') {
            var m = e;
            return { x: m.clientX, y: m.clientY };
        }
        else if (typeof e.touches != 'undefined') {
            var t = e;
            return { x: t.touches[0].clientX, y: t.touches[0].clientY };
        }
        else {
            console.error("Unexpected event type");
            return { x: 0, y: 0 };
        }
    };
    _TileSystem.prototype.clearPreviousHover = function () {
        if (this.previousHoveredObject != null) {
            this.previousHoveredObject.hoverVisible = false;
            this.previousHoveredObject = null;
        }
    };
    _TileSystem.prototype.onHoverInTile = function (evt) {
        var tile = evt.target;
        this.currentlyHoveredTile = _TileSystem.getTileIndex(tile);
        if (!this.shouldIgnoreTileInteraction()) {
            this.clearPreviousHover();
            this.tileObjects[this.currentlyHoveredTile].hoverVisible = true;
            this.previousHoveredObject = this.tileObjects[this.currentlyHoveredTile];
            _RenderController__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queueRender();
        }
        /* Emit event */
        if (typeof evt.data != 'undefined' && this.lastTileMap != null) {
            var coords = _TileSystem.retrieveEventCoords(evt.data.originalEvent);
            if (this.interactionAllowed)
                this.rootObject.emit("disaster-hover", {
                    hoverX: coords.x,
                    hoverY: coords.y,
                    currentlyHoveredTile: this.lastTileMap[this.currentlyHoveredTile]
                });
        }
    };
    _TileSystem.prototype.onHoverMoveTile = function (evt) {
        if (this.currentlyHoveredTile == -1 || this.currentlySelectedTile != -1 || !this.interactionAllowed)
            return;
        var coords = _TileSystem.retrieveEventCoords(evt.data.originalEvent);
        this.rootObject.emit("disaster-hover", {
            hoverX: coords.x,
            hoverY: coords.y,
            currentlyHoveredTile: this.lastTileMap[this.currentlyHoveredTile]
        });
    };
    _TileSystem.prototype.onHoverOutTile = function (evt) {
        if (this.isDragging())
            return;
        if (typeof this.tileObjects[this.currentlyHoveredTile] != 'undefined' && this.currentlyHoveredTile != this.currentlySelectedTile) {
            this.clearPreviousHover();
            this.tileObjects[this.currentlyHoveredTile].hoverVisible = false;
            _RenderController__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queueRender();
        }
        this.currentlyHoveredTile = -1;
        if (evt != null) {
            if (this.interactionAllowed)
                this.rootObject.emit("disaster-hover", {
                    hoverX: 0,
                    hoverY: 0,
                    currentlyHoveredTile: null
                });
        }
    };
    _TileSystem.prototype.setupObjects = function () {
        var _this = this;
        this.loadedExplosionTextures = this.explosionSprites.map(function (sprite) { return _this.getTexture(sprite); });
        this.onHoverOutTile(null);
        this.rootObject.on("zoomed-end", function () {
            _RenderController__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queueRender();
        });
        this.rootObject.on("pinch-start", function () { return _this.isPinching = true; });
        this.rootObject.on("pinch-end", function () {
            _this.isPinching = false;
            window.event.disasterIgnore = true;
        });
        this.rootObject.on("pointerup", function () {
            /* Force reset the silly plugin */
            _this.rootObject.plugins.get('drag').moved = false;
        });
        this.rootObject.on("mouseout", this.onHoverOutTile);
    };
    _TileSystem.prototype.onResize = function () {
        if (this.lastTileMap != null)
            return this.updateTileObjects(this.lastTileMap, this.lastRowLength);
        else
            return Promise.resolve(null);
    };
    _TileSystem.getTilePositionInformation = function (logicalChildNumber, totalRows, squareFactor, x_offset, z_offset) {
        if (x_offset === void 0) { x_offset = TILE_WHOLE; }
        if (z_offset === void 0) { z_offset = 0; }
        var y_pos = logicalChildNumber == 5 ? -0.2 : 0;
        var type = (logicalChildNumber % squareFactor) + 1;
        var loops = Math.trunc(logicalChildNumber / squareFactor);
        var x_pos = x_offset + ((type - 1) * TILE_WHOLE);
        var z_pos = z_offset + totalRows - (((loops * TILE_WHOLE)));
        return { x: x_pos, y: y_pos, z: z_pos };
    };
    _TileSystem.prototype.handleTextureResize = function (sprite) {
        sprite.width = this.tileSize;
        sprite.scale.y = sprite.scale.x;
    };
    _TileSystem.prototype.getSquareFactor = function () {
        return this.lastTileMap.rowLength;
    };
    _TileSystem.prototype.updateTile = function (i) {
        if (i < 0 || i >= this.lastTileMap.length)
            throw new Error("Unexpected index");
        var squareFactor = this.getSquareFactor();
        var loops = Math.trunc(i / squareFactor);
        var column = (i - (loops * squareFactor));
        var left_em = (0.5 * (column)) + (0.5 * (loops));
        var top_em = (-0.25 * (column)) + (0.25 * (loops)) + (-this.lastTileMap[i].getLowestElevation() / 4);
        var zOffset = ((loops * squareFactor) + (squareFactor - column)) * 2;
        if (this.tileObjects[i] == undefined) {
            this.tileObjects[i] = new _TileContainer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](i, this.getTexture, this.loadedExplosionTextures);
            this.tileObjects[i].name = "tile" + i;
            this.tileObjects[i].interactive = true;
            this.tileObjects[i].on("pick", this.onPickTile);
            this.tileObjects[i].on("hoverin", this.onHoverInTile);
            this.tileObjects[i].on("hoverout", this.onHoverOutTile);
            this.tileObjects[i].on("hovermove", this.onHoverMoveTile);
            this.tileObjects[i].zIndex = 0 + zOffset;
            this.tileObjects[i].tileRiskLevel.visible = false;
            this.rootObject.addChild(this.tileObjects[i]);
            this.topLevelOrderChanged = true;
        }
        this.tileObjects[i].numPeople = Math.ceil(this.lastTileMap[i].population);
        /* DRAW TILE BASE */
        this.tileObjects[i].tileSize = this.tileSize;
        this.tileObjects[i].slant = this.lastTileMap[i].getSlantDirection();
        this.tileObjects[i].tileObject.texture = this.getTexture(this.lastTileMap[i].getGroundSprite());
        this.tileObjects[i].tileObject.texture = this.getTexture(this.lastTileMap[i].getAppropriateBaseSprite());
        this.tileObjects[i].tileSideHue = this.getTexture(this.lastTileMap[i].getGroundSprite()).baseTexture.averageHue;
        this.lastTileMap[i].leftColor = this.tileObjects[i].leftColor;
        this.lastTileMap[i].rightColor = this.tileObjects[i].rightColor;
        this.tileObjects[i].tileRiskLevel.base.tint = this.lastTileMap[i].getRiskLevelColor();
        this.tileObjects[i].x = left_em * this.tileSize;
        this.tileObjects[i].y = (top_em + 1) * this.tileSize;
        var main = this.lastTileMap[i].getAppropriateMainSprite();
        this.tileObjects[i].tileBuildingObject.texture = this.getTexture(main);
        if (i == this.currentlyHoveredTile) {
            this.onHoverOutTile(null);
            this.onHoverInTile({ target: this.tileObjects[i] });
        }
        _RenderController__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].queueRender();
    };
    _TileSystem.prototype.getTexture = function (textureName) {
        if (textureName == null)
            return pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].EMPTY;
        var resource = this.app.loader.resources[textureName];
        if (resource != undefined)
            return resource.texture;
        else
            return pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].EMPTY;
    };
    _TileSystem.prototype.getCentralPoint = function () {
        var idx = Math.round(((this.lastTileMap.getRows() / 2) * this.lastTileMap.rowLength) + (this.lastTileMap.rowLength / 2));
        var central = this.tileObjects[idx];
        return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Point"](central.x, central.y);
    };
    _TileSystem.prototype.updateTileObjects = function (tilemap, rowLength) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.lastTileMap = tilemap;
            _this.lastTileMap.tileSystem = _this;
            _this.lastRowLength = rowLength;
            var p = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* scheduleIdleWorkLoop */ "l"])(tilemap.length, _this.updateTile, 20);
            p.then(function () {
                if (_this.topLevelOrderChanged) {
                    _this.rootObject.sortChildren();
                    _this.topLevelOrderChanged = false;
                }
                resolve(_this.getCentralPoint());
            });
            p.catch(reject);
        });
    };
    return _TileSystem;
}());



/***/ }),

/***/ "./src/TimerBar.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utilities.tsx");



var TimerBar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(TimerBar, _super);
    function TimerBar(props) {
        var _this = _super.call(this, props) || this;
        _this.intervalHandler = function () {
            if (_this.isPaused || _this.state.timeRemaining == 0)
                return;
            var newTime = _this.state.timeRemaining - 1000;
            if (newTime <= 0) {
                _this.props.onExpiry();
                newTime = 0;
            }
            _this.setState({ timeRemaining: newTime });
        };
        _this.interval = -1;
        _this.state = { timeRemaining: props.amountOfTime };
        _this.isPaused = false;
        return _this;
    }
    TimerBar.prototype.componentDidMount = function () {
        if (this.state.timeRemaining == 0) {
            this.props.onExpiry();
        }
        this.interval = setInterval(this.intervalHandler, 1000);
    };
    TimerBar.prototype.componentWillUnmount = function () {
        if (this.interval != -1) {
            clearInterval(this.interval);
            this.interval = -1;
        }
    };
    TimerBar.prototype.render = function () {
        // Time calculations for days, hours, minutes and seconds
        var distance = this.state.timeRemaining;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var timerString = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* pad */ "h"])(hours, 2) + ":" + Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* pad */ "h"])(minutes, 2) + ":" + Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* pad */ "h"])(seconds, 2);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { style: { color: this.state.timeRemaining > 0 ? null : "red" } }, timerString);
    };
    return TimerBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));
/* harmony default export */ __webpack_exports__["a"] = (TimerBar);


/***/ })

}]);
//# sourceMappingURL=2.core_script_compiled.js.map