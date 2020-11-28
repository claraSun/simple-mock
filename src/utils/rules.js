import { helpers } from 'vuelidate/lib/validators'

// 用户名
export const userName = helpers.regex('userName', /^[0-9A-Za-z]{6,10}$/)
// 密码
export const password = helpers.regex(
  'password',
  /^[0-9A-Za-z]{8,20}$/
  // /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/
)