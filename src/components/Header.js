import React from 'react';
import { slide as Hamburger } from "react-burger-menu";
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './Home';
import Photography from './Photography'
import About from './About'
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
                    <Link className='buttons' to='/about'>ABOUT</Link>
                </Hamburger>
            </Menu>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
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
    background-color:#282c34;
    font-size:36px;
    font-weight:bold;
`