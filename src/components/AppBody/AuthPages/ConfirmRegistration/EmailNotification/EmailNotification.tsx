import React from 'react';
import cn from 'classnames';
import s from '../ConfirmRegistration.module.scss';

const EmailNotification = () => {
  return (
    <div>
      <label className={cn(s.confirmLabel, 'formLabel')}>
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
  );
};

export default EmailNotification;