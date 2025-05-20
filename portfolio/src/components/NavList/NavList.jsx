import './NavList.css';

const NavList = ({children}) => {
  return (
    <ul className='nav-list'>
      {children}
      <li className='nav-item'>Home</li>
      <li className='nav-item'>About</li>
      <li className='nav-item'>Tech Stack</li>
      <li className='nav-item'>Projects</li>
      <li className='nav-item'>Contact</li>
    </ul>
  );
};

export default NavList;
