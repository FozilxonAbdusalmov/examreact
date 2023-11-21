import React from 'react'
import './Giftbook.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function Giftbook() {
    const Giftbookdata = [


        {
            image: "https://minio.alifnasiya.uz/shop/products/HybZCnA8OHfwhvjJLD32EjlUuX2Whc59KdQV9jCW.jpg",
            describtion: "smartfon xiamo redmi note 12pro 6/128GB 4G...",
            item: " 191 108so'm/oyga",
            price: "3 200 000 so'm",
            chegirmaItem: "2 698 000 so'm",
        },
        {
            image: "https://minio.alifnasiya.uz/shop/catalog/product/70775/1698123560-7ae522e6-cf0c-4983-975f-97e0cc908e8d.jpg",
            describtion: "Smartfon xiamo redmi 12 4/128 GB, goluboy",
            item: " 145 833 so'm/oyga",
            price: "2 055 000 so'm",
            chegirmaItem: "2 000 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/61/1a/50/611a503a-1687-44c6-94c5-c335548eda99.jpg",
            describtion: "Smartfon tecno Spark 10 pro 8/128 GB, qora",
            item: " 145 833 so'm/oyga",
            price: "4 500 000",
            chegirmaItem: "4 229 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/Cp5PLF3tG6Qgt8q5nJPU0Ho2ALpuvpZ5BfGc3fhm.png",
            describtion: "Smartfon Samsung Galaxy A24 6/128 GB",
            item: " 176 458 so'm/oyga",
            price: "7 200 000 so'm",
            chegirmaItem: "6 300 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/61/1a/50/611a503a-1687-44c6-94c5-c335548eda99.jpg",
            describtion: "Smartfon tecno Spark 10 pro 8/128 GB, qora",
            item: " 145 833 so'm/oyga",
            price: "4 500 000",
            chegirmaItem: "4 229 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/Cp5PLF3tG6Qgt8q5nJPU0Ho2ALpuvpZ5BfGc3fhm.png",
            describtion: "Smartfon Samsung Galaxy A24 6/128 GB, yashil",
            item: " 176 458 so'm/oyga",
            price: "7 200 000 so'm",
            chegirmaItem: "6 300 000 so'm"
        },
    ]
    return (
        <div className='giftbook'>
            <div className='giftbook_item'>
                <h1>Giftboks sovg'aga <Link>Hammsini Korsatish <FaAngleRight />
                </Link></h1>
            </div>
            <div className='giftbook_container'>

                {Giftbookdata.map((item, index) =>


                    <div div className='giftbook_container_item'>

                        <FaHeart />
                        <div>

                            <img src={item.image} alt="phone" />
                            <div className='giftbook_container_item_narx'>
                                <p>+ giftbook</p>
                            </div>
                        </div>
                        <p className='rusum'> {item.describtion}</p>
                        <span> {item.item} </span>
                        <p><s className='giftbook_giftbooks'> {item.price}</s></p>
                        <p className='narx'>{item.chegirmaItem}</p>
                        <button> <SlBasket />Savatga</button>
                    </div>
                )

                }



            </div>
        </div >
    )
}

export default Giftbook
