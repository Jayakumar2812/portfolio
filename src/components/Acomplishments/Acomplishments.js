import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { certi } from '../../constants/constants';



const Acomplishments = () => (
<Section>
  <SectionTitle>Certifications</SectionTitle>
  <Boxes>
    {certi.map((card,index)=>(
      <Box key={index}>
        <BoxNum>
          {card.name}
        </BoxNum>
        <BoxText>{card.provider}</BoxText>
      </Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
