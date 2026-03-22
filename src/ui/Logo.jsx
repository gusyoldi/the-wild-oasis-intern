import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { device } from "../styles/helpers";

const StyledLogo = styled.div`
  text-align: center;

  @media ${device.mobile} {
    justify-self: flex-start;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  @media ${device.mobile} {
    height: 4rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
