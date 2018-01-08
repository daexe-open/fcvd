import { creatNode, initNode, component, createDom } from "./index"
import main from "./main"


// need update the ins data, so pass the ins；if no need update the ins data, so just pass the vdom which return by render func
console.time("renderTime with class")
let renderGlobal = initNode(document.body)
renderGlobal(new main())

console.timeEnd("renderTime with class")

console.time("renderTime with dom")

document.body.appendChild(createDom(new main().render()))

console.timeEnd("renderTime with dom")

