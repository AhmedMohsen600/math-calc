import styled from 'styled-components/macro';

export const Container = styled.header`
  display: flex;
  height: 10vh;
  background: #e0e0e0;
  box-shadow: 50px 50px 89px #b8b8b8, -50px -50px 89px #ffffff;
`;

export const Logo = styled.h1`
  font-size: 40px;
`;

export const Nav = styled.nav`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const TextLink = styled.li`
  font-size: 20px;
  color: ${({ active }) => (active ? 'red' : 'black')};
  list-style: none;
`;
