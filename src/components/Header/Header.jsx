import React from "react";

function Header(props) {
	return (
		<header className="header bg-danger-subtle">
			<nav className="navbar">
				<div className="container-fluid">
					<span className="navbar-text">
						Your toDo List
					</span>
				</div>
			</nav>
		</header>
	);
}

export default Header;
