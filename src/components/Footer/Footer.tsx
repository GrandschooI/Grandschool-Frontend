import React from 'react'

import cn from 'classnames'

import '../../style.scss'
import {
  getFontSize,
  getImgAvailability,
  getStyleMode,
  getThemeStyle,
} from '../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../utils/Hooks/useAppSelector'
import { activeThemeStyle } from '../../utils/scaffolding'
import FacebookIcon from '../SVGConponents/Footer/FacebookIcon'
import FooterLogoWords from '../SVGConponents/Footer/FooterLogoWords'
import FooterLogoWordsBlueTheme from '../SVGConponents/Footer/FooterLogoWordsBlueTheme'
import FooterLogoWordsWhiteTheme from '../SVGConponents/Footer/FooterLogoWordsWhiteTheme'
import FooterLogoWordsYellowTheme from '../SVGConponents/Footer/FooterLogoWordsYellowTheme'
import FooterMailIcon from '../SVGConponents/Footer/FooterMailIcon'
import InstagramIcon from '../SVGConponents/Footer/InstagramIcon'
import MapPoint from '../SVGConponents/Footer/MapPoint'
import YoutubeIcon from '../SVGConponents/Footer/YoutubeIcon'
import LogoPicture from '../SVGConponents/Header/LogoPicture'
import LogoPictureBlueTheme from '../SVGConponents/Header/LogoPictureBlueTheme'
import LogoPictureWhiteTheme from '../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../SVGConponents/Header/LogoPictureYellowTheme'

import s from './Footer.module.scss'

const Footer = () => {
  const images = useAppSelector(getImgAvailability)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const blindMode = useAppSelector(getStyleMode)

  const withoutImgClassName = images ? '' : 'withoutImg'

  return (
    <div
      data-aos="fade"
      data-aos-once="true"
      className={cn(s.footer, s[activeThemeStyle(themeStyle)], s[fontSize], s[withoutImgClassName])}
    >
      <div className={s.footerTop}>
        <div className={cn(s.footerTopWrap, 'container')}>
          <div className={s.topWrapColumn}>
            <div className={s.logoWrap}>
              {!blindMode && <LogoPicture />}
              {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme />}
              {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme />}
              {themeStyle === 'blueTheme' && <LogoPictureBlueTheme />}
              {!blindMode && <FooterLogoWords />}
              {themeStyle === 'yellowTheme' && <FooterLogoWordsYellowTheme />}
              {themeStyle === 'whiteTheme' && <FooterLogoWordsWhiteTheme />}
              {themeStyle === 'blueTheme' && <FooterLogoWordsBlueTheme />}
            </div>
            <p className={s.footerSlogan}>
              Brak profesjonalnej pomocy przekłada się na słabe wyniki w nauce. Indywidualne
              podejście do każdego ucznia, przejrzysta forma prezentacji materiału i odpowiednia
              motywacja - to trzy podstawy efektywnej nauki
            </p>
          </div>
          <div className={s.topWrapColumn}>
            <div className={s.contacts}>
              <h3 className={s.footerTitle}>Contact</h3>
              <div className={s.contactWrap}>
                {images && <MapPoint />}
                <address>Kraków, Polska</address>
              </div>
              <p className={s.contactWrap}>
                {images && <FooterMailIcon />}
                <a className={s.mail} href="mailto:contact@grandschool.pl" rel="noreferrer">
                  contact@grandschool.pl
                </a>
              </p>
            </div>
          </div>
          <div className={s.topWrapColumn}>
            <div className={s.footerPosition}>
              <h3 className={cn(s.footerTitle, s.mobileTitle)}>Follow Us</h3>
              <ul className={s.socialList}>
                <li className={s.socialItem}>
                  <a
                    href="https://www.facebook.com/grandschool.poland"
                    target="_blank"
                    rel="noreferrer"
                    className={s.socialLink}
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li className={s.socialItem}>
                  <a
                    href="https://www.youtube.com/channel/UC9EqiOq_ieypXdoXq8FLRkg"
                    target="_blank"
                    rel="noreferrer"
                    className={s.socialLink}
                  >
                    <YoutubeIcon />
                  </a>
                </li>
                <li className={s.socialItem}>
                  <a
                    href="https://www.instagram.com/grandschool.poland"
                    target="_blank"
                    rel="noreferrer"
                    className={s.socialLink}
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className={cn(s.footerBottom)}>
        <p className="container">© Copyright 2021 GrandSchool Sp. z o.o.</p>
      </span>
    </div>
  )
}

export default Footer
