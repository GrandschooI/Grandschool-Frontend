import React from 'react'
import {Form, Formik} from 'formik'
import '../../../../../style.scss'
import {TextField} from '../../../../common/Form/FormControls/FormControls'
import s from './ChangeEmailForm.module.scss'
import * as yup from 'yup'
import FormErrorMessage from '../../../../utils/FormErrorMessage/FormErrorMessage';
import {useAppSelector} from "../../../../../utils/Hooks/useAppSelector";
import {getFontSize, getThemeStyle} from "../../../../../Redux/selectors/styleSelector";
import cn from "classnames";

type propsType = {}
const changeEmailValidationSchema = yup.object().shape({
    email: yup.string().email().required()
})
const ProfileInfoForm: React.FC<propsType> = () => {
    const themeStyle = useAppSelector(getThemeStyle)
    const fontSize = useAppSelector(getFontSize)

    return (
        <Formik
            initialValues={{email: ''}}
            validationSchema={changeEmailValidationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={() => {
            }}
        >
            {({isSubmitting, errors, touched}) => (
                <Form className={cn(s.changeEmailForm, s[themeStyle ? themeStyle : ''], s[fontSize])}>
                    <h3>Change e-mail</h3>
                    <label className={'formLabel'}>
                        <span>Enter new e-mail</span>
                        {TextField({
                            type: 'email',
                            name: 'email',
                            placeholder: 'Enter new email',
                            className: `textField ${errors.email && touched.email ? 'errorTextField' : ''}`
                        })}
                        {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                    </label>
                    {!isSubmitting ? <button type="submit" className={s.btn}>Wyślij</button> : <span>Pending</span>}
                </Form>
            )}
        </Formik>
    )
}

export default ProfileInfoForm