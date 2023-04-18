import React from 'react'
import Image from "next/image";
import style from "./index.module.css";
import profile from "../../public/assets/Profile.png";


function Client() {
    const list = ['Dashboard', 'Feeds', 'Companies', 'New User', 'Calender', 'Settings', 'FAQ', 'LogOut'];
    const routes = [''];
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <div className={style.inner_sidebar}>
                    <ul>
                        <li>
                            <div className={style.list_tab}>
                                <span className={style.list_tab}>
                                    <div className={style.logo}>
                                        <Image src={profile} className={style.image} />
                                    </div>
                                </span>
                            </div>
                        </li>
                        {list.map((item) => (
                            <li>
                                <a href="#">
                                    <div className={style.list_tab}>
                                        <span className={style.list}>{item}</span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.content}>
            components goes here
            </div>
        </div>
    )
}

export default Client