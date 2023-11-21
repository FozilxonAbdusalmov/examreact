import React from 'react'
import './Sevimli.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function Sevimli() {

    const Aksiyadata = [
        {
            image: "https://minio.alifnasiya.uz/shop/rand/9b/92/0a/9b920a38-d45f-4e47-9038-3e05cc4a4067.jpg",
            describtion: "smartfon xiamo redmi note 12pro 6/128GB 4G...",
            creditItem: "dan 191 108so'm/oyga",
            price: "3 200 000 so'm",
            chegirmanarx: "2 698 000 so'm",
            chegirma: "-5%",
            aksiya: "Aksiya 11.11"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/b5/27/02/b527027b-40ed-45ce-b919-4ce7f135cf14.jpg",
            describtion: "Smartfon xiamo redmi 12 4/128 GB, goluboy",
            creditItem: "dan 145 833 so'm/oyga",
            price: "2 055 000 so'm",
            chegirmanarx: "2 000 000 so'm",
            chegirma: "-9%",
            aksiya: "Aksiya 11.11"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/px69ZC1tWuxrYWipFuFKy8V6PEun4ajGZeuHYfyX.webp",
            describtion: "televizor Ssmart 32fav2232, cherniy",
            creditItem: "dan 160 417 so'm/oyga",
            price: "2 570 000 so'm",
            chegirmanarx: "2 200 000 so'm",
            chegirma: "-13%",
            aksiya: "+Telefon"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/gmm8VQgU596hEDp5CUKk14Xm4IF6lJjyS7MjlQud.jpg",
            describtion: "planshet C-idea yangi avlod , to'q sariq ",
            creditItem: "58 188 000 so'm/oyga",
            price: "1 200 000 so'm",
            chegirmanarx: "798 000 so'm",
            chegirma: "-19%",
            aksiya: "Aksiya 11.11"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/rJcVvj0WkpnpTUFPlGUvmvtO1DNOjvfs7RDPV0Ec.jpg",
            describtion: "Mercedes Bao avtomobil rul, kumush",
            creditItem: "dan 113 021 so'm/oyga",
            price: "1 887 000 so'm",
            chegirmanarx: "1 555 000 so'm",
            chegirma: "-24%",
            aksiya: "Aksiya 11.11"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/c1/e4/38/c1e43818-9c8f-4e25-9d20-ae3be072d011.jpg",
            describtion: "Apple Airapods pro 2 simsiz naushniklar oq",
            creditItem: "dan 226 042 so'm/oyga",
            price: "3 700 000 so'm",
            chegirmanarx: "3 100 000 so'm",
            chegirma: "-10%",
            aksiya: "Aksiya 11.11"
        }
    ]
    return (
        <div className='sevimli'>
            <div className='aksiya_item'>
                <h1>Saralanganlar</h1>
            </div>
            <div className='aksiya_container'>

                {
                    Aksiyadata.map((item, index) =>
                        <div key={index} className='aksiya_container_item'>
                            <FaHeart />
                            <div>
                                <img src={item.image} alt="" />
                                <div className='aksiya_container_item_narx'>
                                    <span>{item.chegirma}</span>
                                    <p>{item.aksiya}</p>

                                </div>
                            </div>
                            <p className='rusum'> {item.describtion}</p>
                            <span> {item.creditItem} </span>
                            <p><s className='aksiya_chegirmas'> {item.price}</s></p>
                            <p className='narx'> {item.chegirmanarx}</p>
                            <button> <SlBasket />Savatga</button>
                        </div>

                    )
                }
            </div>
        </div >
    )
}

export default Sevimli
