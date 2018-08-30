//绑定事件
function addEvent(target,type,handler) {
    if(target.addEventListener()){
        target.addEventListener(event,handler,false)
    }else{
        target.attachEvent("on"+type,function (event) {
            return handler.call(target,event);
        })
    }
}
//取消事件默认行为
function cancelHandler(event) {
    var event=event||window.event;
    //标准技术
    if(event.preventDefault)
        event.preventDefault();
    //IE
    if(event.returnValue)
        event.returnValue=false;
    return false;
}
//取消冒泡
function cancelBubble(event) {
    var event=event||window.event;
    if(event.stopPropagation())
        event.stopPropagation();
    if(event.cancelBubble)
        event.cancelBubble=true;
}