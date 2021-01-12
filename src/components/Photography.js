import React from 'react';
import styled from 'styled-components';




function Photography (){
    

    return(

        <StyledAbout>

            <TopOfPage>
                <HeaderOne>Photography</HeaderOne>  
                <Paragraph>Here is a portfolio of photos I have taken</Paragraph>
            </TopOfPage>


            <CenterDiv>
                <HeaderTwo>LOREM IPSUM DOLOR SIT AMET</HeaderTwo>
                <ParagraphTwo>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ParagraphTwo>
            </CenterDiv>


            <Social>
                <Twitter/>
                <Facebook/>
                <Instagram/>
                <Email/>
            </Social>


        </StyledAbout>

    )
}

export default Photography;

    const StyledAbout = styled.div`
    
`
    
    const TopOfPage = styled.div`
    background:url('https://images.unsplash.com/photo-1515563139710-9b2ccf0927c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80') no-repeat center;
    width:auto;
    padding:15%;
    background-size:cover;
`
    const HeaderOne = styled.h1`
    color:white;
    text-align:center;
    width:50%;
    text-shadow:5px 3px 30px black;
    margin:15rem auto 0rem auto;
    padding: 1rem 3rem;
    background-color:none;
    font-weight:300;
    font-size:90px;
`
    
    const Paragraph = styled.p`
    text-align: center;
    color:white;
    padding-top:3rem;
    width:65%;
    margin: 0 auto;
    font-size:1.5rem;
    letter-spacing:2px;
    text-shadow:5px 3px 30px black;
`
    
    const CenterDiv = styled.div`
    color:black;
    background-color:white;
    padding:3rem;
`
    
    const HeaderTwo = styled.h2`
    color:black;
    width:75%;
    margin:auto;
    text-align:left;
    padding-bottom:3rem;
    padding-top:5%;
    font-weight:bolder;
    font-size:25px;
    letter-spacing: 2px;
`
    
    const ParagraphTwo = styled.p`
    padding-top:3rem;
    text-align: left;
    color:black;
    width:75%;
    margin:auto;
    font-size:18px;
    letter-spacing:2px;
    padding-bottom:3rem;
`
    
    const Social = styled.div`
    background-color:#2c333a;
    padding:6rem;
    display:flex;
    justify-content:center;
    
`
    
    const Twitter = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/twitter--v1.png') center;
    background-size:2rem;
`
    
    const Facebook = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/facebook-new.png') center;
    background-size:2rem;
`
    
    const Instagram = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/instagram-new--v1.png') center;
    background-size:2rem;
`
    
 
    
    const Email = styled.button`
    border:white;
    padding:1rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/email.png') center;
    background-size:2rem;
`