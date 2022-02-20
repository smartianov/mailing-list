export function getAuthUser () {
  const exp = localStorage.getItem('exp')
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  if (!user) return { user: null, token: null }

  if (Date.now() >= +exp) {
    localStorage.removeItem('exp')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return { user: null, token: null }
  }

  return { user: JSON.parse(user), token }
}

export default getAuthUser
