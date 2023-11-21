import React from 'react'
import './HeaderTop.css'
import { Link } from 'react-router-dom'

function HeaderTop() {
  return (
    <div className='header_top'>
      <select>
        <option value="UZB">UZB</option>
        <option value="RUS">RUS</option>
        <option value="ENG">ENG</option>
      </select>
      <div>
        <Link>Namoz vaqti</Link>
        <p>|</p>
        <Link>Alif shopda soting!</Link>
        <Link>Bizga yozing</Link>
      </div>
    </div>
  )
}

export default HeaderTop
