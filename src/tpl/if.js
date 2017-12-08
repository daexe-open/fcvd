/** @jsx creatNode */
import { creatNode, initNode, component } from "../index"
class ifBox extends component {
    constructor() {
        super()
    }
    render({ props, children }) {
        let index = -1;
        let elseChildren = children.find((item, i) => {
            index = i;
            return item.fn && item.fn.toString().match("else");
        });
        children.splice(index, 1);
        if (props.cond) {
            return (<div>{children}</div>)
        } else {
            return (<div>{elseChildren}</div>)
        }
    }
}

export default ifBox