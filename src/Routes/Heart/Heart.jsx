import React from 'react'
import './Heart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Footertop from '../../components/foootertop/Footertop'
import Sevimli from '../sevilmi/Sevimli'
function Heart() {
    return (
        <>
            <Header />
            <div className='heart_page'>
                <h1>Saralangan mahsulotlar ro'yxati xozircha bo'sh</h1>
                <p>uzoq vaqt qidirmaslik uchun o'zingizga yoqqan tovarlarni saqlang</p>
                <button>Katalogga o'tish</button>
            </div>


            <Sevimli/>


            <Footertop />
            <Footer />
        </>
    )
}

export default Heart
