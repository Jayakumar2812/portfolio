/* Updated Technologies.js */
import React from 'react';
import { DiFirebase, DiReact, DiRust } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>My Tech Stack</SectionText>
  <List>
    <ListItem>
      <DiRust size="3rem" />
      <ListContainer>
        <ListTitle>Languages</ListTitle>
        <ul>
          <li>Solidity</li>
          <li>Yul</li>
          <li>Rust</li>
          <li>Python</li>
          <li>JavaScript</li>
        </ul>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Frameworks</ListTitle>
        <ul>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Ether.js</li>
          <li>Web3.js</li>
        </ul>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ul>
          <li>Truffle</li>
          <li>Hardhat</li>
          <li>Remix</li>
          <li>Foundry</li>
          <li>Slither</li>
          <li>Echidna</li>
        </ul>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
