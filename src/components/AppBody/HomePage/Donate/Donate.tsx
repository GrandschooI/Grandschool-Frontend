import React from 'react'
import cn from 'classnames'
import s from './Donate.module.scss'
import {Nullable} from '../../../../Redux/redux-store'

type PropsType = {
    themeStyle: Nullable<string>
    fontSize: Nullable<string>
    images: boolean
}

const Donate: React.FC<PropsType> = ({images, themeStyle, fontSize}) => {

    const withoutImgClassName = images ? '' : 'withoutImg'
    return (
        <section className={cn(s.donateSection, s[themeStyle ? themeStyle : ''], s[withoutImgClassName], s[fontSize ? fontSize : ''])}>
            <div className={cn('container')}>
                <div className={s.contentWrap}>
                    <h2>Тo wszystko może się stać <strong>z twoją pomocą</strong></h2>
                    <p>Wnieś swój wkład w rozwój swoich bliskich</p>
                    <a href="https://zrzutka.pl/znu2ed" rel="noreferrer">Wesprzyj nas</a>
                </div>
            </div>
        </section>
    )
}

export default Donate
