import users from "../users.json"

export function getUsers() {
  return users
}

export function loginUser(username: string, password: string) {
  const user = users.find((user) => user.username === username)

  if (!user) return undefined

  if (user.password !== password)
  // FIX: return 'Username and/or password is incorrect'
    return `Oopsie woopsie! You must have mistyped your password! Your password is ${user.password} :^)`

  const token = String(Math.round(Math.random() * 10))
  return {token, username: user.username, password: user.password, paymentInfo: user.paymentInfo }
}
