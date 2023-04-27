import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contacts}`}>
                <h2>Контакты</h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea />
                </form>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    )
}