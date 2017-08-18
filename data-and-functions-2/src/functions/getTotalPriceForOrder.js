import getProductsForOrder from './getProductsForOrder'

export default (data, orderId) => {
  const products = getProductsForOrder(data, orderId)

  if (!products) {
    return null
  }

  return products.reduce((total, p) => total + p.price, 0)
}
