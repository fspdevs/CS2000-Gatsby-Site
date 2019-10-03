import React from 'react';
import styled from '@emotion/styled';
import { Layout } from 'layouts';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

const ContactWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Spacer = styled.div`
  
  height: 20px;
`;
const Contact = () => {
  return (
    <Layout>
      <Helmet title={'Contact'} defer={false} />
      <Header title="Contact" />
      <ContactWrap>
        <ContactInfo />
        <ContactForm />
      </ContactWrap>
      <Spacer />
    </Layout>
  );
};

export default Contact;
