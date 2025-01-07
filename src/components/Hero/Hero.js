import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello!! from the other side. <br/>
      </SectionTitle>
      <SectionText>
        I’m Jayakumar, a Smart Contract Engineer specializing in automated security, NFTs, and decentralized solutions.<br/>
        Excited to connect and collaborate on innovative blockchain technologies! 🚀
        </SectionText>
      <a href='/JAYAKUMAR_RESUME.pdf' download="/JAYAKUMAR_RESUME.pdf" > 
      <Button> Download Resume </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
