import React from "react";
import { Helmet } from "react-helmet";
import {Header} from "components";
import {Layout} from "layouts";

  const WhyUs = () => {

    return (
        <>
        <Layout>
        <Helmet title={"Why CS 2000?"}/>
        <Header title="Why Us"> Why CS 2000?</Header>
        </Layout>
        </>
    )
}
export default WhyUs;