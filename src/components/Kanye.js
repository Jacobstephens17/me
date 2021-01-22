import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const KanyeQuote = () => {
    
    const [quote, setQuote] = useState();
    
    const quoteRequest = () => {
        axios
            .get('https://api.kanye.rest')
            .then((res) => {
                console.log(res);
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
                {`${quote} -Kanye West`}
            </Card>
        </StyledDiv>
    )
}

export default KanyeQuote;


const StyledDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center; 
align-items:center;
margin:5rem;

`
const H1 = styled.h1`
color:#000080;
text-align:center;
font-weight:bolder;
`

const P = styled.p`
color:#000080;
text-align:center;
font-weight:bolder;
`

const Button = styled.button`
padding:1rem 1.5rem;
font-size:1rem;
color: #000080;
font-weight:bolder;
border:2px solid #000080;
border-radius:8px;
background:none;
margin-top:2rem;
`
const Card = styled.div`
border-radius:8px;
padding:2rem;
color:#000080;
margin-top:2rem;
display:flex;
flex-wrap:wrap;
width:100%; 
text-align:center;
font-weight:bolder;
font-size:2rem;
`