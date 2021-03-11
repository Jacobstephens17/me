import React from 'react';
import { slide as Hamburger } from "react-burger-menu";
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Photography from './Photography'
import Projects from './Projects'


  const Header = () => {

    return (

        <StyledPage>

                <Menu  className='menu'>
                   
                        <Link className='buttons' to='/'>HOME</Link>
                        <Link className='buttons' to='/photography'>PHOTOGRAPHY</Link>
                        <Link className='buttons' to='/projects'>PROJECTS</Link>
                        {/* <Link className='buttons' to='/signup'>Sign Up!</Link> */}
                    
                </Menu>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/photography" component={Photography} />
                {/* <Route path="/signup" component={UserValidation} /> */}
            </Switch>

        </StyledPage>

    )
}

export default Header;


const StyledPage = styled.div`
    background-color:black;
    max-width:100%;
    position:static;
    display:flex;
    flex-direction:row;
`

const Menu = styled.div`
    text-align:left;
    background:none;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:100%;
    flex-wrap:wrap;
    position:fixed;

`
