const getActiveUsers = (data) => {
  if (data == null || data.users == null) {
    return null
  } else {
    const activeUsers = []
    for (let i = 0; i < data.users.length; i++) {
      const currentUser = data.users[i]
      if (currentUser.accountActive === true) {
        activeUsers.push(currentUser)
      }
    }
    return activeUsers
  }
}

export default getActiveUsers
