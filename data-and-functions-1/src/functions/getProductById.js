export default (data, id) => {
  if (data == null || data.products == null || id == null) return null

  return data.products.find(u => u.id === id)
}
