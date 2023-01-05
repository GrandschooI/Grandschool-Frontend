import React, {useEffect} from 'react'
import {Form, Formik} from 'formik'
import {ToastContainer, toast} from 'react-toastify'
import {Checkbox, TextField} from '../../../common/Form/FormControls/FormControls'
import FacebookLogin from 'react-facebook-login'
import s from './Registration.module.scss'
import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import {registrationFormDataType} from '../AuthPage'
import {Nullable} from '../../../../Redux/redux-store'
import cn from 'classnames'
import GoogleLogin from "react-google-login";
import FacebookLoginIcon from "../../../SVGConponents/Forms/FacebookLoginIcon";

const MIN_PASSWORD_LENGTH = 8
const MAX_PASSWORD_LENGTH = 8

const registrationFormValidation = (values: registrationFormValidationType) => {
    const errors: any = {}
    if (!values.email) {
        errors.email = 'Required'
        toast.error('Email address is required')
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
        toast.error('Invalid email address')
    } else if (!values.password) {
        errors.password = 'Password is required'
        toast.error('Password is required')
    } else if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required'
        toast.error('Confirm Password is required')
    } else if (values.password.length < MIN_PASSWORD_LENGTH) {
        errors.password = 'Password must be at least 8 characters'
        toast.error('Password must be at least 8 characters')
    } else if (values.password.length < MAX_PASSWORD_LENGTH) {
        errors.password = 'Password must not be greater than 50 characters.'
        toast.error('Password must not be greater than 50 characters.')
    } else if (values.password !== values.confirmPassword) {
        errors.password = 'Passwords must be identical'
        toast.error('Passwords must be identical')
    } else if (!values.terms) {
        errors.password = 'Accept terms is required'
        toast.error('Accept terms is required')
    }
    return errors
}

const RegistrationForm: React.FC<propsType> = ({
                                                   onSubmit, themeStyle, fontSize, GOOGLE_CLIENT_ID,
                                                   FACEBOOK_CLIENT_ID,
                                                   onGoogleButtonClick, onFacebookButtonClick, startGoogleAPI
                                               }) => {
    useEffect(() => {
        startGoogleAPI()
    })

    return (
        <div className={cn(themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''], s[fontSize ? fontSize : ''],
            [fontSize ? fontSize : ''])}>
            <p className={s.signWithTitle}>Sign up with...</p>
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

            <p className={s.orWord}>or</p>
            <Formik
                initialValues={{email: '', password: '', confirmPassword: '', terms: false}}
                validate={registrationFormValidation}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label className={cn('formLabel', s.formLabel)}>
                            <span>Enter PHONE NUMBER or E-MAIL</span>
                            {TextField({
                                type: 'email',
                                name: 'email',
                                placeholder: 'Wpisz adres e-mail',
                                className: `textField`,
                                errorClassname: `errorTextField`
                            })}
                        </label>
                        <label className={cn('formLabel', s.formLabel)}>
                            <span>PASSWORD</span>
                            {TextField({
                                type: 'password',
                                name: 'password',
                                placeholder: 'Wpisz hasło',
                                className: `textField`,
                                errorClassname: `errorTextField`,
                                changeToText: true
                            })}
                        </label>
                        <label className={cn('formLabel', s.formLabel)}>
                            <span>CONFIRM PASSWORD</span>
                            {TextField({
                                type: 'password',
                                name: 'confirmPassword',
                                placeholder: 'Potwierdź hasło',
                                className: `textField`,
                                errorClassname: `errorTextField`,
                                changeToText: true
                            })}
                        </label>
                        <label className={s.termsCheck}>
                            <Checkbox label={'I agree to'} name={'terms'} propValue={true} className={'checkboxLabel'}/>
                            <a href={'/'} className={s.termsLabel}>terms & conditions</a>
                        </label>
                        <button type="submit" disabled={isSubmitting} className={cn('whiteBtn','inverseBtn')}>Wyślij</button>
                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </div>
    )
}

export default RegistrationForm


type propsType = {
    onSubmit: (formData: registrationFormDataType) => void
    themeStyle: Nullable<string>
    fontSize: Nullable<string>
    onGoogleButtonClick: any
    onFacebookButtonClick: any
    startGoogleAPI: any
    GOOGLE_CLIENT_ID: string
    FACEBOOK_CLIENT_ID: string
}
type registrationFormValidationType = {
    email: string
    password: string
    confirmPassword: string,
    terms: boolean
}
