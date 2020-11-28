// 批量字段非空验证
export function isEmpty(data = []) {
  let flag = true
  data.forEach(item => {
    if (!item || item.length <= 0) {
      flag = false
    }
  })
  return flag
}