import React from 'react'
import './Cart.css'
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
function Cart() {
    return (

        <div className='Cart_item'>

            <div className="Cart_left">
                <div>
                    <div className='savat'>
                        <h1>Sovat</h1>
                        <p>1 tovarni</p>
                    </div>


                    <div>
                        <p>Hammasini tanlash</p>
                        <input type="checkbox" />
                    </div>

                </div>


                <div className='left_item'>
                    <div>
                        <img src="https://minio.alifnasiya.uz/shop/products/kkKFyY0tywzFhK9YqK1Cc74gbvPu7hXOT43aaYBY.webp" alt="" />

                        <div>
                            <b>Телевизор SSMART 32FAV22 32", черный</b>
                            <p>Narx: 2 200 000 so'm</p>
                            <p>Sotuvchi: TELTORG</p>
                            <div className='muaddatli_tolov'>
                                <p>Muddatli To'lov</p>
                                <div>
                                    <p>160 417 <span>so'm</span> <IoClose />
                                        <select>
                                            <option value="3oyga">3oyga</option>
                                            <option value="6oyga">6oyga</option>
                                            <option value="12oyga">12oyga</option>
                                            <option value="18oyga">18oyga</option>
                                            <option value="24oyga">24oyga</option>


                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className='left_count'>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>

                        </div>

                    </div>

                    <div className='chescbox_item'>
                        <RiDeleteBin6Line />
                        <p>o'chirish</p>

                    </div>
                </div>

            </div>
            <div className="Cart_right">
                <div className='Cart_right_item'>
                    <h2>Jami <h2>2200 000  so'm</h2></h2>

                    <p>Tovarlar soni <p>1 dona</p></p>
                    <p>Yetkazib berish <span>Bepul</span></p>


                    <p className='deliveryy'>Eshikgacha, Butun O'zbekiston bo'ylab, 1-2 kun</p>

                    <hr />
                    <div className='bardright_div'>
                        <p>Bepul yetkazib berish</p>
                        <span>Butun O'zbekiston bo'ylab, 1-2 kun</span>
                        <button>Muddatli Tolovga olish</button>
                        <button>Karta orqali sotib olish</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
