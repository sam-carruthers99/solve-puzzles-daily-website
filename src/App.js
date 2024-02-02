import NavBar from "./Navbar.js"
import Main from "./Main.js"
import Puzzles from "./Puzzles.js"
import Riddles from "./Riddles.js"
import EscapeRooms from "./EscapeRooms.js"
import Ciphers from "./Ciphers.js"
import Other from "./Other.js"
import React from "react"
import "./styles/App.css"

function App() {

    const [tab, setTab] = React.useState("main")

    let currentTab

    switch(tab){
            case "main":
                currentTab = <Main handleClick={handleClick}/>
                break;
            case "puzzles":
                currentTab = <Puzzles />
                break;
            case "riddles":
                currentTab = <Riddles />
                break;
            case "escaperooms":
                currentTab = <EscapeRooms />
                break;
            case "ciphers":
                currentTab = <Ciphers />
                break;
            case "other":
                currentTab = <Other />
                break;
            default:
                currentTab = <Main />
                break;
    }

    function handleClick(name){
        setTab(name) // set tab to the tab that was clicked on 
    }
    
    
  return (
    <div className="appBody">
        <NavBar handleClick={handleClick}/>
        {currentTab}
    </div>
  )
}

export default App;
