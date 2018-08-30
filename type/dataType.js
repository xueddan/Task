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
            return Number.isFinite(value)


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
console.log("isArray测试=="+_.isArray([]));
console.log("isArray测试=="+_.isArray(23));
console.log("isBoolean测试=="+_.isBoolean(true));
console.log("isBoolean测试=="+_.isBoolean("er"));
console.log("isDate测试=="+_.isDate(new Date));
console.log("isDate测试=="+_.isDate(23));
console.log("isError测试=="+_.isError(new Error()));
console.log("isError测试=="+_.isError(23));
console.log("isFunction测试=="+_.isFunction(function () {}));
console.log("isFunction测试=="+_.isFunction(23));
console.log("isInteger测试=="+_.isInteger(1));
console.log("isInteger测试=="+_.isInteger(1.6));
console.log("isNan测试=="+_.isNaN(NaN));
console.log("isNan测试=="+_.isNaN(23));
console.log("isNull测试=="+_.isNull(null));
console.log("isNull测试=="+_.isNull(23));
console.log("isNumber测试=="+_.isNumber(3.5));
console.log("isNumber测试=="+_.isNumber('we'));
console.log("isSymbol测试=="+_.isSymbol(Symbol.iterator));
console.log("isSymbol测试=="+_.isSymbol('ad'));


