import { styled } from 'styled-components';
export const StyledList = styled.ul`
  margin: 50px auto;
  width: 350px;
`;

export const StyledLiItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 5px;
  padding: 10px 30px;

  box-shadow: 3px 1px 5px 0 #556b6f;
`;
export const StyledTitle = styled.p`
  font-weight: 600;
`;

export const StyledIsOnline = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$status ? 'green' : 'red')};
`;
