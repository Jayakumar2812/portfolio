import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail,AiFillTwitterCircle } from 'react-icons/ai';
import {SiDiscord} from "react-icons/si";
import {ImBlogger} from "react-icons/im";
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
      <SocialIcons target="_blank" href='https://github.com/Jayakumar2812/Jayakumar2812'>
        <AiFillGithub size= "3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href='https://twitter.com/Jayakumar2812' >
        <AiFillTwitterCircle size= "3rem" />
      </SocialIcons> 
      <SocialIcons target="_blank" href='http://www.linkedin.com/in/jayakumar-sathayadhran-8b70a819b' >
        <AiFillLinkedin size= "3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href='https://discord.gg/TA4pFR8V' >
        <SiDiscord size= "3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href='mailto:jayakumargowtham2812@gmail.com' >
        <AiFillMail size= "3rem" />
      </SocialIcons>    
      <SocialIcons target="_blank" href='https://medium.com/@jayakumargowtham2812' >
        <ImBlogger size= "3rem" />
      </SocialIcons>

      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
