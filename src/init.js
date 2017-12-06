import { createElement } from './createElement'
import { updateElement } from "./updateElement"

export default function initNode(container) {
    let node, oldNode

    if (container) container.innerHTML = ''

    function create(vnode) {
        node = createElement(vnode)
        container.appendChild(node)
        oldNode = vnode
        return node
    }

    function update(vnode) {
        updateElement(container, oldNode, vnode)
        oldNode = vnode
    }

    return (vnode) => {
        return node ? update(vnode) : create(vnode)
    }
}