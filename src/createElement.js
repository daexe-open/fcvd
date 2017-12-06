import { isUndefined, isString, isNumber, isFunction, isNull, isNative, isThunk, isText, isSameThunk } from './util'
import { setAttributes } from "./attribute"
import { addEventListeners } from "./event"

/**
 * 生成文本节点
 * @param text 节点值
 * @returns {Text}
 */
function createTextNode(text) {
    let value = isString(text) || isNumber(text) ? text : ''
    return document.createTextNode(value)
}

/**
 * thunk => real node
 * @param vnode
 */
function createThunk(vnode) {
    let { props, children } = vnode
    let { onCreate } = vnode.options
    let model = {
        children,
        props
    }
    //render model
    let output = vnode.fn(model)
    
    let DOMElement = createElement(output)

    addEventListeners(DOMElement, output.attributes)
    if (onCreate) onCreate(model)
    vnode.state = {
        vnode: output,
        model
    }
    return DOMElement
}

/**
 * html节点
 * @param {*} vnode 
 */
function createHTMLElement(vnode) {
    const $el = document.createElement(vnode.tagName)
    setAttributes($el, vnode.attributes)
    addEventListeners($el, vnode.attributes);
    vnode.children
        .map(createElement)
        .forEach($el.appendChild.bind($el));

    return $el
}

/**
 * 生成空dom
 * @returns {Element}
 */
function createEmptyHTMLElement() {
    return document.createElement('noscript')
}

/**
 * virtual dom -> dom
 * @param vnode
 */
export function createElement(vnode) {
    if (isNull(vnode) || isUndefined(vnode)) return
    switch (vnode.type) {
        case 'text':
            return createTextNode(vnode.nodeValue)
        case 'thunk':
            return createThunk(vnode)
        case 'empty':
            return createEmptyHTMLElement()
        case 'native':
            return createHTMLElement(vnode)
    }
}