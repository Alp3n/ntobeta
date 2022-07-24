import React from 'react';
import styled from '@emotion/styled';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Bounded from '../../components/bounded';
import Image from '../../components/image';

const FullWidthDefault = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;
  return (
    <StyledSection>
      <StyledBounded id={`${slice.primary.sliceID}`}>
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => <h1>{children}</h1>,
          }}
        />
        <StyledGrid>
          {slice.items.map((item, i) => (
            <PrismicRichText key={i} field={item.paragraph} />
          ))}
        </StyledGrid>
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
        />
      ) : null}
    </StyledSection>
  );
};

export default FullWidthDefault;

const StyledSection = styled.section`
  position: relative;
  display: grid;
  color: white;

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
    place-content: center;

    h1 {
      color: white;
      font-size: 44px;
      width: 60%;
      line-height: 70px;
    }
  }
  @media only screen and (min-width: 1712px) {
  }
`;

const StyledImage = styled(Image)`
  position: relative;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  z-index: -1;
`;

const StyledBounded = styled(Bounded)`
  z-index: 1;
  display: grid;

  > div.innerDiv {
    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
    place-self: center;
    gap: 40px;
    padding: 64px 0;
    h1 {
      color: white;
    }
  }
  @media only screen and (min-width: 640px) {
    > div.innerDiv {
      padding: 150px 0;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 22px;
  line-height: 33px;
  p {
    color: white;
  }
`;
