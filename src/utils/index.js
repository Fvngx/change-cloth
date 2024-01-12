export const throttle = (fn, wait = 50) => {
  // 上次执行 fn 的时间戳
  let previous = 0
  // 将 throttle 处理结果当做函数返回
  return function (...args) {
    // 获取当前时间，转换成时间戳，单位毫秒
    let now = Date.now()
    // 将当前时间戳和上一次执行函数的时间戳进行对比
    // 大于等待时间就把 previous 设置为当前时间戳，并执行函数 fn
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
}
