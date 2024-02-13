import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

import { verifyEmail } from '../../../Redux/reducers/userSlice'
import { getFontSize, getOptionsState, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../../utils/scaffolding'
import Popup from '../../common/PopupSection/Popup/Popup'

import s from './ConfirmMail.module.scss'

const ConfirmMail = () => {
  const dispatch = useDispatch()
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const isOptionsOpen = useAppSelector(getOptionsState)

  const urlForConfirmRequest = useLocation().search.replace('?url=', '')

  useEffect(() => {
    dispatch(verifyEmail({ url: urlForConfirmRequest }))
  }, [])

  return (
    <section
      className={cn(
        s.confirmMailPage,
        s[activeThemeStyle(themeStyle)],
        s[isOptionsOpen ? 'blindOptionsOpen' : '']
      )}
    >
      <div className={cn(s.confirmMailPageWrapper, s[activeThemeStyle(themeStyle)])}>
        <Popup>
          <div className={cn(s.contentContainer, s[fontSize])}>
            <p className={s.text}>
              Congratulations, you have successfully passed verification. Good Luck in your studies
            </p>
            <NavLink to="/" className="submitBtn">
              На главную
            </NavLink>
          </div>
        </Popup>
      </div>
    </section>
  )
}

export default ConfirmMail
