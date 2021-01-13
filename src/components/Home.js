import React from 'react';
import styled from 'styled-components';
import GalleryOneImg from '../images/mom.JPG'
import GalleryTwoImg from '../images/tree.JPG'
import GalleryThreeImg from '../images/leeCanyon.JPG'





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

        <IconSpan>
          <MidIconOne/>
          <MidIconTwo/>
          <MidIconThree/>
        </IconSpan>

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
          <GalleryTextSpan>
            <GalleryHeadTwo>Nature Inspired</GalleryHeadTwo>
            <GalleryParTwo>Nature inspires my eye for natural, simplified beauty in all things</GalleryParTwo>
          </GalleryTextSpan>
            <GalleryImg src={GalleryTwoImg} />
        </GalleryTwo>
      


        <GalleryThree>
          <GalleryImg src={GalleryThreeImg} />
          <GalleryTextSpan>
            <GalleryHeadThree>Future Oriented</GalleryHeadThree>
            <GalleryParThree>My objective is to work with a team of like minded people in pursuit of a better tomorrow</GalleryParThree>
          </GalleryTextSpan>
        </GalleryThree>

      </Gallery>



      <BottomDiv>

        <BottomDivHeading>Skills</BottomDivHeading>
        <BottomDivPar>Over the course of my enrollment at Lambda School I have developed the following skills</BottomDivPar>
        <BottomDivContent>

          <BottomDivCard>
            <BottomDivHeadings>HTML 5</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>CSS</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>JavaScript</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>React.js</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>React Native</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>Node.js</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>GitHub</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>MacOS</BottomDivHeadings>
          </BottomDivCard>

          <BottomDivCard>
            <BottomDivHeadings>Windows</BottomDivHeadings>
          </BottomDivCard>

        </BottomDivContent>

      </BottomDiv>

      <Social>
        <Twitter/>
        <Facebook/>
        <Instagram/>
        <Email/>
      </Social>
      


    </StyledHome>

  );

}

export default Home;

    /*Styling Using styled. Components*/


    const StyledHome = styled.div`
    display: flex;
    flex-direction:column;
`
    
    const TopOfPage = styled.div`
    background:url('https://images.unsplash.com/photo-1515563139710-9b2ccf0927c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80') no-repeat center;
    width:auto;
    padding:13%;
    background-size:cover;
`
    
    
    const HeaderOne = styled.h1`
    color:white;
    text-align:center;
    width:50%;
    margin:15rem auto 0rem auto;
    padding: 2rem 3rem 3rem 3rem;
    background-color:none;
    font-weight:300;
    font-size:90px;
    text-shadow:5px 3px 30px black;
 
`
    
    const Paragraph = styled.p` 
    text-align: center;
    color:white;
    padding-top:3rem;
    width:65%;
    padding-bottom:2rem;
    margin: 0 auto;
    font-size:2rem;
    letter-spacing:2px;
    text-shadow:5px 3px 20px black;
    
`
    

    
    
    const CenterDiv = styled.div`
    color:black;
    background-color:#000080;
    padding:1.2%;
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
    
    const IconSpan = styled.span`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-top:3%;
    padding-bottom:3%;
`
    
    const MidIconOne = styled.button`
    display:flex;
    width:auto;
    margin:3%;
    padding:4rem;
    flex-direction:row;
    background-color:#55AFA5;
    border:none;
    justify-content:center;
    background:url('https://www.flaticon.com/svg/vstatic/svg/1384/1384088.svg?token=exp=1610421692~hmac=477f5d67fb0f1398e12b25ab5792b365') no-repeat;
    background-size:5rem;
`
    
    const MidIconTwo = styled.button`
    display:flex;
    width:auto;
    margin:3%;
    padding:4rem;
    flex-direction:row;
    background-color:#55AFA5;
    border:none;
    justify-content:center;
    background:url('https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1610421748~hmac=13f86cf31cb00ebcfa006e3e7284e335') no-repeat;
    background-size:5rem;
