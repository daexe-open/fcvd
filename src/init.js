import { createElement } from './createElement'
import { updateElement, updateTarget } from "./updateElement"

export default function initNode(container) {
    let node, oldNode, ins;
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
        // console.log("updateAll updateAll")
        //add ins to fix bug: update the func element
        try {
            vnode = ins && ins.render()
        } catch (e) {

        }
        updateTarget(context, oldNode, vnode)
        // update oldnode, or may cause diff vdom bug
        oldNode = vnode
    }


    return (_ins) => {
        let vnode = _ins;
        if("render" in _ins) {
            vnode = _ins.render()
            ins = _ins;
            _ins.$update = _ins.$update.bind(this, () => {
                dispatch("updateAll")
            })
        }
        return node ? update(vnode) : create(vnode)
    }
}