import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import { Movie } from "./types/movie";
import "./App.css";

function App() {
	const [favs, setFavs] = useState<Movie[]>([]);

	useEffect(() => {
		const storedFavs = localStorage.getItem("favs");
		if (storedFavs) {
			setFavs(JSON.parse(storedFavs));
		}
	}, []);

	const handleFav = (movie: Movie) => {
		const isFavorite = favs.some((fav) => fav.imdbID === movie.imdbID);

		let updatedFavs;
		if (isFavorite) {
			updatedFavs = favs.filter((fav) => fav.imdbID !== movie.imdbID);
		} else {
			updatedFavs = [...favs, movie];
		}
		setFavs(updatedFavs);
		localStorage.setItem("favs", JSON.stringify(updatedFavs));
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home handleFav={handleFav} favs={favs} />} />
				<Route
					path="/favorites"
					element={<Favorites handleFav={handleFav} favs={favs} />}
				/>
				<Route path="/movie/:imdbID" element={<MovieDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
