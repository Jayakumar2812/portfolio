import React from 'react';
import { DiFirebase, DiReact, DiRust } from 'react-icons/di';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText style ={{  color: "#FFFFFF"}} >
    Tech stack
  </SectionText>
  <List>
    <ListItem style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"10px"}}>
      <DiRust size="3rem" />
      <ListContainer>
        <ListTitle>Languages</ListTitle>
        {/* <ListParagraph>React js,Next js, HTML5, CSS3</ListParagraph> */}
        <ul>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Solidity</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Yul</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Rust</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Python</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Javascript</li>
        

        </ul>
      </ListContainer>
    </ListItem>
    <ListItem style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"10px"}}>
      <DiReact size="3rem" />
      <ListContainer >
        <ListTitle>FrameWorks</ListTitle>
        {/* <ListParagraph>Python, Javascript, Typescript, Rust, Node js, Mongodb, SQL, Github </ListParagraph> */}
        <ul>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Next js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Node js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>React js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Ether js</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Web3 js</li>
        </ul>
      </ListContainer>
    </ListItem>
    <ListItem style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"10px"}}>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        {/* <ListParagraph>Solidity, Web3 js, Ether js, Web3 py, Truffle , Hardhat, Brownie, Ganache, Remix, Geth</ListParagraph> */}
        <ul>
        {/* <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Solidity</li> */}
        {/* <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Web3 js</li> */}
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Truffle</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Hardhat</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Remix</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Foundry</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Slither</li>
        <li style={{listStyleType:"disc" ,listStylePosition:"inside" }}>Echdina</li>
        </ul>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
