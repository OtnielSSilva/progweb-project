import React, { useState } from "react";

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
		<header className="bg-gray-800 text-white p-4 flex justify-between items-center">
			<div className="text-2xl font-semibold">
				{/* Your logo or app name here */}
				FaveFlix
			</div>

			<nav className="space-x-4">
				<a href="/" className="hover:text-gray-300">
					Home
				</a>
				<a href="/movies" className="hover:text-gray-300">
					Movies
				</a>
				<a href="/tv-shows" className="hover:text-gray-300">
					TV Shows
				</a>
			</nav>

			<div className="flex items-center">
				<input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={handleSearchChange}
					className="bg-gray-700 rounded-l py-2 px-4 focus:outline-none focus:bg-gray-600"
				/>
				<button
					onClick={handleSearchSubmit}
					className="bg-blue-500 hover:bg-blue-700 text-white rounded-r py-2 px-4"
				>
					{/* Add a search icon here (optional) */}
					Search
				</button>
			</div>

			<div>
				<button onClick={onProfileClick} className="hover:text-gray-300">
					{/* Profile icon here */}
					Profile
				</button>
			</div>
		</header>
	);
};

export default Header;
