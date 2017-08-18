export default (data) => {
  if (data == null || data.users == null) return null

  return data.users.filter(u => u.accountActive === true)
}
