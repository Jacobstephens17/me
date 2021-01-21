import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const KanyeQuote = () => {
    
    const [quote, setQuote] = useState();
    
    const quoteRequest = () => {
        axios
            .get('https://api.kanye.rest')
            .then((res) => {
                console.log(res.data.quote);
                setQuote(res.data.quote)
            })
    }
    const handleClick = () => {
        quoteRequest();
    }
    return (
        <StyledDiv>
            <H1>Sometimes you just need a little inspiration...</H1>
            <P>Click below for a quote from Kanye West</P>
            <Button onClick={handleClick}>Get Quote</Button>
            <Card>
                "{quote}" 
                <br/>
                - Kanye West
            </Card>
        </StyledDiv>
    )
}

export default KanyeQuote;


const StyledDiv = styled.div`
display:flex;
flex-direction:column;
margin:5rem;

`
const H1 = styled.h1`
color:white;
text-align:center;
`

const P = styled.p`
color:white;
text-align:center;
`

const Button = styled.button`
padding:1rem 1.5rem;
border-radius:8px;
font-size:1rem;
font-weight:bolder;
margin-top:2rem;
`
const Card = styled.div`
border:#000080 2px solid;
border-radius:8px;
padding:3rem;
margin:2rem;
color:white;
text-align:center;
font-weight:bolder;
font-size:2rem;
`