export default (data, newProduct) => {
  if (!data || !data.products || !newProduct) {
    throw new Error('Invalid parameters')
  }

  if (typeof newProduct !== 'object' || newProduct.id || !newProduct.name || !newProduct.price) {
    throw new Error('Bad product param', newProduct)
  }

  newProduct.id = data.products.reduce((maxId, p) => Math.max(maxId, p.id), 0) + 1
  data.products.push(newProduct)
  return newProduct
}
