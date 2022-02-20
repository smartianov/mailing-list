import '@fortawesome/fontawesome-free/css/all.min.css'
import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Auth from './components/Auth'
import Tags from './components/Tags'
import Filters from './components/Filters'

import getAuthUser from './lib/getAuthUser'
import Logout from './components/Logout'

// https://red-team-mailer-back-stg.herokuapp.com/login

const App = () => {
  const { user } = getAuthUser()

  return (
    <BrowserRouter>
      <Routes>
        {user
          ? <>
              <Route path='/tags' element={<Tags />} />
              <Route path='/filters' element={<Filters />} />
              <Route path='/logout' element={<Logout />} />
              <Route path="*" element={<Navigate to="/tags" />} />
            </>
          : <>
              <Route path='/auth' element={<Auth />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>}
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
