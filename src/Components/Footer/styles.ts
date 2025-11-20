import styled from "styled-components";

export const FooterContainer = styled.footer<{ bg: string; isPhone: boolean }>`
  width: 100%;
  padding-block: 20px;
  padding-inline: 100px;
  background-color: ${(props) => props.bg};
  display: flex;
  flex-direction: ${({ isPhone }) => (isPhone ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FooterText = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconLink = styled.a<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 1.5rem;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    color: #00acee;
  }
`;
