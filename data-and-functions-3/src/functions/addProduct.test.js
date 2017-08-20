/* globals describe, expect, it */
import DATA from '../DATA'
import addProduct from './addProduct'

const sampleProduct = {
  name: 'Sample Product',
  price: 100
}

describe('addProduct', () => {
  it(
    'is a function',
    () =>
      expect(typeof addProduct).toBe('function')
  )

  it(
    'throws if data is missing',
    () =>
      expect(() => addProduct(undefined, sampleProduct)).toThrow(Error)
  )

  it(
    'throws if data.products is missing',
    () =>
      expect(() => addProduct({}, sampleProduct)).toThrow(Error)
  )

  it(
    'throws if the new product is missing',
    () =>
      expect(() => addProduct(DATA, undefined)).toThrow(Error)
  )

  it(
    'throws if the new product is not an object',
    () =>
      expect(() => addProduct(DATA, 'Not an object')).toThrow(Error)
  )

  it(
    'throws if the new product is an object with the wrong structure',
    () =>
      expect(() => addProduct(DATA, {foo: 'bar'})).toThrow(Error)
  )
})
