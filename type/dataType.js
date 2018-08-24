(function () {
    var util={
        isArray:function (value) {
            return Array.isArray(value);
        },
        isBoolean:function (value) {
            return typeof value === "boolean" || (isObjectLike(value) && getTag(value) === "[object String]")
        },
        isDate:function(value){
            return isObjectLike(value) && getTag(value) === "[object Date]";
        },
        //只检查Error
        isError:function(value){
            return isObjectLike(value) && getTag(value) === "[object Error]";
        },
        isFinite:function(value){
            return Number.isFinite(value);
        },
        isFunction:function (value) {
            return typeof value === "function";
        },
        isInteger:function(value){
            return Number.isInteger(value);
        },
        isNaN:function(value){
            return Number.isNaN(value);
        },
        isNull:function (value) {
            return value === null;
        },
        isNumber:function (value) {
            return typeof value === "number" || (isObjectLike(value) && getTag(value) === "[object Number]")
        },
        isUndefined:function (value) {
            return typeof value === "undefined";
        },
        //
        isString:function (value) {
            return typeof value === "number" || (isObjectLike(value) && getTag(value) === "[object String]")
        },
        isSymbol:function(value){
            return typeof value === "symbol" || (isObjectLike(value) && getTag(value) === "[object Symbol]")
        },
    };
    //判断typeof是否是object  并且原值不为null
    function isObjectLike(value) {
        return value!=null && typeof value === "object";
    }
    //当 typeof value=="object"时  调用此函数  返回[object xxxx]
    function getTag(value) {
        return Object.prototype.toString.call(value);
    }
    window._=util;
})();
console.log("isArray测试=="+$.isArray([]));
console.log("isArray测试=="+$.isArray(23));
console.log("isBoolean测试=="+$.isBoolean(true));
console.log("isBoolean测试=="+$.isBoolean("er"));
console.log("isDate测试=="+$.isDate(new Date));
console.log("isDate测试=="+$.isDate(23));
console.log("isError测试=="+$.isError(new Error()));
console.log("isError测试=="+$.isError(23));
console.log("isFunction测试=="+$.isFunction(function () {}));
console.log("isFunction测试=="+$.isFunction(23));
console.log("isInteger测试=="+$.isInteger(1));
console.log("isInteger测试=="+$.isInteger(1.6));
console.log("isNan测试=="+$.isNaN(NaN));
console.log("isNan测试=="+$.isNaN(23));
console.log("isNull测试=="+$.isNull(null));
console.log("isNull测试=="+$.isNull(23));
console.log("isNumber测试=="+$.isNumber(3.5));
console.log("isNumber测试=="+$.isNumber('we'));
console.log("isSymbol测试=="+$.isSymbol(Symbol.iterator));
console.log("isSymbol测试=="+$.isSymbol('ad'));


