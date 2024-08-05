import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import { MyCarousel } from "@/components/MyCarousel";
interface HomeProps {
	handleFav: (movie: Movie) => void;
	favs: Movie[];
}

export default function Home({ handleFav, favs }: HomeProps) {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		fetchMovies("Batman");
	}, []);

	const fetchMovies = (query: string) => {
		fetch(
			`https://www.omdbapi.com/?s=${query}&page=1&apikey=${
				import.meta.env.VITE_OMDB_API_KEY
			}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.Search) {
					setMovies(data.Search);
				}
			})
			.catch((error) => console.error("Error fetching movies:", error));
	};

	const handleSearch = (query: string) => {
		fetchMovies(query);
	};

	return (
		<>
			<Header onSearch={handleSearch} />
			<MyCarousel />
			<MainContainer movies={movies} handleFav={handleFav} favs={favs} />
		</>
	);
}
