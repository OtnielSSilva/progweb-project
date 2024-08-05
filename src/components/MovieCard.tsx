import React from "react";
import { Movie } from "../types/movie";

interface MovieCardProps {
	movie: Movie;
	onCardClick?: (movieId: string) => void; // Optional, if you want to handle clicks
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onCardClick }) => {
	return (
		<div
			className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
			onClick={() => onCardClick?.(movie.Title)} // Pass movie ID if available
		>
			<img
				src={movie.Poster}
				alt={`${movie.Title} poster`}
				className="w-full h-64 object-cover"
			/>

			<div className="p-4">
				<h3 className="text-white text-lg font-semibold mb-2">{movie.Title}</h3>
				<p className="text-gray-400 text-sm line-clamp-3">{movie.Plot}</p>
				{/* Optional: Show release date and rating */}
				{movie.Released && (
					<p className="text-gray-400 text-xs mt-1">{movie.Released}</p>
				)}
				{movie.imdbVotes && (
					<p className="text-yellow-400 text-xs mt-1">★ {movie.imdbRating}</p>
				)}
			</div>
		</div>
	);
};

export default MovieCard;
