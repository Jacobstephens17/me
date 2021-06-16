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
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;
    margin:0 auto;
    align-items:center;
    padding-top:3rem;
    padding-bottom:3rem;
    background:linear-gradient(#2c333a, #2F4F4F);
`

const Button = styled.button`
color:#D2B48C;
    background:none;
    border:1px solid #D2B48C;
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
    font-size:2rem;
    color:#D2B48C;
    text-align:center;
    margin:1rem;

`

const H1 = styled.h1 `
color:#D2B48C;
    font-size:16px;

`

const P = styled.p`

    color:#D2B48C;
    border:2px solid #D2B48C;
    margin:2rem;
    padding:1rem;
`