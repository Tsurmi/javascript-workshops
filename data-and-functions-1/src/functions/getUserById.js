const getUserById = (data, id) => {
  if (data == null || id == null || data.users == null) {
    return null
  }else{
    return data.users.find((u) => u.id === id)
  }
}

export default getUserById
