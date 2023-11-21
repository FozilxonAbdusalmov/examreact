import React from 'react'
import './Smartfonlar.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
function Smartfonlar() {

    const Smartfondata = [


        {
            image: "https://minio.alifnasiya.uz/shop/products/HybZCnA8OHfwhvjJLD32EjlUuX2Whc59KdQV9jCW.jpg",
            describtion: "smartfon xiamo redmi note 12pro 6/128GB 4G...",
            CreditItem: " 191 108so'm/oyga",
            CheagirmaItem: "3 200 000 so'm",
            price: "2 698 000 so'm",
        },
        {
            image: "https://minio.alifnasiya.uz/shop/catalog/product/70775/1698123560-7ae522e6-cf0c-4983-975f-97e0cc908e8d.jpg",
            describtion: "Smartfon xiamo redmi 12 4/128 GB, goluboy",
            CreditItem: " 145 833 so'm/oyga",
            CheagirmaItem: "2 055 000 so'm",
            price: "2 000 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/61/1a/50/611a503a-1687-44c6-94c5-c335548eda99.jpg",
            describtion: "Smartfon tecno Spark 10 pro 8/128 GB, qora",
            CreditItem: " 145 833 so'm/oyga",
            CheagirmaItem: "4 500 000",
            price: "4 229 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/Cp5PLF3tG6Qgt8q5nJPU0Ho2ALpuvpZ5BfGc3fhm.png",
            describtion: "Smartfon Samsung Galaxy A24 6/128 GB, yashil",
            CreditItem: " 176 458 so'm/oyga",
            CheagirmaItem: "7 200 000 so'm",
            price: "6 300 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/eb/d6/c6/ebd6c6c9-c0a9-47b3-a669-315878f1f598.jpg",
            describtion: "Smartfon Honor 90 Lite 8/256 GB, ko'k",
            CreditItem: " 222 396 so'm/oyga",
            CheagirmaItem: "6 000 000 so'm",
            price: "3 050 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/73/78/97/737897d6-5a9b-40c7-9f7e-4ee2fc7d30e1.jpg",
            describtion: "Smartfon Infinix HOT 30i 4/128 GB, kulrang",
            CreditItem: " 109 375 so'm/oyga",
            CheagirmaItem: "5 000 000 so'm",
            price: "4 499 000 so'm"
        },
    ]
    return (
        <>
            <div className='smartfon'>
                <div className='smartfon_item'>
                    <h1>Smartfonlar 69 990 So'mdan <Link>Hammsini Korsatish <FaAngleRight />
                    </Link></h1>
                </div>
                <div className='smartfon_container'>

                    {
                        Smartfondata.map((item, index) =>
                            <div className='smartfon_container_item'>

                                <FaHeart />
                                <div>

                                    <Link to={"/singlePage"}>

                                        <img src={item.image} alt="phone" />
                                    </Link>
                                    <div className='smartfon_container_item_narx'>
                                        <span>-15%</span>
                                    </div>
                                </div>
                                <p className='rusum'>{item.describtion}</p>
                                <span> {item.CreditItem} </span>
                                <p><s className='smartfon_smartfons'> {item.CheagirmaItem} </s></p>
                                <p className='narx'>{item.price}</p>
                                <button> <SlBasket />Savatga</button>
                            </div>
                        )
                    }




                </div>
            </div>
            <div className='smartfon_bottom'>
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B2%D0%B5%D1%81%D1%82%D0%B0%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2b82c29ba13c0c01a9cf254aca203fea49c4f56b2b3561659cf0fb56ad2b62c7" alt="sdfg" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D0%BE%D0%B1%D0%BE%D0%B3%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1c3272d88a58b291fff51f70d0b11e1a91de43eb5a0b7b27459e46b989979215" alt="sdfg" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%20%D0%BE%D0%B1%D0%BE%D0%B3%201337%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9dafa441118a67b6bb2d744fa8209b2d3ddf00f2c6eea748af69211bc8419f82" alt="dfgh" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B0%D1%80%D1%82%D0%B5%D0%BB%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3702202052c1244f2be02096c828ce7e6bbaf6a6aee87934b1e4ff892fd9f099" alt="sdfgh" />
            </div>
        </>
    )
}

export default Smartfonlar
