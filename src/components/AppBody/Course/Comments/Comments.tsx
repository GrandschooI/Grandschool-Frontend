import React, { FC } from 'react'

import cn from 'classnames'
import { Field, Form, Formik } from 'formik'

import { activeFontSize, activeThemeStyle } from '../../../../utils/scaffolding'
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
      {({ isSubmitting }) => (
        <section
          className={cn(
            s.comments,
            s[activeThemeStyle(themeStyle)],
            activeThemeStyle(themeStyle),
            'comments',
            s[fontSize],
            fontSize
          )}
        >
          <div className={s.profile}>
            <img className={s.avatar} src={img} alt="profile image" />
            <div className={s.nameWrapper}>
              <h5 className={s.name}>User Name</h5>
              <p className={s.location}>Ukraine, Kharkiv</p>
            </div>
          </div>
          <Form className={s.commentsArea}>
            <p className={s.commentsTitle}>
              Комментарий
              <span>*</span>
            </p>
            <Field
              name={'newComment'}
              as={'textarea'}
              className={s.newComment}
              placeholder={'Оставьте свой комментарий'}
            />
            <label
              className={cn(
                s.termsCheck,
                [activeFontSize(fontSize)],
                [activeThemeStyle(themeStyle)]
              )}
            >
              <Checkbox
                label={'Отправить комментарий анонимно'}
                name={'checkbox'}
                propValue={true}
                className={`checkboxLabel ${s.checkbox}`}
              />
            </label>
            <button disabled={isSubmitting} type={'submit'} className="submitBtn">
              Опубликовать
            </button>
          </Form>
          <div className={s.commentsInfo}>
            <h4 className={s.title}>Комментарии</h4>
            <div className={s.select}>
              <select defaultValue="today">
                <option value="today">За сегодня</option>
              </select>
            </div>
          </div>
          <ul>
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </ul>
        </section>
      )}
    </Formik>
  )
}

export default Comments
