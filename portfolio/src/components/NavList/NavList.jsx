import './NavList.css';

const NavList = ({ className = '', onAboutClick }) => {
  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <a href='#' className={`nav-link ${className}`}>
          Главная
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#'
          className={`nav-link ${className}`}
          onClick={(e) => {
            e.preventDefault();
            if (onAboutClick) onAboutClick();
          }}
        >
          Обо мне
        </a>
      </li>
      <li className='nav-item'>
        <a href='#my-stack' className={`nav-link ${className}`}>
          Стек
        </a>
      </li>
      <li className='nav-item'>
        <a href='#projects' className={`nav-link ${className}`}>
          Проекты
        </a>
      </li>
    </ul>
  );
};

export default NavList;
