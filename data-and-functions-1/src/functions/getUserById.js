export default (data, userId) => {
  if (userId == null) {
    return null
  }

  if (data == null) {
    return null
  }

  if (data.users == null) {
    return null
  }

  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].id === userId) {
      return data.users[i]
    }
  }
}
