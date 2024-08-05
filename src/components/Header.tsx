import React, { useState } from "react";
import { Link } from "react-router-dom";
interface HeaderProps {
	onSearch?: (query: string) => void;
	onProfileClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onProfileClick }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleSearchSubmit = () => {
		if (!onSearch) return;
		onSearch(searchQuery);
	};

	return (
		<header className="bg-gray-800 text-white p-4 flex justify-between items-center md:flex-row flex-col">
			<div className="text-2xl font-semibold">
				<Link to="/">
					Cinephile's <span className="text-blue-500">Picks</span>
				</Link>
			</div>
			<div className="flex mt-4 md:mt-0 w-full md:w-auto items-center">
				<input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={handleSearchChange}
					onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
					className="bg-gray-700 rounded-l py-2 px-4 focus:outline-none focus:bg-gray-600 w-full"
				/>
				<button
					onClick={handleSearchSubmit}
					className="bg-blue-500 hover:bg-blue-700 text-white rounded-r py-2 px-4"
				>
					Search
				</button>
			</div>

			<nav className="md:space-x-4 md:flex hidden">
				<a href="/" className="hover:text-gray-300">
					Home
				</a>
				<a href="/movies" className="hover:text-gray-300">
					Genre
				</a>
				<a href="/movies" className="hover:text-gray-300">
					Movies
				</a>
				<a href="/tv-shows" className="hover:text-gray-300">
					TV Shows
				</a>
			</nav>
			<div className="md:block hidden">
				<button onClick={onProfileClick} className="hover:text-gray-300">
					<Link to="/favorites">Favorites</Link>
				</button>
			</div>
		</header>
	);
};

export default Header;
