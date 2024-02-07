import logo from '../../logo.svg';
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';


const LandingPage = () => {
  return (
    <>
      <Banner />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
} 

export default LandingPage;