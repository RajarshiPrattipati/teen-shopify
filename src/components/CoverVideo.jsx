import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/Walking Girl.mp4";
import useIsMobile from "../hooks/useIsMobile";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  height: 100svh; /* better mobile viewport height */
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    height: 100svh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 64em) {
      font-size: calc(4rem + 6vw);
    }
    @media (max-width: 48em) {
      font-size: calc(3rem + 6vw);
    }
    @media (max-width: 30em) {
      font-size: calc(2.25rem + 5vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  const isMobile = useIsMobile(768);
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div>
          {"TeenShopify".split("").map((ch, idx) => (
            <motion.h1
              key={idx}
              variants={item}
              data-scroll={!isMobile ? true : undefined}
              data-scroll-delay={!isMobile ? (0.13 - idx * 0.01).toFixed(2) : undefined}
              data-scroll-speed={!isMobile ? "4" : undefined}
            >
              {ch}
            </motion.h1>
          ))}
        </div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll={!isMobile ? true : undefined}
          data-scroll-delay={!isMobile ? "0.04" : undefined}
          data-scroll-speed={!isMobile ? "2" : undefined}
        >
          inspire. create. belive
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop playsInline />
    </VideoContainer>
  );
};

export default CoverVideo;
