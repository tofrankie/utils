import { bench, describe } from 'vitest'
import { deepCopy, omit, pick } from '../../src/object'

describe('object utilities benchmark', () => {
  const smallObject = { a: 1, b: 2, c: 3 }
  const largeObject = Object.fromEntries(
    Array.from({ length: 1000 }, (_, i) => [`key${i}`, i]),
  )
  const nestedObject = {
    level1: {
      level2: {
        level3: {
          data: Array.from({ length: 100 }, (_, i) => ({ id: i, value: `item-${i}` })),
        },
      },
    },
  }

  bench('deepCopy - small object', () => {
    deepCopy(smallObject)
  })

  bench('deepCopy - large object', () => {
    deepCopy(largeObject)
  })

  bench('deepCopy - nested object', () => {
    deepCopy(nestedObject)
  })

  bench('pick - few keys', () => {
    pick(largeObject, ['key1', 'key2', 'key3'])
  })

  bench('pick - many keys', () => {
    pick(largeObject, Object.keys(largeObject).slice(0, 100))
  })

  bench('omit - few keys', () => {
    omit(largeObject, ['key1', 'key2', 'key3'])
  })

  bench('omit - many keys', () => {
    omit(largeObject, Object.keys(largeObject).slice(0, 100))
  })
})
