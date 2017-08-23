import getProductById from './getProductById'
import getUserById from './getUserById'

const getOrderInfo = (DATA) => {
  if (DATA == null || DATA.orders == null) {
    return null
  }
  const orderInfoArr = []

  for (let i = 0; i < DATA.orders.length; i++) {
    const currentOrder = DATA.orders[i]

    const orderId = currentOrder.id
    const userName = getUserById(DATA, currentOrder.userId).name
    const price = getProductById(DATA, currentOrder.productId).price
    const orderInfo = {
      orderId: orderId,
      userName: userName,
      price: price
    }
    orderInfoArr.push(orderInfo)
  }
  return orderInfoArr
}

export default getOrderInfo
