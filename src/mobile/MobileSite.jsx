import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';
import img4 from '../assets/Images/4.webp';
import img5 from '../assets/Images/5.webp';
import img6 from '../assets/Images/6.webp';
import img7 from '../assets/Images/7.webp';
import img8 from '../assets/Images/8.webp';
import img9 from '../assets/Images/9.webp';
import img10 from '../assets/Images/10.webp';

import a1 from '../assets/Images/11.webp';
import a2 from '../assets/Images/12.webp';
import a3 from '../assets/Images/13.webp';
import a4 from '../assets/Images/14.webp';

const Container = styled.div`
  background: ${(p) => p.theme.body};
  color: ${(p) => p.theme.text};
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;

  img { width: 40px; height: 40px; border-radius: 8px; display: block; }
`;

const SectionTitle = styled.h2`
  font-family: 'Kaushan Script';
  font-weight: 300;
  font-size: 1.75rem;
  margin: 1.25rem 1rem 0.75rem;
`;

// Variant 1: Editorial full-bleed stack with gradient captions
const EditorialWrap = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 0 1.5rem;
`;
const EditorialCard = styled(motion.article)`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  margin: 0 1rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.35);
  img { width: 100%; height: auto; display: block; }
  .overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%);
  }
  .caption {
    position: absolute; left: 1rem; right: 1rem; bottom: 0.75rem; z-index: 2;
    display: flex; justify-content: space-between; align-items: flex-end;
  }
  h3 { font-size: 1.25rem; }
  span.badge { font-size: 0.75rem; padding: 0.4rem 0.6rem; border-radius: 999px; background: ${(p) => p.theme.primary}; color: #000; font-weight: 700; }
`;

// Variant 2: Horizontal carousel with scroll snap
const Carousel = styled.div`
  display: grid; grid-auto-flow: column; grid-auto-columns: 85%; gap: 1rem;
  overflow-x: auto; padding: 0 1rem 1.25rem; scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;
const Slide = styled(motion.article)`
  scroll-snap-align: start;
  border-radius: 18px; overflow: hidden; position: relative;
  box-shadow: 0 16px 36px rgba(0,0,0,0.35);
  img{ width: 100%; height: auto; display: block; }
  .label { position: absolute; left: 0.75rem; top: 0.75rem; background: rgba(255,105,180,0.9); color: #000; padding: 0.35rem 0.6rem; font-weight: 700; border-radius: 999px; font-size: .75rem; }
`;

// Variant 3: Masonry collage
const Masonry = styled.div`
  column-count: 2; column-gap: 0.75rem; padding: 0 1rem 1.5rem;
`;
const MasonItem = styled(motion.figure)`
  break-inside: avoid; margin: 0 0 0.75rem; position: relative; overflow: hidden; border-radius: 14px;
  img { width: 100%; height: auto; display: block; }
  figcaption { position: absolute; right: .5rem; bottom: .5rem; background: rgba(0,0,0,.55); padding: .25rem .5rem; border-radius: 999px; font-size: .7rem; }
`;

// New Arrivals Variant 1: Lookbook full-screen cards
const Lookbook = styled.div`
  display: grid; gap: 1rem; padding-bottom: 1.5rem;
`;
const Look = styled(motion.section)`
  margin: 0 1rem; border-radius: 18px; overflow: hidden; position: relative;
  height: 70vh; max-height: 640px; min-height: 420px;
  background: #000;
  img { width: 100%; height: 100%; object-fit: cover; display: block; opacity: .95; }
  .text { position: absolute; left: 1rem; right: 1rem; bottom: 1rem; color: ${(p) => p.theme.white}; }
  h3 { font-family: 'Kaushan Script'; font-size: 1.75rem; text-shadow: 0 2px 10px rgba(0,0,0,.6); }
  p { font-size: .95rem; opacity: .85; }
`;

// New Arrivals Variant 2: Editorial split rows with accent blocks
const SplitCol = styled.div`
  display: grid; gap: 1rem; padding: 0 1rem 1.5rem;
`;
const SplitRow = styled(motion.div)`
  display: grid; grid-template-columns: 1.2fr 1fr; gap: .75rem; align-items: center;
  &:nth-child(even){ grid-template-columns: 1fr 1.2fr; }
  .imgWrap{ position: relative; border-radius: 16px; overflow: hidden; }
  .imgWrap::before{ content: ''; position: absolute; inset: -10%; background: radial-gradient(600px 220px at var(--x, 80%) 50%, rgba(255,105,180,0.25), transparent 60%); z-index: 0; }
  img{ position: relative; z-index: 1; width: 100%; height: 100%; object-fit: cover; display:block; }
  .copy{ padding: .5rem 0; }
  h4{ font-size: 1.2rem; margin-bottom: .25rem; }
  p{ font-size: .85rem; opacity: .85; }
`;

// New Arrivals Variant 3: Stacked cards with fly-away on view
const Stack = styled.div`
  position: relative; padding: 0 1rem 2rem; display: grid; gap: .75rem;
`;
const StackCard = styled(motion.article)`
  border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.35);
  background: linear-gradient(180deg, rgba(255,105,180,0.08), rgba(0,0,0,0.2));
  img{ width: 100%; height: auto; display: block; }
  header{ display:flex; justify-content: space-between; align-items:center; padding: .5rem .75rem; }
  h5{ font-size: 1rem; }
  .tag{ font-size:.7rem; padding:.25rem .5rem; border-radius: 999px; background: ${(p)=>p.theme.primary}; color: #000; font-weight: 700; }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.6, 0.2, 1] } },
};

const MobileSite = () => {
  const collection = [
    { src: img3, title: 'Sweatshirts' },
    { src: img4, title: 'Ethnic Wear' },
    { src: img1, title: 'Man Basics' },
    { src: img2, title: 'Tops' },
    { src: img5, title: 'Blazers' },
    { src: img6, title: 'Suits' },
    { src: img7, title: 'Antiques' },
    { src: img8, title: 'Jewellery' },
    { src: img9, title: 'Watches' },
    { src: img10, title: 'Special Edition' },
  ];

  const arrivals = [
    { src: a1, title: 'Denim' },
    { src: a2, title: 'Cool Dresses' },
    { src: a3, title: 'Jackets' },
    { src: a4, title: 'T-shirts' },
  ];

  return (
    <Container>
      <Header>
        <img width={48} height={48} src={process.env.PUBLIC_URL + '/logo.jpg'} alt="TeenShopify" />
      </Header>

      <SectionTitle>New Collection — Editorial</SectionTitle>
      <EditorialWrap>
        {collection.slice(0, 6).map(({ src, title }, i) => (
          <EditorialCard key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <img src={src} alt={title} />
            <div className="overlay" />
            <div className="caption">
              <h3>{title}</h3>
              <span className="badge">Edit {i + 1}</span>
            </div>
          </EditorialCard>
        ))}
      </EditorialWrap>

      <SectionTitle>New Collection — Carousel</SectionTitle>
      <Carousel>
        {collection.map(({ src, title }, i) => (
          <Slide key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <img src={src} alt={title} />
            <span className="label">{title}</span>
          </Slide>
        ))}
      </Carousel>

      <SectionTitle>New Collection — Collage</SectionTitle>
      <Masonry>
        {collection.map(({ src, title }, i) => (
          <MasonItem key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <img src={src} alt={title} />
            <figcaption>{title}</figcaption>
          </MasonItem>
        ))}
      </Masonry>

      <SectionTitle>New Arrivals — Lookbook</SectionTitle>
      <Lookbook>
        {arrivals.map(({ src, title }, i) => (
          <Look key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <img src={src} alt={title} />
            <div className="text">
              <h3>{title}</h3>
              <p>Discover limited pieces designed to turn heads.</p>
            </div>
          </Look>
        ))}
      </Lookbook>

      <SectionTitle>New Arrivals — Editorial Splits</SectionTitle>
      <SplitCol>
        {arrivals.map(({ src, title }, i) => (
          <SplitRow key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <div className="imgWrap" style={{ '--x': i % 2 ? '20%' : '80%' }}>
              <img src={src} alt={title} />
            </div>
            <div className="copy">
              <h4>{title}</h4>
              <p>High fashion aesthetics with everyday ease. Style, reimagined.</p>
            </div>
          </SplitRow>
        ))}
      </SplitCol>

      <SectionTitle>New Arrivals — Stacked</SectionTitle>
      <Stack>
        {arrivals.map(({ src, title }, i) => (
          <StackCard key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
            <header>
              <h5>{title}</h5>
              <span className="tag">Drop {i + 1}</span>
            </header>
            <img src={src} alt={title} />
          </StackCard>
        ))}
      </Stack>
    </Container>
  );
};

export default MobileSite;
