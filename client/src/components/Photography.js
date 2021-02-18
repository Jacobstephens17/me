import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoCarousel from './PhotoCarousel'
import ContactInfo from './ContactInfo'



function url(path){
    return process.env.NODE_ENV === "development" ? `http://localhost:1234${path}` : path
  }


function Photography (){
    const [photos, setPhotos] = useState()
    useEffect(() => {
        fetch(url('/api/'))
        .then(res => res.json())
        .then(apiData => setPhotos(apiData.data))
       },[])
    return(

        <StyledHome>
            <TopOfPage>
                <HeaderOne>PHOTOGRAPHY</HeaderOne>
                <Paragraph>HERE ARE SOME PHOTOS I HAVE TAKEN</Paragraph>
            </TopOfPage>


            <PhotoAPI>Photo API = {photos}, but empty. Waiting for Jacob to build personal photo api...</PhotoAPI>

            <CenterDiv>
                <HeaderTwo>“Taking pictures is savoring life intensely, every hundredth of a second.” <br/> -Marc Riboud</HeaderTwo>
            </CenterDiv>

            <PhotoCarousel/>

          <ContactInfo/>


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
    display:flex;
    flex-wrap:wrap;
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
    font-size:60px;
    text-shadow:5px 3px 30px black;

`

<<<<<<< HEAD
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
=======
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
>>>>>>> aeb4ffc73a3858645d4762f4200cfce7bd1d88bd

`

const PhotoAPI = styled.div`
    padding:3rem;
    display:flex;
    flex-wrap:wrap;
    height:2rem;
    width:auto;
    color:white;
`



const CenterDiv = styled.div`
    color:black;
    background-color:#000080;
    padding:4rem;
`

const HeaderTwo = styled.h2`
    color:white;
    width:75%;
    margin:auto;
    text-align:center;
    font-weight:bold;
    font-size:25px;
    letter-spacing: 2px;
`
