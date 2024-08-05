import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

interface MainContainerProps {
	movies: Movie[];
	handleFav: (movie: Movie) => void;
	favs: Movie[];
}

const MainContainer: React.FC<MainContainerProps> = ({
	movies,
	handleFav,
	favs,
}) => {
	return (
		<div className="container mx-auto p-4">
			<h2 className="text-white text-2xl font-semibold mb-4">My Movies</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{movies.map((movie) => (
					<MovieCard
						key={movie.imdbID}
						movie={movie}
						handleFav={() => handleFav(movie)}
						favs={favs}
					/>
				))}
			</div>
		</div>
	);
};

export default MainContainer;
