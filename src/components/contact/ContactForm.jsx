import React, { useState, useEffect, useReducer } from 'react';
import styled from '@emotion/styled';
import { navigateTo } from "gatsby-link";

const H2 = styled.h2`
  border-bottom: 1px ${props => props.theme.colors.parBlue.light} solid;
  padding-bottom: 10px;
`;
const FormWrap = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 800px;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 75%;
  @media (max-width: 515px) {
    font-size: 14px;
    margin-left: 15px;
  }
`;

const StyledArea = styled.textarea`
  margin: 10px;
  border: 2px ${props => props.theme.colors.parBlue.light} solid;
  height: 220px;

  :hover {
    border: 1px ${props => props.theme.colors.parBlue.light} solid;
    padding: 5px;
  }
  :focus {
    outline: aliceblue;
    outline-offset: 5px;
    outline-style: ridge;
    outline-color: ${props => props.theme.colors.parBlue.light};
    outline-width: thin;
  }
`;
const StyledInput = styled.input`
  padding: 5px;
  margin: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px ${props => props.theme.colors.parBlue.light} solid !important;
  :hover {
    border: 1px ${props => props.theme.colors.parBlue.light} solid;
  }

  :focus {
    outline: aliceblue;
    outline-offset: 5px;
    outline-style: ridge;
    outline-color: ${props => props.theme.colors.parBlue.light};
    outline-width: 3px;
  }
`;

const StyledButton = styled.button`
  align-self: center;
  margin: 10px;
  width: 33%;
  border-radius: 20px;
  :hover {
    border: 1px ${props => props.theme.colors.parBlue.light} solid;
    padding: 5px;
    background-color: #4492c9;
  }

  :focus {
    outline: aliceblue;
    outline-offset: 5px;
    outline-style: ridge;
    outline-color: chartreuse;
    outline-width: thin;
  }

  @media (max-width: 515px) {
    font-size: 14px;
  }
`;

export const ContactForm = () => {
  // function that maps through the data that will be sent through netlify
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [subject, setSubject] = useState('')
  // const [message, setMessage] = useState('')

  const [state, updateState] = useReducer(
    (state, newstate) => ({ ...state, ...newstate }),
    { name: '', email: '', subject: '', message: '' }
  );

  const { name, email, subject, message } = state;

  // TODO: Add logic to send form data
  function submission(e) {
    e.preventDefault();
    console.log(name, email, subject, message);
    if (state) {
      console.log(state, 'this is state');
      //if state is populated send data to netlefy
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...state,
        }),
      })
        // then go to thank you page
        .then(() => navigateTo('/'))
        .catch(error => alert(error));
    }
  }

  return (
    <>
      <FormWrap>
        {/* TODO: Add attributes and hidden elements to point towards Netlify */}
        <StyledForm onSubmit={submission}  className="form"
            data-netlify-honeypot="bot-field"
            method="post"
            action="/"
            data-netlify="true"
            name="contact">
          {/* <form
            className="form"
            data-netlify-honeypot="bot-field"
            method="post"
            action="/"
            data-netlify="true"
            name="contact"
          > */}
            <H2>Keep In Touch</H2>

            {/* netlify form configuration hidden inputs */}
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <StyledInput
              name="name"
              value={name}
              placeholder="Your Name"
              label="Name"
              type="text"
              onChange={e => updateState({ name: e.target.value })}
            />
            <StyledInput
              name="email"
              value={email}
              placeholder="Your Email"
              label="Email"
              type="email"
              onChange={e => updateState({ email: e.target.value })}
            />
            <StyledInput
              name="subject"
              value={subject}
              placeholder="Subject"
              label="Subject"
              type="text"
              onChange={e => updateState({ subject: e.target.value })}
            />
            <StyledArea
              type="textarea"
              name="message"
              value={message}
              placeholder="Your Message"
              label="Message"
              type="text"
              onChange={e => updateState({ message: e.target.value })}
            />
            <StyledButton type="submit">Submit</StyledButton>
          {/* </form> */}
        </StyledForm>
      </FormWrap>
    </>
  );
};
