(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
/* ---- default pixi ---- */
var VERSION = '5.2.0';


















 // Renderer plugins



_pixi_core__WEBPACK_IMPORTED_MODULE_8__[/* Renderer */ "z"].registerPlugin('interaction', _pixi_interaction__WEBPACK_IMPORTED_MODULE_13__["InteractionManager"]);
_pixi_core__WEBPACK_IMPORTED_MODULE_8__[/* Renderer */ "z"].registerPlugin('batch', _pixi_core__WEBPACK_IMPORTED_MODULE_8__[/* BatchRenderer */ "i"]);



_pixi_app__WEBPACK_IMPORTED_MODULE_11__[/* Application */ "a"].registerPlugin(_pixi_loaders__WEBPACK_IMPORTED_MODULE_9__[/* AppLoaderPlugin */ "a"]);
_pixi_app__WEBPACK_IMPORTED_MODULE_11__[/* Application */ "a"].registerPlugin(_pixi_ticker__WEBPACK_IMPORTED_MODULE_5__[/* TickerPlugin */ "b"]);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _toArray(arr) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Button/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 15px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__[/* fade */ "d"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$disabled': {
        boxShadow: 'none'
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: 'inherit',
      marginRight: -4,
      marginLeft: 8,
      '&$iconSizeSmall': {
        marginRight: -2
      }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      '& > *:first-child': {
        fontSize: 18
      }
    },

    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: 20
      }
    },

    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      '& > *:first-child': {
        fontSize: 22
      }
    }
  };
};
var Button = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Button(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  var startIcon = startIconProp && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.startIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))])
  }, startIconProp);
  var endIcon = endIconProp && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.endIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))])
  }, endIconProp);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))], classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
 true ? Button.propTypes = {
  /**
   * The content of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, no elevation is used.
   */
  disableElevation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Element placed after the children.
   */
  endIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * Element placed before the children.
   */
  startIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['text', 'outlined', 'contained'])
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiButton'
})(Button));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Button/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["disableSpacing", "classes", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 true ? DialogActions.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiDialogActions'
})(DialogActions));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DialogActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DialogActions__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$dividers = props.dividers,
      dividers = _props$dividers === void 0 ? false : _props$dividers,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "dividers"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
 true ? DialogContent.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Display the top and bottom dividers.
   */
  dividers: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiDialogContent'
})(DialogContent));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContent/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DialogContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DialogContent__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ExpansionPanelContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanelContext.js");












var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var ExpansionPanel = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function ExpansionPanel(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Collapse__WEBPACK_IMPORTED_MODULE_8__["default"] : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(expandedProp != null),
      isControlled = _React$useRef.current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(defaultExpanded),
      expandedState = _React$useState[0],
      setExpandedState = _React$useState[1];

  var expanded = isControlled ? expandedProp : expandedState;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
      if (isControlled !== (expandedProp != null)) {
        console.error(["Material-UI: A component is changing ".concat(isControlled ? 'a ' : 'an un', "controlled ExpansionPanel to be ").concat(isControlled ? 'un' : '', "controlled."), 'Elements should not switch from uncontrolled to controlled (or vice versa).', 'Decide between using a controlled or uncontrolled ExpansionPanel ' + 'element for the lifetime of the component.', 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [expandedProp, isControlled]);
  }

  var handleChange = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (event) {
    if (!isControlled) {
      setExpandedState(!expanded);
    }

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, isControlled, onChange]);

  var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(childrenProp),
      _React$Children$toArr2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Paper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ExpansionPanelContext__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].Provider, {
    value: contextValue
  }, summary), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 true ? ExpansionPanel.propTypes = {
  /**
   * The content of the expansion panel.
   */
  children: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__[/* chainPropTypes */ "a"])(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired, function (props) {
    var summary = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(props.children)[0];

    if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isFragment"])(summary)) {
      return new Error("Material-UI: the ExpansionPanel doesn't accept a Fragment as a child. " + 'Consider providing an array instead.');
    }

    if (!react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(summary)) {
      return new Error('Material-UI: expected the first child of ExpansionPanel to be a valid element.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {boolean} expanded The `expanded` state of the panel.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  square: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The component used for the collapse effect.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * Props applied to the `Transition` element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(styles, {
  name: 'MuiExpansionPanel'
})(ExpansionPanel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanelContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var ExpansionPanelContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

if (true) {
  ExpansionPanelContext.displayName = 'ExpansionPanelContext';
}

/* harmony default export */ __webpack_exports__["a"] = (ExpansionPanelContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ExpansionPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ExpansionPanel__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/ExpansionPanelDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    padding: '8px 24px 24px'
  }
};
var ExpansionPanelDetails = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function ExpansionPanelDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className),
    ref: ref
  }, other));
});
 true ? ExpansionPanelDetails.propTypes = {
  /**
   * The content of the expansion panel details.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiExpansionPanelDetails'
})(ExpansionPanelDetails));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanelDetails/ExpansionPanelDetails.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/ExpansionPanelSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ExpansionPanel_ExpansionPanelContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanel/ExpansionPanelContext.js");



/* eslint-disable jsx-a11y/aria-role */







var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: '0 24px 0 24px',
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        opacity: 0.38
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var ExpansionPanelSummary = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function ExpansionPanelSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      IconButtonProps = props.IconButtonProps,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocusVisible = props.onFocusVisible,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "expandIcon", "IconButtonProps", "onBlur", "onClick", "onFocusVisible"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      focusedState = _React$useState[0],
      setFocusedState = _React$useState[1];

  var handleFocusVisible = function handleFocusVisible(event) {
    setFocusedState(true);

    if (onFocusVisible) {
      onFocusVisible(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    setFocusedState(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_ExpansionPanel_ExpansionPanelContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, disabled && classes.disabled, expanded && classes.expanded, focusedState && classes.focused),
    onFocusVisible: handleFocusVisible,
    onBlur: handleBlur,
    onClick: handleChange,
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.content, expanded && classes.expanded)
  }, children), expandIcon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 true ? ExpansionPanelSummary.propTypes = {
  /**
   * The content of the expansion panel summary.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Props applied to the `IconButton` element wrapping the expand icon.
   */
  IconButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocusVisible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(styles, {
  name: 'MuiExpansionPanelSummary'
})(ExpansionPanelSummary));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanelSummary/ExpansionPanelSummary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/capitalize.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: '50%',
      overflow: 'visible',
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* fade */ "d"])(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      '$sizeSmall&': {
        marginLeft: -3
      }
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      '$sizeSmall&': {
        marginRight: -3
      }
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* fade */ "d"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* fade */ "d"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },

    /* Styles applied to the children container element. */
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

var IconButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function IconButton(props, ref) {
  var _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, color !== 'default' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(color))], disabled && classes.disabled, {
      small: classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(size))]
    }[size], {
      start: classes.edgeStart,
      end: classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.label
  }, children));
});
 true ? IconButton.propTypes = {
  /**
   * The icon element.
   */
  children: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__[/* chainPropTypes */ "a"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, function (props) {
    var found = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(props.children).some(function (child) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(child) && child.props.onClick;
    });

    if (found) {
      return new Error(['Material-UI: you are providing an onClick event listener ' + 'to a child of a button element.', 'Firefox will never trigger the event.', 'You should move the onClick listener to the parent button element.', 'https://github.com/mui-org/material-ui/issues/13957'].join('\n'));
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['start', 'end', false]),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium'])
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(styles, {
  name: 'MuiIconButton'
})(IconButton));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/IconButton/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IconButton__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/List.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/List/ListContext.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {
      dense: dense
    };
  }, [dense]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ListContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
    value: context
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
 true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiList'
})(List));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/ListContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var ListContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

if (true) {
  ListContext.displayName = 'ListContext';
}

/* harmony default export */ __webpack_exports__["a"] = (ListContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/List/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@material-ui/core/esm/List/ListContext.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);












var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect : react__WEBPACK_IMPORTED_MODULE_2___default.a.useLayoutEffect;
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (true) {
        console.error('Material-UI: unable to set focus to a ListItem whose component has not been rendered.');
      }
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(childrenProp);
  var hasSecondaryAction = children.length && Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_11___default.a.findDOMNode(instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(handleOwnRef, ref);

  var componentProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Provider, {
      value: childContext
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ContainerComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, componentProps, children), children.pop()));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Provider, {
    value: childContext
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef
  }, componentProps), children));
});
 true ? ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center']),

  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the list item will be a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The content of the component. If a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__[/* chainPropTypes */ "a"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, function (props) {
    var children = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(props.children); // React.Children.toArray(props.children).findLastIndex(isListItemSecondaryAction)

    var secondaryActionIndex = -1;

    for (var i = children.length - 1; i >= 0; i -= 1) {
      var child = children[i];

      if (Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(child, ['ListItemSecondaryAction'])) {
        secondaryActionIndex = i;
        break;
      }
    } //  is ListItemSecondaryAction the last child of ListItem


    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
      return new Error('Material-UI: you used an element after ListItemSecondaryAction. ' + 'For ListItem to detect that it has a secondary action ' + 'you must pass it as the last child to ListItem.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   */
  ContainerComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Props applied to the container component if used.
   */
  ContainerProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Use to apply selected styling.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListItem/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popper/Popper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/ownerWindow.js");













function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect;
var defaultPopperOptions = {};
/**
 * Poppers rely on the 3rd party library [Popper.js](https://github.com/FezVrasta/popper.js) for positioning.
 */

var Popper = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Popper(props, ref) {
  var anchorEl = props.anchorEl,
      children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      modifiers = props.modifiers,
      open = props.open,
      _props$placement = props.placement,
      initialPlacement = _props$placement === void 0 ? 'bottom' : _props$placement,
      _props$popperOptions = props.popperOptions,
      popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions,
      popperRefProp = props.popperRef,
      _props$transition = props.transition,
      transition = _props$transition === void 0 ? false : _props$transition,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition"]);

  var tooltipRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var ownRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(tooltipRef, ref);
  var popperRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var handlePopperRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(popperRef, popperRefProp);
  var handlePopperRefRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(handlePopperRef);
  useEnhancedEffect(function () {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(popperRefProp, function () {
    return popperRef.current;
  }, []);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__[/* useTheme */ "j"])();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(rtlPlacement),
      placement = _React$useState2[0],
      setPlacement = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    var handlePopperUpdate = function handlePopperUpdate(data) {
      setPlacement(data.placement);
    };

    var resolvedAnchorEl = getAnchorEl(anchorEl);

    if (true) {
      var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(resolvedAnchorEl);

      if (resolvedAnchorEl instanceof containerWindow.Element) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      }
    }

    var popper = new popper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](getAnchorEl(anchorEl), tooltipRef.current, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: 'window'
        }
      }, {}, modifiers, {}, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
  var handleRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (node) {
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleClose = function handleClose() {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  var handleExited = function handleExited() {
    setExited(true);
    handleClose();
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    // Let's update the popper position.
    handleOpen();
  }, [handleOpen]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      handleClose();
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  var childProps = {
    placement: placement
  };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    disablePortal: disablePortal,
    container: container
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: 'fixed',
      // Fix Popper.js display issue
      top: 0,
      left: 0
    }, other.style)
  }), typeof children === 'function' ? children(childProps) : children));
});
 true ? Popper.propTypes = {
  /**
   * This is the reference element, or a function that returns the reference element,
   * that may be used to set the position of the popover.
   * The return value will passed as the reference object of the Popper
   * instance.
   *
   * The reference element should be an HTML Element instance or a referenceObject:
   * https://popper.js.org/popper-documentation.html#referenceObject.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__[/* chainPropTypes */ "a"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);
      var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(resolvedAnchorEl);

      if (resolvedAnchorEl instanceof containerWindow.Element) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.clientWidth !== 'number' || typeof resolvedAnchorEl.clientHeight !== 'number' || typeof resolvedAnchorEl.getBoundingClientRect !== 'function') {
        return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'It should be an HTML Element instance or a referenceObject:', 'https://popper.js.org/popper-documentation.html#referenceObject.'].join('\n'));
      }
    }

    return null;
  }),

  /**
   * Popper render function or node.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]).isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object).
   */
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, the popper is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Popper placement.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Options provided to the [`popper.js`](https://github.com/FezVrasta/popper.js) instance.
   */
  popperOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__[/* refType */ "h"],

  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Popper);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/Popper/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* unused harmony export testReset */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_focusVisible__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@material-ui/core/esm/utils/focusVisible.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@material-ui/core/esm/styles/useTheme.js");


















function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      flip: false,
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      marginLeft: 4,
      marginRight: 4,
      width: '2em',
      height: '1em',
      '&::before': {
        flip: false,
        borderWidth: '0 1em 1em 1em',
        borderColor: 'transparent transparent currentcolor transparent'
      }
    },
    '&[x-placement*="top"] $arrow': {
      flip: false,
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      marginLeft: 4,
      marginRight: 4,
      width: '2em',
      height: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 1em 0 1em',
        borderColor: 'currentcolor transparent transparent transparent'
      }
    },
    '&[x-placement*="right"] $arrow': {
      flip: false,
      left: 0,
      marginLeft: '-0.95em',
      marginTop: 4,
      marginBottom: 4,
      height: '2em',
      width: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 1em 1em 0',
        borderColor: 'transparent currentcolor transparent transparent'
      }
    },
    '&[x-placement*="left"] $arrow': {
      flip: false,
      right: 0,
      marginRight: '-0.95em',
      marginTop: 4,
      marginBottom: 4,
      height: '2em',
      width: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 0 1em 1em',
        borderColor: 'transparent transparent transparent currentcolor'
      }
    }
  };
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the Popper component. */
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none',
      flip: false // disable jss-rtl plugin

    },

    /* Styles applied to the Popper component if `interactive={true}`. */
    popperInteractive: {
      pointerEvents: 'auto'
    },

    /* Styles applied to the Popper component if `arrow={true}`. */
    popperArrow: arrowGenerator(),

    /* Styles applied to the tooltip (label wrapper) element. */
    tooltip: {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__[/* fade */ "d"])(theme.palette.grey[700], 0.9),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: '4px 8px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(round(14 / 10), "em"),
      maxWidth: 300,
      wordWrap: 'break-word',
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
    tooltipArrow: {
      position: 'relative',
      margin: '0'
    },

    /* Styles applied to the arrow element. */
    arrow: {
      position: 'absolute',
      fontSize: 6,
      color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__[/* fade */ "d"])(theme.palette.grey[700], 0.9),
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid'
      }
    },

    /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
    touch: {
      padding: '8px 16px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(round(16 / 14), "em"),
      fontWeight: theme.typography.fontWeightRegular
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      transformOrigin: 'right center',
      margin: '0 24px '
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      transformOrigin: 'left center',
      margin: '0 24px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      transformOrigin: 'center bottom',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      transformOrigin: 'center top',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
};
var hystersisOpen = false;
var hystersisTimer = null;
function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}
var Tooltip = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function Tooltip(props, ref) {
  var _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      children = props.children,
      classes = props.classes,
      _props$disableFocusLi = props.disableFocusListener,
      disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi,
      _props$disableHoverLi = props.disableHoverListener,
      disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi,
      _props$disableTouchLi = props.disableTouchListener,
      disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi,
      _props$enterDelay = props.enterDelay,
      enterDelay = _props$enterDelay === void 0 ? 0 : _props$enterDelay,
      _props$enterTouchDela = props.enterTouchDelay,
      enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela,
      idProp = props.id,
      _props$interactive = props.interactive,
      interactive = _props$interactive === void 0 ? false : _props$interactive,
      _props$leaveDelay = props.leaveDelay,
      leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay,
      _props$leaveTouchDela = props.leaveTouchDelay,
      leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela,
      onClose = props.onClose,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom' : _props$placement,
      PopperProps = props.PopperProps,
      title = props.title,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"] : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(),
      childNode = _React$useState[0],
      setChildNode = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      arrowRef = _React$useState2[0],
      setArrowRef = _React$useState2[1];

  var ignoreNonTouchEvents = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(false);
  var closeTimer = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var enterTimer = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var leaveTimer = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var touchTimer = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(openProp != null),
      isControlled = _React$useRef.current;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

  var open = isControlled ? openProp : openState;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
      if (isControlled !== (openProp != null)) {
        console.error(["Material-UI: A component is changing ".concat(isControlled ? 'a ' : 'an un', "controlled Tooltip to be ").concat(isControlled ? 'un' : '', "controlled."), 'Elements should not switch from uncontrolled to controlled (or vice versa).', 'Decide between using a controlled or uncontrolled Tooltip ' + 'element for the lifetime of the component.', 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [openProp, isControlled]);
  }

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
      if (childNode && childNode.disabled && !isControlled && title !== '' && childNode.tagName.toLowerCase() === 'button') {
        console.error(['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Add a simple wrapper element, such as a `span`.'].join('\n'));
      }
    }, [isControlled, title, childNode]);
  }

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(),
      defaultId = _React$useState4[0],
      setDefaultId = _React$useState4[1];

  var id = idProp || defaultId;
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (!open || defaultId) {
      return;
    } // Fallback to this default id when possible.
    // Use the random value for client-side rendering only.
    // We can't use it server-side.


    setDefaultId("mui-tooltip-".concat(Math.round(Math.random() * 1e5)));
  }, [open, defaultId]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    return function () {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);

  var handleOpen = function handleOpen(event) {
    clearTimeout(hystersisTimer);
    hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

    if (!isControlled) {
      setOpenState(true);
    }

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleEnter = function handleEnter(event) {
    var childrenProps = children.props;

    if (event.type === 'mouseover' && childrenProps.onMouseOver && event.currentTarget === childNode) {
      childrenProps.onMouseOver(event);
    }

    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    } // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).


    if (childNode) {
      childNode.removeAttribute('title');
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay && !hystersisOpen) {
      event.persist();
      enterTimer.current = setTimeout(function () {
        handleOpen(event);
      }, enterDelay);
    } else {
      handleOpen(event);
    }
  };

  var _useIsFocusVisible = Object(_utils_focusVisible__WEBPACK_IMPORTED_MODULE_15__[/* useIsFocusVisible */ "a"])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      childIsFocusVisible = _React$useState5[0],
      setChildIsFocusVisible = _React$useState5[1];

  var handleBlur = function handleBlur() {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };

  var handleFocus = function handleFocus(event) {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }

    if (isFocusVisible(event)) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }

    var childrenProps = children.props;

    if (childrenProps.onFocus && event.currentTarget === childNode) {
      childrenProps.onFocus(event);
    }
  };

  var handleClose = function handleClose(event) {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(function () {
      hystersisOpen = false;
    }, 500); // Use 500 ms per https://github.com/reach/reach-ui/blob/3b5319027d763a3082880be887d7a29aee7d3afc/packages/tooltip/src/index.js#L214

    if (!isControlled) {
      setOpenState(false);
    }

    if (onClose) {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function () {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };

  var handleLeave = function handleLeave(event) {
    var childrenProps = children.props;

    if (event.type === 'blur') {
      if (childrenProps.onBlur && event.currentTarget === childNode) {
        childrenProps.onBlur(event);
      }

      handleBlur(event);
    }

    if (event.type === 'mouseleave' && childrenProps.onMouseLeave && event.currentTarget === childNode) {
      childrenProps.onMouseLeave(event);
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function () {
      handleClose(event);
    }, leaveDelay);
  };

  var handleTouchStart = function handleTouchStart(event) {
    ignoreNonTouchEvents.current = true;
    var childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }

    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(function () {
      handleEnter(event);
    }, enterTouchDelay);
  };

  var handleTouchEnd = function handleTouchEnd(event) {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function () {
      handleClose(event);
    }, leaveTouchDelay);
  };

  var handleUseRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(setChildNode, ref);
  var handleFocusRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(focusVisibleRef, handleUseRef); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (instance) {
    // #StrictMode ready
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(handleFocusRef, react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(instance));
  }, [handleFocusRef]);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(children.ref, handleOwnRef); // There is no point in displaying an empty tooltip.

  if (title === '') {
    open = false;
  } // For accessibility and SEO concerns, we render the title to the DOM node when
  // the tooltip is hidden. However, we have made a tradeoff when
  // `disableHoverListener` is set. This title logic is disabled.
  // It's allowing us to keep the implementation size minimal.
  // We are open to change the tradeoff.


  var shouldShowNativeTitle = !open && !disableHoverListener;

  var childrenProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    'aria-describedby': open ? id : null,
    title: shouldShowNativeTitle && typeof title === 'string' ? title : null
  }, other, {}, children.props, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(other.className, children.props.className)
  });

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter;
    childrenProps.onMouseLeave = handleLeave;
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus;
    childrenProps.onBlur = handleLeave;
  }

  var interactiveWrapperListeners = interactive ? {
    onMouseOver: childrenProps.onMouseOver,
    onMouseLeave: childrenProps.onMouseLeave,
    onFocus: childrenProps.onFocus,
    onBlur: childrenProps.onBlur
  } : {};

  if (true) {
    if (children.props.title) {
      console.error(['Material-UI: you have provided a `title` prop to the child of <Tooltip />.', "Remove this title prop `".concat(children.props.title, "` or the Tooltip component.")].join('\n'));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: handleRef
  }, childrenProps)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Popper__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(classes.popper, interactive && classes.popperInteractive, arrow && classes.popperArrow),
    placement: placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps['aria-describedby'],
    transition: true,
    popperOptions: {
      modifiers: {
        arrow: {
          enabled: Boolean(arrowRef),
          element: arrowRef
        }
      }
    }
  }, interactiveWrapperListeners, PopperProps), function (_ref) {
    var placementInner = _ref.placement,
        TransitionPropsInner = _ref.TransitionProps;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      timeout: theme.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(classes.tooltip, classes["tooltipPlacement".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(placementInner.split('-')[0]))], ignoreNonTouchEvents.current && classes.touch, arrow && classes.tooltipArrow)
    }, title, arrow ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: classes.arrow,
      ref: setArrowRef
    }) : null));
  }));
});
 true ? Tooltip.propTypes = {
  /**
   * If `true`, adds an arrow to the tooltip.
   */
  arrow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Tooltip reference element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__[/* elementAcceptingRef */ "c"].isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
   * Do not respond to focus events.
   */
  disableFocusListener: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Do not respond to hover events.
   */
  disableHoverListener: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Makes a tooltip interactive, i.e. will not close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   */
  interactive: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * If `true`, the tooltip is shown.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Tooltip placement.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Props applied to the [`Popper`](/api/popper/) element.
   */
  PopperProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired,

  /**
   * The component used for the transition.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * Props applied to the `Transition` element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(styles, {
  name: 'MuiTooltip'
})(Tooltip));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tooltip/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMuiElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/ExpandLess.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgIcon;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/esm/SvgIcon/index.js"));

function createSvgIcon(path, displayName) {
  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
      ref: ref
    }, props), path);
  }));

  if (true) {
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _SvgIcon.default.muiName;
  return Component;
}

/***/ }),

/***/ "./node_modules/@pixi/app/lib/app.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Application; });
/* harmony import */ var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/display/lib/display.es.js");
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/*!
 * @pixi/app - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */



/**
 * Convenience class to create a new PIXI application.
 *
 * This class automatically creates the renderer, ticker and root container.
 *
 * @example
 * // Create the application
 * const app = new PIXI.Application();
 *
 * // Add the view to the DOM
 * document.body.appendChild(app.view);
 *
 * // ex, add display objects
 * app.stage.addChild(PIXI.Sprite.from('something.png'));
 *
 * @class
 * @memberof PIXI
 */
var Application = function Application(options)
{
    var this$1 = this;

    // The default options
    options = Object.assign({
        forceCanvas: false,
    }, options);

    /**
     * WebGL renderer if available, otherwise CanvasRenderer.
     * @member {PIXI.Renderer|PIXI.CanvasRenderer}
     */
    this.renderer = Object(_pixi_core__WEBPACK_IMPORTED_MODULE_1__[/* autoDetectRenderer */ "J"])(options);

    /**
     * The root display container that's rendered.
     * @member {PIXI.Container}
     */
    this.stage = new _pixi_display__WEBPACK_IMPORTED_MODULE_0__[/* Container */ "b"]();

    // install plugins here
    Application._plugins.forEach(function (plugin) {
        plugin.init.call(this$1, options);
    });
};

var prototypeAccessors = { view: { configurable: true },screen: { configurable: true } };

/**
 * Register a middleware plugin for the application
 * @static
 * @param {PIXI.Application.Plugin} plugin - Plugin being installed
 */
Application.registerPlugin = function registerPlugin (plugin)
{
    Application._plugins.push(plugin);
};

/**
 * Render the current stage.
 */
Application.prototype.render = function render ()
{
    this.renderer.render(this.stage);
};

/**
 * Reference to the renderer's canvas element.
 * @member {HTMLCanvasElement}
 * @readonly
 */
prototypeAccessors.view.get = function ()
{
    return this.renderer.view;
};

/**
 * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
 * @member {PIXI.Rectangle}
 * @readonly
 */
prototypeAccessors.screen.get = function ()
{
    return this.renderer.screen;
};

/**
 * Destroy and don't use after this.
 * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
 * @param {object|boolean} [stageOptions] - Options parameter. A boolean will act as if all options
 *  have been set to that value
 * @param {boolean} [stageOptions.children=false] - if set to true, all the children will have their destroy
 *  method called as well. 'stageOptions' will be passed on to those calls.
 * @param {boolean} [stageOptions.texture=false] - Only used for child Sprites if stageOptions.children is set
 *  to true. Should it destroy the texture of the child sprite
 * @param {boolean} [stageOptions.baseTexture=false] - Only used for child Sprites if stageOptions.children is set
 *  to true. Should it destroy the base texture of the child sprite
 */
Application.prototype.destroy = function destroy (removeView, stageOptions)
{
        var this$1 = this;

    // Destroy plugins in the opposite order
    // which they were constructed
    var plugins = Application._plugins.slice(0);

    plugins.reverse();
    plugins.forEach(function (plugin) {
        plugin.destroy.call(this$1);
    });

    this.stage.destroy(stageOptions);
    this.stage = null;

    this.renderer.destroy(removeView);
    this.renderer = null;

    this._options = null;
};

Object.defineProperties( Application.prototype, prototypeAccessors );

/**
 * @memberof PIXI.Application
 * @typedef {object} Plugin
 * @property {function} init - Called when Application is constructed, scoped to Application instance.
 *  Passes in `options` as the only argument, which are Application constructor options.
 * @property {function} destroy - Called when destroying Application, scoped to Application instance
 */

/**
 * Collection of installed plugins.
 * @static
 * @private
 * @type {PIXI.Application.Plugin[]}
 */
Application._plugins = [];

/**
 * Middleware for for Application's resize functionality
 * @private
 * @class
 */
var ResizePlugin = function ResizePlugin () {};

ResizePlugin.init = function init (options)
{
        var this$1 = this;

    /**
     * The element or window to resize the application to.
     * @type {Window|HTMLElement}
     * @name resizeTo
     * @memberof PIXI.Application#
     */
    Object.defineProperty(this, 'resizeTo',
        {
            set: function set(dom)
            {
                window.removeEventListener('resize', this.resize);
                this._resizeTo = dom;
                if (dom)
                {
                    window.addEventListener('resize', this.resize);
                    this.resize();
                }
            },
            get: function get()
            {
                return this._resizeTo;
            },
        });

    /**
     * If `resizeTo` is set, calling this function
     * will resize to the width and height of that element.
     * @method PIXI.Application#resize
     */
    this.resize = function () {
        if (this$1._resizeTo)
        {
            // Resize to the window
            if (this$1._resizeTo === window)
            {
                this$1.renderer.resize(
                    window.innerWidth,
                    window.innerHeight
                );
            }
            // Resize to other HTML entities
            else
            {
                this$1.renderer.resize(
                    this$1._resizeTo.clientWidth,
                    this$1._resizeTo.clientHeight
                );
            }
        }
    };

    // On resize
    this._resizeTo = null;
    this.resizeTo = options.resizeTo || null;
};

/**
 * Clean up the ticker, scoped to application
 * @static
 * @private
 */
ResizePlugin.destroy = function destroy ()
{
    this.resizeTo = null;
    this.resize = null;
};

Application.registerPlugin(ResizePlugin);


//# sourceMappingURL=app.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/loaders/lib/loaders.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoaderPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoaderResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TextureLoader; });
/* harmony import */ var resource_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/resource-loader/dist/resource-loader.esm.js");
/* harmony import */ var _pixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/utils/lib/utils.es.js");
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/*!
 * @pixi/loaders - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */




/**
 * Loader plugin for handling Texture resources.
 * @class
 * @memberof PIXI
 * @implements PIXI.ILoaderPlugin
 */
var TextureLoader = function TextureLoader () {};

TextureLoader.use = function use (resource, next)
{
    // create a new texture if the data is an Image object
    if (resource.data && resource.type === resource_loader__WEBPACK_IMPORTED_MODULE_0__[/* Resource */ "b"].TYPE.IMAGE)
    {
        resource.texture = _pixi_core__WEBPACK_IMPORTED_MODULE_2__[/* Texture */ "E"].fromLoader(
            resource.data,
            resource.url,
            resource.name
        );
    }
    next();
};

/**
 * The new loader, extends Resource Loader by Chad Engler: https://github.com/englercj/resource-loader
 *
 * ```js
 * const loader = PIXI.Loader.shared; // PixiJS exposes a premade instance for you to use.
 * //or
 * const loader = new PIXI.Loader(); // you can also create your own if you want
 *
 * const sprites = {};
 *
 * // Chainable `add` to enqueue a resource
 * loader.add('bunny', 'data/bunny.png')
 *       .add('spaceship', 'assets/spritesheet.json');
 * loader.add('scoreFont', 'assets/score.fnt');
 *
 * // Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
 * // This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
 * loader.pre(cachingMiddleware);
 *
 * // Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
 * // This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
 * loader.use(parsingMiddleware);
 *
 * // The `load` method loads the queue of resources, and calls the passed in callback called once all
 * // resources have loaded.
 * loader.load((loader, resources) => {
 *     // resources is an object where the key is the name of the resource loaded and the value is the resource object.
 *     // They have a couple default properties:
 *     // - `url`: The URL that the resource was loaded from
 *     // - `error`: The error that happened when trying to load (if any)
 *     // - `data`: The raw data that was loaded
 *     // also may contain other properties based on the middleware that runs.
 *     sprites.bunny = new PIXI.TilingSprite(resources.bunny.texture);
 *     sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
 *     sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
 * });
 *
 * // throughout the process multiple signals can be dispatched.
 * loader.onProgress.add(() => {}); // called once per loaded/errored file
 * loader.onError.add(() => {}); // called once per errored file
 * loader.onLoad.add(() => {}); // called once per loaded file
 * loader.onComplete.add(() => {}); // called once when the queued resources all load.
 * ```
 *
 * @see https://github.com/englercj/resource-loader
 *
 * @class Loader
 * @memberof PIXI
 * @param {string} [baseUrl=''] - The base url for all resources loaded by this loader.
 * @param {number} [concurrency=10] - The number of resources to load concurrently.
 */
