//first import React from react
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
//We're going to import some more things so that the thumbnails are clickable, but thats after we've setup routing 
// and our different routes
import { Image } from './Thumb.styles';

// Hook
//import { useHomeFetch } from '../../hooks/useHomeFetch';

// Image
import NoImage from '../../images/no_image.jpg';



// setup our image prop
const Thumb = ({ image, movieId, clickable }) => (
    //creating implicit return
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb' />
        )
        }
    </div>
);

export default Thumb;