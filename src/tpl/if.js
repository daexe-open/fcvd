/** @jsx creatNode */
import { creatNode, initNode, component } from "../index"
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
        let elseBox = this.findChildren(children, "else")
        elseBox.index >= 0 && children.splice(elseBox.index, 1);
        if (props.cond) {
            return (<div>{children}</div>)
        } else {
            return (<div>{elseBox.children}</div>)
        }
    }
}

export default ifBox