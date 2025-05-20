import './NavList.css';

const NavList = () => {
  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          Home
        </a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          About
        </a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          Tech Stack
        </a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          Projects
        </a>
      </li>
    </ul>
  );
};

export default NavList;
