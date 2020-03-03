import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 0rem;
  }
`;
const TopSection = styled.div`
  padding-top: 2rem;
  text-align: left;
  margin: 0 auto;
  padding-bottom: 2rem;
  color: ${props => props.theme.colors.white.light};
  background: #0c0e2d;
`;

const TextTop = styled.div`
  padding-top: 2rem;
  max-width: 350px;
  text-align: left;
  margin: 0 auto;
  font-size: 16px;
  padding-bottom: 2rem;
  color: ${props => props.theme.colors.white.light};
  background: #0c0e2d;
`;

const TextBottom = styled.div`
  padding-top: 1rem;
  margin: 0;
  padding-bottom: 1rem;
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <>
    <Wrapper>
      <TopSection>
        <TextTop>
          <Fade bottom>
            <h3
              style={{ borderBottom: '2px solid white', paddingBottom: '10px' }}
            >
              {' '}
              <FontAwesomeIcon
                className="phone-icon"
                icon={faPhoneAlt}
                size="1x"
              />
              Contact
            </h3>

            {/* <p className="footer-text">(610) 291-7722</p> */}
            <p className="footer-text email">info@capitalsource2000.com</p>
          </Fade>
        </TextTop>
      </TopSection>
      <TextBottom>
        <span>
          Capital Source 2000 © 2020
        </span>
      </TextBottom>
    </Wrapper>

    <style jsx>
      {`
        .footer-text {
          margin-bottom: 0px;
        }
        .email {
          color: #768daf;
        }
        .phone-icon {
          margin-right: 10px;
        }
      `}
    </style>
  </>
);
export default Footer;
