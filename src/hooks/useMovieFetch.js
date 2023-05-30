import { useState, useEffect } from 'react';
// API
import API from '../API';

// create the actual hook. using a perameter, movieId 
export const useMovieFetch = movieId => {
    //create 3 states and setters for the states. States are for that component
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //only need one useEffect because the data for all of the movie is only being loaded once, and thats on the initial load of the movie page.
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                //grab the data that we want -the movie from the id and credits
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                // Get directors only by filtering 
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };

        fetchMovie();
        }, [movieId]);

    //     useEffect(() => {
    //         fetchMovie();
    //     }, [movieId, fetchMovie]);
    // })


    return { state, loading, error };
};
