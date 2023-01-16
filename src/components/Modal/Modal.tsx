import React from 'react'
import s from './Modal.module.scss'
import Icon from './Icon/Icon'
import Portal from '../utils/Portal/Portal';

type propsType = {
  title: string
  isOpen: boolean
  onSubmit: () => void
  children: React.ReactNode
}

const Modal: React.FC<propsType> = ({title, isOpen, onSubmit, children}) => {
  return (
    <>
      {
        isOpen &&
          <Portal element={document.getElementById('root')}>
              <div className={s.modalOverlay}>
                  <div className={s.modalWindow}>
                      <div>
                          <h4 className={s.modalHeader}>{title}</h4>
                      </div>
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
