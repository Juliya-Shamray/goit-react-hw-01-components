import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  color: ${props => props.color || 'black'};
  font-family: 'Roboto', sans-serif;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  }
  
h1,h2,h3,h4 p, ol, ul {
  margin: 0;
  padding: 0;
}

ol, ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
