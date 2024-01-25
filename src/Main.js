import "./main.css"

export default function Main() {
    return (
        <main class="main">
            <div className="flex-grid">
                <div className="col">
                    <div className="box">Puzzles</div>
                    <div className="box">2</div>
                    <div className="box">Escape Rooms</div>
                    <div className="box">4</div>
                </div>
                <div className="col">
                    <div className="box">5</div>
                    <div className="box">Riddles</div>
                    <div className="box">7</div>
                    <div className="box">Murder Mysteries</div>
                </div>
            </div>
        </main>
    )
}