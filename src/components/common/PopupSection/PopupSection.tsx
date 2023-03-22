import React, {PropsWithChildren, ReactNode} from 'react';
import {useAppSelector} from '../../../utils/Hooks/useAppSelector';
import {getFontSize, getThemeStyle} from '../../../Redux/selectors/styleSelector';
import cn from 'classnames';
import s from './PopupSection.module.scss';
import Popup from './Popup/Popup';

export const PopupSection :React.FC<Partial<{title : string , className : React.CSSProperties | string , children : PropsWithChildren<ReactNode>}>> = ({title , className = '' , children}) => {
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)

    return (
        <section className={cn(`${s.popupSectionWrapper} ${className}`, 'container', themeStyle ? s[themeStyle] : '' , s[fontSize])}>
            <h2 className={s.title}>{title}</h2>
            <Popup className={s.center}>
                {children}
            </Popup>
        </section>
    );
};