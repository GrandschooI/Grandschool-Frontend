import React from 'react'
import s from './Modal.module.scss'
import Icon from './Icon/Icon'

type propsType = {
    title: string
    isOpen: boolean
    onSubmit: () => void
    children: React.Component
}

const Modal: React.FC<propsType> = ({title, isOpen, onSubmit, children}) => {
  return (
    <>
      {
        isOpen &&

                <div className={s.modalOverlay}>
                	<div className={s.modalWindow}>
                		<div>
                			<h4 className={s.modalHeader}>{title}</h4>
                			<Icon/>
                		</div>
                		<div className={s.modalBody}>
                			{children}
                		</div>
                		<div className={s.modalFooter}>
                			<button onClick={onSubmit}/>
                		</div>

                	</div>
                </div>
      }
    </>
  )
}


export default Modal
