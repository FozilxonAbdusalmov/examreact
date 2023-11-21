import React from 'react'
import './Chegirma.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
function Chegirma() {
    const chedirmadata = [



        {
            image: "https://minio.alifnasiya.uz/shop/rand/73/78/97/737897d6-5a9b-40c7-9f7e-4ee2fc7d30e1.jpg",
            describtion: "Smartfon Infinix HOT 30i 4/128 GB , qora",
            creditItem: " 109 302 so'm/oyga",
            price: "1 678 000 so'm",
            ChegirmaItem: "1 499 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/2a/51/99/2a519933-8062-4296-8296-bdf9c54046ae.jpg",
            describtion: "Smartfon tecno spark GO 2022 2/32 GB , firuza ko'k ",
            creditItem: " 98 438 so'm/oyga",
            price: "1 600 000 so'm",
            ChegirmaItem: "1 350 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/39/f9/3c/39f93c2d-06be-4b59-b870-96505fbfefbc.jpg",
            describtion: "Smartfon ZTE Blade A71 3/64 GB , ko'k",
            creditItem: " 83 781 so'm/oyga",
            price: "1 490 000 so'm",
            ChegirmaItem: "1 149 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/77/a4/e4/77a4e482-2053-4331-88b4-0973b8cc724a.jpg",
            describtion: "Smartfon xiamo redmi 12 4/128 GB, goluboy",
            creditItem: " 145 833 so'm/oyga",
            ChegirmaItem: "2 000 000 so'm"
        },

        {
            image: "https://minio.alifnasiya.uz/shop/products/Kq0IneJj9nxs72kCAtCotBg2ltXiBwOhcfxnUT5t.png",
            describtion: "Smartfon Infinix smart 6 2/32 GB , ko'k",
            creditItem: " 91 073 so'm/oyga",
            ChegirmaItem: "1 249 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/4c/e4/7b/4ce47b07-a403-4eac-beb4-528db4693501.jpg",
            describtion: "Smartfon infinix Smart 6 2/32 GB , qora",
            creditItem: " 91 073 so'm/oyga",
            ChegirmaItem: "1 249 000 so'm"
        },
    ]



    return (



        <>
            <div className='chegirma'>
                <div className='chegirma_item'>
                    <h1>Chegirmalar🔥 <Link>Hammsini Korsatish <FaAngleRight />
                    </Link></h1>
                </div>
                <div className='chegirma_container'>
                    {chedirmadata.map((item, index) =>

                        <div className='chegirma_container_item'>

                            <FaHeart />
                            <div>
                                <Link to={"/singlePage"}>

                                    <img src={item.image} alt="phone" />
                                </Link>
                                <div className='chegirma_container_item_narx'>
                                    <span>-15%</span>
                                </div>
                            </div>
                            <p className='rusum'>{item.describtion} </p>
                            <span> {item.creditItem} </span>

                            <p className='narx'>{item.ChegirmaItem}</p>
                            <button> <SlBasket />Savatga</button>
                        </div>
                    )

                    }



                </div>
            </div>
            <div className='chegirma_bottom'>
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B2%D0%B5%D1%81%D1%82%D0%B0%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2b82c29ba13c0c01a9cf254aca203fea49c4f56b2b3561659cf0fb56ad2b62c7" alt="sdfg" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D0%BE%D0%B1%D0%BE%D0%B3%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1c3272d88a58b291fff51f70d0b11e1a91de43eb5a0b7b27459e46b989979215" alt="sdfg" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%20%D0%BE%D0%B1%D0%BE%D0%B3%201337%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9dafa441118a67b6bb2d744fa8209b2d3ddf00f2c6eea748af69211bc8419f82" alt="dfgh" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B0%D1%80%D1%82%D0%B5%D0%BB%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3702202052c1244f2be02096c828ce7e6bbaf6a6aee87934b1e4ff892fd9f099" alt="sdfgh" />
            </div>
        </>
    )
}

export default Chegirma
