import React, {useEffect} from 'react'
import Preloader from "../../utils/Preloader/Preloader";
import s from './ConfirmMail.module.scss'

const ConfirmMail = () => {
    useEffect(() => {
        'https://staging.grandschool.pl/email-verification?url=https://api.staging.grandschool.pl/api/verification?expires=1674078248&id=15&signature=5441b3e813de94c9ea7d29cff8fce83c1321b2a9401078e212928537a519fdc9'
    })
    return (
        <section className={s.confirmMailPage}>
            <Preloader/>
        </section>
    )
}

export default ConfirmMail