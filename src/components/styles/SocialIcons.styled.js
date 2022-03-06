import styled from "styled-components";

export const SocialIconsWrapper = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors};

  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Icon = styled.span`
  svg {
  }
`;
