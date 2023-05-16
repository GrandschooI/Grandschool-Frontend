import React from 'react'

import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { getFontSize, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'

import s from './CustomLink.module.scss'

type Variant = 'invert' | 'default'

type PropsType = {
  children: React.ReactNode
  to: string
  className: React.CSSProperties | string
  variant: Variant
  onClick: () => void
}

export const CustomLink: React.FC<Partial<PropsType>> = ({
  children,
  to = '/',
  className = '',
  variant = 'default',
  onClick,
  ...restProps
}) => {
  const fontSize = useAppSelector(getFontSize)
  const themeStyle = useAppSelector(getThemeStyle)

  const finalClassName = `${s.customLinkDef} ${
    variant === 'invert' ? s.invert : s.default
  } ${className}`

  return (
    <NavLink
      to={to}
      {...restProps}
      className={cn(`${finalClassName}`, activeThemeStyle(themeStyle), s[fontSize])}
    >
      {children}
    </NavLink>
  )
}
