import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";

interface FavoritesProps {
	handleFav: (movie: Movie) => void;
	favs: Movie[];
}

export default function Favorites({ handleFav, favs }: FavoritesProps) {
	return (
		<div className="container mx-auto p-4">
			<h2 className="text-white text-2xl font-semibold mb-4">My Favorites</h2>
			{favs.length === 0 ? (
				<p className="text-gray-400 text-center text-lg font-medium mt-8">
					You don't have any favorites yet. Add some movies to your favorites
					list!
				</p>
			) : (
				<div className="flex flex-wrap gap-4">
					{favs.map((movie: Movie) => (
						<MovieCard
							key={movie.imdbID}
							movie={movie}
							handleFav={() => handleFav(movie)}
							favs={favs}
						/>
					))}
				</div>
			)}
		</div>
	);
}
