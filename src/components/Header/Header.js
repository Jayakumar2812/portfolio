import Link from 'next/link';
import React from 'react';
import { AiFillGithub,AiFillLinkedin,AiFillMail,AiFillTwitterCircle} from 'react-icons/ai';
import {SiDiscord} from "react-icons/si"
import { DiCssdeck } from 'react-icons/di';
import {ImBlogger} from "react-icons/im";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display : "flex", alignItems : "center", color: "white", marginBottom:"18px" }}>
          <DiCssdeck size = "3rem" /> <Span> Portfolio </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink style={{color:"rgb(0, 0, 230)"}}>
          Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink style={{color:"rgb(0, 0, 230)"}} >
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
          <NavLink style={{color:"rgb(0, 0, 230)"}} >
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3 >
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
    </Div3>
  </Container>

);

export default Header;
