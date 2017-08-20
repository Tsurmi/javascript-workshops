/* globals describe, expect, it */
import {cloneDeep, isPlainObject} from 'lodash'
import DATA from '../DATA'
import addOrder from './addOrder'

const getSampleOrder = () => ({
  userId: 3,
  products: [1, 2, 3]
})

describe('addOrder', () => {
  it(
    'is a function',
    () =>
      expect(typeof addOrder).toBe('function')
  )

  it(
    'throws if data is missing',
    () =>
      expect(() => addOrder(undefined, getSampleOrder())).toThrow(Error)
  )

  it(
    'throws if data.orders is missing',
    () =>
      expect(() => addOrder({}, getSampleOrder())).toThrow(Error)
  )

  it(
    'throws if the new order is missing',
    () =>
      expect(() => addOrder(DATA, undefined)).toThrow(Error)
  )

  it(
    'throws if the new order is not an object',
    () =>
      expect(() => addOrder(DATA, 'Not an object')).toThrow(Error)
  )

  it(
    'throws if the new order is an object with the wrong structure',
    () =>
      expect(() => addOrder(DATA, {foo: 'bar'})).toThrow(Error)
  )

  it(
    'throws if the new order has an id property',
    () => {
      const data = cloneDeep(DATA)
      const newOrder = cloneDeep(getSampleOrder())
      newOrder.id = 100
      expect(() => addOrder(data, newOrder)).toThrow(Error)
    }
  )

  it(
    'throws if the userId is not in the users array',
    () => {
      const data = cloneDeep(DATA)
      const newOrder = {
        ...getSampleOrder(),
        userId: 10000
      }
      expect(() => addOrder(data, newOrder)).toThrow(Error)
    }
  )

  it(
    'throws if the products array contains bad productIds',
    () => {
      const data = cloneDeep(DATA)
      const sampleOrder = getSampleOrder()
      const newOrder = {
        ...sampleOrder,
        products: [...sampleOrder.products, 100000]
      }
      expect(() => addOrder(data, newOrder)).toThrow(Error)
    }
  )

  it(
    'returns an object',
    () => {
      const data = cloneDeep(DATA)
      const returnValue = addOrder(data, getSampleOrder())
      expect(isPlainObject(returnValue)).toBe(true)
    }
  )

  it(
    'returns an object with the correct properties (id, userId, products)',
    () => {
      const data = cloneDeep(DATA)
      const sampleOrder = getSampleOrder()
      const returnValue = addOrder(data, sampleOrder)
      expect(returnValue).toEqual(expect.objectContaining({
        id: expect.any(Number),
        ...sampleOrder
      }))
    }
  )

  it(
    'mutates the data.orders array correctly',
    () => {
      const data = cloneDeep(DATA)
      const returnValue = addOrder(data, getSampleOrder())
      expect(data.orders).toContainEqual(returnValue)
    }
  )
})
