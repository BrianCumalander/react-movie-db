/* functional version:
  import React, { useState, useEffect, useRef } from "react";
*/

// class verson:
import React, { Component } from "react";

import PropTypes from 'prop-types';




// Image
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from "./SearchBar.styles";






// functonal version:
/* const SearchBar = ({ setSearchTerm }) => {
    //create a controlled component
    const [state, setState] = useState('');
    const initial = useRef(true) // prevents from running on initial load
*/

// class version:
class SearchBar extends Component {
    state = { value: '' };
    timeout = null;



    /* functional ver:
    //add a delay for the input search to wait a moment before searching. Creates a better user experience
    useEffect(() => {
        //useRef won't trigger a re-render, but setState will trigger a re-render. That's why here we are asking for a useRef
        if (initial.current) {
            initial.current = false;
            return;
        }
*/

    // class ver:
    /* component lifecycle is similar to ios 11 as in: 
            componentDidCatch
            componentDidMount
            componentDidUpdate
            componentWillUnmount
            component...etc.
            */

    // prevProps isn't used, so we put a _ before it.
    // but we WILL use prevState b/c we're looking at the above state, liine 33, state={value...}
    componentDidUpdate(_prevProps, prevState) {
        // .state.value is a class component, so we reach it by using 'this.'
        // We MUST say in this way-- 'if this is NOT same as prevState' otherwise it will go into infinity loop b/c
        // it can't check, and/or won't ever get to a 'false' value, b/c it will always be true. 
        if (this.state.value !== prevState.value) {
            const { setSearchTerm } = this.props;

            //return () => clearTimeout(timer) //resets the timer
            clearTimeout(this.timeout)

            this.timeout = setTimeout(() => {
                //grab our state value
                const { value } = this.state;
                setSearchTerm(value);
            }, 500);
        }
    }


    
    
    // }, [setSearchTerm, state])

    return(
    //input --creating an inline function. We invoke as it happens, -we want to grab the value that's in the input field. 
    <Wrapper>
    <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
            type='text'
            placeholder="Search Movie"
            onChange={event => setState(event.currentTarget.value)}
            value={state}
            id='movie_search'
        />
    </Content>
    </Wrapper >
)
};

SearchBar.propTypes = {
    callback: PropTypes.func
}

// I dono't know why these constants weren't type-checked but the func is???
//     SearchBar: PropTypes.string,
//     timer: PropTypes.number
// }

export default SearchBar;