/** @jsx creatNode */
import {creatNode, initNode}  from "../src/index"


let count = 0

let MyButton = {
    render: ({ props, children }) =>{
        return (<button onClick={addCount} {...props}>{children}{count}</button>)
    }
}

let Box ={
    render: ({ props, children }) => <ul style="list-style: none;">
        <li className="item" onClick={() => alert('hi!')}>item 1</li>
        <li className="item">
            <input type="checkbox" checked={true} />
            <input type="text" onInput={log} />
        </li>
        {/* this node will always be updated */}
        <li forceUpdate={true}>text</li>
        <MyButton className="button">hello, button</MyButton>
    </ul>
};


function log(e) {
    console.log(e.target.value);
}

function addCount() {
    count++
    app()
}

let render = initNode(document.body)
let app = () => {
    render(<Box></Box>)
}
app()
