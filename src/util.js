const isType = (type) => (value) => typeof value === type
const isVType = (type) => (vnode) => vnode.type === type
export const isUndefined = isType('undefined')
export const isString = isType('string')
export const isBool = isType('boolean')
export const isNumber = isType('number')
export const isFunction = (name) => name.toString().match("function")
export const isClass = (name) => name.toString().match("class")
export const isNull = (value) => value === null
export const isNative = isVType('native')
export const isThunk = isVType('thunk')
export const isText = isVType('text')
export const isSameThunk = (pre, next) => pre.fn === next.fn

export const isEventProp = (name) => /^on/.test(name)
export const extractEventName = (name) => name.slice(2).toLowerCase()
export const isCustomProp = (name) => isEventProp(name) || name === 'forceUpdate'

export const JSON2Hash = (data, path) => {
    let res = {};
    Object.keys(data).forEach(key => {
        res[path+"."+key] = data[key]
        if (typeof data[key] == "object") {
            res = Object.assign(res, JSON2Hash(data[key], path+"."+key))
        }
    })
    return res;
}