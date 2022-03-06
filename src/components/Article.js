import React from "react";
import {
  ArticleAuthorInfo,
  ArticleInfoWrapper,
  ArticleSubtitle,
  ArticleTitle,
  ArticleWrapper,
  AuthorAvatar,
  AuthorAvatarAndName,
  AuthorName,
  ImgWrapper,
  ShareButton,
} from "./styles/Article.styled";

import { ReactComponent as IconFacebook } from "../images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../images/icon-pinterest.svg";

import ReactTooltip from "react-tooltip";

import articleImg from "../images/drawers.jpg";
import authorAvatar from "../images/avatar-michelle.jpg";
// import shareButtonIcon from "../images/icon-share.svg";

import { ReactComponent as ShareButtonIcon } from "../images/icon-share.svg";
import { Icon, SocialIconsWrapper } from "./styles/SocialIcons.styled";

const Article = () => {
  return (
    <ArticleWrapper>
      <ImgWrapper>
        <img src={articleImg} alt="Article Drawers" />
      </ImgWrapper>
      <ArticleInfoWrapper>
        <ArticleTitle>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </ArticleTitle>
        <ArticleSubtitle>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </ArticleSubtitle>
        <ArticleAuthorInfo>
          <AuthorAvatarAndName>
            <AuthorAvatar src={authorAvatar} alt="Author image" />
            <AuthorName>
              <p>Michelle Appleton</p>
              <span>28 jun 2020</span>
            </AuthorName>
          </AuthorAvatarAndName>
          <ShareButton data-tip data-for="buttonTooltip">
            <ShareButtonIcon />
          </ShareButton>
          <ReactTooltip
            // type="success"
            event="click"
            id="buttonTooltip"
            place="top"
            effect="solid"
          >
            <SocialIconsWrapper>
              <p>Share</p>
              <Icon>
                <IconFacebook />
              </Icon>
              <Icon>
                <IconTwitter />
              </Icon>
              <Icon>
                <IconPinterest />
              </Icon>
            </SocialIconsWrapper>
          </ReactTooltip>
        </ArticleAuthorInfo>
      </ArticleInfoWrapper>
    </ArticleWrapper>
  );
};

export default Article;
