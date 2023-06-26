import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={"Social Network"}
                             description={"Project description1 (dop text pour test span (again)."}/>
                    <Project title={"Todolist"} description={"Project description2"}/>
                </div>
            </div>
        </div>
    )
}