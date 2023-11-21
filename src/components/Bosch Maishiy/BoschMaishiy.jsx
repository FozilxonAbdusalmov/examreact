import React from 'react'
import './BoschMaishiy.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function BoschMaishiy() {
    const BoschData = [


        {
            image: "https://minio.alifnasiya.uz/shop/rand/a5/d6/59/a5d659a4-5ff3-491e-aaad-6f30bd2889e7.jpg",
            describtion: "Миксер Bosch MFQ3540, белый",
            CreaditItem: " 88 958 so'm/oyga",
            price: "1 220 000 so'm",
            acsiya: "-26%",
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/09/e8/7e/09e87e95-130b-4f25-b169-ab81384fb0ab.jpg",
            describtion: "Соковыжималка Bosch MES25G0",
            CreaditItem: " 145 688 so'm/oyga",
            price: "1 998 000 so'm",
            acsiya: "-26%"

        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/ee/5a/93/ee5a93e5-9feb-4f61-beb3-0697ea0727d2.jpg",
            describtion: "Пылесос Bosch BWD421PRO ",
            CreaditItem: " 130 375 so'm/oyga",
            price: "1 788 000 so'm",
            acsiya: "-15%",
            aksiya: "+mikser"

        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/22/11/0d/22110d9f-485a-42fc-8a8a-d5679e67a1fb.jpg",
            describtion: "Пылесос Bosch BGC21HYG1 ",
            CreaditItem: " 88 958 so'm/oyga",
            price: "1 220 000 so'm",
            acsiya: "-15%",

        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/7a/35/e2/7a35e20b-5de4-468c-9efb-0bcbac80d982.jpg",
            describtion: "Пылесос Bosch BWD421PET ",
            CreaditItem: " 204 531 so'm/oyga",
            price: "2 805 000 so'm",
            aksiya: "+mikser"

        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/12/02/89/1202892f-a867-4af8-a4fa-3ac7b0273024.jpg",
            describtion: "Пылесос Bosch BGS412000, синий",
            CreaditItem: " 88 958 so'm/oyga",
            price: "1 220 000 so'm",
            aksiya: "+mikser"

        },
    ]
    return (
        <div className='boschmaisiy'>
            <div className='boschmaisiy_item'>
                <h1>Bosch Maishiy texnikasi
                    <Link>Hammsini Korsatish <FaAngleRight />
                    </Link></h1>
            </div>
            <div className='boschmaisiy_container'>
                {
                    BoschData.map((item, index) =>



                        <div className='boschmaisiy_container_item'>

                            <FaHeart />
                            <div>

                                <img src={item.image} alt="phone" />
                                <div className='boschmaisiy_container_item_narx'>
                                  


                                </div>
                            </div>
                            <p className='rusum'>{item.describtion}</p>
                            <span> {item.CreaditItem} </span>
                            <p><s className='boschmaisiy_chegirmas'> 3 200 000 so'm </s></p>
                            <p className='narx'>{item.price}</p>
                            <button> <SlBasket />Savatga</button>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default BoschMaishiy
