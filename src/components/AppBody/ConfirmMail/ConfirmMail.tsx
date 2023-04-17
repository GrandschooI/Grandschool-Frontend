import React, { useEffect } from 'react'

import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { verifyEmail } from '../../../Redux/reducers/userSlice'
import { getFontSize, getOptionsState, getThemeStyle } from '../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../utils/Hooks/useAppSelector'
import { CustomLink } from '../../common/CustomLink/CustomLink'
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
        s[themeStyle ? themeStyle : ''],
        s[isOptionsOpen ? 'blindOptionsOpen' : '']
      )}
    >
      <div className={cn(s.confirmMailPageWrapper, s[themeStyle ? themeStyle : ''])}>
        <Popup>
          <div className={`${s.contentContainer} ${s[fontSize]}`}>
            <p className={s.text}>
              Congratulations, you have successfully passed verification. Good Luck in your studies
            </p>
            <CustomLink to="/" variant="default" className={s.textLinkCenter}>
              На главную
            </CustomLink>
          </div>
        </Popup>
      </div>
    </section>
  )
}

export default ConfirmMail
