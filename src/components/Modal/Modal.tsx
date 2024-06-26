import React from 'react'

import Portal from '../utils/Portal/Portal'

import s from './Modal.module.scss'

type propsType = {
  isOpen: boolean
  onSubmit: () => void
  children: React.ReactNode
}

const Modal: React.FC<propsType> = ({ isOpen, onSubmit, children }) => {
  return (
    <>
      {isOpen && (
        <Portal element={document.getElementById('root')}>
          <div className={s.modalOverlay}>
            <div className={s.modalWindow}>
              <div className={s.modalBody}>{children}</div>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default Modal
