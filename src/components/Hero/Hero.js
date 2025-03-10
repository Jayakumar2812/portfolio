import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hey There, I’m Jayakumar, <br/>
      </SectionTitle>
      <SectionText>
       a Smart Contract Engineer passionate about blockchain security, automated auditing, and DeFi innovations.
      I specialize in contract security automation, bytecode analysis, fuzzing and NFT solutions.
      Helping secure Web3 applications through cutting-edge research and tooling. 🚀
        </SectionText>
      <a href='/JAYAKUMAR_RESUME.pdf' download="JAYAKUMAR_RESUME.pdf" > 
      <Button> Download Resume </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
