import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} + ${style.footerContainer}`}>
                <h2 className={style.title}>Kaftyreva Polina</h2>
                <div className={style.strangeContainer}>
                    <div className={style.miniContainerFooter}></div>
                    <div className={style.miniContainerFooter}></div>
                    <div className={style.miniContainerFooter}></div>
                    <div className={style.miniContainerFooter}></div>
                </div>
                <span className={style.spanFooter}>Все права защищены</span>
            </div>
        </div>)
}