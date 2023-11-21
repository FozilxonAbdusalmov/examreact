import React from 'react'
import './AvtomobilUchun.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function AvtomobilUchun() {
    const Avtomobildata = [


        {
            image: "https://minio.alifnasiya.uz/shop/products/6BYtcoNetF4ZR98KnC6XQUlN4HVivaRntfYA7l1f.png",
            describtion: "DVR Neoline G-TECH X28 , Qora",
            CreditItem: "dan 88 958 so'm/oyga",
            price: "1 220 000 so'm",
            aksiya: "+sovg'a"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/67/df/cc/67dfcc71-b6ab-405c-bab5-e5fcab75fa4f.jpg",
            describtion: "Avtomibi uchun dariosi Pioneer FH-S725BT ",
            CreditItem: "dan 145 688 so'm/oyga",
            price: "1 998 000 so'm",
            aksiya: "+sovg'a"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/6zha96YLfLqEtdIYa14vx3JmnY9ixGSFZWXpIEUm.png",
            describtion: "tesla avtomobil manitori 10,2 4/32 GB ",
            CreditItem: "dan 130 375 so'm/oyga",
            price: "1 788 000 so'm",
            aksiya: "+sovg'a"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/8f/b0/43/8fb043c4-cb3e-4260-8e3c-314a7c6415c4.jpg",
            describtion: "Radiator-detektor Neoline X-COP 7700S ",
            CreditItem: "dan 88 958 so'm/oyga",
            price: "1 220 000 so'm",
            aksiya: "+sovg'a"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/80/a7/00/80a7001d-f027-405e-bbb4-b610a380f1d3.jpg",
            describtion: "Radiator-detektor Neoline X-COP 7700S ",
            CreditItem: "dan 204 531 so'm/oyga",
            price: "2 805 000 so'm",
            aksiya: "+sovg'a"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/Xx6sdIZEqvPwMLGu2AYpMCniHZh1lVMNb7ZUyoOj.jpg",
            describtion: "Radiator-detektor Neoline X-COP 7800S ",
            CreditItem: "dan 88 958 so'm/oyga",
            price: "1 220 000 so'm",
            aksiya: "+sovg'a"
        },
    ]


    return (
        <div className='avtomobiluchun'>
            <div className='avtomobiluchun_item'>
                <h1>Avtomobil zaryadlovchi qurilmasi sovg'aga<Link>Hammsini Korsatish <FaAngleRight />
                </Link></h1>
            </div>
            <div className='avtomobiluchun_container'>

                {Avtomobildata.map((item, index) =>

                    <div className='avtomobiluchun_container_item'>

                        <FaHeart />
                        <div>

                            <img src={item.image} alt="phone" />
                            <div className='avtomobiluchun_container_item_narx'>
                                <p>{item.aksiya}</p>
                            </div>
                        </div>
                        <p className='rusum'>{item.describtion}</p>
                        <span> 191 108so'm/oyga </span>
                        <p><s className='avtomobiluchun_avtomobiluchuns'> 3 200 000 so'm </s></p>
                        <p className='narx'>2 698 000 so'm</p>
                        <button> <SlBasket />Savatga</button>
                    </div>
                )

                }




            </div>
        </div>
    )
}

export default AvtomobilUchun
