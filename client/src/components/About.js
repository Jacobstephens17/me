import React from 'react';
import styled from 'styled-components';
import ContactInfo from './ContactInfo'

function About (){
    

    return(

        <StyledHome>

            <TopOfPage>

                <HeaderOne>PROJECTS</HeaderOne>  
                <Paragraph>ALIQUAM UT EX UT INTERDUM DONEC AMET IMPERDIET ELEIFEND</Paragraph>
           
            </TopOfPage>


            <CenterDiv>

                <HeaderTwo>LOREM IPSUM DOLOR</HeaderTwo>
                <ParagraphTwo>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.</ParagraphTwo>
                <ParagraphTwo>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</ParagraphTwo>
           
            </CenterDiv>

            <CenterDiv>

                <HeaderTwo>FEUGIAT ALIQUAM</HeaderTwo>
                <ParagraphTwo>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</ParagraphTwo>
                <ParagraphTwo>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.</ParagraphTwo>
           
            </CenterDiv>

            <ContactInfo/>
        </StyledHome>


    )
}

export default About;

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

