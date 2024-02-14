import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import * as Styled from '../../style/CreatePortal.style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </Styled.ModalContent>
    </Styled.ModalOverlay>,
    document.getElementById('root_modal')!
  );
};

export default Modal;