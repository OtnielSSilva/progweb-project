import React from "react";
import { Movie } from "../types/movie";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

interface MovieCardProps {
	movie: Movie;
	favs: Movie[];
	onCardClick?: (movieId: string) => void;
	handleFav: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
	movie,
	favs,
	onCardClick,
	handleFav,
}) => {
	const isFavorite = favs.some((fav) => fav.imdbID === movie.imdbID);

	return (
		<div
			className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer relative"
			onClick={() => onCardClick?.(movie.imdbID)}
		>
			<img
				src={movie.Poster}
				alt={`${movie.Title} poster`}
				className="w-full h-64 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-white text-lg font-semibold mb-2">{movie.Title}</h3>
				<p className="text-gray-400 text-sm line-clamp-3">{movie.Plot}</p>
				{movie.Released && (
					<p className="text-gray-400 text-xs mt-1">{movie.Released}</p>
				)}
				{movie.imdbRating && (
					<p className="text-yellow-400 text-xs mt-1">★ {movie.imdbRating}</p>
				)}
			</div>

			<div className="absolute top-2 right-2 p-2 rounded-full bg-gray-900 hover:bg-gray-700">
				<IconContext.Provider value={{ size: "1.3em", color: "red" }}>
					{isFavorite ? (
						<IoHeartSharp
							onClick={(e) => {
								e.stopPropagation();
								handleFav(movie);
							}}
						/>
					) : (
						<IoHeartOutline
							onClick={(e) => {
								e.stopPropagation();
								handleFav(movie);
							}}
						/>
					)}
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default MovieCard;
