import './Title.css';

const Title = ({ title, content }) => {
  return (
    <div className='title-content'>
      <h2 className='title'>{title}</h2>
      <p className='content'>{content}</p>
    </div>
  );
};

export default Title;
