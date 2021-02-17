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
    // import styled from 'styled-components';

    const StyledPage = styled.div`

    `

    const Menu = styled.div`
  

`
