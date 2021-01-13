import React from 'react';
import { slide as Hamburger } from "react-burger-menu";
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Photography from './Photography'
import Projects from './About'


  const Header = () => {
      
    return (

        <StyledPage>
                <Menu  className='menu'>
                    <Hamburger className='hamburger' >
                        <Link className='buttons' to='/'>HOME</Link>
                        <Link className='buttons' to='/photography'>PHOTOGRAPHY</Link>
                        <Link className='buttons' to='/projects'>PROJECTS</Link>
                    </Hamburger>
                </Menu>
            <StyledHeader>
                <MainHeader>Jacob Stephens</MainHeader>
            </StyledHeader>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/photography" component={Photography} />
            </Switch>

        </StyledPage>
        
    )
}

export default Header;
    // import styled from 'styled-components';

    const StyledPage = styled.div`
    background-color:black;
    max-width:100%;
    `

    const Menu = styled.div`
    text-align:left;
    background:none;
    display:flex;
    flex-wrap:wrap;
    
`
    
    const MainHeader = styled.div`
    padding:2rem;
    margin-left:65%;
    display:flex;
    font-size: 1rem;
    color:#000080;
    font-weight:bold;
`

    const StyledHeader = styled.div`
    width:100%;
    background-color:black;
   
    `