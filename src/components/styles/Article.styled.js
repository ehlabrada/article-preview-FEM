import styled from "styled-components";

export const ArticleWrapper = styled.section`
  width: 600px;

  border: none;
  border-radius: 10px;
  background-color: red;

  display: flex;
  align-items: stretch;

  @media screen and (max-width: 768px) {
    width: 330px;
    height: 500px;

    border-radius: 10px;

    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  width: 40%;

  img {
    width: 100%;
    height: 100%;

    border-radius: 10px 0 0 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40%;

    img {
      height: 100%;

      border-radius: 10px 10px 0 0;
    }
  }
`;

export const ArticleInfoWrapper = styled.div`
  width: 60%;

  padding: 25px;
  border-radius: 0 10px 10px 0;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60%;
    /* gap: 0; */
    border-radius: 0 0 10px 10px;
  }
`;

export const ArticleTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bolder;
`;

export const ArticleSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
`;

export const ArticleAuthorInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorAvatarAndName = styled.div`
  display: flex;
`;

export const AuthorAvatar = styled.img`
  width: 30px;

  border-radius: 50%;
  border: none;
  margin-right: 10px;
`;

export const AuthorName = styled.div`
  p {
    font-size: 0.9rem;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.desaturatedDarkBlue};
  }
`;
export const ShareButton = styled.button`
  width: 25px;
  height: 25px;

  background-color: ${({ theme }) => theme.colors.grayishBlue};
  opacity: 0.8;

  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;

  position: relative;

  &.active {
    background-color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
    svg {
      & path {
        fill: ${({ theme }) => theme.colors.lightGrayishBlue};
      }
    }
  }
`;
