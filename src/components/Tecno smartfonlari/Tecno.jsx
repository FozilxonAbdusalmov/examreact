import React from 'react'
import './Tecno.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function Tecno() {

    const TecnoData = [



        {
            image: "https://minio.alifnasiya.uz/shop/rand/9f/3f/9e/9f3f9e89-07ba-4ad5-9d83-12a8f117d520.jpg",
            describetion: "Smartfon Infinix HOT 30i 4/128 GB , qora",
            CreditItem: " 109 302 so'm/oyga",
            price: "1 678 000 so'm",
            ChegitmaItem: "1 499 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/cc/d8/21/ccd8219a-69c0-4faa-8412-6c828f63866b.jpg",
            describetion: "Smartfon tecno spark GO 2022 2/32 GB , firuza ko'k ",
            CreditItem: " 98 438 so'm/oyga",
            price: "1 600 000 so'm",
            ChegitmaItem: "1 350 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/fc/41/db/fc41db5f-488d-4ee8-b5c1-0746e7c81962.jpg",
            describetion: "Smartfon ZTE Blade A71 3/64 GB , ko'k",
            CreditItem: " 83 781 so'm/oyga",
            price: "1 490 000 so'm",
            ChegitmaItem: "1 149 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/80/c4/de/80c4de1a-e6ec-4c95-9080-01a724a480e5.jpg",
            describetion: "Smartfon xiamo redmi 12 4/128 GB, goluboy",
            CreditItem: " 145 833 so'm/oyga",
            ChegitmaItem: "2 000 000 so'm"
        },

        {
            image: "https://minio.alifnasiya.uz/shop/rand/c8/62/d8/c862d88c-859f-40cc-8081-2660f6d24286.jpg",
            describetion: "Smartfon Infinix smart 6 2/32 GB , ko'k",
            CreditItem: " 91 073 so'm/oyga",
            ChegitmaItem: "1 249 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/61/fd/b9/61fdb987-5afa-4627-bdfd-3f43d30df4a2.jpg",
            describetion: "Smartfon infinix Smart 6 2/32 GB , qora",
            CreditItem: " 91 073 so'm/oyga",
            ChegitmaItem: "1 249 000 so'm"
        },
    ]
    return (
        <div className='tecno'>
            <div className='tecno_item'>
                <h1> Tecno smartfonlari chegirmada <Link>Hammsini Korsatish <FaAngleRight />
                </Link></h1>
            </div>
            <div className='tecno_container'>

                {TecnoData.map((item, index) =>

                    <div className='tecno_container_item'>

                        <FaHeart />
                        <div>

                            <img src={item.image} alt="phone" />
                            <div className='tecno_container_item_narx'>
                                <span>-15%</span>
                            </div>
                        </div>
                        <p className='rusum'>{item.describetion}</p>
                        <span> {item.CreditItem} </span>
                        <p><s className='tecno_tecnos'> {item.price} </s></p>
                        <p className='narx'>{item.ChegitmaItem}</p>
                        <button> <SlBasket />Savatga</button>
                    </div>

                )

                }




            </div>
        </div>
    )
}

export default Tecno
