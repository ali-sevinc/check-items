import styled from "styled-components";
import { Rowdies } from "next/font/google";

import { listIcon } from "../../public/icon";

const StyledHeader = styled.header`
  background-color: var(--color-orange-500);
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 72px;
  justify-content: center;
  font-family: var(--font-rodwies);
  @media (max-width: 900px) {
    span {
      display: none;
    }
  }
`;

const Icon = styled.span`
  padding: 1.5rem 0 0 0;
`;
const Icon2 = styled.span`
  padding: 1.5rem 0 0 0;
  transform: rotate(180deg);
`;

const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-rodwies",
});

function MainHeader() {
  return (
    <StyledHeader className={rowdies.variable}>
      <H1>
        <Icon>{listIcon}</Icon> Check it <Icon2>{listIcon}</Icon2>
      </H1>
    </StyledHeader>
  );
}

export default MainHeader;
