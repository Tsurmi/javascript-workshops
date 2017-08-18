/* global describe, expect, it */
import DATA from '../DATA'
import getOrderInfo from './getOrderInfo'

describe('getOrderInfo', () => {
  it('is a function', () => expect(typeof getOrderInfo).toBe('function'))

  it('returns null with no data', () => expect(getOrderInfo(null)).toBeNull())

  it('returns null with undefined orders', () => expect(getOrderInfo({})).toBeNull())

  it('returns an array', () => expect(getOrderInfo(DATA)).toBeInstanceOf(Array))

  it('returns 10 items', () => expect(getOrderInfo(DATA)).toHaveLength(10))

  it('returns objects in the array', () => getOrderInfo(DATA).forEach(u => expect(typeof u).toBe('object')))

  it(
    'returns objects that have the correct keys',
    () => getOrderInfo(DATA).forEach(oi => expect(oi).toEqual(expect.objectContaining({
      userName: expect.any(String),
      orderId: expect.any(Number),
      price: expect.any(Number)
    })))
  )
})
