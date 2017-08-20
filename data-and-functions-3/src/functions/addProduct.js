export default (data, newProduct) => {
  if (!data || !data.products || !newProduct) {
    throw new Error('Invalid parameters')
  }
}
