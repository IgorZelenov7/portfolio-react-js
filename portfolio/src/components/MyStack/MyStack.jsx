import Title from '../Title/Title';
import './MyStack.css';

import html from '../../assets/stack/html.svg';
import css from '../../assets/stack/css.svg';
import js from '../../assets/stack/js.svg';
import react from '../../assets/stack/react.svg';
import vector from '../../assets/stack/vector.svg';
import bootstrap from '../../assets/stack/bootstrap.svg';
import tailwind from '../../assets/stack/tailwind.svg';
import sass from '../../assets/stack/sass.svg';
import git from '../../assets/stack/git.svg';
import greensock from '../../assets/stack/greensock.svg';
import vscode from '../../assets/stack/vscode.svg';
import github from '../../assets/stack/github.svg';

const MyStack = () => {
  return (
    <section className='stack' id='my-stack'>
      <div className='stack-title'>
        <Title title='Мой стек технологий' content='Технологии, с которыми я постоянно работаю' />
      </div>
      <div className='icons-container'>
        <img src={html} alt='html' className='icon' />
        <img src={css} alt='css' className='icon' />
        <img src={js} alt='js' className='icon' />
        <img src={react} alt='react' className='icon' />
        <img src={vector} alt='vector' className='icon' />
        <img src={bootstrap} alt='bootstrap' className='icon' />
        <img src={tailwind} alt='tailwind' className='icon' />
        <img src={sass} alt='sass' className='icon' />
        <img src={git} alt='git' className='icon' />
        <img src={greensock} alt='greensock' className='icon' />
        <img src={vscode} alt='vscode' className='icon' />
        <img src={github} alt='github' className='icon' />
      </div>
    </section>
  );
};

export default MyStack;
