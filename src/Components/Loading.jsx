import React from 'react'
import style from './Loading.module.css'

export const Loading = () => {
    return (
        <div className={style['body-spinner']}>
            <div class={style['lds-ring']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>  
        </div>
    )
}
