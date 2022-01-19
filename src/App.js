import { Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Main from './components/Main';
import Nav from './components/Nav';
import Contribute form './Contribute_to_project'

function App() {
  return (
    <div className="App">
      <Nav/>
        <Intro/>
        <Routes>
          <Route path="/" element={<Main/>}>
            </Route>
            
        </Routes>
    <Footer/>
</div>
  );
}

export default App;
