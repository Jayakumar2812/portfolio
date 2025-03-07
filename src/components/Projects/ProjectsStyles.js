import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-radius: 8px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 3rem;
  place-items: center;
`;

export const BlogCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  background: #1e253a;
  padding: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ddd;
  margin-bottom: 15px;
`;

export const UtilityList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ExternalLinks = styled.a`
  color: white;
  background: #6b3030;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background 0.3s;
  font-size: 1.2rem;

  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export default {
  Img,
  GridContainer,
  BlogCard,
  TitleContent,
  HeaderThree,
  Hr,
  CardInfo,
  UtilityList,
  ExternalLinks,
  TagList,
  Tag,
};
