import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/CreatePortal/Modal';
import * as Styled from '../style/CreatePortal.style';

const CreatePortal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Styled.PortalContainer>
        <h1>React CreatePortal</h1>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        
        {ReactDOM.createPortal(
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>This is a Modal</h2>
            <p>Modal content goes here.</p>
            <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
          </Modal>,
          document.getElementById('root_modal')!
        )}
      </Styled.PortalContainer>
    </main>
  );
};

export default CreatePortal;