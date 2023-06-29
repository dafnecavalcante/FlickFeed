class MovieModel
{
    constructor(tmdbId, imdbId, title, image, originalName, tipo)
    {
        this.tmdbId = tmdbId;
        this.imdbId = imdbId;
        this.title = title +  (originalName != undefined ? ` (${originalName})` : '');
        this.tipo = tipo;
        this.image = `https://image.tmdb.org/t/p/w185/${image}`;
    } 
    
}

const MovieModelService = 
{
    parseMoviesObj:  (moviesObj) => 
    {
        let moviesReturn = [];

        for(let movie of moviesObj.results)
        {
            let atualMovie;

            if(movie.media_type != undefined && movie.media_type == 'movie')
            {
                atualMovie = new MovieModel(
                    movie.id,
                    movie.imdb_id,
                    movie.title,
                    movie.poster_path,
                    movie.original_movie
                );
            }

            else if(movie.media_type != undefined && movie.media_type == 'tv')
            {
                atualMovie = new MovieModel(
                    movie.id,
                    movie.imdb_id,
                    movie.name,
                    movie.poster_path,
                    movie.original_name
                );
            }

            if(atualMovie != undefined)
                moviesReturn.push(atualMovie);
        }
        
        return moviesReturn;
    },
};

export default MovieModelService;

