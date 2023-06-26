import React from "react";
import style from "./Project.module.css"

export const Project = (props: { title: string; description: string }) => {
    return (
        <div className={style.project}>
            <div className={style.projectImgContainer}>
                <a href="" className={style.projectButton}>Посмотреть</a>
            </div>
            <div className={style.projectDescriptionContainer}>
                <div className={style.projectItemDescription}>{props.title}</div>
                <span className={style.projectItemDescription}>{props.description}</span>
            </div>
        </div>
    )
}