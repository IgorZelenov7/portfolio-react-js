import gitLogo from '../../assets/socials/git.svg';
import tgLogo from '../../assets/socials/tg.svg';
import vkLogo from '../../assets/socials/vk.svg';

import './Socials.css'

const Socials = () => {
  return (
    <div>
      <ul className='socials-list'>
        <li className='socials-item'>
          <a href='' className='social-link'>
            <img src={gitLogo} alt='git logo' className='social-logo' />
          </a>
        </li>
        <li className='socials-item'>
          <a href='' className='social-link'>
            <img src={tgLogo} alt='git logo' className='social-logo' />
          </a>
        </li>
        <li className='socials-item'>
          <a href='' className='social-link'>
            <img src={vkLogo} alt='git logo' className='social-logo' />
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Socials;
