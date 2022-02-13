import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
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
      <Button  onClick={() => window.open("https://drive.google.com/file/d/1_zFdNSnSsVmeDftIl95q4U6j_EFUlIcF/view","_blank")} >Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;