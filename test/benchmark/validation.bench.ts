import { bench, describe } from 'vitest'
import { checkIdNumber, isEmail, isPhone } from '../../src/validation'

describe('validation utilities benchmark', () => {
  const validIdNumbers = [
    '110101199003074515',
    '310101199003074515',
    '440101199003074515',
  ]
  const invalidIdNumbers = [
    '12345678901234567',
    '11010119900307451a',
    '110101199003074510',
  ]

  const validEmails = [
    'test@example.com',
    'user.name@domain.co.uk',
    'user+tag@example.org',
  ]
  const invalidEmails = [
    'invalid-email',
    '@example.com',
    'user@',
  ]

  const validPhones = [
    '13800138000',
    '15912345678',
    '18612345678',
  ]
  const invalidPhones = [
    '12012345678',
    '1380013800',
    '1380013800a',
  ]

  bench('checkIdNumber - valid IDs', () => {
    validIdNumbers.forEach(id => checkIdNumber(id))
  })

  bench('checkIdNumber - invalid IDs', () => {
    invalidIdNumbers.forEach(id => checkIdNumber(id))
  })

  bench('isEmail - valid emails', () => {
    validEmails.forEach(email => isEmail(email))
  })

  bench('isEmail - invalid emails', () => {
    invalidEmails.forEach(email => isEmail(email))
  })

  bench('isPhone - valid phones', () => {
    validPhones.forEach(phone => isPhone(phone))
  })

  bench('isPhone - invalid phones', () => {
    invalidPhones.forEach(phone => isPhone(phone))
  })
})
