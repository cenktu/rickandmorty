import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import EpisodePage from './Pages/EpisodePage';
import CharacterPage from './Pages/CharacterPage';

import Navbar from './Components/Navbar/Navbar';
import './App.css';
import CharacterListPage from './Pages/CharacterListPage';
import FavoriteCharactersPage from "./Pages/FavoriteCharactersPage";

function App() {
  return (
    <Router>
            <div className="app">
              <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route path="/episode/:id" element={<EpisodePage/>} />
                    <Route path="/character/:id" element={<CharacterPage/>} />
                    <Route path="/characters" element={<CharacterListPage/>} />
                    <Route path="/favorites" element={<FavoriteCharactersPage/>} />
                    
                </Routes>
            </div>
        </Router>
  );
}

export default App;
