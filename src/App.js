
import './App.css';
import Home from './components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Question from './components/Question/Question';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='body'>
      <Home></Home>
      <Question></Question>
      <Footer></Footer>

     
    </div>
  );
}

export default App;
