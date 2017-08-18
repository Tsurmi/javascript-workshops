/* global describe, expect, it */
import DATA from '../DATA'
import getMostExpensiveProduct from './getMostExpensiveProduct'

describe('getMostExpensiveProduct', () => {
  it('is a function', () => expect(typeof getMostExpensiveProduct).toBe('function'))

  it('returns null with no data', () => expect(getMostExpensiveProduct(null)).toBeNull())

  it('returns null with undefined products', () => expect(getMostExpensiveProduct({})).toBeNull())

  it('returns an object', () => expect(typeof getMostExpensiveProduct(DATA)).toBe('object'))

  it('return the correct result', () => {
    expect(getMostExpensiveProduct(DATA)).toMatchObject({
      id: 5,
      name: 'Man Wipes',
      price: 75
    })
  })
})
