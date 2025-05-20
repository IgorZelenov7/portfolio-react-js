import Header from './components/Header/Header';
import './styles/index.css';
import reactLogo from './assets/react.svg'
import NavList from './components/NavList/NavList';

function App() {
  return (
    <div className='container'>
      <Header>
        <nav className='nav'>
          <img src={reactLogo} alt='logo' className='logo' />
        </nav>
      </Header>
    </div>
  );
}

export default App;
