import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello!! from the other side. <br/>
        Allow me to introduce myself.
      </SectionTitle>
      <SectionText>
        I am Jayakumar S, Blockchain Developer ( Public Blockchain ).<br/>
        Area of expertise is De-Fi and NFT.<br/>
        Currently learning ZKP and Metaverse tech.  
      </SectionText>
      <a href='/resume.pdf' download="/resume.pdf" > 
      <Button> Download Resume </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;