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
    <section className='stack none'>
      <div className='stack-title'>
        <Title title='Мой стек технологий' content='Технологии, с которыми я постоянно работаю' />
      </div>
      <div className='icons-container'>
        <img src={html} alt='html' className='icon' />
        <img src={css} alt='' className='icon' />
        <img src={js} alt='' className='icon' />
        <img src={react} alt='' className='icon' />
        <img src={vector} alt='' className='icon' />
        <img src={bootstrap} alt='' className='icon' />
        <img src={tailwind} alt='' className='icon' />
        <img src={sass} alt='' className='icon' />
        <img src={git} alt='' className='icon' />
        <img src={greensock} alt='' className='icon' />
        <img src={vscode} alt='' className='icon' />
        <img src={github} alt='' className='icon' />
      </div>
    </section>
  );
};

export default MyStack;
