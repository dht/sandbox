import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 10px solid black;
  flex: 1;
  display: flex;
`;

export const Menu = styled.div`
  position: fixed;
  bottom: 45px;
  right: 25px;
  width: 200px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 999999;
`;

export const A = styled.a`
  color: cyan;
  margin: 5px;
`;
