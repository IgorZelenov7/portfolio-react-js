import gitLogo from '../../assets/socials/git.svg';
import tgLogo from '../../assets/socials/tg.svg';
import vkLogo from '../../assets/socials/vk.svg';

import './Socials.css';

const Socials = () => {
  return (
    <div>
      <ul className='socials-list'>
        <li className='socials-item'>
          <a href='https://github.com/IgorZelenov7' target='_blank' className='social-link'>
            <img src={gitLogo} alt='git logo' className='social-logo' />
          </a>
        </li>
        <li className='socials-item'>
          <a href='https://t.me/igorqx' target='_blank' className='social-link'>
            <img src={tgLogo} alt='telegram logo' className='social-logo' />
          </a>
        </li>
        <li className='socials-item'>
          <a href='https://vk.com/igorqx' target='_blank' className='social-link'>
            <img src={vkLogo} alt='vk logo' className='social-logo' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
