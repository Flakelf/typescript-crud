import React from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

interface IPortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<IPortalProps> = ({ children }) =>
  modalRoot && ReactDom.createPortal(children, modalRoot);

export { Portal };
