const getMostExpensiveProduct = (data) => {
  if (data == null || data.products == null) {
    return null
  }

  let mostExpensive = data.products[0]
  for (let i = 1; i < data.products.length; i++) {
    const currentProduct = data.products[i]
    if (mostExpensive.price < currentProduct.price) {
      mostExpensive = currentProduct
    }
  }
  return mostExpensive
}

export default getMostExpensiveProduct
