import React from 'react';
import { DiFirebase, DiReact, DiRust } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    Tech stack
  </SectionText>
  <List>
    <ListItem style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"10px"}}>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        {/* <ListParagraph>React js,Next js, HTML5, CSS3</ListParagraph> */}
        <ul>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>React js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Next js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>HTML5</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>CSS3</li>
        </ul>
      </ListContainer>
    </ListItem>
    <ListItem style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"10px"}}>
      <DiFirebase size="3rem" />
      <ListContainer >
        <ListTitle>Back-End</ListTitle>
        {/* <ListParagraph>Python, Javascript, Typescript, Rust, Node js, Mongodb, SQL, Github </ListParagraph> */}
        <ul>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Python</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Javascript</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Typescript</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Rust</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Node js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Mongodb</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>SQL</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Github</li>
        </ul>
      </ListContainer>
    </ListItem>
    <ListItem style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"10px"}}>
      <DiRust size="3rem" />
      <ListContainer>
        <ListTitle>Blockchain</ListTitle>
        {/* <ListParagraph>Solidity, Web3 js, Ether js, Web3 py, Truffle , Hardhat, Brownie, Ganache, Remix, Geth</ListParagraph> */}
        <ul>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Solidity</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Web3 js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Ether js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Web3 py</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Truffle</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Hardhat</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Brownie</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Ganache</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Remix</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Geth</li>
        </ul>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
