import React from 'react'
import {Form, Formik} from 'formik'
import cn from 'classnames'
import {toast} from 'react-toastify'
import {TextField} from '../../../common/Form/FormControls/FormControls'
import s from './ConfirmRegistration.module.scss'
import '../../../../style.scss'
import 'react-toastify/dist/ReactToastify.css'
import {Nullable} from '../../../../Redux/redux-store'

const confirmRegistrationFormValidation = (values: confirmRegistrationFormValidationType) => {
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

const confirmRegistrationForm: React.FC<propsType> = ({onSubmit, themeStyle, fontSize}) => {
    return (
        <div className={cn(themeStyle ? themeStyle : '', s[themeStyle ? themeStyle : ''],
            s[fontSize ? fontSize : ''], [fontSize ? fontSize : ''])}>
            <Formik
                initialValues={{email: '', password: '', confirmPassword: ''}}
                validate={confirmRegistrationFormValidation}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label className={'formLabel'}>
                            <span>Confirmation code was sent to:</span>
                            <p className={s.phone}>+ 380 (50) - 888 - 28 - **</p>
                            {TextField({
                                type: 'number',
                                name: 'confirmationCode',
                                placeholder: 'Enter the code from the message',
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
                        <button className={s.repeatCode}>I didn't get a code</button>
                    </Form>
                )}
            </Formik>
            <div>
                <label className={'formLabel'}>
                    <span>Confirm your email address. Please check your mailbox and follow the instructions below. Email sent to: </span>
                    <p className={s.phone}>test@gmail.com</p>
                </label>
                <div className={s.buttonWrapper}>
                    <button className={cn(s.goBack, 'submitBtn')}>
                        Back
                    </button>
                    <button className={cn(s.continue, 'submitBtn')}>
                        Ok
                    </button>
                </div>
                <button className={s.repeatCode}>I didn't get a code</button>
            </div>
        </div>
    )
}

export default confirmRegistrationForm

type propsType = {
    onSubmit: (formData: any) => void
    themeStyle: Nullable<string>
    fontSize: Nullable<string>
}
type confirmRegistrationFormValidationType = {
    email: string
}