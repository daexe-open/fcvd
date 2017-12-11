/** @jsx creatNode */
import { creatNode, initNode, component } from "../index"
import {deepClone} from "../util"
class elseBox extends component {
    constructor() {
        super()
    }
    render({ props, children }) {
        if (Object.keys(props).indexOf("cond") >= 0) {
            let index = -1;
            let elseChildren = children.find((item, i) => {
                index = i;
                return item.fn && item.fn.toString().match("else");
            });
            let _children = deepClone(children)
            _children.splice(index, 1);
            if (props.cond) {
                return (<div>{_children}</div>)
            } else {
                return (<div>{elseChildren}</div>)
            }
        } else {
            return (<div>{children}</div>)
        }

    }
}

export default elseBox