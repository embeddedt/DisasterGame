(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvZGUvc2ltcGxlLmpzIl0sIm5hbWVzIjpbIlNpbXBsZSIsIm9wdGlvbnMiLCJ2aXNpYmxlIiwiY2FsY3VsYXRlUElYSSIsImRpcnR5VGVzdCIsIkFBQkIiLCJsaXN0cyIsImFycmF5Iiwic3RhdGljT2JqZWN0IiwicHVzaCIsIm9iamVjdCIsInVwZGF0ZU9iamVjdCIsInNwbGljZSIsImluZGV4T2YiLCJib3VuZHMiLCJza2lwVXBkYXRlIiwidXBkYXRlT2JqZWN0cyIsImxpc3QiLCJib3giLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiZGlydHkiLCJnZXRMb2NhbEJvdW5kcyIsInNjYWxlIiwicmVzdWx0cyIsImNhbGxiYWNrIiwiY291bnQiLCJmb3JFYWNoIiwidG90YWwiLCJjdWxsZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTtBQUVGOzs7Ozs7OztBQVFBLG9CQUFZQyxPQUFaLEVBQ0E7QUFBQTs7QUFDSUEsa0JBQVVBLFdBQVcsRUFBckI7QUFDQSxhQUFLQyxPQUFMLEdBQWVELFFBQVFDLE9BQVIsSUFBbUIsU0FBbEM7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLE9BQU9GLFFBQVFFLGFBQWYsS0FBaUMsV0FBakMsR0FBK0NGLFFBQVFFLGFBQXZELEdBQXVFLElBQTVGO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixPQUFPSCxRQUFRRyxTQUFmLEtBQTZCLFdBQTdCLEdBQTJDSCxRQUFRRyxTQUFuRCxHQUErRCxJQUFoRjtBQUNBLGFBQUtDLElBQUwsR0FBWUosUUFBUUksSUFBUixJQUFnQixNQUE1QjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxDQUFDLEVBQUQsQ0FBYjtBQUNIOztBQUVEOzs7Ozs7Ozs7O2dDQU1RQyxLLEVBQU9DLFksRUFDZjtBQUNJLGlCQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0JGLEtBQWhCO0FBQ0EsZ0JBQUlDLFlBQUosRUFDQTtBQUNJRCxzQkFB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cUIsQ0FBaEM7QUFDQTBCO0FBQ0gscUJBSkQ7QUFLSDtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUksbUJBQU8sRUFBRUUsT0FBT0YsS0FBVCxFQUFnQjFCLGdCQUFoQixFQUF5QjZCLFFBQVFILFFBQVExQixPQUF6QyxFQUFQO0FBQ0g7Ozs7OztBQUdMOzs7Ozs7O0FBT0E4QixPQUFPQyxPQUFQLEdBQWlCakMsTUFBakIiLCJmaWxlIjoic2ltcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGl4aS1jdWxsLlNwYXRpYWxIYXNoXHJcbi8vIENvcHlyaWdodCAyMDE4IFlPUEVZIFlPUEVZIExMQ1xyXG4vLyBEYXZpZCBGaWdhdG5lclxyXG4vLyBNSVQgTGljZW5zZVxyXG5cclxuY2xhc3MgU2ltcGxlXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBhIHNpbXBsZSBjdWxsXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnZpc2libGU9dmlzaWJsZV0gcGFyYW1ldGVyIG9mIHRoZSBvYmplY3QgdG8gc2V0ICh1c3VhbGx5IHZpc2libGUgb3IgcmVuZGVyYWJsZSlcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2FsY3VsYXRlUElYST10cnVlXSBjYWxjdWxhdGUgcGl4aS5qcyBib3VuZGluZyBib3ggYXV0b21hdGljYWxseTsgaWYgdGhpcyBpcyBzZXQgdG8gZmFsc2UgdGhlbiBpdCB1c2VzIG9iamVjdFtvcHRpb25zLkFBQkJdIGZvciBib3VuZGluZyBib3hcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kaXJ0eVRlc3Q9dHJ1ZV0gb25seSB1cGRhdGUgc3BhdGlhbCBoYXNoIGZvciBvYmplY3RzIHdpdGggb2JqZWN0W29wdGlvbnMuZGlydHlUZXN0XT10cnVlOyB0aGlzIGhhcyBhIEhVR0UgaW1wYWN0IG9uIHBlcmZvcm1hbmNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuQUFCQj1BQUJCXSBvYmplY3QgcHJvcGVydHkgdGhhdCBob2xkcyBib3VuZGluZyBib3ggc28gdGhhdCBvYmplY3RbdHlwZV0gPSB7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9OyBub3QgbmVlZGVkIGlmIG9wdGlvbnMuY2FsY3VsYXRlUElYST10cnVlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBvcHRpb25zLnZpc2libGUgfHwgJ3Zpc2libGUnXHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQSVhJID0gdHlwZW9mIG9wdGlvbnMuY2FsY3VsYXRlUElYSSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmNhbGN1bGF0ZVBJWEkgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5kaXJ0eVRlc3QgPSB0eXBlb2Ygb3B0aW9ucy5kaXJ0eVRlc3QgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5kaXJ0eVRlc3QgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5BQUJCID0gb3B0aW9ucy5BQUJCIHx8ICdBQUJCJ1xyXG4gICAgICAgIHRoaXMubGlzdHMgPSBbW11dXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBiZSBjdWxsZWRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0aWNPYmplY3RdIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QncyBwb3NpdGlvbi9zaXplIGRvZXMgbm90IGNoYW5nZVxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFycmF5XHJcbiAgICAgKi9cclxuICAgIGFkZExpc3QoYXJyYXksIHN0YXRpY09iamVjdClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3RzLnB1c2goYXJyYXkpXHJcbiAgICAgICAgaWYgKHN0YXRpY09iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFycmF5LnN0YXRpY09iamVjdCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FsY3VsYXRlUElYSSAmJiB0aGlzLmRpcnR5VGVzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBhcnJheSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGFuIGFycmF5IGFkZGVkIGJ5IGFkZExpc3QoKVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhcnJheVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMaXN0KGFycmF5KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGlzdHMuc3BsaWNlKHRoaXMubGlzdHMuaW5kZXhPZihhcnJheSksIDEpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgYW4gb2JqZWN0IHRvIGJlIGN1bGxlZFxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXRpY09iamVjdF0gc2V0IHRvIHRydWUgaWYgdGhlIG9iamVjdCdzIHBvc2l0aW9uL3NpemUgZG9lcyBub3QgY2hhbmdlXHJcbiAgICAgKiBAcmV0dXJuIHsqfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgYWRkKG9iamVjdCwgc3RhdGljT2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzdGF0aWNPYmplY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3Quc3RhdGljT2JqZWN0ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVQSVhJICYmICh0aGlzLmRpcnR5VGVzdCB8fCBzdGF0aWNPYmplY3QpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RzWzBdLnB1c2gob2JqZWN0KVxyXG4gICAgICAgIHJldHVybiBvYmplY3RcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBhbiBvYmplY3QgYWRkZWQgYnkgYWRkKClcclxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJuIHsqfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKG9iamVjdClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpc3RzWzBdLnNwbGljZSh0aGlzLmxpc3RzWzBdLmluZGV4T2Yob2JqZWN0KSwgMSlcclxuICAgICAgICByZXR1cm4gb2JqZWN0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjdWxsIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBieSBzZXR0aW5nIHZpc2libGUgcGFyYW1ldGVyXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYm91bmRzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLnhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3VuZHMueVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy53aWR0aFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy5oZWlnaHRcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBVcGRhdGVdIHNraXAgdXBkYXRpbmcgdGhlIEFBQkIgYm91bmRpbmcgYm94IG9mIGFsbCBvYmplY3RzXHJcbiAgICAgKi9cclxuICAgIGN1bGwoYm91bmRzLCBza2lwVXBkYXRlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZVBJWEkgJiYgIXNraXBVcGRhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdHMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMubGlzdHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgbGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gb2JqZWN0W3RoaXMuQUFCQl1cclxuICAgICAgICAgICAgICAgIG9iamVjdFt0aGlzLnZpc2libGVdID1cclxuICAgICAgICAgICAgICAgICAgICBib3gueCArIGJveC53aWR0aCA+IGJvdW5kcy54ICYmIGJveC54IDwgYm91bmRzLnggKyBib3VuZHMud2lkdGggJiZcclxuICAgICAgICAgICAgICAgICAgICBib3gueSArIGJveC5oZWlnaHQgPiBib3VuZHMueSAmJiBib3gueSA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlIHRoZSBBQUJCIGZvciBhbGwgb2JqZWN0c1xyXG4gICAgICogYXV0b21hdGljYWxseSBjYWxsZWQgZnJvbSB1cGRhdGUoKSB3aGVuIGNhbGN1bGF0ZVBJWEk9dHJ1ZSBhbmQgc2tpcFVwZGF0ZT1mYWxzZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVPYmplY3RzKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eVRlc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMubGlzdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghbGlzdC5zdGF0aWNPYmplY3QpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIGxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9iamVjdC5zdGF0aWNPYmplY3QgJiYgb2JqZWN0W3RoaXMuZGlydHldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdChvYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbdGhpcy5kaXJ0eV0gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0LnN0YXRpY09iamVjdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgbGlzdClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2JqZWN0LnN0YXRpY09iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlIHRoZSBoYXMgb2YgYW4gb2JqZWN0XHJcbiAgICAgKiBhdXRvbWF0aWNhbGx5IGNhbGxlZCBmcm9tIHVwZGF0ZU9iamVjdHMoKVxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgdXBkYXRlT2JqZWN0KG9iamVjdClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib3ggPSBvYmplY3QuZ2V0TG9jYWxCb3VuZHMoKVxyXG4gICAgICAgIG9iamVjdFt0aGlzLkFBQkJdID0gb2JqZWN0W3RoaXMuQUFCQl0gfHwge31cclxuICAgICAgICBvYmplY3RbdGhpcy5BQUJCXS54ID0gb2JqZWN0LnggKyBib3gueCAqIG9iamVjdC5zY2FsZS54XHJcbiAgICAgICAgb2JqZWN0W3RoaXMuQUFCQl0ueSA9IG9iamVjdC55ICsgYm94LnkgKiBvYmplY3Quc2NhbGUueVxyXG4gICAgICAgIG9iamVjdFt0aGlzLkFBQkJdLndpZHRoID0gYm94LndpZHRoICogb2JqZWN0LnNjYWxlLnhcclxuICAgICAgICBvYmplY3RbdGhpcy5BQUJCXS5oZWlnaHQgPSBib3guaGVpZ2h0ICogb2JqZWN0LnNjYWxlLnlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluZWQgd2l0aGluIGJvdW5kaW5nIGJveFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGJvdWRucyBib3VuZGluZyBib3ggdG8gc2VhcmNoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLnhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3VuZHMueVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy53aWR0aFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy5oZWlnaHRcclxuICAgICAqIEByZXR1cm4ge29iamVjdFtdfSBzZWFyY2ggcmVzdWx0c1xyXG4gICAgICovXHJcbiAgICBxdWVyeShib3VuZHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBvYmplY3RbdGhpcy5BQUJCXVxyXG4gICAgICAgICAgICAgICAgaWYgKGJveC54ICsgYm94LndpZHRoID4gYm91bmRzLnggJiYgYm94LnggLSBib3gud2lkdGggPCBib3VuZHMueCArIGJvdW5kcy53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJveC55ICsgYm94LmhlaWdodCA+IGJvdW5kcy55ICYmIGJveC55IC0gYm94LmhlaWdodCA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpdGVyYXRlcyB0aHJvdWdoIG9iamVjdHMgY29udGFpbmVkIHdpdGhpbiBib3VuZGluZyBib3hcclxuICAgICAqIHN0b3BzIGl0ZXJhdGluZyBpZiB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYm91bmRzIGJvdW5kaW5nIGJveCB0byBzZWFyY2hcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3VuZHMueFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdW5kcy55XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLndpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm91bmRzLmhlaWdodFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgY2FsbGJhY2sgcmV0dXJuZWQgZWFybHlcclxuICAgICAqL1xyXG4gICAgcXVlcnlDYWxsYmFjayhib3VuZHMsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBvYmplY3RbdGhpcy5BQUJCXVxyXG4gICAgICAgICAgICAgICAgaWYgKGJveC54ICsgYm94LndpZHRoID4gYm91bmRzLnggJiYgYm94LnggLSBib3gud2lkdGggPCBib3VuZHMueCArIGJvdW5kcy53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJveC55ICsgYm94LmhlaWdodCA+IGJvdW5kcy55ICYmIGJveC55IC0gYm94LmhlaWdodCA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sob2JqZWN0KSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHN0YXRzIChvbmx5IHVwZGF0ZWQgYWZ0ZXIgdXBkYXRlKCkgaXMgY2FsbGVkKVxyXG4gICAgICogQHJldHVybiB7U2ltcGxlU3RhdHN9XHJcbiAgICAgKi9cclxuICAgIHN0YXRzKClcclxuICAgIHtcclxuICAgICAgICBsZXQgdmlzaWJsZSA9IDAsIGNvdW50ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5saXN0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChvYmplY3QgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSArPSBvYmplY3QudmlzaWJsZSA/IDEgOiAwXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHRvdGFsOiBjb3VudCwgdmlzaWJsZSwgY3VsbGVkOiBjb3VudCAtIHZpc2libGUgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gU2ltcGxlU3RhdHNcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvdGFsXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB2aXNpYmxlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdWxsZWRcclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBsZSJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvZGUvc3BhdGlhbC1oYXNoLmpzIl0sIm5hbWVzIjpbIlNwYXRpYWxIYXNoIiwib3B0aW9ucyIsInhTaXplIiwic2l6ZSIsInlTaXplIiwiQUFCQiIsInR5cGUiLCJzcGF0aWFsIiwiY2FsY3VsYXRlUElYSSIsInZpc2libGVUZXh0IiwidmlzaWJsZVRlc3QiLCJzaW1wbGVUZXN0IiwiZGlydHlUZXN0IiwidmlzaWJsZSIsImRpcnR5Iiwid2lkdGgiLCJoZWlnaHQiLCJoYXNoIiwib2JqZWN0cyIsImNvbnRhaW5lcnMiLCJvYmplY3QiLCJzdGF0aWNPYmplY3QiLCJoYXNoZXMiLCJ1cGRhdGVPYmplY3QiLCJwdXNoIiwic3BsaWNlIiwibGlzdCIsImluZGV4T2YiLCJyZW1vdmVGcm9tSGFzaCIsImNvbnRhaW5lciIsImFkZGVkIiwiYmluZCIsInJlbW92ZWQiLCJjaGlsZHJlbiIsImN1bGwiLCJvbiIsInN0YXRpYyIsImZvckVhY2giLCJvZmYiLCJza2lwVXBkYXRlIiwidXBkYXRlT2JqZWN0cyIsImludmlzaWJsZSIsInF1ZXJ5IiwibGFzdEJ1Y2tldHMiLCJib3giLCJnZXRMb2NhbEJvdW5kcyIsIngiLCJzY2FsZSIsInkiLCJnZXRCb3VuZHMiLCJ4U3RhcnQiLCJ5U3RhcnQiLCJ4RW5kIiwieUVuZCIsImxlbmd0aCIsImtleSIsImluc2VydCIsIm1pbmltdW0iLCJNYXRoIiwiZmxvb3IiLCJwb3AiLCJyZXN1bHRzIiwiY29uY2F0IiwiYnVja2V0cyIsImVudHJ5IiwiY2FsbGJhY2siLCJpIiwiY291bnQiLCJ0b3RhbCIsImN1bGxlZCIsIk9iamVjdCIsImtleXMiLCJnZXRCdWNrZXRzIiwibGFyZ2VzdCIsIkluZmluaXR5Iiwic3BsaXQiLCJwYXJzZUludCIsImdldFdvcmxkQm91bmRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXO0FBRUY7Ozs7Ozs7Ozs7Ozs7O0FBY0EseUJB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UCxHQUE4QixLQUFLd0UsY0FBTCxFQUZ6RTtBQUFBLGdCQUVZM0IsTUFGWixRQUVZQSxNQUZaO0FBQUEsZ0JBRW9CQyxNQUZwQixRQUVvQkEsTUFGcEI7QUFBQSxnQkFFNEJDLElBRjVCLFFBRTRCQSxJQUY1QjtBQUFBLGdCQUVrQ0MsSUFGbEMsUUFFa0NBLElBRmxDOztBQUdJLGlCQUFLLElBQUlMLElBQUlHLE1BQWIsRUFBcUJILElBQUlLLElBQXpCLEVBQStCTCxHQUEvQixFQUNBO0FBQ0kscUJBQUssSUFBSUYsSUFBSUksTUFBYixFQUFxQkosSUFBSU0sSUFBekIsRUFBK0JOLEdBQS9CLEVBQ0E7QUFDSXFCLDZCQUFVLEtBQUtsRCxJQUFMLENBQVU2QixJQUFJLEdBQUosR0FBVUUsQ0FBcEIsSUFBeUIsQ0FBekIsR0FBNkIsQ0FBdkM7QUFDQW9CO0FBQ0g7QUFDSjtBQUNELG1CQUFPRCxRQUFRQyxLQUFmO0FBQ0g7Ozs7OztBQUdMOzs7Ozs7O0FBT0E7Ozs7Ozs7O0FBUUE7Ozs7Ozs7O0FBUUFVLE9BQU9DLE9BQVAsR0FBaUIvRSxXQUFqQiIsImZpbGUiOiJzcGF0aWFsLWhhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOCBZT1BFWSBZT1BFWSBMTENcclxuLy8gRGF2aWQgRmlnYXRuZXJcclxuLy8gTUlUIExpY2Vuc2VcclxuXHJcbmNsYXNzIFNwYXRpYWxIYXNoXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBhIHNwYXRpYWwtaGFzaCBjdWxsXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc2l6ZT0xMDAwXSBjZWxsIHNpemUgdXNlZCB0byBjcmVhdGUgaGFzaCAoeFNpemUgPSB5U2l6ZSlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy54U2l6ZV0gaG9yaXpvbnRhbCBjZWxsIHNpemVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy55U2l6ZV0gdmVydGljYWwgY2VsbCBzaXplXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNhbGN1bGF0ZVBJWEk9dHJ1ZV0gY2FsY3VsYXRlIGJvdW5kaW5nIGJveCBhdXRvbWF0aWNhbGx5OyBpZiB0aGlzIGlzIHNldCB0byBmYWxzZSB0aGVuIGl0IHVzZXMgb2JqZWN0W29wdGlvbnMuQUFCQl0gZm9yIGJvdW5kaW5nIGJveFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52aXNpYmxlPXZpc2libGVdIHBhcmFtZXRlciBvZiB0aGUgb2JqZWN0IHRvIHNldCAodXN1YWxseSB2aXNpYmxlIG9yIHJlbmRlcmFibGUpXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNpbXBsZVRlc3Q9dHJ1ZV0gaXRlcmF0ZSB0aHJvdWdoIHZpc2libGUgYnVja2V0cyB0byBjaGVjayBmb3IgYm91bmRzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlydHlUZXN0PXRydWVdIG9ubHkgdXBkYXRlIHNwYXRpYWwgaGFzaCBmb3Igb2JqZWN0cyB3aXRoIG9iamVjdFtvcHRpb25zLmRpcnR5VGVzdF09dHJ1ZTsgdGhpcyBoYXMgYSBIVUdFIGltcGFjdCBvbiBwZXJmb3JtYW5jZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLkFBQkI9QUFCQl0gb2JqZWN0IHByb3BlcnR5IHRoYXQgaG9sZHMgYm91bmRpbmcgYm94IHNvIHRoYXQgb2JqZWN0W3R5cGVdID0geyB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNwYXRpYWw9c3BhdGlhbF0gb2JqZWN0IHByb3BlcnR5IHRoYXQgaG9sZHMgb2JqZWN0J3MgaGFzaCBsaXN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlydHk9ZGlydHldIG9iamVjdCBwcm9wZXJ0eSBmb3IgZGlydHlUZXN0XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cclxuICAgICAgICB0aGlzLnhTaXplID0gb3B0aW9ucy54U2l6ZSB8fCBvcHRpb25zLnNpemUgfHwgMTAwMFxyXG4gICAgICAgIHRoaXMueVNpemUgPSBvcHRpb25zLnlTaXplIHx8IG9wdGlvbnMuc2l6ZSB8fCAxMDAwXHJcbiAgICAgICAgdGhpcy5BQUJCID0gb3B0aW9ucy50eXBlIHx8ICdBQUJCJ1xyXG4gICAgICAgIHRoaXMuc3BhdGlhbCA9IG9wdGlvbnMuc3BhdGlhbCB8fCAnc3BhdGlhbCdcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBJWEkgPSB0eXBlb2Ygb3B0aW9ucy5jYWxjdWxhdGVQSVhJICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuY2FsY3VsYXRlUElYSSA6IHRydWVcclxuICAgICAgICB0aGlzLnZpc2libGVUZXh0ID0gdHlwZW9mIG9wdGlvbnMudmlzaWJsZVRlc3QgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy52aXNpYmxlVGVzdCA6IHRydWVcclxuICAgICAgICB0aGlzLnNpbXBsZVRlc3QgPSB0eXBlb2Ygb3B0aW9ucy5zaW1wbGVUZXN0ICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2ltcGxlVGVzdCA6IHRydWVcclxuICAgICAgICB0aGlzLmRpcnR5VGVzdCA9IHR5cGVvZiBvcHRpb25zLmRpcnR5VGVzdCAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmRpcnR5VGVzdCA6IHRydWVcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBvcHRpb25zLnZpc2libGUgfHwgJ3Zpc2libGUnXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IG9wdGlvbnMuZGlydHkgfHwgJ2RpcnR5J1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmhlaWdodCA9IDBcclxuICAgICAgICB0aGlzLmhhc2ggPSB7fVxyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBhbiBvYmplY3QgdG8gYmUgY3VsbGVkXHJcbiAgICAgKiBzaWRlIGVmZmVjdDogYWRkcyBvYmplY3Quc3BhdGlhbEhhc2hlcyB0byB0cmFjayBleGlzdGluZyBoYXNoZXNcclxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0aWNPYmplY3RdIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QncyBwb3NpdGlvbi9zaXplIGRvZXMgbm90IGNoYW5nZVxyXG4gICAgICogQHJldHVybiB7Kn0gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGFkZChvYmplY3QsIHN0YXRpY09iamVjdClcclxuICAgIHtcclxuICAgICAgICBvYmplY3RbdGhpcy5zcGF0aWFsXSA9IHsgaGFzaGVzOiBbXSB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FsY3VsYXRlUElYSSAmJiB0aGlzLmRpcnR5VGVzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdFt0aGlzLmRpcnR5XSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXRpY09iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdC5zdGF0aWNPYmplY3QgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlT2JqZWN0KG9iamVjdClcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNbMF0ucHVzaChvYmplY3QpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgYW4gb2JqZWN0IGFkZGVkIGJ5IGFkZCgpXHJcbiAgICAgKiBAcGFyYW0geyp9IG9iamVjdFxyXG4gICAgICogQHJldHVybiB7Kn0gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZShvYmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzWzBdLnNwbGljZSh0aGlzLmxpc3RbMF0uaW5kZXhPZihvYmplY3QpLCAxKVxyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUhhc2gob2JqZWN0KVxyXG4gICAgICAgIHJldHVybiBvYmplY3RcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBhbiBhcnJheSBvZiBvYmplY3RzIHRvIGJlIGN1bGxlZFxyXG4gICAgICogQHBhcmFtIHtQSVhJLkNvbnRhaW5lcn0gY29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0aWNPYmplY3RdIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3RzIGluIHRoZSBjb250YWluZXIncyBwb3NpdGlvbi9zaXplIGRvIG5vdCBjaGFuZ2VcclxuICAgICAqIG5vdGU6IHRoaXMgb25seSB3b3JrcyB3aXRoIHBpeGkgdjUuMC4wcmMyKyBiZWNhdXNlIGl0IHJlbGllcyBvbiB0aGUgbmV3IGNvbnRhaW5lciBldmVudHMgY2hpbGRBZGRlZCBhbmQgY2hpbGRSZW1vdmVkXHJcbiAgICAgKi9cclxuICAgIGFkZENvbnRhaW5lcihjb250YWluZXIsIHN0YXRpY09iamVjdClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBhZGRlZCA9IGZ1bmN0aW9uKG9iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdFt0aGlzLnNwYXRpYWxdID0geyBoYXNoZXM6IFtdIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgIH0uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVkID0gZnVuY3Rpb24gKG9iamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUhhc2gob2JqZWN0KVxyXG4gICAgICAgIH0uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgY29udGFpbmVyLmNoaWxkcmVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2JqZWN0W3RoaXMuc3BhdGlhbF0gPSB7IGhhc2hlczogW10gfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdChvYmplY3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5jdWxsID0ge31cclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpXHJcbiAgICAgICAgY29udGFpbmVyLm9uKCdjaGlsZEFkZGVkJywgYWRkZWQpXHJcbiAgICAgICAgY29udGFpbmVyLm9uKCdjaGlsZFJlbW92ZWQnLCByZW1vdmVkKVxyXG4gICAgICAgIGNvbnRhaW5lci5jdWxsLmFkZGVkID0gYWRkZWRcclxuICAgICAgICBjb250YWluZXIuY3VsbC5yZW1vdmVkID0gcmVtb3ZlZFxyXG4gICAgICAgIGlmIChzdGF0aWNPYmplY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250YWluZXIuY3VsbC5zdGF0aWMgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlIGFuIGFycmF5IGFkZGVkIGJ5IGFkZENvbnRhaW5lcigpXHJcbiAgICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXJcclxuICAgICAqIEByZXR1cm4ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQ29udGFpbmVyKGNvbnRhaW5lcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuc3BsaWNlKHRoaXMuY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lciksIDEpXHJcbiAgICAgICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2gob2JqZWN0ID0+IHRoaXMucmVtb3ZlRnJvbUhhc2gob2JqZWN0KSlcclxuICAgICAgICBjb250YWluZXIub2ZmKCdhZGRlZCcsIGNvbnRhaW5lci5jdWxsLmFkZGVkKVxyXG4gICAgICAgIGNvbnRhaW5lci5vZmYoJ3JlbW92ZWQnLCBjb250YWluZXIuY3VsbC5yZW1vdmVkKVxyXG4gICAgICAgIGRlbGV0ZSBjb250YWluZXIuY3VsbFxyXG4gICAgICAgIHJldHVybiBjb250YWluZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHVwZGF0ZSB0aGUgaGFzaGVzIGFuZCBjdWxsIHRoZSBpdGVtcyBpbiB0aGUgbGlzdFxyXG4gICAgICogQHBhcmFtIHtBQUJCfSBBQUJCXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwVXBkYXRlXSBza2lwIHVwZGF0aW5nIHRoZSBoYXNoZXMgb2YgYWxsIG9iamVjdHNcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gbnVtYmVyIG9mIGJ1Y2tldHMgaW4gcmVzdWx0c1xyXG4gICAgICovXHJcbiAgICBjdWxsKEFBQkIsIHNraXBVcGRhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFza2lwVXBkYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3RzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnZpc2libGUoKVxyXG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSB0aGlzLnF1ZXJ5KEFBQkIsIHRoaXMuc2ltcGxlVGVzdClcclxuICAgICAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdFt0aGlzLnZpc2libGVdID0gdHJ1ZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0QnVja2V0c1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IGFsbCBvYmplY3RzIGluIGhhc2ggdG8gdmlzaWJsZT1mYWxzZVxyXG4gICAgICovXHJcbiAgICBpbnZpc2libGUoKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGNvbnRhaW5lciBvZiB0aGlzLmNvbnRhaW5lcnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0W3RoaXMudmlzaWJsZV0gPSBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cGRhdGUgdGhlIGhhc2hlcyBmb3IgYWxsIG9iamVjdHNcclxuICAgICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGZyb20gdXBkYXRlKCkgd2hlbiBza2lwVXBkYXRlPWZhbHNlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU9iamVjdHMoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5VGVzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiB0aGlzLm9iamVjdHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RbdGhpcy5kaXJ0eV0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFt0aGlzLmRpcnR5XSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgY29udGFpbmVyIG9mIHRoaXMuY29udGFpbmVycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIGNvbnRhaW5lci5jaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0W3RoaXMuZGlydHldKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbdGhpcy5kaXJ0eV0gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb250YWluZXIgb2YgdGhpcy5jb250YWluZXJzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5jdWxsLnN0YXRpYylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChvYmplY3QgPT4gdGhpcy51cGRhdGVPYmplY3Qob2JqZWN0KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHVwZGF0ZSB0aGUgaGFzIG9mIGFuIG9iamVjdFxyXG4gICAgICogYXV0b21hdGljYWxseSBjYWxsZWQgZnJvbSB1cGRhdGVPYmplY3RzKClcclxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gZm9yY2UgdXBkYXRlIGZvciBjYWxjdWxhdGVQSVhJXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU9iamVjdChvYmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IEFBQkJcclxuICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVQSVhJKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gb2JqZWN0LmdldExvY2FsQm91bmRzKClcclxuICAgICAgICAgICAgQUFCQiA9IG9iamVjdFt0aGlzLkFBQkJdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogb2JqZWN0LnggKyBib3gueCAqIG9iamVjdC5zY2FsZS54LFxyXG4gICAgICAgICAgICAgICAgeTogb2JqZWN0LnkgKyBib3gueSAqIG9iamVjdC5zY2FsZS55LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCAqIG9iamVjdC5zY2FsZS54LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0ICogb2JqZWN0LnNjYWxlLnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBQUJCID0gb2JqZWN0W3RoaXMuQUFCQl1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzcGF0aWFsID0gb2JqZWN0W3RoaXMuc3BhdGlhbF1cclxuICAgICAgICBpZiAoIXNwYXRpYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzcGF0aWFsID0gb2JqZWN0W3RoaXMuc3BhdGlhbF0gPSB7IGhhc2hlczogW10gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHhTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kIH0gPSB0aGlzLmdldEJvdW5kcyhBQUJCKVxyXG5cclxuICAgICAgICAvLyBvbmx5IHJlbW92ZSBhbmQgaW5zZXJ0IGlmIG1hcHBpbmcgaGFzIGNoYW5nZWRcclxuICAgICAgICBpZiAoc3BhdGlhbC54U3RhcnQgIT09IHhTdGFydCB8fCBzcGF0aWFsLnlTdGFydCAhPT0geVN0YXJ0IHx8IHNwYXRpYWwueEVuZCAhPT0geEVuZCB8fCBzcGF0aWFsLnlFbmQgIT09IHlFbmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc3BhdGlhbC5oYXNoZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21IYXNoKG9iamVjdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDw9IHlFbmQ7IHkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhTdGFydDsgeCA8PSB4RW5kOyB4KyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0geCArICcsJyArIHlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydChvYmplY3QsIGtleSlcclxuICAgICAgICAgICAgICAgICAgICBzcGF0aWFsLmhhc2hlcy5wdXNoKGtleSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGF0aWFsLnhTdGFydCA9IHhTdGFydFxyXG4gICAgICAgICAgICBzcGF0aWFsLnlTdGFydCA9IHlTdGFydFxyXG4gICAgICAgICAgICBzcGF0aWFsLnhFbmQgPSB4RW5kXHJcbiAgICAgICAgICAgIHNwYXRpYWwueUVuZCA9IHlFbmRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIGJ1Y2tldHMgd2l0aCA+PSBtaW5pbXVtIG9mIG9iamVjdHMgaW4gZWFjaCBidWNrZXRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluaW11bT0xXVxyXG4gICAgICogQHJldHVybiB7YXJyYXl9IGFycmF5IG9mIGJ1Y2tldHNcclxuICAgICAqL1xyXG4gICAgZ2V0QnVja2V0cyhtaW5pbXVtPTEpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGFzaGVzID0gW11cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5oYXNoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IHRoaXMuaGFzaFtrZXldXHJcbiAgICAgICAgICAgIGlmIChoYXNoLmxlbmd0aCA+PSBtaW5pbXVtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNoZXMucHVzaChoYXNoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXNoZXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHMgaGFzaCBib3VuZHNcclxuICAgICAqIEBwYXJhbSB7QUFCQn0gQUFCQlxyXG4gICAgICogQHJldHVybiB7Qm91bmRzfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZ2V0Qm91bmRzKEFBQkIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHhTdGFydCA9IE1hdGguZmxvb3IoQUFCQi54IC8gdGhpcy54U2l6ZSlcclxuICAgICAgICBsZXQgeVN0YXJ0ID0gTWF0aC5mbG9vcihBQUJCLnkgLyB0aGlzLnlTaXplKVxyXG4gICAgICAgIGxldCB4RW5kID0gTWF0aC5mbG9vcigoQUFCQi54ICsgQUFCQi53aWR0aCkgLyB0aGlzLnhTaXplKVxyXG4gICAgICAgIGxldCB5RW5kID0gTWF0aC5mbG9vcigoQUFCQi55ICsgQUFCQi5oZWlnaHQpIC8gdGhpcy55U2l6ZSlcclxuICAgICAgICByZXR1cm4geyB4U3RhcnQsIHlTdGFydCwgeEVuZCwgeUVuZCB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpbnNlcnQgb2JqZWN0IGludG8gdGhlIHNwYXRpYWwgaGFzaFxyXG4gICAgICogYXV0b21hdGljYWxseSBjYWxsZWQgZnJvbSB1cGRhdGVPYmplY3QoKVxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0KG9iamVjdCwga2V5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNoW2tleV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmhhc2hba2V5XSA9IFtvYmplY3RdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzaFtrZXldLnB1c2gob2JqZWN0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZXMgb2JqZWN0IGZyb20gdGhlIGhhc2ggdGFibGVcclxuICAgICAqIHNob3VsZCBiZSBjYWxsZWQgd2hlbiByZW1vdmluZyBhbiBvYmplY3RcclxuICAgICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGZyb20gdXBkYXRlT2JqZWN0KClcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlRnJvbUhhc2gob2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNwYXRpYWwgPSBvYmplY3RbdGhpcy5zcGF0aWFsXVxyXG4gICAgICAgIHdoaWxlIChzcGF0aWFsLmhhc2hlcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzcGF0aWFsLmhhc2hlcy5wb3AoKVxyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYXNoW2tleV1cclxuICAgICAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKG9iamVjdCksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGFsbCBuZWlnaGJvcnMgdGhhdCBzaGFyZSB0aGUgc2FtZSBoYXNoIGFzIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHsqfSBvYmplY3QgaW4gdGhlIHNwYXRpYWwgaGFzaFxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IG9mIG9iamVjdHMgdGhhdCBhcmUgaW4gdGhlIHNhbWUgaGFzaCBhcyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgbmVpZ2hib3JzKG9iamVjdClcclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdXHJcbiAgICAgICAgb2JqZWN0W3RoaXMuc3BhdGlhbF0uaGFzaGVzLmZvckVhY2goa2V5ID0+IHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdCh0aGlzLmhhc2hba2V5XSkpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluZWQgd2l0aGluIGJvdW5kaW5nIGJveFxyXG4gICAgICogQHBhcmFtIHtBQUJCfSBBQUJCIGJvdW5kaW5nIGJveCB0byBzZWFyY2hcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbXBsZVRlc3Q9dHJ1ZV0gcGVyZm9ybSBhIHNpbXBsZSBib3VuZHMgY2hlY2sgb2YgYWxsIGl0ZW1zIGluIHRoZSBidWNrZXRzXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gc2VhcmNoIHJlc3VsdHNcclxuICAgICAqL1xyXG4gICAgcXVlcnkoQUFCQiwgc2ltcGxlVGVzdClcclxuICAgIHtcclxuICAgICAgICBzaW1wbGVUZXN0ID0gdHlwZW9mIHNpbXBsZVRlc3QgIT09ICd1bmRlZmluZWQnID8gc2ltcGxlVGVzdCA6IHRydWVcclxuICAgICAgICBsZXQgYnVja2V0cyA9IDBcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdXHJcbiAgICAgICAgY29uc3QgeyB4U3RhcnQsIHlTdGFydCwgeEVuZCwgeUVuZCB9ID0gdGhpcy5nZXRCb3VuZHMoQUFCQilcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDw9IHlFbmQ7IHkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB4U3RhcnQ7IHggPD0geEVuZDsgeCsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuaGFzaFt4ICsgJywnICsgeV1cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2ltcGxlVGVzdClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBlbnRyeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm94ID0gb2JqZWN0W3RoaXMuQUFCQl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3gueCArIGJveC53aWR0aCA+IEFBQkIueCAmJiBib3gueCA8IEFBQkIueCArIEFBQkIud2lkdGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC55ICsgYm94LmhlaWdodCA+IEFBQkIueSAmJiBib3gueSA8IEFBQkIueSArIEFBQkIuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChvYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KGVudHJ5KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidWNrZXRzKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RCdWNrZXRzID0gYnVja2V0c1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpdGVyYXRlcyB0aHJvdWdoIG9iamVjdHMgY29udGFpbmVkIHdpdGhpbiBib3VuZGluZyBib3hcclxuICAgICAqIHN0b3BzIGl0ZXJhdGluZyBpZiB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlXHJcbiAgICAgKiBAcGFyYW0ge0FBQkJ9IEFBQkIgYm91bmRpbmcgYm94IHRvIHNlYXJjaFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbXBsZVRlc3Q9dHJ1ZV0gcGVyZm9ybSBhIHNpbXBsZSBib3VuZHMgY2hlY2sgb2YgYWxsIGl0ZW1zIGluIHRoZSBidWNrZXRzXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGNhbGxiYWNrIHJldHVybmVkIGVhcmx5XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5Q2FsbGJhY2soQUFCQiwgY2FsbGJhY2ssIHNpbXBsZVRlc3QpXHJcbiAgICB7XHJcbiAgICAgICAgc2ltcGxlVGVzdCA9IHR5cGVvZiBzaW1wbGVUZXN0ICE9PSAndW5kZWZpbmVkJyA/IHNpbXBsZVRlc3QgOiB0cnVlXHJcbiAgICAgICAgY29uc3QgeyB4U3RhcnQsIHlTdGFydCwgeEVuZCwgeUVuZCB9ID0gdGhpcy5nZXRCb3VuZHMoQUFCQilcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDw9IHlFbmQ7IHkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB4U3RhcnQ7IHggPD0geEVuZDsgeCsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuaGFzaFt4ICsgJywnICsgeV1cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJ5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gZW50cnlbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpbXBsZVRlc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEFBQkIgPSBvYmplY3QuQUFCQlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFBQkIueCArIEFBQkIud2lkdGggPiBBQUJCLnggJiYgQUFCQi54IDwgQUFCQi54ICsgQUFCQi53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQUFCQi55ICsgQUFCQi5oZWlnaHQgPiBBQUJCLnkgJiYgQUFCQi55IDwgQUFCQi55ICsgQUFCQi5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKG9iamVjdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhvYmplY3QpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgc3RhdHNcclxuICAgICAqIEByZXR1cm4ge1N0YXRzfVxyXG4gICAgICovXHJcbiAgICBzdGF0cygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZpc2libGUgPSAwLCBjb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMuY29udGFpbmVycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gbGlzdC5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSArPSBvYmplY3QudmlzaWJsZSA/IDEgOiAwXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG90YWw6IGNvdW50LFxyXG4gICAgICAgICAgICB2aXNpYmxlLFxyXG4gICAgICAgICAgICBjdWxsZWQ6IGNvdW50IC0gdmlzaWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlbHBlciBmdW5jdGlvbiB0byBldmFsdWF0ZSBoYXNoIHRhYmxlXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgYnVja2V0cyBpbiB0aGUgaGFzaCB0YWJsZVxyXG4gICAgICogKi9cclxuICAgIGdldE51bWJlck9mQnVja2V0cygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFzaCkubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gZXZhbHVhdGUgaGFzaCB0YWJsZVxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgYXZlcmFnZSBudW1iZXIgb2YgZW50cmllcyBpbiBlYWNoIGJ1Y2tldFxyXG4gICAgICovXHJcbiAgICBnZXRBdmVyYWdlU2l6ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmhhc2gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0b3RhbCArPSB0aGlzLmhhc2hba2V5XS5sZW5ndGhcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsIC8gdGhpcy5nZXRCdWNrZXRzKCkubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWxwZXIgZnVuY3Rpb24gdG8gZXZhbHVhdGUgdGhlIGhhc2ggdGFibGVcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGxhcmdlc3Qgc2l6ZWQgYnVja2V0XHJcbiAgICAgKi9cclxuICAgIGdldExhcmdlc3QoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsYXJnZXN0ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmhhc2gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNoW2tleV0ubGVuZ3RoID4gbGFyZ2VzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VzdCA9IHRoaXMuaGFzaFtrZXldLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYXJnZXN0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIHF1YWRyYW50IGJvdW5kc1xyXG4gICAgICogQHJldHVybiB7Qm91bmRzfVxyXG4gICAgICovXHJcbiAgICBnZXRXb3JsZEJvdW5kcygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHhTdGFydCA9IEluZmluaXR5LCB5U3RhcnQgPSBJbmZpbml0eSwgeEVuZCA9IDAsIHlFbmQgPSAwXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFzaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0ga2V5LnNwbGl0KCcsJylcclxuICAgICAgICAgICAgbGV0IHggPSBwYXJzZUludChzcGxpdFswXSlcclxuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChzcGxpdFsxXSlcclxuICAgICAgICAgICAgeFN0YXJ0ID0geCA8IHhTdGFydCA/IHggOiB4U3RhcnRcclxuICAgICAgICAgICAgeVN0YXJ0ID0geSA8IHlTdGFydCA/IHkgOiB5U3RhcnRcclxuICAgICAgICAgICAgeEVuZCA9IHggPiB4RW5kID8geCA6IHhFbmRcclxuICAgICAgICAgICAgeUVuZCA9IHkgPiB5RW5kID8geSA6IHlFbmRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgeFN0YXJ0LCB5U3RhcnQsIHhFbmQsIHlFbmQgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGVscGVyIGZ1bmN0aW9uIHRvIGV2YWx1dGUgdGhlIGhhc2ggdGFibGVcclxuICAgICAqIEBwYXJhbSB7QUFCQn0gW0FBQkJdIGJvdW5kaW5nIGJveCB0byBzZWFyY2ggb3IgZW50aXJlIHdvcmxkXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHNwYXJzZW5lc3MgcGVyY2VudGFnZSAoaS5lLiwgYnVja2V0cyB3aXRoIGF0IGxlYXN0IDEgZWxlbWVudCBkaXZpZGVkIGJ5IHRvdGFsIHBvc3NpYmxlIGJ1Y2tldHMpXHJcbiAgICAgKi9cclxuICAgIGdldFNwYXJzZW5lc3MoQUFCQilcclxuICAgIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwLCB0b3RhbCA9IDBcclxuICAgICAgICBjb25zdCB7IHhTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kIH0gPSBBQUJCID8gdGhpcy5nZXRCb3VuZHMoQUFCQikgOiB0aGlzLmdldFdvcmxkQm91bmRzKClcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDwgeUVuZDsgeSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhTdGFydDsgeCA8IHhFbmQ7IHgrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY291bnQgKz0gKHRoaXMuaGFzaFt4ICsgJywnICsgeV0gPyAxIDogMClcclxuICAgICAgICAgICAgICAgIHRvdGFsKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY291bnQgLyB0b3RhbFxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gU3RhdHNcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvdGFsXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB2aXNpYmxlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjdWxsZWRcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gQm91bmRzXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4U3RhcnRcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlTdGFydFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0geEVuZFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0geEVuZFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gICogQHR5cGVkZWYge29iamVjdH0gQUFCQlxyXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IHhcclxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5XHJcbiAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGhcclxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHRcclxuICAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTcGF0aWFsSGFzaCJdfQ==

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

/***/ })

}]);
//# sourceMappingURL=7.core_script_compiled.js.map