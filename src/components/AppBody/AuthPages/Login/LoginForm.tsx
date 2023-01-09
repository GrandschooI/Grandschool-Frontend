import React, {useEffect, useState} from 'react'
import {Form, Formik} from 'formik'
import {CSSTransition} from 'react-transition-group'
import {TextField} from '../../../common/Form/FormControls/FormControls'
import FacebookLoginIcon from '../../../SVGConponents/Forms/FacebookLoginIcon'
import s from './Login.module.scss'
import {loginDataType} from '../AuthPage'
import {Nullable} from '../../../../Redux/redux-store'
import cn from 'classnames'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Popup from '../../../common/Popup/Popup';

const loginFormFormValidation = (values: loginFormValidationType) => {
    const errors: any = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const forgotPasswordFormValidation = (values: forgotPasswordFormValidationType) => {
    const errors: any = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
}

const LoginForm: React.FC<propsType> = ({
                                            onSubmit,
                                            themeStyle,
                                            fontSize,
                                            blindMode,
                                            images,
                                            onGoogleButtonClick,
                                            onFacebookButtonClick,
                                            onForgotPasswordFormSubmit,
                                            startGoogleAPI,
                                            GOOGLE_CLIENT_ID,
                                            FACEBOOK_CLIENT_ID
                                        }) => {
    useEffect(() => {
        startGoogleAPI()
    })
    const [isForgotPassPopup, setForgotPassPopupStatus] = useState(false)
    const [isForgotPassResultPopup, setIsForgotPassResultPopupStatus] = useState(false)
    const onForgotBtnClick = (e: any) => {
        e.preventDefault()
        setForgotPassPopupStatus(!isForgotPassPopup)
    }
    const sendResetPasswordFlow = (email: any) => {
        onForgotPasswordFormSubmit(email)
        setForgotPassPopupStatus(!isForgotPassPopup)
        setIsForgotPassResultPopupStatus(!isForgotPassResultPopup)
    }
    return (
        <section>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={loginFormFormValidation}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form
                        className={cn(themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''],
                            [fontSize ? fontSize : ''])}>
                        <label className={'formLabel'}>
                            <span>Login</span>
                            {TextField({
                                type: 'email',
                                name: 'email',
                                placeholder: 'Wpisz adres e-mail',
                                className: `textField`,
                                errorClassname: `errorTextField`
                            })}
                        </label>
                        <label className={'formLabel'}>
                            <span>Hasło</span>
                            {TextField({
                                type: 'password',
                                name: 'password',
                                placeholder: 'Wpisz hasło',
                                className: `textField`,
                                errorClassname: `errorTextField`,
                                changeToText: true
                            })}
                        </label>
                        {
                            !isSubmitting ? <button type="submit" className='submitBtn'>Wyślij</button>
                                : <span>Pending</span>
                        }
                        <button onClick={onForgotBtnClick} className={s.forgotPassword}>Forgot password?</button>
                        <p className={s.signWithTitle}>Or sign in with...</p>
                        <div className={s.anotherTypeLoginBtnWrap}>
                            <GoogleLogin
                                className="anotherTypeLogin"
                                clientId={GOOGLE_CLIENT_ID}
                                buttonText={'Google'}
                                onSuccess={onGoogleButtonClick}
                            />
                            <FacebookLogin
                                appId={FACEBOOK_CLIENT_ID}
                                callback={onFacebookButtonClick}
                                icon={<FacebookLoginIcon/>}
                                textButton={'Facebook'}
                                cssClass="anotherTypeLogin"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
            <CSSTransition
                in={isForgotPassPopup}
                timeout={300}
                classNames={{
                    enter: s.optionEnter,
                    enterActive: s.optionEnterActive,
                    exitActive: s.optionExitActive
                }}
                unmountOnExit
            >
                <section className='overlay'>
                    <Popup>
                        <Formik initialValues={{email: ''}}
                                validate={forgotPasswordFormValidation}
                                onSubmit={sendResetPasswordFlow}>
                            <Form>
                                <label className={'formLabel'}>
                                    <span>Укажи адрес электронной почты</span>
                                    {TextField({
                                        type: 'email',
                                        name: 'email',
                                        placeholder: 'Wpisz adres e-mail',
                                        className: `textField`,
                                        errorClassname: `errorTextField`
                                    })}
                                </label>
                                <div className={s.popupBtnWrapper}>
                                    <button type="submit" className='submitBtn'>Wyślij</button>
                                    <button onClick={() => setForgotPassPopupStatus(!isForgotPassPopup)}
                                            className={'inverseBtn'}>Zamknij
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </Popup>
                </section>
            </CSSTransition>

            <CSSTransition
                in={isForgotPassResultPopup}
                timeout={300}
                classNames={{
                    enter: s.optionEnter,
                    enterActive: s.optionEnterActive,
                    exitActive: s.optionExitActive
                }}
                unmountOnExit>
                <section className={cn('overlay', s.resultForgotPassPopup)}>
                    <Popup>
                        <p className={s.desc}>
                            На указанный тобой адрес электронной почты было отправлено письмо с дальнейшими инструкциями
                        </p>
                        <button className='submitBtn'
                                onClick={() => setIsForgotPassResultPopupStatus(!isForgotPassResultPopup)}>Close
                        </button>
                    </Popup>
                </section>
            </CSSTransition>

        </section>
    )
}

export default LoginForm


type propsType = {
    onSubmit: (formData: loginDataType, onSubmitProps: any) => void
    themeStyle: Nullable<string>
    fontSize: Nullable<string>
    blindMode: boolean
    images: boolean
    onGoogleButtonClick: any
    onFacebookButtonClick: any
    onForgotPasswordFormSubmit: any
    startGoogleAPI: any
    GOOGLE_CLIENT_ID: string
    FACEBOOK_CLIENT_ID: string
}
type loginFormValidationType = {
    email: string
    password: string
}
type forgotPasswordFormValidationType = {
    email: string
}