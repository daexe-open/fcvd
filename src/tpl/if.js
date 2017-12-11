/** @jsx creatNode */
import { creatNode, initNode, component } from "../index"
import {deepClone} from "../util"
class ifBox extends component {
    constructor() {
        super()
    }
    findChildren(children, key) {
        let index = -1;
        let _children = children.find((item, i) => {
            if (item.fn && item.fn.toString().match(key)) {
                index = i;
                return true;
            }
        });
        return { index, children: _children }
    }
    render({ props, children }) {
        let _children = deepClone(children)
        let elseBox = this.findChildren(children, "else")
        elseBox.index >= 0 && _children.splice(elseBox.index, 1);
        if (props.cond) {
            return (<div>{_children}</div>)
        } else {
            return (<div>{elseBox.children}</div>)
        }
    }
}

export default ifBox