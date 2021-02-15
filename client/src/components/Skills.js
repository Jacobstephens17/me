import React from 'react'
import styled from 'styled-components'



const Skills = ()=> {


    return(
        <StyledPage>

            <Header>Skills</Header>
                <SectionHead>Front End</SectionHead>
            <FrontEnd>
                <Card>
                    <Content>HTML5</Content>
                </Card>

                <Card>
                    <Content>CSS</Content>
                </Card>

                <Card>
                    <Content>React.js</Content>
                </Card>

                <Card>
                    <Content>JavaScript</Content>
                </Card>

                <Card>
                    <Content>React Native</Content>
                </Card>

                <Card>
                    <Content>Swift</Content>
                </Card>

                <Card>
                    <Content>CSS</Content>
                </Card>

                <Card>
                    <Content>Ant Design</Content>
                </Card>

                <Card>
                    <Content>Axios</Content>
                </Card>

                <Card>
                    <Content>Redux</Content>
                </Card>

                <Card>
                    <Content>npm</Content>
                </Card>

                <Card>
                    <Content>expo</Content>
                </Card>

                <Card>
                    <Content>Styled Components</Content>
                </Card>

                <Card>
                    <Content>Single Page Applications</Content>
                </Card>

            </FrontEnd>



            <SectionHead>Back End</SectionHead>
            <BackEnd>

                <Card>
                    <Content>Node.js</Content>
                </Card>

                <Card>
                    <Content>Express</Content>
                </Card>

                <Card>
                    <Content>Express MiddleWare</Content>
                </Card>

                <Card>
                    <Content>SQL / SQLite Studio</Content>
                </Card>

                <Card>
                    <Content>Relational Databases</Content>
                </Card>

                <Card>
                    <Content>knex.js</Content>
                </Card>

                <Card>
                    <Content>Asynchronous JavaScript</Content>
                </Card>

                <Card>
                    <Content>Data Modeling</Content>
                </Card>

            </BackEnd>


            <SectionHead>Deployment</SectionHead>
            <Deployment>
                <Card>
                    <Content>Heroku</Content>
                </Card>

                <Card>
                    <Content>Netlify</Content>
                </Card>

                <Card>
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
                <Card>
                    <Content>MacOS</Content>
                </Card>
                <Card>
                    <Content>Windows</Content>
                </Card>
                <Card>
                    <Content>Linux</Content>
                </Card>
            </OperatingSystems>


            <SectionHead>Other</SectionHead>
            <Other>
                <Card>
                    <Content>Git/GitBash</Content>
                </Card>
                <Card>
                    <Content>GitHub</Content>
                </Card>
                <Card>
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
    align-items:center;
    justify-content:center;

`

const Content = styled.div`
    color:white;
    text-align:center;
    font-weight:bold;
`