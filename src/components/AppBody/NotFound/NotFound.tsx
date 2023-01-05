import React from 'react'
import s from './NotFoundPage.module.scss'
import notFoundNumber from '../../../assets/images/404.png'
import {NavLink, useHistory} from "react-router-dom"
import cn from "classnames";
import {mapStatePropsType} from "./NotFoundContainer";

const NotFound: React.FC<mapStatePropsType> = ({themeStyle, fontSize}) => {

    let history = useHistory();

    return (
        <section className={cn(s.notFoundWrapper, s[themeStyle ? themeStyle : ''], themeStyle ? themeStyle : '',
            s[fontSize ? fontSize : ''])}>
            <div className={cn(s.contentWrap, 'container')}>
                <span className={s.notFoundNumber}>
            404
            <img src={notFoundNumber} alt="404"/>
        </span>

                <h1>Страница не найдена</h1>
                <p>Неправильно набран адрес или такой страницы не существует</p>
                <div className={s.buttonWrap}>
                    <button onClick={history.goBack} className={'inverseBtn'}>Назад</button>
                    <NavLink to='/' className={'submitBtn'}>На главную</NavLink>
                </div>
            </div>
        </section>
    )
}

export default NotFound