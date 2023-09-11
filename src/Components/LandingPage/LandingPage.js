import logo from '../../logo.svg';
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';


const LandingPage = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      {/* <Footer /> */}
    </>
  );
} 

export default LandingPage;