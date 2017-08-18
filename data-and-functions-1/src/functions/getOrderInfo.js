import getProductById from './getProductById'
import getUserById from './getUserById'

export default data => {
  if (data == null || data.orders == null) return null

  const orderInfoArr = []

  for (let i = 0; i < data.orders.length; i++) {
    const currentOrder = data.orders[i]

    const orderId = currentOrder.id
    const userName = getUserById(data, currentOrder.userId).name
    const price = getProductById(data, currentOrder.productId).price

    const orderInfo = {
      orderId: orderId,
      userName: userName,
      price: price
    }

    orderInfoArr.push(orderInfo)
  }

  return orderInfoArr

  // return data.orders.map(o => ({
  //   orderId: o.id,
  //   userName: getUserById(data, o.userId).name,
  //   price: getProductById(data, o.productId).price
  // }))
}
