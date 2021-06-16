import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const KanyeQuote = () => {

    const [quote, setQuote] = useState();

    const quoteRequest = () => {
        axios
            .get('https://api.kanye.rest')
            .then((res) => {
                // console.log(res);
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
            <Card>{`${quote}`}</Card>
        </StyledDiv>
    )
}

export default KanyeQuote;


const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-content:center;
    justify-items:center;
    padding-bottom:2rem;
    padding-top:2rem;
    background:linear-gradient(
        #2c333a
        ,
        #2F4F4F
        );
    max-width:100%;
`
const H1 = styled.h1`
color:#D2B48C;
text-shadow:5px 3px 20px black;
    text-align:center;
    font-weight:bolder;
    width:90%;
`

const P = styled.p`
color:#D2B48C;
text-shadow:5px 3px 20px black;
    text-align:center;
    font-weight:bolder;
`

const Button = styled.button`
    padding:1rem 1.5rem;
    font-size:1rem;
    color:#D2B48C;
    text-shadow:5px 3px 20px black;
    font-weight:bolder;
    border:2px solid #D2B48C;
    border-radius:8px;
    background:none;
    margin-top:2rem;
`
const Card = styled.div`
    border-radius:8px;
    padding:2rem;
    color:#D2B48C;
    text-shadow:5px 3px 20px black;
    margin-top:2rem;
    display:flex;
    flex-wrap:wrap;
    max-width:100%;
    text-align:center;
    font-weight:bolder;
    font-size:2rem;
    justify-content:center;
`
