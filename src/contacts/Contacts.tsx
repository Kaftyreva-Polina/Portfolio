import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} + ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input className={style.inputForm} type="text"/>
                    <input className={style.inputForm} type="text"/>
                    <textarea className={style.inputForm}></textarea>
                </form>
                <button className={style.buttonContact}>Отправить</button>
            </div>
        </div>
    )
}