import React, { Component } from 'react';
import Data from './Data';

const getUserById = (id) => {
  let user
  for (let i =0; i < Data.users.length; i++){
    if(Data.users[i].id === id) {
      user = Data.users[i]
    }
  }
  return user
}

const getProductById = (id) => {
  let product
  for (let i =0; i < Data.products.length; i++){
    if(Data.products[i].id === id) {
      product = Data.products[i]
    }
  }
  return product
}

const getUserNameAndProduct = () => {
  Data.orders.forEach((o) => {
    // console.log(o.id);

    const user = getUserById(o.userId)
    // console.log(user.name)

    const product = getProductById(o.productId)
    // console.log(product.name)
  })
}

const activeUsers = (users) => {
  let active = []
  for (let i = 0; i < Data.users.length; i++){
    if(Data.users[i].accountActive === true) {
       active.push(Data.users[i])
    }
  }
  return active
}

const getMostExpensiveProduct = (price) => {
  let expensive = ""
  for (let i = 0; i < Data.products.length; i++){
    if(Data.products[i].price === price) {
      expensive.push(Data.products[i])
    }
  }
  return expensive
}

const orderInfoArr = []

for (let i =0; i < Data.orders.length; i++){
  const currentOrder = data.orders[i]

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


class App extends Component {
  render() {
    console.log(activeUsers())
    console.log(orderInfoArr)
    // console.log(getMostExpensiveProduct())
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
