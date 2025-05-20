import mainLogo from '../../assets/react.svg';

const Logo = () => {
  return (
    <a href='#' className='logo-link'>
      <img src={mainLogo} alt='logo' className='logo' />
    </a>
  );
};

export default Logo;
