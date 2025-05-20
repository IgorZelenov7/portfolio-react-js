import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import Socials from '../Socials/Socials';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <div className='wrapper'>
        <NavList />
        <Socials />
      </div>
    </div>
  );
};

export default Header;
