import React from 'react'
import { NavLink } from 'react-router-dom'
import getAuthUser from '../lib/getAuthUser'
import Footer from './Footer'

const { user } = getAuthUser()

function Header () {
  return (
    <div id="header">
      <div className="top">
        <div id="logo">
          <span className="image icon solid fa-user" />
          <h1 id="title">
            {`${user.firstname} ${user.secondname}`.toUpperCase()}
          </h1>
          <p>должность</p>
        </div>
        <nav id="nav">
          <ul>
            <li>
              <NavLink to="/tags" id="tags-link">
                <span className="icon solid fa-hashtag">Теги</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/filters" id="filter-link">
                <span className="icon solid fa-filter">Фильтры</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="log-out">
          <ul>
            <li>
              <NavLink to="/logout" id="logout-link">
                <span className="icon solid fa-power-off">Выйти</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  )
}

export default Header
