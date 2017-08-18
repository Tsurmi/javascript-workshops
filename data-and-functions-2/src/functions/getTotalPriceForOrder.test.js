/* global describe, expect, it */
import DATA from '../DATA'
import getTotalPriceForOrder from './getTotalPriceForOrder'

describe('getTotalPriceForOrder', () => {
  it(
    'is a function',
    () =>
      expect(typeof getTotalPriceForOrder).toBe('function')
  )

  it(
    'throws with no data',
    () =>
      expect(() => getTotalPriceForOrder(null, 1)).toThrow(Error)
  )

  it(
    'throws with undefined orders',
    () =>
      expect(() => getTotalPriceForOrder({}, 1)).toThrow(Error)
  )

  it(
    'throws with no id',
    () =>
      expect(() => getTotalPriceForOrder(DATA, undefined)).toThrow(Error)
  )

  it(
    'returns null if the order is not found',
    () =>
      expect(getTotalPriceForOrder(DATA, 100)).toBeNull()
  )

  it(
    'returns a number',
    () =>
      expect(typeof getTotalPriceForOrder(DATA, 1)).toBe('number')
  )

  it(
    'returns the correct result',
    () =>
      expect(getTotalPriceForOrder(DATA, 3)).toBe(75)
  )
})
