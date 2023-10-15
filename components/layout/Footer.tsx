import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-orange-500);

  padding: 1rem 4rem;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    flex-direction: column;
    height: 8rem;
  }
`;

function Footer({ font }: { font: string }) {
  return (
    <StyledFooter className={font}>
      <p>&copy;Built with NextJS and Styled-Component</p>
      <a href="https://github.com/shepherdali" target="_blank">
        Click for more
      </a>
    </StyledFooter>
  );
}

export default Footer;
