import React from 'react';
import styled from '@emotion/styled';
import { Layout } from 'layouts';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import Personal  from '../components/personal/personal';


const Spacer = styled.div`
  height: 20px;
`;

const PersonalPage = () => {
  return (
    <Layout>
      <Helmet title={'Contact'} defer={false} />
      <Header title="Personal Information" />
        <Personal/>
      <Spacer />
    </Layout>
  );
};

export default PersonalPage;
