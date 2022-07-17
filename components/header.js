import { useState } from 'react';
import styled from '@emotion/styled';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import Bounded from './bounded';
import Image from './image';

export default function Header({ header }) {
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
          {header.links.map((item, i) => (
            <StyledLink href={item.linkURL} key={i}>
              <PrismicRichText field={item.linkLabel} />
            </StyledLink>
          ))}
        </StyledNav>
        <StyledLogo href='/'>
          <Image
            src={header.logo.url}
            layout='fill'
            alt={header.logo.altText}
          />
          <PrismicRichText field={header.websiteName} />
        </StyledLogo>
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
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'logo nav';
      /* border-bottom: 1px solid #707070; */

      height: 90px;
    }
  }
`;

const StyledNav = styled.nav`
  display: none;
  @media only screen and (min-width: 1102px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    place-self: center end;
    /* width: 80%; */
    grid-area: nav;
    gap: 30px;
  }
`;

const StyledLink = styled.a`
  p {
    text-transform: uppercase;
    font-family: 'Helvetica Neue';
  }

  @media only screen and (min-width: 640px) {
    padding: 31px 10px;

    :hover {
      border-bottom: 3px solid #2e4f78;
    }
  }
`;

const StyledLogo = styled.a`
  position: relative;
  display: grid;
  grid-area: logo;
  width: 36px;
  height: 36px;
  > p {
    display: none;
  }

  @media only screen and (min-width: 1102px) {
    width: 42px;
    height: 40px;
    > p {
      font-size: 45px;
    }
  }
`;

const StyledSVG = styled(PrismicLink)`
  position: relative;
  width: 25px;
  height: 25px;

  :hover {
    transform: scale(1.1);
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
    top: -300px;
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
