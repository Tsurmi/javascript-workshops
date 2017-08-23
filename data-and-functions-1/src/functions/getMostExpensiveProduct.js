const getMostExpensiveProduct = (data, products) => {
  if (data == null || data.products == null) {
    return null
  } else {
    let mostExpensive = data.products[0]
    for (let i = 0; i < data.products.length; i++) {
      if (mostExpensive.price < products.price) {
        mostExpensive = products
      }
    }
    return mostExpensive
  }
}

export default getMostExpensiveProduct
