import React from 'react';
import styled from '@emotion/styled';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Bounded from '../../components/bounded';
import Image from '../../components/image';

const FullWidthWithImage = ({ slice }) => {
  console.log(slice);
  const backgroundImage = slice.primary.backgroundImage;
  return (
    <StyledSection>
      <StyledBounded id={`${slice.primary.sliceID}`}>
        {slice.variation === 'withImage' ? (
          <StyledTopImage></StyledTopImage>
        ) : null}
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => <StyledTitle>{children}</StyledTitle>,
          }}
        />
      </StyledBounded>
      {prismicH.isFilled.image(backgroundImage) ? (
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
      ) : null}
    </StyledSection>
  );
};

export default FullWidthWithImage;

const StyledSection = styled.section`
  position: relative;
  display: grid;
  place-content: center;
  height: 80vh;
  margin-bottom: 64px;
  h1 {
    font-size: 34px;
    font-weight: 300;
  }
  span {
    height: 300px;
  }
  @media only screen and (max-width: 639px) {
    span {
      height: 300px;
    }
  }
  @media only screen and (min-width: 640px) {
    /* padding: 3rem 0; */
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
  /* height: 290px; */
`;

const StyledTopImage = styled.div`
  height: 300px;
`;

const StyledBounded = styled(Bounded)`
  z-index: 1;
  div.innerDiv {
    padding: 64px 0;
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
        font-size: 70px;
        width: 85%;
      }
    }
  }
`;

const StyledTitle = styled.h1`
  grid-area: title;
`;
