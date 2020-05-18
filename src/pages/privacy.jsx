import React from 'react';
import styled from '@emotion/styled';
import { Layout } from 'layouts';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import Privacy  from '../components/privacy/privacy';


const Spacer = styled.div`
  height: 20px;
`;

const PrivacyPage = () => {
  return (
    <Layout>
      <Helmet title={'Contact'} defer={false} />
      <Header title="Privacy Policy" />
        <Privacy/>
      <Spacer />
    </Layout>
  );
};

export default PrivacyPage;