var Loader = /*@__PURE__*/(function (ResourceLoader) {
    function Loader(baseUrl, concurrency)
    {
        var this$1 = this;

        ResourceLoader.call(this, baseUrl, concurrency);
        _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"].call(this);

        for (var i = 0; i < Loader._plugins.length; ++i)
        {
            var plugin = Loader._plugins[i];
            var pre = plugin.pre;
            var use = plugin.use;

            if (pre)
            {
                this.pre(pre);
            }

            if (use)
            {
                this.use(use);
            }
        }

        // Compat layer, translate the new v2 signals into old v1 events.
        this.onStart.add(function (l) { return this$1.emit('start', l); });
        this.onProgress.add(function (l, r) { return this$1.emit('progress', l, r); });
        this.onError.add(function (e, l, r) { return this$1.emit('error', e, l, r); });
        this.onLoad.add(function (l, r) { return this$1.emit('load', l, r); });
        this.onComplete.add(function (l, r) { return this$1.emit('complete', l, r); });

        /**
         * If this loader cannot be destroyed.
         * @member {boolean}
         * @default false
         * @private
         */
        this._protected = false;
    }

    if ( ResourceLoader ) Loader.__proto__ = ResourceLoader;
    Loader.prototype = Object.create( ResourceLoader && ResourceLoader.prototype );
    Loader.prototype.constructor = Loader;

    var staticAccessors = { shared: { configurable: true } };

    /**
     * Destroy the loader, removes references.
     * @private
     */
    Loader.prototype.destroy = function destroy ()
    {
        if (!this._protected)
        {
            this.removeAllListeners();
            this.reset();
        }
    };

    /**
     * A premade instance of the loader that can be used to load resources.
     * @name shared
     * @type {PIXI.Loader}
     * @static
     * @memberof PIXI.Loader
     */
    staticAccessors.shared.get = function ()
    {
        var shared = Loader._shared;

        if (!shared)
        {
            shared = new Loader();
            shared._protected = true;
            Loader._shared = shared;
        }

        return shared;
    };

    Object.defineProperties( Loader, staticAccessors );

    return Loader;
}(resource_loader__WEBPACK_IMPORTED_MODULE_0__[/* Loader */ "a"]));

// Copy EE3 prototype (mixin)
Object.assign(Loader.prototype, _pixi_utils__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"].prototype);

/**
 * Collection of all installed `use` middleware for Loader.
 *
 * @static
 * @member {Array<PIXI.ILoaderPlugin>} _plugins
 * @memberof PIXI.Loader
 * @private
 */
Loader._plugins = [];

/**
 * Adds a Loader plugin for the global shared loader and all
 * new Loader instances created.
 *
 * @static
 * @method registerPlugin
 * @memberof PIXI.Loader
 * @param {PIXI.ILoaderPlugin} plugin - The plugin to add
 * @return {PIXI.Loader} Reference to PIXI.Loader for chaining
 */
Loader.registerPlugin = function registerPlugin(plugin)
{
    Loader._plugins.push(plugin);

    if (plugin.add)
    {
        plugin.add();
    }

    return Loader;
};

// parse any blob into more usable objects (e.g. Image)
Loader.registerPlugin({ use: resource_loader__WEBPACK_IMPORTED_MODULE_0__[/* middleware */ "c"].parsing });

// parse any Image objects into textures
Loader.registerPlugin(TextureLoader);

/**
 * Plugin to be installed for handling specific Loader resources.
 *
 * @memberof PIXI
 * @typedef ILoaderPlugin
 * @property {function} [add] - Function to call immediate after registering plugin.
 * @property {PIXI.Loader.loaderMiddleware} [pre] - Middleware function to run before load, the
 *           arguments for this are `(resource, next)`
 * @property {PIXI.Loader.loaderMiddleware} [use] - Middleware function to run after load, the
 *           arguments for this are `(resource, next)`
 */

/**
 * @memberof PIXI.Loader
 * @callback loaderMiddleware
 * @param {PIXI.LoaderResource} resource
 * @param {function} next
 */

/**
 * @memberof PIXI.Loader#
 * @member {object} onStart
 */

/**
 * @memberof PIXI.Loader#
 * @member {object} onProgress
 */

/**
 * @memberof PIXI.Loader#
 * @member {object} onError
 */

/**
 * @memberof PIXI.Loader#
 * @member {object} onLoad
 */

/**
 * @memberof PIXI.Loader#
 * @member {object} onComplete
 */

/**
 * Application plugin for supporting loader option. Installing the LoaderPlugin
 * is not necessary if using **pixi.js** or **pixi.js-legacy**.
 * @example
 * import {AppLoaderPlugin} from '@pixi/loaders';
 * import {Application} from '@pixi/app';
 * Application.registerPlugin(AppLoaderPlugin);
 * @class
 * @memberof PIXI
 */
var AppLoaderPlugin = function AppLoaderPlugin () {};

AppLoaderPlugin.init = function init (options)
{
    options = Object.assign({
        sharedLoader: false,
    }, options);

    /**
     * Loader instance to help with asset loading.
     * @name PIXI.Application#loader
     * @type {PIXI.Loader}
     * @readonly
     */
    this.loader = options.sharedLoader ? Loader.shared : new Loader();
};

/**
 * Called when application destroyed
 * @private
 */
AppLoaderPlugin.destroy = function destroy ()
{
    if (this.loader)
    {
        this.loader.destroy();
        this.loader = null;
    }
};

/**
 * Reference to **{@link https://github.com/englercj/resource-loader
 * resource-loader}**'s Resource class.
 * @see http://englercj.github.io/resource-loader/Resource.html
 * @class LoaderResource
 * @memberof PIXI
 */
var LoaderResource = resource_loader__WEBPACK_IMPORTED_MODULE_0__[/* Resource */ "b"];


//# sourceMappingURL=loaders.es.js.map


/***/ }),

/***/ "./node_modules/@pixi/polyfill/lib/polyfill.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var es6_promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/es6-promise-polyfill/promise.js");
/* harmony import */ var es6_promise_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_promise_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__);
/*!
 * @pixi/polyfill - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */



// Support for IE 9 - 11 which does not include Promises
if (!window.Promise)
{
    window.Promise = es6_promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["Polyfill"];
}

// References:

if (!Object.assign)
{
    Object.assign = object_assign__WEBPACK_IMPORTED_MODULE_1___default.a;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

var ONE_FRAME_TIME = 16;

// Date.now
if (!(Date.now && Date.prototype.getTime))
{
    Date.now = function now()
    {
        return new Date().getTime();
    };
}

// performance.now
if (!(commonjsGlobal.performance && commonjsGlobal.performance.now))
{
    var startTime = Date.now();

    if (!commonjsGlobal.performance)
    {
        commonjsGlobal.performance = {};
    }

    commonjsGlobal.performance.now = function () { return Date.now() - startTime; };
}

// requestAnimationFrame
var lastTime = Date.now();
var vendors = ['ms', 'moz', 'webkit', 'o'];

for (var x = 0; x < vendors.length && !commonjsGlobal.requestAnimationFrame; ++x)
{
    var p = vendors[x];

    commonjsGlobal.requestAnimationFrame = commonjsGlobal[(p + "RequestAnimationFrame")];
    commonjsGlobal.cancelAnimationFrame = commonjsGlobal[(p + "CancelAnimationFrame")] || commonjsGlobal[(p + "CancelRequestAnimationFrame")];
}

if (!commonjsGlobal.requestAnimationFrame)
{
    commonjsGlobal.requestAnimationFrame = function (callback) {
        if (typeof callback !== 'function')
        {
            throw new TypeError((callback + "is not a function"));
        }

        var currentTime = Date.now();
        var delay = ONE_FRAME_TIME + lastTime - currentTime;

        if (delay < 0)
        {
            delay = 0;
        }

        lastTime = currentTime;

        return setTimeout(function () {
            lastTime = Date.now();
            callback(performance.now());
        }, delay);
    };
}

if (!commonjsGlobal.cancelAnimationFrame)
{
    commonjsGlobal.cancelAnimationFrame = function (id) { return clearTimeout(id); };
}

// References:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

if (!Math.sign)
{
    Math.sign = function mathSign(x)
    {
        x = Number(x);

        if (x === 0 || isNaN(x))
        {
            return x;
        }

        return x > 0 ? 1 : -1;
    };
}

// References:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

if (!Number.isInteger)
{
    Number.isInteger = function numberIsInteger(value)
    {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
}

if (!window.ArrayBuffer)
{
    window.ArrayBuffer = Array;
}

if (!window.Float32Array)
{
    window.Float32Array = Array;
}

if (!window.Uint32Array)
{
    window.Uint32Array = Array;
}

if (!window.Uint16Array)
{
    window.Uint16Array = Array;
}

if (!window.Uint8Array)
{
    window.Uint8Array = Array;
}

if (!window.Int32Array)
{
    window.Int32Array = Array;
}
//# sourceMappingURL=polyfill.es.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@pixi/sprite-animated/lib/sprite-animated.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimatedSprite; });
/* harmony import */ var _pixi_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@pixi/core/lib/core.es.js");
/* harmony import */ var _pixi_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@pixi/sprite/lib/sprite.es.js");
/* harmony import */ var _pixi_ticker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@pixi/ticker/lib/ticker.es.js");
/*!
 * @pixi/sprite-animated - v5.2.0
 * Compiled Wed, 06 Nov 2019 02:32:43 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */




/**
 * An AnimatedSprite is a simple way to display an animation depicted by a list of textures.
 *
 * ```js
 * let alienImages = ["image_sequence_01.png","image_sequence_02.png","image_sequence_03.png","image_sequence_04.png"];
 * let textureArray = [];
 *
 * for (let i=0; i < 4; i++)
 * {
 *      let texture = PIXI.Texture.from(alienImages[i]);
 *      textureArray.push(texture);
 * };
 *
 * let animatedSprite = new PIXI.AnimatedSprite(textureArray);
 * ```
 *
 * The more efficient and simpler way to create an animated sprite is using a {@link PIXI.Spritesheet}
 * containing the animation definitions:
 *
 * ```js
 * PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);
 *
 * function setup() {
 *   let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
 *   animatedSprite = new PIXI.AnimatedSprite(sheet.animations["image_sequence"]);
 *   ...
 * }
 * ```
 *
 * @class
 * @extends PIXI.Sprite
 * @memberof PIXI
 */
var AnimatedSprite = /*@__PURE__*/(function (Sprite) {
    function AnimatedSprite(textures, autoUpdate)
    {
        Sprite.call(this, textures[0] instanceof _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"] ? textures[0] : textures[0].texture);

        /**
         * @type {PIXI.Texture[]}
         * @private
         */
        this._textures = null;

        /**
         * @type {number[]}
         * @private
         */
        this._durations = null;

        this.textures = textures;

        /**
         * `true` uses PIXI.Ticker.shared to auto update animation time.
         * @type {boolean}
         * @default true
         * @private
         */
        this._autoUpdate = autoUpdate !== false;

        /**
         * The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
         *
         * @member {number}
         * @default 1
         */
        this.animationSpeed = 1;

        /**
         * Whether or not the animate sprite repeats after playing.
         *
         * @member {boolean}
         * @default true
         */
        this.loop = true;

        /**
         * Update anchor to [Texture's defaultAnchor]{@link PIXI.Texture#defaultAnchor} when frame changes.
         *
         * Useful with [sprite sheet animations]{@link PIXI.Spritesheet#animations} created with tools.
         * Changing anchor for each frame allows to pin sprite origin to certain moving feature
         * of the frame (e.g. left foot).
         *
         * Note: Enabling this will override any previously set `anchor` on each frame change.
         *
         * @member {boolean}
         * @default false
         */
        this.updateAnchor = false;

        /**
         * Function to call when an AnimatedSprite finishes playing.
         *
         * @member {Function}
         */
        this.onComplete = null;

        /**
         * Function to call when an AnimatedSprite changes which texture is being rendered.
         *
         * @member {Function}
         */
        this.onFrameChange = null;

        /**
         * Function to call when `loop` is true, and an AnimatedSprite is played and loops around to start again.
         *
         * @member {Function}
         */
        this.onLoop = null;

        /**
         * Elapsed time since animation has been started, used internally to display current texture.
         *
         * @member {number}
         * @private
         */
        this._currentTime = 0;

        /**
         * Indicates if the AnimatedSprite is currently playing.
         *
         * @member {boolean}
         * @readonly
         */
        this.playing = false;
    }

    if ( Sprite ) AnimatedSprite.__proto__ = Sprite;
    AnimatedSprite.prototype = Object.create( Sprite && Sprite.prototype );
    AnimatedSprite.prototype.constructor = AnimatedSprite;

    var prototypeAccessors = { totalFrames: { configurable: true },textures: { configurable: true },currentFrame: { configurable: true } };

    /**
     * Stops the AnimatedSprite.
     *
     */
    AnimatedSprite.prototype.stop = function stop ()
    {
        if (!this.playing)
        {
            return;
        }

        this.playing = false;
        if (this._autoUpdate)
        {
            _pixi_ticker__WEBPACK_IMPORTED_MODULE_2__[/* Ticker */ "a"].shared.remove(this.update, this);
        }
    };

    /**
     * Plays the AnimatedSprite.
     *
     */
    AnimatedSprite.prototype.play = function play ()
    {
        if (this.playing)
        {
            return;
        }

        this.playing = true;
        if (this._autoUpdate)
        {
            _pixi_ticker__WEBPACK_IMPORTED_MODULE_2__[/* Ticker */ "a"].shared.add(this.update, this, _pixi_ticker__WEBPACK_IMPORTED_MODULE_2__[/* UPDATE_PRIORITY */ "c"].HIGH);
        }
    };

    /**
     * Stops the AnimatedSprite and goes to a specific frame.
     *
     * @param {number} frameNumber - Frame index to stop at.
     */
    AnimatedSprite.prototype.gotoAndStop = function gotoAndStop (frameNumber)
    {
        this.stop();

        var previousFrame = this.currentFrame;

        this._currentTime = frameNumber;

        if (previousFrame !== this.currentFrame)
        {
            this.updateTexture();
        }
    };

    /**
     * Goes to a specific frame and begins playing the AnimatedSprite.
     *
     * @param {number} frameNumber - Frame index to start at.
     */
    AnimatedSprite.prototype.gotoAndPlay = function gotoAndPlay (frameNumber)
    {
        var previousFrame = this.currentFrame;

        this._currentTime = frameNumber;

        if (previousFrame !== this.currentFrame)
        {
            this.updateTexture();
        }

        this.play();
    };

    /**
     * Updates the object transform for rendering.
     *
     * @private
     * @param {number} deltaTime - Time since last tick.
     */
    AnimatedSprite.prototype.update = function update (deltaTime)
    {
        var elapsed = this.animationSpeed * deltaTime;
        var previousFrame = this.currentFrame;

        if (this._durations !== null)
        {
            var lag = this._currentTime % 1 * this._durations[this.currentFrame];

            lag += elapsed / 60 * 1000;

            while (lag < 0)
            {
                this._currentTime--;
                lag += this._durations[this.currentFrame];
            }

            var sign = Math.sign(this.animationSpeed * deltaTime);

            this._currentTime = Math.floor(this._currentTime);

            while (lag >= this._durations[this.currentFrame])
            {
                lag -= this._durations[this.currentFrame] * sign;
                this._currentTime += sign;
            }

            this._currentTime += lag / this._durations[this.currentFrame];
        }
        else
        {
            this._currentTime += elapsed;
        }

        if (this._currentTime < 0 && !this.loop)
        {
            this.gotoAndStop(0);

            if (this.onComplete)
            {
                this.onComplete();
            }
        }
        else if (this._currentTime >= this._textures.length && !this.loop)
        {
            this.gotoAndStop(this._textures.length - 1);

            if (this.onComplete)
            {
                this.onComplete();
            }
        }
        else if (previousFrame !== this.currentFrame)
        {
            if (this.loop && this.onLoop)
            {
                if (this.animationSpeed > 0 && this.currentFrame < previousFrame)
                {
                    this.onLoop();
                }
                else if (this.animationSpeed < 0 && this.currentFrame > previousFrame)
                {
                    this.onLoop();
                }
            }

            this.updateTexture();
        }
    };

    /**
     * Updates the displayed texture to match the current frame index.
     *
     * @private
     */
    AnimatedSprite.prototype.updateTexture = function updateTexture ()
    {
        this._texture = this._textures[this.currentFrame];
        this._textureID = -1;
        this._textureTrimmedID = -1;
        this._cachedTint = 0xFFFFFF;
        this.uvs = this._texture._uvs.uvsFloat32;

        if (this.updateAnchor)
        {
            this._anchor.copyFrom(this._texture.defaultAnchor);
        }

        if (this.onFrameChange)
        {
            this.onFrameChange(this.currentFrame);
        }
    };

    /**
     * Stops the AnimatedSprite and destroys it.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value.
     * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well.
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well.
     */
    AnimatedSprite.prototype.destroy = function destroy (options)
    {
        this.stop();
        Sprite.prototype.destroy.call(this, options);

        this.onComplete = null;
        this.onFrameChange = null;
        this.onLoop = null;
    };

    /**
     * A short hand way of creating an AnimatedSprite from an array of frame ids.
     *
     * @static
     * @param {string[]} frames - The array of frames ids the AnimatedSprite will use as its texture frames.
     * @return {AnimatedSprite} The new animated sprite with the specified frames.
     */
    AnimatedSprite.fromFrames = function fromFrames (frames)
    {
        var textures = [];

        for (var i = 0; i < frames.length; ++i)
        {
            textures.push(_pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"].from(frames[i]));
        }

        return new AnimatedSprite(textures);
    };

    /**
     * A short hand way of creating an AnimatedSprite from an array of image ids.
     *
     * @static
     * @param {string[]} images - The array of image urls the AnimatedSprite will use as its texture frames.
     * @return {AnimatedSprite} The new animate sprite with the specified images as frames.
     */
    AnimatedSprite.fromImages = function fromImages (images)
    {
        var textures = [];

        for (var i = 0; i < images.length; ++i)
        {
            textures.push(_pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"].from(images[i]));
        }

        return new AnimatedSprite(textures);
    };

    /**
     * The total number of frames in the AnimatedSprite. This is the same as number of textures
     * assigned to the AnimatedSprite.
     *
     * @readonly
     * @member {number}
     * @default 0
     */
    prototypeAccessors.totalFrames.get = function ()
    {
        return this._textures.length;
    };

    /**
     * The array of textures used for this AnimatedSprite.
     *
     * @member {PIXI.Texture[]}
     */
    prototypeAccessors.textures.get = function ()
    {
        return this._textures;
    };

    prototypeAccessors.textures.set = function (value) // eslint-disable-line require-jsdoc
    {
        if (value[0] instanceof _pixi_core__WEBPACK_IMPORTED_MODULE_0__[/* Texture */ "E"])
        {
            this._textures = value;
            this._durations = null;
        }
        else
        {
            this._textures = [];
            this._durations = [];

            for (var i = 0; i < value.length; i++)
            {
                this._textures.push(value[i].texture);
                this._durations.push(value[i].time);
            }
        }
        this.gotoAndStop(0);
        this.updateTexture();
    };

    /**
    * The AnimatedSprites current frame index.
    *
    * @member {number}
    * @readonly
    */
    prototypeAccessors.currentFrame.get = function ()
    {
        var currentFrame = Math.floor(this._currentTime) % this._textures.length;

        if (currentFrame < 0)
        {
            currentFrame += this._textures.length;
        }

        return currentFrame;
    };

    Object.defineProperties( AnimatedSprite.prototype, prototypeAccessors );

    return AnimatedSprite;
}(_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__[/* Sprite */ "a"]));

/**
 * @memberof PIXI.AnimatedSprite
 * @typedef {object} FrameObject
 * @type {object}
 * @property {PIXI.Texture} texture - The {@link PIXI.Texture} of the frame
 * @property {number} time - the duration of the frame in ms
 */


//# sourceMappingURL=sprite-animated.es.js.map


/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/internals/global.js");
var trim = __webpack_require__("./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__("./node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__("./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__("./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__("./node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__("./node_modules/core-js/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__("./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var sloppyArrayMethod = __webpack_require__("./node_modules/core-js/internals/sloppy-array-method.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__("./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__("./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__("./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__("./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__("./node_modules/core-js/internals/array-method-has-species-support.js");

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var create = __webpack_require__("./node_modules/core-js/internals/object-create.js");

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__("./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("./node_modules/core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "./node_modules/core-js/modules/es.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__("./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.get.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var has = __webpack_require__("./node_modules/core-js/internals/has.js");
var getOwnPropertyDescriptorModule = __webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js");

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var exec = __webpack_require__("./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/es6-promise-polyfill/promise.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_RESULT__;(function(global){

//
// Check for native Promise and it has correct interface
//

var NativePromise = global['Promise'];
var nativePromiseSupported =
  NativePromise &&
  // Some of these methods are missing from
  // Firefox/Chrome experimental implementations
  'resolve' in NativePromise &&
  'reject' in NativePromise &&
  'all' in NativePromise &&
  'race' in NativePromise &&
  // Older version of the spec had a resolver object
  // as the arg rather than a function
  (function(){
    var resolve;
    new NativePromise(function(r){ resolve = r; });
    return typeof resolve === 'function';
  })();


//
// export if necessary
//

if ( true && exports)
{
  // node.js
  exports.Promise = nativePromiseSupported ? NativePromise : Promise;
  exports.Polyfill = Promise;
}
else
{
  // AMD
  if (true)
  {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
      return nativePromiseSupported ? NativePromise : Promise;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else
  {}
}


//
// Polyfill
//

var PENDING = 'pending';
var SEALED = 'sealed';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var NOOP = function(){};

function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

// async calls
var asyncSetTimer = typeof setImmediate !== 'undefined' ? setImmediate : setTimeout;
var asyncQueue = [];
var asyncTimer;

function asyncFlush(){
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++)
    asyncQueue[i][0](asyncQueue[i][1]);

  // reset async asyncQueue
  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg){
  asyncQueue.push([callback, arg]);

  if (!asyncTimer)
  {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}


function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch(e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber){
  var owner = subscriber.owner;
  var settled = owner.state_;
  var value = owner.data_;  
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function')
  {
    settled = FULFILLED;
    try {
      value = callback(value);
    } catch(e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value))
  {
    if (settled === FULFILLED)
      resolve(promise, value);

    if (settled === REJECTED)
      reject(promise, value);
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value)
      throw new TypeError('A promises callback cannot return that same promise.');

    if (value && (typeof value === 'function' || typeof value === 'object'))
    {
      var then = value.then;  // then should be retrived only once

      if (typeof then === 'function')
      {
        then.call(value, function(val){
          if (!resolved)
          {
            resolved = true;

            if (value !== val)
              resolve(promise, val);
            else
              fulfill(promise, val);
          }
        }, function(reason){
          if (!resolved)
          {
            resolved = true;

            reject(promise, reason);
          }
        });

        return true;
      }
    }
  } catch (e) {
    if (!resolved)
      reject(promise, e);

    return true;
  }

  return false;
}

function resolve(promise, value){
  if (promise === value || !handleThenable(promise, value))
    fulfill(promise, value);
}

function fulfill(promise, value){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = value;

    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = reason;

    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  var callbacks = promise.then_;
  promise.then_ = undefined;

  for (var i = 0; i < callbacks.length; i++) {
    invokeCallback(callbacks[i]);
  }
}

function publishFulfillment(promise){
  promise.state_ = FULFILLED;
  publish(promise);
}

function publishRejection(promise){
  promise.state_ = REJECTED;
  publish(promise);
}

/**
* @class
*/
function Promise(resolver){
  if (typeof resolver !== 'function')
    throw new TypeError('Promise constructor takes a function argument');

  if (this instanceof Promise === false)
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');

  this.then_ = [];

  invokeResolver(resolver, this);
}

Promise.prototype = {
  constructor: Promise,

  state_: PENDING,
  then_: null,
  data_: undefined,

  then: function(onFulfillment, onRejection){
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if (this.state_ === FULFILLED || this.state_ === REJECTED)
    {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    }
    else
    {
      // subscribe
      this.then_.push(subscriber);
    }

    return subscriber.then;
  },

  'catch': function(onRejection) {
    return this.then(null, onRejection);
  }
};

Promise.all = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.all().');

  return new Class(function(resolve, reject){
    var results = [];
    var remaining = 0;

    function resolver(index){
      remaining++;
      return function(value){
        results[index] = value;
        if (!--remaining)
          resolve(results);
      };
    }

    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolver(i), reject);
      else
        results[i] = promise;
    }

    if (!remaining)
      resolve(results);
  });
};

Promise.race = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.race().');

  return new Class(function(resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolve, reject);
      else
        resolve(promise);
    }
  });
};

Promise.resolve = function(value){
  var Class = this;

  if (value && typeof value === 'object' && value.constructor === Class)
    return value;

  return new Class(function(resolve){
    resolve(value);
  });
};

Promise.reject = function(reason){
  var Class = this;

  return new Class(function(resolve, reject){
    reject(reason);
  });
};

})(typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' ? self : this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/mini-signals/lib/mini-signals.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MiniSignalBinding = (function () {
  function MiniSignalBinding(fn, once, thisArg) {
    if (once === undefined) once = false;

    _classCallCheck(this, MiniSignalBinding);

    this._fn = fn;
    this._once = once;
    this._thisArg = thisArg;
    this._next = this._prev = this._owner = null;
  }

  _createClass(MiniSignalBinding, [{
    key: 'detach',
    value: function detach() {
      if (this._owner === null) return false;
      this._owner.detach(this);
      return true;
    }
  }]);

  return MiniSignalBinding;
})();

function _addMiniSignalBinding(self, node) {
  if (!self._head) {
    self._head = node;
    self._tail = node;
  } else {
    self._tail._next = node;
    node._prev = self._tail;
    self._tail = node;
  }

  node._owner = self;

  return node;
}

var MiniSignal = (function () {
  function MiniSignal() {
    _classCallCheck(this, MiniSignal);

    this._head = this._tail = undefined;
  }

  _createClass(MiniSignal, [{
    key: 'handlers',
    value: function handlers() {
      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var node = this._head;

      if (exists) return !!node;

      var ee = [];

      while (node) {
        ee.push(node);
        node = node._next;
      }

      return ee;
    }
  }, {
    key: 'has',
    value: function has(node) {
      if (!(node instanceof MiniSignalBinding)) {
        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
      }

      return node._owner === this;
    }
  }, {
    key: 'dispatch',
    value: function dispatch() {
      var node = this._head;

      if (!node) return false;

      while (node) {
        if (node._once) this.detach(node);
        node._fn.apply(node._thisArg, arguments);
        node = node._next;
      }

      return true;
    }
  }, {
    key: 'add',
    value: function add(fn) {
      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (typeof fn !== 'function') {
        throw new Error('MiniSignal#add(): First arg must be a Function.');
      }
      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
    }
  }, {
    key: 'once',
    value: function once(fn) {
      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (typeof fn !== 'function') {
        throw new Error('MiniSignal#once(): First arg must be a Function.');
      }
      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
    }
  }, {
    key: 'detach',
    value: function detach(node) {
      if (!(node instanceof MiniSignalBinding)) {
        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
      }
      if (node._owner !== this) return this;

      if (node._prev) node._prev._next = node._next;
      if (node._next) node._next._prev = node._prev;

      if (node === this._head) {
        this._head = node._next;
        if (node._next === null) {
          this._tail = null;
        }
      } else if (node === this._tail) {
        this._tail = node._prev;
        this._tail._next = null;
      }

      node._owner = null;
      return this;
    }
  }, {
    key: 'detachAll',
    value: function detachAll() {
      var node = this._head;
      if (!node) return this;

      this._head = this._tail = null;

      while (node) {
        node._owner = null;
        node = node._next;
      }
      return this;
    }
  }]);

  return MiniSignal;
})();

MiniSignal.MiniSignalBinding = MiniSignalBinding;

exports['default'] = MiniSignal;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/parse-uri/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseURI (str, opts) {
  opts = opts || {}

  var o = {
    key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
    q: {
      name: 'queryKey',
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  }

  var m = o.parser[opts.strictMode ? 'strict' : 'loose'].exec(str)
  var uri = {}
  var i = 14

  while (i--) uri[o.key[i]] = m[i] || ''

  uri[o.q.name] = {}
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2
  })

  return uri
}


/***/ }),

/***/ "./node_modules/pixi-cull/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Simple: __webpack_require__("./node_modules/pixi-cull/dist/simple.js"),
    SpatialHash: __webpack_require__("./node_modules/pixi-cull/dist/spatial-hash.js")
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvZGUvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlNpbXBsZSIsInJlcXVpcmUiLCJTcGF0aWFsSGFzaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNiQyxZQUFRQyxRQUFRLFVBQVIsQ0FESztBQUViQyxpQkFBYUQsUUFBUSxnQkFBUjtBQUZBLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBTaW1wbGU6IHJlcXVpcmUoJy4vc2ltcGxlJyksXHJcbiAgICBTcGF0aWFsSGFzaDogcmVxdWlyZSgnLi9zcGF0aWFsLWhhc2gnKVxyXG59Il19

/***/ }),

/***/ "./node_modules/pixi-cull/dist/simple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// pixi-cull.SpatialHash
// Copyright 2018 YOPEY YOPEY LLC
// David Figatner
// MIT License

