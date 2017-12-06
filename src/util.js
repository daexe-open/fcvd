const isType = (type) => (value) => typeof value === type
const isVType = (type) => (vnode) => vnode.type === type
export const isUndefined = isType('undefined')
export const isString = isType('string')
export const isBool = isType('boolean')
export const isNumber = isType('number')
export const isFunction = isType('function')
export const isNull = (value) => value === null
export const isNative = isVType('native')
export const isThunk = isVType('thunk')
export const isText = isVType('text')
export const isSameThunk = (pre, next) => pre.fn === next.fn

export const isEventProp = (name) =>  /^on/.test(name)
export const extractEventName = (name) => name.slice(2).toLowerCase()
export const isCustomProp = (name) =>  isEventProp(name)  || name === 'forceUpdate'