import React, {useEffect} from 'react'
import Preloader from "../../utils/Preloader/Preloader";
import s from './ConfirmMail.module.scss'
import {useLocation} from "react-router-dom";
import {userAPI} from "../../../api/userAPI";

const ConfirmMail = () => {
    const paramsForConfirmRequest = useLocation().search
    //todo remove debuggers after fix confirmMail
    debugger
    useEffect(() => {
        userAPI.verifyMail(paramsForConfirmRequest).then(res => console.log(res))
    }, [])
    return (
        <section className={s.confirmMailPage}>
            <Preloader/>
        </section>
    )
}

export default ConfirmMail