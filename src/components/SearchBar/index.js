import React, { useState, useEffect, useRef } from "react";

// Image
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
    //create a controlled component
    const [state, setState] = useState('');

    //add a delay for the input search to wait a moment before searching. Creates a better user experience
    //2:53:17
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer) //resets the timer
    },[setSearchTerm, state])

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
                />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;