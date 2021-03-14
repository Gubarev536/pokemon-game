// import { ReactComponent } from '*.svg';
import React from 'react';
import s from './style.module.css';
import { ReactComponent as Logo1 } from '../../images/logo.svg';

const HeaderBlock = ({ title, descr }) => {
    return (
        <header className={s.root}>

            <div className={s.forest}></div>

            <div className={s.container}>
                <Logo1 />

                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
}

export default HeaderBlock;