(function () {
    var root=this;
    // 定义对象
    var $= function (obj) {
        if (obj instanceof $) return obj;
        if (!(this instanceof $)) return new $(obj);
        // this._wrapped = obj;
    };
    root.$=$;
    var objProto=Object.prototype;
    $.isArray=function (arr) {
        return objProto.toString.call(arr).slice(8, 13) === "Array";
    },
        $.isNull=function (obj) {
            return objProto.toString.call(obj).slice(8, 12) === "Null";
        },
        $.isUndefined=function (obj) {
            return typeof obj === "undefined";
        },
        //    包装类  typeof==object
        //    Object.protoType.toString.call();=====[object String/Number]
        $.isNumber=function (num) {
            return typeof num === "number"|| objProto.toString.call(num).slice(8,14) === "Number";
        },
        $.isString=function (str) {
            return typeof str === "string"|| objProto.toString.call(str).slice(8,14) === "String";
        },
        $.isBoolean=function (bool) {
            return typeof bool === "boolean"|| objProto.toString.call(bool).slice(8,15) === "Boolean";
        },
        $.isFunction=function (obj) {
            return typeof bool === "function";
        },
        //    自定义类  typeof==object
        // [object Object]======constructor
        $.isSelfClass=function (obj) {
            console.log("自定义类"+obj.constructor);
        },
        $.isDate=function (date) {
            return objProto.toString.call(obj).slice(8, 12) === "Null";
        },
        $.isReg=function (reg) {
            return objProto.toString.call(obj).slice(8, 14) === "RegExp";
        },
        $.isError=function (error) {
            return objProto.toString.call(obj).slice(8, 13) === "Error";
        }
}.call(this));