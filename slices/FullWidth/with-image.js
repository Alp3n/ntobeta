import React from 'react';
import styled from '@emotion/styled';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Bounded from '../../components/bounded';
import Image from '../../components/image';

const FullWidthWithImage = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;
  // const foregroundImage = slice.primary.topImage;

  return (
    <StyledSection>
      <StyledBounded id={`${slice.primary.sliceID}`}>
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => <StyledTitle>{children}</StyledTitle>,
          }}
        />
        {/* {slice.variation === 'withImage' ? (
          <StyledTopImage>
            <StyledImage
              src={prismicH.asImageSrc(foregroundImage)}
              width={foregroundImage.dimensions.width}
              height={foregroundImage.dimensions.height}
              alt=''
              layout='responsive'
              quality={100}
              priority
            />
          </StyledTopImage>
        ) : null} */}
      </StyledBounded>

      <StyledMobileImage>
        <StyledImage
          src={prismicH.asImageSrc(backgroundImage.mobile, {
            w: undefined,
            h: undefined,
          })}
          alt=''
          layout='responsive'
          width={backgroundImage.mobile.dimensions.width}
          height={backgroundImage.mobile.dimensions.height}
          quality={85}
          priority
        />
      </StyledMobileImage>
      <StyledDesktopImage>
        <StyledImage
          src={prismicH.asImageSrc(backgroundImage, {
            w: undefined,
            h: undefined,
          })}
          alt=''
          layout='fill'
          quality={85}
          priority
        />
      </StyledDesktopImage>
    </StyledSection>
  );
};

export default FullWidthWithImage;

const StyledSection = styled.section`
  position: relative;
  display: grid;
  place-content: center;
  /* height: 80vh; */
  margin-bottom: 64px;
  h1 {
    font-size: 34px;
    font-weight: 300;
  }
  span {
    height: 300px;
  }
  @media only screen and (max-width: 640px) {
    grid-template-areas:
      'image'
      'title';
    span {
      height: 300px;
    }
  }
  @media only screen and (min-width: 641px) {
    height: 580px;
    margin-bottom: 100px;
  }
  @media only screen and (min-width: 1712px) {
    height: 640px;
  }
`;

const StyledImage = styled(Image)`
  position: relative;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  z-index: -1;
`;

const StyledTopImage = styled.div`
  height: 300px;
`;

const StyledMobileImage = styled.div`
  display: none;
  @media only screen and (max-width: 640px) {
    display: block;
    grid-area: image;
  }
`;

const StyledDesktopImage = styled.div`
  display: none;
  @media only screen and (min-width: 641px) {
    display: block;
  }
`;

const StyledBounded = styled(Bounded)`
  z-index: 1;
  grid-area: title;
  div.innerDiv {
    padding: 22px 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'title';
  }
  @media only screen and (min-width: 640px) {
    div.innerDiv {
      grid-template-columns: 1fr 1fr;
      padding: 150px 0;
      grid-template-areas: 'title image';
      h1 {
        font-size: 62px;
        width: 85%;
      }
    }
  }
`;

const StyledTitle = styled.h1`
  grid-area: title;
  color: #2d4e75;
`;
