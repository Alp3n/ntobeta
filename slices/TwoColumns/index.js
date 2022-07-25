import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PrismicRichText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import PortalModal from '../../components/portal-modal';
import ProductModal from '../../components/product-modal';
import Bounded from '../../components/bounded';

const TwoColumns = ({ slice, context }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const nextItem = () => {
    let currentItem = context.products.indexOf(selectedItem);
    if (currentItem === context.products.length - 1) {
      setSelectedItem(context.products[0]);
    } else setSelectedItem(context.products[currentItem + 1]);
  };

  const previouseItem = () => {
    let currentItem = context.products.indexOf(selectedItem);
    if (currentItem === 0) {
      setSelectedItem(context.products[context.products.length - 1]);
    } else setSelectedItem(context.products[currentItem - 1]);
  };

  return (
    <>
      <StyledBounded as='section' id={`${slice.primary.sliceID}`}>
        <StyledLeftColumn>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => <StyledTitle>{children}</StyledTitle>,
            }}
          />
          <StyledGrid>
            {slice.items.map((item, i) => (
              <PrismicRichText
                key={i}
                field={item.paragraph}
                components={{
                  paragraph: ({ children }) => <p>{children}</p>,
                }}
              />
            ))}
          </StyledGrid>
        </StyledLeftColumn>
        <StyledRightColumn>
          {prismicH.isFilled.group(context.products)
            ? context.products.map((item) => (
                <StyledProduct key={item.uid} onClick={() => openModal(item)}>
                  <PrismicRichText
                    field={item.data.productName}
                    components={{
                      paragraph: ({ children }) => (
                        <p className='name'>{children}</p>
                      ),
                    }}
                  />
                  <StyledArrowBox>
                    <svg
                      width='24'
                      height='24'
                      xmlns='http://www.w3.org/2000/svg'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    >
                      <path d='M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z' />
                    </svg>
                  </StyledArrowBox>
                </StyledProduct>
              ))
            : null}
        </StyledRightColumn>
      </StyledBounded>
      <PortalModal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ProductModal
          setIsOpen={setModalIsOpen}
          item={selectedItem}
          nextItem={nextItem}
          previouseItem={previouseItem}
        />
      </PortalModal>
    </>
  );
};

export default TwoColumns;

const StyledBounded = styled(Bounded)`
  div.innerDiv {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 64px 0;
  }
  @media only screen and (min-width: 640px) {
    div.innerDiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 150px 0;
    }
  }
`;

const StyledTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 38px;
  text-transform: uppercase;
  @media only screen and (min-width: 640px) {
    font-size: 60px;
    line-height: 60px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;

  @media only screen and (min-width: 640px) {
    width: 80%;
  }
`;
const StyledLeftColumn = styled.div`
  line-height: 30px;
  p {
    color: #1a2c42;
  }
  @media only screen and (min-width: 640px) {
    line-height: 35px;
  }
`;
const StyledRightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  align-content: space-between;
  @media only screen and (min-width: 640px) {
    border-left: 1px solid #707070;
    padding-left: 10%;
  }
`;

const StyledProduct = styled.div`
  display: grid;
  grid-template-columns: 90% 1fr 28px;
  grid-template-areas: 'name . arrow';
  p.name {
    line-height: 28px;
    color: #1a2c42;
  }
  &:hover p.name {
    cursor: pointer;
    color: #2e4f78;
    opacity: 0.7;
  }
  &:hover div {
    cursor: pointer;
    opacity: 0.7;
  }

  @media only screen and (min-width: 640px) {
    grid-template-columns: 85% 1fr 38px;
    p {
      grid-area: name;
      /* font-size: 22px; */
      line-height: 42px;
      width: 80%;
    }
  }
`;

const StyledArrowBox = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 28px;
  background-color: #2e4f78;
  grid-area: arrow;
  padding: 6px;

  svg {
    transform: scale(0.5);
  }
  svg > path {
    stroke: white;
  }
  @media only screen and (min-width: 640px) {
    svg {
      transform: scale(0.7);
    }
    height: 38px;
  }
`;
