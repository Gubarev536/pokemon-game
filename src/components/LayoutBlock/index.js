import React from 'react';
import s from './style.module.css';

const LayoutBlock = ({ title, urlBg = null, colorBg = false, children }) => {
    // console.log('####: props', props);

    const bg = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg,
    }
    return (
        <section className={s.root} style={bg}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={[s.desc, s.full].join(' ')} >
                        {children}
                    </div>
                </article>
            </div>
        </section >
    )
}

export default LayoutBlock;