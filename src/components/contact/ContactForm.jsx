import React, { useState, useEffect, useReducer } from 'react';
import styled from '@emotion/styled';

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
`;

const StyledArea = styled.textarea`
  margin: 10px;
  border: 2px ${props => props.theme.colors.parBlue.light} solid;

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
    background-color: #bcffa7;
  }
  :focus {
    outline: aliceblue;
    outline-offset: 5px;
    outline-style: ridge;
    outline-color: chartreuse;
    outline-width: thin;
  }
`;

export const ContactForm = () => {
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
    }
  }

  return (
    <>
      <FormWrap>
        {/* TODO: Add attributes and hidden elements to point towards Netlify */}
        <StyledForm onSubmit={submission} >
          <H2>Keep In Touch</H2>
          <StyledInput
            name="name"
            value={name}
            placeholder="Your Name"
            label="Name"
            onChange={e => updateState({ name: e.target.value })}
          />
          <StyledInput
            name="email"
            value={email}
            placeholder="Your Email"
            label="Email"
            onChange={e => updateState({ email: e.target.value })}
          />
          <StyledInput
            name="subject"
            value={subject}
            placeholder="Subject"
            label="Subject"
            onChange={e => updateState({ subject: e.target.value })}
          />
          <StyledArea
            type="textarea"
            name="message"
            value={message}
            placeholder="Your Message"
            label="Message"
            onChange={e => updateState({ message: e.target.value })}
          />
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </FormWrap>
    </>
  );
};
