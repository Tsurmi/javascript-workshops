export default data => {
  if (data == null || data.products == null) return null

  return data.products.reduce((max, p) => p.price > max.price ? p : max)
}