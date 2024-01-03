exports.ids = [4];
exports.modules = {

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];
function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "t"])(val)] = def();
    return props;
  }, {});
}
const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);
const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);
const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);
const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return undefined;
  }
  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center

  className += `-${val}`;
  return className.toLowerCase();
}
const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },
  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);
    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }
    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }
}));

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "t"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "t"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.

  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6

  className += `-${val}`;
  return className.toLowerCase();
}
const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);
    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }
    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }
}));

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1b0c823a&



var lib_vue_loader_options_pagesvue_type_template_id_1b0c823a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    attrs: {
      "justify": "center",
      "align": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('button', {
    staticStyle: {
      "border": "1px solid #000",
      "color": "#000"
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("세이브")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "border": "1px solid #000",
      "color": "#000"
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.load
    }
  }, [_vm._v("로드")]), _vm._v(" "), _c('button', {
    staticStyle: {
      "border": "1px solid #000",
      "color": "#000"
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.makeSvg
    }
  }, [_vm._v("svg 저장")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "400px",
      "border": "1px solid #ddd"
    },
    attrs: {
      "id": "myDiagramDiv"
    }
  })])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1b0c823a&

// EXTERNAL MODULE: external "gojs"
var external_gojs_ = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

// import * as fs from "fs";
let myDiagram;
function init() {
  // Since 2.2 you can also author concise templates with method chaining instead of GraphObject.make
  // For details, see https://gojs.net/latest/intro/buildingObjects.html
  const $ = external_gojs_["GraphObject"].make; // for conciseness in defining templates

  myDiagram = new external_gojs_["Diagram"]("myDiagramDiv",
  // must be the ID or reference to div
  {
    allowCopy: false,
    allowDelete: false,
    //initialAutoScale: go.Diagram.Uniform,
    maxSelectionCount: 1,
    // users can select only one part at a time
    validCycle: external_gojs_["Diagram"].CycleDestinationTree,
    // make sure users can only create trees
    "clickCreatingTool.archetypeNodeData": {
      // 뒷 배경 누르면 새로운 노드 생성
      name: "(new person)",
      title: "",
      comments: ""
    },
    "clickCreatingTool.insertPart": function (loc) {
      // method override must be function, not =>
      const node = external_gojs_["ClickCreatingTool"].prototype.insertPart.call(this, loc);
      if (node !== null) {
        this.diagram.select(node);
        this.diagram.commandHandler.scrollToPart(node);
        this.diagram.commandHandler.editTextBlock(node.findObject("NAMETB"));
      }
      return node;
    },
    layout: $(external_gojs_["TreeLayout"], {
      treeStyle: external_gojs_["TreeLayout"].StyleLastParents,
      arrangement: external_gojs_["TreeLayout"].ArrangementHorizontal,
      // properties for most of the tree:
      angle: 180,
      layerSpacing: 35,
      // properties for the "last parents":
      alternateAngle: 90,
      alternateLayerSpacing: 35,
      alternateAlignment: external_gojs_["TreeLayout"].AlignmentBus,
      alternateNodeSpacing: 20
    }),
    "undoManager.isEnabled": true // enable undo & redo
  });

  myDiagram.animationManager.isEnabled = false;
  // when the document is modified, add a "*" to the title and enable the "Save" button
  myDiagram.addDiagramListener("Modified", e => {
    const button = document.getElementById("SaveButton");
    if (button) button.disabled = !myDiagram.isModified;
    const idx = document.title.indexOf("*");
    if (myDiagram.isModified) {
      if (idx < 0) document.title += "*";
    } else {
      if (idx >= 0) document.title = document.title.slice(0, idx);
    }
  });
  const levelColors = ["#AC193D", "#2672EC", "#8C0095", "#5133AB", "#008299", "#D24726", "#008A00", "#094AB2"];

  // override TreeLayout.commitNodes to also modify the background brush based on the tree depth level
  myDiagram.layout.commitNodes = function () {
    // method override must be function, not =>
    external_gojs_["TreeLayout"].prototype.commitNodes.call(this); // do the standard behavior
    // then go through all of the vertexes and set their corresponding node's Shape.fill
    // to a brush dependent on the TreeVertex.level value
    myDiagram.layout.network.vertexes.each(v => {
      if (v.node) {
        const level = v.level % levelColors.length;
        const color = levelColors[level];
        const shape = v.node.findObject("SHAPE");
        if (shape) shape.stroke = $(external_gojs_["Brush"], "Linear", {
          0: color,
          1: external_gojs_["Brush"].lightenBy(color, 0.05),
          start: external_gojs_["Spot"].Left,
          end: external_gojs_["Spot"].Right
        });
      }
    });
  };

  // this is used to determine feedback during drags
  function mayWorkFor(node1, node2) {
    if (!(node1 instanceof external_gojs_["Node"])) return false; // must be a Node
    if (node1 === node2) return false; // cannot work for yourself
    if (node2.isInTreeOf(node1)) return false; // cannot work for someone who works for you
    return true;
  }

  // This function provides a common style for most of the TextBlocks.
  // Some of these values may be overridden in a particular TextBlock.
  function textStyle() {
    return {
      font: "9pt  Segoe UI,sans-serif",
      stroke: "white"
    };
  }

  // This converter is used by the Picture.
  function findHeadShot(pic) {
    if (!pic) return "image/img1.png"; // There are only 16 images on the server
    return "image/img" + pic;
  }

  // define the Node template
  myDiagram.nodeTemplate = $(external_gojs_["Node"], "Spot", {
    selectionObjectName: "BODY",
    mouseEnter: (e, node) => node.findObject("BUTTON").opacity = node.findObject("BUTTONX").opacity = 1,
    mouseLeave: (e, node) => node.findObject("BUTTON").opacity = node.findObject("BUTTONX").opacity = 0,
    // handle dragging a Node onto a Node to (maybe) change the reporting relationship
    mouseDragEnter: (e, node, prev) => {
      const diagram = node.diagram;
      const selnode = diagram.selection.first();
      if (!mayWorkFor(selnode, node)) return;
      const shape = node.findObject("SHAPE");
      if (shape) {
        shape._prevFill = shape.fill; // remember the original brush
        shape.fill = "darkred";
      }
    },
    mouseDragLeave: (e, node, next) => {
      const shape = node.findObject("SHAPE");
      if (shape && shape._prevFill) {
        shape.fill = shape._prevFill; // restore the original brush
      }
    },

    mouseDrop: (e, node) => {
      const diagram = node.diagram;
      const selnode = diagram.selection.first(); // assume just one Node in selection
      if (mayWorkFor(selnode, node)) {
        // find any existing link into the selected node
        const link = selnode.findTreeParentLink();
        if (link !== null) {
          // reconnect any existing link
          link.fromNode = node;
        } else {
          // else create a new link
          diagram.toolManager.linkingTool.insertLink(node, node.port, selnode, selnode.port);
        }
      }
    }
  },
  // for sorting, have the Node.text be the data.name
  new external_gojs_["Binding"]("text", "name"),
  // bind the Part.layerName to control the Node's layer depending on whether it isSelected
  new external_gojs_["Binding"]("layerName", "isSelected", sel => sel ? "Foreground" : "").ofObject(), $(external_gojs_["Panel"], "Auto", {
    name: "BODY"
  },
  // define the node's outer shape
  $(external_gojs_["Shape"], "Rectangle", {
    name: "SHAPE",
    fill: "#333333",
    stroke: 'white',
    strokeWidth: 3.5,
    portId: ""
  }), $(external_gojs_["Panel"], "Horizontal", $(external_gojs_["Picture"], {
    name: "Picture",
    desiredSize: new external_gojs_["Size"](70, 70),
    margin: 1.5,
    source: "image/img1.png" // the default image
  }, new external_gojs_["Binding"]("source", "pic", findHeadShot)),
  // define the panel where the text will appear
  $(external_gojs_["Panel"], "Table", {
    minSize: new external_gojs_["Size"](130, NaN),
    maxSize: new external_gojs_["Size"](150, NaN),
    margin: new external_gojs_["Margin"](6, 10, 0, 6),
    defaultAlignment: external_gojs_["Spot"].Left
  }, $(external_gojs_["RowColumnDefinition"], {
    column: 2,
    width: 4
  }), $(external_gojs_["TextBlock"], textStyle(),
  // the name
  {
    name: "NAMETB",
    row: 0,
    column: 0,
    columnSpan: 5,
    font: "12pt Segoe UI,sans-serif",
    editable: true,
    isMultiline: false,
    minSize: new external_gojs_["Size"](50, 16)
  }, new external_gojs_["Binding"]("text", "name").makeTwoWay()), $(external_gojs_["TextBlock"], "Title : ", textStyle(), {
    row: 1,
    column: 0
  }), $(external_gojs_["TextBlock"], textStyle(), {
    row: 1,
    column: 1,
    columnSpan: 4,
    editable: true,
    isMultiline: false,
    minSize: new external_gojs_["Size"](50, 14),
    margin: new external_gojs_["Margin"](0, 0, 0, 3)
  }, new external_gojs_["Binding"]("text", "title").makeTwoWay()), $(external_gojs_["TextBlock"], "Key : ", textStyle(), {
    row: 2,
    column: 0
  }), $(external_gojs_["TextBlock"], textStyle(), {
    row: 2,
    column: 1,
    editable: true
  }, new external_gojs_["Binding"]("text", "key").makeTwoWay()), $(external_gojs_["TextBlock"], "Cmm : ", textStyle(), {
    row: 3,
    column: 0
  }), $(external_gojs_["TextBlock"], textStyle(),
  // the comments
  {
    row: 3,
    column: 1,
    columnSpan: 5,
    font: "italic 9pt sans-serif",
    wrap: external_gojs_["TextBlock"].WrapFit,
    editable: true,
    // by default newlines are allowed
    minSize: new external_gojs_["Size"](100, 14)
  }, new external_gojs_["Binding"]("text", "comments").makeTwoWay())) // end Table Panel
  ) // end Horizontal Panel
  ),
  // end Auto Panel
  $("Button", $(external_gojs_["Shape"], "PlusLine", {
    width: 10,
    height: 10
  }), {
    name: "BUTTON",
    alignment: external_gojs_["Spot"].Right,
    opacity: 0,
    // initially not visible
    click: (e, button) => addEmployee(button.part)
  },
  // button is visible either when node is selected or on mouse-over
  new external_gojs_["Binding"]("opacity", "isSelected", s => s ? 1 : 0).ofObject()), new external_gojs_["Binding"]("isTreeExpanded").makeTwoWay(), $("TreeExpanderButton", {
    name: "BUTTONX",
    alignment: external_gojs_["Spot"].Bottom,
    opacity: 0,
    // initially not visible
    "_treeExpandedFigure": "TriangleUp",
    "_treeCollapsedFigure": "TriangleDown"
  },
  // button is visible either when node is selected or on mouse-over
  new external_gojs_["Binding"]("opacity", "isSelected", s => s ? 1 : 0).ofObject())); // end Node, a Spot Panel

  function addEmployee(node) {
    if (!node) return;
    const thisemp = node.data;
    myDiagram.startTransaction("add employee");
    const newemp = {
      name: "(new person)",
      title: "(title)",
      comments: "",
      parent: thisemp.key
    };
    myDiagram.model.addNodeData(newemp);
    const newnode = myDiagram.findNodeForData(newemp);
    if (newnode) newnode.location = node.location;
    myDiagram.commitTransaction("add employee");
    myDiagram.commandHandler.scrollToPart(newnode);
  }

  // the context menu allows users to make a position vacant,
  // remove a role and reassign the subtree, or remove a department
  myDiagram.nodeTemplate.contextMenu = $("ContextMenu", $("ContextMenuButton", $(external_gojs_["TextBlock"], "Add Employee"), {
    click: (e, button) => addEmployee(button.part.adornedPart)
  }), $("ContextMenuButton", $(external_gojs_["TextBlock"], "Vacate Position"), {
    click: (e, button) => {
      const node = button.part.adornedPart;
      if (node !== null) {
        const thisemp = node.data;
        myDiagram.startTransaction("vacate");
        // update the key, name, picture, and comments, but leave the title
        myDiagram.model.setDataProperty(thisemp, "name", "(Vacant)");
        myDiagram.model.setDataProperty(thisemp, "pic", "");
        myDiagram.model.setDataProperty(thisemp, "comments", "");
        myDiagram.commitTransaction("vacate");
      }
    }
  }), $("ContextMenuButton", $(external_gojs_["TextBlock"], "Remove Role"), {
    click: (e, button) => {
      // reparent the subtree to this node's boss, then remove the node
      const node = button.part.adornedPart;
      if (node !== null) {
        myDiagram.startTransaction("reparent remove");
        const chl = node.findTreeChildrenNodes();
        // iterate through the children and set their parent key to our selected node's parent key
        while (chl.next()) {
          const emp = chl.value;
          myDiagram.model.setParentKeyForNodeData(emp.data, node.findTreeParentNode().data.key);
        }
        // and now remove the selected node itself
        myDiagram.model.removeNodeData(node.data);
        myDiagram.commitTransaction("reparent remove");
      }
    }
  }), $("ContextMenuButton", $(external_gojs_["TextBlock"], "Remove Department"), {
    click: (e, button) => {
      // remove the whole subtree, including the node itself
      const node = button.part.adornedPart;
      if (node !== null) {
        myDiagram.startTransaction("remove dept");
        myDiagram.removeParts(node.findTreeParts());
        myDiagram.commitTransaction("remove dept");
      }
    }
  }));

  // define the Link template
  myDiagram.linkTemplate = $(external_gojs_["Link"], external_gojs_["Link"].Orthogonal, {
    layerName: "Background",
    corner: 5
  }, $(external_gojs_["Shape"], {
    strokeWidth: 1.5,
    stroke: "#000"
  })); // the link shape

  // read in the JSON-format data from the "mySavedModel" element
  load();

  // support editing the properties of the selected person in HTML
  if (window.Inspector) {
    let myInspector = new Inspector("myInspector", myDiagram, {
      properties: {
        "key": {
          readOnly: true
        },
        "comments": {}
      }
    });
  }
} // end init

