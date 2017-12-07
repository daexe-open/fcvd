import { createElement } from './createElement'
import { updateElement, updateTarget } from "./updateElement"

export default function initNode(container) {
    let node, oldNode
    //派发更新操作
    let dispatch = effect => effect == "updateAll" && updateAll()


    if (container) container.innerHTML = ''

    function create(vnode, context = container) {
        node = createElement(vnode, dispatch)
        context.appendChild(node)
        oldNode = vnode
        return node
    }

    function update(vnode = oldNode, context = container) {
        updateElement(context, oldNode, vnode)
        oldNode = vnode
    }

    function updateAll(vnode = oldNode, context = container) {
        console.log("updateAll updateAll")
        updateTarget(context, oldNode, vnode)
    }


    return (vnode) => {
        return node ? update(vnode.$dom || vnode) : create(vnode.$dom || vnode)
    }
}