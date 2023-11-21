
import React from 'react';
import './Qiziqtirish.css';
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';


function Interest() {
    const qiziqdata = [


        {
            image: "https://minio.alifnasiya.uz/shop/products/nteD0JyQ3g1xauABzl80IiBSf0B8VoTyDXkLpxy0.jpg",
            describtion: "Ardesto CHB-2000MBD elektr konvektori, qora",
            creditItem: "23885 so'm/oyga",
            price: "739 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/5f/f5/5b/5ff55b0f-67ed-457e-8fa0-bc7c5a691ded.jpg",
            describtion: "mobil telefon Nokia 2660 Filp, qora",
            creditItem: "81302 so'm/oyga",
            price: "1 115 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/61/1a/50/611a503a-1687-44c6-94c5-c335548eda99.jpg",
            describtion: "Smartfon tecno Spark 10 pro 8/128 GB, qora",
            creditItem: "145833 so'm/oyga",
            price: "2 000 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/f9/c7/a8/f9c7a8df-003a-4f1f-8ad9-e2d1898edca6.jpg",
            describtion: "Smartfon Samsung Galaxy A24 6/128 GB, yashil",
            creditItem: "176458 so'm/oyga",
            price: "2 420 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/y5RCswIq4ekUXMXLrGKXuvBjnXrPgsmccOeLU5gX.png",
            describtion: "Smartfon Honor 90 Lite 8/256 GB, ko'k",
            creditItem: "222396 so'm/oyga",
            price: "3 050 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/hj671fRjfxYSQYej8UT4GyOndIUfOOTG2xjQ1hD0.jpg",
            describtion: "Electr Velosiped Kugoo Flex KO1, qora",
            creditItem: "484896 so'm/oyga",
            price: "6 650 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/61/1a/50/611a503a-1687-44c6-94c5-c335548eda99.jpg",
            describtion: "Smartfon tecno Spark 10 pro 8/128 GB, qora",
            creditItem: "145833 so'm/oyga",
            price: "2 000 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/73/78/97/737897d6-5a9b-40c7-9f7e-4ee2fc7d30e1.jpg",
            describtion: "Smartfon Infinix HOT 30i 4/128 GB, kulrang",
            creditItem: "109375 so'm/oyga",
            price: "1 500 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/50/fc/54/50fc5466-0c33-45bd-8716-b73e907fd905.jpg",
            describtion: "Planshet Nextbook BRT81 3/16 GB ,kulrang",
            creditItem: " 80063 so'm/oyga",
            price: "1 098 000 so'm"
        },

        {
            image: "https://minio.alifnasiya.uz/shop/rand/ba/13/a4/ba13a48b-25c1-48e1-aceb-dbba6565d9bd.jpg",
            describtion: "Kenwood KFC-HQ718 Avtomobil karnaylari",
            creditItem: "109229 so'm/oyga",
            price: "1 498 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/rJcVvj0WkpnpTUFPlGUvmvtO1DNOjvfs7RDPV0Ec.jpg",
            describtion: "Mercedes Bao avtomobil rul, kumush",
            creditItem: "113021 so'm/oyga",
            price: "1 555 000 so'm"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/d7/ec/84/d7ec84cb-a77b-4bec-ac1a-bc1250b5dbc7.jpg",
            describtion: "televizor Ssmart 32fav2232, cherniy",
            creditItem: "160417 so'm/oyga",
            price: "2 200 000 so'm"
        },


    ]
    return (
        <div>
            <div className='qiziqtirish'>
                <h1>Sizni qiziqtirishi mumkin</h1>


                <div className="qiziqtirish_container">

                    {qiziqdata.map((item, index) =>

                        <div key={index} className='qiziqtirish_container_item'>

                            <FaHeart />
                            <div>
                                <Link to={"/singlePage"}>

                                    <img src={item.image} alt="phone" />
                                </Link>

                            </div>
                            <p className='rusum'>{item.describtion}</p>
                            <span>{item.creditItem} </span>

                            <p className='qiziqtirish_narx'> {item.price}</p>
                            <button> <SlBasket />Savatga</button>
                        </div>

                    )
                    }



                </div>
                <button>Show more</button>
            </div>

            <div className='qiziqtirish_bottom'>
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/00c8aff5-98f1-428d-959a-d920de2fa828/1696314053-1080_496%20m14%20uz.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=80535f8eba9423d6cac94ac1712e68f2b25aba37d19be10f9f9818cafdee85a9" alt="sdfg" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/00c8aff5-98f1-428d-959a-d920de2fa828/1696314054-1080_496Sw%20hw3%20uzb_.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7dbf90467cbdaec29a2310e838a53838b0374f80ee6d58077c9f49516e57421f" alt="sdfg" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/00c8aff5-98f1-428d-959a-d920de2fa828/1696314055-1080_496%20Redmi%2010C%204_64%20Uzb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T060643Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=68b0c8cd58b0111247727d4616a8da656049bcad5112f7a8c36b599c55654b62" alt="dfgh" />
                <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/00c8aff5-98f1-428d-959a-d920de2fa828/1696314055-1080_496%20Redmi%2010%202022%206_128%20uzb.png?X-AMZ-ALORGITHM=AMS4-HMAC-Sha256&amp;x-amz-credy-1%2Fus-East-1%2FS3%2Fed=202311z&amp;X-amz-any Pires=604800&amp;x-Amz-SignedHeaders=host&amp;X-Amz-Signature=ab560ff6cb56cabc6c387ab9439fbb60beff1c15e6f9e71a53178a09728c986e" alt="sdfgh" />
            </div>
        </div>
    );
}

export default Interest;