var Simple = function () {
    /**
     * creates a simple cull
     * @param {object} [options]
     * @param {boolean} [options.visible=visible] parameter of the object to set (usually visible or renderable)
     * @param {boolean} [options.calculatePIXI=true] calculate pixi.js bounding box automatically; if this is set to false then it uses object[options.AABB] for bounding box
     * @param {string} [options.dirtyTest=true] only update spatial hash for objects with object[options.dirtyTest]=true; this has a HUGE impact on performance
     * @param {string} [options.AABB=AABB] object property that holds bounding box so that object[type] = { x: number, y: number, width: number, height: number }; not needed if options.calculatePIXI=true
     */
    function Simple(options) {
        _classCallCheck(this, Simple);

        options = options || {};
        this.visible = options.visible || 'visible';
        this.calculatePIXI = typeof options.calculatePIXI !== 'undefined' ? options.calculatePIXI : true;
        this.dirtyTest = typeof options.dirtyTest !== 'undefined' ? options.dirtyTest : true;
        this.AABB = options.AABB || 'AABB';
        this.lists = [[]];
    }

    /**
     * add an array of objects to be culled
     * @param {Array} array
     * @param {boolean} [staticObject] set to true if the object's position/size does not change
     * @return {Array} array
     */


    _createClass(Simple, [{
        key: 'addList',
        value: function addList(array, staticObject) {
            this.lists.push(array);
            if (staticObject) {
                array.staticObject = true;
            }
            if (this.calculatePIXI && this.dirtyTest) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var object = _step.value;

                        this.updateObject(object);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            return array;
        }

        /**
         * remove an array added by addList()
         * @param {Array} array
         * @return {Array} array
         */

    }, {
        key: 'removeList',
        value: function removeList(array) {
            this.lists.splice(this.lists.indexOf(array), 1);
            return array;
        }

        /**
         * add an object to be culled
         * @param {*} object
         * @param {boolean} [staticObject] set to true if the object's position/size does not change
         * @return {*} object
         */

    }, {
        key: 'add',
        value: function add(object, staticObject) {
            if (staticObject) {
                object.staticObject = true;
            }
            if (this.calculatePIXI && (this.dirtyTest || staticObject)) {
                this.updateObject(object);
            }
            this.lists[0].push(object);
            return object;
        }

        /**
         * remove an object added by add()
         * @param {*} object
         * @return {*} object
         */

    }, {
        key: 'remove',
        value: function remove(object) {
            this.lists[0].splice(this.lists[0].indexOf(object), 1);
            return object;
        }

        /**
         * cull the items in the list by setting visible parameter
         * @param {object} bounds
         * @param {number} bounds.x
         * @param {number} bounds.y
         * @param {number} bounds.width
         * @param {number} bounds.height
         * @param {boolean} [skipUpdate] skip updating the AABB bounding box of all objects
         */

    }, {
        key: 'cull',
        value: function cull(bounds, skipUpdate) {
            if (this.calculatePIXI && !skipUpdate) {
                this.updateObjects();
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.lists[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var list = _step2.value;
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var object = _step3.value;

                            var box = object[this.AABB];
                            object[this.visible] = box.x + box.width > bounds.x && box.x < bounds.x + bounds.width && box.y + box.height > bounds.y && box.y < bounds.y + bounds.height;
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        /**
         * update the AABB for all objects
         * automatically called from update() when calculatePIXI=true and skipUpdate=false
         */

    }, {
        key: 'updateObjects',
        value: function updateObjects() {
            if (this.dirtyTest) {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this.lists[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var list = _step4.value;

                        if (!list.staticObject) {
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = list[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var object = _step5.value;

                                    if (!object.staticObject && object[this.dirty]) {
                                        this.updateObject(object);
                                        object[this.dirty] = false;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                        _iterator5.return();
                                    }
                                } finally {
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            } else {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = this.lists[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var _list = _step6.value;

                        if (!_list.staticObject) {
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = _list[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var _object = _step7.value;

                                    if (!_object.staticObject) {
                                        this.updateObject(_object);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError7 = true;
                                _iteratorError7 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                        _iterator7.return();
                                    }
                                } finally {
                                    if (_didIteratorError7) {
                                        throw _iteratorError7;
                                    }
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }
            }
        }

        /**
         * update the has of an object
         * automatically called from updateObjects()
         * @param {*} object
         */

    }, {
        key: 'updateObject',
        value: function updateObject(object) {
            var box = object.getLocalBounds();
            object[this.AABB] = object[this.AABB] || {};
            object[this.AABB].x = object.x + box.x * object.scale.x;
            object[this.AABB].y = object.y + box.y * object.scale.y;
            object[this.AABB].width = box.width * object.scale.x;
            object[this.AABB].height = box.height * object.scale.y;
        }

        /**
         * returns an array of objects contained within bounding box
         * @param {object} boudns bounding box to search
         * @param {number} bounds.x
         * @param {number} bounds.y
         * @param {number} bounds.width
         * @param {number} bounds.height
         * @return {object[]} search results
         */

    }, {
        key: 'query',
        value: function query(bounds) {
            var results = [];
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = this.lists[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var list = _step8.value;
                    var _iteratorNormalCompletion9 = true;
                    var _didIteratorError9 = false;
                    var _iteratorError9 = undefined;

                    try {
                        for (var _iterator9 = list[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                            var object = _step9.value;

                            var box = object[this.AABB];
                            if (box.x + box.width > bounds.x && box.x - box.width < bounds.x + bounds.width && box.y + box.height > bounds.y && box.y - box.height < bounds.y + bounds.height) {
                                results.push(object);
                            }
                        }
                    } catch (err) {
                        _didIteratorError9 = true;
                        _iteratorError9 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                _iterator9.return();
                            }
                        } finally {
                            if (_didIteratorError9) {
                                throw _iteratorError9;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            return results;
        }

        /**
         * iterates through objects contained within bounding box
         * stops iterating if the callback returns true
         * @param {object} bounds bounding box to search
         * @param {number} bounds.x
         * @param {number} bounds.y
         * @param {number} bounds.width
         * @param {number} bounds.height
         * @param {function} callback
         * @return {boolean} true if callback returned early
         */

    }, {
        key: 'queryCallback',
        value: function queryCallback(bounds, callback) {
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = this.lists[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var list = _step10.value;
                    var _iteratorNormalCompletion11 = true;
                    var _didIteratorError11 = false;
                    var _iteratorError11 = undefined;

                    try {
                        for (var _iterator11 = list[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                            var object = _step11.value;

                            var box = object[this.AABB];
                            if (box.x + box.width > bounds.x && box.x - box.width < bounds.x + bounds.width && box.y + box.height > bounds.y && box.y - box.height < bounds.y + bounds.height) {
                                if (callback(object)) {
                                    return true;
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError11 = true;
                        _iteratorError11 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                _iterator11.return();
                            }
                        } finally {
                            if (_didIteratorError11) {
                                throw _iteratorError11;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            return false;
        }

        /**
         * get stats (only updated after update() is called)
         * @return {SimpleStats}
         */

    }, {
        key: 'stats',
        value: function stats() {
            var visible = 0,
                count = 0;
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
                for (var _iterator12 = this.lists[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var list = _step12.value;

                    list.forEach(function (object) {
                        visible += object.visible ? 1 : 0;
                        count++;
                    });
                }
            } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
                        _iterator12.return();
                    }
                } finally {
                    if (_didIteratorError12) {
                        throw _iteratorError12;
                    }
                }
            }

            return { total: count, visible: visible, culled: count - visible };
        }
    }]);

    return Simple;
}();

/**
 * @typedef {object} SimpleStats
 * @property {number} total
 * @property {number} visible
 * @property {number} culled
 */

module.exports = Simple;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvZGUvc2ltcGxlLmpzIl0sIm5hbWVzIjpbIlNpbXBsZSIsIm9wdGlvbnMiLCJ2aXNpYmxlIiwiY2FsY3VsYXRlUElYSSIsImRpcnR5VGVzdCIsIkFBQkIiLCJsaXN0cyIsImFycmF5Iiwic3RhdGljT2JqZWN0IiwicHVzaCIsIm9iamVjdCIsInVwZGF0ZU9iamVjdCIsInNwbGljZSIsImluZGV4T2YiLCJib3VuZHMiLCJza2lwVXBkYXRlIiwidXBkYXRlT2JqZWN0cyIsImxpc3QiLCJib3giLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiZGlydHkiLCJnZXRMb2NhbEJvdW5kcyIsInNjYWxlIiwicmVzdWx0cyIsImNhbGxiYWNrIiwiY291bnQiLCJmb3JFYWNoIiwidG90YWwiLCJjdWxsZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTtBQUVGOzs7Ozs7OztBQVFBLG9CQUFZQyxPQUFaLEVBQ0E7QUFBQTs7QUFDSUEsa0JBQVVBLFdBQVcsRUFBckI7QUFDQSxhQUFLQyxPQUFMLEdBQWVELFFBQVFDLE9BQVIsSUFBbUIsU0FBbEM7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLE9BQU9GLFFBQVFFLGFBQWYsS0FBaUMsV0FBakMsR0FBK0NGLFFBQVFFLGFBQXZELEdBQXVFLElBQTVGO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixPQUFPSCxRQUFRRyxTQUFmLEtBQTZCLFdBQTdCLEdBQTJDSCxRQUFRRyxTQUFuRCxHQUErRCxJQUFoRjtBQUNBLGFBQUtDLElBQUwsR0FBWUosUUFBUUksSUFBUixJQUFnQixNQUE1QjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxDQUFDLEVBQUQsQ0FBYjtBQUNIOztBQUVEOzs7Ozs7Ozs7O2dDQU1RQyxLLEVBQU9DLFksRUFDZjtBQUNJLGlCQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0JGLEtBQWhCO0FBQ0EsZ0JBQUlDLFlBQUosRUFDQTtBQUNJRCxzQkFBTUMsWUFBTixHQUFxQixJQUFyQjtBQUNIO0FBQ0QsZ0JBQUksS0FBS0wsYUFBTCxJQUFzQixLQUFLQyxTQUEvQixFQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0kseUNBQW1CRyxLQUFuQiw4SEFDQTtBQUFBLDRCQURTRyxNQUNUOztBQUNJLDZCQUFLQyxZQUFMLENBQWtCRCxNQUFsQjtBQUNIO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtDO0FBQ0QsbUJBQU9ILEtBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7bUNBS1dBLEssRUFDWDtBQUNJLGlCQUFLRCxLQUFMLENBQVdNLE1BQVgsQ0FBa0IsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CTixLQUFuQixDQUFsQixFQUE2QyxDQUE3QztBQUNBLG1CQUFPQSxLQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs0QkFNSUcsTSxFQUFRRixZLEVBQ1o7QUFDSSxnQkFBSUEsWUFBSixFQUNBO0FBQ0lFLHVCQUFPRixZQUFQLEdBQXNCLElBQXRCO0FBQ0g7QUFDRCxnQkFBSSxLQUFLTCxhQUFMLEtBQXVCLEtBQUtDLFNBQUwsSUFBa0JJLFlBQXpDLENBQUosRUFDQTtBQUNJLHFCQUFLRyxZQUFMLENBQWtCRCxNQUFsQjtBQUNIO0FBQ0QsaUJBQUtKLEtBQUwsQ0FBVyxDQUFYLEVBQWNHLElBQWQsQ0FBbUJDLE1BQW5CO0FBQ0EsbUJBQU9BLE1BQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7K0JBS09BLE0sRUFDUDtBQUNJLGlCQUFLSixLQUFMLENBQVcsQ0FBWCxFQUFjTSxNQUFkLENBQXFCLEtBQUtOLEtBQUwsQ0FBVyxDQUFYLEVBQWNPLE9BQWQsQ0FBc0JILE1BQXRCLENBQXJCLEVBQW9ELENBQXBEO0FBQ0EsbUJBQU9BLE1BQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7OzZCQVNLSSxNLEVBQVFDLFUsRUFDYjtBQUNJLGdCQUFJLEtBQUtaLGFBQUwsSUFBc0IsQ0FBQ1ksVUFBM0IsRUFDQTtBQUNJLHFCQUFLQyxhQUFMO0FBQ0g7QUFKTDtBQUFBO0FBQUE7O0FBQUE7QUFLSSxzQ0FBaUIsS0FBS1YsS0FBdEIsbUlBQ0E7QUFBQSx3QkFEU1csSUFDVDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLDhDQUFtQkEsSUFBbkIsbUlBQ0E7QUFBQSxnQ0FEU1AsTUFDVDs7QUFDSSxnQ0FBTVEsTUFBTVIsT0FBTyxLQUFLTCxJQUFaLENBQVo7QUFDQUssbUNBQU8sS0FBS1IsT0FBWixJQUNJZ0IsSUFBSUMsQ0FBSixHQUFRRCxJQUFJRSxLQUFaLEdBQW9CTixPQUFPSyxDQUEzQixJQUFnQ0QsSUFBSUMsQ0FBSixHQUFRTCxPQUFPSyxDQUFQLEdBQVdMLE9BQU9NLEtBQTFELElBQ0FGLElBQUlHLENBQUosR0FBUUgsSUFBSUksTUFBWixHQUFxQlIsT0FBT08sQ0FENUIsSUFDaUNILElBQUlHLENBQUosR0FBUVAsT0FBT08sQ0FBUCxHQUFXUCxPQUFPUSxNQUYvRDtBQUdIO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFDO0FBZEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVDOztBQUVEOzs7Ozs7O3dDQUtBO0FBQ0ksZ0JBQUksS0FBS2xCLFNBQVQsRUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLDBDQUFpQixLQUFLRSxLQUF0QixtSUFDQTtBQUFBLDRCQURTVyxJQUNUOztBQUNJLDRCQUFJLENBQUNBLEtBQUtULFlBQVYsRUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLHNEQUFtQlMsSUFBbkIsbUlBQ0E7QUFBQSx3Q0FEU1AsTUFDVDs7QUFDSSx3Q0FBSSxDQUFDQSxPQUFPRixZQUFSLElBQXdCRSxPQUFPLEtBQUthLEtBQVosQ0FBNUIsRUFDQTtBQUNJLDZDQUFLWixZQUFMLENBQWtCRCxNQUFsQjtBQUNBQSwrQ0FBTyxLQUFLYSxLQUFaLElBQXFCLEtBQXJCO0FBQ0g7QUFDSjtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQztBQUNKO0FBZEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVDLGFBaEJELE1Ba0JBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0ksMENBQWlCLEtBQUtqQixLQUF0QixtSUFDQTtBQUFBLDRCQURTVyxLQUNUOztBQUNJLDRCQUFJLENBQUNBLE1BQUtULFlBQVYsRUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLHNEQUFtQlMsS0FBbkIsbUlBQ0E7QUFBQSx3Q0FEU1AsT0FDVDs7QUFDSSx3Q0FBSSxDQUFDQSxRQUFPRixZQUFaLEVBQ0E7QUFDSSw2Q0FBS0csWUFBTCxDQUFrQkQsT0FBbEI7QUFDSDtBQUNKO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFDO0FBQ0o7QUFiTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0M7QUFDSjs7QUFFRDs7Ozs7Ozs7cUNBS2FBLE0sRUFDYjtBQUNJLGdCQUFNUSxNQUFNUixPQUFPYyxjQUFQLEVBQVo7QUFDQWQsbUJBQU8sS0FBS0wsSUFBWixJQUFvQkssT0FBTyxLQUFLTCxJQUFaLEtBQXFCLEVBQXpDO0FBQ0FLLG1CQUFPLEtBQUtMLElBQVosRUFBa0JjLENBQWxCLEdBQXNCVCxPQUFPUyxDQUFQLEdBQVdELElBQUlDLENBQUosR0FBUVQsT0FBT2UsS0FBUCxDQUFhTixDQUF0RDtBQUNBVCxtQkFBTyxLQUFLTCxJQUFaLEVBQWtCZ0IsQ0FBbEIsR0FBc0JYLE9BQU9XLENBQVAsR0FBV0gsSUFBSUcsQ0FBSixHQUFRWCxPQUFPZSxLQUFQLENBQWFKLENBQXREO0FBQ0FYLG1CQUFPLEtBQUtMLElBQVosRUFBa0JlLEtBQWxCLEdBQTBCRixJQUFJRSxLQUFKLEdBQVlWLE9BQU9lLEtBQVAsQ0FBYU4sQ0FBbkQ7QUFDQVQsbUJBQU8sS0FBS0wsSUFBWixFQUFrQmlCLE1BQWxCLEdBQTJCSixJQUFJSSxNQUFKLEdBQWFaLE9BQU9lLEtBQVAsQ0FBYUosQ0FBckQ7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7OzhCQVNNUCxNLEVBQ047QUFDSSxnQkFBSVksVUFBVSxFQUFkO0FBREo7QUFBQTtBQUFBOztBQUFBO0FBRUksc0NBQWlCLEtBQUtwQixLQUF0QixtSUFDQTtBQUFBLHdCQURTVyxJQUNUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0ksOENBQW1CQSxJQUFuQixtSUFDQTtBQUFBLGdDQURTUCxNQUNUOztBQUNJLGdDQUFNUSxNQUFNUixPQUFPLEtBQUtMLElBQVosQ0FBWjtBQUNBLGdDQUFJYSxJQUFJQyxDQUFKLEdBQVFELElBQUlFLEtBQVosR0FBb0JOLE9BQU9LLENBQTNCLElBQWdDRCxJQUFJQyxDQUFKLEdBQVFELElBQUlFLEtBQVosR0FBb0JOLE9BQU9LLENBQVAsR0FBV0wsT0FBT00sS0FBdEUsSUFDQUYsSUFBSUcsQ0FBSixHQUFRSCxJQUFJSSxNQUFaLEdBQXFCUixPQUFPTyxDQUQ1QixJQUNpQ0gsSUFBSUcsQ0FBSixHQUFRSCxJQUFJSSxNQUFaLEdBQXFCUixPQUFPTyxDQUFQLEdBQVdQLE9BQU9RLE1BRDVFLEVBRUE7QUFDSUksd0NBQVFqQixJQUFSLENBQWFDLE1BQWI7QUFDSDtBQUNKO0FBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVDO0FBYkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjSSxtQkFBT2dCLE9BQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7c0NBV2NaLE0sRUFBUWEsUSxFQUN0QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLHVDQUFpQixLQUFLckIsS0FBdEIsd0lBQ0E7QUFBQSx3QkFEU1csSUFDVDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNJLCtDQUFtQkEsSUFBbkIsd0lBQ0E7QUFBQSxnQ0FEU1AsTUFDVDs7QUFDSSxnQ0FBTVEsTUFBTVIsT0FBTyxLQUFLTCxJQUFaLENBQVo7QUFDQSxnQ0FBSWEsSUFBSUMsQ0FBSixHQUFRRCxJQUFJRSxLQUFaLEdBQW9CTixPQUFPSyxDQUEzQixJQUFnQ0QsSUFBSUMsQ0FBSixHQUFRRCxJQUFJRSxLQUFaLEdBQW9CTixPQUFPSyxDQUFQLEdBQVdMLE9BQU9NLEtBQXRFLElBQ0FGLElBQUlHLENBQUosR0FBUUgsSUFBSUksTUFBWixHQUFxQlIsT0FBT08sQ0FENUIsSUFDaUNILElBQUlHLENBQUosR0FBUUgsSUFBSUksTUFBWixHQUFxQlIsT0FBT08sQ0FBUCxHQUFXUCxPQUFPUSxNQUQ1RSxFQUVBO0FBQ0ksb0NBQUlLLFNBQVNqQixNQUFULENBQUosRUFDQTtBQUNJLDJDQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7QUFaTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUM7QUFmTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCSSxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Z0NBS0E7QUFDSSxnQkFBSVIsVUFBVSxDQUFkO0FBQUEsZ0JBQWlCMEIsUUFBUSxDQUF6QjtBQURKO0FBQUE7QUFBQTs7QUFBQTtBQUVJLHVDQUFpQixLQUFLdEIsS0FBdEIsd0lBQ0E7QUFBQSx3QkFEU1csSUFDVDs7QUFDSUEseUJBQUtZLE9BQUwsQ0FBYSxrQkFDYjtBQUNJM0IsbUNBQVdRLE9BQU9SLE9BQVAsR0FBaUIsQ0FBakIsR0FBcUIsQ0FBaEM7QUFDQTBCO0FBQ0gscUJBSkQ7QUFLSDtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUksbUJBQU8sRUFBRUUsT0FBT0YsS0FBVCxFQUFnQjFCLGdCQUFoQixFQUF5QjZCLFFBQVFILFFBQVExQixPQUF6QyxFQUFQO0FBQ0g7Ozs7OztBQUdMOzs7Ozs7O0FBT0E4QixPQUFPQyxPQUFQLEdBQWlCakMsTUFBakIiLCJmaWxlIjoic2ltcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGl4aS1jdWxsLlNwYXRpYWxIYXNoXHJcbi8vIENvcHlyaWdodCAyMDE4IFlPUEVZIFlPUEVZIExMQ1xyXG4vLyBEYXZpZCBGaWdhdG5lclxyXG4vLyBNSVQgTGljZW5zZVxyXG5cclxuY2xhc3MgU2ltcGxlXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBhIHNpbXBsZSBjdWxsXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnZpc2libGU9dmlzaWJsZV0gcGFyYW1ldGVyIG9mIHRoZSBvYmplY3QgdG8gc2V0ICh1c3VhbGx5IHZpc2libGUgb3IgcmVuZGVyYWJsZSlcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2FsY3VsYXRlUElYST10cnVlXSBjYWxjdWxhdGUgcGl4aS5qcyBib3VuZGluZyBib3ggYXV0b21hdGljYWxseTsgaWYgdGhpcyBpcyBzZXQgdG8gZmFsc2UgdGhlbiBpdCB1c2VzIG9iamVjdFtvcHRpb25zLkFBQkJdIGZvciBib3VuZGluZyBib3hcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJ0eVRlc3Q9dHJ1ZV0gb25seSB1cGRhdGUgc3BhdGlhbCBoYXNoIGZvciBvYmplY3RzIHdpdGggb2JqZWN0W29wdGlvbnMuZGlydHlUZXN0XT10cnVlOyB0aGlzIGhhcyBhIEhVR0UgaW1wYWN0IG9uIHBlcmZvcm1hbmNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuQUFCQj1BQUJCXSBvYmplY3QgcHJvcGVydHkgdGhhdCBob2xkcyBib3VuZGluZyBib3ggc28gdGhhdCBvYmplY3RbdHlwZV0gPSB7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9OyBub3QgbmVlZGVkIGlmIG9wdGlvbnMuY2FsY3VsYXRlUElYST10cnVlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBvcHRpb25zLnZpc2libGUgfHwgJ3Zpc2libGUnXHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQSVhJID0gdHlwZW9mIG9wdGlvbnMuY2FsY3VsYXRlUElYSSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmNhbGN1bGF0ZVBJWEkgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5kaXJ0eVRlc3QgPSB0eXBlb2Ygb3B0aW9ucy5kaXJ0eVRlc3QgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5kaXJ0eVRlc3QgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5BQUJCID0gb3B0aW9ucy5BQUJCIHx8ICdBQUJCJ1xyXG4gICAgICAgIHRoaXMubGlzdHMgPSBbW11dXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjdWxsZWRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0aWNPYmplY3RdIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QncyBwb3NpdGlvbi9zaXplIGRvZXMgbm90IGNoYW5nZVxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFycmF5XHJcbiAgICAgKi9cclxuICAgIGFkZExpc3QoYXJyYXksIHN0YXRpY09iamVjdClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3RzLnB1c2goYXJyYXkpXHJcbiAgICAgICAgaWYgKHN0YXRpY09iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFycmF5LnN0YXRpY09iamVjdCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FsY3VsYXRlUElYSSAmJiB0aGlzLmRpcnR5VGVzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBhcnJheSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGFuIGFycmF5IGFkZGVkIGJ5IGFkZExpc3QoKVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhcnJheVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMaXN0KGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGlzdHMuc3BsaWNlKHRoaXMubGlzdHMuaW5kZXhPZihhcnJheSksIDEpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgYW4gb2JqZWN0IHRvIGJlIGN1bGxlZFxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXRpY09iamVjdF0gc2V0IHRvIHRydWUgaWYgdGhlIG9iamVjdCdzIHBvc2l0aW9uL3NpemUgZG9lcyBub3QgY2hhbmdlXHJcbiAgICAgKiBAcmV0dXJuIHsqfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgYWRkKG9iamVjdCwgc3RhdGljT2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzdGF0aWNPYmplY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3Quc3RhdGljT2JqZWN0ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVQSVhJICYmICh0aGlzLmRpcnR5VGVzdCB8fCBzdGF0aWNPYmplY3QpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RzWzBdLnB1c2gob2JqZWN0KVxyXG4gICAgICAgIHJldHVybiBvYmplY3RcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBhbiBvYmplY3QgYWRkZWQgYnkgYWRkKClcclxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJuIHsqfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKG9iamVjdClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3RzWzBdLnNwbGljZSh0aGlzLmxpc3RzWzBdLmluZGV4T2Yob2JqZWN0KSwgMSlcclxuICAgICAgICByZXR1cm4gb2JqZWN0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjdWxsIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBieSBzZXR0aW5nIHZpc2libGUgcGFyYW1ldGVyXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYm91bmRzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLnhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3VuZHMueVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy53aWR0aFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy5oZWlnaHRcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBVcGRhdGVdIHNraXAgdXBkYXRpbmcgdGhlIEFBQkIgYm91bmRpbmcgYm94IG9mIGFsbCBvYmplY3RzXHJcbiAgICAgKi9cclxuICAgIGN1bGwoYm91bmRzLCBza2lwVXBkYXRlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZVBJWEkgJiYgIXNraXBVcGRhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdHMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMubGlzdHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgbGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gb2JqZWN0W3RoaXMuQUFCQl1cclxuICAgICAgICAgICAgICAgIG9iamVjdFt0aGlzLnZpc2libGVdID1cclxuICAgICAgICAgICAgICAgICAgICBib3gueCArIGJveC53aWR0aCA+IGJvdW5kcy54ICYmIGJveC54IDwgYm91bmRzLnggKyBib3VuZHMud2lkdGggJiZcclxuICAgICAgICAgICAgICAgICAgICBib3gueSArIGJveC5oZWlnaHQgPiBib3VuZHMueSAmJiBib3gueSA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlIHRoZSBBQUJCIGZvciBhbGwgb2JqZWN0c1xyXG4gICAgICogYXV0b21hdGljYWxseSBjYWxsZWQgZnJvbSB1cGRhdGUoKSB3aGVuIGNhbGN1bGF0ZVBJWEk9dHJ1ZSBhbmQgc2tpcFVwZGF0ZT1mYWxzZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVPYmplY3RzKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eVRlc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMubGlzdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghbGlzdC5zdGF0aWNPYmplY3QpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIGxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9iamVjdC5zdGF0aWNPYmplY3QgJiYgb2JqZWN0W3RoaXMuZGlydHldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdChvYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbdGhpcy5kaXJ0eV0gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0LnN0YXRpY09iamVjdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgbGlzdClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2JqZWN0LnN0YXRpY09iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlIHRoZSBoYXMgb2YgYW4gb2JqZWN0XHJcbiAgICAgKiBhdXRvbWF0aWNhbGx5IGNhbGxlZCBmcm9tIHVwZGF0ZU9iamVjdHMoKVxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgdXBkYXRlT2JqZWN0KG9iamVjdClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib3ggPSBvYmplY3QuZ2V0TG9jYWxCb3VuZHMoKVxyXG4gICAgICAgIG9iamVjdFt0aGlzLkFBQkJdID0gb2JqZWN0W3RoaXMuQUFCQl0gfHwge31cclxuICAgICAgICBvYmplY3RbdGhpcy5BQUJCXS54ID0gb2JqZWN0LnggKyBib3gueCAqIG9iamVjdC5zY2FsZS54XHJcbiAgICAgICAgb2JqZWN0W3RoaXMuQUFCQl0ueSA9IG9iamVjdC55ICsgYm94LnkgKiBvYmplY3Quc2NhbGUueVxyXG4gICAgICAgIG9iamVjdFt0aGlzLkFBQkJdLndpZHRoID0gYm94LndpZHRoICogb2JqZWN0LnNjYWxlLnhcclxuICAgICAgICBvYmplY3RbdGhpcy5BQUJCXS5oZWlnaHQgPSBib3guaGVpZ2h0ICogb2JqZWN0LnNjYWxlLnlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluZWQgd2l0aGluIGJvdW5kaW5nIGJveFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGJvdWRucyBib3VuZGluZyBib3ggdG8gc2VhcmNoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLnhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3VuZHMueVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy53aWR0aFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy5oZWlnaHRcclxuICAgICAqIEByZXR1cm4ge29iamVjdFtdfSBzZWFyY2ggcmVzdWx0c1xyXG4gICAgICovXHJcbiAgICBxdWVyeShib3VuZHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBvYmplY3RbdGhpcy5BQUJCXVxyXG4gICAgICAgICAgICAgICAgaWYgKGJveC54ICsgYm94LndpZHRoID4gYm91bmRzLnggJiYgYm94LnggLSBib3gud2lkdGggPCBib3VuZHMueCArIGJvdW5kcy53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJveC55ICsgYm94LmhlaWdodCA+IGJvdW5kcy55ICYmIGJveC55IC0gYm94LmhlaWdodCA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpdGVyYXRlcyB0aHJvdWdoIG9iamVjdHMgY29udGFpbmVkIHdpdGhpbiBib3VuZGluZyBib3hcclxuICAgICAqIHN0b3BzIGl0ZXJhdGluZyBpZiB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYm91bmRzIGJvdW5kaW5nIGJveCB0byBzZWFyY2hcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3VuZHMueFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy55XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLndpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLmhlaWdodFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgY2FsbGJhY2sgcmV0dXJuZWQgZWFybHlcclxuICAgICAqL1xyXG4gICAgcXVlcnlDYWxsYmFjayhib3VuZHMsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBvYmplY3RbdGhpcy5BQUJCXVxyXG4gICAgICAgICAgICAgICAgaWYgKGJveC54ICsgYm94LndpZHRoID4gYm91bmRzLnggJiYgYm94LnggLSBib3gud2lkdGggPCBib3VuZHMueCArIGJvdW5kcy53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJveC55ICsgYm94LmhlaWdodCA+IGJvdW5kcy55ICYmIGJveC55IC0gYm94LmhlaWdodCA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sob2JqZWN0KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHN0YXRzIChvbmx5IHVwZGF0ZWQgYWZ0ZXIgdXBkYXRlKCkgaXMgY2FsbGVkKVxyXG4gICAgICogQHJldHVybiB7U2ltcGxlU3RhdHN9XHJcbiAgICAgKi9cclxuICAgIHN0YXRzKClcclxuICAgIHtcclxuICAgICAgICBsZXQgdmlzaWJsZSA9IDAsIGNvdW50ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChvYmplY3QgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSArPSBvYmplY3QudmlzaWJsZSA/IDEgOiAwXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHRvdGFsOiBjb3VudCwgdmlzaWJsZSwgY3VsbGVkOiBjb3VudCAtIHZpc2libGUgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gU2ltcGxlU3RhdHNcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvdGFsXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB2aXNpYmxlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdWxsZWRcclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBsZSJdfQ==

/***/ }),

/***/ "./node_modules/pixi-cull/dist/spatial-hash.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright 2018 YOPEY YOPEY LLC
// David Figatner
// MIT License

var SpatialHash = function () {
    /**
     * creates a spatial-hash cull
     * @param {object} [options]
     * @param {number} [options.size=1000] cell size used to create hash (xSize = ySize)
     * @param {number} [options.xSize] horizontal cell size
     * @param {number} [options.ySize] vertical cell size
     * @param {boolean} [options.calculatePIXI=true] calculate bounding box automatically; if this is set to false then it uses object[options.AABB] for bounding box
     * @param {boolean} [options.visible=visible] parameter of the object to set (usually visible or renderable)
     * @param {boolean} [options.simpleTest=true] iterate through visible buckets to check for bounds
     * @param {string} [options.dirtyTest=true] only update spatial hash for objects with object[options.dirtyTest]=true; this has a HUGE impact on performance
     * @param {string} [options.AABB=AABB] object property that holds bounding box so that object[type] = { x: number, y: number, width: number, height: number }
     * @param {string} [options.spatial=spatial] object property that holds object's hash list
     * @param {string} [options.dirty=dirty] object property for dirtyTest
     */
    function SpatialHash(options) {
        _classCallCheck(this, SpatialHash);

        options = options || {};
        this.xSize = options.xSize || options.size || 1000;
        this.ySize = options.ySize || options.size || 1000;
        this.AABB = options.type || 'AABB';
        this.spatial = options.spatial || 'spatial';
        this.calculatePIXI = typeof options.calculatePIXI !== 'undefined' ? options.calculatePIXI : true;
        this.visibleText = typeof options.visibleTest !== 'undefined' ? options.visibleTest : true;
        this.simpleTest = typeof options.simpleTest !== 'undefined' ? options.simpleTest : true;
        this.dirtyTest = typeof options.dirtyTest !== 'undefined' ? options.dirtyTest : true;
        this.visible = options.visible || 'visible';
        this.dirty = options.dirty || 'dirty';
        this.width = this.height = 0;
        this.hash = {};
        this.objects = [];
        this.containers = [];
    }

    /**
     * add an object to be culled
     * side effect: adds object.spatialHashes to track existing hashes
     * @param {*} object
     * @param {boolean} [staticObject] set to true if the object's position/size does not change
     * @return {*} object
     */


    _createClass(SpatialHash, [{
        key: 'add',
        value: function add(object, staticObject) {
            object[this.spatial] = { hashes: [] };
            if (this.calculatePIXI && this.dirtyTest) {
                object[this.dirty] = true;
            }
            if (staticObject) {
                object.staticObject = true;
            }
            this.updateObject(object);
            this.containers[0].push(object);
        }

        /**
         * remove an object added by add()
         * @param {*} object
         * @return {*} object
         */

    }, {
        key: 'remove',
        value: function remove(object) {
            this.containers[0].splice(this.list[0].indexOf(object), 1);
            this.removeFromHash(object);
            return object;
        }

        /**
         * add an array of objects to be culled
         * @param {PIXI.Container} container
         * @param {boolean} [staticObject] set to true if the objects in the container's position/size do not change
         * note: this only works with pixi v5.0.0rc2+ because it relies on the new container events childAdded and childRemoved
         */

    }, {
        key: 'addContainer',
        value: function addContainer(container, staticObject) {
            var added = function (object) {
                object[this.spatial] = { hashes: [] };
                this.updateObject(object);
            }.bind(this);

            var removed = function (object) {
                this.removeFromHash(object);
            }.bind(this);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = container.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var object = _step.value;

                    object[this.spatial] = { hashes: [] };
                    this.updateObject(object);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            container.cull = {};
            this.containers.push(container);
            container.on('childAdded', added);
            container.on('childRemoved', removed);
            container.cull.added = added;
            container.cull.removed = removed;
            if (staticObject) {
                container.cull.static = true;
            }
        }

        /**
         * remove an array added by addContainer()
         * @param {PIXI.Container} container
         * @return {PIXI.Container} container
         */

    }, {
        key: 'removeContainer',
        value: function removeContainer(container) {
            var _this = this;

            this.containers.splice(this.containers.indexOf(container), 1);
            container.children.forEach(function (object) {
                return _this.removeFromHash(object);
            });
            container.off('added', container.cull.added);
            container.off('removed', container.cull.removed);
            delete container.cull;
            return container;
        }

        /**
         * update the hashes and cull the items in the list
         * @param {AABB} AABB
         * @param {boolean} [skipUpdate] skip updating the hashes of all objects
         * @return {number} number of buckets in results
         */

    }, {
        key: 'cull',
        value: function cull(AABB, skipUpdate) {
            var _this2 = this;

            if (!skipUpdate) {
                this.updateObjects();
            }
            this.invisible();
            var objects = this.query(AABB, this.simpleTest);
            objects.forEach(function (object) {
                return object[_this2.visible] = true;
            });
            return this.lastBuckets;
        }

        /**
         * set all objects in hash to visible=false
         */

    }, {
        key: 'invisible',
        value: function invisible() {
            var _this3 = this;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.containers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var container = _step2.value;

                    container.children.forEach(function (object) {
                        return object[_this3.visible] = false;
                    });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        /**
         * update the hashes for all objects
         * automatically called from update() when skipUpdate=false
         */

    }, {
        key: 'updateObjects',
        value: function updateObjects() {
            var _this4 = this;

            if (this.dirtyTest) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this.objects[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var object = _step3.value;

                        if (object[this.dirty]) {
                            this.updateObject(object);
                            object[this.dirty] = false;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this.containers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var container = _step4.value;
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = container.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var _object = _step5.value;

                                if (_object[this.dirty]) {
                                    this.updateObject(_object);
                                    _object[this.dirty] = false;
                                }
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            } else {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = this.containers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var _container = _step6.value;

                        if (!_container.cull.static) {
                            _container.children.forEach(function (object) {
                                return _this4.updateObject(object);
                            });
                        }
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }
            }
        }

        /**
         * update the has of an object
         * automatically called from updateObjects()
         * @param {*} object
         * @param {boolean} [force] force update for calculatePIXI
         */

    }, {
        key: 'updateObject',
        value: function updateObject(object) {
            var AABB = void 0;
            if (this.calculatePIXI) {
                var box = object.getLocalBounds();
                AABB = object[this.AABB] = {
                    x: object.x + box.x * object.scale.x,
                    y: object.y + box.y * object.scale.y,
                    width: box.width * object.scale.x,
                    height: box.height * object.scale.y
                };
            } else {
                AABB = object[this.AABB];
            }

            var spatial = object[this.spatial];
            if (!spatial) {
                spatial = object[this.spatial] = { hashes: [] };
            }

            var _getBounds = this.getBounds(AABB),
                xStart = _getBounds.xStart,
                yStart = _getBounds.yStart,
                xEnd = _getBounds.xEnd,
                yEnd = _getBounds.yEnd;

            // only remove and insert if mapping has changed


            if (spatial.xStart !== xStart || spatial.yStart !== yStart || spatial.xEnd !== xEnd || spatial.yEnd !== yEnd) {
                if (spatial.hashes.length) {
                    this.removeFromHash(object);
                }
                for (var y = yStart; y <= yEnd; y++) {
                    for (var x = xStart; x <= xEnd; x++) {
                        var key = x + ',' + y;
                        this.insert(object, key);
                        spatial.hashes.push(key);
                    }
                }
                spatial.xStart = xStart;
                spatial.yStart = yStart;
                spatial.xEnd = xEnd;
                spatial.yEnd = yEnd;
            }
        }

        /**
         * returns an array of buckets with >= minimum of objects in each bucket
         * @param {number} [minimum=1]
         * @return {array} array of buckets
         */

    }, {
        key: 'getBuckets',
        value: function getBuckets() {
            var minimum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var hashes = [];
            for (var key in this.hash) {
                var hash = this.hash[key];
                if (hash.length >= minimum) {
                    hashes.push(hash);
                }
            }
            return hashes;
        }

        /**
         * gets hash bounds
         * @param {AABB} AABB
         * @return {Bounds}
         * @private
         */

    }, {
        key: 'getBounds',
        value: function getBounds(AABB) {
            var xStart = Math.floor(AABB.x / this.xSize);
            var yStart = Math.floor(AABB.y / this.ySize);
            var xEnd = Math.floor((AABB.x + AABB.width) / this.xSize);
            var yEnd = Math.floor((AABB.y + AABB.height) / this.ySize);
            return { xStart: xStart, yStart: yStart, xEnd: xEnd, yEnd: yEnd };
        }

        /**
         * insert object into the spatial hash
         * automatically called from updateObject()
         * @param {*} object
         * @param {string} key
         */

    }, {
        key: 'insert',
        value: function insert(object, key) {
            if (!this.hash[key]) {
                this.hash[key] = [object];
            } else {
                this.hash[key].push(object);
            }
        }

        /**
         * removes object from the hash table
         * should be called when removing an object
         * automatically called from updateObject()
         * @param {object} object
         */

    }, {
        key: 'removeFromHash',
        value: function removeFromHash(object) {
            var spatial = object[this.spatial];
            while (spatial.hashes.length) {
                var key = spatial.hashes.pop();
                var list = this.hash[key];
                list.splice(list.indexOf(object), 1);
            }
        }

        /**
         * get all neighbors that share the same hash as object
         * @param {*} object in the spatial hash
         * @return {Array} of objects that are in the same hash as object
         */

    }, {
        key: 'neighbors',
        value: function neighbors(object) {
            var _this5 = this;

            var results = [];
            object[this.spatial].hashes.forEach(function (key) {
                return results = results.concat(_this5.hash[key]);
            });
            return results;
        }

        /**
         * returns an array of objects contained within bounding box
         * @param {AABB} AABB bounding box to search
         * @param {boolean} [simpleTest=true] perform a simple bounds check of all items in the buckets
         * @return {object[]} search results
         */

    }, {
        key: 'query',
        value: function query(AABB, simpleTest) {
            simpleTest = typeof simpleTest !== 'undefined' ? simpleTest : true;
            var buckets = 0;
            var results = [];

            var _getBounds2 = this.getBounds(AABB),
                xStart = _getBounds2.xStart,
                yStart = _getBounds2.yStart,
                xEnd = _getBounds2.xEnd,
                yEnd = _getBounds2.yEnd;

            for (var y = yStart; y <= yEnd; y++) {
                for (var x = xStart; x <= xEnd; x++) {
                    var entry = this.hash[x + ',' + y];
                    if (entry) {
                        if (simpleTest) {
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = entry[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var object = _step7.value;

                                    var box = object[this.AABB];
                                    if (box.x + box.width > AABB.x && box.x < AABB.x + AABB.width && box.y + box.height > AABB.y && box.y < AABB.y + AABB.height) {
                                        results.push(object);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError7 = true;
                                _iteratorError7 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                        _iterator7.return();
                                    }
                                } finally {
                                    if (_didIteratorError7) {
                                        throw _iteratorError7;
                                    }
                                }
                            }
                        } else {
                            results = results.concat(entry);
                        }
                        buckets++;
                    }
                }
            }
            this.lastBuckets = buckets;
            return results;
        }

        /**
         * iterates through objects contained within bounding box
         * stops iterating if the callback returns true
         * @param {AABB} AABB bounding box to search
         * @param {function} callback
         * @param {boolean} [simpleTest=true] perform a simple bounds check of all items in the buckets
         * @return {boolean} true if callback returned early
         */

    }, {
        key: 'queryCallback',
        value: function queryCallback(AABB, callback, simpleTest) {
            simpleTest = typeof simpleTest !== 'undefined' ? simpleTest : true;

            var _getBounds3 = this.getBounds(AABB),
                xStart = _getBounds3.xStart,
                yStart = _getBounds3.yStart,
                xEnd = _getBounds3.xEnd,
                yEnd = _getBounds3.yEnd;

            for (var y = yStart; y <= yEnd; y++) {
                for (var x = xStart; x <= xEnd; x++) {
                    var entry = this.hash[x + ',' + y];
                    if (entry) {
                        for (var i = 0; i < entry.length; i++) {
                            var object = entry[i];
                            if (simpleTest) {
                                var _AABB = object.AABB;
                                if (_AABB.x + _AABB.width > _AABB.x && _AABB.x < _AABB.x + _AABB.width && _AABB.y + _AABB.height > _AABB.y && _AABB.y < _AABB.y + _AABB.height) {
                                    if (callback(object)) {
                                        return true;
                                    }
                                }
                            } else {
                                if (callback(object)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
            return false;
        }

        /**
         * get stats
         * @return {Stats}
         */

    }, {
        key: 'stats',
        value: function stats() {
            var visible = 0,
                count = 0;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = this.containers[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var list = _step8.value;

                    for (var i = 0; i < list.children.length; i++) {
                        var object = list.children[i];
                        visible += object.visible ? 1 : 0;
                        count++;
                    }
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            return {
                total: count,
                visible: visible,
                culled: count - visible
            };
        }

        /**
         * helper function to evaluate hash table
         * @return {number} the number of buckets in the hash table
         * */

    }, {
        key: 'getNumberOfBuckets',
        value: function getNumberOfBuckets() {
            return Object.keys(this.hash).length;
        }

        /**
         * helper function to evaluate hash table
         * @return {number} the average number of entries in each bucket
         */

    }, {
        key: 'getAverageSize',
        value: function getAverageSize() {
            var total = 0;
            for (var key in this.hash) {
                total += this.hash[key].length;
            }
            return total / this.getBuckets().length;
        }

        /**
         * helper function to evaluate the hash table
         * @return {number} the largest sized bucket
         */

    }, {
        key: 'getLargest',
        value: function getLargest() {
            var largest = 0;
            for (var key in this.hash) {
                if (this.hash[key].length > largest) {
                    largest = this.hash[key].length;
                }
            }
            return largest;
        }

        /**
         * gets quadrant bounds
         * @return {Bounds}
         */

    }, {
        key: 'getWorldBounds',
        value: function getWorldBounds() {
            var xStart = Infinity,
                yStart = Infinity,
                xEnd = 0,
                yEnd = 0;
            for (var key in this.hash) {
                var split = key.split(',');
                var x = parseInt(split[0]);
                var y = parseInt(split[1]);
                xStart = x < xStart ? x : xStart;
                yStart = y < yStart ? y : yStart;
                xEnd = x > xEnd ? x : xEnd;
                yEnd = y > yEnd ? y : yEnd;
            }
            return { xStart: xStart, yStart: yStart, xEnd: xEnd, yEnd: yEnd };
        }

        /**
         * helper function to evalute the hash table
         * @param {AABB} [AABB] bounding box to search or entire world
         * @return {number} sparseness percentage (i.e., buckets with at least 1 element divided by total possible buckets)
         */

    }, {
        key: 'getSparseness',
        value: function getSparseness(AABB) {
            var count = 0,
                total = 0;

            var _ref = AABB ? this.getBounds(AABB) : this.getWorldBounds(),
                xStart = _ref.xStart,
                yStart = _ref.yStart,
                xEnd = _ref.xEnd,
                yEnd = _ref.yEnd;

            for (var y = yStart; y < yEnd; y++) {
                for (var x = xStart; x < xEnd; x++) {
                    count += this.hash[x + ',' + y] ? 1 : 0;
                    total++;
                }
            }
            return count / total;
        }
    }]);

    return SpatialHash;
}();

/**
 * @typedef {object} Stats
 * @property {number} total
 * @property {number} visible
 * @property {number} culled
 */

/**
 * @typedef {object} Bounds
 * @property {number} xStart
 * @property {number} yStart
 * @property {number} xEnd
 * @property {number} xEnd
 */

/**
  * @typedef {object} AABB
  * @property {number} x
  * @property {number} y
  * @property {number} width
  * @property {number} height
  */

module.exports = SpatialHash;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvZGUvc3BhdGlhbC1oYXNoLmpzIl0sIm5hbWVzIjpbIlNwYXRpYWxIYXNoIiwib3B0aW9ucyIsInhTaXplIiwic2l6ZSIsInlTaXplIiwiQUFCQiIsInR5cGUiLCJzcGF0aWFsIiwiY2FsY3VsYXRlUElYSSIsInZpc2libGVUZXh0IiwidmlzaWJsZVRlc3QiLCJzaW1wbGVUZXN0IiwiZGlydHlUZXN0IiwidmlzaWJsZSIsImRpcnR5Iiwid2lkdGgiLCJoZWlnaHQiLCJoYXNoIiwib2JqZWN0cyIsImNvbnRhaW5lcnMiLCJvYmplY3QiLCJzdGF0aWNPYmplY3QiLCJoYXNoZXMiLCJ1cGRhdGVPYmplY3QiLCJwdXNoIiwic3BsaWNlIiwibGlzdCIsImluZGV4T2YiLCJyZW1vdmVGcm9tSGFzaCIsImNvbnRhaW5lciIsImFkZGVkIiwiYmluZCIsInJlbW92ZWQiLCJjaGlsZHJlbiIsImN1bGwiLCJvbiIsInN0YXRpYyIsImZvckVhY2giLCJvZmYiLCJza2lwVXBkYXRlIiwidXBkYXRlT2JqZWN0cyIsImludmlzaWJsZSIsInF1ZXJ5IiwibGFzdEJ1Y2tldHMiLCJib3giLCJnZXRMb2NhbEJvdW5kcyIsIngiLCJzY2FsZSIsInkiLCJnZXRCb3VuZHMiLCJ4U3RhcnQiLCJ5U3RhcnQiLCJ4RW5kIiwieUVuZCIsImxlbmd0aCIsImtleSIsImluc2VydCIsIm1pbmltdW0iLCJNYXRoIiwiZmxvb3IiLCJwb3AiLCJyZXN1bHRzIiwiY29uY2F0IiwiYnVja2V0cyIsImVudHJ5IiwiY2FsbGJhY2siLCJpIiwiY291bnQiLCJ0b3RhbCIsImN1bGxlZCIsIk9iamVjdCIsImtleXMiLCJnZXRCdWNrZXRzIiwibGFyZ2VzdCIsIkluZmluaXR5Iiwic3BsaXQiLCJwYXJzZUludCIsImdldFdvcmxkQm91bmRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXO0FBRUY7Ozs7Ozs7Ozs7Ozs7O0FBY0EseUJBQVlDLE9BQVosRUFDQTtBQUFBOztBQUNJQSxrQkFBVUEsV0FBVyxFQUFyQjtBQUNBLGFBQUtDLEtBQUwsR0FBYUQsUUFBUUMsS0FBUixJQUFpQkQsUUFBUUUsSUFBekIsSUFBaUMsSUFBOUM7QUFDQSxhQUFLQyxLQUFMLEdBQWFILFFBQVFHLEtBQVIsSUFBaUJILFFBQVFFLElBQXpCLElBQWlDLElBQTlDO0FBQ0EsYUFBS0UsSUFBTCxHQUFZSixRQUFRSyxJQUFSLElBQWdCLE1BQTVCO0FBQ0EsYUFBS0MsT0FBTCxHQUFlTixRQUFRTSxPQUFSLElBQW1CLFNBQWxDO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQixPQUFPUCxRQUFRTyxhQUFmLEtBQWlDLFdBQWpDLEdBQStDUCxRQUFRTyxhQUF2RCxHQUF1RSxJQUE1RjtBQUNBLGFBQUtDLFdBQUwsR0FBbUIsT0FBT1IsUUFBUVMsV0FBZixLQUErQixXQUEvQixHQUE2Q1QsUUFBUVMsV0FBckQsR0FBbUUsSUFBdEY7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLE9BQU9WLFFBQVFVLFVBQWYsS0FBOEIsV0FBOUIsR0FBNENWLFFBQVFVLFVBQXBELEdBQWlFLElBQW5GO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixPQUFPWCxRQUFRVyxTQUFmLEtBQTZCLFdBQTdCLEdBQTJDWCxRQUFRVyxTQUFuRCxHQUErRCxJQUFoRjtBQUNBLGFBQUtDLE9BQUwsR0FBZVosUUFBUVksT0FBUixJQUFtQixTQUFsQztBQUNBLGFBQUtDLEtBQUwsR0FBYWIsUUFBUWEsS0FBUixJQUFpQixPQUE5QjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxLQUFLQyxNQUFMLEdBQWMsQ0FBM0I7QUFDQSxhQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs0QkFPSUMsTSxFQUFRQyxZLEVBQ1o7QUFDSUQsbUJBQU8sS0FBS2IsT0FBWixJQUF1QixFQUFFZSxRQUFRLEVBQVYsRUFBdkI7QUFDQSxnQkFBSSxLQUFLZCxhQUFMLElBQXNCLEtBQUtJLFNBQS9CLEVBQ0E7QUFDSVEsdUJBQU8sS0FBS04sS0FBWixJQUFxQixJQUFyQjtBQUNIO0FBQ0QsZ0JBQUlPLFlBQUosRUFDQTtBQUNJRCx1QkFBT0MsWUFBUCxHQUFzQixJQUF0QjtBQUNIO0FBQ0QsaUJBQUtFLFlBQUwsQ0FBa0JILE1BQWxCO0FBQ0EsaUJBQUtELFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJLLElBQW5CLENBQXdCSixNQUF4QjtBQUNIOztBQUVEOzs7Ozs7OzsrQkFLT0EsTSxFQUNQO0FBQ0ksaUJBQUtELFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJNLE1BQW5CLENBQTBCLEtBQUtDLElBQUwsQ0FBVSxDQUFWLEVBQWFDLE9BQWIsQ0FBcUJQLE1BQXJCLENBQTFCLEVBQXdELENBQXhEO0FBQ0EsaUJBQUtRLGNBQUwsQ0FBb0JSLE1BQXBCO0FBQ0EsbUJBQU9BLE1BQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7O3FDQU1hUyxTLEVBQVdSLFksRUFDeEI7QUFDSSxnQkFBTVMsUUFBUSxVQUFTVixNQUFULEVBQ2Q7QUFDSUEsdUJBQU8sS0FBS2IsT0FBWixJQUF1QixFQUFFZSxRQUFRLEVBQVYsRUFBdkI7QUFDQSxxQkFBS0MsWUFBTCxDQUFrQkgsTUFBbEI7QUFDSCxhQUphLENBSVpXLElBSlksQ0FJUCxJQUpPLENBQWQ7O0FBTUEsZ0JBQU1DLFVBQVUsVUFBVVosTUFBVixFQUNoQjtBQUNJLHFCQUFLUSxjQUFMLENBQW9CUixNQUFwQjtBQUNILGFBSGUsQ0FHZFcsSUFIYyxDQUdULElBSFMsQ0FBaEI7O0FBUEo7QUFBQTtBQUFBOztBQUFBO0FBWUkscUNBQW1CRixVQUFVSSxRQUE3Qiw4SEFDQTtBQUFBLHdCQURTYixNQUNUOztBQUNJQSwyQkFBTyxLQUFLYixPQUFaLElBQXVCLEVBQUVlLFFBQVEsRUFBVixFQUF2QjtBQUNBLHlCQUFLQyxZQUFMLENBQWtCSCxNQUFsQjtBQUNIO0FBaEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJJUyxzQkFBVUssSUFBVixHQUFpQixFQUFqQjtBQUNBLGlCQUFLZixVQUFMLENBQWdCSyxJQUFoQixDQUFxQkssU0FBckI7QUFDQUEsc0JBQVVNLEVBQVYsQ0FBYSxZQUFiLEVBQTJCTCxLQUEzQjtBQUNBRCxzQkFBVU0sRUFBVixDQUFhLGNBQWIsRUFBNkJILE9BQTdCO0FBQ0FILHNCQUFVSyxJQUFWLENBQWVKLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0FELHNCQUFVSyxJQUFWLENBQWVGLE9BQWYsR0FBeUJBLE9BQXpCO0FBQ0EsZ0JBQUlYLFlBQUosRUFDQTtBQUNJUSwwQkFBVUssSUFBVixDQUFlRSxNQUFmLEdBQXdCLElBQXhCO0FBQ0g7QUFDSjs7QUFFRDs7Ozs7Ozs7d0NBS2dCUCxTLEVBQ2hCO0FBQUE7O0FBQ0ksaUJBQUtWLFVBQUwsQ0FBZ0JNLE1BQWhCLENBQXVCLEtBQUtOLFVBQUwsQ0FBZ0JRLE9BQWhCLENBQXdCRSxTQUF4QixDQUF2QixFQUEyRCxDQUEzRDtBQUNBQSxzQkFBVUksUUFBVixDQUFtQkksT0FBbkIsQ0FBMkI7QUFBQSx1QkFBVSxNQUFLVCxjQUFMLENBQW9CUixNQUFwQixDQUFWO0FBQUEsYUFBM0I7QUFDQVMsc0JBQVVTLEdBQVYsQ0FBYyxPQUFkLEVBQXVCVCxVQUFVSyxJQUFWLENBQWVKLEtBQXRDO0FBQ0FELHNCQUFVUyxHQUFWLENBQWMsU0FBZCxFQUF5QlQsVUFBVUssSUFBVixDQUFlRixPQUF4QztBQUNBLG1CQUFPSCxVQUFVSyxJQUFqQjtBQUNBLG1CQUFPTCxTQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs2QkFNS3hCLEksRUFBTWtDLFUsRUFDWDtBQUFBOztBQUNJLGdCQUFJLENBQUNBLFVBQUwsRUFDQTtBQUNJLHFCQUFLQyxhQUFMO0FBQ0g7QUFDRCxpQkFBS0MsU0FBTDtBQUNBLGdCQUFNdkIsVUFBVSxLQUFLd0IsS0FBTCxDQUFXckMsSUFBWCxFQUFpQixLQUFLTSxVQUF0QixDQUFoQjtBQUNBTyxvQkFBUW1CLE9BQVIsQ0FBZ0I7QUFBQSx1QkFBVWpCLE9BQU8sT0FBS1AsT0FBWixJQUF1QixJQUFqQztBQUFBLGFBQWhCO0FBQ0EsbUJBQU8sS0FBSzhCLFdBQVo7QUFDSDs7QUFFRDs7Ozs7O29DQUlBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0ksc0NBQXNCLEtBQUt4QixVQUEzQixtSUFDQTtBQUFBLHdCQURTVSxTQUNUOztBQUNJQSw4QkFBVUksUUFBVixDQUFtQkksT0FBbkIsQ0FBMkI7QUFBQSwrQkFBVWpCLE9BQU8sT0FBS1AsT0FBWixJQUF1QixLQUFqQztBQUFBLHFCQUEzQjtBQUNIO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtDOztBQUVEOzs7Ozs7O3dDQUtBO0FBQUE7O0FBQ0ksZ0JBQUksS0FBS0QsU0FBVCxFQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0ksMENBQW1CLEtBQUtNLE9BQXhCLG1JQUNBO0FBQUEsNEJBRFNFLE1BQ1Q7O0FBQ0ksNEJBQUlBLE9BQU8sS0FBS04sS0FBWixDQUFKLEVBQ0E7QUFDSSxpQ0FBS1MsWUFBTCxDQUFrQkgsTUFBbEI7QUFDQUEsbUNBQU8sS0FBS04sS0FBWixJQUFxQixLQUFyQjtBQUNIO0FBQ0o7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVNJLDBDQUFzQixLQUFLSyxVQUEzQixtSUFDQTtBQUFBLDRCQURTVSxTQUNUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0ksa0RBQW1CQSxVQUFVSSxRQUE3QixtSUFDQTtBQUFBLG9DQURTYixPQUNUOztBQUNJLG9DQUFJQSxRQUFPLEtBQUtOLEtBQVosQ0FBSixFQUNBO0FBQ0kseUNBQUtTLFlBQUwsQ0FBa0JILE9BQWxCO0FBQ0FBLDRDQUFPLEtBQUtOLEtBQVosSUFBcUIsS0FBckI7QUFDSDtBQUNKO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNDO0FBbkJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQkMsYUFyQkQsTUF1QkE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDSSwwQ0FBc0IsS0FBS0ssVUFBM0IsbUlBQ0E7QUFBQSw0QkFEU1UsVUFDVDs7QUFDSSw0QkFBSSxDQUFDQSxXQUFVSyxJQUFWLENBQWVFLE1BQXBCLEVBQ0E7QUFDSVAsdUNBQVVJLFFBQVYsQ0FBbUJJLE9BQW5CLENBQTJCO0FBQUEsdUNBQVUsT0FBS2QsWUFBTCxDQUFrQkgsTUFBbEIsQ0FBVjtBQUFBLDZCQUEzQjtBQUNIO0FBQ0o7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUM7QUFDSjs7QUFFRDs7Ozs7Ozs7O3FDQU1hQSxNLEVBQ2I7QUFDSSxnQkFBSWYsYUFBSjtBQUNBLGdCQUFJLEtBQUtHLGFBQVQsRUFDQTtBQUNJLG9CQUFNb0MsTUFBTXhCLE9BQU95QixjQUFQLEVBQVo7QUFDQXhDLHVCQUFPZSxPQUFPLEtBQUtmLElBQVosSUFBb0I7QUFDdkJ5Qyx1QkFBRzFCLE9BQU8wQixDQUFQLEdBQVdGLElBQUlFLENBQUosR0FBUTFCLE9BQU8yQixLQUFQLENBQWFELENBRFo7QUFFdkJFLHVCQUFHNUIsT0FBTzRCLENBQVAsR0FBV0osSUFBSUksQ0FBSixHQUFRNUIsT0FBTzJCLEtBQVAsQ0FBYUMsQ0FGWjtBQUd2QmpDLDJCQUFPNkIsSUFBSTdCLEtBQUosR0FBWUssT0FBTzJCLEtBQVAsQ0FBYUQsQ0FIVDtBQUl2QjlCLDRCQUFRNEIsSUFBSTVCLE1BQUosR0FBYUksT0FBTzJCLEtBQVAsQ0FBYUM7QUFKWCxpQkFBM0I7QUFNSCxhQVRELE1BV0E7QUFDSTNDLHVCQUFPZSxPQUFPLEtBQUtmLElBQVosQ0FBUDtBQUNIOztBQUVELGdCQUFJRSxVQUFVYSxPQUFPLEtBQUtiLE9BQVosQ0FBZDtBQUNBLGdCQUFJLENBQUNBLE9BQUwsRUFDQTtBQUNJQSwwQkFBVWEsT0FBTyxLQUFLYixPQUFaLElBQXVCLEVBQUVlLFFBQVEsRUFBVixFQUFqQztBQUNIOztBQXJCTCw2QkFzQjJDLEtBQUsyQixTQUFMLENBQWU1QyxJQUFmLENBdEIzQztBQUFBLGdCQXNCWTZDLE1BdEJaLGNBc0JZQSxNQXRCWjtBQUFBLGdCQXNCb0JDLE1BdEJwQixjQXNCb0JBLE1BdEJwQjtBQUFBLGdCQXNCNEJDLElBdEI1QixjQXNCNEJBLElBdEI1QjtBQUFBLGdCQXNCa0NDLElBdEJsQyxjQXNCa0NBLElBdEJsQzs7QUF3Qkk7OztBQUNBLGdCQUFJOUMsUUFBUTJDLE1BQVIsS0FBbUJBLE1BQW5CLElBQTZCM0MsUUFBUTRDLE1BQVIsS0FBbUJBLE1BQWhELElBQTBENUMsUUFBUTZDLElBQVIsS0FBaUJBLElBQTNFLElBQW1GN0MsUUFBUThDLElBQVIsS0FBaUJBLElBQXhHLEVBQ0E7QUFDSSxvQkFBSTlDLFFBQVFlLE1BQVIsQ0FBZWdDLE1BQW5CLEVBQ0E7QUFDSSx5QkFBSzFCLGNBQUwsQ0FBb0JSLE1BQXBCO0FBQ0g7QUFDRCxxQkFBSyxJQUFJNEIsSUFBSUcsTUFBYixFQUFxQkgsS0FBS0ssSUFBMUIsRUFBZ0NMLEdBQWhDLEVBQ0E7QUFDSSx5QkFBSyxJQUFJRixJQUFJSSxNQUFiLEVBQXFCSixLQUFLTSxJQUExQixFQUFnQ04sR0FBaEMsRUFDQTtBQUNJLDRCQUFNUyxNQUFNVCxJQUFJLEdBQUosR0FBVUUsQ0FBdEI7QUFDQSw2QkFBS1EsTUFBTCxDQUFZcEMsTUFBWixFQUFvQm1DLEdBQXBCO0FBQ0FoRCxnQ0FBUWUsTUFBUixDQUFlRSxJQUFmLENBQW9CK0IsR0FBcEI7QUFDSDtBQUNKO0FBQ0RoRCx3QkFBUTJDLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0EzQyx3QkFBUTRDLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0E1Qyx3QkFBUTZDLElBQVIsR0FBZUEsSUFBZjtBQUNBN0Msd0JBQVE4QyxJQUFSLEdBQWVBLElBQWY7QUFDSDtBQUNKOztBQUVEOzs7Ozs7OztxQ0FNQTtBQUFBLGdCQURXSSxPQUNYLHVFQURtQixDQUNuQjs7QUFDSSxnQkFBTW5DLFNBQVMsRUFBZjtBQUNBLGlCQUFLLElBQUlpQyxHQUFULElBQWdCLEtBQUt0QyxJQUFyQixFQUNBO0FBQ0ksb0JBQU1BLE9BQU8sS0FBS0EsSUFBTCxDQUFVc0MsR0FBVixDQUFiO0FBQ0Esb0JBQUl0QyxLQUFLcUMsTUFBTCxJQUFlRyxPQUFuQixFQUNBO0FBQ0luQywyQkFBT0UsSUFBUCxDQUFZUCxJQUFaO0FBQ0g7QUFDSjtBQUNELG1CQUFPSyxNQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztrQ0FNVWpCLEksRUFDVjtBQUNJLGdCQUFJNkMsU0FBU1EsS0FBS0MsS0FBTCxDQUFXdEQsS0FBS3lDLENBQUwsR0FBUyxLQUFLNUMsS0FBekIsQ0FBYjtBQUNBLGdCQUFJaUQsU0FBU08sS0FBS0MsS0FBTCxDQUFXdEQsS0FBSzJDLENBQUwsR0FBUyxLQUFLNUMsS0FBekIsQ0FBYjtBQUNBLGdCQUFJZ0QsT0FBT00sS0FBS0MsS0FBTCxDQUFXLENBQUN0RCxLQUFLeUMsQ0FBTCxHQUFTekMsS0FBS1UsS0FBZixJQUF3QixLQUFLYixLQUF4QyxDQUFYO0FBQ0EsZ0JBQUltRCxPQUFPSyxLQUFLQyxLQUFMLENBQVcsQ0FBQ3RELEtBQUsyQyxDQUFMLEdBQVMzQyxLQUFLVyxNQUFmLElBQXlCLEtBQUtaLEtBQXpDLENBQVg7QUFDQSxtQkFBTyxFQUFFOEMsY0FBRixFQUFVQyxjQUFWLEVBQWtCQyxVQUFsQixFQUF3QkMsVUFBeEIsRUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7K0JBTU9qQyxNLEVBQVFtQyxHLEVBQ2Y7QUFDSSxnQkFBSSxDQUFDLEtBQUt0QyxJQUFMLENBQVVzQyxHQUFWLENBQUwsRUFDQTtBQUNJLHFCQUFLdEMsSUFBTCxDQUFVc0MsR0FBVixJQUFpQixDQUFDbkMsTUFBRCxDQUFqQjtBQUNILGFBSEQsTUFLQTtBQUNJLHFCQUFLSCxJQUFMLENBQVVzQyxHQUFWLEVBQWUvQixJQUFmLENBQW9CSixNQUFwQjtBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozt1Q0FNZUEsTSxFQUNmO0FBQ0ksZ0JBQU1iLFVBQVVhLE9BQU8sS0FBS2IsT0FBWixDQUFoQjtBQUNBLG1CQUFPQSxRQUFRZSxNQUFSLENBQWVnQyxNQUF0QixFQUNBO0FBQ0ksb0JBQU1DLE1BQU1oRCxRQUFRZSxNQUFSLENBQWVzQyxHQUFmLEVBQVo7QUFDQSxvQkFBTWxDLE9BQU8sS0FBS1QsSUFBTCxDQUFVc0MsR0FBVixDQUFiO0FBQ0E3QixxQkFBS0QsTUFBTCxDQUFZQyxLQUFLQyxPQUFMLENBQWFQLE1BQWIsQ0FBWixFQUFrQyxDQUFsQztBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7O2tDQUtVQSxNLEVBQ1Y7QUFBQTs7QUFDSSxnQkFBSXlDLFVBQVUsRUFBZDtBQUNBekMsbUJBQU8sS0FBS2IsT0FBWixFQUFxQmUsTUFBckIsQ0FBNEJlLE9BQTVCLENBQW9DO0FBQUEsdUJBQU93QixVQUFVQSxRQUFRQyxNQUFSLENBQWUsT0FBSzdDLElBQUwsQ0FBVXNDLEdBQVYsQ0FBZixDQUFqQjtBQUFBLGFBQXBDO0FBQ0EsbUJBQU9NLE9BQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7OzhCQU1NeEQsSSxFQUFNTSxVLEVBQ1o7QUFDSUEseUJBQWEsT0FBT0EsVUFBUCxLQUFzQixXQUF0QixHQUFvQ0EsVUFBcEMsR0FBaUQsSUFBOUQ7QUFDQSxnQkFBSW9ELFVBQVUsQ0FBZDtBQUNBLGdCQUFJRixVQUFVLEVBQWQ7O0FBSEosOEJBSTJDLEtBQUtaLFNBQUwsQ0FBZTVDLElBQWYsQ0FKM0M7QUFBQSxnQkFJWTZDLE1BSlosZUFJWUEsTUFKWjtBQUFBLGdCQUlvQkMsTUFKcEIsZUFJb0JBLE1BSnBCO0FBQUEsZ0JBSTRCQyxJQUo1QixlQUk0QkEsSUFKNUI7QUFBQSxnQkFJa0NDLElBSmxDLGVBSWtDQSxJQUpsQzs7QUFLSSxpQkFBSyxJQUFJTCxJQUFJRyxNQUFiLEVBQXFCSCxLQUFLSyxJQUExQixFQUFnQ0wsR0FBaEMsRUFDQTtBQUNJLHFCQUFLLElBQUlGLElBQUlJLE1BQWIsRUFBcUJKLEtBQUtNLElBQTFCLEVBQWdDTixHQUFoQyxFQUNBO0FBQ0ksd0JBQU1rQixRQUFRLEtBQUsvQyxJQUFMLENBQVU2QixJQUFJLEdBQUosR0FBVUUsQ0FBcEIsQ0FBZDtBQUNBLHdCQUFJZ0IsS0FBSixFQUNBO0FBQ0ksNEJBQUlyRCxVQUFKLEVBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDSSxzREFBbUJxRCxLQUFuQixtSUFDQTtBQUFBLHdDQURTNUMsTUFDVDs7QUFDSSx3Q0FBTXdCLE1BQU14QixPQUFPLEtBQUtmLElBQVosQ0FBWjtBQUNBLHdDQUFJdUMsSUFBSUUsQ0FBSixHQUFRRixJQUFJN0IsS0FBWixHQUFvQlYsS0FBS3lDLENBQXpCLElBQThCRixJQUFJRSxDQUFKLEdBQVF6QyxLQUFLeUMsQ0FBTCxHQUFTekMsS0FBS1UsS0FBcEQsSUFDSjZCLElBQUlJLENBQUosR0FBUUosSUFBSTVCLE1BQVosR0FBcUJYLEtBQUsyQyxDQUR0QixJQUMyQkosSUFBSUksQ0FBSixHQUFRM0MsS0FBSzJDLENBQUwsR0FBUzNDLEtBQUtXLE1BRHJELEVBRUE7QUFDSTZDLGdEQUFRckMsSUFBUixDQUFhSixNQUFiO0FBQ0g7QUFDSjtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQyx5QkFYRCxNQWFBO0FBQ0l5QyxzQ0FBVUEsUUFBUUMsTUFBUixDQUFlRSxLQUFmLENBQVY7QUFDSDtBQUNERDtBQUNIO0FBQ0o7QUFDSjtBQUNELGlCQUFLcEIsV0FBTCxHQUFtQm9CLE9BQW5CO0FBQ0EsbUJBQU9GLE9BQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7c0NBUWN4RCxJLEVBQU00RCxRLEVBQVV0RCxVLEVBQzlCO0FBQ0lBLHlCQUFhLE9BQU9BLFVBQVAsS0FBc0IsV0FBdEIsR0FBb0NBLFVBQXBDLEdBQWlELElBQTlEOztBQURKLDhCQUUyQyxLQUFLc0MsU0FBTCxDQUFlNUMsSUFBZixDQUYzQztBQUFBLGdCQUVZNkMsTUFGWixlQUVZQSxNQUZaO0FBQUEsZ0JBRW9CQyxNQUZwQixlQUVvQkEsTUFGcEI7QUFBQSxnQkFFNEJDLElBRjVCLGVBRTRCQSxJQUY1QjtBQUFBLGdCQUVrQ0MsSUFGbEMsZUFFa0NBLElBRmxDOztBQUdJLGlCQUFLLElBQUlMLElBQUlHLE1BQWIsRUFBcUJILEtBQUtLLElBQTFCLEVBQWdDTCxHQUFoQyxFQUNBO0FBQ0kscUJBQUssSUFBSUYsSUFBSUksTUFBYixFQUFxQkosS0FBS00sSUFBMUIsRUFBZ0NOLEdBQWhDLEVBQ0E7QUFDSSx3QkFBTWtCLFFBQVEsS0FBSy9DLElBQUwsQ0FBVTZCLElBQUksR0FBSixHQUFVRSxDQUFwQixDQUFkO0FBQ0Esd0JBQUlnQixLQUFKLEVBQ0E7QUFDSSw2QkFBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQU1WLE1BQTFCLEVBQWtDWSxHQUFsQyxFQUNBO0FBQ0ksZ0NBQU05QyxTQUFTNEMsTUFBTUUsQ0FBTixDQUFmO0FBQ0EsZ0NBQUl2RCxVQUFKLEVBQ0E7QUFDSSxvQ0FBTU4sUUFBT2UsT0FBT2YsSUFBcEI7QUFDQSxvQ0FBSUEsTUFBS3lDLENBQUwsR0FBU3pDLE1BQUtVLEtBQWQsR0FBc0JWLE1BQUt5QyxDQUEzQixJQUFnQ3pDLE1BQUt5QyxDQUFMLEdBQVN6QyxNQUFLeUMsQ0FBTCxHQUFTekMsTUFBS1UsS0FBdkQsSUFDSlYsTUFBSzJDLENBQUwsR0FBUzNDLE1BQUtXLE1BQWQsR0FBdUJYLE1BQUsyQyxDQUR4QixJQUM2QjNDLE1BQUsyQyxDQUFMLEdBQVMzQyxNQUFLMkMsQ0FBTCxHQUFTM0MsTUFBS1csTUFEeEQsRUFFQTtBQUNJLHdDQUFJaUQsU0FBUzdDLE1BQVQsQ0FBSixFQUNBO0FBQ0ksK0NBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSiw2QkFYRCxNQWFBO0FBQ0ksb0NBQUk2QyxTQUFTN0MsTUFBVCxDQUFKLEVBQ0E7QUFDSSwyQ0FBTyxJQUFQO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjtBQUNKO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOztBQUVEOzs7Ozs7O2dDQUtBO0FBQ0ksZ0JBQUlQLFVBQVUsQ0FBZDtBQUFBLGdCQUFpQnNELFFBQVEsQ0FBekI7QUFESjtBQUFBO0FBQUE7O0FBQUE7QUFFSSxzQ0FBaUIsS0FBS2hELFVBQXRCLG1JQUNBO0FBQUEsd0JBRFNPLElBQ1Q7O0FBQ0kseUJBQUssSUFBSXdDLElBQUksQ0FBYixFQUFnQkEsSUFBSXhDLEtBQUtPLFFBQUwsQ0FBY3FCLE1BQWxDLEVBQTBDWSxHQUExQyxFQUNBO0FBQ0ksNEJBQU05QyxTQUFTTSxLQUFLTyxRQUFMLENBQWNpQyxDQUFkLENBQWY7QUFDQXJELG1DQUFXTyxPQUFPUCxPQUFQLEdBQWlCLENBQWpCLEdBQXFCLENBQWhDO0FBQ0FzRDtBQUNIO0FBQ0o7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdJLG1CQUFPO0FBQ0hDLHVCQUFPRCxLQURKO0FBRUh0RCxnQ0FGRztBQUdId0Qsd0JBQVFGLFFBQVF0RDtBQUhiLGFBQVA7QUFLSDs7QUFFRDs7Ozs7Ozs2Q0FLQTtBQUNJLG1CQUFPeUQsT0FBT0MsSUFBUCxDQUFZLEtBQUt0RCxJQUFqQixFQUF1QnFDLE1BQTlCO0FBQ0g7O0FBRUQ7Ozs7Ozs7eUNBS0E7QUFDSSxnQkFBSWMsUUFBUSxDQUFaO0FBQ0EsaUJBQUssSUFBSWIsR0FBVCxJQUFnQixLQUFLdEMsSUFBckIsRUFDQTtBQUNJbUQseUJBQVMsS0FBS25ELElBQUwsQ0FBVXNDLEdBQVYsRUFBZUQsTUFBeEI7QUFDSDtBQUNELG1CQUFPYyxRQUFRLEtBQUtJLFVBQUwsR0FBa0JsQixNQUFqQztBQUNIOztBQUVEOzs7Ozs7O3FDQUtBO0FBQ0ksZ0JBQUltQixVQUFVLENBQWQ7QUFDQSxpQkFBSyxJQUFJbEIsR0FBVCxJQUFnQixLQUFLdEMsSUFBckIsRUFDQTtBQUNJLG9CQUFJLEtBQUtBLElBQUwsQ0FBVXNDLEdBQVYsRUFBZUQsTUFBZixHQUF3Qm1CLE9BQTVCLEVBQ0E7QUFDSUEsOEJBQVUsS0FBS3hELElBQUwsQ0FBVXNDLEdBQVYsRUFBZUQsTUFBekI7QUFDSDtBQUNKO0FBQ0QsbUJBQU9tQixPQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7eUNBS0E7QUFDSSxnQkFBSXZCLFNBQVN3QixRQUFiO0FBQUEsZ0JBQXVCdkIsU0FBU3VCLFFBQWhDO0FBQUEsZ0JBQTBDdEIsT0FBTyxDQUFqRDtBQUFBLGdCQUFvREMsT0FBTyxDQUEzRDtBQUNBLGlCQUFLLElBQUlFLEdBQVQsSUFBZ0IsS0FBS3RDLElBQXJCLEVBQ0E7QUFDSSxvQkFBTTBELFFBQVFwQixJQUFJb0IsS0FBSixDQUFVLEdBQVYsQ0FBZDtBQUNBLG9CQUFJN0IsSUFBSThCLFNBQVNELE1BQU0sQ0FBTixDQUFULENBQVI7QUFDQSxvQkFBSTNCLElBQUk0QixTQUFTRCxNQUFNLENBQU4sQ0FBVCxDQUFSO0FBQ0F6Qix5QkFBU0osSUFBSUksTUFBSixHQUFhSixDQUFiLEdBQWlCSSxNQUExQjtBQUNBQyx5QkFBU0gsSUFBSUcsTUFBSixHQUFhSCxDQUFiLEdBQWlCRyxNQUExQjtBQUNBQyx1QkFBT04sSUFBSU0sSUFBSixHQUFXTixDQUFYLEdBQWVNLElBQXRCO0FBQ0FDLHVCQUFPTCxJQUFJSyxJQUFKLEdBQVdMLENBQVgsR0FBZUssSUFBdEI7QUFDSDtBQUNELG1CQUFPLEVBQUVILGNBQUYsRUFBVUMsY0FBVixFQUFrQkMsVUFBbEIsRUFBd0JDLFVBQXhCLEVBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7c0NBS2NoRCxJLEVBQ2Q7QUFDSSxnQkFBSThELFFBQVEsQ0FBWjtBQUFBLGdCQUFlQyxRQUFRLENBQXZCOztBQURKLHVCQUUyQy9ELE9BQU8sS0FBSzRDLFNBQUwsQ0FBZTVDLElBQWYsQ0FBUCxHQUE4QixLQUFLd0UsY0FBTCxFQUZ6RTtBQUFBLGdCQUVZM0IsTUFGWixRQUVZQSxNQUZaO0FBQUEsZ0JBRW9CQyxNQUZwQixRQUVvQkEsTUFGcEI7QUFBQSxnQkFFNEJDLElBRjVCLFFBRTRCQSxJQUY1QjtBQUFBLGdCQUVrQ0MsSUFGbEMsUUFFa0NBLElBRmxDOztBQUdJLGlCQUFLLElBQUlMLElBQUlHLE1BQWIsRUFBcUJILElBQUlLLElBQXpCLEVBQStCTCxHQUEvQixFQUNBO0FBQ0kscUJBQUssSUFBSUYsSUFBSUksTUFBYixFQUFxQkosSUFBSU0sSUFBekIsRUFBK0JOLEdBQS9CLEVBQ0E7QUFDSXFCLDZCQUFVLEtBQUtsRCxJQUFMLENBQVU2QixJQUFJLEdBQUosR0FBVUUsQ0FBcEIsSUFBeUIsQ0FBekIsR0FBNkIsQ0FBdkM7QUFDQW9CO0FBQ0g7QUFDSjtBQUNELG1CQUFPRCxRQUFRQyxLQUFmO0FBQ0g7Ozs7OztBQUdMOzs7Ozs7O0FBT0E7Ozs7Ozs7O0FBUUE7Ozs7Ozs7O0FBUUFVLE9BQU9DLE9BQVAsR0FBaUIvRSxXQUFqQiIsImZpbGUiOiJzcGF0aWFsLWhhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOCBZT1BFWSBZT1BFWSBMTENcclxuLy8gRGF2aWQgRmlnYXRuZXJcclxuLy8gTUlUIExpY2Vuc2VcclxuXHJcbmNsYXNzIFNwYXRpYWxIYXNoXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBhIHNwYXRpYWwtaGFzaCBjdWxsXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc2l6ZT0xMDAwXSBjZWxsIHNpemUgdXNlZCB0byBjcmVhdGUgaGFzaCAoeFNpemUgPSB5U2l6ZSlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy54U2l6ZV0gaG9yaXpvbnRhbCBjZWxsIHNpemVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy55U2l6ZV0gdmVydGljYWwgY2VsbCBzaXplXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNhbGN1bGF0ZVBJWEk9dHJ1ZV0gY2FsY3VsYXRlIGJvdW5kaW5nIGJveCBhdXRvbWF0aWNhbGx5OyBpZiB0aGlzIGlzIHNldCB0byBmYWxzZSB0aGVuIGl0IHVzZXMgb2JqZWN0W29wdGlvbnMuQUFCQl0gZm9yIGJvdW5kaW5nIGJveFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52aXNpYmxlPXZpc2libGVdIHBhcmFtZXRlciBvZiB0aGUgb2JqZWN0IHRvIHNldCAodXN1YWxseSB2aXNpYmxlIG9yIHJlbmRlcmFibGUpXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNpbXBsZVRlc3Q9dHJ1ZV0gaXRlcmF0ZSB0aHJvdWdoIHZpc2libGUgYnVja2V0cyB0byBjaGVjayBmb3IgYm91bmRzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlydHlUZXN0PXRydWVdIG9ubHkgdXBkYXRlIHNwYXRpYWwgaGFzaCBmb3Igb2JqZWN0cyB3aXRoIG9iamVjdFtvcHRpb25zLmRpcnR5VGVzdF09dHJ1ZTsgdGhpcyBoYXMgYSBIVUdFIGltcGFjdCBvbiBwZXJmb3JtYW5jZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLkFBQkI9QUFCQl0gb2JqZWN0IHByb3BlcnR5IHRoYXQgaG9sZHMgYm91bmRpbmcgYm94IHNvIHRoYXQgb2JqZWN0W3R5cGVdID0geyB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNwYXRpYWw9c3BhdGlhbF0gb2JqZWN0IHByb3BlcnR5IHRoYXQgaG9sZHMgb2JqZWN0J3MgaGFzaCBsaXN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlydHk9ZGlydHldIG9iamVjdCBwcm9wZXJ0eSBmb3IgZGlydHlUZXN0XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cclxuICAgICAgICB0aGlzLnhTaXplID0gb3B0aW9ucy54U2l6ZSB8fCBvcHRpb25zLnNpemUgfHwgMTAwMFxyXG4gICAgICAgIHRoaXMueVNpemUgPSBvcHRpb25zLnlTaXplIHx8IG9wdGlvbnMuc2l6ZSB8fCAxMDAwXHJcbiAgICAgICAgdGhpcy5BQUJCID0gb3B0aW9ucy50eXBlIHx8ICdBQUJCJ1xyXG4gICAgICAgIHRoaXMuc3BhdGlhbCA9IG9wdGlvbnMuc3BhdGlhbCB8fCAnc3BhdGlhbCdcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBJWEkgPSB0eXBlb2Ygb3B0aW9ucy5jYWxjdWxhdGVQSVhJICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuY2FsY3VsYXRlUElYSSA6IHRydWVcclxuICAgICAgICB0aGlzLnZpc2libGVUZXh0ID0gdHlwZW9mIG9wdGlvbnMudmlzaWJsZVRlc3QgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy52aXNpYmxlVGVzdCA6IHRydWVcclxuICAgICAgICB0aGlzLnNpbXBsZVRlc3QgPSB0eXBlb2Ygb3B0aW9ucy5zaW1wbGVUZXN0ICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2ltcGxlVGVzdCA6IHRydWVcclxuICAgICAgICB0aGlzLmRpcnR5VGVzdCA9IHR5cGVvZiBvcHRpb25zLmRpcnR5VGVzdCAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmRpcnR5VGVzdCA6IHRydWVcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBvcHRpb25zLnZpc2libGUgfHwgJ3Zpc2libGUnXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IG9wdGlvbnMuZGlydHkgfHwgJ2RpcnR5J1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmhlaWdodCA9IDBcclxuICAgICAgICB0aGlzLmhhc2ggPSB7fVxyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBhbiBvYmplY3QgdG8gYmUgY3VsbGVkXHJcbiAgICAgKiBzaWRlIGVmZmVjdDogYWRkcyBvYmplY3Quc3BhdGlhbEhhc2hlcyB0byB0cmFjayBleGlzdGluZyBoYXNoZXNcclxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0aWNPYmplY3RdIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QncyBwb3NpdGlvbi9zaXplIGRvZXMgbm90IGNoYW5nZVxyXG4gICAgICogQHJldHVybiB7Kn0gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGFkZChvYmplY3QsIHN0YXRpY09iamVjdClcclxuICAgIHtcclxuICAgICAgICBvYmplY3RbdGhpcy5zcGF0aWFsXSA9IHsgaGFzaGVzOiBbXSB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FsY3VsYXRlUElYSSAmJiB0aGlzLmRpcnR5VGVzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdFt0aGlzLmRpcnR5XSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXRpY09iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdC5zdGF0aWNPYmplY3QgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlT2JqZWN0KG9iamVjdClcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNbMF0ucHVzaChvYmplY3QpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgYW4gb2JqZWN0IGFkZGVkIGJ5IGFkZCgpXHJcbiAgICAgKiBAcGFyYW0geyp9IG9iamVjdFxyXG4gICAgICogQHJldHVybiB7Kn0gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZShvYmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzWzBdLnNwbGljZSh0aGlzLmxpc3RbMF0uaW5kZXhPZihvYmplY3QpLCAxKVxyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUhhc2gob2JqZWN0KVxyXG4gICAgICAgIHJldHVybiBvYmplY3RcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBhbiBhcnJheSBvZiBvYmplY3RzIHRvIGJlIGN1bGxlZFxyXG4gICAgICogQHBhcmFtIHtQSVhJLkNvbnRhaW5lcn0gY29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0aWNPYmplY3RdIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3RzIGluIHRoZSBjb250YWluZXIncyBwb3NpdGlvbi9zaXplIGRvIG5vdCBjaGFuZ2VcclxuICAgICAqIG5vdGU6IHRoaXMgb25seSB3b3JrcyB3aXRoIHBpeGkgdjUuMC4wcmMyKyBiZWNhdXNlIGl0IHJlbGllcyBvbiB0aGUgbmV3IGNvbnRhaW5lciBldmVudHMgY2hpbGRBZGRlZCBhbmQgY2hpbGRSZW1vdmVkXHJcbiAgICAgKi9cclxuICAgIGFkZENvbnRhaW5lcihjb250YWluZXIsIHN0YXRpY09iamVjdClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBhZGRlZCA9IGZ1bmN0aW9uKG9iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdFt0aGlzLnNwYXRpYWxdID0geyBoYXNoZXM6IFtdIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgIH0uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVkID0gZnVuY3Rpb24gKG9iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUhhc2gob2JqZWN0KVxyXG4gICAgICAgIH0uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgY29udGFpbmVyLmNoaWxkcmVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2JqZWN0W3RoaXMuc3BhdGlhbF0gPSB7IGhhc2hlczogW10gfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdChvYmplY3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5jdWxsID0ge31cclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpXHJcbiAgICAgICAgY29udGFpbmVyLm9uKCdjaGlsZEFkZGVkJywgYWRkZWQpXHJcbiAgICAgICAgY29udGFpbmVyLm9uKCdjaGlsZFJlbW92ZWQnLCByZW1vdmVkKVxyXG4gICAgICAgIGNvbnRhaW5lci5jdWxsLmFkZGVkID0gYWRkZWRcclxuICAgICAgICBjb250YWluZXIuY3VsbC5yZW1vdmVkID0gcmVtb3ZlZFxyXG4gICAgICAgIGlmIChzdGF0aWNPYmplY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250YWluZXIuY3VsbC5zdGF0aWMgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGFuIGFycmF5IGFkZGVkIGJ5IGFkZENvbnRhaW5lcigpXHJcbiAgICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXJcclxuICAgICAqIEByZXR1cm4ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQ29udGFpbmVyKGNvbnRhaW5lcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuc3BsaWNlKHRoaXMuY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpXHJcbiAgICAgICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2gob2JqZWN0ID0+IHRoaXMucmVtb3ZlRnJvbUhhc2gob2JqZWN0KSlcclxuICAgICAgICBjb250YWluZXIub2ZmKCdhZGRlZCcsIGNvbnRhaW5lci5jdWxsLmFkZGVkKVxyXG4gICAgICAgIGNvbnRhaW5lci5vZmYoJ3JlbW92ZWQnLCBjb250YWluZXIuY3VsbC5yZW1vdmVkKVxyXG4gICAgICAgIGRlbGV0ZSBjb250YWluZXIuY3VsbFxyXG4gICAgICAgIHJldHVybiBjb250YWluZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHVwZGF0ZSB0aGUgaGFzaGVzIGFuZCBjdWxsIHRoZSBpdGVtcyBpbiB0aGUgbGlzdFxyXG4gICAgICogQHBhcmFtIHtBQUJCfSBBQUJCXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwVXBkYXRlXSBza2lwIHVwZGF0aW5nIHRoZSBoYXNoZXMgb2YgYWxsIG9iamVjdHNcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gbnVtYmVyIG9mIGJ1Y2tldHMgaW4gcmVzdWx0c1xyXG4gICAgICovXHJcbiAgICBjdWxsKEFBQkIsIHNraXBVcGRhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFza2lwVXBkYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3RzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnZpc2libGUoKVxyXG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSB0aGlzLnF1ZXJ5KEFBQkIsIHRoaXMuc2ltcGxlVGVzdClcclxuICAgICAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdFt0aGlzLnZpc2libGVdID0gdHJ1ZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0QnVja2V0c1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IGFsbCBvYmplY3RzIGluIGhhc2ggdG8gdmlzaWJsZT1mYWxzZVxyXG4gICAgICovXHJcbiAgICBpbnZpc2libGUoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGNvbnRhaW5lciBvZiB0aGlzLmNvbnRhaW5lcnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0W3RoaXMudmlzaWJsZV0gPSBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cGRhdGUgdGhlIGhhc2hlcyBmb3IgYWxsIG9iamVjdHNcclxuICAgICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGZyb20gdXBkYXRlKCkgd2hlbiBza2lwVXBkYXRlPWZhbHNlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU9iamVjdHMoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5VGVzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiB0aGlzLm9iamVjdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RbdGhpcy5kaXJ0eV0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFt0aGlzLmRpcnR5XSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgY29udGFpbmVyIG9mIHRoaXMuY29udGFpbmVycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIGNvbnRhaW5lci5jaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0W3RoaXMuZGlydHldKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbdGhpcy5kaXJ0eV0gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb250YWluZXIgb2YgdGhpcy5jb250YWluZXJzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5jdWxsLnN0YXRpYylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChvYmplY3QgPT4gdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHVwZGF0ZSB0aGUgaGFzIG9mIGFuIG9iamVjdFxyXG4gICAgICogYXV0b21hdGljYWxseSBjYWxsZWQgZnJvbSB1cGRhdGVPYmplY3RzKClcclxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gZm9yY2UgdXBkYXRlIGZvciBjYWxjdWxhdGVQSVhJXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU9iamVjdChvYmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IEFBQkJcclxuICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVQSVhJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gb2JqZWN0LmdldExvY2FsQm91bmRzKClcclxuICAgICAgICAgICAgQUFCQiA9IG9iamVjdFt0aGlzLkFBQkJdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogb2JqZWN0LnggKyBib3gueCAqIG9iamVjdC5zY2FsZS54LFxyXG4gICAgICAgICAgICAgICAgeTogb2JqZWN0LnkgKyBib3gueSAqIG9iamVjdC5zY2FsZS55LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIG9iamVjdC5zY2FsZS54LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0ICogb2JqZWN0LnNjYWxlLnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBQUJCID0gb2JqZWN0W3RoaXMuQUFCQl1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzcGF0aWFsID0gb2JqZWN0W3RoaXMuc3BhdGlhbF1cclxuICAgICAgICBpZiAoIXNwYXRpYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzcGF0aWFsID0gb2JqZWN0W3RoaXMuc3BhdGlhbF0gPSB7IGhhc2hlczogW10gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHhTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kIH0gPSB0aGlzLmdldEJvdW5kcyhBQUJCKVxyXG5cclxuICAgICAgICAvLyBvbmx5IHJlbW92ZSBhbmQgaW5zZXJ0IGlmIG1hcHBpbmcgaGFzIGNoYW5nZWRcclxuICAgICAgICBpZiAoc3BhdGlhbC54U3RhcnQgIT09IHhTdGFydCB8fCBzcGF0aWFsLnlTdGFydCAhPT0geVN0YXJ0IHx8IHNwYXRpYWwueEVuZCAhPT0geEVuZCB8fCBzcGF0aWFsLnlFbmQgIT09IHlFbmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc3BhdGlhbC5oYXNoZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21IYXNoKG9iamVjdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDw9IHlFbmQ7IHkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhTdGFydDsgeCA8PSB4RW5kOyB4KyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0geCArICcsJyArIHlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydChvYmplY3QsIGtleSlcclxuICAgICAgICAgICAgICAgICAgICBzcGF0aWFsLmhhc2hlcy5wdXNoKGtleSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGF0aWFsLnhTdGFydCA9IHhTdGFydFxyXG4gICAgICAgICAgICBzcGF0aWFsLnlTdGFydCA9IHlTdGFydFxyXG4gICAgICAgICAgICBzcGF0aWFsLnhFbmQgPSB4RW5kXHJcbiAgICAgICAgICAgIHNwYXRpYWwueUVuZCA9IHlFbmRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIGJ1Y2tldHMgd2l0aCA+PSBtaW5pbXVtIG9mIG9iamVjdHMgaW4gZWFjaCBidWNrZXRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluaW11bT0xXVxyXG4gICAgICogQHJldHVybiB7YXJyYXl9IGFycmF5IG9mIGJ1Y2tldHNcclxuICAgICAqL1xyXG4gICAgZ2V0QnVja2V0cyhtaW5pbXVtPTEpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGFzaGVzID0gW11cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5oYXNoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IHRoaXMuaGFzaFtrZXldXHJcbiAgICAgICAgICAgIGlmIChoYXNoLmxlbmd0aCA+PSBtaW5pbXVtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNoZXMucHVzaChoYXNoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXNoZXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHMgaGFzaCBib3VuZHNcclxuICAgICAqIEBwYXJhbSB7QUFCQn0gQUFCQlxyXG4gICAgICogQHJldHVybiB7Qm91bmRzfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZ2V0Qm91bmRzKEFBQkIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHhTdGFydCA9IE1hdGguZmxvb3IoQUFCQi54IC8gdGhpcy54U2l6ZSlcclxuICAgICAgICBsZXQgeVN0YXJ0ID0gTWF0aC5mbG9vcihBQUJCLnkgLyB0aGlzLnlTaXplKVxyXG4gICAgICAgIGxldCB4RW5kID0gTWF0aC5mbG9vcigoQUFCQi54ICsgQUFCQi53aWR0aCkgLyB0aGlzLnhTaXplKVxyXG4gICAgICAgIGxldCB5RW5kID0gTWF0aC5mbG9vcigoQUFCQi55ICsgQUFCQi5oZWlnaHQpIC8gdGhpcy55U2l6ZSlcclxuICAgICAgICByZXR1cm4geyB4U3RhcnQsIHlTdGFydCwgeEVuZCwgeUVuZCB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbnNlcnQgb2JqZWN0IGludG8gdGhlIHNwYXRpYWwgaGFzaFxyXG4gICAgICogYXV0b21hdGljYWxseSBjYWxsZWQgZnJvbSB1cGRhdGVPYmplY3QoKVxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0KG9iamVjdCwga2V5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNoW2tleV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmhhc2hba2V5XSA9IFtvYmplY3RdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzaFtrZXldLnB1c2gob2JqZWN0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZXMgb2JqZWN0IGZyb20gdGhlIGhhc2ggdGFibGVcclxuICAgICAqIHNob3VsZCBiZSBjYWxsZWQgd2hlbiByZW1vdmluZyBhbiBvYmplY3RcclxuICAgICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGZyb20gdXBkYXRlT2JqZWN0KClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlRnJvbUhhc2gob2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNwYXRpYWwgPSBvYmplY3RbdGhpcy5zcGF0aWFsXVxyXG4gICAgICAgIHdoaWxlIChzcGF0aWFsLmhhc2hlcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzcGF0aWFsLmhhc2hlcy5wb3AoKVxyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYXNoW2tleV1cclxuICAgICAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKG9iamVjdCksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGFsbCBuZWlnaGJvcnMgdGhhdCBzaGFyZSB0aGUgc2FtZSBoYXNoIGFzIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3QgaW4gdGhlIHNwYXRpYWwgaGFzaFxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IG9mIG9iamVjdHMgdGhhdCBhcmUgaW4gdGhlIHNhbWUgaGFzaCBhcyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgbmVpZ2hib3JzKG9iamVjdClcclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdXHJcbiAgICAgICAgb2JqZWN0W3RoaXMuc3BhdGlhbF0uaGFzaGVzLmZvckVhY2goa2V5ID0+IHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdCh0aGlzLmhhc2hba2V5XSkpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluZWQgd2l0aGluIGJvdW5kaW5nIGJveFxyXG4gICAgICogQHBhcmFtIHtBQUJCfSBBQUJCIGJvdW5kaW5nIGJveCB0byBzZWFyY2hcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbXBsZVRlc3Q9dHJ1ZV0gcGVyZm9ybSBhIHNpbXBsZSBib3VuZHMgY2hlY2sgb2YgYWxsIGl0ZW1zIGluIHRoZSBidWNrZXRzXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gc2VhcmNoIHJlc3VsdHNcclxuICAgICAqL1xyXG4gICAgcXVlcnkoQUFCQiwgc2ltcGxlVGVzdClcclxuICAgIHtcclxuICAgICAgICBzaW1wbGVUZXN0ID0gdHlwZW9mIHNpbXBsZVRlc3QgIT09ICd1bmRlZmluZWQnID8gc2ltcGxlVGVzdCA6IHRydWVcclxuICAgICAgICBsZXQgYnVja2V0cyA9IDBcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdXHJcbiAgICAgICAgY29uc3QgeyB4U3RhcnQsIHlTdGFydCwgeEVuZCwgeUVuZCB9ID0gdGhpcy5nZXRCb3VuZHMoQUFCQilcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDw9IHlFbmQ7IHkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB4U3RhcnQ7IHggPD0geEVuZDsgeCsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuaGFzaFt4ICsgJywnICsgeV1cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2ltcGxlVGVzdClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBlbnRyeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm94ID0gb2JqZWN0W3RoaXMuQUFCQl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3gueCArIGJveC53aWR0aCA+IEFBQkIueCAmJiBib3gueCA8IEFBQkIueCArIEFBQkIud2lkdGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC55ICsgYm94LmhlaWdodCA+IEFBQkIueSAmJiBib3gueSA8IEFBQkIueSArIEFBQkIuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChvYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KGVudHJ5KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidWNrZXRzKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RCdWNrZXRzID0gYnVja2V0c1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpdGVyYXRlcyB0aHJvdWdoIG9iamVjdHMgY29udGFpbmVkIHdpdGhpbiBib3VuZGluZyBib3hcclxuICAgICAqIHN0b3BzIGl0ZXJhdGluZyBpZiB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlXHJcbiAgICAgKiBAcGFyYW0ge0FBQkJ9IEFBQkIgYm91bmRpbmcgYm94IHRvIHNlYXJjaFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbXBsZVRlc3Q9dHJ1ZV0gcGVyZm9ybSBhIHNpbXBsZSBib3VuZHMgY2hlY2sgb2YgYWxsIGl0ZW1zIGluIHRoZSBidWNrZXRzXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGNhbGxiYWNrIHJldHVybmVkIGVhcmx5XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5Q2FsbGJhY2soQUFCQiwgY2FsbGJhY2ssIHNpbXBsZVRlc3QpXHJcbiAgICB7XHJcbiAgICAgICAgc2ltcGxlVGVzdCA9IHR5cGVvZiBzaW1wbGVUZXN0ICE9PSAndW5kZWZpbmVkJyA/IHNpbXBsZVRlc3QgOiB0cnVlXHJcbiAgICAgICAgY29uc3QgeyB4U3RhcnQsIHlTdGFydCwgeEVuZCwgeUVuZCB9ID0gdGhpcy5nZXRCb3VuZHMoQUFCQilcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDw9IHlFbmQ7IHkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB4U3RhcnQ7IHggPD0geEVuZDsgeCsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuaGFzaFt4ICsgJywnICsgeV1cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJ5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gZW50cnlbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpbXBsZVRlc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEFBQkIgPSBvYmplY3QuQUFCQlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFBQkIueCArIEFBQkIud2lkdGggPiBBQUJCLnggJiYgQUFCQi54IDwgQUFCQi54ICsgQUFCQi53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQUFCQi55ICsgQUFCQi5oZWlnaHQgPiBBQUJCLnkgJiYgQUFCQi55IDwgQUFCQi55ICsgQUFCQi5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKG9iamVjdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhvYmplY3QpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgc3RhdHNcclxuICAgICAqIEByZXR1cm4ge1N0YXRzfVxyXG4gICAgICovXHJcbiAgICBzdGF0cygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZpc2libGUgPSAwLCBjb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMuY29udGFpbmVycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gbGlzdC5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSArPSBvYmplY3QudmlzaWJsZSA/IDEgOiAwXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG90YWw6IGNvdW50LFxyXG4gICAgICAgICAgICB2aXNpYmxlLFxyXG4gICAgICAgICAgICBjdWxsZWQ6IGNvdW50IC0gdmlzaWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlbHBlciBmdW5jdGlvbiB0byBldmFsdWF0ZSBoYXNoIHRhYmxlXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgYnVja2V0cyBpbiB0aGUgaGFzaCB0YWJsZVxyXG4gICAgICogKi9cclxuICAgIGdldE51bWJlck9mQnVja2V0cygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFzaCkubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gZXZhbHVhdGUgaGFzaCB0YWJsZVxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgYXZlcmFnZSBudW1iZXIgb2YgZW50cmllcyBpbiBlYWNoIGJ1Y2tldFxyXG4gICAgICovXHJcbiAgICBnZXRBdmVyYWdlU2l6ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmhhc2gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b3RhbCArPSB0aGlzLmhhc2hba2V5XS5sZW5ndGhcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsIC8gdGhpcy5nZXRCdWNrZXRzKCkubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gZXZhbHVhdGUgdGhlIGhhc2ggdGFibGVcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGxhcmdlc3Qgc2l6ZWQgYnVja2V0XHJcbiAgICAgKi9cclxuICAgIGdldExhcmdlc3QoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsYXJnZXN0ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmhhc2gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNoW2tleV0ubGVuZ3RoID4gbGFyZ2VzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VzdCA9IHRoaXMuaGFzaFtrZXldLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYXJnZXN0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIHF1YWRyYW50IGJvdW5kc1xyXG4gICAgICogQHJldHVybiB7Qm91bmRzfVxyXG4gICAgICovXHJcbiAgICBnZXRXb3JsZEJvdW5kcygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHhTdGFydCA9IEluZmluaXR5LCB5U3RhcnQgPSBJbmZpbml0eSwgeEVuZCA9IDAsIHlFbmQgPSAwXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFzaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0ga2V5LnNwbGl0KCcsJylcclxuICAgICAgICAgICAgbGV0IHggPSBwYXJzZUludChzcGxpdFswXSlcclxuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChzcGxpdFsxXSlcclxuICAgICAgICAgICAgeFN0YXJ0ID0geCA8IHhTdGFydCA/IHggOiB4U3RhcnRcclxuICAgICAgICAgICAgeVN0YXJ0ID0geSA8IHlTdGFydCA/IHkgOiB5U3RhcnRcclxuICAgICAgICAgICAgeEVuZCA9IHggPiB4RW5kID8geCA6IHhFbmRcclxuICAgICAgICAgICAgeUVuZCA9IHkgPiB5RW5kID8geSA6IHlFbmRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgeFN0YXJ0LCB5U3RhcnQsIHhFbmQsIHlFbmQgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGVscGVyIGZ1bmN0aW9uIHRvIGV2YWx1dGUgdGhlIGhhc2ggdGFibGVcclxuICAgICAqIEBwYXJhbSB7QUFCQn0gW0FBQkJdIGJvdW5kaW5nIGJveCB0byBzZWFyY2ggb3IgZW50aXJlIHdvcmxkXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHNwYXJzZW5lc3MgcGVyY2VudGFnZSAoaS5lLiwgYnVja2V0cyB3aXRoIGF0IGxlYXN0IDEgZWxlbWVudCBkaXZpZGVkIGJ5IHRvdGFsIHBvc3NpYmxlIGJ1Y2tldHMpXHJcbiAgICAgKi9cclxuICAgIGdldFNwYXJzZW5lc3MoQUFCQilcclxuICAgIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwLCB0b3RhbCA9IDBcclxuICAgICAgICBjb25zdCB7IHhTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kIH0gPSBBQUJCID8gdGhpcy5nZXRCb3VuZHMoQUFCQikgOiB0aGlzLmdldFdvcmxkQm91bmRzKClcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDwgeUVuZDsgeSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhTdGFydDsgeCA8IHhFbmQ7IHgrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY291bnQgKz0gKHRoaXMuaGFzaFt4ICsgJywnICsgeV0gPyAxIDogMClcclxuICAgICAgICAgICAgICAgIHRvdGFsKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY291bnQgLyB0b3RhbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gU3RhdHNcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvdGFsXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB2aXNpYmxlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdWxsZWRcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gQm91bmRzXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4U3RhcnRcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlTdGFydFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0geEVuZFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0geEVuZFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gICogQHR5cGVkZWYge29iamVjdH0gQUFCQlxyXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IHhcclxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5XHJcbiAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGhcclxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHRcclxuICAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTcGF0aWFsSGFzaCJdfQ==

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/resource-loader/dist/resource-loader.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Resource; });
/* unused harmony export async */
/* unused harmony export encodeBinary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return index; });
/* harmony import */ var parse_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/parse-uri/index.js");
/* harmony import */ var parse_uri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse_uri__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mini_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/mini-signals/lib/mini-signals.js");
/* harmony import */ var mini_signals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mini_signals__WEBPACK_IMPORTED_MODULE_1__);
/*!
 * resource-loader - v3.0.1
 * https://github.com/pixijs/pixi-sound
 * Compiled Tue, 02 Jul 2019 14:06:18 UTC
 *
 * resource-loader is licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license
 */



/**
 * Smaller version of the async library constructs.
 *
 * @namespace async
 */

/**
 * Noop function
 *
 * @ignore
 * @function
 * @memberof async
 */
function _noop() {}
/* empty */

/**
 * Iterates an array in series.
 *
 * @memberof async
 * @function eachSeries
 * @param {Array.<*>} array - Array to iterate.
 * @param {function} iterator - Function to call for each element.
 * @param {function} callback - Function to call when done, or on error.
 * @param {boolean} [deferNext=false] - Break synchronous each loop by calling next with a setTimeout of 1.
 */


function eachSeries(array, iterator, callback, deferNext) {
  var i = 0;
  var len = array.length;

  (function next(err) {
    if (err || i === len) {
      if (callback) {
        callback(err);
      }

      return;
    }

    if (deferNext) {
      setTimeout(function () {
        iterator(array[i++], next);
      }, 1);
    } else {
      iterator(array[i++], next);
    }
  })();
}
/**
 * Ensures a function is only called once.
 *
 * @ignore
 * @memberof async
 * @param {function} fn - The function to wrap.
 * @return {function} The wrapping function.
 */

function onlyOnce(fn) {
  return function onceWrapper() {
    if (fn === null) {
      throw new Error('Callback was already called.');
    }

    var callFn = fn;
    fn = null;
    callFn.apply(this, arguments);
  };
}
/**
 * Async queue implementation,
 *
 * @memberof async
 * @function queue
 * @param {function} worker - The worker function to call for each task.
 * @param {number} concurrency - How many workers to run in parrallel.
 * @return {*} The async queue object.
 */


function queue(worker, concurrency) {
  if (concurrency == null) {
    // eslint-disable-line no-eq-null,eqeqeq
    concurrency = 1;
  } else if (concurrency === 0) {
    throw new Error('Concurrency must not be zero');
  }

  var workers = 0;
  var q = {
    _tasks: [],
    concurrency: concurrency,
    saturated: _noop,
    unsaturated: _noop,
    buffer: concurrency / 4,
    empty: _noop,
    drain: _noop,
    error: _noop,
    started: false,
    paused: false,
    push: function push(data, callback) {
      _insert(data, false, callback);
    },
    kill: function kill() {
      workers = 0;
      q.drain = _noop;
      q.started = false;
      q._tasks = [];
    },
    unshift: function unshift(data, callback) {
      _insert(data, true, callback);
    },
    process: function process() {
      while (!q.paused && workers < q.concurrency && q._tasks.length) {
        var task = q._tasks.shift();

        if (q._tasks.length === 0) {
          q.empty();
        }

        workers += 1;

        if (workers === q.concurrency) {
          q.saturated();
        }

        worker(task.data, onlyOnce(_next(task)));
      }
    },
    length: function length() {
      return q._tasks.length;
    },
    running: function running() {
      return workers;
    },
    idle: function idle() {
      return q._tasks.length + workers === 0;
    },
    pause: function pause() {
      if (q.paused === true) {
        return;
      }

      q.paused = true;
    },
    resume: function resume() {
      if (q.paused === false) {
        return;
      }

      q.paused = false; // Need to call q.process once per concurrent
      // worker to preserve full concurrency after pause

      for (var w = 1; w <= q.concurrency; w++) {
        q.process();
      }
    }
  };

  function _insert(data, insertAtFront, callback) {
    if (callback != null && typeof callback !== 'function') {
      // eslint-disable-line no-eq-null,eqeqeq
      throw new Error('task callback must be a function');
    }

    q.started = true;

    if (data == null && q.idle()) {
      // eslint-disable-line no-eq-null,eqeqeq
      // call drain immediately if there are no tasks
      setTimeout(function () {
        return q.drain();
      }, 1);
      return;
    }

    var item = {
      data: data,
      callback: typeof callback === 'function' ? callback : _noop
    };

    if (insertAtFront) {
      q._tasks.unshift(item);
    } else {
      q._tasks.push(item);
    }

    setTimeout(function () {
      return q.process();
    }, 1);
  }

  function _next(task) {
    return function next() {
      workers -= 1;
      task.callback.apply(task, arguments);

      if (arguments[0] != null) {
        // eslint-disable-line no-eq-null,eqeqeq
        q.error(arguments[0], task.data);
      }

      if (workers <= q.concurrency - q.buffer) {
        q.unsaturated();
      }

      if (q.idle()) {
        q.drain();
      }

      q.process();
    };
  }

  return q;
}

var async = ({
    eachSeries: eachSeries,
    queue: queue
});

// a simple in-memory cache for resources
var cache = {};
/**
 * A simple in-memory cache for resource.
 *
 * @memberof middleware
 * @function caching
 * @example
 * import { Loader, middleware } from 'resource-loader';
 * const loader = new Loader();
 * loader.use(middleware.caching);
 * @param {Resource} resource - Current Resource
 * @param {function} next - Callback when complete
 */

function caching(resource, next) {
  var _this = this;

  // if cached, then set data and complete the resource
  if (cache[resource.url]) {
    resource.data = cache[resource.url];
    resource.complete(); // marks resource load complete and stops processing before middlewares
  } // if not cached, wait for complete and store it in the cache.
  else {
      resource.onComplete.once(function () {
        return cache[_this.url] = _this.data;
      });
    }

  next();
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

var useXdr = !!(window.XDomainRequest && !('withCredentials' in new XMLHttpRequest()));
var tempAnchor = null; // some status constants

var STATUS_NONE = 0;
var STATUS_OK = 200;
var STATUS_EMPTY = 204;
var STATUS_IE_BUG_EMPTY = 1223;
var STATUS_TYPE_OK = 2; // noop

function _noop$1() {}
/* empty */

/**
 * Manages the state and loading of a resource and all child resources.
 *
 * @class
 */


var Resource =
/*#__PURE__*/
function () {
  /**
   * Sets the load type to be used for a specific extension.
   *
   * @static
   * @param {string} extname - The extension to set the type for, e.g. "png" or "fnt"
   * @param {Resource.LOAD_TYPE} loadType - The load type to set it to.
   */
  Resource.setExtensionLoadType = function setExtensionLoadType(extname, loadType) {
    setExtMap(Resource._loadTypeMap, extname, loadType);
  }
  /**
   * Sets the load type to be used for a specific extension.
   *
   * @static
   * @param {string} extname - The extension to set the type for, e.g. "png" or "fnt"
   * @param {Resource.XHR_RESPONSE_TYPE} xhrType - The xhr type to set it to.
   */
  ;

  Resource.setExtensionXhrType = function setExtensionXhrType(extname, xhrType) {
    setExtMap(Resource._xhrTypeMap, extname, xhrType);
  }
  /**
   * @param {string} name - The name of the resource to load.
   * @param {string|string[]} url - The url for this resource, for audio/video loads you can pass
   *      an array of sources.
   * @param {object} [options] - The options for the load.
   * @param {string|boolean} [options.crossOrigin] - Is this request cross-origin? Default is to
   *      determine automatically.
   * @param {number} [options.timeout=0] - A timeout in milliseconds for the load. If the load takes
   *      longer than this time it is cancelled and the load is considered a failure. If this value is
   *      set to `0` then there is no explicit timeout.
   * @param {Resource.LOAD_TYPE} [options.loadType=Resource.LOAD_TYPE.XHR] - How should this resource
   *      be loaded?
   * @param {Resource.XHR_RESPONSE_TYPE} [options.xhrType=Resource.XHR_RESPONSE_TYPE.DEFAULT] - How
   *      should the data being loaded be interpreted when using XHR?
   * @param {Resource.IMetadata} [options.metadata] - Extra configuration for middleware and the Resource object.
   */
  ;

  function Resource(name, url, options) {
    if (typeof name !== 'string' || typeof url !== 'string') {
      throw new Error('Both name and url are required for constructing a resource.');
    }

    options = options || {};
    /**
     * The state flags of this resource.
     *
     * @private
     * @member {number}
     */

    this._flags = 0; // set data url flag, needs to be set early for some _determineX checks to work.

    this._setFlag(Resource.STATUS_FLAGS.DATA_URL, url.indexOf('data:') === 0);
    /**
     * The name of this resource.
     *
     * @readonly
     * @member {string}
     */


    this.name = name;
    /**
     * The url used to load this resource.
     *
     * @readonly
     * @member {string}
     */

    this.url = url;
    /**
     * The extension used to load this resource.
     *
     * @readonly
     * @member {string}
     */

    this.extension = this._getExtension();
    /**
     * The data that was loaded by the resource.
     *
     * @member {any}
     */

    this.data = null;
    /**
     * Is this request cross-origin? If unset, determined automatically.
     *
     * @member {string}
     */

    this.crossOrigin = options.crossOrigin === true ? 'anonymous' : options.crossOrigin;
    /**
     * A timeout in milliseconds for the load. If the load takes longer than this time
     * it is cancelled and the load is considered a failure. If this value is set to `0`
     * then there is no explicit timeout.
     *
     * @member {number}
     */

    this.timeout = options.timeout || 0;
    /**
     * The method of loading to use for this resource.
     *
     * @member {Resource.LOAD_TYPE}
     */

    this.loadType = options.loadType || this._determineLoadType();
    /**
     * The type used to load the resource via XHR. If unset, determined automatically.
     *
     * @member {string}
     */

    this.xhrType = options.xhrType;
    /**
     * Extra info for middleware, and controlling specifics about how the resource loads.
     *
     * Note that if you pass in a `loadElement`, the Resource class takes ownership of it.
     * Meaning it will modify it as it sees fit.
     *
     * @member {Resource.IMetadata}
     */

    this.metadata = options.metadata || {};
    /**
     * The error that occurred while loading (if any).
     *
     * @readonly
     * @member {Error}
     */

    this.error = null;
    /**
     * The XHR object that was used to load this resource. This is only set
     * when `loadType` is `Resource.LOAD_TYPE.XHR`.
     *
     * @readonly
     * @member {XMLHttpRequest}
     */

    this.xhr = null;
    /**
     * The child resources this resource owns.
     *
     * @readonly
     * @member {Resource[]}
     */

    this.children = [];
    /**
     * The resource type.
     *
     * @readonly
     * @member {Resource.TYPE}
     */

    this.type = Resource.TYPE.UNKNOWN;
    /**
     * The progress chunk owned by this resource.
     *
     * @readonly
     * @member {number}
     */

    this.progressChunk = 0;
    /**
     * The `dequeue` method that will be used a storage place for the async queue dequeue method
     * used privately by the loader.
     *
     * @private
     * @member {function}
     */

    this._dequeue = _noop$1;
    /**
     * Used a storage place for the on load binding used privately by the loader.
     *
     * @private
     * @member {function}
     */

    this._onLoadBinding = null;
    /**
     * The timer for element loads to check if they timeout.
     *
     * @private
     * @member {number}
     */

    this._elementTimer = 0;
    /**
     * The `complete` function bound to this resource's context.
     *
     * @private
     * @member {function}
     */

    this._boundComplete = this.complete.bind(this);
    /**
     * The `_onError` function bound to this resource's context.
     *
     * @private
     * @member {function}
     */

    this._boundOnError = this._onError.bind(this);
    /**
     * The `_onProgress` function bound to this resource's context.
     *
     * @private
     * @member {function}
     */

    this._boundOnProgress = this._onProgress.bind(this);
    /**
     * The `_onTimeout` function bound to this resource's context.
     *
     * @private
     * @member {function}
     */

    this._boundOnTimeout = this._onTimeout.bind(this); // xhr callbacks

    this._boundXhrOnError = this._xhrOnError.bind(this);
    this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this);
    this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
    this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
    /**
     * Dispatched when the resource beings to load.
     *
     * The callback looks like {@link Resource.OnStartSignal}.
     *
     * @member {Signal<Resource.OnStartSignal>}
     */

    this.onStart = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
    /**
     * Dispatched each time progress of this resource load updates.
     * Not all resources types and loader systems can support this event
     * so sometimes it may not be available. If the resource
     * is being loaded on a modern browser, using XHR, and the remote server
     * properly sets Content-Length headers, then this will be available.
     *
     * The callback looks like {@link Resource.OnProgressSignal}.
     *
     * @member {Signal<Resource.OnProgressSignal>}
     */

    this.onProgress = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
    /**
     * Dispatched once this resource has loaded, if there was an error it will
     * be in the `error` property.
     *
     * The callback looks like {@link Resource.OnCompleteSignal}.
     *
     * @member {Signal<Resource.OnCompleteSignal>}
     */

    this.onComplete = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
    /**
     * Dispatched after this resource has had all the *after* middleware run on it.
     *
     * The callback looks like {@link Resource.OnCompleteSignal}.
     *
     * @member {Signal<Resource.OnCompleteSignal>}
     */

    this.onAfterMiddleware = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
  }
  /**
   * When the resource starts to load.
   *
   * @memberof Resource
   * @callback OnStartSignal
   * @param {Resource} resource - The resource that the event happened on.
   */

  /**
   * When the resource reports loading progress.
   *
   * @memberof Resource
   * @callback OnProgressSignal
   * @param {Resource} resource - The resource that the event happened on.
   * @param {number} percentage - The progress of the load in the range [0, 1].
   */

  /**
   * When the resource finishes loading.
   *
   * @memberof Resource
   * @callback OnCompleteSignal
   * @param {Resource} resource - The resource that the event happened on.
   */

  /**
   * @memberof Resource
   * @typedef {object} IMetadata
   * @property {HTMLImageElement|HTMLAudioElement|HTMLVideoElement} [loadElement=null] - The
   *      element to use for loading, instead of creating one.
   * @property {boolean} [skipSource=false] - Skips adding source(s) to the load element. This
   *      is useful if you want to pass in a `loadElement` that you already added load sources to.
   * @property {string|string[]} [mimeType] - The mime type to use for the source element
   *      of a video/audio elment. If the urls are an array, you can pass this as an array as well
   *      where each index is the mime type to use for the corresponding url index.
   */

  /**
   * Stores whether or not this url is a data url.
   *
   * @readonly
   * @member {boolean}
   */


  var _proto = Resource.prototype;

  /**
   * Marks the resource as complete.
   *
   */
  _proto.complete = function complete() {
    this._clearEvents();

    this._finish();
  }
  /**
   * Aborts the loading of this resource, with an optional message.
   *
   * @param {string} message - The message to use for the error
   */
  ;

  _proto.abort = function abort(message) {
    // abort can be called multiple times, ignore subsequent calls.
    if (this.error) {
      return;
    } // store error


    this.error = new Error(message); // clear events before calling aborts

    this._clearEvents(); // abort the actual loading


    if (this.xhr) {
      this.xhr.abort();
    } else if (this.xdr) {
      this.xdr.abort();
    } else if (this.data) {
      // single source
      if (this.data.src) {
        this.data.src = Resource.EMPTY_GIF;
      } // multi-source
      else {
          while (this.data.firstChild) {
            this.data.removeChild(this.data.firstChild);
          }
        }
    } // done now.


    this._finish();
  }
  /**
   * Kicks off loading of this resource. This method is asynchronous.
   *
   * @param {Resource.OnCompleteSignal} [cb] - Optional callback to call once the resource is loaded.
   */
  ;

  _proto.load = function load(cb) {
    var _this = this;

    if (this.isLoading) {
      return;
    }

    if (this.isComplete) {
      if (cb) {
        setTimeout(function () {
          return cb(_this);
        }, 1);
      }

      return;
    } else if (cb) {
      this.onComplete.once(cb);
    }

    this._setFlag(Resource.STATUS_FLAGS.LOADING, true);

    this.onStart.dispatch(this); // if unset, determine the value

    if (this.crossOrigin === false || typeof this.crossOrigin !== 'string') {
      this.crossOrigin = this._determineCrossOrigin(this.url);
    }

    switch (this.loadType) {
      case Resource.LOAD_TYPE.IMAGE:
        this.type = Resource.TYPE.IMAGE;

        this._loadElement('image');

        break;

      case Resource.LOAD_TYPE.AUDIO:
        this.type = Resource.TYPE.AUDIO;

        this._loadSourceElement('audio');

        break;

      case Resource.LOAD_TYPE.VIDEO:
        this.type = Resource.TYPE.VIDEO;

        this._loadSourceElement('video');

        break;

      case Resource.LOAD_TYPE.XHR:
      /* falls through */

      default:
        if (useXdr && this.crossOrigin) {
          this._loadXdr();
        } else {
          this._loadXhr();
        }

        break;
    }
  }
  /**
   * Checks if the flag is set.
   *
   * @private
   * @param {number} flag - The flag to check.
   * @return {boolean} True if the flag is set.
   */
  ;

  _proto._hasFlag = function _hasFlag(flag) {
    return (this._flags & flag) !== 0;
  }
  /**
   * (Un)Sets the flag.
   *
   * @private
   * @param {number} flag - The flag to (un)set.
   * @param {boolean} value - Whether to set or (un)set the flag.
   */
  ;

  _proto._setFlag = function _setFlag(flag, value) {
    this._flags = value ? this._flags | flag : this._flags & ~flag;
  }
  /**
   * Clears all the events from the underlying loading source.
   *
   * @private
   */
  ;

  _proto._clearEvents = function _clearEvents() {
    clearTimeout(this._elementTimer);

    if (this.data && this.data.removeEventListener) {
      this.data.removeEventListener('error', this._boundOnError, false);
      this.data.removeEventListener('load', this._boundComplete, false);
      this.data.removeEventListener('progress', this._boundOnProgress, false);
      this.data.removeEventListener('canplaythrough', this._boundComplete, false);
    }

    if (this.xhr) {
      if (this.xhr.removeEventListener) {
        this.xhr.removeEventListener('error', this._boundXhrOnError, false);
        this.xhr.removeEventListener('timeout', this._boundXhrOnTimeout, false);
        this.xhr.removeEventListener('abort', this._boundXhrOnAbort, false);
        this.xhr.removeEventListener('progress', this._boundOnProgress, false);
        this.xhr.removeEventListener('load', this._boundXhrOnLoad, false);
      } else {
        this.xhr.onerror = null;
        this.xhr.ontimeout = null;
        this.xhr.onprogress = null;
        this.xhr.onload = null;
      }
    }
  }
  /**
   * Finalizes the load.
   *
   * @private
   */
  ;

  _proto._finish = function _finish() {
    if (this.isComplete) {
      throw new Error('Complete called again for an already completed resource.');
    }

    this._setFlag(Resource.STATUS_FLAGS.COMPLETE, true);

    this._setFlag(Resource.STATUS_FLAGS.LOADING, false);

    this.onComplete.dispatch(this);
  }
  /**
   * Loads this resources using an element that has a single source,
   * like an HTMLImageElement.
   *
   * @private
   * @param {string} type - The type of element to use.
   */
  ;

  _proto._loadElement = function _loadElement(type) {
    if (this.metadata.loadElement) {
      this.data = this.metadata.loadElement;
    } else if (type === 'image' && typeof window.Image !== 'undefined') {
      this.data = new Image();
    } else {
      this.data = document.createElement(type);
    }

    if (this.crossOrigin) {
      this.data.crossOrigin = this.crossOrigin;
    }

    if (!this.metadata.skipSource) {
      this.data.src = this.url;
    }

    this.data.addEventListener('error', this._boundOnError, false);
    this.data.addEventListener('load', this._boundComplete, false);
    this.data.addEventListener('progress', this._boundOnProgress, false);

    if (this.timeout) {
      this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
    }
  }
  /**
   * Loads this resources using an element that has multiple sources,
   * like an HTMLAudioElement or HTMLVideoElement.
   *
   * @private
   * @param {string} type - The type of element to use.
   */
  ;

  _proto._loadSourceElement = function _loadSourceElement(type) {
    if (this.metadata.loadElement) {
      this.data = this.metadata.loadElement;
    } else if (type === 'audio' && typeof window.Audio !== 'undefined') {
      this.data = new Audio();
    } else {
      this.data = document.createElement(type);
    }

    if (this.data === null) {
      this.abort("Unsupported element: " + type);
      return;
    }

    if (this.crossOrigin) {
      this.data.crossOrigin = this.crossOrigin;
    }

    if (!this.metadata.skipSource) {
      // support for CocoonJS Canvas+ runtime, lacks document.createElement('source')
      if (navigator.isCocoonJS) {
        this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
      } else if (Array.isArray(this.url)) {
        var mimeTypes = this.metadata.mimeType;

        for (var i = 0; i < this.url.length; ++i) {
          this.data.appendChild(this._createSource(type, this.url[i], Array.isArray(mimeTypes) ? mimeTypes[i] : mimeTypes));
        }
      } else {
        var _mimeTypes = this.metadata.mimeType;
        this.data.appendChild(this._createSource(type, this.url, Array.isArray(_mimeTypes) ? _mimeTypes[0] : _mimeTypes));
      }
    }

    this.data.addEventListener('error', this._boundOnError, false);
    this.data.addEventListener('load', this._boundComplete, false);
    this.data.addEventListener('progress', this._boundOnProgress, false);
    this.data.addEventListener('canplaythrough', this._boundComplete, false);
    this.data.load();

    if (this.timeout) {
      this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
    }
  }
  /**
   * Loads this resources using an XMLHttpRequest.
   *
   * @private
   */
  ;

  _proto._loadXhr = function _loadXhr() {
    // if unset, determine the value
    if (typeof this.xhrType !== 'string') {
      this.xhrType = this._determineXhrType();
    }

    var xhr = this.xhr = new XMLHttpRequest(); // set the request type and url

    xhr.open('GET', this.url, true);
    xhr.timeout = this.timeout; // load json as text and parse it ourselves. We do this because some browsers
    // *cough* safari *cough* can't deal with it.

    if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
      xhr.responseType = Resource.XHR_RESPONSE_TYPE.TEXT;
    } else {
      xhr.responseType = this.xhrType;
    }

    xhr.addEventListener('error', this._boundXhrOnError, false);
    xhr.addEventListener('timeout', this._boundXhrOnTimeout, false);
    xhr.addEventListener('abort', this._boundXhrOnAbort, false);
    xhr.addEventListener('progress', this._boundOnProgress, false);
    xhr.addEventListener('load', this._boundXhrOnLoad, false);
    xhr.send();
  }
  /**
   * Loads this resources using an XDomainRequest. This is here because we need to support IE9 (gross).
   *
   * @private
   */
  ;

  _proto._loadXdr = function _loadXdr() {
    // if unset, determine the value
    if (typeof this.xhrType !== 'string') {
      this.xhrType = this._determineXhrType();
    }

    var xdr = this.xhr = new XDomainRequest(); // eslint-disable-line no-undef
    // XDomainRequest has a few quirks. Occasionally it will abort requests
    // A way to avoid this is to make sure ALL callbacks are set even if not used
    // More info here: http://stackoverflow.com/questions/15786966/xdomainrequest-aborts-post-on-ie-9

    xdr.timeout = this.timeout || 5000; // XDR needs a timeout value or it breaks in IE9

    xdr.onerror = this._boundXhrOnError;
    xdr.ontimeout = this._boundXhrOnTimeout;
    xdr.onprogress = this._boundOnProgress;
    xdr.onload = this._boundXhrOnLoad;
    xdr.open('GET', this.url, true); // Note: The xdr.send() call is wrapped in a timeout to prevent an
    // issue with the interface where some requests are lost if multiple
    // XDomainRequests are being sent at the same time.
    // Some info here: https://github.com/photonstorm/phaser/issues/1248

    setTimeout(function () {
      return xdr.send();
    }, 1);
  }
  /**
   * Creates a source used in loading via an element.
   *
   * @private
   * @param {string} type - The element type (video or audio).
   * @param {string} url - The source URL to load from.
   * @param {string} [mime] - The mime type of the video
   * @return {HTMLSourceElement} The source element.
   */
  ;

  _proto._createSource = function _createSource(type, url, mime) {
    if (!mime) {
      mime = type + "/" + this._getExtension(url);
    }

    var source = document.createElement('source');
    source.src = url;
    source.type = mime;
    return source;
  }
  /**
   * Called if a load errors out.
   *
   * @param {Event} event - The error event from the element that emits it.
   * @private
   */
  ;

  _proto._onError = function _onError(event) {
    this.abort("Failed to load element using: " + event.target.nodeName);
  }
  /**
   * Called if a load progress event fires for an element or xhr/xdr.
   *
   * @private
   * @param {XMLHttpRequestProgressEvent|Event} event - Progress event.
   */
  ;

  _proto._onProgress = function _onProgress(event) {
    if (event && event.lengthComputable) {
      this.onProgress.dispatch(this, event.loaded / event.total);
    }
  }
  /**
   * Called if a timeout event fires for an element.
   *
   * @private
   */
  ;

  _proto._onTimeout = function _onTimeout() {
    this.abort("Load timed out.");
  }
  /**
   * Called if an error event fires for xhr/xdr.
   *
   * @private
   */
  ;

  _proto._xhrOnError = function _xhrOnError() {
    var xhr = this.xhr;
    this.abort(reqType(xhr) + " Request failed. Status: " + xhr.status + ", text: \"" + xhr.statusText + "\"");
  }
  /**
   * Called if an error event fires for xhr/xdr.
   *
   * @private
   */
  ;

  _proto._xhrOnTimeout = function _xhrOnTimeout() {
    var xhr = this.xhr;
    this.abort(reqType(xhr) + " Request timed out.");
  }
  /**
   * Called if an abort event fires for xhr/xdr.
   *
   * @private
   */
  ;

  _proto._xhrOnAbort = function _xhrOnAbort() {
    var xhr = this.xhr;
    this.abort(reqType(xhr) + " Request was aborted by the user.");
  }
  /**
   * Called when data successfully loads from an xhr/xdr request.
   *
   * @private
   * @param {XMLHttpRequestLoadEvent|Event} event - Load event
   */
  ;

  _proto._xhrOnLoad = function _xhrOnLoad() {
    var xhr = this.xhr;
    var text = '';
    var status = typeof xhr.status === 'undefined' ? STATUS_OK : xhr.status; // XDR has no `.status`, assume 200.
    // responseText is accessible only if responseType is '' or 'text' and on older browsers

    if (xhr.responseType === '' || xhr.responseType === 'text' || typeof xhr.responseType === 'undefined') {
      text = xhr.responseText;
    } // status can be 0 when using the `file://` protocol so we also check if a response is set.
    // If it has a response, we assume 200; otherwise a 0 status code with no contents is an aborted request.


    if (status === STATUS_NONE && (text.length > 0 || xhr.responseType === Resource.XHR_RESPONSE_TYPE.BUFFER)) {
      status = STATUS_OK;
    } // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    else if (status === STATUS_IE_BUG_EMPTY) {
        status = STATUS_EMPTY;
      }

    var statusType = status / 100 | 0;

    if (statusType === STATUS_TYPE_OK) {
      // if text, just return it
      if (this.xhrType === Resource.XHR_RESPONSE_TYPE.TEXT) {
        this.data = text;
        this.type = Resource.TYPE.TEXT;
      } // if json, parse into json object
      else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.JSON) {
          try {
            this.data = JSON.parse(text);
            this.type = Resource.TYPE.JSON;
          } catch (e) {
            this.abort("Error trying to parse loaded json: " + e);
            return;
          }
        } // if xml, parse into an xml document or div element
        else if (this.xhrType === Resource.XHR_RESPONSE_TYPE.DOCUMENT) {
            try {
              if (window.DOMParser) {
                var domparser = new DOMParser();
                this.data = domparser.parseFromString(text, 'text/xml');
              } else {
                var div = document.createElement('div');
                div.innerHTML = text;
                this.data = div;
              }

              this.type = Resource.TYPE.XML;
            } catch (e) {
              this.abort("Error trying to parse loaded xml: " + e);
              return;
            }
          } // other types just return the response
          else {
              this.data = xhr.response || text;
            }
    } else {
      this.abort("[" + xhr.status + "] " + xhr.statusText + ": " + xhr.responseURL);
      return;
    }

    this.complete();
  }
  /**
   * Sets the `crossOrigin` property for this resource based on if the url
   * for this resource is cross-origin. If crossOrigin was manually set, this
   * function does nothing.
   *
   * @private
   * @param {string} url - The url to test.
   * @param {object} [loc=window.location] - The location object to test against.
   * @return {string} The crossOrigin value to use (or empty string for none).
   */
  ;

  _proto._determineCrossOrigin = function _determineCrossOrigin(url, loc) {
    // data: and javascript: urls are considered same-origin
    if (url.indexOf('data:') === 0) {
      return '';
    } // A sandboxed iframe without the 'allow-same-origin' attribute will have a special
    // origin designed not to match window.location.origin, and will always require
    // crossOrigin requests regardless of whether the location matches.


    if (window.origin !== window.location.origin) {
      return 'anonymous';
    } // default is window.location


    loc = loc || window.location;

    if (!tempAnchor) {
      tempAnchor = document.createElement('a');
    } // let the browser determine the full href for the url of this resource and then
    // parse with the node url lib, we can't use the properties of the anchor element
    // because they don't work in IE9 :(


    tempAnchor.href = url;
    url = parse_uri__WEBPACK_IMPORTED_MODULE_0___default()(tempAnchor.href, {
      strictMode: true
    });
    var samePort = !url.port && loc.port === '' || url.port === loc.port;
    var protocol = url.protocol ? url.protocol + ":" : ''; // if cross origin

    if (url.host !== loc.hostname || !samePort || protocol !== loc.protocol) {
      return 'anonymous';
    }

    return '';
  }
  /**
   * Determines the responseType of an XHR request based on the extension of the
   * resource being loaded.
   *
   * @private
   * @return {Resource.XHR_RESPONSE_TYPE} The responseType to use.
   */
  ;

  _proto._determineXhrType = function _determineXhrType() {
    return Resource._xhrTypeMap[this.extension] || Resource.XHR_RESPONSE_TYPE.TEXT;
  }
  /**
   * Determines the loadType of a resource based on the extension of the
   * resource being loaded.
   *
   * @private
   * @return {Resource.LOAD_TYPE} The loadType to use.
   */
  ;

  _proto._determineLoadType = function _determineLoadType() {
    return Resource._loadTypeMap[this.extension] || Resource.LOAD_TYPE.XHR;
  }
  /**
   * Extracts the extension (sans '.') of the file being loaded by the resource.
   *
   * @private
   * @return {string} The extension.
   */
  ;

  _proto._getExtension = function _getExtension() {
    var url = this.url;
    var ext = '';

    if (this.isDataUrl) {
      var slashIndex = url.indexOf('/');
      ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
    } else {
      var queryStart = url.indexOf('?');
      var hashStart = url.indexOf('#');
      var index = Math.min(queryStart > -1 ? queryStart : url.length, hashStart > -1 ? hashStart : url.length);
      url = url.substring(0, index);
      ext = url.substring(url.lastIndexOf('.') + 1);
    }

    return ext.toLowerCase();
  }
  /**
   * Determines the mime type of an XHR request based on the responseType of
   * resource being loaded.
   *
   * @private
   * @param {Resource.XHR_RESPONSE_TYPE} type - The type to get a mime type for.
   * @return {string} The mime type to use.
   */
  ;

  _proto._getMimeFromXhrType = function _getMimeFromXhrType(type) {
    switch (type) {
      case Resource.XHR_RESPONSE_TYPE.BUFFER:
        return 'application/octet-binary';

      case Resource.XHR_RESPONSE_TYPE.BLOB:
        return 'application/blob';

      case Resource.XHR_RESPONSE_TYPE.DOCUMENT:
        return 'application/xml';

      case Resource.XHR_RESPONSE_TYPE.JSON:
        return 'application/json';

      case Resource.XHR_RESPONSE_TYPE.DEFAULT:
      case Resource.XHR_RESPONSE_TYPE.TEXT:
      /* falls through */

      default:
        return 'text/plain';
    }
  };

  _createClass(Resource, [{
    key: "isDataUrl",
    get: function get() {
      return this._hasFlag(Resource.STATUS_FLAGS.DATA_URL);
    }
    /**
     * Describes if this resource has finished loading. Is true when the resource has completely
     * loaded.
     *
     * @readonly
     * @member {boolean}
     */

  }, {
    key: "isComplete",
    get: function get() {
      return this._hasFlag(Resource.STATUS_FLAGS.COMPLETE);
    }
    /**
     * Describes if this resource is currently loading. Is true when the resource starts loading,
     * and is false again when complete.
     *
     * @readonly
     * @member {boolean}
     */

  }, {
    key: "isLoading",
    get: function get() {
      return this._hasFlag(Resource.STATUS_FLAGS.LOADING);
    }
  }]);

  return Resource;
}();
/**
 * The types of resources a resource could represent.
 *
 * @static
 * @readonly
 * @enum {number}
 */


Resource.STATUS_FLAGS = {
  NONE: 0,
  DATA_URL: 1 << 0,
  COMPLETE: 1 << 1,
  LOADING: 1 << 2
};
/**
 * The types of resources a resource could represent.
 *
 * @static
 * @readonly
 * @enum {number}
 */

Resource.TYPE = {
  UNKNOWN: 0,
  JSON: 1,
  XML: 2,
  IMAGE: 3,
  AUDIO: 4,
  VIDEO: 5,
  TEXT: 6
};
/**
 * The types of loading a resource can use.
 *
 * @static
 * @readonly
 * @enum {number}
 */

Resource.LOAD_TYPE = {
  /** Uses XMLHttpRequest to load the resource. */
  XHR: 1,

  /** Uses an `Image` object to load the resource. */
  IMAGE: 2,

  /** Uses an `Audio` object to load the resource. */
  AUDIO: 3,

  /** Uses a `Video` object to load the resource. */
  VIDEO: 4
};
/**
 * The XHR ready states, used internally.
 *
 * @static
 * @readonly
 * @enum {string}
 */

Resource.XHR_RESPONSE_TYPE = {
  /** string */
  DEFAULT: 'text',

  /** ArrayBuffer */
  BUFFER: 'arraybuffer',

  /** Blob */
  BLOB: 'blob',

  /** Document */
  DOCUMENT: 'document',

  /** Object */
  JSON: 'json',

  /** String */
  TEXT: 'text'
};
Resource._loadTypeMap = {
  // images
  gif: Resource.LOAD_TYPE.IMAGE,
  png: Resource.LOAD_TYPE.IMAGE,
  bmp: Resource.LOAD_TYPE.IMAGE,
  jpg: Resource.LOAD_TYPE.IMAGE,
  jpeg: Resource.LOAD_TYPE.IMAGE,
  tif: Resource.LOAD_TYPE.IMAGE,
  tiff: Resource.LOAD_TYPE.IMAGE,
  webp: Resource.LOAD_TYPE.IMAGE,
  tga: Resource.LOAD_TYPE.IMAGE,
  svg: Resource.LOAD_TYPE.IMAGE,
  'svg+xml': Resource.LOAD_TYPE.IMAGE,
  // for SVG data urls
  // audio
  mp3: Resource.LOAD_TYPE.AUDIO,
  ogg: Resource.LOAD_TYPE.AUDIO,
  wav: Resource.LOAD_TYPE.AUDIO,
  // videos
  mp4: Resource.LOAD_TYPE.VIDEO,
  webm: Resource.LOAD_TYPE.VIDEO
};
Resource._xhrTypeMap = {
  // xml
  xhtml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
  html: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
  htm: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
  xml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
  tmx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
  svg: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
  // This was added to handle Tiled Tileset XML, but .tsx is also a TypeScript React Component.
  // Since it is way less likely for people to be loading TypeScript files instead of Tiled files,
  // this should probably be fine.
  tsx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
  // images
  gif: Resource.XHR_RESPONSE_TYPE.BLOB,
  png: Resource.XHR_RESPONSE_TYPE.BLOB,
  bmp: Resource.XHR_RESPONSE_TYPE.BLOB,
  jpg: Resource.XHR_RESPONSE_TYPE.BLOB,
  jpeg: Resource.XHR_RESPONSE_TYPE.BLOB,
  tif: Resource.XHR_RESPONSE_TYPE.BLOB,
  tiff: Resource.XHR_RESPONSE_TYPE.BLOB,
  webp: Resource.XHR_RESPONSE_TYPE.BLOB,
  tga: Resource.XHR_RESPONSE_TYPE.BLOB,
  // json
  json: Resource.XHR_RESPONSE_TYPE.JSON,
  // text
  text: Resource.XHR_RESPONSE_TYPE.TEXT,
  txt: Resource.XHR_RESPONSE_TYPE.TEXT,
  // fonts
  ttf: Resource.XHR_RESPONSE_TYPE.BUFFER,
  otf: Resource.XHR_RESPONSE_TYPE.BUFFER
}; // We can't set the `src` attribute to empty string, so on abort we set it to this 1px transparent gif

Resource.EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
/**
 * Quick helper to set a value on one of the extension maps. Ensures there is no
 * dot at the start of the extension.
 *
 * @ignore
 * @param {object} map - The map to set on.
 * @param {string} extname - The extension (or key) to set.
 * @param {number} val - The value to set.
 */

function setExtMap(map, extname, val) {
  if (extname && extname.indexOf('.') === 0) {
    extname = extname.substring(1);
  }

  if (!extname) {
    return;
  }

  map[extname] = val;
}
/**
 * Quick helper to get string xhr type.
 *
 * @ignore
 * @param {XMLHttpRequest|XDomainRequest} xhr - The request to check.
 * @return {string} The type.
 */


function reqType(xhr) {
  return xhr.toString().replace('object ', '');
}

var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
/**
 * Encodes binary into base64.
 *
 * @function encodeBinary
 * @param {string} input The input data to encode.
 * @returns {string} The encoded base64 string
 */

function encodeBinary(input) {
  var output = '';
  var inx = 0;

  while (inx < input.length) {
    // Fill byte buffer array
    var bytebuffer = [0, 0, 0];
    var encodedCharIndexes = [0, 0, 0, 0];

    for (var jnx = 0; jnx < bytebuffer.length; ++jnx) {
      if (inx < input.length) {
        // throw away high-order byte, as documented at:
        // https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
        bytebuffer[jnx] = input.charCodeAt(inx++) & 0xff;
      } else {
        bytebuffer[jnx] = 0;
      }
    } // Get each encoded character, 6 bits at a time
    // index 1: first 6 bits


    encodedCharIndexes[0] = bytebuffer[0] >> 2; // index 2: second 6 bits (2 least significant bits from input byte 1 + 4 most significant bits from byte 2)

    encodedCharIndexes[1] = (bytebuffer[0] & 0x3) << 4 | bytebuffer[1] >> 4; // index 3: third 6 bits (4 least significant bits from input byte 2 + 2 most significant bits from byte 3)

    encodedCharIndexes[2] = (bytebuffer[1] & 0x0f) << 2 | bytebuffer[2] >> 6; // index 3: forth 6 bits (6 least significant bits from input byte 3)

    encodedCharIndexes[3] = bytebuffer[2] & 0x3f; // Determine whether padding happened, and adjust accordingly

    var paddingBytes = inx - (input.length - 1);

    switch (paddingBytes) {
      case 2:
        // Set last 2 characters to padding char
        encodedCharIndexes[3] = 64;
        encodedCharIndexes[2] = 64;
        break;

      case 1:
        // Set last character to padding char
        encodedCharIndexes[3] = 64;
        break;

      default:
        break;
      // No padding - proceed
    } // Now we will grab each appropriate character out of our keystring
    // based on our index array and append it to the output string


    for (var _jnx = 0; _jnx < encodedCharIndexes.length; ++_jnx) {
      output += _keyStr.charAt(encodedCharIndexes[_jnx]);
    }
  }

  return output;
}

var Url = window.URL || window.webkitURL;
/**
 * A middleware for transforming XHR loaded Blobs into more useful objects
 *
 * @memberof middleware
 * @function parsing
 * @example
 * import { Loader, middleware } from 'resource-loader';
 * const loader = new Loader();
 * loader.use(middleware.parsing);
 * @param {Resource} resource - Current Resource
 * @param {function} next - Callback when complete
 */

function parsing(resource, next) {
  if (!resource.data) {
    next();
    return;
  } // if this was an XHR load of a blob


  if (resource.xhr && resource.xhrType === Resource.XHR_RESPONSE_TYPE.BLOB) {
    // if there is no blob support we probably got a binary string back
    if (!window.Blob || typeof resource.data === 'string') {
      var type = resource.xhr.getResponseHeader('content-type'); // this is an image, convert the binary string into a data url

      if (type && type.indexOf('image') === 0) {
        resource.data = new Image();
        resource.data.src = "data:" + type + ";base64," + encodeBinary(resource.xhr.responseText);
        resource.type = Resource.TYPE.IMAGE; // wait until the image loads and then callback

        resource.data.onload = function () {
          resource.data.onload = null;
          next();
        }; // next will be called on load


        return;
      }
    } // if content type says this is an image, then we should transform the blob into an Image object
    else if (resource.data.type.indexOf('image') === 0) {
        var src = Url.createObjectURL(resource.data);
        resource.blob = resource.data;
        resource.data = new Image();
        resource.data.src = src;
        resource.type = Resource.TYPE.IMAGE; // cleanup the no longer used blob after the image loads
        // TODO: Is this correct? Will the image be invalid after revoking?

        resource.data.onload = function () {
          Url.revokeObjectURL(src);
          resource.data.onload = null;
          next();
        }; // next will be called on load.


        return;
      }
  }

  next();
}

/**
 * @namespace middleware
 */

var index = ({
    caching: caching,
    parsing: parsing
});

var MAX_PROGRESS = 100;
var rgxExtractUrlHash = /(#[\w-]+)?$/;
/**
 * Manages the state and loading of multiple resources to load.
 *
 * @class
 */

var Loader =
/*#__PURE__*/
function () {
  /**
   * @param {string} [baseUrl=''] - The base url for all resources loaded by this loader.
   * @param {number} [concurrency=10] - The number of resources to load concurrently.
   */
  function Loader(baseUrl, concurrency) {
    var _this = this;

    if (baseUrl === void 0) {
      baseUrl = '';
    }

    if (concurrency === void 0) {
      concurrency = 10;
    }

    /**
     * The base url for all resources loaded by this loader.
     *
     * @member {string}
     */
    this.baseUrl = baseUrl;
    /**
     * The progress percent of the loader going through the queue.
     *
     * @member {number}
     * @default 0
     */

    this.progress = 0;
    /**
     * Loading state of the loader, true if it is currently loading resources.
     *
     * @member {boolean}
     * @default false
     */

    this.loading = false;
    /**
     * A querystring to append to every URL added to the loader.
     *
     * This should be a valid query string *without* the question-mark (`?`). The loader will
     * also *not* escape values for you. Make sure to escape your parameters with
     * [`encodeURIComponent`](https://mdn.io/encodeURIComponent) before assigning this property.
     *
     * @example
     * const loader = new Loader();
     *
     * loader.defaultQueryString = 'user=me&password=secret';
     *
     * // This will request 'image.png?user=me&password=secret'
     * loader.add('image.png').load();
     *
     * loader.reset();
     *
     * // This will request 'image.png?v=1&user=me&password=secret'
     * loader.add('iamge.png?v=1').load();
     *
     * @member {string}
     * @default ''
     */

    this.defaultQueryString = '';
    /**
     * The middleware to run before loading each resource.
     *
     * @private
     * @member {function[]}
     */

    this._beforeMiddleware = [];
    /**
     * The middleware to run after loading each resource.
     *
     * @private
     * @member {function[]}
     */

    this._afterMiddleware = [];
    /**
     * The tracks the resources we are currently completing parsing for.
     *
     * @private
     * @member {Resource[]}
     */

    this._resourcesParsing = [];
    /**
     * The `_loadResource` function bound with this object context.
     *
     * @private
     * @member {function}
     * @param {Resource} r - The resource to load
     * @param {Function} d - The dequeue function
     * @return {undefined}
     */

    this._boundLoadResource = function (r, d) {
      return _this._loadResource(r, d);
    };
    /**
     * The resources waiting to be loaded.
     *
     * @private
     * @member {Resource[]}
     */


    this._queue = queue(this._boundLoadResource, concurrency);

    this._queue.pause();
    /**
     * All the resources for this loader keyed by name.
     *
     * @member {object<string, Resource>}
     */


    this.resources = {};
    /**
     * Dispatched once per loaded or errored resource.
     *
     * The callback looks like {@link Loader.OnProgressSignal}.
     *
     * @member {Signal<Loader.OnProgressSignal>}
     */

    this.onProgress = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
    /**
     * Dispatched once per errored resource.
     *
     * The callback looks like {@link Loader.OnErrorSignal}.
     *
     * @member {Signal<Loader.OnErrorSignal>}
     */

    this.onError = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
    /**
     * Dispatched once per loaded resource.
     *
     * The callback looks like {@link Loader.OnLoadSignal}.
     *
     * @member {Signal<Loader.OnLoadSignal>}
     */

    this.onLoad = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
    /**
     * Dispatched when the loader begins to process the queue.
     *
     * The callback looks like {@link Loader.OnStartSignal}.
     *
     * @member {Signal<Loader.OnStartSignal>}
     */

    this.onStart = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a();
    /**
     * Dispatched when the queued resources all load.
     *
     * The callback looks like {@link Loader.OnCompleteSignal}.
     *
     * @member {Signal<Loader.OnCompleteSignal>}
     */

    this.onComplete = new mini_signals__WEBPACK_IMPORTED_MODULE_1___default.a(); // Add default before middleware

    for (var i = 0; i < Loader._defaultBeforeMiddleware.length; ++i) {
      this.pre(Loader._defaultBeforeMiddleware[i]);
    } // Add default after middleware


    for (var _i = 0; _i < Loader._defaultAfterMiddleware.length; ++_i) {
      this.use(Loader._defaultAfterMiddleware[_i]);
    }
  }
  /**
   * When the progress changes the loader and resource are disaptched.
   *
   * @memberof Loader
   * @callback OnProgressSignal
   * @param {Loader} loader - The loader the progress is advancing on.
   * @param {Resource} resource - The resource that has completed or failed to cause the progress to advance.
   */

  /**
   * When an error occurrs the loader and resource are disaptched.
   *
   * @memberof Loader
   * @callback OnErrorSignal
   * @param {Loader} loader - The loader the error happened in.
   * @param {Resource} resource - The resource that caused the error.
   */

  /**
   * When a load completes the loader and resource are disaptched.
   *
   * @memberof Loader
   * @callback OnLoadSignal
   * @param {Loader} loader - The loader that laoded the resource.
   * @param {Resource} resource - The resource that has completed loading.
   */

  /**
   * When the loader starts loading resources it dispatches this callback.
   *
   * @memberof Loader
   * @callback OnStartSignal
   * @param {Loader} loader - The loader that has started loading resources.
   */

  /**
   * When the loader completes loading resources it dispatches this callback.
   *
   * @memberof Loader
   * @callback OnCompleteSignal
   * @param {Loader} loader - The loader that has finished loading resources.
   */

  /**
   * Options for a call to `.add()`.
   *
   * @see Loader#add
   *
   * @typedef {object} IAddOptions
   * @property {string} [name] - The name of the resource to load, if not passed the url is used.
   * @property {string} [key] - Alias for `name`.
   * @property {string} [url] - The url for this resource, relative to the baseUrl of this loader.
   * @property {string|boolean} [crossOrigin] - Is this request cross-origin? Default is to
   *      determine automatically.
   * @property {number} [timeout=0] - A timeout in milliseconds for the load. If the load takes
   *      longer than this time it is cancelled and the load is considered a failure. If this value is
   *      set to `0` then there is no explicit timeout.
   * @property {Resource.LOAD_TYPE} [loadType=Resource.LOAD_TYPE.XHR] - How should this resource
   *      be loaded?
   * @property {Resource.XHR_RESPONSE_TYPE} [xhrType=Resource.XHR_RESPONSE_TYPE.DEFAULT] - How
   *      should the data being loaded be interpreted when using XHR?
   * @property {Resource.OnCompleteSignal} [onComplete] - Callback to add an an onComplete signal istener.
   * @property {Resource.OnCompleteSignal} [callback] - Alias for `onComplete`.
   * @property {Resource.IMetadata} [metadata] - Extra configuration for middleware and the Resource object.
   */

  /* eslint-disable require-jsdoc,valid-jsdoc */

  /**
   * Adds a resource (or multiple resources) to the loader queue.
   *
   * This function can take a wide variety of different parameters. The only thing that is always
   * required the url to load. All the following will work:
   *
   * ```js
   * loader
   *     // normal param syntax
   *     .add('key', 'http://...', function () {})
   *     .add('http://...', function () {})
   *     .add('http://...')
   *
   *     // object syntax
   *     .add({
   *         name: 'key2',
   *         url: 'http://...'
   *     }, function () {})
   *     .add({
   *         url: 'http://...'
   *     }, function () {})
   *     .add({
   *         name: 'key3',
   *         url: 'http://...'
   *         onComplete: function () {}
   *     })
   *     .add({
   *         url: 'https://...',
   *         onComplete: function () {},
   *         crossOrigin: true
   *     })
   *
   *     // you can also pass an array of objects or urls or both
   *     .add([
   *         { name: 'key4', url: 'http://...', onComplete: function () {} },
   *         { url: 'http://...', onComplete: function () {} },
   *         'http://...'
   *     ])
   *
   *     // and you can use both params and options
   *     .add('key', 'http://...', { crossOrigin: true }, function () {})
   *     .add('http://...', { crossOrigin: true }, function () {});
   * ```
   *
   * @function
   * @variation 1
   * @param {string} name - The name of the resource to load.
   * @param {string} url - The url for this resource, relative to the baseUrl of this loader.
   * @param {Resource.OnCompleteSignal} [callback] - Function to call when this specific resource completes loading.
   * @return {this} Returns itself.
   */

  /**
  * @function
  * @variation 2
  * @param {string} name - The name of the resource to load.
  * @param {string} url - The url for this resource, relative to the baseUrl of this loader.
  * @param {IAddOptions} [options] - The options for the load.
  * @param {Resource.OnCompleteSignal} [callback] - Function to call when this specific resource completes loading.
  * @return {this} Returns itself.
  */

  /**
  * @function
  * @variation 3
  * @param {string} url - The url for this resource, relative to the baseUrl of this loader.
  * @param {Resource.OnCompleteSignal} [callback] - Function to call when this specific resource completes loading.
  * @return {this} Returns itself.
  */

  /**
  * @function
  * @variation 4
  * @param {string} url - The url for this resource, relative to the baseUrl of this loader.
  * @param {IAddOptions} [options] - The options for the load.
  * @param {Resource.OnCompleteSignal} [callback] - Function to call when this specific resource completes loading.
  * @return {this} Returns itself.
  */

  /**
  * @function
  * @variation 5
  * @param {IAddOptions} options - The options for the load. This object must contain a `url` property.
  * @param {Resource.OnCompleteSignal} [callback] - Function to call when this specific resource completes loading.
  * @return {this} Returns itself.
  */

  /**
  * @function
  * @variation 6
  * @param {Array<IAddOptions|string>} resources - An array of resources to load, where each is
  *      either an object with the options or a string url. If you pass an object, it must contain a `url` property.
  * @param {Resource.OnCompleteSignal} [callback] - Function to call when this specific resource completes loading.
  * @return {this} Returns itself.
  */


  var _proto = Loader.prototype;

  _proto.add = function add(name, url, options, cb) {
    // special case of an array of objects or urls
    if (Array.isArray(name)) {
      for (var i = 0; i < name.length; ++i) {
        this.add(name[i]);
      }

      return this;
    } // if an object is passed instead of params


    if (typeof name === 'object') {
      cb = url || name.callback || name.onComplete;
      options = name;
      url = name.url;
      name = name.name || name.key || name.url;
    } // case where no name is passed shift all args over by one.


    if (typeof url !== 'string') {
      cb = options;
      options = url;
      url = name;
    } // now that we shifted make sure we have a proper url.


    if (typeof url !== 'string') {
      throw new Error('No url passed to add resource to loader.');
    } // options are optional so people might pass a function and no options


    if (typeof options === 'function') {
      cb = options;
      options = null;
    } // if loading already you can only add resources that have a parent.


    if (this.loading && (!options || !options.parentResource)) {
      throw new Error('Cannot add resources while the loader is running.');
    } // check if resource already exists.


    if (this.resources[name]) {
      throw new Error("Resource named \"" + name + "\" already exists.");
    } // add base url if this isn't an absolute url


    url = this._prepareUrl(url); // create the store the resource

    this.resources[name] = new Resource(name, url, options);

    if (typeof cb === 'function') {
      this.resources[name].onAfterMiddleware.once(cb);
    } // if actively loading, make sure to adjust progress chunks for that parent and its children


    if (this.loading) {
      var parent = options.parentResource;
      var incompleteChildren = [];

      for (var _i2 = 0; _i2 < parent.children.length; ++_i2) {
        if (!parent.children[_i2].isComplete) {
          incompleteChildren.push(parent.children[_i2]);
        }
      }

      var fullChunk = parent.progressChunk * (incompleteChildren.length + 1); // +1 for parent

      var eachChunk = fullChunk / (incompleteChildren.length + 2); // +2 for parent & new child

      parent.children.push(this.resources[name]);
      parent.progressChunk = eachChunk;

      for (var _i3 = 0; _i3 < incompleteChildren.length; ++_i3) {
        incompleteChildren[_i3].progressChunk = eachChunk;
      }

      this.resources[name].progressChunk = eachChunk;
    } // add the resource to the queue


    this._queue.push(this.resources[name]);

    return this;
  }
  /* eslint-enable require-jsdoc,valid-jsdoc */

  /**
   * Sets up a middleware function that will run *before* the
   * resource is loaded.
   *
   * @param {function} fn - The middleware function to register.
   * @return {this} Returns itself.
   */
  ;

  _proto.pre = function pre(fn) {
    this._beforeMiddleware.push(fn);

    return this;
  }
  /**
   * Sets up a middleware function that will run *after* the
   * resource is loaded.
   *
   * @param {function} fn - The middleware function to register.
   * @return {this} Returns itself.
   */
  ;

  _proto.use = function use(fn) {
    this._afterMiddleware.push(fn);

    return this;
  }
  /**
   * Resets the queue of the loader to prepare for a new load.
   *
   * @return {this} Returns itself.
   */
  ;

  _proto.reset = function reset() {
    this.progress = 0;
    this.loading = false;

    this._queue.kill();

    this._queue.pause(); // abort all resource loads


    for (var k in this.resources) {
      var res = this.resources[k];

      if (res._onLoadBinding) {
        res._onLoadBinding.detach();
      }

      if (res.isLoading) {
        res.abort();
      }
    }

    this.resources = {};
    return this;
  }
  /**
   * Starts loading the queued resources.
   *
   * @param {function} [cb] - Optional callback that will be bound to the `complete` event.
   * @return {this} Returns itself.
   */
  ;

  _proto.load = function load(cb) {
    // register complete callback if they pass one
    if (typeof cb === 'function') {
      this.onComplete.once(cb);
    } // if the queue has already started we are done here


    if (this.loading) {
      return this;
    }

    if (this._queue.idle()) {
      this._onStart();

      this._onComplete();
    } else {
      // distribute progress chunks
      var numTasks = this._queue._tasks.length;
      var chunk = MAX_PROGRESS / numTasks;

      for (var i = 0; i < this._queue._tasks.length; ++i) {
        this._queue._tasks[i].data.progressChunk = chunk;
      } // notify we are starting


      this._onStart(); // start loading


      this._queue.resume();
    }

    return this;
  }
  /**
   * The number of resources to load concurrently.
   *
   * @member {number}
   * @default 10
   */
  ;

  /**
   * Prepares a url for usage based on the configuration of this object
   *
   * @private
   * @param {string} url - The url to prepare.
   * @return {string} The prepared url.
   */
  _proto._prepareUrl = function _prepareUrl(url) {
    var parsedUrl = parse_uri__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      strictMode: true
    });
    var result; // absolute url, just use it as is.

    if (parsedUrl.protocol || !parsedUrl.path || url.indexOf('//') === 0) {
      result = url;
    } // if baseUrl doesn't end in slash and url doesn't start with slash, then add a slash inbetween
    else if (this.baseUrl.length && this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 && url.charAt(0) !== '/') {
        result = this.baseUrl + "/" + url;
      } else {
        result = this.baseUrl + url;
      } // if we need to add a default querystring, there is a bit more work


    if (this.defaultQueryString) {
      var hash = rgxExtractUrlHash.exec(result)[0];
      result = result.substr(0, result.length - hash.length);

      if (result.indexOf('?') !== -1) {
        result += "&" + this.defaultQueryString;
      } else {
        result += "?" + this.defaultQueryString;
      }

      result += hash;
    }

    return result;
  }
  /**
   * Loads a single resource.
   *
   * @private
   * @param {Resource} resource - The resource to load.
   * @param {function} dequeue - The function to call when we need to dequeue this item.
   */
  ;

  _proto._loadResource = function _loadResource(resource, dequeue) {
    var _this2 = this;

    resource._dequeue = dequeue; // run before middleware

    eachSeries(this._beforeMiddleware, function (fn, next) {
      fn.call(_this2, resource, function () {
        // if the before middleware marks the resource as complete,
        // break and don't process any more before middleware
        next(resource.isComplete ? {} : null);
      });
    }, function () {
      if (resource.isComplete) {
        _this2._onLoad(resource);
      } else {
        resource._onLoadBinding = resource.onComplete.once(_this2._onLoad, _this2);
        resource.load();
      }
    }, true);
  }
  /**
   * Called once loading has started.
   *
   * @private
   */
  ;

  _proto._onStart = function _onStart() {
    this.progress = 0;
    this.loading = true;
    this.onStart.dispatch(this);
  }
  /**
   * Called once each resource has loaded.
   *
   * @private
   */
  ;

  _proto._onComplete = function _onComplete() {
    this.progress = MAX_PROGRESS;
    this.loading = false;
    this.onComplete.dispatch(this, this.resources);
  }
  /**
   * Called each time a resources is loaded.
   *
   * @private
   * @param {Resource} resource - The resource that was loaded
   */
  ;

  _proto._onLoad = function _onLoad(resource) {
    var _this3 = this;

    resource._onLoadBinding = null; // remove this resource from the async queue, and add it to our list of resources that are being parsed

    this._resourcesParsing.push(resource);

    resource._dequeue(); // run all the after middleware for this resource


    eachSeries(this._afterMiddleware, function (fn, next) {
      fn.call(_this3, resource, next);
    }, function () {
      resource.onAfterMiddleware.dispatch(resource);
      _this3.progress = Math.min(MAX_PROGRESS, _this3.progress + resource.progressChunk);

      _this3.onProgress.dispatch(_this3, resource);

      if (resource.error) {
        _this3.onError.dispatch(resource.error, _this3, resource);
      } else {
        _this3.onLoad.dispatch(_this3, resource);
      }

      _this3._resourcesParsing.splice(_this3._resourcesParsing.indexOf(resource), 1); // do completion check


      if (_this3._queue.idle() && _this3._resourcesParsing.length === 0) {
        _this3._onComplete();
      }
    }, true);
  };

  _createClass(Loader, [{
    key: "concurrency",
    get: function get() {
      return this._queue.concurrency;
    } // eslint-disable-next-line require-jsdoc
    ,
    set: function set(concurrency) {
      this._queue.concurrency = concurrency;
    }
  }]);

  return Loader;
}();
/**
 * A default array of middleware to run before loading each resource.
 * Each of these middlewares are added to any new Loader instances when they are created.
 *
 * @private
 * @member {function[]}
 */


Loader._defaultBeforeMiddleware = [];
/**
 * A default array of middleware to run after loading each resource.
 * Each of these middlewares are added to any new Loader instances when they are created.
 *
 * @private
 * @member {function[]}
 */

Loader._defaultAfterMiddleware = [];
/**
 * Sets up a middleware function that will run *before* the
 * resource is loaded.
 *
 * @static
 * @param {function} fn - The middleware function to register.
 * @return {Loader} Returns itself.
 */

Loader.pre = function LoaderPreStatic(fn) {
  Loader._defaultBeforeMiddleware.push(fn);

  return Loader;
};
/**
 * Sets up a middleware function that will run *after* the
 * resource is loaded.
 *
 * @static
 * @param {function} fn - The middleware function to register.
 * @return {Loader} Returns itself.
 */


Loader.use = function LoaderUseStatic(fn) {
  Loader._defaultAfterMiddleware.push(fn);

  return Loader;
};


//# sourceMappingURL=resource-loader.esm.js.map


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

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
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "e"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), infoShown = _a[0], setInfoShown = _a[1];
    var building = props.buildable; /* FIXME */
    var onChooseItem = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () { return props.onChooseItem.bind(props, building); }, [props.onChooseItem, props.buildable]);
    var triggerDialogClose = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () { return setInfoShown(false); }, []);
    var triggerDialogOpen = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () { return setInfoShown(true); }, []);
    var extraDescription = undefined;
    if (typeof building.description != 'undefined') {
        extraDescription = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: triggerDialogOpen },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__[/* PurpleInfoIcon */ "i"], null));
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], { mainSprite: building.mainSprite, baseSprite: building.baseSprite }),
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, _Building__WEBPACK_IMPORTED_MODULE_2__[/* buildings */ "a"].map(function (building) { return building.hidden ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ConstructionOption, { key: building.mainSprite, onChooseItem: props.onChooseItem, buildable: building }); }));
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









var ConstructionDialog = function (props) {
    var isTeardown = props.type == _Construction__WEBPACK_IMPORTED_MODULE_1__[/* ConstructionType */ "a"].Teardown;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { open: props.show, onClose: props.onBuildCancel },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null,
            "DEVELOPMENT: ",
            _Construction__WEBPACK_IMPORTED_MODULE_1__[/* ConstructionType */ "a"][props.type]),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { dividers: true },
            !isTeardown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Standard grass is easy to build on."),
            !isTeardown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConstructionBuildOptions__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { type: props.type, onChooseItem: props.onChooseItem }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Are you sure you want to remove this?")),
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "construction-avatar-container selectDisable" },
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ControlSeparator; });
/* unused harmony export ControlMenu */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SaveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HammerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UnhousedPersonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EvacuationIcon; });
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
        _this.runDisaster = function () {
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
                    var a = Array.from(allTiles);
                    iterateMap(_this.props.tileMap[a[a.length - 1]], [_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southwest, _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileDirection */ "d"].Southeast], true).then(function () {
                        _this.tileSystem.interactionAllowed = false;
                        _this.setState({ constructionType: null, stickyActionInProgress: false, disasterRunning: false });
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
        _this.saveTileMap = function () {
            __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, "./src/TileMapSaver.ts")).then(function (mod) { return mod.saveMap(_this.props.tileMap); });
        };
        _this.cull = null;
        _this.state = {
            hoverX: 0,
            hoverY: 0,
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
            showForcedQuery: false
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
        this.tileSystem.onResize().then(function () {
            _this.viewport.dirty = true;
        });
    };
    PIXIContainer.prototype.onTileChange = function (index) {
        if (this.state.currentlyHoveredTile == this.props.tileMap[index] || this.state.currentlySelectedTile == this.props.tileMap[index])
            this.forceUpdate();
    };
    PIXIContainer.prototype.componentWillUnmount = function () {
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
            if (disasterPower > 5) {
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
            else {
                var killed = Math.round(t.population * 2 / 4);
                t.dead += killed;
                t.population -= killed;
                return true;
            }
        }
        return false;
    };
    PIXIContainer.prototype.componentDidMount = function () {
        var _this = this;
        var tileMap = this.props.tileMap;
        pixi_js__WEBPACK_IMPORTED_MODULE_3__["Application"].prototype.render = null; // Disable auto-rendering by removing the function
        this.tileSystem.app = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Application"]({ view: this.canvasRef.current, transparent: true, forceCanvas: true });
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
                            }).then(function () {
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
                    setTimeout(_this.runDisaster, 5000);
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
                                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* preloadAudio */ "j"])("audio/construction.mp3");
                                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* preloadAudio */ "j"])("audio/explosion.mp3");
                                Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* preloadAudio */ "j"])("audio/ocean.mp3");
                            }
                        }
                    });
                });
            });
        });
        this.pixiSizeHandler = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* _debounce */ "b"])(100, this.updatePixiSize);
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
        var evacuateSources = from.searchInRing(5).flat(2).map(function (n) { return _this.props.tileMap[n]; });
        var totalEvacuees = 0;
        try {
            for (var evacuateSources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(evacuateSources), evacuateSources_1_1 = evacuateSources_1.next(); !evacuateSources_1_1.done; evacuateSources_1_1 = evacuateSources_1.next()) {
                var tile = evacuateSources_1_1.value;
                var agreeableDishoused = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getRandomInt */ "f"])(0, tile.population + 1);
                totalEvacuees += agreeableDishoused;
                tile.population -= agreeableDishoused;
                if (tile.building != null) {
                    var agreeableResidents = Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getRandomInt */ "f"])(0, tile.building.residents + 1);
                    totalEvacuees += agreeableResidents;
                    tile.building.residents -= agreeableResidents;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (evacuateSources_1_1 && !evacuateSources_1_1.done && (_a = evacuateSources_1.return)) _a.call(evacuateSources_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.housePeople(to, totalEvacuees);
        this.props.enqueueSnackbar(totalEvacuees + " successfully evacuated!", { variant: 'success' });
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
            if (tile.building == null || tile.building.name != "Heliport") {
                return "Evacuation can only be done between heliports.";
            }
            var tooClose = this.previouslyChosenTile == null ? false : tile.searchInRing(5).some(function (ring) { return ring.some(function (idx) { return _this.props.tileMap[idx] == _this.previouslyChosenTile; }); });
            if (tooClose) {
                this.setSelectionHighlightVisible(this.previouslyChosenTile, false);
                this.previouslyChosenTile = null;
                return this.previouslyChosenTile == tile ? "It's pointless to move people where they came from." : "These heliports are too close to each other.";
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
    PIXIContainer.prototype.getTileName = function (tile) {
        var _a, _b;
        return ((_a = tile) === null || _a === void 0 ? void 0 : _a.building) ? "" + tile.building.name + (tile.building.destroyed ? " (destroyed)" : "") : Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* stringTillFirstDigit */ "m"])(Object(_utilities__WEBPACK_IMPORTED_MODULE_5__[/* getStringEnumName */ "g"])(_Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"], (_b = tile) === null || _b === void 0 ? void 0 : _b.ground));
    };
    PIXIContainer.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var tile = this.getCurrentOverlayTile();
        var name = this.getTileName(tile);
        var buttons = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            isNewMode && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], { icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* BackIcon */ "a"], onClick: this.props.onGoBack }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], { icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* PauseIcon */ "h"], onClick: this.runDisaster }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "c"], null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], { icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* SaveIcon */ "l"], onClick: this.saveTileMap })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlButton */ "b"], { active: this.tileSystem.tileRiskLevelVisible, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* RiskLevelButtonIcon */ "k"], onClick: this.invertRiskLevel, title: (this.state.tileRiskLevelVisible ? "Hide" : "Show") + " tile risk level" }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "c"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Lower tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformDown, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* TerraformDownIcon */ "m"], onClick: this.startTileBasedAction, active: this.checkActive }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Raise tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].TerraformUp, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* TerraformUpIcon */ "n"], onClick: this.startTileBasedAction, active: this.checkActive }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "c"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Add building", constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Structures, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* BuildingIcon */ "c"], onClick: this.startTileBasedAction, active: this.checkActive }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Clear tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Teardown, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* RedBombIcon */ "j"], onClick: this.startTileBasedAction, active: this.checkActive }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Query tile", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ShowInfo, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* PurpleInfoIcon */ "i"], onClick: this.startTileBasedAction, active: this.checkActive }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "c"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { title: "Trigger evacuation", sticky: true, constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].Evacuate, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* EvacuationIcon */ "d"], onClick: this.startTileBasedAction, active: this.checkActive }),
            isNewMode && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlSeparator */ "c"], null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { sticky: true, title: "Make water", constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ChangeGroundType, flag: _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Water, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* WaterIcon */ "p"], onClick: this.startTileBasedAction, active: this.checkActive }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisasterControlButton, { sticky: true, title: "Make grass", constructionType: _Construction__WEBPACK_IMPORTED_MODULE_8__[/* ConstructionType */ "a"].ChangeGroundType, flag: _Tile__WEBPACK_IMPORTED_MODULE_6__[/* TileGroundType */ "e"].Grass, icon: _Icons__WEBPACK_IMPORTED_MODULE_14__[/* LandIcon */ "g"], onClick: this.startTileBasedAction, active: this.checkActive })));
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            (this.state.initiallyRendered) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ControlBar__WEBPACK_IMPORTED_MODULE_13__[/* ControlBar */ "a"], null, this.state.disasterRunning ? "A disaster is taking place!" : buttons),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TileOverlay__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { constructionMode: true, show: tile != null && this.state.interactionAllowed, name: name, riskLevel: (_a = tile) === null || _a === void 0 ? void 0 : _a.riskLevel, riskColor: (_b = tile) === null || _b === void 0 ? void 0 : _b.getRiskLevelColor(), isSelected: false, residents: (_d = (_c = tile) === null || _c === void 0 ? void 0 : _c.building) === null || _d === void 0 ? void 0 : _d.residents, occupancy: (_f = (_e = tile) === null || _e === void 0 ? void 0 : _e.building) === null || _f === void 0 ? void 0 : _f.occupancy, unhoused: (_g = tile) === null || _g === void 0 ? void 0 : _g.population, style: {
                    transform: "translateX(1em) translateY(-50%) translate(" + this.state.hoverX + "px, " + this.state.hoverY + "px)"
                } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", { ref: this.canvasRef, style: {
                    visibility: this.state.initiallyRendered ? null : 'hidden',
                    touchAction: 'none',
                    cursor: 'inherit'
                } }),
            !this.state.initiallyRendered && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MapLoadingScreen__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], { loadingText: "Populating the area..." }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConstructionDialog__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], { show: this.state.currentlySelectedTile != null && this.isDialogBasedConstructionType(this.state.constructionType), type: this.state.constructionType, onChooseItem: this.performBuild, onBuildCancel: this.onActionCompleted.bind(this, null) }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], { open: this.state.showError, onClose: this.onErrorAcknowledge },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null, "Action not allowed"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], { dividers: true }, this.state.errString),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], { onClick: this.onErrorAcknowledge, color: "primary" }, "OK"))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], { open: this.state.showForcedQuery, onClose: this.endQuery, hideBackdrop: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], { className: "tile-overlay-embed-parent" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConstructionOptionImage__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], { mainSprite: (_h = this.state.forcedQueryTile) === null || _h === void 0 ? void 0 : _h.getAppropriateMainSprite(), baseSprite: (_j = this.state.forcedQueryTile) === null || _j === void 0 ? void 0 : _j.getAppropriateBaseSprite(), leftColor: (_l = this.tileSystem.tileObjects[(_k = this.state.forcedQueryTile) === null || _k === void 0 ? void 0 : _k.getIndex()]) === null || _l === void 0 ? void 0 : _l.leftColor, rightColor: (_o = this.tileSystem.tileObjects[(_m = this.state.forcedQueryTile) === null || _m === void 0 ? void 0 : _m.getIndex()]) === null || _o === void 0 ? void 0 : _o.rightColor }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TileOverlay__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { embed: true, constructionMode: true, show: this.state.forcedQueryTile != null, name: this.getTileName(this.state.forcedQueryTile), riskLevel: (_p = this.state.forcedQueryTile) === null || _p === void 0 ? void 0 : _p.riskLevel, riskColor: (_q = this.state.forcedQueryTile) === null || _q === void 0 ? void 0 : _q.getRiskLevelColor(), isSelected: false, residents: (_s = (_r = this.state.forcedQueryTile) === null || _r === void 0 ? void 0 : _r.building) === null || _s === void 0 ? void 0 : _s.residents, occupancy: (_u = (_t = this.state.forcedQueryTile) === null || _t === void 0 ? void 0 : _t.building) === null || _u === void 0 ? void 0 : _u.occupancy, unhoused: (_v = this.state.forcedQueryTile) === null || _v === void 0 ? void 0 : _v.population })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], { onClick: this.endQuery, color: "primary" }, "OK"))),
            this.state.initiallyRendered && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PopulationInfo__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this.props.tileMap.takeCensus(), { onExpiry: this.runDisaster })));
    };
    return PIXIContainer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));
