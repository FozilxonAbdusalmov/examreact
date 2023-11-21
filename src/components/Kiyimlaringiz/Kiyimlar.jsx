import React from 'react'
import './Kiyimlar.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function Kiyimlar() {
    const KiyimlarData = [

        {
            image: "https://minio.alifnasiya.uz/shop/products/cH2hNtZkYxaT8UODoLiwfi1WOfxSm5lQSWxNn3I2.png",
            describetion: "Сушилка для белья Sarayli Lady Nelly 1101 ",
            CreditItem: "12 031 so'm/oyga",
            price: "165 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/Ks2WFWwdVu8R5DX8bkzLDPMaGsBqdfGmzKjqGNbW.png",
            describetion: "Сушилка для белья Sarayli Lady Garden",
            CreditItem: " 20 052so'm/oyga",
            price: "275 000 so'm"
        },
        {
            image: " https://minio.alifnasiya.uz/shop/products/cEH7irzwu4epTa4JjIHuZ7fvRgzcucj0MlBi7tI0.png",
            describetion: "Сушилка для белья  LADY PAPATYA 1102",
            CreditItem: " 18 958so'm/oyga",
            price: "  260 000 so'm"
        },

        {
            image: " https://minio.alifnasiya.uz/shop/products/3y3LRx6Ha9TrwmunaeBOaMkramTejqp3XA6kRaP2.png",
            describetion: "Сушилка для белья Sarayli Lady Nelly 1201",
            CreditItem: "   16 042 so'm/oyga",
            price: "  220 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/QkoSuYn1wubzq1b4TdexQydeHlivoadGTqLF8CKO.png",
            describetion: "Сушилка для белья Sarayli Begonya 1205            ",
            CreditItem: "   17 500    so'm/oyga",
            price: "240 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/x2zp4BtJJTdCr3OBULu2gcVZ6lTzu2JiNfLt6mfJ.jpg",
            describetion: "Ardesto CHB-2000 elektr konvektori, oq",
            CreditItem: " 7 656 so'm/oyga",
            price: " 105 000 so'm"
        }
    ]
    return (
        <div className='kiyim'>
            <div className='kiyim_item'>
                <h1>Kiyimlaringiz uchun parvarish to'plami
                    <Link>Hammsini Korsatish <FaAngleRight />
                    </Link></h1>
            </div>
            <div className='kiyim_container'>

                {
                    KiyimlarData.map((item, index) =>
                        <div className='kiyim_container_item'>
                            <FaHeart />
                            <div>

                                <img src={item.image} alt="phone" />
                                <div className='kiyim_container_item_narx'>

                                </div>
                            </div>
                            <p className='rusum'> {item.describetion}</p>
                            <span> {item.CreditItem}</span>
                            <p><s className='kiyim_kiyims'> </s></p>
                            <p className='kiyim_narx'>2 698 000 so'm</p>
                            <button> <SlBasket />Savatga</button>
                        </div>
                    )
                }




            </div>
        </div>
    )
}

export default Kiyimlar
