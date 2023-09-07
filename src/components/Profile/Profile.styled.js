import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px 0 black;
  padding: 10px;
  margin-bottom: 50px;
`;

export const StyledContent = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(47, 45, 45);
`;

export const StyledParagName = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const StyledParagTag = styled.p`
  margin-bottom: 8px;
`;
export const StyledParagLocation = styled.p`
  margin-bottom: 12px;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;
export const StyledListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

export const StyledSpanLabel = styled.li`
  font-weight: 500;
`;

export const StyledSpanQuantity = styled.li`
  font-weight: bold;
`;
