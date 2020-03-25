import React, { useRef, useEffect, useCallback } from 'react';

import { Portal } from 'ui/components';

import { Overlay } from './styled';

interface IModalProps {
  opened: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, opened, onClose }): JSX.Element | null => {
  const overlayRef = useRef(null);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlayRef.current) {
        e.preventDefault();

        onClose();
      }
    },
    [onClose],
  );

  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (overlayRef.current && e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    return (): void => window.removeEventListener('keyup', onKeyUp);
  }, [onKeyUp]);

  return (
    <React.Fragment>
      {opened && (
        <Portal>
          <Overlay ref={overlayRef} onClick={onOverlayClick}>
            {children}
          </Overlay>
        </Portal>
      )}
    </React.Fragment>
  );
};

export { Modal };
