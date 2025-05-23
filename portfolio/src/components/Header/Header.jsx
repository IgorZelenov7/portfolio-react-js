import { useState } from 'react';
import Socials from '../Socials/Socials';
import NavList from '../NavList/NavList';
import Modal from '../Modal/Modal';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='header'>
      <Logo />
      <div className='wrapper'>
        <NavList onAboutClick={openModal} />
        {isModalOpen && (
          <>
            <div className='modal-backdrop' onClick={closeModal}></div>
            <Modal onClose={closeModal} />
          </>
        )}
        <Socials />
      </div>
    </div>
  );
};

export default Header;
