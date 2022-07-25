import { PrismicRichText } from '@prismicio/react';
import ModalWrapper from './modal-wrapper';
import styled from '@emotion/styled';
import Image from './image';

const AlbumModal = ({ setIsOpen, item, nextItem, previouseItem }) => {

  if (!item) return null;
  return (
    <ModalWrapper
      setIsOpen={setIsOpen}
      item={item}
      nextItem={nextItem}
      previouseItem={previouseItem}
    >
      <StyledContent>
        <StyledImage>
          <Image
            src={item.image.url}
            alt={item.image.alt}
            layout='responsive'
            width={item.image.dimensions.width}
            height={item.image.dimensions.height}
            quality={100}
          />
        </StyledImage>
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
  margin: 50% 0;
  margin-bottom: 50px;
  @media only screen and (min-width: 640px) {
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
  width: 90%;
  color: #1a2c42;
  @media only screen and (min-width: 640px) {
    font-size: 22px;
    width: 100%;
  }
`;

const StyledImage = styled.div`
  grid-area: image;
  width: 100%;
  margin-bottom: 44px;

  > span {
    object-fit: cover;
  }

  @media only screen and (min-width: 1102px) {
    > span {
      /* min-width: 600px; */
    }
  }
`;
