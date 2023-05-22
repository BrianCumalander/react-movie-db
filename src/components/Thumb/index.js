//first import React from react
import React from 'react';

// Styles
//We're going to import some more things so that the thumbnails are clickable, but thats after we've setup routing 
// and our different routes
import { Image } from './Thumb.styles';

// setup our image prop
const Thumb = ({ image, movieId, clickable }) => (
    //creating implicit return
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
);

export default Thumb;