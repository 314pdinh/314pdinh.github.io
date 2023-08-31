import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navigation/Navigation'
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
