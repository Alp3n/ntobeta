import { PrismicRichText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import ModalWrapper from './modal-wrapper';
import styled from '@emotion/styled';
import Image from './image';
const AlbumModal = ({ setIsOpen, item, nextItem, previouseItem }) => {
  console.log(item);
  if (!item) return null;
  return (
    <ModalWrapper
      setIsOpen={setIsOpen}
      item={item}
      nextItem={nextItem}
      previouseItem={previouseItem}
    >
      <StyledContent>
        {/* <StyledImage>
          <Image
            src={item.image.url}
            alt={item.image.alt}
            layout='responsive'
            width={item.image.dimensions.width}
            height={item.image.dimensions.height}
            quality={100}
          />
        </StyledImage> */}
        <StyledMobileImage>
          <Image
            src={prismicH.asImageSrc(item.image.mobile, {
              w: undefined,
              h: undefined,
            })}
            alt={item.image.alt}
            layout='responsive'
            width={item.image.mobile.dimensions.width}
            height={item.image.mobile.dimensions.height}
            quality={85}
            priority
          />
        </StyledMobileImage>
        <StyledDesktopImage>
          <Image
            src={prismicH.asImageSrc(item.image, {
              w: undefined,
              h: undefined,
            })}
            alt={item.image.alt}
            width={item.image.dimensions.width}
            height={item.image.dimensions.height}
            layout='responsive'
            quality={85}
            priority
          />
        </StyledDesktopImage>
        <PrismicRichText
          field={item.description}
          components={{
            paragraph: ({ children }) => (
              <StyledDescription>{children}</StyledDescription>
            ),
          }}
        />
      </StyledContent>
    </ModalWrapper>
  );
};

export default AlbumModal;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #707070;
  padding: 5%;
  margin-top: 25%;
  /* margin-bottom: 50px; */
  @media only screen and (min-width: 640px) {
    padding: unset;
    text-align: center;
    border: unset;
    border-bottom: 1px solid #707070;
    padding-bottom: 32px;
    margin: unset;
    margin-bottom: 1rem;
  }
`;

const StyledDescription = styled.p`
  grid-area: description;
  color: #1a2c42;
  @media only screen and (min-width: 640px) {
    font-size: 22px;
    height: 56px;
  }
`;

// const StyledImage = styled.div`
//   grid-area: image;
//   /* width: 100%; */
//   margin-bottom: 44px;
//   min-width: 60vw;
//   /* max-width: 1100px; */
//
// `;

const StyledImage = styled(Image)`
  /* width: 100%; */

  /* min-width: 60vw; */
  /* max-width: 1100px; */
`;

const StyledMobileImage = styled.div`
  display: none;
  @media only screen and (max-width: 640px) {
    grid-area: image;
    display: block;
    margin-bottom: 44px;
    min-width: 60vw;
  }
`;

const StyledDesktopImage = styled.div`
  display: none;
  @media only screen and (min-width: 641px) {
    grid-area: image;
    display: block;
    min-width: 60vw;
    margin-bottom: 44px;
  }
`;
