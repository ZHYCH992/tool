/**
 * 获得对象真正的类型
 * 可检测出Array,Object,Function,String,Number,Boolean,Date,Null,Undefined,HTMLDivElement(Dom节点都包含HTML)等
 */
const sType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
export default sType;
