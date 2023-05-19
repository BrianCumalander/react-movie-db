/* We're not creating an individual folder for this, instead we'll apply
 styliing to the actual component instead.
 */

 import React, { useState, useEffect } from 'react';
// API
import API from '../API';
 // Config
 import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
 // Components

 // Hook

 // Image
 import NoImage from '../images/no_image.jpg'; //image can be named anything when importing like this. Here, we've named it NoImage. Also, be sure to include the file extension when importing like this.

 const Home = () => {
    //we'll use state, 'useState', defined on line 5. Returns an array containing 1:the state itself, and 2:the setter for the state. Basically, [something, setSomething]
    const [state, setState] = useState(); //the array names can be anything, but lets keep it simple. useState(can-define-an-initial-state-if-we-want)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
// creating our new function for the react useEffect
const fetchMovies = async (page, searchTerm = "") => { // 2 params, set searchTerm to an empty string
    try {
        setError(false);// set setError state to false, but if it fails, it will jump to the catch.
        setLoading(true);// set setLoading state to true since we will now try to load 

        const movies = await API.fetchMovies(searchTerm, page); // grab the api and give it the searchTerm and the page
        console.log(movies); //the above should work, and we can test with the console.log, but fist we have to run the useEffect() which we'll define below this function

    } catch (error) {
        setError(true);// in the try/catch, first we set error to true in the catch, then we set up the error to false in the try portion.
    }
}    

    useEffect(() => { //inline func. We want it to run on the initial run of this file.

    }, []) //dependancy array. an empty array will make it only run once.

    return <div>Home Page, defined in Home.js, and this is line 23.</div>
 }

 export default Home;