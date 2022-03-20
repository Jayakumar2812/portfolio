import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import {SiDiscord} from "react-icons/si"
import Button from '../../styles/GlobalComponents/Button';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkList, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            " To hell with circumstances, I create opportunities." - Bruce Lee.
          </Slogan>
        </CompanyContainer>
      <SocialContainer>
      <SocialIcons href='https://github.com/Jayakumar2812/Jayakumar2812'>
        <AiFillGithub size= "3rem" />
      </SocialIcons>
      <SocialIcons href='http://www.linkedin.com/in/jayakumar-sathayadhran-8b70a819b' >
        <AiFillLinkedin size= "3rem" />
      </SocialIcons>
      <SocialIcons href='https://discord.gg/64KUJkM3Ak' >
        <SiDiscord size= "3rem" />
      </SocialIcons>
      <SocialIcons href='mailto:jayakumargowtham2812@gmail.com' >
        <AiFillMail size= "3rem" />
      </SocialIcons>    
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
