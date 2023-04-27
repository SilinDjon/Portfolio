import React from "react";
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'js'}
                           description={'js Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla rutrum accumsan. Sed sollicitudin nulla sem, in commodo sem ullamcorper tristique. Sed volutpat faucibus est, nec scelerisque tellus tristique sed. Sed rhoncus ligula eget est condimentum gravida.'}/>
                    <Skill title={'css'} description={'css Phasellus dolor mauris, tempor lobortis nisl eget, venenatis rhoncus neque. In aliquet quis est vel interdum. Duis quam eros, lacinia non sem ac, ornare laoreet sapien. Curabitur ac egestas augue. Nam congue sit amet erat non ornare. Nulla pulvinar, felis commodo posuere pellentesque, magna ligula scelerisque nisi, sed porttitor lacus metus ut felis. Etiam mollis orci et faucibus dignissim.'}/>
                    <Skill title={'html'} description={'html Morbi id orci mi. Nam consectetur ultricies orci, nec volutpat dui pretium vitae. Sed vitae leo ut nulla commodo placerat nec pharetra turpis. Cras dictum suscipit faucibus. Morbi id tortor turpis. Duis auctor ipsum lectus. Curabitur in feugiat nisi.'}/>
                </div>
            </div>
        </div>
    )
}