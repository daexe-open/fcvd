import { creatNode, initNode, component } from "../index"
import { deepClone, findChildren } from "../util"
class elseBox extends component {
    constructor() {
        super()
    }

    render({ props, children }) {
        if (Object.keys(props).indexOf("cond") >= 0) {
            let elseChildren = findChildren(children, "else")
            
            let _children = children;
            if (elseChildren.index >= 0) {
                let _children = deepClone(children)
                _children.splice(elseChildren.index, 1);
            }
            if (props.cond) {
                return (<div>{_children}</div>)
            } else {
                return (<div>{elseChildren.children}</div>)
            }
        } else {
            return (<div>{children}</div>)
        }

    }
}

export default elseBox