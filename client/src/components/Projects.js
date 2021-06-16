import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo'
import CryptoTracker from './cryptoTracker';
import Weather from './Weather.js'

function Projects (){


    return(

        <StyledHome>

            <TopOfPage>

                <HeaderOne>PROJECTS</HeaderOne>
                <Paragraph>HERE ARE SOME LINKS TO RECENTLY COMPLETED PROJECTS</Paragraph>

            </TopOfPage>


            <CenterDiv>

                <HeaderTwo>LINKS</HeaderTwo>

                <P>For this project I personally built the entire backend while the rest of my team handled front end. You can create an account for Admin, Student or Volunteer, and depending on the way you sign in you will be routed to specific pages and given certain privelages in editing or adding data.</P>
                <Clouds href='https://school-in-the-cloud-pied.vercel.app/
                '>School in the Clouds</Clouds>
            </CenterDiv>
            <CryptoTracker/>
            <Weather/>
            <ContactInfo/>
        </StyledHome>


    )
}

export default Projects;

const StyledHome = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;
    min-width:375px;
    padding-left:1px;
    height:auto;
`

const TopOfPage = styled.div`
    // background:
    // repeating-linear-gradient(190deg, rgba(255, 0, 0, 0.5) 40px,
    // rgba(255, 153, 0, 0.5) 80px, rgba(255, 255, 0, 0.5) 120px,
    // rgba(0, 255, 0, 0.5) 160px, rgba(0, 0, 255, 0.5) 200px,
    // rgba(75, 0, 130, 0.5) 240px, rgba(238, 130, 238, 0.5) 280px,
    // rgba(255, 0, 0, 0.5) 300px),
    // repeating-linear-gradient(-190deg, rgba(255, 0, 0, 0.5) 30px,
    // rgba(255, 153, 0, 0.5) 60px, rgba(255, 255, 0, 0.5) 90px,
    // rgba(0, 255, 0, 0.5) 120px, rgba(0, 0, 255, 0.5) 150px,
    // rgba(75, 0, 130, 0.5) 180px, rgba(238, 130, 238, 0.5) 210px,
    // rgba(255, 0, 0, 0.5) 230px),
    // repeating-linear-gradient(23deg, red 50px, orange 100px,
    // yellow 150px, green 200px, blue 250px,
    // indigo 300px, violet 350px, red 370px);
    
    background:linear-gradient(#2c333a, #2F4F4F);

    
    width:100%;
    background-size:cover;

    padding-bottom:15rem;
`

const H1 = styled.h1`
    text-align:center;
`

const HeaderOne = styled.h1`
color:#D2B48C;
text-align:center;
width:100%;
display:flex;
flex-wrap:wrap;
background-color:none;
padding-top:10rem;
margin-bottom:3rem;
font-weight:30px;
justify-content:center;
font-size:70px;
text-shadow:5px 3px 30px black;

`

const Paragraph = styled.p`
    text-align: center;
    width:65%;
    margin: 0 auto;
    font-size:1.3rem;
    letter-spacing:2px;
    color:#D2B48C;
    text-shadow:5px 3px 20px black;

`

const CenterDiv = styled.div`
    color:#D2B48C;
    background:linear-gradient(#2F4F4F,  #2c333a);
    padding:8%;
    text-align:left;
    font-weight:bold;
    text-shadow:5px 3px 30px black;

`

const HeaderTwo = styled.h2`
    color:#D2B48C;
    width:75%;
    margin:auto;
    text-align:center;
    border-bottom: solid 1.5px darkgrey;
    font-weight:bold;
    text-shadow:5px 3px 30px black;
    
    font-size:35px;
    letter-spacing: 2px;
`

const Clouds = styled.a`
    display:flex;
    border-radius:8px;
    border:2px solid #D2B48C;
    padding:1rem;
    margin:0 auto;
    text-decoration: none;
    color:#D2B48C;
    text-shadow:5px 3px 30px black;
    text-align:center;
    width:25%;
    justify-content:center;
`
const P = styled.p`
    text-align:center;
    font-weight:bold;
    font-size:1.3rem;
    text-shadow:5px 3px 30px black;
`