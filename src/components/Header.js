import React from 'react';
import { slide as Hamburger } from "react-burger-menu";
import styled from 'styled-components';
import {
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './Home';
import Photography from './Photography'
import Projects from './About'
import Register from './OwnerRegister';
import Login from './Login';
import Dashboard from './Dashboard';


  const Header = () => {
      
    return (

        <div>

            <MainHeader>Jacob Stephens</MainHeader>
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
                <Route path="/register" component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>

        </div>
        
    )
}

export default Header;
    // import styled from 'styled-components';
    const Menu = styled.div`
    text-align:left;
    background:none;
    
`
    
    const MainHeader = styled.div`
    text-align:left;
    padding:2rem;
    padding-left:85%;
    background-color:#000000;
    font-size:36px;
    color:#000080;
    font-weight:bold;
`