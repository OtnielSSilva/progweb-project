import React from "react";
import MovieCard from "./MovieCard";

interface MainContainerProps {
	movies: {
		title: string;
		posterPath: string;
		overview: string;
		// ...other movie properties
	}[]; // Array of movie objects
}

const MainContainer: React.FC<MainContainerProps> = ({ movies }) => {
	return (
		<div className="container mx-auto p-4">
			<h2 className="text-white text-2xl font-semibold mb-4">My Movies</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{movies.map((movie) => (
					<MovieCard key={movie.title} movie={movie} /> // Key is important for React lists
				))}
			</div>
		</div>
	);
};

export default MainContainer;
