import React from "react";
import style from "./Skills.module.css";
import styleContainer from "../../src/common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"description1s sssss sssss ssssss sss jdjsdwj kcfwknfws"}/>
                    <Skill title={"CSS"} description={"description2"}/>
                    <Skill title={"HTML"} description={"description3"}/>
                </div>
            </div>
        </div>
    )
}

//прмапить скиллы