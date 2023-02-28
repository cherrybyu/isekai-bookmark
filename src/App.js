
import './App.css';
import {Bookshelf} from "./practice.js"
import {SideNav} from "./sidenav.js"
import { useState } from "react"

function App() {
  const [stateGenre, setStateGenre] = useState("All")
  const handleClicked = (genre) => {
    setStateGenre(genre)
    console.log(stateGenre)
  };
  
  return (
    <div className="App">
      <header className="App-header">Isekai Bookmark</header>
      <div className="main">
        <SideNav onClick = {handleClicked}/>
        <div className="library">
          <Bookshelf genre = {stateGenre}/>
        </div>
      </div>  
    </div>
  );
}

export default App;
