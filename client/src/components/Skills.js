import React from 'react'
import styled from 'styled-components'
import '../App.css'

import { gsap } from 'gsap'
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
const Skills = ()=> {


    return(
        <StyledPage>

            <Header className='skillsHeader'>Skills</Header>
                <SectionHead className='frontendHeader'>Front End</SectionHead>
            <FrontEnd>
                <Card className='card'>
                    <Content>HTML5</Content>
                </Card>

                <Card className='card'>
                    <Content>GSAP</Content>
                </Card>

                <Card className='card'>
                    <Content>CSS</Content>
                </Card>

                <Card className='card'>
                    <Content>React.js</Content>
                </Card>

                <Card className='card'>
                    <Content>JavaScript</Content>
                </Card>

                <Card className='card'>
                    <Content>React Native</Content>
                </Card>

                <Card className='card'>
                    <Content>SwiftUI</Content>
                </Card>

                <Card className='card'>
                    <Content>Ant Design</Content>
                </Card>

                <Card className='card'>
                    <Content>Axios</Content>
                </Card>

                <Card className='card'>
                    <Content>Redux</Content>
                </Card>

                <Card className='card'>
                    <Content>npm</Content>
                </Card>

                <Card className='card'>
                    <Content>expo</Content>
                </Card>

                <Card className='card'>
                    <Content>Styled Components</Content>
                </Card>

                <Card className='card'>
                    <Content>Single Page Applications</Content>
                </Card>

                <Card className='card'>
                    <Content>yarn</Content>
                </Card>

                <Card className='card'>
                    <Content>Three.js</Content>
                </Card>

                <Card className='card'>
                    <Content>WebGL</Content>
                </Card>

                <Card className='card'>
                    <Content>react-three-fiber</Content>
                </Card>

                <Card className='card'>
                    <Content>drei</Content>
                </Card>
            </FrontEnd>



            <SectionHead className='backendSkills'>Back End</SectionHead>
            <BackEnd>

                <Card className='card'>
                    <Content>Node.js</Content>
                </Card>

                <Card className='card'>
                    <Content>Express</Content>
                </Card>

                <Card className='card'>
                    <Content>Express MiddleWare</Content>
                </Card>

                <Card className='card'>
                    <Content>SQL / SQLite Studio</Content>
                </Card>

                <Card className='card'>
                    <Content>Relational Databases</Content>
                </Card>

                <Card className='card'>
                    <Content>knex.js</Content>
                </Card>

                <Card className='card'>
                    <Content>Asynchronous JavaScript</Content>
                </Card>

                <Card className='card'>
                    <Content>Data Modeling</Content>
                </Card>

                <Card className='card'>
                    <Content>PostgreSQL</Content>
                </Card>

                <Card className='card'>
                    <Content>pgAdmin 4</Content>
                </Card>

                <Card className='card'>
                    <Content>Ruby on Rails</Content>
                </Card>

                <Card className='card'>
                    <Content>CloudKit</Content>
                </Card>

                <Card className='card'>
                    <Content>Django</Content>
                </Card>

            </BackEnd>


            <SectionHead className='computerScience'>Computer Science</SectionHead>
            <CS>
                <Card>
                    <Content>Python</Content>
                </Card>

                <Card>
                    <Content>Space/Time Complexity</Content>
                </Card>

                <Card>
                    <Content>Character Encoding</Content>
                </Card>


            </CS>


            <SectionHead className='deployment'>Deployment</SectionHead>
            <Deployment>
                <Card className='card'>
                    <Content>Heroku</Content>
                </Card>

                <Card className='card'>
                    <Content>Netlify</Content>
                </Card>

                <Card className='card'>
                    <Content>Vercel</Content>
                </Card>

            </Deployment>


            <SectionHead className='testing'>Testing</SectionHead>
            <Testing>
                <Card>
                    <Content>Jest</Content>
                </Card>
                <Card>
                    <Content>Cypress</Content>
                </Card>
            </Testing>


            <SectionHead className='operatingSystem'>Operating Systems</SectionHead>
            <OperatingSystems>
                <Card className='card'>
                    <Content>MacOS</Content>
                </Card>
                <Card className='card'>
                    <Content>Windows</Content>
                </Card>
                <Card className='card'>
                    <Content>Linux</Content>
                </Card>
            </OperatingSystems>


            <SectionHead className='other'>Other</SectionHead>
            <Other>
                <Card className='card'>
                    <Content>Git/GitBash</Content>
                </Card>
                <Card className='card'>
                    <Content>GitHub</Content>
                </Card>
                <Card className='card'>
                    <Content>Command Line</Content>
                </Card>
            </Other>

        </StyledPage>
        )
}

export default Skills;


gsap.to(".card", { rotation:360, x: 0, y: 0, duration: 2, repeat:2, stagger:1})
// gsap.to(".frontendHeader", { rotation:0, x: 130, y: 50, duration: 2})
// gsap.to(".skillsHeader", { rotation:0, x: -125, y: 100, duration: 2})
// gsap.to(".backendSkills", { rotation:0, x: -130, y: 50, duration: 2})
// gsap.to(".computerScience", { rotation:0, x: 80, y: 40, duration: 2})
// gsap.to(".deployment", { rotation:0, x: -115, y: 40, duration: 2})
// gsap.to(".testing", { rotation:0, x: 140, y: 40, duration: 2})
// gsap.to(".operatingSystem", { rotation:0, x: -75, y: 40, duration: 2})
// gsap.to(".other", { rotation:0, x: 120, y: 40, duration: 2})



const StyledPage = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    max-width:100%;
    background:linear-gradient(
        #2F4F4F
        ,
        #2c333a
        );

`
const Header = styled.h1`
    font-size:3rem;
    text-align:center;
    color:#D2B48C;
    text-shadow:5px 3px 20px black;
`

const SectionHead = styled.h2`
color:#D2B48C;
text-shadow:5px 3px 20px black;
    text-align:center;
    text-decoration:underline;
    

`
const FrontEnd = styled.div`
    display:flex;
    max-width:100%;
    margin:10%;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
`

const BackEnd = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:space-evenly;

`

const CS = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:space-evenly;
`

const Deployment = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:space-evenly;
`

const Testing = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:space-evenly;

`

const OperatingSystems = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:space-evenly;
`


const Other = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:space-evenly;
`




const Card = styled.div`
    display:flex;
    flex-direction:row;
    border:3px solid black;
    border-radius:8px;
    min-width:80px;
    background: conic-gradient(at 0% 30%, red 20%, purple 30%, #1e90ff 40%);
    width:50px;
    height:20px;
    max-height:10px;
    margin:3%;
    padding:3%;
    align-items:center;
    justify-content:space-evenly;

`


const Content = styled.div`
color:#D2B48C;
text-shadow:5px 3px 20px black;
font-size:.8rem;
    text-align:center;
    font-weight:light;
`