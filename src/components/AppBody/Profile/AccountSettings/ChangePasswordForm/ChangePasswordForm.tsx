import React from 'react'
import {Form, Formik} from "formik"
import '../../../../../style.scss'
import {TextField} from '../../../../common/Form/FormControls/FormControls'
import s from './ChangePasswordForm.module.scss'

type propsType = {
}

const ProfileInfoForm:React.FC<propsType> = () => {

    return (
        <Formik
            initialValues={{ password: ''}}
            onSubmit={()=>{}}
        >
            {({ isSubmitting }) => (
                <Form className={s.changePasswordForm}>
                    <h3>Change password</h3>
                    <label className={'formLabel'}>
                        <span>Enter current password</span>
                        {TextField({
                            type: 'password',
                            name: 'password',
                            placeholder: 'Enter current password',
                            className: `textField`,
                            errorClassname: `errorTextField`
                        })}
                    </label>

                    <label className={'formLabel'}>
                        <span>Enter new password</span>
                        {TextField({
                            type: 'password',
                            name: 'newPassword',
                            placeholder: 'Enter new password',
                            className: `textField`,
                            errorClassname: `errorTextField`
                        })}
                    </label>

                    <label className={'formLabel'}>
                        <span>Re-enter new password</span>
                        {TextField({
                            type: 'password',
                            name: 'reenteredNewPassword',
                            placeholder: 'Re-enter the password',
                            className: `textField`,
                            errorClassname: `errorTextField`
                        })}
                    </label>


                    {!isSubmitting ? <button type="submit" className='submitBtn'>Wyślij</button> : <span>Pending</span>}
                </Form>
            )}
        </Formik>
    )
}

export default ProfileInfoForm