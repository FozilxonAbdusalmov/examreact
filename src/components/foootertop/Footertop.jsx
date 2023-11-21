import React from 'react'
import './Footertop.css'
import { Link } from 'react-router-dom'
import { VscChevronDown } from "react-icons/vsc";

function Footertop() {
    return (
        <div className='fotertop_orqa'>
            <div className='foootertop'>
                <div className='foootertop_item'>
                    <img src="https://alifshop.uz/_ipx/_/images/illustrations/alifshop-app-uz.png" alt="dfgfds" />
                    <div className='foootertop_item_items'>
                        <p>
                            Ajoyib takliflar har doim yoningizda</p>
                        <span>alif shop ilovasi orqali buyurtma qiling,takliflar haqida hammadan tez biling</span>
                        <div>
                            <img src="https://alifshop.uz/images/play-market-icon.svg" alt="sdfg" />
                            <img src="https://alifshop.uz/images/app-store-icon.svg" alt="" />
                            <img src="https://alifshop.uz/images/app-gallery-icon.svg" alt="sdfg" />

                            <button className='ilovani_ochish'>ilovani ochish</button>
                        </div>
                    </div>
                    <div className='foootertop_qrcod'>
                        <div>
                            <img src="https://alifshop.uz/_ipx/f_webp&s_104x104/images/alifshop-qr-code.webp" alt="sdfgh" />
                        </div>

                        <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
                    </div>
                </div>
                <div className='foootertop_item_bootom'>
                    <div>
                        <b>Alif shop</b>
                        <p>alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida
                            <span>
                                smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin</span>.</p>
                        <Link>Barchasini ko'rsatish <VscChevronDown /></Link>
                    </div>
                    <div>
                        <b>Smartfonlar muddatli to'lov asosida</b>
                        <p>Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik hayotimizning ajralmas qismiga aylandi. Zamonaviy telefonlarning ilovalari <span>va texnik parametrlari tufayli smartfonlar ko'pincha bizning kompyuterlarimiz, kameralarimiz,</span></p>
                        <Link>Barchasini ko'rsatish <VscChevronDown /></Link>
                    </div>
                    <div>
                        <b>Noutbuklar muddatli to'lov asosida</b>
                        <p>Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish va shu bilan birga bo'sh vaqtimizni unumli o'tkazish imkoniyatini beradi. <span>Masalan, noutbuk yordamida tezda dunyoning istalgan nuqtasidan, turli xil ishlarni bajarishingiz</span></p>
                        <Link>Barchasini ko'rsatish <VscChevronDown /></Link>
                    </div>
                    <div>
                        <b>Jihozlar muddatli to'lov asosida</b>
                        <p>Bizning online do'konda elektronikadan tashqari, turli xil maishiy texnika mavjud: gaz plitalari, grill tayyorlagichlar, muzlatgichlar, <span>kir yuvish mashinalari, dazmollar, konditsionerlar va boshqa ko'plab almashtirib bo'lmaydigan narsalar.</span></p>
                        <Link>Barchasini ko'rsatish <VscChevronDown /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footertop
