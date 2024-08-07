import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { Movie } from "@/types/movie";
import Search from "@/components/Search";

interface HomeProps {
	handleFav: (movie: Movie) => void;
	favs: Movie[];
}

export default function Home({ handleFav, favs }: HomeProps) {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {}, []);

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
				} else {
					setMovies([]);
				}
			})
			.catch((error) => console.error("Error fetching movies:", error));
	};

	const handleSearch = (query: string) => {
		fetchMovies(query);
	};

	const handleHomeClick = () => {
		setMovies([]);
	};

	return (
		<div className="min-h-screen">
			<Header handleHomeClick={handleHomeClick} />
			<Search onSearch={handleSearch} />
			<div className="p-4">
				{movies.length === 0 ? (
					<div className="text-center text-gray-400">
						<h2 className="text-xl mb-4 md:text-2xl">
							Explore Popular Films and TV Shows
						</h2>
						<p>
							Use the search box above to find your favorite films or browse
							featured content.
						</p>
						{/* Placeholder or featured films could be added here */}
					</div>
				) : (
					<MainContainer movies={movies} handleFav={handleFav} favs={favs} />
				)}
			</div>
		</div>
	);
}
