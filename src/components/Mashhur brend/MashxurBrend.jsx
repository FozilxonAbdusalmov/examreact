import React from 'react'
import './MashxurBrend.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineAppstore } from "react-icons/ai";

function MashxurBrend() {
    const MashxurBrendData = [
        {
            image: "https://minio.alifnasiya.uz/shop/rand/de/e5/88/dee58804-874e-4b6c-bc7d-a920b456b736.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=98def4f6e0def34df12e97d9e799ecfbe8efa5536a3f553080bf41eaab13bf66",
            describtion: " Artel",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/10/d6/a8/10d6a823-66be-455a-825d-69ba67e50d45.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ca546b7e9183953044eef5b1f369b941a8f89517db6a2e39a673471af47e6bea",
            describtion: "Premier",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/6e/92/c8/6e92c8d6-0c7e-4ac7-b7d6-464439efc1e8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8fa085e210bd698dfdc5dd6d3423dc44f1fd84f9d323c7b203f205a510cd18ea ",
            describtion: "Samsung",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/25/56/61/2556618e-e7d5-423e-92aa-f58972bb7c16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef3403c313caf2aadbfaabceeef8cb7f8d4e5cb031e0487b95a31a6335affe85",
            describtion: "Shivaki",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/2e/ef/ce/2eefcefc-8100-4abd-bd01-8bcf6f9ab679.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b0e5e57d908fec2f369298eb1c1c84d5acd6f753a586de18921975251e34b141",
            describtion: "Xiomi",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/85/de/ce/85dece29-5aa8-4203-8a20-6b174a13a1b9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=917727f5e5037c77bac545250f4e3f340de1da91eacad22b86bf5796b3bf9303",
            describtion: "LG",


        },

        {
            image: "https://minio.alifnasiya.uz/shop/rand/73/57/24/73572430-663c-48c7-91c1-a60c3c9a9945.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a45502254fd5d3e038a31dd1e7cbd3f7626c369ea50612a350bf7cfc9541632b",
            describtion: "Avalon",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/45/ff/00/45ff00cd-d451-4cfb-9f77-9e2b889a082f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=92beb64e51f2782ffc5bd246e05c862ba466f8c4f2d067f2c0b2dd14f71432c8",
            describtion: "Tecno",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/ea/b9/88/eab9881e-e0fc-4864-882b-2556fd8e267f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=18f8fbfdaae6e3e661b0bb9c9cf2becc8676f6939deabda51c2330690baae8f4",
            describtion: "Honor",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/49/e2/8f/49e28fa7-e4ad-4297-aaec-aa4744f578f0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a07c80c990909fcfbc490880be027dac807cbb9cb1eaf1ab2e3681a75a5451ac",
            describtion: "Huawie",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/50/5f/ed/505feda8-b485-4a5e-b74a-8268df4fa956.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=584a39fc83de69b4bdcff212b1939f3fe471d08048ec5b89adb5f22d8b08a8c0",
            describtion: "Oppo",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/catalog/brands/1693546545-image_2023-09-01_10-35-03.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ae208df6a4a83d2465f18433a4b1c887dc84b6f2cb068625032365b03c3a13e5",
            describtion: "Realme",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/1d/96/b7/1d96b754-3987-4c56-ba54-a7f5de0cacc2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=06f8a76a45651b351aaa153a2e47a10f0a4d5479eccedbaafaf4c261041d8ae2",
            describtion: "SSmart",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/d7/e8/b5/d7e8b5dc-26a9-4638-b4ff-5abd396fc6bd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3ab429f92d4f682df11802d7948b32cd008a88ad5f6f01bf284d7127960a0703",
            describtion: "Vivo",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/fa/b7/27/fab72776-6868-49f6-9779-67674ecd5c5b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9f7ea91fd7945a26381812f2667cc3e0aed3871a7523714bcbe6193a48dd830c",
            describtion: "Bosch",


        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/f3/db/07/f3db0718-78e6-4d2d-888c-dd65ffcc0178.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yxwkeQmQF5UoY17v%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T095051Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4732a9644f2fabb22797bb3591f5b6fd266ee7788ad3f345f03a7dc51cf6dcc0",
            describtion: "Apple",


        },

    ]

    return (
        <div className='mashhurBrend'>
            <h1>Mashhur brendlar <Link>Hammasini ko'rish <FaAngleRight />
            </Link></h1>

            <div className='mashhurBrend_item'>

                {MashxurBrendData.map((item, index) =>

                    <div className="mashhurBrend_item_items">
                        <img src={item.image} alt="redfg" />
                        <p>{item.describtion}</p>
                    </div>

                )


                }

            </div>
            <button ><AiOutlineAppstore />Katalogga o'tish</button>
        </div>
    )
}

export default MashxurBrend
