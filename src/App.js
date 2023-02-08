import './App.css';
import Voiture from './Composants/Voiture';
import Maison from './Composants/Maison';
import Perso from './Composants/Perso';
import Player
 from './Composants/Player';
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Voiture/>
        </li>
      </ul>
      <div>
        <Maison/>
      </div>
      <div>
        <Perso/>
      </div>
      <div>
        <Player/>
      </div>
    </div>

    
  );
}

export default App;
