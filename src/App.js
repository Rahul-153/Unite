import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Main from './components/Main';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
        <Intro/>
        <div className='Main'>
        <Main/>
        </div>
    <Footer/>
</div>
  );
}

export default App;
