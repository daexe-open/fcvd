/** @jsx creatNode */
import { creatNode, initNode, component } from "../src/index"
import MyButton from "./myButton"
import {IF, ELSE, FOR} from "../src/tpl"
class main extends component {
    constructor() {
        super()
        this.aa = -1;
        this.bb = -1;
        this.data = [{ name: "11", href: "22" }]
    }
    log(e) {
        console.log(e.target.value);
    }
    render({ props, children }) {
        return (<ul style="list-style: none;">
            <li className="item" onClick={() => alert('hi!')}>item 1</li>
            <li className="item">
                <input type="checkbox" checked={true} />
                <input type="text" onInput={this.log.bind(this)} />
            </li>
            {/* this node will always be updated */}
            <li forceUpdate={true}>text</li>
            <MyButton className="button">hello, button</MyButton>
            <IF cond={this.aa > 0}>
                aa 大于 0
            <ELSE cond={this.bb > 0}>
                    aa 小于 0
                bb 大于 0
                <ELSE>
                        aa 小于 0
                   bb 小于 0
                </ELSE>
                </ELSE>
            </IF>
            <FOR data={this.data} key="item">
                <a href="__item.href__" >__item.name__ -  __item.index__</a>
                <div><span>__item.href__ </span></div>
            </FOR>
        </ul>)
    }

}

let renderGlobal = initNode(document.body)
renderGlobal(new main().render({ props: {}, children: [] }))


