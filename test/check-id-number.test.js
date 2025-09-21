import { checkIdNumber } from '../src/check-id-number'

// 以下身份证号码源自网络，无意冒犯！（侵权删）
const validIdNumber = '330602193306179353'
const validIdNumber2 = '53230119481024002X'
const invalidIdNumber = '220102197407184211' // 220102197407184210
const invalidIdNumber2 = '630102196809160118' // 630102196809160117

describe('checkIdNumber.js 模块', () => {
  it(`正确的二代身份证号码（${validIdNumber}）`, () => {
    expect(checkIdNumber(validIdNumber)).toEqual(true)
  })
  it(`正确的二代身份证号码（${validIdNumber2}）`, () => {
    expect(checkIdNumber(validIdNumber2)).toEqual(true)
  })
  it(`错误的二代身份证号码（${invalidIdNumber}）`, () => {
    expect(checkIdNumber(invalidIdNumber)).toEqual(false)
  })
  it(`错误的二代身份证号码（${invalidIdNumber2}）`, () => {
    expect(checkIdNumber(invalidIdNumber2)).toEqual(false)
  })
})
