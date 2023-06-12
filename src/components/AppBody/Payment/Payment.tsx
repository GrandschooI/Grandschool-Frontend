import React from 'react'

import cn from 'classnames'

import Popup from '../../common/PopupSection/Popup/Popup'

import s from './Payment.module.scss'
import { PaymentSuccess } from './PaymentSuccess/PaymentSuccess'

const Payment = () => {
  return (
    <section className={cn(s.paymentWrapper, 'container')}>
      <h1>Покупка курса</h1>
      <div className={s.paymentOffer}>
        <div>
          <h3>БАЗОВЫЙ</h3>
          250 PLN 320
          <ul>
            <li>
              <h4>Что включает в себя курс</h4>
              <span>20 занятий/38 часов с практическими занятиями</span>
            </li>
            <li>
              <h4>Что включает в себя курс</h4>
              <span>20 занятий/38 часов с практическими занятиями</span>
            </li>
            <li>
              <h4>Что включает в себя курс</h4>
              <span>20 занятий/38 часов с практическими занятиями</span>
            </li>
            <li>
              <h4>Что включает в себя курс</h4>
              <span>20 занятий/38 часов с практическими занятиями</span>
            </li>
            <li>
              <h4>Что включает в себя курс</h4>
              <span>20 занятий/38 часов с практическими занятиями</span>
            </li>
          </ul>
          <button className={'inverseBtn'}>Назад</button>
        </div>
        <div>
          <h3>Покупка курса “Базовый”</h3>
          <p>
            Здесь текст о курсе, например подробрности и уточнения. Например: курс будет доступен в
            течении 1 года с момента покупки.{' '}
          </p>
          <p>
            Для покупки курса вам необходимо ввести актуальный адрес электронной почты, на который
            придет подтверждение вашей оплаты, чек и доступ к курсу.
          </p>
        </div>
      </div>
    </section>
    /*<section className="overlay">
      <Popup>
        <PaymentSuccess />
      </Popup>
    </section>*/
  )
}

export default Payment
