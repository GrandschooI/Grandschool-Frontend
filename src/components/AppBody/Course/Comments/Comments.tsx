import React, { FC } from 'react'

import cn from 'classnames'
import { Field, Form, Formik } from 'formik'

import { Checkbox } from '../../../common/Form/FormControls/FormControls'

import { CommentItem } from './CommentItem/CommentItem'
import s from './Comments.module.scss'

import img from 'assets/images/webp/comment-img.png'
import { getFontSize, getThemeStyle } from 'Redux/selectors/styleSelector'
import { useAppSelector } from 'utils/Hooks/useAppSelector'

const Comments: FC = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <Formik
      initialValues={{ newComment: '', checkbox: false }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        setSubmitting(false)
      }}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ isSubmitting, errors, touched }) => (
        <section
          className={cn(s.comments, s[themeStyle ? themeStyle : ''], 'comments', s[fontSize])}
        >
          <div className={s.profile}>
            <img className={s.avatar} src={img} alt="profile image" />
            <div className={s.name_wrapper}>
              <h5 className={s.name}>User Name</h5>
              <p className={s.location}>Ukraine, Kharkiv</p>
            </div>
          </div>
          <Form className={s.comments_area}>
            <p className={s.comments_title}>
              Комментарий
              <span>*</span>
            </p>
            <Field
              name={'newComment'}
              as={'textarea'}
              className={s.new_comment}
              placeholder={'Оставьте свой комментарий'}
            />
            <label
              className={cn(
                s.termsCheck,
                [fontSize ? fontSize : ''],
                [themeStyle ? themeStyle : '']
              )}
            >
              <Checkbox
                label={'Отправить комментарий анонимно'}
                name={'checkbox'}
                propValue={true}
                className={`checkboxLabel ${s.checkbox}`}
              />
            </label>
            <button disabled={isSubmitting} type={'submit'} className={s.btn_publish}>
              Опубликовать
            </button>
          </Form>
          <div className={s.comments_info}>
            <h4 className={s.title}>Комментарии</h4>
            <div className={s.select}>
              <select defaultValue={'today'}>
                <option value="today" selected>
                  За сегодня
                </option>
              </select>
            </div>
          </div>
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </section>
      )}
    </Formik>
  )
}

export default Comments
