// fcvd - daexe.com
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tpl = creatNode(
    "div",
    { "class": "head", "data-id": "123" },
    creatNode(
        "a",
        null,
        "hello JSX"
    ),
    creatNode(
        "ul",
        null,
        creatNode(
            "li",
            null,
            "test item 1"
        ),
        creatNode(
            "li",
            null,
            "test item 2"
        )
    )
);

exports.tpl = tpl;
