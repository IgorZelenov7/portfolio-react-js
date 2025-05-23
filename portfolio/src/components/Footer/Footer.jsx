import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import Socials from '../Socials/Socials';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <Logo />
        <div className='footer-top__wrapper'>
          <a href='https://t.me/igorqx' className='tg' target='_blank'>
            t.me/igorqx
          </a>
          <a href='mailto:izelenov7@mail.ru' className='email'>
            izelenov7@mail.ru
          </a>
          <Socials />
        </div>
      </div>
      <div className='footer-line'></div>
      <div className='footer-bottom'>
        <NavList className='footer-nav' onAboutClick={openModal} />
        {isModalOpen && <Modal onClose={closeModal} />}
        <p className='footer-designed'>
          Designed by <span className='hero-name hero-name--footer'>Igor Zelenov </span> with{' '}
          <span className='hero-name hero-name--footer'>Love</span> &{' '}
          <span className='hero-name hero-name--footer'>Coffee</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
