import { creatNode, initNode, component, createDom } from "../src/index"
import main from "./main"

let renderGlobal = initNode(document.body)
// need update the ins data, so pass the ins；if no need update the ins data, so just pass the vdom which return by render func
renderGlobal(new main())

document.body.appendChild(createDom(new main().render()))


