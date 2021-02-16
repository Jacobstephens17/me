import react from 'react'
import styled from 'styled-components'

const ContactInfo = () => {

    return(
        <Social>
            <Instagram href="https://www.instagram.com/jacobstephens_/"/>
            <GitHub href='https://github.com/Jacobstephens17'/>
            <LinkedIn href="https://www.linkedin.com/in/jacobstephens17/"/>
            <Email href='mailto:jacobstephens.work@gmail.com'/>
        </Social>
        )
}

export default ContactInfo;



   
const Social = styled.div`
  background-color:#2c333a;
  display:flex;
  flex-wrap:wrap;
  width:100%;
  justify-content:center;
    
`
    
const GitHub = styled.a`
  border:white;
  padding:3rem;
  margin:3rem;
  background:url('https://img.icons8.com/material-sharp/344/github.png') no-repeat center;
  background-size:4rem;
`
    
const LinkedIn = styled.a`
  border:white;
  padding:3rem;
  margin:3rem;
  background:url('https://www.flaticon.com/svg/vstatic/svg/2111/2111532.svg?token=exp=1613442612~hmac=dd0f819f88162bb024bdf0333b94ae34') no-repeat center;
  background-size:4rem;
`
    
const Instagram = styled.a`
  border:white;
  padding:3rem;
  margin:3rem;
  background:url('https://img.icons8.com/ios/72/instagram-new--v1.png') no-repeat center;
  background-size:4rem;
`
    
const Email = styled.a`
  border:white;
  padding:3rem;
  margin:3rem;
  background:url('https://img.icons8.com/ios/72/email.png') no-repeat center;
  background-size:4rem;
`

