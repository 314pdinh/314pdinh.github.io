import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navigation/Navigation'
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
