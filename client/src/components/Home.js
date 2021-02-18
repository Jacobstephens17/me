import React from 'react'
import styled from 'styled-components'
import GalleryOneImg from '../images/mom.JPG'
import GalleryTwoImg from '../images/tree.JPG'
import GalleryThreeImg from '../images/leeCanyon.JPG'
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



      <CenterDiv>
        <HeaderTwo>Cover Letter</HeaderTwo>
        <ParagraphTwo>My name is Jacob Stephens, I am 23 years old, and am currently enrolled in the Full Stack Web Development Course at Lambda School. The objective of this website is to display the skills that I have learned over the past couple weeks, along with showing off other projects, photographs, ideas and personal hobbies. I am very passionate about technology, design, photography, and a huge fan of constant innovation</ParagraphTwo>
      </CenterDiv>



      <Gallery>

        <GalleryOne>
          <GalleryImg src={GalleryOneImg}/>
          <GalleryTextSpan>
          <GalleryHeadOne>Unique</GalleryHeadOne>
          <GalleryParOne>I have a passion for design, the art of lighting, shadows, and coloring. Experimenting with different combinations can result in happy accidents, like this photo</GalleryParOne>
          </GalleryTextSpan>
        </GalleryOne>



        <GalleryTwo>
            <GalleryImg src={GalleryTwoImg} />
          <GalleryTextSpan>
            <GalleryHeadTwo>Nature Inspired</GalleryHeadTwo>
            <GalleryParTwo>Nature inspires my eye for natural, simplified beauty in all things</GalleryParTwo>
          </GalleryTextSpan>
        </GalleryTwo>



        <GalleryThree>
          <GalleryImg src={GalleryThreeImg} />
          <GalleryTextSpan>
            <GalleryHeadThree>Future Oriented</GalleryHeadThree>
            <GalleryParThree>My objective is to work with a team of like minded people in pursuit of a better tomorrow</GalleryParThree>
          </GalleryTextSpan>
        </GalleryThree>

      </Gallery>

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
  min-width:370px;
`

const TopOfPage = styled.div`
  background:url('https://images.unsplash.com/photo-1515563139710-9b2ccf0927c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80') no-repeat center;
  max-width:100%;
  background-size:cover;
  padding-bottom:8rem;
  height:100%;
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
  color:white;
  background-color:black;
  padding:4rem 2rem;

`

const HeaderTwo = styled.h2`
  color:white;
  width:75%;
  margin: 0 auto;
  text-align:center;
  padding-bottom:3rem;
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
  margin:0 auto;
  font-size:18px;
  letter-spacing:2px;
`

const Gallery = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`

const GalleryOne = styled.div`
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:center;
  flex-direction:row;
  max-width:100%;
  background-color:#000080;
  letter-spacing: 2px;
  padding:2rem;
`

const GalleryImg = styled.img`
  height:auto;
  width:100%;
  background-position:cover;
  position:cover;
  padding-top:3rem;

`

const GalleryHeadOne = styled.h2`
  color:black;
  text-align:center;
  font-weight:bold;
  font-size:2rem;
  margin:0 auto;
  letter-spacing:2px;
  width:100%;
`

const GalleryParOne = styled.p`
  color:white;
  text-align:center;
  font-size:1rem;
  letter-spacing:2px;
  width:100%;
  margin:0 auto;

`

const GalleryTwo = styled.div`
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:center;
  flex-direction:row;
  max-width:100%;
  background-color:#000000;
  letter-spacing: 2px;
  padding:2rem;
`

const GalleryHeadTwo = styled.h2`
  color:#000080;
  text-align:center;
  font-weight:bold;
  font-size:2rem;
  letter-spacing:2px;
  width:100%;
  margin:0 auto;

`

const GalleryParTwo = styled.p`
  color:white;
  text-align:center;
  font-size:1rem;
  letter-spacing:2px;
  width:100%;
  margin:0 auto;

`

const GalleryThree = styled.div`
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:center;
  flex-direction:row;
  max-width:100%;
  background-color:#000080;
  letter-spacing: 2px;
  padding:2rem;
`

const GalleryHeadThree = styled.h2`
  color:black;
  text-align:center;
  font-weight:bold;
  font-size:2rem;
  letter-spacing:2px;
  width:100%;
  margin:0 auto;

`

const GalleryParThree = styled.p`
  color:white;
  text-align:center;
  font-size:1rem;
  letter-spacing:2px;
  width:100%;
  margin:0 auto;

`

const GalleryTextSpan = styled.span`
  display:flex;
  flex-direction:column;
  padding:5rem;
`