`
    
    const MidIconThree = styled.button`
    display:flex;
    width:auto;
    margin:3%;
    padding:4rem;
    flex-direction:row;
    background-color:#55AFA5;
    border:none;
    justify-content:center;
    background:url('https://www.flaticon.com/svg/vstatic/svg/733/733614.svg?token=exp=1610421793~hmac=07a0a6492f405a6e56734199e4e0563c') no-repeat;
    background-size:5rem;
`
    
    const Gallery = styled.div`
    display:flex;
    flex-direction:column;
`
    
    const GalleryOne = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    width:100%;
    background-color:#000000;
    letter-spacing: 2px;
`
    
    const GalleryImg = styled.img`
    height:auto;
    width:65%;
    background-position:cover;
    border-radius:80px;
    padding:2rem;
    padding-top:3rem;
    padding-bottom:3rem;
    position:cover;
`
    const GalleryHeadOne = styled.h2`
    color:#000080;
    text-align:left;
    font-weight:bold;
    font-size:2.5rem;
    letter-spacing:2px;
    width:100%;
`
    
    const GalleryParOne = styled.p`
    color:white;
    text-align:left;
    font-size:1.6rem;
    letter-spacing:2px;
    width:100%;
`
    
    const GalleryTwo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    width:100%;
    background-color:#000000;
`
    
    const GalleryHeadTwo = styled.h2`
    color:#000080;
    text-align:left;
    font-weight:bold;
    font-size:2.5rem;
    letter-spacing:2px;
    width:75%;
`
    
    const GalleryParTwo = styled.p`
    color:white;
    text-align:left;
    font-size:1.6rem;
    letter-spacing:2px;
    width:75%;
`
    
    const GalleryThree = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    width:100%;
    background-color:#000000;
    letter-spacing: 2px;
`
    
    const GalleryHeadThree = styled.h2`
    color:#000080;
    text-align:left;
    font-weight:bold;
    font-size:2.5rem;
    letter-spacing:2px;
    width:75%;
`
    
    const GalleryParThree = styled.p`
    color:white;
    text-align:left;
    font-size:1.6rem;
    letter-spacing:2px;
    width:75%;
`
    
    const GalleryTextSpan = styled.span`
    display:flex;
    flex-direction:column;
    margin-left:4rem;
`
    
    const BottomDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color:#000080;
    padding:5rem;
`
    
    const BottomDivHeadings = styled.h2`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2.5rem;
    letter-spacing: 2px;
    color:white;
`
    
    const BottomDivHeading = styled.h2`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:3rem;
    letter-spacing: 2px;
    color:white;
    margin-bottom:1rem;
    border-bottom:solid 1px #2c333a;
    width:75%;
    padding-bottom:2rem;
`
    
    const BottomDivPar = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.6rem;
    margin: 2rem auto;
    letter-spacing:2px;
    color:white;
    width:75%;
`
    
    const BottomDivContent = styled.h2`
    display:flex;
    align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
    letter-spacing: 2px;
    justify-content:center;
`
    
    const BottomDivCard = styled.div`
    width:25%;
    text-align:center;
    margin:2rem 2rem;
    background-color:#000080;
    border: solid 5px black;
    border-radius:10px;
`
    
    
 
  
    
    const Social = styled.div`
    background-color:#2c333a;
    padding:6rem;
    display:flex;
    justify-content:center;
    
`
    
    const Twitter = styled.button`
    border:white;
    padding:5rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/twitter--v1.png') no-repeat center;
    background-size:4rem;
`
    
    const Facebook = styled.button`
    border:white;
    padding:5rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/facebook-new.png') no-repeat center;
    background-size:4rem;
`
    
    const Instagram = styled.button`
    border:white;
    padding:5rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/instagram-new--v1.png') no-repeat center;
    background-size:4rem;
`
    

    
    
    const Email = styled.button`
    border:white;
    padding:5rem;
    margin:5rem;
    background:url('https://img.icons8.com/ios/72/email.png') no-repeat center;
    background-size:4rem;
`