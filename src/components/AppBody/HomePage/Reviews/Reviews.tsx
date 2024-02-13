import React from 'react'

import cn from 'classnames'
import Image from 'react-image-webp'

import eugene from '../../../../assets/images/eugene.jpg'
import eugenesign from '../../../../assets/images/eugenesign.png'
import eugeneBlindsign from '../../../../assets/images/eugenesignblind.png'
import eugeneWebp from '../../../../assets/images/webp/eugene.webp'
import eugenesignWebp from '../../../../assets/images/webp/eugenesign.webp'
import eugeneBlindsignWebp from '../../../../assets/images/webp/eugenesignblind.webp'
import {
  getFontSize,
  getImgAvailability,
  getStyleMode,
  getThemeStyle,
} from '../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../utils/Hooks/useAppSelector'
import LogoPicture from '../../../SVGConponents/Header/LogoPicture'
import LogoPictureBlueTheme from '../../../SVGConponents/Header/LogoPictureBlueTheme'
import LogoPictureWhiteTheme from '../../../SVGConponents/Header/LogoPictureWhiteTheme'
import LogoPictureYellowTheme from '../../../SVGConponents/Header/LogoPictureYellowTheme'
import LogoWords from '../../../SVGConponents/Header/LogoWords'
import LogoWordsBlueTheme from '../../../SVGConponents/Header/LogoWordsBlueTheme'
import LogoWordsWhiteTheme from '../../../SVGConponents/Header/LogoWordsWhiteTheme'
import LogoWordsYellowTheme from '../../../SVGConponents/Header/LogoWordsYellowTheme'
import QuotesIcon from '../../../SVGConponents/Reviews/QuotesIcon'

import s from './Reviews.module.scss'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
// eslint-disable-next-line import/order
import { activeFontSize, activeThemeStyle } from '../../../../utils/scaffolding'

const Reviews = () => {
  const images = useAppSelector(getImgAvailability)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  const blindMode = useAppSelector(getStyleMode)

  const withoutImgClass = !images ? 'withoutImg' : ''

  return (
    <section
      className={cn(
        s.reviewsBlock,
        s[activeThemeStyle(themeStyle)],
        s[withoutImgClass],
        s[activeFontSize(fontSize)]
      )}
    >
      <div className={'container'}>
        <h2 className={s.reviewsMainTitle}>Słowo od twórca</h2>
        <div className={s.reviewsLogo}>
          {!blindMode && <LogoPicture />}
          {themeStyle === 'yellowTheme' && <LogoPictureYellowTheme />}
          {themeStyle === 'whiteTheme' && <LogoPictureWhiteTheme />}
          {themeStyle === 'blueTheme' && <LogoPictureBlueTheme />}
          {!blindMode && <LogoWords />}
          {themeStyle === 'yellowTheme' && <LogoWordsYellowTheme />}
          {themeStyle === 'whiteTheme' && <LogoWordsWhiteTheme />}
          {themeStyle === 'blueTheme' && <LogoWordsBlueTheme />}
        </div>
        <div className={s.citesWrap}>
          <div className={s.sliderItem}>
            <QuotesIcon />
            <div>
              <blockquote>
                “Powstanie kursu podyktowane zostało nowymi wyzwaniami stawianymi przez
                społeczeństwo - osobom starszym, którym brak podstawowej wiedzy z zakresu
                informatyki trudno o swobodną asymilacje ze społeczeństwem, co prowadzi do lokalnej
                izolacji oraz bezradności. GrandSchool ma na celu dodanie Twoim bliskim pewności
                siebie oraz pomoc w poszerzaniu horyzontów.”
              </blockquote>
              <div className={s.authorData}>
                <div className={s.authorBlock}>
                  {themeStyle === 'yellowTheme' ? (
                    <Image
                      className={s.sign}
                      src={eugeneBlindsign}
                      webp={eugeneBlindsignWebp}
                      alt="Eugene Kuhot Signature"
                    />
                  ) : (
                    <Image
                      className={s.sign}
                      src={eugenesign}
                      webp={eugenesignWebp}
                      alt="Eugene Kuhot Signature"
                    />
                  )}
                  <div className={s.authorDataWrap}>
                    {images && (
                      <div className={s.authorWrap}>
                        <Image src={eugene} webp={eugeneWebp} alt="Eugene Kuhot" />
                      </div>
                    )}
                    <cite>
                      <span>Eugene Kuhot</span>
                      <small>Founder, Developer</small>
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
