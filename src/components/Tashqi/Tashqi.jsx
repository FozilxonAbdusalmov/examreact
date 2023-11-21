import React from 'react'
import './Tashqi.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function Tashqi() {
    const TashqiData = [


        {
            image: "https://minio.alifnasiya.uz/shop/rand/4b/2f/a5/4b2fa547-c2ea-4ad8-b704-6cdef1c02a42.jpg",
            describtion: "HP Wirles Mouse",
            CreditItem: "dan 23 333 so'm/oyga",
            price: "320 000 so'm",
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/18/bd/82/18bd8230-f6f7-4b44-accf-cc88145f852f.jpg",
            describtion: "HP simsiz sichqoncha",
            CreditItem: "dan 21 875 so'm/oyga",
            price: " 300 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/60/3b/d4/603bd417-8c0e-4d41-9a94-f3ee82d15849.jpg",
            describtion: "Simsiz sichqoncha",
            CreditItem: "dan 10 938 so'm/oyga",
            price: "150 000 so'm"
        },
    ]
    return (
        <div className='tashqi'>
            <div className='tashqi_item'>
                <h1>Tashqi qurilmalar <Link>Hammsini Korsatish <FaAngleRight />
                </Link></h1>
            </div>
            <div className='tashqi_container'>


                {TashqiData.map((item, index) =>
                    <div className='tashqi_container_item'>
                        <FaHeart />
                        <div>

                            <img src={item.image} alt="phone" />
                            <div className='tashqi_container_item_narx'>

                            </div>
                        </div>
                        <p className='rusum'>{item.describtion}</p>
                        <span>{item.CreditItem} </span>
                        <p><s className='tashqi_tashqis'> </s></p>
                        <p className='tashqi_narx'>{item.price}</p>
                        <button> <SlBasket />Savatga</button>
                    </div>

                )
                }



            </div>
        </div>
    )
}

export default Tashqi
