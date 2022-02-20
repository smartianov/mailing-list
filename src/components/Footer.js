import React from 'react'
import PolytechLogo from '../images/polytech_logo.png'

function Footer () {
  return (
    <>
      <ul className="icons">
        <li>
          <a
            href="https://vk.com/polytech_petra"
            target="_blank"
            className="icon brands fa-vk"
            rel="noreferrer"
          >
            <span className="label">VKontakte</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.spbstu.ru/"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <img src={PolytechLogo} style={{ height: '15px' }} alt="Polytech" />
            <span className="label">Polytech</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>© RedTeam. All rights reserved.</li>
        <li>Design: RedTeam.</li>
      </ul>
    </>
  )
}

export default Footer
