import "./styles/Main.css"
import React from "react"
import Xarrow from "react-xarrows";

export default function Main(props) {
    
    const riddleRef = React.useRef(null);
    const riddleDescription = React.useRef(null);
    const puzzleRef = React.useRef(null);
    const puzzleDescription = React.useRef(null);
    const escapeRoomRef = React.useRef(null);
    const escapeRoomDescription = React.useRef(null);
    const cipherRef = React.useRef(null);
    const cipherDescription = React.useRef(null);

    return (
        <main class="main">
                <div class="main--container">
                    <div className="box puzzle" ref={puzzleRef} onClick={() => props.handleClick("puzzles")}>
                        <p>Puzzles</p>
                        <img src={require("./images/puzzlepiece.png")} alt="puzzle piece icon"/>
                    </div>
                    <div className="emptyBox" ref={riddleDescription}>Popular classic riddles and brain teasers</div>
                    <div className="box escaperoom" ref={escapeRoomRef} onClick={() => props.handleClick("escaperooms")}>
                        <p>Escape Rooms</p>
                        <img src={require("./images/padlock.png")} alt="puzzle piece icon"/>
                    </div>
                    <div className="emptyBox" ref={cipherDescription}>A dive into historical ciphers and how to break them</div>
                </div>
                <div class="main--container">
                    <div className="emptyBox" ref={puzzleDescription}>Original puzzles and puzzle games</div>
                    <div className="box riddle" ref={riddleRef} onClick={() => props.handleClick("riddles")}>
                        <p>Riddles</p>
                        <img src={require("./images/questionmark.png")} alt="puzzle piece icon"/>
                    </div>
                    <div className="emptyBox" ref={escapeRoomDescription}>Custom escape room games and similar games</div>
                    <div className="box cipher" ref={cipherRef} onClick={() => props.handleClick("ciphers")}>
                        <p>Ciphers</p>
                        <img src={require("./images/cipher.png")} alt="puzzle piece icon"/>
                    </div>
                </div>
                <Xarrow className="arrow"
                    start={riddleDescription} 
                    end={riddleRef} 
                />
                <Xarrow className="arrow"
                    start={puzzleDescription} 
                    end={puzzleRef} 
                />
                <Xarrow className="arrow"
                    start={escapeRoomDescription} 
                    end={escapeRoomRef} 
                />
                <Xarrow className="arrow"
                    start={cipherDescription} 
                    end={cipherRef} 
                />
        </main>
    )
}