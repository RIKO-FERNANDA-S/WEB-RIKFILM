import './App.css';
import NavigationBar from "./components/NavigationBar"
import "./style/landingPage.css"
import Intro from "./components/Intro"
import Trending from './components/Trending';
import SuperHero from './components/Superhero';
import Motivation from './components/Motivation';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bgPage'>

    <div className='myBG'>
      <NavigationBar/>
      <Intro />
    </div>

    <div>
      <Motivation/>
    </div>

    <div className='trending'>
    <Trending/>
    </div>

    <div>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
