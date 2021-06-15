import React from 'react'
import styled from 'styled-components'
import KanyeQuote from './Kanye'
import ContactInfo from './ContactInfo'
import Skills from './Skills'

function Home() {
  return (

    <StyledHome>

      <TopOfPage>
        <HeaderOne>Jacob Stephens</HeaderOne>
        <Paragraph>Resume Website</Paragraph>
      </TopOfPage>

      <KanyeQuote/>

      <Skills/>

      <ContactInfo/>
    </StyledHome>

  );
}


export default Home;




/*Styling Using styled. Components*/
const StyledHome = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  max-width:100%;
  min-width:370px;
`

const TopOfPage = styled.div`
  // background:url('https://images.unsplash.com/photo-1524458100197-c870d78f0e45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80') no-repeat center;
  background:linear-gradient(black,#000080);
  max-width:100%;
  background-size:cover;
  width:100%;
`

const HeaderOne = styled.h1`
  color:white;
  text-align:center;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  margin:20% auto 0rem auto;
  background-color:none;
  padding-top:15rem;
  font-weight:30px;
  justify-content:center;
  font-size:70px;
  text-shadow:5px 3px 30px black;
`

const Paragraph = styled.p`
  text-align: center;
  color:white;
  padding-top:3rem;
  width:65%;
  padding-bottom:2rem;
  margin: 0 auto;
  font-size:1.8rem;
  letter-spacing:2px;
  text-shadow:5px 3px 20px black;
  padding-bottom:60%;

`
