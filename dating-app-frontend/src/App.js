import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DatingCards from './components/DatingCards/DatingCards'

function App() {
  return (
    <div className="App">
      <Header/>
      <DatingCards></DatingCards>
    </div>
  );
}

export default App;
