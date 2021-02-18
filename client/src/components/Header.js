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
                    <Hamburger className='hamburger' >
                        <Link className='buttons' to='/'>HOME</Link>
                        <Link className='buttons' to='/photography'>PHOTOGRAPHY</Link>
                        <Link className='buttons' to='/projects'>PROJECTS</Link>
                    </Hamburger>
                </Menu>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/photography" component={Photography} />
            </Switch>

        </StyledPage>

    )
}

export default Header;

<<<<<<< HEAD
    const StyledPage = styled.div`

    `

    const Menu = styled.div`
  
=======

const StyledPage = styled.div`
    background-color:black;
    max-width:100%;
    position:static;
    display:flex;
    flex-direction:column;
`

const Menu = styled.div`
    text-align:left;
    background:none;
    display:flex;
    flex-wrap:wrap;
    
`
>>>>>>> aeb4ffc73a3858645d4762f4200cfce7bd1d88bd

`
