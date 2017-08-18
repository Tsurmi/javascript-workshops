/* global describe, expect, it */
import DATA from '../DATA'
import getProductsForOrder from './getProductsForOrder'

// (data, orderId) => array of products

describe('getProductsForOrder', () => {
  it(
    'is a function',
    () =>
      expect(typeof getProductsForOrder).toBe('function')
  )

  it(
    'throws with no data',
    () =>
      expect(() => getProductsForOrder(null, 1)).toThrow(Error)
  )

  it(
    'throws with undefined orders',
    () =>
      expect(() => getProductsForOrder({}, 1)).toThrow(Error)
  )

  it(
    'throws with no id',
    () =>
      expect(() => getProductsForOrder(DATA, undefined)).toThrow(Error)
  )

  it(
    'returns null if the order is not found',
    () =>
      expect(getProductsForOrder(DATA, 100)).toBeNull()
  )

  it(
    'returns an array',
    () =>
      expect(getProductsForOrder(DATA, 1)).toBeInstanceOf(Array)
  )

  it(
    'returns the correct number of elements',
    () =>
      expect(getProductsForOrder(DATA, 10)).toHaveLength(3)
  )

  it(
    'returns objects in the array',
    () =>
      getProductsForOrder(DATA, 6).forEach(
        p => expect(typeof p).toBe('object')
      )
  )

  it('returns objects with the correct structure', () => {
    getProductsForOrder(DATA, 6).forEach(
      p =>
        expect(p).toEqual(expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number)
        }))
    )
  })
})
