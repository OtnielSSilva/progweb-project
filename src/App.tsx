import "./App.css";
import { Button } from "./components/ui/button";

import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Movie } from "./types/movie";
import { useEffect, useState } from "react";

function App() {
	const [movies, setMovies] = useState<Movie[]>([]);
	useEffect(() => {
		fetch("https://www.omdbapi.com/?s=Batman&page=1&apikey=22edc4ac")
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.Search);
			});
	}, []);

	const handleSearch = (query: string) => {
		fetch(`https://www.omdbapi.com/?s=${query}&page=1&apikey=22edc4ac`)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.Search);
			});
	};

	return (
		<>
			<Header onSearch={handleSearch} />
			<MainContainer movies={movies} />
			<Button>Click me</Button>
		</>
	);
}

export default App;
