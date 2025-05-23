import Title from '../Title/Title';
import Card from '../Card/Card';
import { cardData } from '../../data';

const MyProjects = () => {
  return (
    <section className='projects' id='projects'>
      <Title title='Проекты' content='Работы, которые я уже реализовал' />
      <div className='cards'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            stack={card.stack}
            demoLink={card.demoLink}
            codeLink={card.codeLink}
            previewImg={card.previewImg}
            codeImg={card.codeImg}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
