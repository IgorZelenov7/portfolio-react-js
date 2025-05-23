import MyProjects from './components/MyProjects/MyProjects';
import MyStack from './components/MyStack/MyStack';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import './styles/index.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <MyStack />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
