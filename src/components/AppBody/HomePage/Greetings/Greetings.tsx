import React from 'react'
import ReactPlayer from 'react-player/youtube'
import s from './Greetings.module.scss'
import cn from 'classnames'
import {Nullable} from '../../../../Redux/redux-store'

type PropsType = {
    blindMode: boolean
    themeStyle: Nullable<string>
    isOptionsOpen: boolean
}

const Greetings: React.FC<PropsType> = ({blindMode, themeStyle, isOptionsOpen}) => {
    const isBlindActive = () => blindMode && isOptionsOpen ? s.blindVideoBlock : ''
    return (
        <section className={cn(s.videoBlock, s[themeStyle ? themeStyle : ''], isBlindActive())}>
            <ReactPlayer url='https://www.youtube.com/watch?v=S_zMbLa_nAE'
                         controls={true}
                         loop={true}
                         width={'861px'}
                         height={'485px'}
                         className={s.video}/>
        </section>
    )
}

export default Greetings
