import { Link, useLocation, Outlet } from 'react-router-dom';
import { Container, Nav, TextLink, Logo, Group } from './styles/header';
import { links } from '../../fixtures/links';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <Nav>
          <Logo>Math Magicians</Logo>
          <Group>
            {links.map(({ text, url }) => (
              <TextLink key={text} active={pathname === url}>
                <Link to={url}>{text}</Link>
              </TextLink>
            ))}
          </Group>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
}
