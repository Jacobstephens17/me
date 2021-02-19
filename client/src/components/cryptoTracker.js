import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';



const CryptoTracker = () => {

  let initialData = {}
  let indiv = {}

  const [currencyData, setCurrencyData] = useState(initialData)

  const [currency, setCurrency] = useState(indiv)
  
  const getMarketData = () => {
      axios
        .get('https://api.coingecko.com/api/v3/global')
        .then(res => {

        const recievedData = res.data.data;

        const marketCap = res.data.data.market_cap_percentage;


        console.log(marketCap)
        console.log(recievedData);


        setCurrencyData(recievedData)
        setCurrency(marketCap)
        
        }).catch(error => {
          console.log(error);
        });
      }



  return (
    <StyledPage >
    <Header>Interested in CryptoCurrencies? Check the current price for different coins below!</Header>
      
     <Button onClick={getMarketData}>Get Currency Data</Button>
      <H1>Active Crypto Currencies: {currencyData.active_cryptocurrencies}</H1>
      <H1>Market Cap Change Percentage (24HRS): {currencyData.market_cap_change_percentage_24h_usd}</H1>
      <H1>Markets: {currencyData.markets}</H1>
      <H1>Ongoing Initial Coin Offering: {currencyData.ongoing_icos}</H1>
      <H1>Ended InitialCoin Offering: {currencyData.ended_icos}</H1>
      <H1>Upcoming Initial Coin Offering: {currencyData.upcoming_icos}</H1>

      <Header>Individual Coin Market Cap: </Header>
      <CryptoDiv>
          <P>ADA: ${currency.ada}</P>
          <P>BCH: ${currency.bch}</P>
          <P>BTC: ${currency.btc}</P>
          <P>ETH: ${currency.eth}</P>
          <P>LINK: ${currency.link}</P>
          <P>LTC: ${currency.ltc}</P>
          <P>USDT:${currency.usdt}</P>
          <P>XRP: ${currency.xrp}</P>
      </CryptoDiv>

    </StyledPage>
  );
}


export default CryptoTracker;



const StyledPage = styled.div`
padding:3rem; 
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:black;
`

const Button = styled.button`
color:white;
background:none;
border:1px solid white;
border-radius:8px;
padding:2rem;
margin:3rem;
font-size:1rem;

`

const CryptoDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
flex-wrap:wrap;
justify-content:space-evenly;

`

const Header = styled.h1`
    font-size:3rem;
    color:white;
    text-align:center;

`

const H1 = styled.h1 `
color:white;
font-size:16px;

`

const P = styled.p`

color:white;
border:1px solid white;
margin:2rem;
padding:1rem;
`