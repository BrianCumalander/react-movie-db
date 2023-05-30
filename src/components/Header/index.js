import React from 'react'; //makes sure that we're using Ract for this component
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
 // Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

//you can either export it here, or down below. We'll be exporting below.
//export const Header = () => (
const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;