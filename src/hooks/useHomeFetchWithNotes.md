/* React greatly prefers that files inside of the hooks
folder are named "useFileName.js". This will bypass 
a lot of trouble in the future.
*/

import { useState, useEffect } from "react"; //don't need to import react itself, just the libraries that we're using. If we had jsx stuff, then yes, then we would import react.
// API
import API from '../API';

const initialState = { //always a good idea to set initial states for the page. Then we can set it like on line 21
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

//exporting this file since we're going to import it into our home file.

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    //we'll use state, 'useState', defined on line 5. Returns an array containing 1:the state itself, and 2:the setter for the state. Basically, [something, setSomething]
    const [state, setState] = useState(initialState); //the array names can be anything, but lets keep it simple. useState(can-define-an-initial-state-if-we-want)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // creating our new function for the react useEffect
    const fetchMovies = async (page, searchTerm = "") => { // 2 params, set searchTerm to an empty string
        try {
            setError(false);// set setError state to false, but if it fails, it will jump to the catch.
            setLoading(true);// set setLoading state to true since we will now try to load 

            const movies = await API.fetchMovies(searchTerm, page); // grab the api and give it the searchTerm and the page
            //console.log(movies); //the above should work, and we can test with the console.log, but fist we have to run the useEffect() which we'll define below this function

            setState(prev => ({
                ...movies, //we'll spread the movies here. Also, we'll append rather than wiping out the old data.
                results: //below we will list the old movie results "prev.results", then we'll append the new results "movies.results"
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]//if "page" is greater than 1, turnary opperator, run the array, first list old results, then append new results. BUT, if this is false, wipe out any results and only list the new results.
                //cant test this until we create a "loading" button.
            }))
            //after the loading is finished, we need to set it back to false. we'll do that at the end of this catch block.
        } catch (error) {
            setError(true);// in the try/catch, first we set error to true in the catch, then we set up the error to false in the try portion.
        }
        setLoading(false);
    }

    // Search
    useEffect(() => { //inline func. We want it to run on the initial run of this file.
        setState(initialState); // will wipe out the state each time the section is ran.
        fetchMovies(1, searchTerm); //fetch the first page, and the searchTerm
    }, [searchTerm]); //dependancy array. An empty array will make it only run once. It will also run whenever the dependancy changes. So, once on mount and once on change.
    // you can check the browser's console to see the object is now avalible. One page returned.

    // Load More button
    useEffect(() => {
        if (!isLoadingMore) return; //if its NOT loading more, simply return nothing.

        fetchMovies(state.page + 1, searchTerm); //fetch the movies, using state.page, plus the next page. Also pass it the searchTerm so it knows what it's looking for. ALSO, the dependancy array will complain, saying that it needs a few more dependancies, searchTerm & state.page. Go ahead and include them as well.
        setIsLoadingMore(false); //otherwise continue on and perform this, set isLoadingMore to false
    }, [isLoadingMore, searchTerm, state.page]); //dependency array


    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }; //We don't have to specify "state:", it will figure that one out by itself.
};