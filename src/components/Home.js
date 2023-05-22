/* We're not creating an individual folder for this, instead we'll apply
 styliing to the actual component instead.
 */

import React, { useState, useEffect } from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import HeroImage from './HeroImage';

// Grid
import Grid from './Grid';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg'; //image can be named anything when importing like this. Here, we've named it NoImage. Also, be sure to include the file extension when importing like this.

const Home = () => {
    const { state, loading, error } = useHomeFetch();

    console.log(state)

    // we don't want <div>'s, so we'll put what's called a fragment, then the HeroImage.
    // you can either use the && which is a 'short circuit', which if true, shows the HeroIimage, otherwise it returns the word 'false', but will NOT be shown since its jsx. Some people don't like the && because it does return 'false' even though its not shown.
    // or, you can use the turnurary opperator which I'm more familure with. if true, displays the image, but if false, is null and won't display the non-existent image or the word null.
    // return (
    //     <>
    //     {state.results[0] &&
    //     <HeroImage />
    //     }
    //     </>
    // )
    // console.log(state);
    // or
    // --for these results we will display some props, defined in ./config.js and using the movies api. Or, you can also look at the state.results json and see all of the returned data to pull from.
    return (
        <>
            {
                state.results[0] ?
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].original_title}
                        text={state.results[0].overview}
                    />
                    : null
            }
            <Grid header = 'Popular Movies'>
                {state.results.map(movie => (
                    <div key={movie.id}>{movie.title}</div>
                    //grabs movie.id from the API
                ))}
            </Grid>
        </>
    );
};

export default Home;