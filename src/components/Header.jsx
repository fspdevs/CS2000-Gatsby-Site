import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.colors.white.base};
  height: 150px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 150px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 150px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.gradient.rightToLeft};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.gradient.rightToLeft};
`;

const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
