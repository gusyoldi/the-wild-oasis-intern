import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import { device } from "../styles/helpers";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media ${device.mobile} {
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    gap: 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
  }
`;

const MainNavWrapper = styled.div`
  display: none;

  @media ${device.mobile} {
    display: block;
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
  }
`;

const UserAvatarWrapper = styled.div`
  @media ${device.mobile} {
    grid-column: 1;
    grid-row: 1;
  }
`;

const HeaderMenuWrapper = styled.div`
  @media ${device.mobile} {
    grid-column: 3;
    grid-row: 1;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatarWrapper>
        <UserAvatar />
      </UserAvatarWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <HeaderMenuWrapper>
        <HeaderMenu />
      </HeaderMenuWrapper>
      <MainNavWrapper>
        <MainNav />
      </MainNavWrapper>
    </StyledHeader>
  );
}

export default Header;
