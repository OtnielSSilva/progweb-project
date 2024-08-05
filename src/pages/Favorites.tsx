import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";

interface FavoritesProps {
	handleFav: (movie: Movie) => void;
	favs: Movie[];
}

export default function Favorites({ handleFav, favs }: FavoritesProps) {
	return (
		<>
			<Header />
			<div className="container mx-auto p-4">
				<h2 className="text-white text-2xl font-semibold mb-4">My Favorites</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{favs.map((movie: Movie) => (
						<MovieCard
							key={movie.imdbID}
							movie={movie}
							handleFav={() => handleFav(movie)}
							favs={favs}
						/>
					))}
				</div>
			</div>
		</>
	);
}
