import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo'

function Projects (){
    

    return(

        <StyledHome>

            <TopOfPage>

                <HeaderOne>PROJECTS</HeaderOne>  
                <Paragraph>HERE ARE SOME LINKS TO RECENTLY COMPLETED PROJECTS</Paragraph>
           
            </TopOfPage>


            <CenterDiv>

                <HeaderTwo>LINKS</HeaderTwo>
                <H1>Coming soon...</H1>
           
            </CenterDiv>

            <ContactInfo/>
        </StyledHome>


    )
}

export default Projects;

const StyledHome = styled.div`
    display: flex;
    flex-direction:column;
`

const TopOfPage = styled.div`
background:url('https://images.unsplash.com/photo-1515563139710-9b2ccf0927c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80') no-repeat center;
width:100%;
background-size:cover;
height:125vh;
`

const H1 = styled.h1`
    text-align:center;
`

const HeaderOne = styled.h1`
color:white;
text-align:center;
width:100%;
display:flex;
flex-wrap:wrap;
margin:15rem auto 0rem auto;
background-color:none;
padding-top:12rem;
font-weight:30px;
justify-content:center;
font-size:70px;
text-shadow:5px 3px 30px black;

`

const Paragraph = styled.p` 
text-align: center;
color:white;
width:65%;
margin: 0 auto;
font-size:1.3rem;
letter-spacing:2px;
text-shadow:5px 3px 20px black;

`

const CenterDiv = styled.div`
color:black;
background-color:#000080;
padding:3%;
`

const HeaderTwo = styled.h2`
color:white;
width:75%;
margin:auto;
text-align:center;
border-bottom: solid 1.5px darkgrey;
font-weight:bold;
font-size:35px;
letter-spacing: 2px;
`
