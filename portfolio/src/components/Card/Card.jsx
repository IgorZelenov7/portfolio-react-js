import './Card.css';

const Card = ({ imgSrc, title, description, stack, demoLink, codeLink, previewImg, codeImg }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={imgSrc} alt={title} className='img' />
      </div>
      <div className='card-wrapper'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description description'>{description}</p>
        <p className='card-stack'>
          Tech stack :<span className='tech-stack'> {stack}</span>
        </p>
        <div className='card-links'>
          <div className='left'>
            <img src={previewImg} alt='Demo' className='img-left' />
            <a href={demoLink} className='card-link' target='_blank'>
              Live Preview
            </a>
          </div>
          <div className='right'>
            <img src={codeImg} alt='Code' className='img-right' />
            <a href={codeLink} className='card-link' target='_blank'>
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
