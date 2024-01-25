import "./Navbar.css"

export default function NavBar(){
	return (
		<nav className="container">
			<h2 className = "title">SolvePuzzlesDaily</h2>
			<img src="../public/images/lock.png" className="image" alt="lock icon" />
			<ul className="list">
				<li>Home</li>
				<li>Puzzles</li>
				<li>Riddles</li>
				<li>Escape Rooms</li>
				<li>Murder Mysteries</li>
				<li>Other</li>
			</ul>
		</nav>
	)
}