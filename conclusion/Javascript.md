## chapter3
1. 数据类型
   原始值（不可更改）：number string Boolean null  undefined  对象（可更改）：object
   **字符串中的所有方法，实际上返回的是一个新的字符串值**
2. Infinity表示无穷大
   NaN表示非数字值
3. null和undefined
   typeof null/undefined，返回object。null==undefined,返回true。
4. 包装对象
  (...)
  var s="hello world";
  var word=s.substring(s.indexOf(" ")+1,s.length);
  (...)
  当通过字面量方式声明的字符串变量，调用String上的方法，这时，Javascript就会将字符串值通过调用new String(s)的方式来将其转换为对象，**一旦属性引用结束，就会销毁这个临时对象**。
5. 类型转换
   - 自动类型转换：Javascript会跟根据需要自行转换类型
   - 显示类型转换：使用Boolean()、Number()、String()或者Object()函数进行转换。
6. 进制转换
   toString(radix） 添加一个参数，可以将数字转换为其他进制数
   (...)
       var n=17;
       binary_string=n.toString(2)   //转换为二进制
   (...)
   parseInt("11",2)  传递两个参数，第二个参数明确需要转换的进制数
7. 变量声明
   - 如果给一个未声明的变量复制，Javascript会给全局变量创建一个同名属性。
   - 使用var语句重复声明变量是合法的。
8. 作用域链
## chapter4
1. 表达式
    - 原始表达式：常量 直接量  关键字 变量
    - 数组初始化表达式
      数组直接量的元素列表结尾处可以留下单个逗号，这是不会创建一个新的值为undefined的元素
    - 属性访问表达式
      如果属性名称是一个保留字或者包含空格和标点符号或是一个数字 ，或者是通过运算得出的值，则必须使用方括号
2. 逻辑表达式
    - &&  左侧表达式是假值，返回左侧表达式的值
          左侧表达式是真值，返回右侧表达式的值
    - ||  左侧表达式是真值，返回左侧表达式的值
3. 相等运算符
   - "=="运算符允许进行类型转换
   - "==="运算符表示严格相等
## chapter 5
1. debugger语句
   这条语句用来产生一个断点，Javascript代码的执行将会停止在断点的位置。
2. 严格模式
   - 在严格模式中，禁止使用with语句
   - 在严格模式中，所有的变量都要先声明
   - 在严格模式中，调用的函数（不是方法）中的一个this值是undefined。
## chapter 6
1. Object.create()
   用途：创建一个新对象，用现有的对象来提供新对象的原型。
   - 实现类式继承
   (...)
   eg.var b=Object.create({a:1});
      var c=Object.create(null);
      var d=Object.create({},{
        p:{
          value;1，
          writable:true,
          enumerable:true,
          configurable:true
        }
      })
   (...)
2. Object.defineProperty()
   用途：在对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。
  (...)
  eg.Object.defineProperty(obj,"key",{
         value;1，
         writable:true,
         enumerable:true,
         configurable:true
     })
  (...)
  修改属性注意：
  如果数据属性是不可配置的，则不能将它的可写性从false修改未true，但可以从true修改未false。
  如果数据属性是不可配置且不可写的，则不能修改它的值。然而可配置但不可写的属性值是可以修改的（先将它标记为可写，然后修改它的值，最后转换为不可写的）。
3. Object.defineProperties()
    (...)
     eg.Object.defineProperty(obj,
         property1:{
            value;1，
            writable:true,
            enumerable:true,
            configurable:true
         },
          property2:{
             value;1，
             writable:true,
             enumerable:true,
             configurable:true
         },
        )
     (...)
4. Object.assign()
   - 用来复制一个对象
   (...)
   eg. var obj={a:1};
   var copy=Object.assign({},obj);
   (...)
   - 合并对象
   (...)
   eg.Object.assign({},{a:1},{b;2})
   (...)
5.