import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Bounded from '../../components/bounded';
import Image from '../../components/image';
import PortalModal from '../../components/portal-modal';
import AlbumModal from '../../components/album-modal';

const FullWidthCallToAction = ({ slice, context }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState(() => context?.album?.data?.album);
  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const nextItem = () => {
    let currentItem = items.indexOf(selectedItem);
    if (currentItem === items.length - 1) {
      setSelectedItem(items[0]);
    } else setSelectedItem(items[currentItem + 1]);
  };

  const previouseItem = () => {
    let currentItem = items.indexOf(selectedItem);
    if (currentItem === 0) {
      setSelectedItem(items[items.length - 1]);
    } else setSelectedItem(items[currentItem - 1]);
  };

  const backgroundImage = slice.primary.backgroundImage;

  return (
    <>
      <StyledSection>
        <StyledBounded id={`${slice.primary.sliceID}`}>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => <h1>{children}</h1>,
            }}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <StyledDescription>{children}</StyledDescription>
              ),
            }}
          />
          <StyledButton onClick={() => openModal(items[0])}>
            {slice.primary.buttonLabel}
          </StyledButton>
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

      <PortalModal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <AlbumModal
          setIsOpen={setModalIsOpen}
          item={selectedItem}
          nextItem={nextItem}
          previouseItem={previouseItem}
        />
      </PortalModal>
    </>
  );
};

export default FullWidthCallToAction;

const StyledSection = styled.section`
  display: grid;
  position: relative;
  place-content: center;
  height: auto;

  h1 {
    text-transform: uppercase;
    font-size: 34px;
    font-weight: 300;
    color: white;
  }

  @media only screen and (min-width: 640px) {
    h1 {
      font-size: 80px;
    }
  }
  @media only screen and (min-width: 1712px) {
    /* height: 640px; */
  }
`;

const StyledImage = styled(Image)`
  position: relative;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;

const StyledBounded = styled(Bounded)`
  color: white;
  z-index: 1;
  div.innerDiv {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    place-items: center;
    padding: 64px 0;
  }
  @media only screen and (min-width: 640px) {
    div.innerDiv {
      padding: 150px 0;
      gap: 44px;
    }
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  box-shadow: unset;
  text-transform: uppercase;
  font-size: 19px;
  font-weight: 300;
  font-family: 'Helvetica Neue';
  padding: 8px 36px;

  :hover {
    cursor: pointer;
    background-color: #b1b1b1;
  }

  @media only screen and (min-width: 640px) {
    font-size: 25px;
    padding: 12px 68px;
  }
`;

const StyledDescription = styled.p`
  width: 95%;
  text-align: center;
  line-height: 30px;
  color: white;
  @media only screen and (min-width: 640px) {
    line-height: 35px;
    width: 70%;
  }
`;
