import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Foote from './Components/footer/footer'
import { Action, Orginals ,Comedy,horror,Romance,Documentaries} from './urls'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={Orginals} title='Netflix Orginals'/>
        <RowPost url={Action} title='Action' isSmall/>
        <RowPost url={Comedy} title='Comedy' isSmall/>
        <RowPost url={horror} title='Horror' isSmall/>
        <RowPost url={Romance} title='Romance' isSmall/>
        <RowPost url={Documentaries} title='Documentaries' isSmall/>
        <Foote/>
    </div>
  );
}

export default App;
