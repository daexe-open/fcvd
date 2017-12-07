## fcvd
fcvd = function & class virtual dom, it's pure, simlpe and fast to render JSX tpl. Now it's depend on babel to transform jsx tpl to the func, we may support selfdefine tpl in next version.

## npm module
you can install fcvd:
```
npm install fcvd --save-dev
```

## how to use

fcvd support function component and class component, typeof class = function.
for the function component example, the code as follows, you can also see the example folder: 
```
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

```

for the function component, see as follows:
```
/** @jsx creatNode */
import { creatNode, initNode, component } from "../src/index"
class myButton  extends component{
    constructor(){
        super()
        this.count = 0;
    }
    addCount() {
        this.count++;
        this.$update();
    }
    render({ props, children}) {
        return (<button onClick={this.addCount.bind(this)} {...props}>{children}{this.count}</button>)
    }
}

export default myButton
```

you can run the example with:
```
npm run run:example
```
you can use it freely!

## todo
many!