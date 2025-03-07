import styled from 'styled-components';

export const AboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  font-family: "Inter", sans-serif;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  border-bottom: 3px solid #6a00ff;
  display: inline-block;
  padding-bottom: 5px;
  background: linear-gradient(90deg, #ffffff, #6a00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BulletList = styled.ul`
  list-style-type: disc;
  margin: 15px 0;
  padding-left: 20px;

  li {
    margin-bottom: 10px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const SectionText = styled.p`
  font-size: 18px;
  color: #d4d4d4;
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: left;
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  gap: 20px;
  padding: 20px 0;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  width: 100%;
  align-items: center;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  display: flex;
  flex-direction: row;
  min-width: max-content;
`;

export const CarouselItem = styled.div`
  background: #1E253A;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  flex: 0 0 auto;
  min-width: 270px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.1);
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 8px;
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.85);
  padding-right: 16px;
  transition: color 0.3s ease-in-out;
  margin-top: 5px;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const CarouselButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CarouselButton = styled.button`
  background: ${({ active, index }) => (active === index ? `#6A00FF` : `#444`)};
  padding: 6px;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
    background: #6A00FF;
  }
  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
