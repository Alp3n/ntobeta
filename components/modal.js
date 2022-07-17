import { PrismicLink, PrismicRichText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import styled from '@emotion/styled';
import Image from './image';

const MyModal = ({ setIsOpen, item, nextItem, previouseItem }) => {
  // if (!item) return null;
  return (
    <ModalBody>
      <StyledImage>
        <Image
          src={item.data.image.url}
          alt=''
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
      <ButtonsWrapper>
        <ArrowButton
          onClick={() => previouseItem()}
          color={'black'}
        >{`<`}</ArrowButton>
        <ArrowButton
          onClick={() => nextItem()}
          color={'white'}
        >{`>`}</ArrowButton>
        <CloseButton onClick={() => setIsOpen(false)}>x</CloseButton>
      </ButtonsWrapper>
    </ModalBody>
  );
};

export default MyModal;

const ModalBody = styled.div`
  display: grid;
  grid-template-areas:
    'image'
    'title'
    'model'
    'description'
    'buttons';

  gap: 2rem;
  z-index: 99;
  @media only screen and (min-width: 1102px) {
    justify-items: start;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title image'
      'model image'
      'description image'
      'buttons buttons';
    gap: 3rem 6rem;
  }
`;

const ButtonsWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 60px 60px 60px;
  place-self: center;
  grid-area: buttons;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.2);
  background: white;
  @media only screen and (min-width: 1102px) {
    grid-template-columns: 60px 60px 60px;
    width: 180px;
  }
`;
const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 1102px) {
    width: 60px;
    padding: 8px;

    :hover {
      cursor: pointer;
      background-color: #b1b1b1;
    }
  }
`;
const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #2e4f78;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  border: none;

  @media only screen and (min-width: 1102px) {
    position: relative;
    width: 100%;
    /* padding: 3rem; */
    :hover {
      background-color: #b1b1b1;
      cursor: pointer;
    }
  }
`;

const StyledTitle = styled.span`
  > p {
    text-transform: uppercase;
    font-size: 40px;
    width: 14ch;
  }
  grid-area: title;
  @media only screen and (min-width: 640px) {
    > p {
      text-transform: uppercase;
      font-size: 60px;
      width: 14ch;
    }
  }
`;

const StyledDescription = styled.p`
  grid-area: description;
  width: 70%;
  @media only screen and (min-width: 640px) {
    font-size: 22px;
    width: 75%;
  }
`;

const StyledModel = styled.p`
  grid-area: model;
  font-size: 30px;
  font-style: italic;
  @media only screen and (min-width: 640px) {
    font-size: 40px;
  }
`;

const StyledImage = styled.div`
  position: relative;
  grid-area: image;
  width: 100%;
  place-self: start end;
  > span {
    object-fit: cover;
  }

  @media only screen and (min-width: 1102px) {
    max-height: 600px;
    max-width: 700px;
  }
`;
