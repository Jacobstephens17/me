import React from 'react'
import styled from 'styled-components'
import '../App.css'


const Skills = ()=> {


    return(
        <StyledPage>

            <Header>Skills</Header>
                <SectionHead>Front End</SectionHead>
            <FrontEnd>
                <Card className='card'>
                    <Content>HTML5</Content>
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
                    <Content>Swift</Content>
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

            </FrontEnd>



            <SectionHead>Back End</SectionHead>
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

            </BackEnd>


            <SectionHead>Deployment</SectionHead>
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


            <SectionHead>Testing</SectionHead>
            <Testing>
                <Card>
                    <Content>Jest</Content>
                </Card>
                <Card>
                    <Content>Cypress</Content>
                </Card>
            </Testing>


            <SectionHead>Operating Systems</SectionHead>
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


            <SectionHead>Other</SectionHead>
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


const StyledPage = styled.div`
    display:flex;
    flex-direction:column;
    max-width:100%;
    background-color:#000080;

`
const Header = styled.h1`
    font-size:3rem;
    text-align:center;
    color:white;
`

const SectionHead = styled.h2`
    color:white;
    text-align:center;
    text-decoration:underline;
    

`
const FrontEnd = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:center;
`

const BackEnd = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:center;

`

const Deployment = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:center;
`

const Testing = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:center;

`

const OperatingSystems = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:center;
`


const Other = styled.div`
    display:flex;
    flex-direction:row;
    margin:10%;
    flex-wrap:wrap;
    justify-content:center;
`




const Card = styled.div`
    display:flex;
    flex-direction:row;
    border:3px solid black;
    border-radius:8px;
    width:30%;
    padding:5%;
    margin:3%;
    background-color:#000080;
    align-items:center;
    justify-content:center;

`


const Content = styled.div`
    color:white;
    text-align:center;
    font-weight:bold;
`