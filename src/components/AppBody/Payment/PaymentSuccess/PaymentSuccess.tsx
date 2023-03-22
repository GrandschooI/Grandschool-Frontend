import React from 'react';
import s from './PaymentSuccess.module.scss'
import {useAppSelector} from '../../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from '../../../../Redux/selectors/styleSelector';
import cn from 'classnames';
import {CustomLink} from '../../../common/CustomLink/CustomLink';


export const PaymentSuccess: React.FC<Partial<{ className: React.CSSProperties | string }>> = ({className}) => {
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)

    return (
        <div className={cn(`${s.paymentSuccessContent} ${className}`, themeStyle ? s[themeStyle] : '' ,  s[fontSize])}>
        <p className={s.successMessage}>Оплата прошла успешно!</p>
        <p className={s.successCheckEmail}>Проверьте письмо на вашей почте и следуйте инструкциям для
            активации курса!</p>
        <CustomLink to="/"  variant='default' className={s.media}>
            На главную
        </CustomLink>
    </div>
    )
}

