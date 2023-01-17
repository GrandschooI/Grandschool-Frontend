import React from 'react';
import {createPortal} from 'react-dom';

type PropsType = {
  children: React.ReactNode
  element: HTMLElement | null
}

const Portal: React.FC<PropsType> = ({element = document.body, children}) => {
  return createPortal(children, element as HTMLElement);
};

export default Portal