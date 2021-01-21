import React from 'react';
import styled from 'styled-components';
import KanyeQuote from './Kanye'



function Photography (){
    

    return(

        <StyledHome>

            <TopOfPage>
                <HeaderOne>Photography</HeaderOne>  
                <Paragraph>Here is a portfolio of photos I have taken</Paragraph>
            </TopOfPage>


            <CenterDiv>
                <HeaderTwo>LOREM IPSUM DOLOR SIT AMET</HeaderTwo>
                <ParagraphTwo>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ParagraphTwo>
            </CenterDiv>

            <KanyeQuote/>
            
            <Social>
                <Twitter/>
                <Facebook/>
                <Instagram/>
                <Email/>
            </Social>


        </StyledHome>

    )
}

export default Photography;


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
padding-top:3rem;
width:65%;
padding-bottom:2rem;
margin: 0 auto;
font-size:1.8rem;
letter-spacing:2px;
text-shadow:5px 3px 20px black;

`




const CenterDiv = styled.div`
color:black;
background-color:#000080;
padding:1.2%;
padding-bottom:10rem;
`

const HeaderTwo = styled.h2`
color:white;
width:75%;
margin:auto;
text-align:center;
padding-bottom:3rem;
padding-top:5%;
border-bottom: solid 1.5px darkgrey;
font-weight:bold;
font-size:35px;
letter-spacing: 2px;
`

const ParagraphTwo = styled.p`
padding-top:3rem;
text-align: center;
color:white;
width:75%;
margin:auto;
font-size:18px;
letter-spacing:2px;
`

const Social = styled.div`
background-color:#2c333a;
display:flex;
flex-wrap:wrap;
width:100%;
justify-content:center;

`

const Twitter = styled.button`
border:white;
padding:3rem;
margin:3rem;
background:url('https://img.icons8.com/ios/72/twitter--v1.png') no-repeat center;
background-size:4rem;
`

const Facebook = styled.button`
border:white;
padding:3rem;
margin:3rem;
background:url('https://img.icons8.com/ios/72/facebook-new.png') no-repeat center;
background-size:4rem;
`

const Instagram = styled.button`
border:white;
padding:3rem;
margin:3rem;
background:url('https://img.icons8.com/ios/72/instagram-new--v1.png') no-repeat center;
background-size:4rem;
`




const Email = styled.button`
border:white;
padding:3rem;
margin:3rem;
background:url('https://img.icons8.com/ios/72/email.png') no-repeat center;
background-size:4rem;
`