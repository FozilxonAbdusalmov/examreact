import React from 'react'
import "./Card.css"
import Header from '../../components/header/Header'
import Footertop from '../../components/foootertop/Footertop'
import Footer from '../../components/footer/Footer'
import Cart from '../card/Cart'


function Card() {
  return (
    <><Header />
      <div className='Card'>
        <h1>Savat hozircha bo'sh</h1>
        <p>Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning</p>
        <button className='cartbottontop'>Katagoriyaga o'tish</button>
        <button className='cartbottonbottom'>Asosiy ekranga</button>
      </div>

      <Cart />
      <Footertop />
      <Footer />
    </>
  )
}

export default Card
