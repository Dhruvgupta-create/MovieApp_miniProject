
import MovieCard from "./MovieCard";

function MovieList(props) {

        const {movies, onIncStars, onDecStars, onClickFav, onClickAddtocart} = props;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           onIncStars = {onIncStars}
                            onDecStars = {onDecStars}
                            onClickFav = {onClickFav}
                            onClickAddtocart = {onClickAddtocart}/>

            ))}              
            </div>
        )
    
}
//movieList is parent of all movieCart isliye yha pe bhe pass krna pda props taki agey pass kr skey
export default MovieList;