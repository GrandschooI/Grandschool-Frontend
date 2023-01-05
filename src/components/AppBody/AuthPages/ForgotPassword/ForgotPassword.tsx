import React from 'react'
import {Form, Formik} from 'formik'
import cn from 'classnames'
import {toast} from 'react-toastify'
import {TextField} from '../../../common/Form/FormControls/FormControls'
import s from './ForgotPassword.module.scss'
import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import {Nullable} from '../../../../Redux/redux-store'

const forgotPasswordFormValidation = (values: forgotPasswordFormValidationType) => {
    const errors: any = {}
    if (!values.email) {
        errors.email = 'Required'
        toast.error('Email address is required')
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
        toast.error('Invalid email address')
    }
    return errors
}

const ForgotPassword: React.FC<propsType> = ({onSubmit, themeStyle, fontSize}) => {
    return (
            <Formik
                className={cn(themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''],
                    s[fontSize ? fontSize : ''], [fontSize ? fontSize : ''])}
                initialValues={{email: '', password: '', confirmPassword: ''}}
                validate={forgotPasswordFormValidation}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label className={'formLabel'}>
                            <span>Enter your email:</span>
                            {TextField({
                                type: 'email',
                                name: 'forgotPasswordEmailField',
                                placeholder: 'Enter your email',
                                className: `textField`,
                                errorClassname: `errorTextField`
                            })}
                        </label>
                        <div className={s.buttonWrapper}>
                            <button type="submit" disabled={isSubmitting} className={cn(s.goBack, 'submitBtn')}>
                                Back
                            </button>
                            <button type="submit" disabled={isSubmitting} className={cn(s.continue, 'submitBtn')}>
                                Wyślij
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
    )
}

export default ForgotPassword

type propsType = {
    onSubmit: (formData: any) => void
    themeStyle: Nullable<string>
    fontSize: Nullable<string>
}
type forgotPasswordFormValidationType = {
    email: string
}