import React from 'react'
import './Header.css'
import { HiMiniBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { OPEN_CATALOG } from '../../components/redux/katalog'
import { useDispatch, useSelector } from "react-redux";
import { FiX, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { katalogData } from '../../static/headerData'
import data from '../../static/alifalldata';
import { useState } from 'react';
import LoginPage from '../Loginpage/LoginPage';


function Header() {

    const [openRegister, setOpenRegister] = useState(false);
    let ism = JSON.parse(localStorage.getItem("user"))?.name;
    const dispatch = useDispatch();
    const catalogState = useSelector((s) => s.katalog);
    const [searchResult, setSearchResult] = useState(null)



    function search(value) {
        if (!value) {
            return setSearchResult(null)
        }
        let result = data.filter(i => i.title.toLowerCase().includes(value.toLowerCase()))
        setSearchResult(result)
    }

    return (
        <>

            <header>

                <Link to={"/"}>
                    <img src="https://alifshop.uz/_ipx/w_112/images/alifshop-logo.svg" alt="" />
                </Link>



                <div className='header_katalog' onClick={() => dispatch(OPEN_CATALOG())}>

                    {catalogState ? <FiX /> : <HiMiniBars3 />}

                    <p className='tovar_catalog'>Tovarlar katalogi</p>
                </div>
                {

                    catalogState && (
                        <div className="catalog_wrapper">
                            {katalogData.map((katalogItem, index) => (


                                <div key={index} className="catalog_wrapper_item">

                                    {katalogItem.title.icon}
                                    <p>{katalogItem.title.titleName}</p>
                                    <FiChevronRight />


                                    <div className="catalog_wrapper_item_section">
                                        <h2>{katalogItem.title.titleName}</h2>

                                        <div className="catalog_wrapper_item_section_links">
                                            {katalogItem.collection.map((item, index) => (
                                                <div key={index}>
                                                    <h4>{item.collectionItemName}</h4>
                                                    <ul>
                                                        {item.collectionItemLinks.map((link_item, index) => (
                                                            <li key={index}>
                                                                <Link to={"/"}>{link_item}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }




                <div className='header_searchbar'>
                    <input type="search" placeholder='Tovarlarni izlash' onChange={(e) => search(e.target.value)} />
                    <button><FiSearch /></button>

                    <div className="searchResult" style={{ display: searchResult?.length ? "flex" : "none" }} >
                        {
                            searchResult?.map((item, index) =>
                                <Link className='header_search_link' to={`singlePage`} key={index} >{item.title}</Link>
                            )
                        }
                    </div>
                </div>

                <Link to={"/card"} className='header_basket'>
                    <SlBasket />
                    <p>Savat</p>

                </Link>


                <Link className='header_heart' to={"/heart"}>
                    <FaRegHeart />
                    <p>Saralanganlar</p>

                </Link>

                {openRegister && <LoginPage setOpenRegister={setOpenRegister} />}
                <button className='header_user' onClick={() => setOpenRegister(!openRegister)} > <span className="header-user-text">{ism ? ism : "Kirish"}</span></button>





            </header>
            
        </>

    )
}

export default Header
