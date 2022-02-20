import React, { useState, useEffect } from 'react'
import Footer from './Footer'

import axios from 'axios'

function Auth () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    document.title = 'Авторизация'
  }, [])

  const authorize = event => {
    event.preventDefault()
    axios.post('https://red-team-mailer-back-stg.herokuapp.com/login', {
      email, password
    }).then(response => {
      const { exp } = JSON.parse(
        atob(
          response.data.token.token.match(/\.(.+)\./)[1]
            .replace(/-/g, '+')
            .replace(/_/g, '/')
        )
      )
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.token.token)
      localStorage.setItem('exp', exp * 1000)

      location.reload()
    }).catch(err => {
      console.error(err)
    })
  }

  return (
    <div id="auth">
      <div className="contact-form">
        <form
          id="contact"
          name="contact"
          method="post"
          action="index.html"
          onSubmit={authorize}
        >
          <div className="form-group">
            <label htmlFor="input-log">
              <input
                type="text"
                id="input-log"
                placeholder="Логин"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="input-pass">
              <input
                type="password"
                id="input-pass"
                placeholder="Пароль"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div className="button-panel">
            <button>Войти</button>
          </div>
        </form>
      </div>
      <div id="footer">
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Auth
