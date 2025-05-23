import './Hero.css';
import photo from '../../assets/photo.jpg';
import ReactLogo from '../../assets/react-logo.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='background-logo'>
        <img src={ReactLogo} alt='React Logo' />
      </div>
      <div className='hero-title'>
        <p className='hero-text'>
          Привет 👋,
          <br /> Меня зовут <br />
          <span className='hero-name'>Игорь Зеленов</span>
          <br /> Я создаю web-сайты
        </p>
      </div>
      <div className='hero-photo'>
        <img src={photo} alt='photo' />
      </div>
    </section>
  );
};

export default Hero;
