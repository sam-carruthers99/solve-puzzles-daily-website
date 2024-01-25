import "./styles/Main.css"

export default function Main(props) {
    return (
        <main class="main">
                <div class="main--container">
                    <div className="box puzzle" onClick={() => props.handleClick("puzzles")}>
                        <p>Puzzles</p>
                        <img src={require("./images/puzzlepiece.png")} alt="puzzle piece icon"/>
                    </div>
                    <div className="emptyBox">Popular classic riddles and brain teasers</div>
                    <div className="box escaperoom" onClick={() => props.handleClick("escaperooms")}>
                        <p>Escape Rooms</p>
                        <img src={require("./images/padlock.png")} alt="puzzle piece icon"/>
                    </div>
                    <div className="emptyBox">A dive into historical ciphers and how to break them</div>
                </div>
                <div class="main--container">
                    <div className="emptyBox">Original puzzles and puzzle games</div>
                    <div className="box riddle" onClick={() => props.handleClick("riddles")}>
                        <p>Riddles</p>
                        <img src={require("./images/questionmark.png")} alt="puzzle piece icon"/>
                    </div>
                    <div className="emptyBox">Custom escape room games and similar games</div>
                    <div className="box cipher" onClick={() => props.handleClick("ciphers")}>
                        <p>Ciphers</p>
                        <img src={require("./images/cipher.png")} alt="puzzle piece icon"/>
                    </div>
                </div>
        </main>
    )
}