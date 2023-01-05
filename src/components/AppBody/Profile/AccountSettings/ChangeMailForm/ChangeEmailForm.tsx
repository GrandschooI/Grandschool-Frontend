import React from 'react'
import {Form, Formik} from "formik"
import '../../../../../style.scss'
import {TextField} from '../../../../common/Form/FormControls/FormControls'
import s from './ChangeEmailForm.module.scss'

type propsType = {
}

const ProfileInfoForm:React.FC<propsType> = () => {

    return (
        <Formik
            initialValues={{ password: ''}}
            onSubmit={()=>{}}
        >
            {({ isSubmitting }) => (
                <Form className={s.changeEmailForm}>
                    <h3>Change e-mail</h3>
                    <label className={'formLabel'}>
                        <span>Enter new e-mail</span>
                        {TextField({
                            type: 'email',
                            name: 'email',
                            placeholder: 'Enter new email',
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