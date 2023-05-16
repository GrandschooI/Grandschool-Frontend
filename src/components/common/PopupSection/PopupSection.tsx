import React, { PropsWithChildren, ReactNode } from 'react'

import cn from 'classnames'

import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'

import Popup from './Popup/Popup'
import s from './PopupSection.module.scss'

export const PopupSection: React.FC<
  Partial<{
    title: string
    className: React.CSSProperties | string
    children: PropsWithChildren<ReactNode>
  }>
> = ({ title, className = '', children }) => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <section
      className={cn(
        `${s.popupSectionWrapper} ${className}`,
        'container',
        activeThemeStyle(themeStyle),
        s[fontSize]
      )}
    >
      <h2 className={s.title}>{title}</h2>
      <Popup className={s.center}>{children}</Popup>
    </section>
  )
}
