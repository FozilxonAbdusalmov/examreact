import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Carausell from '../../components/carausell/Carausell'
import Aksiya from '../../components/aksiya/Aksiya'
import Qiziqtirish from '../../components/qiziqtirishi/Qiziqtirish'
import Chegirma from '../../components/chegirmalar/Chegirma'
import Smartfonlar from '../../components/smartfonlar/Smartfonlar'
import SovgaTelefon from '../../components/sovg\'aga telefon/SovgaTelefon'
import Isitgich from '../../components/Isitgichlar/Isitgich'
import Giftbook from '../../components/Giftboks/Giftbook'
import AvtomobilUchun from '../../components/Avtomobiluchun/AvtomobilUchun'
import BoschMaishiy from '../../components/Bosch Maishiy/BoschMaishiy'
import Vivo from '../../components/Vivodan sovgalar/Vivo'
import Tecno from '../../components/Tecno smartfonlari/Tecno'
import Tashqi from '../../components/Tashqi/Tashqi'
import Kiyimlar from '../../components/Kiyimlaringiz/Kiyimlar'
import MashxurBrend from '../../components/Mashhur brend/MashxurBrend'
import Footer from '../../components/footer/Footer'
import Footertop from '../../components/foootertop/Footertop'


function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <Carausell />
        <Aksiya />
        <Qiziqtirish />
        <Chegirma />
        <Smartfonlar />
        <SovgaTelefon />
        <Isitgich />
        <Giftbook />
        <AvtomobilUchun />
        <BoschMaishiy />
        <Vivo />
        <Tecno />
        <Tashqi />
        <Kiyimlar />
        <MashxurBrend />


      </div>
      <Footertop />
      <Footer />
    </>
  )
}

export default Home