/* harmony default export */ __webpack_exports__["default"] = (Object(notistack__WEBPACK_IMPORTED_MODULE_22__["withSnackbar"])(PIXIContainer));


/***/ }),

/***/ "./src/PopulationInfo.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _TimerBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/TimerBar.tsx");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@material-ui/core/esm/Typography/index.js");







var PopulationInfo = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { square: true, className: "population-info" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5___default.a, null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "population-column" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { variant: "h5" }, "POPULATION"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { color: "red" } },
                        "Deceased: ",
                        props.dead),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { color: "black" } },
                        "Homeless: ",
                        props.housed),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { color: "green" } },
                        "Sheltered: ",
                        props.unhoused))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "population-column" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { variant: "h5" }, "DISASTER TIMER"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimerBar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { amountOfTime: 1000 * 60 * 20, onExpiry: props.onExpiry }))));
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
            var pos = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[/* getRandomArbitrary */ "d"])(0.5, 0.7);
            person.x = pos * _this.tileSize;
            person.y = (1.5 - pos) * _this.tileSize;
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
                residencyComponent)));
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
        this.tileObjects[i].numPeople = Math.ceil(this.lastTileMap[i].population / 5);
        /* DRAW TILE BASE */
        this.tileObjects[i].tileSize = this.tileSize;
        this.tileObjects[i].slant = this.lastTileMap[i].getSlantDirection();
        this.tileObjects[i].tileObject.texture = this.getTexture(this.lastTileMap[i].getGroundSprite());
        this.tileObjects[i].tileObject.texture = this.getTexture(this.lastTileMap[i].getAppropriateBaseSprite());
        this.tileObjects[i].tileSideHue = this.getTexture(this.lastTileMap[i].getGroundSprite()).baseTexture.averageHue;
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
            var p = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[/* scheduleIdleWorkLoop */ "l"])(tilemap.length, _this.updateTile);
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
//# sourceMappingURL=6.core_script_compiled.js.map