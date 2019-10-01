import React from "react";
import styled from "@emotion/styled";
import { Layout } from "layouts";
import {Helmet} from "react-helmet";
import { Header } from 'components';


const Contact = () => {
    return (
        <Layout>
            <Helmet title={"Contact Us"} defer={false} />
            <Header title="Contact Us" />
        </Layout>

    )


}

export default Contact; 