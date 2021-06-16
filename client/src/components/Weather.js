import React, { useState } from 'react';
import styled from 'styled-components'
const api = {
  key: "f883f8437f435431b3806c16eb2b9956", 
  base:"https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
  
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {

    if (evt.key === "Enter") {

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)

      .then(res => res.json())

      .then(result => {

        setWeather(result);
        setQuery('');
        console.log(result)

      });

    }

  }
 

  const dateBuilder = (d) =>{

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  

  return (

    <StyledPage>
        <H1>What's The Weather Like?</H1>
      <Center>

        <InputDiv className="searchBox">

          <Input
          type="text"
          className="searchBar"
          placeholder="Enter Your Location..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />

        </InputDiv>
        <Center>

            {(typeof weather.main != "undefined") ? (

            <Content>
                <div className='location'>{weather.name}, {weather.sys.country}</div>
                <div className='date'>{dateBuilder(new Date())}</div>
                {/* <div className='temp'> { Math.round(weather.main.temp) } °C </div> */}
                <div className='temp'> {Math.round(weather.main.temp * 1.8 + 32)} °F  </div>
                <div className='weather'>{weather.weather[0].main}</div>
            </Content>

            ) : ('') }
        </Center>

      </Center>

    </StyledPage>
    
  );
}

export default Weather;


const StyledPage = styled.div`
    max-width:100%;
    height:auto;
    background:linear-gradient(#2F4F4F,#2c333a);
    padding:4rem;
    padding-bottom:10rem;
    color:#D2B48C;
    text-shadow:5px 3px 20px black;
`
const H1 = styled.h1`
    font-size:2rem;
    text-align:center;
`
const Input = styled.input`
    border:.5px solid #D2B48C;;
    border-radius:8px;
    padding:2% 5%;
    text-align:center;
    margin-bottom:2rem;
    background:none;
    

`

const Center = styled.main`
`

const InputDiv = styled.div`
    display:flex;
    justify-content:center;
    background:none;
  
`

const Content = styled.div`
    display:flex;
    flex-direction:column;
    font-size:1.2rem;
    width:80%;
    text-align: center;
    color:#D2B48C;
    text-shadow:5px 3px 20px black;
    margin:0 auto;

`