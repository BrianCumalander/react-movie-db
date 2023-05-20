/* We're not creating an individual folder for this, instead we'll apply
 styliing to the actual component instead.
 */

import React, { useState, useEffect } from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg'; //image can be named anything when importing like this. Here, we've named it NoImage. Also, be sure to include the file extension when importing like this.

const Home = () => {
    const { state, loading, error } = useHomeFetch();

    console.log(state, "This information is listed several times because we defined a couple of states (lines 19-21), so it's rerendering 1 for each state.") 
    return <div>Home Page</div>
}

export default Home;