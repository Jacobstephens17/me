import React, { useState, useEffect } from 'react'
import Person from '../validationComponents/Person'
import axios from 'axios'
import * as yup from 'yup'
import schema from "../validationComponents/schema";
import Form from '../validationComponents/Form'
import styled from 'styled-components'
import '../App.css'
const emptyForm = {
  username: "",
  email: "",
  password: "",
  tos: false,
}

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialList = [];
const initialDisabled = true;

const UserValidation = () => {
  let [people, setPeople] = useState(initialList); // array of people objects
  const [formValues, setFormValues] = useState(emptyForm); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean



  const getPeople = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setPeople = (res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const postNewPeople = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then((res) => {
      setPeople([res.data, ...people]);
      setFormValues(emptyForm);
    })
    .catch((err) => {
    })
  }

  const inputChange = (name, value) => {

    yup
      .reach(schema, name) 
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newPerson = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    postNewPeople(newPerson);
  };

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <StyledPage>
        <TopOfPage>
            <HeaderOne>Sign Up!</HeaderOne>
            <Paragraph>Fill in the form below!</Paragraph>
        </TopOfPage>
      <Form 
        className='form'
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        ></Form>
        
        <Person className='form'/>
        {people.map((person) => {
            return <Person key = {person.id} details ={person}/>
        })}
    </StyledPage>
  );
}

export default UserValidation;


const StyledPage = styled.div`
    width:100%;
    margin:0 auto;
`
const SignUp = styled.form `
    color:white;
    background-color:white;
`

const TopOfPage = styled.div`
  background:url('https://images.unsplash.com/photo-1515563139710-9b2ccf0927c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80') no-repeat center;
  max-width:100%;
  background-size:cover;
  padding-bottom:8rem;
  height:100%;
`

const HeaderOne = styled.h1`
  color:white;
  text-align:center;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  background-color:none;
  font-weight:30px;
  justify-content:center;
  font-size:70px;
  text-shadow:5px 3px 30px black;
`

const Paragraph = styled.p`
  text-align: center;
  color:white;
  width:65%;
  padding-bottom:2rem;
  margin: 0 auto;
  font-size:1.8rem;
  letter-spacing:2px;
  text-shadow:5px 3px 20px black;
  
  `