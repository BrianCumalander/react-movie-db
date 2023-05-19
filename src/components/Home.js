/* We're not creating an individual folder for this, instead we'll apply
 styliing to the actual component instead.
 */

 import React, { useState } from 'react';
 //we'll import from root/config.js
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

    return <div>Home Page, defined in Home.js, and this is line 23.</div>
 }

 export default Home;