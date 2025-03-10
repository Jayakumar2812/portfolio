import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, BulletList } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

// Prioritize Trugard Labs at the top (Safe Check for 'company')
const reorderedTimeLineData = [
  ...TimeLineData.filter(item => item.company && item.company.includes('Trugard Labs')),
  ...TimeLineData.filter(item => !item.company || !item.company.includes('Trugard Labs'))
];

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / reorderedTimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * reorderedTimeLineData.length);
      setActiveItem(index);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        scroll(carouselRef.current, 0);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  

  return (
    <Section id="about">
      <SectionDivider />
      <br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Driven by curiosity, research, and innovation, I specialize in:
      </SectionText>
      <BulletList>
        <li>Blockchain security, smart contract development, and decentralized applications.</li>
        <li>Contract security automation, bytecode analysis, and transaction tracing, contributing to the detection of <strong>  multi-million dollar scam</strong>.</li>
        <li>Formal verification, fuzzing, and static analysis to enhance smart contract security across EVM-based blockchains.</li>
        <li>Researching and implementing on-chain automation, ERC-998 NFTs, DeFi security frameworks, and scalable smart contract architectures.</li>
        <li>Building security-focused development tools, enhancing testing methodologies, and optimizing blockchain-based infrastructure.</li>
        <li>Beyond tech, I enjoy exploring new ideas through books and blogs, hiking to refresh my mind, and watching anime as a way to appreciate storytelling and creativity.</li>
        <li> Passionate about securing Web3 and continuously pushing the boundaries of blockchain innovation  🚀</li>
      </BulletList>

      {/* Experience Section Header */}
      <SectionTitle>Experience</SectionTitle>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {reorderedTimeLineData.map((item, index) => (
          <CarouselMobileScrollNode
            key={index}
            final={index === TOTAL_CAROUSEL_COUNT - 1}>
            <CarouselItem
              as="button"
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}>
              <CarouselItemTitle>
                {`${item.company}`}
              </CarouselItemTitle>
              <CarouselItemText>
                <strong>{item.position}</strong>
              </CarouselItemText>
              <CarouselItemText>
                {item.year}
              </CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>
      <CarouselButtons>
        {reorderedTimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button">
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;