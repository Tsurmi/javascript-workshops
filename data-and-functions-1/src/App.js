import React from 'react'
import DATA from './DATA'

const getUserById = (id) => {
  let user
  for (let i = 0; i < DATA.users.length; i++) {
    if (DATA.users[i].id === id) {
      user = DATA.users[i]
    }
  }
  return user
}

const getProductById = (id) => {
  return DATA.products.find((p) => {
    return p.id === id
  })
}

const App = () => {
  // loop over the orders
  // print the user's name and the product's name
  DATA.orders.forEach(o =>
    console.log(
      `User: [${getUserById(o.userId).name}]`,
      `Product: [${getProductById(o.productId).name}]`
    )
  )

  return <div>
    Hello World
  </div>
}

export default App
