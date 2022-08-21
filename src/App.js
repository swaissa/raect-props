import Profile from '../Profile/Profile.js';
import pImg from '../../ProfilePic.jpg';
import "./app.css";
function App () {

  return (
    <div className="App">
      <Profile fullName="Mokhtar Souaissa" bio="Technicien superieur informatique et Télécommunication " profession="web developer" imge={pImg} />
    </div>
    );
}

export default App;
