import React, { useReducer } from 'react';
import styled from '@emotion/styled';

const H2 = styled.h2`
  border-bottom: 1px black solid;
  padding-bottom: 10px;
`;
const FormWrap = styled.div`
  padding: 20px;
  width: 100%;
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
  border: 2px ${props => props.theme.colors.parGrey.light} solid;

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
  border-bottom: 2px ${props => props.theme.colors.parGrey.light} solid !important;

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
    background-color: #BCFFA7;
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
  
  return (
    <>
      <FormWrap>
        <StyledForm>
          <H2>Keep In Touch</H2>
          <StyledInput
            name="name"
            value=""
            placeholder="Your Name"
            label="Name"
          />
          <StyledInput
            name="email"
            value=""
            placeholder="Your Email"
            label="Email"
          />
          <StyledInput
            name="subject"
            value=""
            placeholder="Subject"
            label="Subject"
          />
          <StyledArea
            type="textarea"
            name="message"
            value=""
            placeholder="Your Message"
            label="Message"
          />
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </FormWrap>
    </>
  );
};
