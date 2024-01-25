import "./styles/Navbar.css"

export default function NavBar(props){
	return (
		<nav className="container">
			<h2 className = "title">SolvePuzzlesDaily</h2>
			<img src={require("./images/lock.png")} className="image" alt="gloom" />
			<ul className="list">
				<li onClick={() => props.handleClick("main")}>Home</li>
				<li onClick={() => props.handleClick("puzzles")}>Puzzles</li>
				<li onClick={() => props.handleClick("riddles")}>Riddles</li>
				<li onClick={() => props.handleClick("escaperooms")}>Escape Rooms</li>
				<li onClick={() => props.handleClick("ciphers")}>Ciphers</li>
				<li onClick={() => props.handleClick("other")}>Other</li>
			</ul>
		</nav>
	)
}