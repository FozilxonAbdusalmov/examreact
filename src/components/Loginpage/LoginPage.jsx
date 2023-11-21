import React from 'react'
import './LoginPage.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
    MdClose,
    MdOutlineContactPhone,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

function LoginPage({ setOpenRegister }) {
    let user = JSON.parse(localStorage.getItem("user"));
    const validNumber = new RegExp("^[0-9].{8,}$");
    const [number, setNumber] = useState(user ? user.number : "");

    document.title = "Alif-register";

    document.body.setAttribute("style", "overflow:hidden");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validNumber.test(number)) {
            toast.error("Yaroqsiz ma'lumot kiritildi", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
        } else {
            let userData = {
                number: number,
            };
            localStorage.setItem("user", JSON.stringify(userData));
            toast.success(!user ? "Ro'yxatdan muvaffaqqiyatli o'tdingiz" : "O'zgarishlar saqlandi", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
                hideProgressBar: true,
            });
            setOpenRegister(false);
        }
    };

    function logoutHandler() {
        window.confirm("Rostdan ham akkauntdan chiqishni xohlaysizmi?") &&
            localStorage.removeItem("user");
        setOpenRegister(false);
    }

    function handleClose() {
        setOpenRegister(false);
        document.body.setAttribute("style", "overflow:scroll");

    }
    return (
        <div className="RegisterForm">
            <div className="form_container">
                {user && (
                    <BiLogOut
                        title="Chiqish"
                        className="form_logout"
                        onClick={logoutHandler}
                    />
                )}
                <MdClose
                    className="form_close"
                    onClick={handleClose}
                />
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>{!user ? "Ro'yxatdan o'tish'" : 'Malumotlaringiz'}</h2>

                    <div className="input_box">
                        <input
                            required
                            type="text"
                            title="Kamida 9ta raqam kiriting"
                            placeholder="Telefon raqamingiz"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <MdOutlineContactPhone className="iconic" />
                    </div>
                    <div>
                        <input className="registerButton" value={user ? "O'zgarishlarni saqlash" : "Ro'yxatdan o'tish"} type="submit" />
                    </div>
                    <div className="login_signup">
                        Allaqachon ro'yxatdan o'tganmisiz?
                        <Link to={"/login"}>Kirish</Link>
                    </div>
                </form>
            </div>
            <div onClick={() => setOpenRegister(false)} className="overlay"></div>
        </div>
    )
}

export default LoginPage
