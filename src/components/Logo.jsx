import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  img {
    width: 4rem;
    height: auto;
    display: block;
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3, // 0
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        {/* <img src={star} alt="TeenShopify" /> */}
        <motion.img
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          src={process.env.PUBLIC_URL + '/logo.jpg'}
          alt="TeenShopify"
        />

        <Text variants={textVariants} initial="hidden" animate="visible">
          TeenShopify
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
