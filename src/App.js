
import './App.css';
import {Bookshelf} from "./practice.js"
import {SideNav} from "./sidenav.js"
import {NavBar} from "./navbar.js"
import { useState } from "react"

function App() {
  const [stateGenre, setStateGenre] = useState("All")
  const handleClicked = (genre) => {
    setStateGenre(genre)
    console.log(stateGenre)
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Isekai Bookmark</h3>
        <NavBar />
      </header>
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
