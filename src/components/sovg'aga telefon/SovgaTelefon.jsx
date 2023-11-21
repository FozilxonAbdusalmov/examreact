import React from 'react'
import './SovgaTelefon.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
function SovgaTelefon() {
  const Sovgadata = [
    {
      image: "https://minio.alifnasiya.uz/shop/rand/4e/d0/df/4ed0dfb0-2cc9-4ec1-85f0-6e74f97bbee6.jpg",
      describtion: "Tv Artel TV A32KH5000 32 , qora",
      creditItem: " 110 323 so'm/oyga",
      price: "1 513 000 so'm",
      aksiya: "+Telefon"

    },
    {
      image: "https://minio.alifnasiya.uz/shop/rand/56/48/76/564876b5-f757-48e1-8f61-bc7d41b2c3a2.jpg",
      describtion: "TV Artel 32KH5000 enter LED 32",
      creditItem: " 116 667 so'm/oyga",
      price: " 1 600 000 so'm",
      aksiya: "+Telefon"

    },
    {
      image: "https://minio.alifnasiya.uz/shop/rand/b1/e8/ae/b1e8ae64-11b8-4dfc-adfc-9b796f3541db.jpg ",
      describtion: "Artel A32KH5500 televizori , qora",
      creditItem: " 145 833 so'm/oyga",
      price: " 2 000 000 so'm",
      aksiya: "+Telefon"

    },
    {
      image: "https://minio.alifnasiya.uz/shop/rand/a1/f6/26/a1f626fc-c538-43a1-8646-fa7ff2cb7046.jpg",
      describtion: "TV Artel TV A 43 KF5000 43 , qora",
      creditItem: " 200 520 so'm/oyga",
      price: " 2 750 000 so'm",
      aksiya: "+Telefon"

    },
    {
      image: "https://minio.alifnasiya.uz/shop/rand/a9/c8/1f/a9c81f04-d01a-4c73-930d-adaf128208ba.jpg",
      describtion: "TV artel UA32H4101 32 ,qora",
      creditItem: " 113 021 so'm/oyga",
      price: " 1 555 000 so'm",
      aksiya: "+Telefon"

    },
    {
      image: "https://minio.alifnasiya.uz/shop/rand/b8/3f/95/b83f9575-bdfa-4581-ba43-3adc4a00114c.jpg",
      describtion: "TV artel UA43H3301 43 , kumush",
      creditItem: " 204 167 so'm/oyga",
      price: " 2 800 000 so'm",
      aksiya: "+Telefon"

    },

  ]
  return (
    <>
      <div className='sovgatelefon'>
        <div className='sovgatelefon_item'>
          <h1>Savg'aga Telefon <Link>Hammsini Korsatish <FaAngleRight />
          </Link></h1>
        </div>
        <div className='sovgatelefon_container'>

          {
            Sovgadata.map((item, index) =>

              <div className='sovgatelefon_container_item'>

                <FaHeart />
                <div>

                  <img src={item.image} alt="phone" />
                  <div className='sovgatelefon_container_item_narx'>
                    <p>{item.aksiya}</p>
                  </div>
                </div>
                <p className='rusum'>{item.describtion}</p>
                <span>{item.creditItem} </span>
                {/* <p><s className='sovgatelefon_sovgatelefons'> 3 200 000 so'm </s></p> */}
                <p className='narx'>{item.price}</p>
                <button> <SlBasket />Savatga</button>
              </div>
            )
          }





        </div>
      </div>
      <div className='sovgatelefon_bottom'>
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B2%D0%B5%D1%81%D1%82%D0%B0%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2b82c29ba13c0c01a9cf254aca203fea49c4f56b2b3561659cf0fb56ad2b62c7" alt="sdfg" />
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D0%BE%D0%B1%D0%BE%D0%B3%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1c3272d88a58b291fff51f70d0b11e1a91de43eb5a0b7b27459e46b989979215" alt="sdfg" />
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%20%D0%BE%D0%B1%D0%BE%D0%B3%201337%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9dafa441118a67b6bb2d744fa8209b2d3ddf00f2c6eea748af69211bc8419f82" alt="dfgh" />
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B0%D1%80%D1%82%D0%B5%D0%BB%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3702202052c1244f2be02096c828ce7e6bbaf6a6aee87934b1e4ff892fd9f099" alt="sdfgh" />
      </div>
    </>
  )
}

export default SovgaTelefon
