import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

// Image
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
    //create a controlled component
    const [state, setState] = useState('');
    const initial = useRef(true) // prevents from running on initial load

    //add a delay for the input search to wait a moment before searching. Creates a better user experience
    useEffect(() => {
        //useRef won't trigger a re-render, but setState will trigger a re-render. That's why here we are asking for a useRef
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer) //resets the timer
    }, [setSearchTerm, state])

    return (
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
        </Wrapper>
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