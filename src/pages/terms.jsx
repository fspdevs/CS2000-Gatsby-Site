import React from 'react';
import styled from '@emotion/styled';
import { Layout } from 'layouts';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import  Terms  from '../components/terms/terms';


const Spacer = styled.div`
  height: 20px;
`;

const TermsPage = () => {
  return (
    <Layout>
      <Helmet title={'Contact'} defer={false} />
      <Header title="Terms & Conditions" />
        <Terms/>
      <Spacer />
    </Layout>
  );
};

export default TermsPage;
