import { creatNode, initNode, component } from "../src/index"
import main from "./main"

let renderGlobal = initNode(document.body)

renderGlobal(new main())


