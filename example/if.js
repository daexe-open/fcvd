// fcvd - daexe.com
'use strict';

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isType = function isType(type) {
    return function (value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) === type;
    };
};
var isUndefined = function isUndefined(name) {
    return isType('undefined')(name) && name == undefined;
};
var isString = isType('string');

var isNumber = isType('number');

 //change 2 "class " to avoid match className
var isNull = function isNull(value) {
    return value === null;
};



var isArray = Array.isArray;
var isObj = function isObj(name) {
    return Object.prototype.toString.call(name).slice(8, -1) == "Object";
};






var JSON2Hash = function JSON2Hash(data, path) {
    var res = {};
    Object.keys(data).forEach(function (key) {
        res[path + "." + key] = data[key];
        if (_typeof$1(data[key]) == "object") {
            res = Object.assign(res, JSON2Hash(data[key], path + "." + key));
        }
    });
    return res;
};

var findChildren = function findChildren(children, key) {
    var index = -1;
    var _children = children.reverse().find(function (item, i) {
        if (item.fn && item.fn.toString().match(key)) {
            index = i;
            return true;
        }
    });
    return { index: index, children: _children };
};

//深度克隆
var deepClone = function deepClone(obj) {
    var result;
    //确定result的类型
    if (isObj(obj)) {
        result = {};
    } else if (isArray(obj)) {
        result = [];
    } else {
        return obj;
    }
    for (var key in obj) {
        var copy = obj[key];
        if (isObj(copy)) {
            result[key] = deepClone(copy); //递归调用
        } else if (isArray(copy)) {
            result[key] = deepClone(copy);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createNode(type, attributes) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    if (!type) throw new TypeError('element() needs a type.');
    attributes = attributes || {};
    children = Array.prototype.reduce.call(children || [], reduceChildren, []);

    if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
        return createThunkElement(type.render, attributes, children, type);
    }

    if (typeof type === 'function') {
        return createThunkElement(type, attributes, children, type);
    }

    return {
        type: 'native',
        tagName: type,
        attributes: attributes,
        children: children
    };
}

/**
 * 生成vdom 对象
 * @param fn render 函数
 * @param props
 * @param children
 * @returns {{type: string, fn: *, attributes: *, children: *}}
 */
function createThunkElement(fn, props, children, options) {
    return {
        type: 'thunk',
        fn: fn,
        props: props,
        children: children,
        options: options
    };
}

function createTextElement(text) {
    return {
        type: 'text',
        nodeValue: text
    };
}

function createEmptyElement() {
    return {
        type: 'empty'
    };
}

function reduceChildren(children, vnode) {
    if (isString(vnode) || isNumber(vnode)) {
        children.push(createTextElement(vnode));
    } else if (isNull(vnode) || isUndefined(vnode)) {
        children.push(createEmptyElement());
    } else if (Array.isArray(vnode)) {
        children = [].concat(_toConsumableArray(children), _toConsumableArray(vnode.reduce(reduceChildren, [])));
    } else {
        children.push(vnode);
    }

    return children;
}

/**
 * 设置dom attribute
 * @param node dom
 * @param key  attribute key
 * @param value attribue value
 */


/**
 * set all attributes
 * @param {*} node 
 * @param {*} props 
 */


/**
 * 删除attribute
 * @param node
 * @param key
 * @param previousValue
 */


/**
 * 更新属性值
 * @param {*} node 
 * @param {*} name 
 * @param {*} newVal 
 * @param {*} oldVal 
 */

/**
 * 更新属性值
 * @param {*}  
 * @param {*} newProps 
 * @param {*} oldProps 
 */

/**
 * add event handler
 * @param {*}  
 * @param {*} props 
 */

/**
 * virtual dom -> dom
 * @param vnode
 */

/**
 * 更新node
 * @param node -dom node,  parent node of vdom
 * @param pre  -pre vnode
 * @param next -next vnode
 * @param index - child index in parent
 * @returns node
 */


/**
 * 更新node
 * @param node -dom node,  parent node of vdom
 * @param pre  -pre vnode
 * @param next -next vnode
 * @param index - child index in parent
 * @returns node
 */

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var component$1 = function () {
    function component() {
        _classCallCheck$1(this, component);
    }

    _createClass$1(component, [{
        key: "$update",
        value: function $update(dispatch) {
            dispatch && dispatch();
        }
    }, {
        key: "render",
        value: function render() {}
    }]);

    return component;
}();

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var forBox = function (_component) {
    _inherits$1(forBox, _component);

    function forBox() {
        _classCallCheck$2(this, forBox);

        return _possibleConstructorReturn$1(this, (forBox.__proto__ || Object.getPrototypeOf(forBox)).call(this));
    }

    _createClass$2(forBox, [{
        key: "handlePath",
        value: function handlePath(item, hashData) {
            var paths = item.match(/__(.*?)__/g);
            var d = "";
            paths && paths.forEach(function (path) {
                d = hashData[path.substring(2, path.length - 2)];
                item = item.replace(path, typeof d == "undefined" ? "" : d);
            });
            return item;
        }
    }, {
        key: "handleAttribute",
        value: function handleAttribute(attributes, hashData) {
            var _this2 = this;

            Object.keys(attributes).forEach(function (key) {
                attributes[key] = _this2.handlePath(attributes[key], hashData);
            });
        }
    }, {
        key: "handleChildren",
        value: function handleChildren(children, hashData) {
            var _this3 = this;

            children.forEach(function (item) {

                if (item.nodeValue) {
                    item.nodeValue = _this3.handlePath(item.nodeValue, hashData);
                }
                item.attributes && _this3.handleAttribute(item.attributes, hashData);
                item.children && _this3.handleChildren(item.children, hashData);
            });
            return children;
        }
    }, {
        key: "render",
        value: function render(_ref) {
            var _this4 = this;

            var props = _ref.props,
                children = _ref.children;

            if (props.data) {
                var hashData = "";
                var allChidren = [];
                props.data.forEach(function (item, i) {
                    item.index = i;
                    hashData = JSON2Hash(item, props.key || "item");
                    allChidren = allChidren.concat(_this4.handleChildren(deepClone(children), hashData));
                });

                return creatNode(
                    "div",
                    null,
                    allChidren
                );
            } else {
                return "";
            }
        }
    }]);

    return forBox;
}(component);

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var elseBox = function (_component) {
    _inherits$2(elseBox, _component);

    function elseBox() {
        _classCallCheck$3(this, elseBox);

        return _possibleConstructorReturn$2(this, (elseBox.__proto__ || Object.getPrototypeOf(elseBox)).call(this));
    }

    _createClass$3(elseBox, [{
        key: "render",
        value: function render(_ref) {
            var props = _ref.props,
                children = _ref.children;

            if (Object.keys(props).indexOf("cond") >= 0) {
                var elseChildren = findChildren(children, "else");

                var _children = children;
                if (elseChildren.index >= 0) {
                    var _children2 = deepClone(children);
                    _children2.splice(elseChildren.index, 1);
                }
                if (props.cond) {
                    return creatNode(
                        "div",
                        null,
                        _children
                    );
                } else {
                    return creatNode(
                        "div",
                        null,
                        elseChildren.children
                    );
                }
            } else {
                return creatNode(
                    "div",
                    null,
                    children
                );
            }
        }
    }]);

    return elseBox;
}(component);

var creatNode = createNode;

var component = component$1;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ifBox = function (_component) {
    _inherits(ifBox, _component);

    function ifBox() {
        _classCallCheck(this, ifBox);

        return _possibleConstructorReturn(this, (ifBox.__proto__ || Object.getPrototypeOf(ifBox)).call(this));
    }

    _createClass(ifBox, [{
        key: "render",
        value: function render(_ref) {
            var props = _ref.props,
                children = _ref.children;

            var _children = deepClone(children);
            var elseBox = findChildren(children, "else");
            elseBox.index >= 0 && _children.splice(elseBox.index, 1);
            if (props.cond) {
                return creatNode(
                    "div",
                    null,
                    _children
                );
            } else {
                return creatNode(
                    "div",
                    null,
                    elseBox.children
                );
            }
        }
    }]);

    return ifBox;
}(component);

module.exports = ifBox;
