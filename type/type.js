(function () {
    var root=this;
    // 定义对象
    var $= function (obj) {
        if (obj instanceof $) return obj;
        if (!(this instanceof $)) return new $(obj);
        // this._wrapped = obj;
    };
    root.$=$;
    var toString=Object.prototype.toString;
    $.isArray = function (arr) {
        return toString.call(arr).slice(8, 13) === "Array";
    };
    $.isNull = function (obj) {
        return toString.call(obj).slice(8, 12) === "Null";
    };
    $.isUndefined = function (obj) {
        return typeof obj === "undefined";
    };
    //    包装类  typeof==object
    //    Object.protoType.toString.call();=====[object String/Number]
    $.isNumber = function (num) {
        return typeof num === "number" || toString.call(num).slice(8, 14) === "Number";
    };
    $.isString = function (str) {
        return typeof str === "string" || toString.call(str).slice(8, 14) === "String";
    };
    $.isBoolean = function (bool) {
        return typeof bool === "boolean" || toString.call(bool).slice(8, 15) === "Boolean";
    };
    $.isFunction = function (obj) {
        return typeof bool === "function";
    };
    //    自定义类  typeof==object
    // [object Object]======constructor
    $.isSelfClass = function (obj) {
        console.log("自定义类" + obj.constructor);
    };
    $.isDate = function (date) {
        return toString.call(obj).slice(8, 12) === "Null";
    };
    $.isReg = function (reg) {
        return toString.call(obj).slice(8, 14) === "RegExp";
    };
    $.isError=function (error) {
        return toString.call(obj).slice(8, 13) === "Error";
    }
}.call(this));
//判断是否为原生对象
/*
isPlainObject:function (value) {
    if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var proto=value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(value) === proto;
},*/
