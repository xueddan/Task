## chapter3
1. 数据类型
   原始值（不可更改）：number string Boolean null  undefined  对象（可更改）：object
    **字符串中的所有方法，实际上返回的是一个新的字符串值**
2. Infinity表示无穷
   NaN表示非数字值
3. null和undefined
   typeof null/undefined，返回object。null==undefined,返回true。
4. 包装对象
  ```
  var s="hello world";
  var word=s.substring(s.indexOf(" ")+1,s.length);
  ```
  &emsp;当通过字面量方式声明的字符串变量，调用String上的方法，这时，Javascript就会将字符串值通过调用new String(s)的方式来将其转换为对象，**一旦属性引用结束，就会销毁这个临时对象**。</br>

5. 类型转换
   - 自动类型转换：Javascript会跟根据需要自行转换类型
   - 显示类型转换：使用Boolean()、Number()、String()或者Object()函数进行转换。
6. 进制转换
   - toString(radix） 添加一个参数，可以将数字转换为其他进制数
   ```
       var n=17;
       binary_string=n.toString(2)       //转换为二进制
   ```
   - parseInt("11",2)  传递两个参数，第二个参数明确需要转换的进制数
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
   ```
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
   ```
2. Object.defineProperty()
   用途：在对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。
  ```
  eg.Object.defineProperty(obj,"key",{
         value;1，
         writable:true,
         enumerable:true,
         configurable:true
     })
  ```
  &emsp;**修改属性注意：**</br>
  如果数据属性是不可配置的，则不能将它的可写性从false修改未true，但可以从true修改未false。</br>
  如果数据属性是不可配置且不可写的，则不能修改它的值。然而可配置但不可写的属性值是可以修改的（先将它标记为可写，然后修改它的值，最后转换为不可写的）。

3. Object.defineProperties()
    ```
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
     ```
4. Object.assign()
   - 用来复制一个对象
   ```
   eg. var obj={a:1};
   var copy=Object.assign({},obj);
   ```
   - 合并对象
   ```
   eg.Object.assign({},{a:1},{b;2})
   ```
5. hasOwnProperty()
   用途：判断对象上的自有属性
   ```
   eg.o.hasOwnProperty(p)
   ```
## chapter7
1. 稀疏数组
   定义：包含0开始的不连续索引的数组。
   当省略数组直接量中的值时（使用连续的逗号，比如[1,,3]），这时所得到的数组也是稀疏数组，省略掉的值是不存在的。
2. 数组方法
- join():将数组中的所有元素转换成字符串并连接一起。
- reverse():将数组中的所有元素颠倒顺序，返回逆序的数组。
- sort():将数组中的元素排序并返回排序后的数组。
- contact():创建并返回一个新的数组,**contact方法不会递归扁平化数组**。
- slice():返回指定数组的一个片段或子数组。
- splice():第一个参数指定了插入或者删除的起始位置。</br>
  第二个参数指定了应该从数组中删除的元素个数。（若省略，则删除从起始点开始到数组结尾的所有元素）。</br>
  后面的参数指定了需要插入到数组的元素，从第一个参数指定的位置开始插入。
- forEach():遍历数组，为每个数组元素调用指定函数。**无法使用break语句**。
- map()：为每个数组元素调用指定函数，**map()返回的是新数组，它不修改调用的数组**。
3. Array.isAray()
   用来判断是否是数组。
## chapter8
1. 函数调用的四种方法
- 作为函数
- 作为方法
- 作为构造函数
- 通过它们的call()和apply()方法间接调用
2. 嵌套函数的this指向
- 如果嵌套函数作为方法调用，其this的值指向调用它的对象。
- 如果嵌套函数作为函数调用，其this值不是全局对象(非严格模式下)就是undefined(严格模式)。
3. arguments不是真正的数组，是一个对象，具有以数字为索引的一组元素以及length属性。
4. callee属性指代当前正在执行的函数
5. 闭包
6. call() apply() bind()
   call():第一个参数是要调用函数的母对象,第二个参数是实参列表。
   apply(): 第一个参数是要调用函数的母对象,第二个参数是实参的一个数组。
   bind():将函数绑定至某个对象。
   ```
   eg.
   function f(){
     return this.x+y;
     }
   var o={x:1};
   var g=f.bind(o);
   g(2);
   ```
## chapter9
1. 模块
- 用做命名空间的对象，即将函数和值作为命名空间的对象属性存储起来。
- 作为私有命名空间的函数，即将某个模块定义在某个函数的内部，然后模块对外导出API。
2. prototype

3. constructor
## chapter15
1. Dom节点操作
- 创建节点：document.createElement();
- 删除节点：n.parentNode.removeChild(n);
- 插入节点：appendChild() 插入一个节点，使其成为最后一个子节点。
            insertBefore(待插入的节点，已经存在的节点)
- 替换节点：n.parentNode.replaceChild(待替换节点，n)
2. 数据集属性
   HTML5在Element对象上定义了dataset属性，它的各个属性对应于去掉前缀data-属性。
   带连字符的属性对应于驼峰命名法的属性名。
   eg.data-jquery-test变成dataset.jqueryTest。
3. querySelector和querySelectorAll()
## chapter17
1. addEventListener<br>
   第三个参数是个对象：target.addEventListener(type, listener ,{capture: Boolean, passive: Boolean, once: Boolean});
   - Capture：Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
   - Once:Boolean,表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
   - passive: Boolean，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。


