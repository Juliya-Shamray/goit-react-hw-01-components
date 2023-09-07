import { styled } from 'styled-components';

export const StyledSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

export const StyledLiItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;
  padding: 20px;
  flex-shrink: 0;

  background-color: ${props => props.$bg};
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled.h2`
  border-top: 1px solid black;
  padding: 20px 0;
  border-right: 1px solid black;
  border-left: 1px solid black;

  font-weight: bold;
  text-align: center;
`;