function load() {
  loadModelFromJSONFile(); // json 불러오기
}

function loadModelFromJSONFile() {
  //GoJS 형식의 데이터 추가하기 위한 변수 설정
  let data = {
    "class": "go.TreeModel",
    "nodeDataArray": []
  };

  //로컬 스토리지에 요소 리스트가 값이 있는지 체크
  if (localStorage.getItem("list") === undefined || localStorage.getItem("list") === null) {
    //임시 초기 데이터
    let list = [{
      key: 0,
      name: "사용자",
      title: "제목",
      pic: "1.png",
      comments: "코멘트 내용 추가 가능"
    }];
    localStorage.setItem("list", JSON.stringify(list));
  }

  //그리드 내 요소 리스트 GoJS형식 변환
  let listLoad = localStorage.getItem("list");
  data.nodeDataArray = JSON.parse(listLoad);
  myDiagram.model = external_gojs_["Model"].fromJson(data);

  //줌 값 설정
  myDiagram.scale = parseFloat(localStorage.getItem('zoom')) || 1;

  //로컬 스토리지에 요소 position 값이 있는지 체크
  if (localStorage.getItem("nodePosition") === undefined || localStorage.getItem("nodePosition") === null) {
    let nodePosition = [{
      key: 0,
      x: 0,
      y: 0
    }];
    localStorage.setItem("nodePosition", JSON.stringify(nodePosition));
  }

  //그리드 내 요소 위치 설정
  let savedNodePosition = JSON.parse(localStorage.getItem("nodePosition"));
  let nodePositionValue = 0;
  let nodePositionTimer = setInterval(function () {
    if (nodePositionValue >= 1) {
      savedNodePosition.forEach(function (savedPosition) {
        let node = myDiagram.findNodeForKey(savedPosition.key);
        if (node) {
          node.location = new external_gojs_["Point"](savedPosition.x, savedPosition.y);
        }
        clearInterval(nodePositionTimer);
      });
    } else {
      nodePositionValue++;
    }
  });

  //화면 이동 값 설정
  let savedPosition = JSON.parse(localStorage.getItem('position')) || {
    x: 0,
    y: 0
  };
  let positionValue = 0;
  let positionTimer = setInterval(function () {
    if (positionValue >= 1) {
      myDiagram.position = new external_gojs_["Point"](savedPosition.x, savedPosition.y);
      clearInterval(positionTimer);
    } else {
      positionValue++;
    }
  }, 1);
}
function myCallback(blob) {
  var url = window.URL.createObjectURL(blob);
  var filename = "mySVGFile.svg";
  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = filename;
  // IE 11
  if (window.navigator.msSaveBlob !== undefined) {
    window.navigator.msSaveBlob(blob, filename);
    return;
  }
  document.body.appendChild(a);
  requestAnimationFrame(function () {
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  });
}
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  mounted() {
    init();
    console.log();
  },
  methods: {
    load() {
      loadModelFromJSONFile(); // 노드 설정값 가져오기
    },

    save() {
      let zoom = myDiagram.scale; //줌 값
      let position = myDiagram.position; //화면 이동한 값
      let nodePosition = []; //요소 리스트

      myDiagram.nodes.each(function (node) {
        let data = node.data;
        let location = node.location;
        nodePosition.push({
          key: data.key,
          x: location.x,
          y: location.y
        });
      });

      //로컬 히스토리 저장
      localStorage.setItem('zoom', zoom); //줌 저장
      localStorage.setItem('position', JSON.stringify(position)); //화면 이동한 위치
      localStorage.setItem('list', JSON.stringify(myDiagram.model.Tc)); //그리드 내 요소
      localStorage.setItem('nodePosition', JSON.stringify(nodePosition)); //각 요소 위치값
    },

    //SVG로 저장
    makeSvg() {
      let svg = myDiagram.makeImage({
        scale: 1,
        background: "white"
      });
      let svgstr = new XMLSerializer().serializeToString(svg);
      let blob = new Blob([svgstr], {
        type: "image/jpg"
      });
      myCallback(blob);
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  lib_vue_loader_options_pagesvue_type_template_id_1b0c823a_render,
  staticRenderFns,
  false,
  null,
  null,
  "02d78bf4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map