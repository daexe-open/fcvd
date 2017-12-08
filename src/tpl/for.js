/** @jsx creatNode */
import { creatNode, initNode, component } from "../index"
import { JSON2Hash } from "../util"
class forBox extends component {
    constructor() {
        super()
    }
    handlePath(item, hashData) {
        let paths = item.match(/__(.*?)__/g)
        paths && paths.forEach(path => {
            item = item.replace(path, hashData[path.substring(2, path.length - 2)])
        })
        return item;
    }
    handleAttribute(attributes, hashData) {
        Object.keys(attributes).forEach(key => {
            attributes[key] = this.handlePath(attributes[key], hashData)
        })
    }
    handleChildren(children, hashData) {
        children.forEach(item => {
            if (item.nodeValue) {
                item.nodeValue = this.handlePath(item.nodeValue, hashData)
            }
            item.attributes && this.handleAttribute(item.attributes, hashData)
            item.children && this.handleChildren(item.children, hashData)
        })
    }
    render({ props, children }) {
        if (props.data) {
            let hashData = "";
            props.data.forEach((item, i) => {
                item.index = i;
                hashData = JSON2Hash(item, props.key || "item");
                this.handleChildren(children, hashData);
            })
            return (<div>{children}</div>)
        } else {
            return ("")
        }
    }
}

export default forBox