import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MyProjects from './components/MyProjects/MyProjects';
import MyStack from './components/MyStack/MyStack';
import './styles/index.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <MyStack />
      <MyProjects />
    </div>
  );
}

export default App;
