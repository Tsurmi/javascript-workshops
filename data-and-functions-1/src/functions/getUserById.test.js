/* global describe, expect, it */
import DATA from '../DATA'
import getUserById from './getUserById'

describe('getUserById', () => {
  it('is a function', () => expect(typeof getUserById).toBe('function'))

  it('returns null with no id', () => expect(getUserById(DATA, null)).toBeNull())

  it('returns null with no data', () => expect(getUserById(null, 1)).toBeNull())

  it('returns null with undefined users', () => expect(getUserById({}, 1)).toBeNull())

  it('returns an object when passed a good id', () => expect(typeof getUserById(DATA, 1)).toBe('object'))

  it('return the correct result', () => {
    expect(getUserById(DATA, 1)).toMatchObject({
      id: 1,
      name: 'Jane',
      accountActive: true
    })
  })
})
