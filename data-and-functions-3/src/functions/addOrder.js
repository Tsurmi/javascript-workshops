export default (data, newOrder) => {
  if (!data) {
    throw new Error('data param is missing')
  }

  if (!data.orders) {
    throw new Error('data.orders array is missing')
  }

  if (!newOrder) {
    throw new Error('newOrder param is missing')
  }

  if (typeof newOrder !== 'object') {
    throw new Error('newOrder param is not an object', newOrder)
  }

  if (!newOrder.userId || !newOrder.products) {
    throw new Error('newOrder has incorrect structure', newOrder)
  }

  if (newOrder.id) {
    throw new Error('newOrder may not have the id property set', newOrder)
  }

  if (!data.users.find(u => u.id === newOrder.userId)) {
    throw new Error('newOrder.userId does not point to a valid user', newOrder)
  }

  const invalidProductIds = newOrder.products
    .map(productId => data.products.find(p => p.id === productId))
    .filter(p => p == null)
    .length > 0

  if (invalidProductIds) {
    throw new Error('newOrder.products contains productIds that do not point to valid products', newOrder)
  }

  newOrder.id = data.orders.reduce((maxId, o) => Math.max(maxId, o.id), 0) + 1
  data.orders.push(newOrder)
  return newOrder
}
