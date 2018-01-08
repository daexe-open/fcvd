import { creatNode, initNode, component } from "../index"
import {deepClone, findChildren} from "../util"
class ifBox extends component {
    constructor() {
        super()
    }
    render({ props, children }) {
        let _children = deepClone(children)
        let elseBox = findChildren(children, "else")
        elseBox.index >= 0 && _children.splice(elseBox.index, 1);
        if (props.cond) {
            return (<div>{_children}</div>)
        } else {
            return (<div>{elseBox.children}</div>)
        }
    }
}

export default ifBox