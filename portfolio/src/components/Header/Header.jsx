import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import Socials from '../Socials/Socials';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <NavList />
      <Socials />
    </div>
  );
};

export default Header;
