import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
`;

const GradientText = styled.h1`
  font-size: 2em;
  display: inline-block;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} 5s linear infinite;
`;

const AnimatedGradientText = ({ children }) => {
  return <GradientText>{children}</GradientText>;
};



export default AnimatedGradientText;
