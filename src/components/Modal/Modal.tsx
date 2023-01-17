import React from 'react'
import s from './Modal.module.scss'
import Portal from '../utils/Portal/Portal';

type propsType = {
  isOpen: boolean
  children: React.ReactNode
}

const Modal: React.FC<propsType> = ({ isOpen, children}) => {
  return (
    <>
      {
        isOpen &&
          <Portal element={document.getElementById('root')}>
              <div className={s.modalOverlay}>
                  <div className={s.modalWindow}>
                      <div className={s.modalBody}>
                        {children}
                      </div>
                  </div>
              </div>
          </Portal>

      }
    </>
  )
}


export default Modal
