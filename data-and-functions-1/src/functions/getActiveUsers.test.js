/* global describe, expect, it */
import DATA from '../DATA'
import getActiveUsers from './getActiveUsers'

describe('getActiveUsers', () => {
  it('is a function', () => expect(typeof getActiveUsers).toBe('function'))

  it('returns null with no data', () => expect(getActiveUsers(null)).toBeNull())

  it('returns null with undefined users', () => expect(getActiveUsers({})).toBeNull())

  it('returns an array', () => expect(getActiveUsers(DATA)).toBeInstanceOf(Array))

  it('returns 3 items', () => expect(getActiveUsers(DATA)).toHaveLength(3))

  it('returns objects in the array', () => getActiveUsers(DATA).forEach(u => expect(typeof u).toBe('object')))

  it(
    'returns objects that have accountActive = true',
    () => getActiveUsers(DATA).forEach(u => expect(u.accountActive).toBe(true))
  )

  it('return the correct result', () => {
    const result = getActiveUsers(DATA)
    expect(result[0].name).toBe('Jane')
    expect(result[1].name).toBe('Nancy')
    expect(result[2].name).toBe('Hampster')
  })
})
