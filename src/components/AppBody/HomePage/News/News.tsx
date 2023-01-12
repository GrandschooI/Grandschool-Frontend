import React from 'react'
import s from './News.module.scss'
import cn from 'classnames'
import Image from 'react-image-webp'
import patience from '../../../../assets/images/news1.png'
import patienceWebp from '../../../../assets/images/webp/news1.webp'
import time from '../../../../assets/images/news2.png'
import timeWebp from '../../../../assets/images/webp/news2.webp'
import teach from '../../../../assets/images/news3.png'
import teachWebp from '../../../../assets/images/webp/news3.webp'
import {useAppSelector} from '../../../../utils/Hooks/useAppSelector';
import {getFontSize, getImgAvailability, getThemeStyle} from '../../../../Redux/selectors/styleSelector';


const News = () => {

    const images = useAppSelector(getImgAvailability)
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)

    return (
        <section className={cn(s.newsWrap, s[fontSize ? fontSize : ''], s[themeStyle ? themeStyle : ''])}>
            <div className={'container'}>
                <h2 className={s.featureMainTitle}>Kursy obsługi komputera <br/> <strong>dla osób starszych</strong></h2>
                <p className={s.featureDesc}>Chcesz zapoznać swoich bliskich ze światem technologii internetowych? <br/>
                    Zależy Ci, aby dostosować ich do szybko zmieniającej się rzeczywistości? <br/>
                    Sympatyczni i wysoko wykwalifikowani specjaliści GrandSchool nauczą Twoją rodzinę wszystkich <br/>
                    niezbędnych umiejętności. Nasz kurs będzie idealny dla Twoich bliskich, jeśli brakuje Ci:
                </p>
                <ul className={cn(s.newsList)}>
                    <li className={s.newsItem}>
                        <div className={s.newsPhotoWrap}>
                            {images &&
                                <Image
                                    className={s.newsPhoto}
                                    src={time}
                                    webp={timeWebp}
                                    alt='Brak czasu'
                                />}
                        </div>
                        <div className={s.newsDescBlock}>
                            <h3 className={s.newsItemTitle}>Czasu</h3>
                            <p className={s.newsDescription}>
                                Gdy Ty rozwiązujesz codzienne problemy i nie masz czasu, aby uczyć swoich bliskich obsługi
                                komputera i internetu, my zrobimy to za Ciebie!
                            </p>
                        </div>
                    </li>
                    <li className={s.newsItem}>
                        <div className={s.newsPhotoWrap}>
                            {images &&
                                <Image
                                    className={s.newsPhoto}
                                    src={teach}
                                    webp={teachWebp}
                                    alt='Zły nauczyciel'
                                />}
                        </div>
                        <div className={s.newsDescBlock}>
                            <h3 className={s.newsItemTitle}>Umiejętności dydaktycznych</h3>
                            <p className={s.newsDescription}>
                                Znakomity programista, to nie koniecznie dobry mentor. Niech każdy robi swoje - my bierzemy
                                na siebie trud uczenia, a Ty cieszysz się z postępów swoich najbliższych.
                            </p>
                        </div>
                    </li>
                    <li className={s.newsItem}>
                        <div className={s.newsPhotoWrap}>
                            {images &&
                                <Image
                                    className={s.newsPhoto}
                                    src={patience}
                                    webp={patienceWebp}
                                    alt='Niecierpliwy człowiek'
                                />}
                        </div>
                        <div className={s.newsDescBlock}>
                            <h3 className={s.newsItemTitle}>Cierpliwości</h3>
                            <p className={s.newsDescription}>
                                Wyjaśnienie podstaw obsługi komputera osobom starszym wymaga dużo energii i zaangażowania. W
                                GrandSchool wiedzę przekazujemy łatwo i bez ciężaru emocjonalnego
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default News
