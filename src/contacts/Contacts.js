import React from "react";
import style from './RemoteWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.remoteWork}`}>
                <h2>Удалёнка</h2>
                <button className={style.button}>Нанять меня</button>
            </div>
        </div>
    )
}