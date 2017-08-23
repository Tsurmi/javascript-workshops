const getProductById = (data, id) => {
  if (data == null || data.products == null || id == null) {
    return null
  }else{
    return data.products.find((products) => {
      return products.id === id
    })
  }
}

export default getProductById
