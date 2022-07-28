import { PrismicRichText } from '@prismicio/react';
import styled from '@emotion/styled';
import Image from './image';
import ModalWrapper from './modal-wrapper';

const ProductModal = ({ setIsOpen, item, nextItem, previouseItem }) => {
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
            src={item.data.image.url}
            alt={item.data.image.alt}
            layout='responsive'
            width={item.data.image.dimensions.width}
            height={item.data.image.dimensions.height}
          />
        </StyledImage>
        <StyledTitle>
          <PrismicRichText field={item.data.productName} />
        </StyledTitle>
        <PrismicRichText
          field={item.data.productModel}
          components={{
            paragraph: ({ children }) => <StyledModel>{children}</StyledModel>,
          }}
        />
        <PrismicRichText
          field={item.data.productDescription}
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

export default ProductModal;
const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'image'
    'title'
    'model'
    'description';
  gap: 1rem;
  grid-area: body;
  padding: 5%;
  border: 1px solid #707070;
  background-color: white;
  @media only screen and (max-width: 1101px) {
    padding-bottom: 15%;
    margin-bottom: 5%;
    height: auto;
  }
  @media only screen and (min-width: 1102px) {
    gap: 2rem;
    padding: unset;
    max-width: 1150px;
    grid-template-columns: clamp(30%, 40%, 50%) 500px;
    grid-template-areas:
      'title image'
      'model image'
      'description image';
    border: unset;
    border-bottom: 1px solid #707070;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
  }
`;

const StyledTitle = styled.span`
  > p {
    text-transform: uppercase;
    font-size: 25px;
  }
  grid-area: title;
  @media only screen and (min-width: 640px) {
    > p {
      text-transform: uppercase;
      font-size: 40px;
      width: 14ch;
    }
  }
`;

const StyledDescription = styled.p`
  grid-area: description;
  color: #1a2c42;
  @media only screen and (min-width: 640px) {
    font-size: 22px;
  }
`;

const StyledModel = styled.p`
  grid-area: model;
  font-size: 20px;
  font-style: italic;
  @media only screen and (min-width: 640px) {
    font-size: 30px;
  }
`;

const StyledImage = styled.div`
  grid-area: image;
  max-width: 400px;
  /* margin: 0 50%; */
  @media only screen and (min-width: 1102px) {
    margin-left: calc(50% - 150px);
  }
`;
