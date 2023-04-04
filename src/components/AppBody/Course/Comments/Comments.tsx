import React, { FC } from 'react'

import cn from 'classnames'

import { CommentItem } from './CommentItem/CommentItem'
import s from './Comments.module.scss'

import img from 'assets/images/webp/comment-img.png'
import { getFontSize, getThemeStyle } from 'Redux/selectors/styleSelector'
import { useAppSelector } from 'utils/Hooks/useAppSelector'

const Comments: FC = () => {
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)

  return (
    <section className={cn(s.comments, s[themeStyle ? themeStyle : ''], 'comments', s[fontSize])}>
      <div className={s.profile}>
        <img className={s.avatar} src={img} alt="profile image" />
        <div className={s.name_wrapper}>
          <h5 className={s.name}>User Name</h5>
          <p className={s.location}>Ukraine, Kharkiv</p>
        </div>
      </div>
      <div className={s.comments_area}>
        <p className={s.comments_title}>
          Комментарий
          <span>*</span>
        </p>
        <textarea className={s.new_comment} placeholder={'Оставьте свой комментарий'} />
        <label className={s.new_comment_label} htmlFor="subscribeNews">
          <input
            className={s.new_comment_checkbox}
            type="checkbox"
            id="subscribeNews"
            value="anonymously"
          />
          Отправить комментарий анонимно
        </label>
        <button className={s.btn_publish}>Опубликовать</button>
      </div>
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
  )
}

export default Comments
