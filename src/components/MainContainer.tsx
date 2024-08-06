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
			<div className="flex flex-wrap gap-4 justify-center">
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
