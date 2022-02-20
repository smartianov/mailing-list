function Logout () {
  localStorage.removeItem('exp')
  localStorage.removeItem('user')
  localStorage.removeItem('token')

  location.reload()
}

export default Logout
