import './NavList.css';

const NavList = () => {
  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          Главная
        </a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          Обо мне
        </a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          Стек
        </a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link'>
          Проекты
        </a>
      </li>
    </ul>
  );
};

export default NavList;
