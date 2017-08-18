/* globals describe, expect, it */
import addProduct from './addProduct'


describe('addProduct', () => {
  it(
    'is a function',
    () =>
      expect(typeof addProduct).toBe('function')
  )

  it(
    'throws if data is missing',
    () =>
      expect(() => addProduct(undefined, ))
  )

})
