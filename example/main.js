/** @jsx creatNode */
import { creatNode, initNode, component } from "../src/index"
import MyButton from "./myButton"
class main extends component {
    constructor() {
        super()

    }
    log(e) {
        console.log(e.target.value);
    }
    render({ props, children}) {
        return (<ul style="list-style: none;">
            <li className="item" onClick={() => alert('hi!')}>item 1</li>
            <li className="item">
                <input type="checkbox" checked={true} />
                <input type="text" onInput={this.log.bind(this)} />
            </li>
            {/* this node will always be updated */}
            <li forceUpdate={true}>text</li>
            <MyButton className="button">hello, button</MyButton>
        </ul>)
    }

}

let renderGlobal = initNode(document.body)
renderGlobal(new main().render({ props:{}, children:[] }))


