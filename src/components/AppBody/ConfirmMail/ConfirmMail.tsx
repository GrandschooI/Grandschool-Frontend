import React, {useEffect, useState} from 'react'
import Preloader from "../../utils/Preloader/Preloader";
import s from './ConfirmMail.module.scss'
import {Redirect, useLocation} from "react-router-dom";
import {userAPI} from "../../../api/userAPI";
import {HttpStatusCode} from "../../../api/api";

const ConfirmMail = () => {
    const urlForConfirmRequest = useLocation().search.replace("?url=", "");
    const [isMailConfirmed, setMailConfirmStatus] = useState(false)
    useEffect(() => {
        userAPI.verifyMail(urlForConfirmRequest).then(res => {
            if (res.status === HttpStatusCode.OK) setMailConfirmStatus(true)
        })
    }, [])

    if (isMailConfirmed) return <Redirect to={'/profile'}/>
    return (
        <section className={s.confirmMailPage}>
            <Preloader/>
        </section>
    )
}

export default ConfirmMail