import React from 'react';
import { DiFirebase, DiNodejs, DiReact, DiRust, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    Tech stack
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>React js,Next js, HTML5, CSS3</ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>Python, Javascript, Typescript, Rust, Node js, Mongodb, SQL, Github </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiRust size="3rem" />
      <ListContainer>
        <ListTitle>Blockchain</ListTitle>
        <ListParagraph>Solidity, Web3 js, Ether js, Web3 py, Truffle , Hardhat, Brownie, Ganache, Remix, Geth</ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
