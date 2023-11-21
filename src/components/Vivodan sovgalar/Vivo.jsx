import React from 'react'
import './Vivo.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
function Vivo() {
    const VivoData = [



        {
            image: "https://minio.alifnasiya.uz/shop/rand/33/3f/9e/333f9ec8-eb89-40d6-88fc-f6a76dbd6c8b.jpg",
            describetion: "Smartfon Infinix HOT 30i 4/128 GB , qora",
            CreditItem: "  324 844 so'm/oyga",
            price: "1 678 000 so'm",
            ChegitmaItem: "1 499 000 so'm",
            acsiya: "+Vivo Y02A",
            chegirma: "5 000 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/67/2c/14/672c14fe-481b-4a42-a43c-c17dbebac13b.jpg",
            describetion: "Smartfon tecno spark GO 2022 2/32 GB ",
            CreditItem: "  324 844 so'm/oyga",
            price: "1 600 000 so'm",
            ChegitmaItem: "1 350 000 so'm",
            acsiya: "+Vivo Y02A",
            chegirma: "5 000 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/cf/0f/58/cf0f5873-8798-4ebf-b427-12612b49ce96.jpg",
            describetion: "Smartfon ZTE Blade A71 3/64 GB , ko'k",

            price: "1 490 000 so'm",
            CreditItem: "  324 844 so'm/oyga",
            ChegitmaItem: "1 149 000 so'm",
            acsiya: "+ quloqchinlar"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/f7/21/58/f72158b9-4ba0-491e-beb3-46b09aa17b23.jpg",
            describetion: "Smartfon xiamo redmi 12 4/128 GB, goluboy",
            CreditItem: "  324 844 so'm/oyga",
            ChegitmaItem: "2 000 000 so'm",
            acsiya: "+ quloqchinlar",
            price: "4 455 000 so'm"

        },


    ]
    return (
        <div className='Vivo'>
            <div className='Vivo_item'>
                <h1>Vivodan sovg'a <Link>Hammsini Korsatish <FaAngleRight />
                </Link></h1>
            </div>
            <div className='Vivo_container'>

                {
                    VivoData.map((item, index) =>

                        <div className='Vivo_container_item'>
                            <FaHeart />
                            <div>

                                <img src={item.image} alt="phone" />
                                <div className='Vivo_container_item_narx'>
                                    <p>{item.acsiya}</p>
                                </div>
                            </div>
                            <p className='rusum'>{item.describetion}</p>
                            <span> {item.CreditItem} </span>
                            <p><s className='Vivo_Vivos'>{item.chegirma}  </s></p>
                            <p className='narx'>{item.price}</p>
                            <button> <SlBasket />Savatga</button>
                        </div>
                    )
                }




            </div>
        </div>
    )
}

export default Vivo
