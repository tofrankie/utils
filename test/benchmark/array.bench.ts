import { bench, describe } from 'vitest'
import { chunk, isArray, unique } from '../../src/array'

describe('array utilities benchmark', () => {
  const largeArray = Array.from({ length: 10000 }, (_, i) => i)
  const mixedArray = Array.from({ length: 1000 }, (_, i) =>
    i % 2 === 0 ? i : `string-${i}`)

  bench('isArray - small array', () => {
    isArray([1, 2, 3])
  })

  bench('isArray - large array', () => {
    isArray(largeArray)
  })

  bench('isArray - non-array', () => {
    isArray('not an array')
  })

  bench('chunk - small chunks', () => {
    chunk(largeArray, 10)
  })

  bench('chunk - large chunks', () => {
    chunk(largeArray, 1000)
  })

  bench('unique - small array', () => {
    unique([1, 2, 2, 3, 3, 3])
  })

  bench('unique - large array with duplicates', () => {
    unique([...largeArray, ...largeArray])
  })

  bench('unique - mixed types', () => {
    unique(mixedArray)
  })
})
