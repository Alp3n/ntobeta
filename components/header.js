import { useState } from 'react';
import styled from '@emotion/styled';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { linkResolver } from '../prismicio';
import Bounded from './bounded';
import Image from './image';
import Locale from './locale';

export default function Header({ header, alternateLanguages = [] }) {
  const [isOpen, setOpen] = useState('initial');
  const handleMenu = () => {
    if (isOpen === 'initial') setOpen('open');
    if (isOpen === 'open') setOpen('closed');
    if (isOpen === 'closed') setOpen('open');
  };
  return (
    <>
      <StyledBounded as='header'>
        <StyledNav>
          <StyledUL>
            {header.links.map((item, i) => (
              <li key={i}>
                <StyledLink href={item.linkURL}>
                  <PrismicRichText field={item.linkLabel} />
                </StyledLink>
              </li>
            ))}
            {alternateLanguages.map((lang) => (
              <li key={lang.lang}>
                <PrismicLink
                  href={`${lang.lang}`}
                  locale={lang.lang}
                  target='_self'
                >
                  <span className='sr-only'>{lang.lang}</span>
                  <Locale lang={lang.lang} />
                </PrismicLink>
              </li>
            ))}
          </StyledUL>
        </StyledNav>
        <StyledLogoWrapper href={``}>
          <StyledLogo>
            <Image
              src={header.logo.url}
              layout='fill'
              alt={header.logo.altText}
            />
          </StyledLogo>
          <PrismicRichText field={header.websiteName} />
        </StyledLogoWrapper>
        <MenuButton onClick={handleMenu} className={isOpen}>
          <span />
          <span />
          <span />
          <span />
        </MenuButton>
      </StyledBounded>

      <StyledMenu className={isOpen}>
        <StyledMenuLinks>
          {header.links.map((item, i) => (
            <StyledLink href={item.linkURL} key={i} onClick={handleMenu}>
              <PrismicRichText field={item.linkLabel} />
            </StyledLink>
          ))}
        </StyledMenuLinks>

        {alternateLanguages.map((lang) => (
          <li key={lang.lang}>
            <PrismicLink
              href={`${lang.lang}`}
              locale={lang.lang}
              target='_self'
            >
              <span className='sr-only'>{lang.lang}</span>
              <Locale lang={lang.lang} />
            </PrismicLink>
          </li>
        ))}
      </StyledMenu>
    </>
  );
}

// 1016px mobile header
const StyledBounded = styled(Bounded)`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  margin-bottom: 17px;
  z-index: 3;
  @media only screen and (min-width: 1102px) {
    margin-bottom: 34px;
  }
  > div {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'logo menuButton';
    align-items: center;
    height: 74px;
    z-index: 99;
    border-bottom: 1px solid #707070;
    @media only screen and (min-width: 1102px) {
      grid-template-columns: 30% 70%;
      grid-template-areas: 'logo nav';
      height: 90px;
      justify-content: space-between;
    }
  }
`;

const StyledNav = styled.nav`
  display: none;
  @media only screen and (min-width: 1102px) {
    display: block;
    place-self: end;
  }
`;

const StyledUL = styled.ul`
  margin: 0;
  padding: 0;
  li {
    padding: 0;
    margin: 0;
    height: 31px;
  }
  @media only screen and (min-width: 1102px) {
    height: 90px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    place-items: center;
    grid-area: nav;
    gap: 30px;
  }
`;

const StyledLink = styled.a`
  p {
    text-transform: uppercase;
  }

  @media only screen and (min-width: 1102px) {
    :hover {
      p {
        padding-bottom: 31px;
        border-bottom: 4px solid #2e4f78;
        color: #5d7694;
      }
    }
  }
`;

const StyledLogoWrapper = styled.a`
  position: relative;
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: center;
  grid-area: logo;
  gap: 1rem;

  p {
    display: none;
    font-weight: 400;
  }
  @media only screen and (min-width: 1102px) {
    grid-template-columns: 42px 1fr;
    p {
      display: block;
      font-weight: 400;
    }
  }
`;
const StyledLogo = styled.div`
  position: relative;
  /* display: flex; */
  width: 36px;
  height: 36px;

  @media only screen and (min-width: 1102px) {
    width: 42px;
    height: 42px;
  }
`;

const MenuButton = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  grid-area: menuButton;
  justify-self: end;
  top: 8px;
  cursor: pointer;

  &:active {
    background-color: transparent;
  }
  &:focus {
    background-color: transparent;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-of-type(1) {
    top: 0px;
  }

  span:nth-of-type(2),
  span:nth-of-type(3) {
    top: 8px;
  }

  span:nth-of-type(4) {
    top: 16px;
  }

  &.open span:nth-of-type(1) {
    top: 8px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-of-type(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-of-type(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-of-type(4) {
    top: 8px;
    width: 0%;
    left: 50%;
  }

  @media only screen and (min-width: 1102px) {
    display: none;
  }
`;

const StyledMenu = styled.nav`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  background-color: #fff;
  padding: 15px 5%;
  width: 100%;
  box-shadow: 0 3px 10px -8px rgb(0 0 0 / 0.2);
  z-index: 2;

  &.initial {
    top: -600px;
  }
  &.open {
    animation: slideDown 0.3s ease-in-out forwards;
  }
  &.closed {
    animation: slideUp 0.3s ease-in-out forwards;
  }

  @keyframes slideDown {
    0% {
      top: -40%;
      left: 0;
    }
    100% {
      left: 0;
      top: 74px;
    }
  }
  @keyframes slideUp {
    0% {
      top: 74px;
      left: 0;
    }
    100% {
      top: -100%;
      left: 0;
    }
  }

  @media only screen and (min-width: 1102px) {
    display: none;
  }
`;

const StyledMenuLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;
