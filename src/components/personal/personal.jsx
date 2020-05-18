import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 75px;
  max-width: 1366px;
`;

const H1 = styled.h1`
//   border-bottom: 2px solid #4492c9;
  padding-bottom: 10px;
  text-align: center;
`;
export const TH = styled.th`
  background: grey;
  color: white;
  padding: 20px !important;
  border: 1px solid black;
  background: #4492c9;
`;

export const TDDark = styled.td`
  color: white;
  width: 150px;
  text-align: center;
  background: #4492c9;
  border: 1px solid black
`;

export const TD = styled.td`
  border: 1px solid black;
  padding: 20px !important;
`;

export const Table = styled.table`
  margin-bottom: 0px;
  border: 1px solid black;
`;

const Personal = () => {
  return (
    <>
      <Wrapper>
        <H1>
          {' '}
          What does Capital Source 2000 do with your personal information?{' '}
        </H1>
        <Table>
          <tr>
            <TDDark>Why?</TDDark>
            <TD>
              Financial companies collect and sometimes share personal
              information to underwrite funding services and prevent fraudulent
              activities on accounts. While Federal law gives consumers the
              right to limit some sharing, these laws don’t always extend to
              business transactions. This notice should help you to understand
              what we do.
            </TD>
          </tr>
          <tr>
            <TDDark>What?</TDDark>
            <TD>
              The types of information we collect and share in processing &amp;
              underwriting depends on the level of funding and service you apply
              for. This information can include:
              <br></br>
              <ul>
                <li>
                  Social Security number, birthdates, driver’s licenses and
                  account balances
                </li>
                <li>
                  ACH transactions, business receipts personal and business
                  credit histories
                </li>
                <li>
                  Banking account transactions, real estate holdings and other
                  account information
                </li>
              </ul>
            </TD>
          </tr>
          <tr>
            <TDDark>How?</TDDark>
            <TD>
              All financial companies need to share customers&#39; personal
              information to keep their everyday business running smoothly. In
              the section below, we list the reasons financial companies share
              customer information; the reasons Capital Source 2000 chooses to
              share; and whether you can limit this sharing.
            </TD>
          </tr>
        </Table>

        <Table>
          <tr>
            <TH>Reason information is shared</TH>
            <TH>Does Capital Source 2000 Share?</TH>
            <TH>Can you limit this sharing?</TH>
          </tr>
          <tr>
            <TD>
              <strong>For everyday business purposes</strong> - such as to
              underwrite and process ACH transactions, maintain your account(s),
              respond to court orders and legal investigations, and/or report to
              credit bureaus
            </TD>
            <TD>Yes</TD>
            <TD>No</TD>
          </tr>
          <tr>
            <TD>
              <strong>For internal marketing purposes</strong> - to offer our
              products and services to you
            </TD>
            <TD>Yes</TD>
            <TD>No</TD>
          </tr>
          <tr>
            <TD>
              <strong>
                For joint marketing with other financial companies
              </strong>
            </TD>
            <TD>No</TD>
            <TD>We don't share</TD>
          </tr>
          <tr>
            <TD>
              <strong>
                For our affiliates&#39; everyday business purposes -
              </strong>
              information about your creditworthiness
            </TD>
            <TD>No</TD>
            <TD>We don't share</TD>
          </tr>
          <tr>
            <TD>
              <strong>For our affiliates to market to you</strong>
            </TD>
            <TD>Yes</TD>
            <TD>Yes</TD>
          </tr>
          <tr>
            <TD>
              <strong>For non-affiliates to market to you</strong>
            </TD>
            <TD>No</TD>
            <TD>We don't share</TD>
          </tr>
        </Table>

        <Table>
          <tr>
            <TDDark>To limit our sharing</TDDark>
            <TD>
              Call (215) 613-4126 or send an email to
              info@capitalsource2000.com
              <br></br>
              <strong>Please note:</strong>
              <br></br>
              If you are a new customer, we can begin sharing your information
              30 days from the date of funding. When you are no longer our
              customer, we may still continue to share your information as
              described in this notice.
              <br></br>
              However, you can contact us at any time to limit our sharing.
            </TD>
          </tr>
          <tr>
            <TDDark>Questions?</TDDark>
            <TD>
              Call (215) 613-4126 or go to www.capitalsource2000.com
            </TD>
          </tr>
        </Table>

        <Table>
          <tr>
            <TH>Who We Are</TH>
            <TH></TH>
          </tr>
          <tr>
            <TD>Who is providing this notice?</TD>
            <TD>Capital Source 2000</TD>
          </tr>
          <tr>
            <TH>What we do</TH>
            <TH></TH>
          </tr>
          <tr>
            <TD>
              How does Capital Source 2000 protect my personal information?
            </TD>
            <TD>
              To protect your personal information from unauthorized access and
              use, we use security measures that comply with federal law. These
              measures include computer safeguards, secured files and
              facilities.
            </TD>
          </tr>
          <tr>
            <TD>
              How does Capital Source 2000 collect my personal information?
            </TD>
            <TD>
              <p>We collect your information, for example, when you</p>
              <ul>
                <li>Apply for funding and give us your personal information</li>
                <li>
                  Provide underwriting and processing information about your
                  business
                </li>
                <li>
                  Set up ACH payments and/or provide your banking information
                </li>
              </ul>
              We also collect information from others, such as credit bureaus,
              affiliates, or other companies.
            </TD>
          </tr>

          <tr>
            <TD>Why can&#39;t I limit all sharing?</TD>
            <TD>
              <p>
                Federal law applies to consumer, not business transactions, and
                gives you the right to limit only:
              </p>
              <ul>
                <li>
                  sharing for affiliates&#39; everyday consumer account purposes
                </li>
                <li>affiliates from using your information to market to you</li>
                <li>sharing for non-affiliates to market to you</li>
              </ul>
              State laws and individual companies may give you additional rights
              to limit sharing. See below for more on your rights under state
              law.
            </TD>
          </tr>
          <tr>
            <TD>
              What happens when I use my personal credit and identity info to
              apply for business funding?
            </TD>
            <TD>
              Any person listed on an application for business funding agrees
              that they are doing so as a member/officer of the business.
              therefore, laws applying specifically to consumer transactions do
              not apply.
            </TD>
          </tr>
          <tr>
            <TH>Definitions</TH>
            <TH></TH>
          </tr>
          <tr>
            <TD>Affiliates</TD>
            <TD>
              Companies related by contractual agreement, common ownership or
              control. They can be financial and nonfinancial companies.
              <ul>
                <li>
                  <em>
                    Our affiliates include financial companies, as well as
                    processing contractors, collection agents and independent
                    sales organizations.
                  </em>
                </li>
              </ul>
            </TD>
          </tr>
          <tr>
            <TD>Non-affiliates</TD>
            <TD>
              Companies not related by common ownership or control. They can be
              financial and nonfinancial companies who subscribe to services.
              <ul>
                <li>
                  <em>
                    Capital Source 2000 does not share with non-affiliates so
                    they can market to you.
                  </em>
                </li>
              </ul>
            </TD>
          </tr>

          <tr>
            <TD>Joint marketing</TD>
            <TD>
              A formal agreement between non-affiliated financial companies that
              together market financial products or services to you.
              <ul>
                <li>
                  <em>
                    Our joint marketing partner(s) include brokerage companies,
                    a merchant servicing company and a credit card company.
                  </em>
                </li>
              </ul>
            </TD>
          </tr>
        </Table>

        <Table>
          <tr>
            <TH>Other important information</TH>
          </tr>
          <tr>
            <TD>
              <p>
                <strong>Special Notice For California Residents</strong>
              </p>
              <p>
                We will not share personal information with non-affiliates
                either for them to market to you or for joint marketing -
                without your authorization. We will also limit our sharing of
                personal information about you with our affiliates to comply
                with all California privacy laws that apply to us.
              </p>

              <p>
                <strong>Special Notice For Vermont Residents</strong>
              </p>
              <p>
                We will not disclose information about your creditworthiness to
                our affiliates and will not disclose your personal information,
                financial information, credit report, or health information to
                nonaffiliated third parties to market to you, other than as
                permitted by Vermont law, unless you authorize us to make those
                disclosures.
              </p>

              <p>
                <strong>Special Notice For State Residents</strong>
              </p>
              <p>
                <strong>
                  For Alaska, Illinois, Maryland and North Dakota Customers.
                </strong>{' '}
                We will not share personal information with non-affiliates
                either for them to market to you or for joint marketing -
                without your authorization.
              </p>
              {/* <br></br> */}

              <p>
                <strong>
                  For Massachusetts, Mississippi and New Jersey Customers.
                </strong>{' '}
                We will not share personal information from deposit or share
                relationships with non-affiliates either for them to market to
                you or for joint marketing without your authorization.
              </p>

              <p>
                <strong>International Privacy Statement</strong>
              </p>

              <p>
                <strong>Marketing</strong>
              </p>
              <p>
                For European Union residents, we undertake marketing only with
                your expressive affirmative consent and in compliance with
                applicable data privacy laws. EU residents will not be added to
                the marketing lists unless they have already provided express
                affirmative consent consistent with applicable data protection
                laws. In general, we do not seek to offer goods and services in
                the EU, and we do not market to individuals in the EU unless
                they have expressly requested information about our financial
                products or services.
              </p>

              <p>
                <strong>EU Data Right to be Forgotten</strong>
              </p>
              <p>
                Individuals in Europe may have certain data subject rights which
                may be subject to limitations and/or restrictions. These rights
                may include the right to: (i) request access to and
                rectification or erasure of their personal data; (ii) obtain
                restriction of processing or to object to processing of their
                personal data; and (iii) the right to data portability. If you
                wish to exercise one of the above mentioned rights, please call
                us at (610) 291-7722. Individuals in Europe may also have the
                right to lodge a complaint about the processing of their
                personal data with their local data protection authority.
              </p>

              <p>
                <strong>Access</strong>
              </p>
              <p>
                In addition to the rights above, Capital Source 2000 is
                committed to providing all individuals with access to their
                personal data. If you believe that Capital Source 2000 may be
                processing data about you and wish to have access to that
                information, we can provide you with that data or at least an
                explanation of why we cannot do so in the particular context,
                such as if responding to the request would be unreasonably
                expensive.
              </p>

              <p>
                <strong>Other Privacy Statement</strong>
              </p>
              <p>
                Additional information concerning our privacy policies can be
                found at www.capitalsource2000.com or call (215) 613-4126
              </p>
            </TD>
          </tr>
        </Table>
      </Wrapper>
      <style jsx>{``}</style>
    </>
  );
};

export default Personal;
