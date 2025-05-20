import NavList from '../NavList/NavList';
import './Header.css';

const Header = ({ children }) => {
  return <NavList>{children}</NavList>;
};

export default Header;
