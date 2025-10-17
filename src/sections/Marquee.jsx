import React from 'react';
import styled from 'styled-components';
import useIsMobile from '../hooks/useIsMobile';

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blue; */
  position: relative;

@media (max-width: 48em){
  width: 90vw;
} 

`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
}
`;

const Banner = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  color: ${(props) => props.theme.text};
  /* position: absolute; */
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em){
    font-size: ${(props) => props.theme.fontxxl};
}
@media (max-width: 64em){
    margin: 1rem 0;
}
 
@media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;

}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontlg};
}

  span {
    display: block;
    background-color: ${(props) => props.theme.body};

    padding: 1rem 2rem;
    
  }
`;

const Marquee = () => {
  const isMobile = useIsMobile(768);
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            data-scroll={!isMobile ? true : undefined}
            data-scroll-direction={!isMobile ? "horizontal" : undefined}
            data-scroll-speed={!isMobile ? "8" : undefined}
            data-scroll-target={!isMobile ? "#direction" : undefined}
          >
            Fashon is an armour
          </span>
        </Banner>
        <Banner data-scroll={!isMobile ? true : undefined} data-scroll-speed={!isMobile ? "-2" : undefined} data-scroll-target={!isMobile ? "#direction" : undefined}>
          <span
            data-scroll={!isMobile ? true : undefined}
            data-scroll-direction={!isMobile ? "horizontal" : undefined}
            data-scroll-speed={!isMobile ? "-6" : undefined}
            data-scroll-target={!isMobile ? "#direction" : undefined}
          >
            To survive everyday life
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll={!isMobile ? true : undefined}
            data-scroll-direction={!isMobile ? "horizontal" : undefined}
            data-scroll-speed={!isMobile ? "6" : undefined}
            data-scroll-target={!isMobile ? "#direction" : undefined}
          >
            One is never over-dressed or
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll={!isMobile ? true : undefined}
            data-scroll-direction={!isMobile ? "horizontal" : undefined}
            data-scroll-speed={!isMobile ? "-4" : undefined}
            data-scroll-target={!isMobile ? "#direction" : undefined}
          >
            under-dressed
          </span>
        </Banner>
        <Banner data-scroll={!isMobile ? true : undefined} data-scroll-speed={!isMobile ? "6" : undefined} data-scroll-target={!isMobile ? "#direction" : undefined}>
          <span
            data-scroll={!isMobile ? true : undefined}
            data-scroll-direction={!isMobile ? "horizontal" : undefined}
            data-scroll-speed={!isMobile ? "6" : undefined}
            data-scroll-target={!isMobile ? "#direction" : undefined}
          >
            with a Little Black Dress.
          </span>
        </Banner>
      </Container>
    </Section>
  );
};

export default Marquee;
