const paramMustExist = (name, value) => {
  if (!value) {
    throw new Error(`getProductsForOrder(): ${name} param is missing`)
  }
}

const getProductsForOrder = (data, orderId) => {
  paramMustExist('data', data)
  paramMustExist('data.orders', data.orders)
  paramMustExist('id', orderId)

  const order = data.orders.find(o => o.id === orderId)

  if (!order) {
    return null
  }

  return order.products.map(productId => data.products.find(p => p.id === productId))
}

export default getProductsForOrder
