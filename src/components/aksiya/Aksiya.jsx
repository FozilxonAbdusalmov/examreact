import React from 'react'
import './Aksiya.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { TbShoppingBagPlus } from 'react-icons/tb'

import { Add_To_Heart } from '../redux/addtoHeart'
import { ADD_TO_CART } from '../redux/addtoCart'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { SlBasket } from "react-icons/sl";
import { useState } from 'react'



function Aksiya() {


    const [count, setcount] = useState(1)
    function minus() {
        setcount(count - 1)
        if (count === 0) {
            // Decrease the amount by 1
            setcount(count == 0);
        }

    }
    function plus() {
        setcount(count + 1)
    }

    const Aksiyadata = [
        {
            image: "https://minio.alifnasiya.uz/shop/rand/9b/92/0a/9b920a38-d45f-4e47-9038-3e05cc4a4067.jpg",
            describtion: "smartfon xiamo redmi note 12pro 6/128GB 4G...",
            creditItem: "191108so'm/oyga",
            price: "3 200 000 so'm",
            chegirmanarx: "2 698 000 so'm",
            chegirma: "-5%",
            aksiya: "Aksiya 11.11",
            id: "1"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/b5/27/02/b527027b-40ed-45ce-b919-4ce7f135cf14.jpg",
            describtion: "Smartfon xiamo redmi 12 4/128 GB, goluboy",
            creditItem: " 145 833 so'm/oyga",
            price: "2 055 000 so'm",
            chegirmanarx: "2 000 000 so'm",
            chegirma: "-9%",
            aksiya: "Aksiya 11.11",
            id: "2"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/px69ZC1tWuxrYWipFuFKy8V6PEun4ajGZeuHYfyX.webp",
            describtion: "televizor Ssmart 32fav2232, cherniy",
            creditItem: " 160 417 so'm/oyga",
            price: "2 570 000 so'm",
            chegirmanarx: "2 200 000 so'm",
            chegirma: "-13%",
            aksiya: "+Telefon",
            id: "3"

        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/gmm8VQgU596hEDp5CUKk14Xm4IF6lJjyS7MjlQud.jpg",
            describtion: "planshet C-idea yangi avlod , to'q sariq ",
            creditItem: "58 188 000 so'm/oyga",
            price: "1 200 000 so'm",
            chegirmanarx: "798 000 so'm",
            chegirma: "-19%",
            aksiya: "Aksiya 11.11",

            id: "4"

        },
        {
            image: "https://minio.alifnasiya.uz/shop/products/rJcVvj0WkpnpTUFPlGUvmvtO1DNOjvfs7RDPV0Ec.jpg",
            describtion: "Mercedes Bao avtomobil rul, kumush",
            creditItem: " 113 021 so'm/oyga",
            price: "1 887 000 so'm",
            chegirmanarx: "1 555 000 so'm",
            chegirma: "-24%",
            aksiya: "Aksiya 11.11",
            id: "5"
        },
        {
            image: "https://minio.alifnasiya.uz/shop/rand/c1/e4/38/c1e43818-9c8f-4e25-9d20-ae3be072d011.jpg",
            describtion: "Apple Airapods pro 2 simsiz naushniklar oq",
            creditItem: " 226 042 so'm/oyga",
            price: "3 700 000 so'm",
            chegirmanarx: "3 100 000 so'm",
            chegirma: "-10%",
            aksiya: "Aksiya 11.11",
            id: "6"
        }
    ]


    const heartData = useSelector(s => s.addToHeart).map(i => i.id)
    const cartData = useSelector(s => s.addToCart).map(i => i.id)
    const dispatch = useDispatch()
    // const count =


    function addToCart(item) {
        dispatch(ADD_TO_CART({ pro: item }))
        toast.success("You have successfully registered", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            hideProgressBar: true,
        })
    }


    return (
        <div className='aksiya'>
            <div className='aksiya_item'>
                <h1>Aksiya 11.11🔥 <Link>Hammsini Korsatish <FaAngleRight />
                </Link></h1>
            </div>
            <div className='aksiya_container'>

                {
                    Aksiyadata.map((item, index) =>


                        <div key={index} className='aksiya_container_item'>

                            {
                                heartData.some(i => i === item.id) ?
                                    <AiFillHeart className='heart' onClick={() => dispatch(Add_To_Heart({ pro: item }))} />
                                    :
                                    <AiOutlineHeart className='heart' onClick={() => dispatch(Add_To_Heart({ pro: item }))} />
                            }

                            <div>
                                <Link to={`/singlePage`}>

                                    <img src={item.image} alt="" />
                                </Link>
                                <div className='aksiya_container_item_narx'>
                                    <span>{item.chegirma}</span>
                                    <p>{item.aksiya}</p>

                                </div>
                            </div>
                            <p className='rusum'> {item.describtion}</p>
                            <span> {item.creditItem} </span>
                            <p><s className='aksiya_chegirmas'> {item.price}</s></p>
                            <p className='narx'> {item.chegirmanarx}</p>
                            <button>  {
                                cartData.some(i => i === item.id) ?
                                    <>
                                        <TbShoppingBagPlus className='shopicon' onClick={() => addToCart(item)} />
                                        <button onClick={minus}>-</button>
                                        <p>{count}</p>
                                        <button onClick={plus}>+</button>

                                    </>
                                    :
                                    <>
                                        <button onClick={() => dispatch(ADD_TO_CART({ pro: item }))}><SlBasket />Savatga</button>
                                    </>


                            }</button>
                        </div>

                    )
                }

            </div>
        </div >
    )
}

export default Aksiya
