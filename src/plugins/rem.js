// 基準大小
//這裡設定會關乎圖型大小
const baseSize = 9
// 設定 rem 函式
function setRem () {
  // 當前頁面寬度相對於 750 寬的縮放比例，可根據自己需要修改。
  const scale = document.documentElement.clientWidth / 375
  // 設定頁面根節點字型大小
  // document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改變視窗大小時重新設定 rem
window.onresize = function () {
  setRem()
}
