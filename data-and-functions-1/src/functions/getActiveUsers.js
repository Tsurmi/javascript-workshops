const getActiveUsers = (data, users) => {
  if (data == null || data.users == null) {
    return null
  } else {
    const activeUsers = []
    for (let i = 0; i < data.users.length; i++) {
      const activeUser = data.users[i]
      if (activeUser.accountActive === true) {
        activeUsers.push(activeUser)
      }
    }
    return activeUsers
  }
}

export default getActiveUsers
