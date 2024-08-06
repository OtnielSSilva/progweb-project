import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../types/movie";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

interface MovieCardProps {
	movie: Movie;
	favs: Movie[];
	handleFav: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, favs, handleFav }) => {
	const navigate = useNavigate();
	const isFavorite = favs.some((fav) => fav.imdbID === movie.imdbID);

	return (
		<div
			className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer relative w-64"
			onClick={() => navigate(`/movie/${movie.imdbID}`)}
		>
			<img
				src={movie.Poster}
				alt={`${movie.Title} poster`}
				className="w-full object-cover"
				// h-64
			/>
			<div className="p-4">
				{/* Title with tooltip */}
				<h3
					className="text-white text-lg font-semibold mb-2 truncate"
					title={movie.Title}
				>
					{movie.Title}
				</h3>
				<p className="text-gray-400 text-sm line-clamp-3">{movie.Year}</p>
			</div>

			<div
				className="absolute top-2 right-2 p-2 rounded-full bg-gray-900 hover:bg-gray-700"
				onClick={(e) => {
					e.stopPropagation();
					handleFav(movie);
				}}
			>
				<IconContext.Provider value={{ size: "1.7em", color: "red" }}>
					{isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default MovieCard;
