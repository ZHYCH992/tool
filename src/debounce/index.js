function debounce({ fn, delay = 1000, isImmediate }) {
  let timer = null; //初始化timer，作为计时清除依据
  return function () {
    const context = this; //获取函数所在作用域this
    const args = arguments; //取得传入参数
    clearTimeout(timer);
    if (isImmediate && timer === null) {
      //时间间隔外立即执行
      fn.apply(context, args);
      timer = 0;
      return;
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
      timer = null;
    }, delay);
  };
}
export default debounce;
