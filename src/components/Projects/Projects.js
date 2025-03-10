/* Updated Projects.js */
import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const reorderedProjects = [
  ...projects.filter(p => p.title.includes('Multimon')),
  ...projects.filter(p => p.title.includes('EVM Slot Reader')),
  ...projects.filter(p => p.title.includes('POS Blockchain')),
  ...projects.filter(p => p.title.includes('NFT Marketplace')),
  ...projects.filter(p => p.title.includes('Marketplace (Online Course Platform)')),
  ...projects.filter(p => p.title.includes('Stop loss')),
  ...projects.filter(p => p.title.includes('Slice pay')),
  ...projects.filter(p => p.title.includes('Edu-Lend')),
  ...projects.filter(p => !['Multimon', 'EVM Slot Reader', 'POS Blockchain', 'NFT Marketplace'].includes(p.title))
];

const Projects = () => (
  <Section nopadding id="projects"> 
    <SectionDivider/>
    <br/>
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {reorderedProjects.map(({id, image, description, tags, source, visit, title}) => (
        <BlogCard key={id}>
          <Img src={image} alt={title} />
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Tech Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>Code</ExternalLinks>
            {(title.includes('EVM Slot Reader') || title.includes('Multimon')) && (
              <ExternalLinks href={visit}>Live Demo</ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
