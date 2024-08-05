import React from "react";

interface MovieCardProps {
	movie: {
		title: string;
		posterPath: string;
		overview: string;
		releaseDate?: string; // Optional, if you have release date
		voteAverage?: number; // Optional, if you have ratings
	};
	onCardClick?: (movieId: string) => void; // Optional, if you want to handle clicks
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onCardClick }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;

	return (
		<div
			className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
			onClick={() => onCardClick?.(movie.title)} // Pass movie ID if available
		>
			<img
				src={posterUrl}
				alt={`${movie.title} poster`}
				className="w-full h-64 object-cover"
			/>

			<div className="p-4">
				<h3 className="text-white text-lg font-semibold mb-2">{movie.title}</h3>
				<p className="text-gray-400 text-sm line-clamp-3">{movie.overview}</p>
				{/* Optional: Show release date and rating */}
				{movie.releaseDate && (
					<p className="text-gray-400 text-xs mt-1">{movie.releaseDate}</p>
				)}
				{movie.voteAverage && (
					<p className="text-yellow-400 text-xs mt-1">★ {movie.voteAverage}</p>
				)}
			</div>
		</div>
	);
};

export default MovieCard;
