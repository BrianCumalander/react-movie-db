/* We're not creating an individual folder for this, instead we'll apply
 styliing to the actual component instead.
 */

import React, { useState, useEffect } from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components

// Hook

// Image
import NoImage from '../images/no_image.jpg'; //image can be named anything when importing like this. Here, we've named it NoImage. Also, be sure to include the file extension when importing like this.

const Home = () => {
    
    console.log(state, "This information is listed 3 times because we defined 3 different states (lines 19-21), so it's rerendering 1 for each state.") //line 29 we could see the movies listed in console.log, but we need to test the entire code block, so at the bottom of the code block I'm running console.log(state) to check its state.
    return <div>Home Page</div>
}

export default Home;