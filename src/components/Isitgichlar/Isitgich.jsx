import React from 'react'
import './Isitgich.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function Isitgich() {
  const IsitgichData = [

    {
      image: "https://minio.alifnasiya.uz/shop/products/nteD0JyQ3g1xauABzl80IiBSf0B8VoTyDXkLpxy0.jpg",
      describetion: "Ardesto CHB-2000MBD elektr konvektori, qora ",
      CreditItem: "dan 53 885 so'm/oyga",
      price: "1 513 000 so'm"
    },
    {
      image: "https://minio.alifnasiya.uz/shop/products/1JPmHazkh6TRYRlrpoovBA2sJr5GKfrQ5v8kiiR7.jpg",
      describetion: "Ardesto CHH-2000MWC elektr konvektori, oq",
      CreditItem: "dan 45 135  so'm/oyga",
      price: "619 000 so'm"
    },
    {
      image: " https://minio.alifnasiya.uz/shop/products/QMzw4sew79IzawQUB9oxAvB6YEtbBtae0N8z5Irl.jpg",
      describetion: "Yog' isitgich COMFORT HY-B2f-13 ",
      CreditItem: "dan 69 271 so'm/oyga",
      price: "  950 000 so'm"
    },

    {
      image: " https://minio.alifnasiya.uz/shop/products/O80jFI8PrvMrrP2M2w98ksYhypu6doDr9utEVCha.jpg",
      describetion: "Yog' isitgich COMFORT HY-B2f-13 ",
      CreditItem: "dan 69 271 so'm/oyga",
      price: "  950 000 so'm"
    },
    {
      image: "https://minio.alifnasiya.uz/shop/products/nteD0JyQ3g1xauABzl80IiBSf0B8VoTyDXkLpxy0.jpg",
      describetion: "Ardesto CHB-2000MBD elektr konvektori, qora ",
      CreditItem: "dan 53 885 so'm/oyga",
      price: "1 513 000 so'm"
    },
    {
      image: "https://minio.alifnasiya.uz/shop/products/HaOH0P3HTIskVbekArKzKqRe3on120l7SpeQ776l.jpg",
      describetion: "Ardesto CHB-2000MWPD elektr konvektori, oq",
      CreditItem: "dan 53 885 so'm/oyga",
      price: " 739 000 so'm"
    },
  ]

  return (
    <>
      <div className='isitgich'>
        <div className='isitgich_item'>
          <h1>Isitgichlar <Link>Hammsini Korsatish <FaAngleRight />
          </Link></h1>
        </div>
        <div className='isitgich_container'>
          {IsitgichData.map((item, index) =>
            <div className='isitgich_container_item'>

              <FaHeart />
              <div>
                <Link to={"/singlePage"}>

                  <img src={item.image} alt="phone" />

                </Link>
                <div className='isitgich_container_item_narx'>
                  {/* <p>Aksiya 11.11</p> */}
                </div>
              </div>
              <p className='rusum'>{item.describetion}</p>
              <span> {item.CreditItem} </span>
              {/* <p><s className='isitgich_isitgichs'> 3 200 000 so'm </s></p> */}
              <p className='narx'>{item.price}  </p>
              <button> <SlBasket />Savatga</button>
            </div>
          )

          }



        </div>
      </div>
      <div className='isitgich_bottom'>
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B2%D0%B5%D1%81%D1%82%D0%B0%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2b82c29ba13c0c01a9cf254aca203fea49c4f56b2b3561659cf0fb56ad2b62c7" alt="sdfg" />
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D0%BE%D0%B1%D0%BE%D0%B3%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1c3272d88a58b291fff51f70d0b11e1a91de43eb5a0b7b27459e46b989979215" alt="sdfg" />
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%20%D0%BE%D0%B1%D0%BE%D0%B3%201337%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9dafa441118a67b6bb2d744fa8209b2d3ddf00f2c6eea748af69211bc8419f82" alt="dfgh" />
        <img src="https://minio.alifnasiya.uz/shop/catalog/banner-showcase/08792ee1-d59a-4875-b826-590e32dbd26b/1697532172-1080_496%20%D1%82%D0%B2%20%D0%B0%D1%80%D1%82%D0%B5%D0%BB%20%D1%83%D0%B7%D0%B1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231115T165156Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3702202052c1244f2be02096c828ce7e6bbaf6a6aee87934b1e4ff892fd9f099" alt="sdfgh" />
      </div>
    </>
  )
}

export default Isitgich
