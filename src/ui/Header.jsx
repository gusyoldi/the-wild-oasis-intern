import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 769px) {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
    padding: 1.2rem 4.8rem;
    grid-template-columns: unset;
    grid-template-rows: unset;
  }
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  grid-column: 1 / -1;
  grid-row: 1;

  @media (min-width: 769px) {
    display: flex;
    gap: 2.4rem;
    grid-column: unset;
    grid-row: unset;
  }
`;

const NavBar = styled.nav`
  grid-column: 1 / -1;
  grid-row: 2;

  @media (min-width: 769px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  grid-column: 2;
  justify-self: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <TopBar>
        <UserAvatar />
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <HeaderMenu />
      </TopBar>
      <NavBar>
        <MainNav />
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
