import { getAllMovies } from "../data/movies";
import { getImageUrl } from "../utils/cine-util";
import MovieCard from "./MovieCard";


export default function MovieList() {
    const movies = getAllMovies()
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} getImageUrl={getImageUrl} />)}
            </div>
        </div>
    );
}


